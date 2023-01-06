import { publicIpv4 } from 'public-ip';
import React, { useContext, useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import EditorContext from '../../context/EditorContext';
import MainContext from '../../context/MainContext';

const RevisionBar = (props) => {
    const context = useContext(MainContext);
    const editorContext = useContext(EditorContext);
    const { onEditorStateChange, getVersionHistory } = editorContext;
    const [insFlag, setInsFlag] = useState(false);

    const getData = async () => {
        const userIp = await publicIpv4();
        getVersionHistory(props.client);
        const data = await context.getVersionHistory(props.articleId, userIp);
        if (data.data.articleData.length > 0) {
            setInsFlag(true);
        }
        else {
            setInsFlag(false);
        }
        props.setInstances(data.data.articleData);
    };

    useEffect(() => {
        getData();
    }, []);

    const func1 = () => {
        let b1 = document.querySelector('.revisionBar1');
        if (window.getComputedStyle(b1, null).display === 'block') {
            b1.style.display = 'none';
        }
        else {
            b1.style.display = 'block';
        }
    };

    const func3 = () => {
        let b1 = document.querySelector('.revisionBar1');
        if (window.getComputedStyle(b1, null).display === 'block') {
            b1.style.display = 'none';
        }
    };

    const timeDifference = (current, previous) => {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        }

        else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    };

    const updateEditor = async (e, data) => {
        let savedData = await props.editorG.save();
        props.setCurrentData(savedData.blocks);

        props.editorG.render({
            blocks: data
        });

        onEditorStateChange(data, props.client);
        props.setRevisionFlag(true);

        let oldId = props.revisionStats.old;
        let newId = e.target.id;

        let b = document.querySelectorAll('.revision-btn');

        for (let i of b) {
            i.classList.remove('btn-success');
            i.classList.add('btn-secondary');
            i.innerText = 'Preview';
        }

        e.target.classList.add('btn-success');
        e.target.classList.remove('btn-secondary');
        e.target.innerText = 'Selected';

        props.setRevisionStats({
            old: oldId,
            new: newId
        });
    };

    return (
        <>
            <OutsideClickHandler onOutsideClick={func3}>
                <div className="bottomBar revisionBar">
                    <div className="revisionBar1 bottomBar1c">
                        <div className="text-center revisionBarHead">
                            <h5 className="my-0">Versions are automatically stored every 50 characters, and deleted after 30 days</h5>
                        </div>

                        <div className="revisionBarInner">
                            {insFlag ? props.instances.map((e, index) => {
                                return <div key={index} className="bottomBar11">
                                    <div className="revisionBar1111">
                                        <div className="revisionBar11">
                                            <b>{`Version from ${timeDifference(new Date().getTime(), e.ts)}`}</b>
                                            <div className="revisionBar1111 mt-3">
                                                <p>{`${e.words} Words`}</p>
                                                <span>{e.grade}</span>
                                            </div>
                                        </div>
                                        <div className="revisionBar12">
                                            <button onClick={(f) => {
                                                updateEditor(f, e.data);
                                            }} id={`revision-btn${index}`} className="btn btn-secondary revision-btn">Preview</button>
                                        </div>
                                    </div>
                                </div>
                            }) : <div className="py-5 px-5">
                                <h5>Write some more or save the article to get revision history.</h5>
                            </div>}
                        </div>
                    </div>
                    <div onClick={func1} className="bottomBar2">
                        <p>Version History</p>
                        <svg width="10" viewBox="0 0 50 50" className="holder_f19n375c"><polygon points="6,40 23,14 40,40"></polygon></svg>
                    </div>
                </div>
            </OutsideClickHandler>
        </>
    )
}

export default RevisionBar;
