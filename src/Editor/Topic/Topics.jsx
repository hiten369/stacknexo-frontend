import React, { useContext, useEffect, useState } from 'react'
import AddCustomTopicModal from '../Modals/AddCustomTopicModal';
import Mark from 'mark.js';
import ProgressBar from "@ramonak/react-progress-bar";
import EditorContext from '../../context/EditorContext';

const Topics = () => {
    const editorContext = useContext(EditorContext);
    const { strData }=editorContext;
    const [showOverviewFlag, setShowOverviewFlag] = useState(false);
    const [topics, setTopics] = useState({});
    const [ignoredTopics, setIgnoredTopics] = useState([]);
    const [isTcExpanded, setIsTcExpanded] = useState(false);
    const [customTopic, setCustomTopic] = useState([]);

    // Handling mark js.
    useEffect(() => {
        setTimeout(() => {
            let instance = new Mark(document.querySelector('.codex-editor__redactor'));
            let stnOverviewApiData = localStorage.getItem('stnOverviewApiData');
            let markData = [];

            if (stnOverviewApiData) {
                setShowOverviewFlag(true);
                // props.setLoad(true);
                stnOverviewApiData = JSON.parse(stnOverviewApiData);
                markData = Object.keys(stnOverviewApiData.data.topics);
            }

            instance.unmark({
                done: () => {
                    instance.mark(markData, {
                        className: "mark1",
                        ignoreJoiners: true,
                        accuracy: "exactly"
                    });
                }
            });
        }, 2000);
    }, [strData]);

    useEffect(()=>{
        getOverviewApiData();
    },[]);

    // Handling topic's data, ignored data & custom topic
    const getOverviewApiData=()=>{
        let data = null;
        let stnOverviewApiData = localStorage.getItem('stnOverviewApiData');
    
        if (stnOverviewApiData) {
          setShowOverviewFlag(true);
          // props.setLoad(true);
          stnOverviewApiData = JSON.parse(stnOverviewApiData);
          data = stnOverviewApiData;
          let topicsTemp = data.data.topics;
          setTopics(topicsTemp);
          let stnIgnoredTopics = localStorage.getItem('stnIgnoredTopics');
    
          if (stnIgnoredTopics) {
            stnIgnoredTopics = JSON.parse(stnIgnoredTopics);
            for (let i of stnIgnoredTopics) {
              delete topicsTemp[Object.keys(i)[0]];
            }
            setIgnoredTopics(stnIgnoredTopics);
          }
    
          let stnCustomTopic = localStorage.getItem('stnCustomTopic');
    
          if (stnCustomTopic) {
            stnCustomTopic = JSON.parse(stnCustomTopic);
            setCustomTopic(stnCustomTopic);
          }
        }
        else {
          setShowOverviewFlag(false);
        }    
    };

    // toggle between topics and questions
    const handleOverviewClick = (e) => {
        document.querySelector('.editor-tc12-active').classList.remove('editor-tc12-active');
        e.target.classList.add('editor-tc12-active');

        if (e.target.innerText === 'Topics') {
            document.getElementById('editor-tc12-op1').style.display = 'block';
            document.getElementById('editor-tc12-op2').style.display = 'none';
        }
        else {
            document.getElementById('editor-tc12-op1').style.display = 'none';
            document.getElementById('editor-tc12-op2').style.display = 'block';
        }

        if (document.querySelector('.editor-tc-card-b')) {
            document.querySelector('.editor-tc-card-b').classList.toggle('editor-tc-card-b');
        }

        if (document.querySelector('.editor-tc-card-dis')) {
            document.querySelector('.editor-tc-card-dis').classList.toggle('editor-tc-card-dis');
        }

        if (document.querySelector('.editor-tc-card-dis1')) {
            document.querySelector('.editor-tc-card-dis1').classList.toggle('editor-tc-card-dis1');
        }

        if (isTcExpanded) {
            setIsTcExpanded(false);
            document.querySelectorAll('.editor-tc13')[0].classList.toggle('d-none');
            document.querySelectorAll('.editor-tc13')[1].classList.toggle('d-none');
            document.querySelector('.editor-main11').style.width = "75%";
            document.querySelector('.editor-tc').style.width = "25%";

            for (let i = 0; i < document.querySelectorAll('.editor-tc-card').length; i++) {
                if (document.querySelectorAll('.editor-tc-card')[i].classList.contains('d-none')) {
                    document.querySelectorAll('.editor-tc-card')[i].classList.toggle('d-none');
                }
            }

            if (document.querySelector('.editor-tc15')) {
                document.querySelector('.editor-tc15').classList.toggle('d-none');
            }
        }
    };

    // expanding the topic card
    const handleEditorTcClick = (index) => {
        setIsTcExpanded(true);
        document.querySelectorAll('.editor-tc-card')[index].classList.toggle('editor-tc-card-b');
        document.querySelectorAll('.editor-tc-card1')[index].classList.toggle('editor-tc-card-dis');
        document.querySelectorAll('.editor-tc-card2')[index].classList.toggle('editor-tc-card-dis1');
        document.querySelectorAll('.editor-tc13')[0].classList.toggle('d-none');
        document.querySelectorAll('.editor-tc13')[1].classList.toggle('d-none');
        document.querySelector('.editor-main11').style.width = "55%";
        document.querySelector('.editor-tc').style.width = "45%";
        document.querySelector('.editor-tc16').classList.toggle('d-none');

        for (let i = 0; i < document.querySelectorAll('.editor-tc-card').length; i++) {
            if (i !== index) {
                document.querySelectorAll('.editor-tc-card')[i].classList.toggle('d-none');
            }
        }

        if (document.querySelector('.editor-tc15')) {
            document.querySelector('.editor-tc15').classList.toggle('d-none');
        }
    };

    // Handle Click on back button in topic card
    const handleEditorTcBackClick = (index) => {
        setIsTcExpanded(false);
        document.querySelectorAll('.editor-tc-card')[index].classList.toggle('editor-tc-card-b');
        document.querySelectorAll('.editor-tc-card1')[index].classList.toggle('editor-tc-card-dis');
        document.querySelectorAll('.editor-tc-card2')[index].classList.toggle('editor-tc-card-dis1');
        document.querySelectorAll('.editor-tc13')[0].classList.toggle('d-none');
        document.querySelectorAll('.editor-tc13')[1].classList.toggle('d-none');
        document.querySelector('.editor-main11').style.width = "75%";
        document.querySelector('.editor-tc').style.width = "25%";
        document.querySelector('.editor-tc16').classList.toggle('d-none');

        for (let i = 0; i < document.querySelectorAll('.editor-tc-card').length; i++) {
            if (i !== index) {
                document.querySelectorAll('.editor-tc-card')[i].classList.toggle('d-none');
            }
        }

        if (document.querySelector('.editor-tc15')) {
            document.querySelector('.editor-tc15').classList.toggle('d-none');
        }
    };

    // Handle ignore click
    const ignoreTc = (index, key) => {
        setIsTcExpanded(false);
        let temp = {};
        temp[key] = topics[key];
        let stnIgnoredTopics = localStorage.getItem('stnIgnoredTopics');

        if (stnIgnoredTopics) {
            stnIgnoredTopics = JSON.parse(stnIgnoredTopics);
            stnIgnoredTopics.push(temp);
            localStorage.setItem('stnIgnoredTopics', JSON.stringify(stnIgnoredTopics));
        }
        else {
            localStorage.setItem('stnIgnoredTopics', JSON.stringify([temp]));
        }

        setIgnoredTopics(ignoredTopics.concat(temp));
        delete topics[key];
        handleEditorTcBackClick(index);
    };

    // Handle recover click
    const recoverTopic = (key, index) => {
        setTopics({ ...topics, [key]: ignoredTopics[index][key] });
        let stnIgnoredTopics = localStorage.getItem('stnIgnoredTopics');
        stnIgnoredTopics = JSON.parse(stnIgnoredTopics);
        stnIgnoredTopics.splice(stnIgnoredTopics.indexOf(key), 1);
        localStorage.setItem('stnIgnoredTopics', JSON.stringify(stnIgnoredTopics));

        setIgnoredTopics(() => {
            return ignoredTopics.filter((e) => {
                return Object.keys(e)[0] !== key;
            });
        });

        // setTopicRefresh(!topicRefresh);
    };

    // Handle add custom topic
    const addCustomTopic = (e) => {
        e.preventDefault();
        let value = document.getElementById('addTopic');
        if (value.value !== '') {
            if (!customTopic.includes(value.value)) {
                let stnCustomTopic = localStorage.getItem('stnCustomTopic');
                if (stnCustomTopic) {
                    stnCustomTopic = JSON.parse(stnCustomTopic);
                    stnCustomTopic.push(value.value);
                    localStorage.setItem('stnCustomTopic', JSON.stringify(stnCustomTopic));
                }
                else {
                    localStorage.setItem('stnCustomTopic', JSON.stringify([value.value]));
                }
                setCustomTopic(customTopic.concat(value.value));
                value.value = '';
                document.getElementById('addCustomModalClose').click();
                if (document.getElementById('customTopicErr').classList.contains('d-none')) {
                    document.getElementById('customTopicErr').classList.toggle('d-none');
                }
            }
            else {
                document.getElementById('customTopicErr').classList.toggle('d-none');
            }
        }
    };

    return (
        <>
            {/* Custom Topic Modal */}
            <AddCustomTopicModal addCustomTopic={addCustomTopic} />

            {showOverviewFlag ? <div className="editor-tc">
                <div className="editor-tc1">
                    <div className="editor-tc11 px-3 text-center">
                        <p>Current Grade</p>
                        <h1 className="my-2">A-</h1>
                        <ProgressBar
                            completed={30}
                            bgColor="#e36129"
                            height="18px"
                            borderRadius="6px"
                            isLabelVisible={false}
                            labelSize=""
                            maxCompleted={100}
                        />
                        <p>Recommended: A</p>
                    </div>
                    <div className="editor-tc12 pt-3 row2">
                        <div onClick={handleOverviewClick} className="text-center cursor-pointer py-2 editor-tc12-active">Topics</div>
                        <div onClick={handleOverviewClick} className="text-center cursor-pointer py-2">Questions</div>
                    </div>
                    <div>
                        <div id="editor-tc12-op1">
                            <div className="editor-tc13 ps-4">
                                <div className="py-5">
                                    <h4>Topics To Cover</h4>
                                </div>
                                <div className="form-check form-switch mb-3 form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" id="editor-tcs1" />
                                    <label className="form-check-label" htmlFor="editor-tcs1">
                                        Show Only Unused
                                    </label>
                                </div>
                                <div className="form-check form-switch mb-3 form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" id="editor-tcs2" />
                                    <label className="form-check-label" htmlFor="editor-tcs2">
                                        Show By Theme
                                    </label>
                                </div>
                            </div>
                            <div className="editor-tc14">

                                {Object.keys(topics).map((e, index) => {
                                    let ovMaxUses = topics[e].maxUses;

                                    if (ovMaxUses > 2) {
                                        ovMaxUses = Math.ceil(ovMaxUses / 2);
                                    }

                                    return (
                                        <div key={index} className={(ovMaxUses <= (strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length) ? `editor-tc-card cursor-pointer mb-1 editor-tc-card-done` : `editor-tc-card cursor-pointer mb-1`}>
                                            <div onClick={() => {
                                                handleEditorTcClick(index);
                                            }} className="editor-tc-card1 py-2 px-2">
                                                <div className="row2 row5 mb-1">
                                                    <h5 className="my-0">{e}</h5>
                                                    {topics[e].headN > 0 ? <h5>H</h5> : null}
                                                </div>
                                                <p className="editor-tc-card-p1">Used by {topics[e].pharseN} sources</p>
                                                <p className="editor-tc-card-p2">Click to see examples</p>
                                            </div>

                                            <div className="editor-tc-card2 py-1 px-5">
                                                <div className="row2 row5 my-5">
                                                    <div onClick={() => {
                                                        handleEditorTcBackClick(index);
                                                    }} className="row2 cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-1 bi-arrow-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                        </svg>
                                                        <p>Back</p>
                                                    </div>
                                                    <h5>Examples of <em>{e}</em></h5>
                                                    <p onClick={() => {
                                                        ignoreTc(index, e);
                                                    }} className="cursor-pointer">Ignore</p>
                                                </div>
                                                <div className="my-2 editor-tc-card21 py-2 row2 row9">
                                                    <div>
                                                        <p>Relevance</p>
                                                        <p>95%</p>
                                                    </div>
                                                    <div>
                                                        <p>Typical Usage</p>
                                                        <p>{topics[e].maxUses > 2 ? `${Math.ceil(topics[e].maxUses / 2)} Uses` : `${Math.ceil(topics[e].maxUses)} Use`}</p>
                                                    </div>
                                                    <div>
                                                        <p>Current Usage</p>
                                                        <p>{(strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length > 1 ? `${(strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length} Uses` : `${(strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length} Use`}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    {topics[e].headN !== 0 ? <div className="om-inner5-box121 mt-5">
                                                        <div className="row2 mb-4">
                                                            <h1 className="me-2">H</h1>
                                                            <h3>Used in {topics[e].headN} Headings</h3>
                                                        </div>
                                                        <div className="om-inner5-heading">
                                                            {topics[e].articles.map((f, index1) => {
                                                                if (f.articleH.length > 0) {
                                                                    return (
                                                                        <div style={{ marginBottom: "2.5rem" }} key={index1}>
                                                                            <h5 dangerouslySetInnerHTML={{ __html: f.title.replaceAll(e, `<div className="font-weight-bold">${e}</div>`) }}></h5>

                                                                            <div className="mt-2">
                                                                                <a href={f.url} target="_blank" className="mb-3">{new URL(e.url).hostname}</a>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <ul>
                                                                                    {f.articleH.map((g, index2) => {
                                                                                        return (
                                                                                            <li key={index2} className="my-1" dangerouslySetInnerHTML={{ __html: g.replaceAll(e, `<div class="font-weight-bold">${e}</div>`) }}></li>
                                                                                        )
                                                                                    })}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            })}
                                                        </div>
                                                    </div> : null}

                                                    {topics[e].pharseN !== 0 ? <div className="om-inner5-box122">
                                                        <div className="row2 mb-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paragraph" viewBox="0 0 16 16">
                                                                <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" />
                                                            </svg>
                                                            <h3>Used in {topics[e].pharseN} Sources</h3>
                                                        </div>
                                                        <div className="om-inner5-heading">
                                                            {topics[e].articles.map((f, index1) => {
                                                                if (f.articleP.length > 0) {
                                                                    return (
                                                                        <div style={{ marginBottom: "2.5rem" }} key={index1}>
                                                                            <h5 dangerouslySetInnerHTML={{ __html: f.title.replaceAll(e, `<div className="font-weight-bold">${e}</div>`) }}></h5>
                                                                            <div className="mt-2">
                                                                                <a href={f.url} target="_blank" className="mb-2 me-2">{new URL(f.url).hostname}</a>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <ul>
                                                                                    {f.articleP.map((g, index2) => {
                                                                                        return <li key={index2} className="my-1" dangerouslySetInnerHTML={{ __html: g.replaceAll(e, `<div class="font-weight-bold">${e}</div>`) }}></li>
                                                                                    })}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            })}
                                                        </div>
                                                    </div> : null}
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}

                                {!isTcExpanded ? customTopic.length > 0 ? customTopic.map((e, index) => {
                                    return (
                                        <div className="p-2" key={index}>
                                            <h5 className="my-0">{e}</h5>
                                            <p>custom topic</p>
                                        </div>
                                    );
                                }) : null : null}

                                <div onClick={addCustomTopic} className="py-4 px-2 editor-tc16 cursor-pointer" data-bs-toggle="modal" data-bs-target="#customTopicModal">
                                    <em>+ add custom topic</em>
                                </div>

                                {ignoredTopics.length > 0 ? <div className="editor-tc15 px-2">
                                    <h4 className="py-4">
                                        Ignored Topics
                                    </h4>
                                    {ignoredTopics.map((e, index) => {
                                        return (
                                            <div key={index} onClick={() => {
                                                recoverTopic(Object.keys(e)[0], index)
                                            }} className="editor-tc151 cursor-pointer pb-4">
                                                <p>{Object.keys(e)[0]}</p>
                                                <p className="small d-none">Click to restore</p>
                                            </div>
                                        )
                                    })}

                                </div> : null}

                            </div>
                        </div>
                        <div id="editor-tc12-op2">
                            <div className="editor-tc13 ps-4">
                                <div className="pt-5 pb-2">
                                    <h4>Questions To Cover</h4>
                                </div>
                                <div className="form-check form-switch mb-3 form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" id="editor-tcs2" />
                                    <label className="form-check-label" htmlFor="editor-tcs2">
                                        Group By Theme
                                    </label>
                                </div>
                            </div>
                            <h5 className="pt-5 ps-4 mb-2">Google People Also Ask</h5>
                            <div className="editor-tc14 ps-4">
                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>

                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>
                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>

                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>
                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>

                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>
                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>

                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>
                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>

                                <div className="editor-tc-card">
                                    <div className="editor-tc-card1 py-3 px-2">
                                        <p>Is Ted 3 coming out?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <p>No Data Available</p>}
        </>
    )
}

export default Topics;
