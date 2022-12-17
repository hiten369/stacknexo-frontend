import React, { useState } from 'react';
import EditorContext from './EditorContext';
import Tooltip1 from 'codex-tooltip';

const EditorState = (props) => {
    const [data, setData] = useState({});
    const [flag1, setFlag1] = useState(false);
    const [updateTime, setUpdateTime] = useState('');
    const [publishTime, setPublishTime] = useState('');
    const [readOnlyFlag, setReadOnlyFlag] = useState(false);
    const [editor_head, setEditor_head] = useState('');
    const [mainData, setMainData] = useState([]);
    const [flag2, setFlag2] = useState(false);
    const [flag4, setFlag4] = useState(false);
    const [dataMatch, setDataMatch] = useState(true);
    const [textList, setTextList] = useState([]);
    const [strData, setStrData] = useState('');
    const [mainType, setMainType] = useState('all');
    const [flag3, setFlag3] = useState(true);
    const [grammarFlag, setGrammarFlag] = useState(false);
    const [grammarFlag1, setGrammarFlag1] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertUndoMsg, setAlertUndoMsg] = useState({
        role: '',
        id: '',
        str: '',
        str1: '',
        flag: false,
        card: {},
        ind: 0,
        cardClass: '',
        cardId: '',
        tempType: '',
        isDict: false,
        undoText: ''
    });
    const [blockDetails, setBlockDetails] = useState([]);
    const [blockIds, setBlockIds] = useState({});
    const [idNum, setIdNum] = useState({});
    const [goals, setGoals] = useState({
        audience: 'knowledgeable',
        dialect: 'american',
        domain: 'general',
        goals: [],
        style: 'neutral',
        citation: 'apa',
        type: 'essay',
    });
    const [sideUtils, setSideUtils] = useState({
        Correctness: 0,
        Clarity: 0,
        Engagement: 0,
        Tone: 0
    });
    const [dictWords, setDictWords] = useState([]);
    const [takeOverMsg, settakeOverMsg] = useState('');
    const [targetUserId, setTargetUserId] = useState('');
    var [tc, setTc] = useState(0);
    var [bottomBar, setBottomBar] = useState({
        words: '0 Words',
        chars: '0 Characters',
        rt: 'Reading Time - not enough text',
        st: 'Speaking Time - not enough text'
    });

    // Tooltip initialization
    const tooltip = new Tooltip1();

    var intialCardNum = 0;
    let blockNum = 0;
    var editor = null;

    const [editorS, setEditorS] = useState(editor);
    const [undoFlag, setUndoFlag] = useState(false);
    let multiTagArr = [];

    // const multiTagUtil = (html) => {
    //     console.log(html);
    //     let nc = document.createElement('div');
    //     nc.innerHTML = html;
    //     for (let i of nc.getElementsByTagName('*')) {
    //         if (i.parentNode.tagName === 'DIV') {
    //             if (i.getElementsByTagName('*').length > 0) {
    //                 console.log('more tags');
    //                 let htmlText = i.innerHTML.trim();
    //                 let firstIndexOfTag = htmlText.indexOf('<');
    //                 let htmlToSend = htmlText;
    //                 if (firstIndexOfTag > 0) {
    //                     htmlToSend = htmlText.slice(firstIndexOfTag,);
    //                     let wordWithNoTag = htmlText.slice(0, firstIndexOfTag);
    //                     console.log(wordWithNoTag);
    //                     /* What if text contains spaces between words. */
    //                     multiTagArr.push({ wordWithNoTag: i.tagName });
    //                 }
    //                 console.log(htmlToSend);
    //                 multiTagUtil(htmlToSend);
    //             }
    //             else {
    //                 /* What if text contains spaces between words. */
    //                 multiTagArr.push({ [i.innerHTML]: i.tagName });
    //             }
    //         }
    //     }
    //     // return multiTagArr;
    // };

    const textWithSpaceUtil = (wordSplit, tagIndex, x, i, z, tagData) => {
        for (let j = 0; j < wordSplit.length; j++) {
            if (wordSplit[j] !== '') {
                x[i].innerText = wordSplit[j];
                x[i].setAttribute("id", `uuid${tagIndex}`);
                let tempX = x[i].cloneNode(true);
                tempX.removeAttribute("id");
                let replacementText = tempX.outerHTML;
                const htmlPosition = z.children[0].innerHTML.indexOf(x[i].outerHTML);
                // console.log(htmlPosition);

                const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);

                // console.log(prevHtml);
                let nc = document.createElement('div');
                nc.innerHTML = prevHtml;
                // console.log(nc.innerText);
                let textOccuranceBefore = (nc.innerText.match(new RegExp(x[i].innerText, "g")) || []).length;

                tagData.push({
                    index: tagIndex++,
                    text: x[i].innerText,
                    replacement: replacementText,
                    occurrance: textOccuranceBefore + 1
                });
            }
        }
        return {
            tagData,
            tagIndex
        };
    };

    const textWithoutSpaceUtil = (x, i, z, tagIndex, tagData, word = '') => {
        if (word !== '') {
            x[i].innerText = word.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
        }

        if (x[i].innerText.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim() !== '') {
            x[i].setAttribute("id", `uuid${tagIndex}`);

            let tempX = x[i].cloneNode(true);
            tempX.removeAttribute("id");
            let replacementText = tempX.outerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ");
            const htmlPosition = z.children[0].innerHTML.indexOf(x[i].outerHTML);
            // console.log(htmlPosition);
            const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);
            // console.log(prevHtml);
            let nc = document.createElement('div');
            nc.innerHTML = prevHtml;
            // console.log(nc.innerText);
            let textOccuranceBefore = (nc.innerText.match(new RegExp(x[i].innerText, "g")) || []).length;

            tagData.push({
                index: tagIndex++,
                text: x[i].innerText,
                replacement: replacementText,
                occurrance: textOccuranceBefore + 1
            });
        }
        return {
            tagData,
            tagIndex
        };
    };

    const multiTagUtil = (tagIndex, html, tagArr, textArr) => {
        let tempIndex = tagIndex;
        let tempStr = html.innerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
        let childrenArr = [];

        for (let h of html.children) {
            childrenArr.push(h.outerHTML);
        }

        console.log(childrenArr);
        // let textArr = [];
        let childrenArr1 = [];
        // let tagArr = [];
        tagArr.push(html.tagName);

        for (let h of childrenArr) {
            h = h.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
            let ind = tempStr.indexOf(h);
            console.log(ind);
            if (ind > 0) {
                let text1 = tempStr.slice(0, ind).trim();
                console.log(text1);
                text1 = text1.split(' ');

                for (let h1 of text1) {
                    textArr.push({
                        text: h1,
                        index: tempIndex,
                        tag: tagArr
                    });
                    tempIndex++;
                }

                childrenArr1.push({
                    text: h,
                    index: tempIndex
                });

                tempStr = tempStr.slice(ind,);
                tempStr = tempStr.replace(h, '');
                let nc1 = document.createElement('div');
                nc1.innerHTML = h;
                tempIndex += nc1.innerText.split(' ').length;
            }
            else {
                childrenArr1.push({
                    text: h,
                    index: tempIndex
                });

                tempStr = tempStr.replace(h, '');
                let nc1 = document.createElement('div');
                nc1.innerHTML = h;
                tempIndex += nc1.innerText.split(' ').length;
            }
        }

        if (tempStr !== '') {
            tempStr = tempStr.split(' ');
            console.log(tempStr);

            for (let h1 of tempStr) {
                textArr.push({
                    text: h1,
                    index: tempIndex,
                    tag: tagArr
                });
                tempIndex++;
            }
        }

        console.log(childrenArr1);

        for (let h of childrenArr1) {
            // recursive function 
            let nc=document.createElement('div');
            nc.innerHTML=h.text;
            return multiTagUtil(h.index, nc.children[0], tagArr, textArr);
        }

        return {
            textArr,
            tempIndex
        };
    };

    // Check for the grammar
    const checkGr = async (flag, onEditorStateChange2) => {
        // Checking if the current editor data is equal to previous saved data 
        let savedData = await editorS.save();
        let currentData = savedData.blocks;
        let prevData = localStorage.getItem('prevEditorData');

        if (prevData) {
            prevData = JSON.parse(prevData);
            if (JSON.stringify(prevData) === JSON.stringify(currentData)) {
                setDataMatch(true);
            }
            else {
                setDataMatch(false);
                localStorage.setItem('prevEditorData', JSON.stringify(currentData));
            }
        }
        else {
            setDataMatch(false);
            localStorage.setItem('prevEditorData', JSON.stringify(currentData));
        }

        // Resetting removed index list
        localStorage.removeItem("totalRemovedArr");

        // Removing the block details which contains last string saved
        setBlockDetails({});

        // Removing the saved highlighted text's ids
        setBlockIds({});

        // Remove the alert cards
        setMainData([]);

        // Set total count of cards to 0
        setTc(0);

        // Clearing the localStorage
        localStorage.removeItem('localMainData');
        localStorage.removeItem('localBlockCount');

        // Disabling the check grammar button and set loader
        /*         setGrammarFlag(true);
                setGrammarFlag1(true); */

        // Save the tag data here
        // const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");
        const y = document.querySelector('.ce-block__content');
        let z = y.cloneNode(true);
        let x = z.children[0].getElementsByTagName("*");

        let tagData = [];
        let tagIndex = 0;

        for (let i = 0; i < x.length; i++) {
            if ((x[i].tagName !== 'SPAN' && x[i].tagName !== 'BR') && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
                console.log(x[i]);

                let wordSplit = x[i].innerText.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
                // console.log(wordSplit);
                wordSplit = wordSplit.split(' ');
                console.log(wordSplit);

                if (wordSplit.length > 1) {
                    console.log('if');

                    // console.log(x[i].getElementsByTagName('*'));
                    if (x[i].getElementsByTagName('*').length > 0) {
                        console.log('yes');
                        // console.log(x[i].children);
                        // let htmlText = x[i].innerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
                        // console.log(htmlText);

                        let tempIndex = tagIndex
                        let tempStr = x[i].innerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
                        let childrenArr = [];

                        for (let h of x[i].children) {
                            childrenArr.push(h.outerHTML);
                        }
                        console.log(childrenArr);
                        let textArr = [];
                        let childrenArr1 = [];
                        let tagArr = [];
                        tagArr.push(x[i].tagName);

                        for (let h of childrenArr) {
                            h = h.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
                            let ind = tempStr.indexOf(h);
                            console.log(ind);
                            if (ind > 0) {
                                let text1 = tempStr.slice(0, ind).trim();
                                console.log(text1);
                                text1 = text1.split(' ');
                                for (let h1 of text1) {
                                    textArr.push({
                                        text: h1,
                                        index: tempIndex,
                                        tag: tagArr
                                    });
                                    tempIndex++;
                                }
                                childrenArr1.push({
                                    text: h,
                                    index: tempIndex
                                });
                                tempStr = tempStr.slice(ind,);
                                tempStr = tempStr.replace(h, '');
                                let nc1 = document.createElement('div');
                                nc1.innerHTML = h;
                                tempIndex += nc1.innerText.split(' ').length;
                            }
                            else {
                                childrenArr1.push({
                                    text: h,
                                    index: tempIndex
                                });
                                tempStr = tempStr.replace(h, '');
                                let nc1 = document.createElement('div');
                                nc1.innerHTML = h;
                                tempIndex += nc1.innerText.split(' ').length;
                            }
                        }

                        if (tempStr !== '') {
                            tempStr = tempStr.split(' ');
                            console.log(tempStr);
                            for (let h1 of tempStr) {
                                textArr.push({
                                    text: h1,
                                    index: tempIndex,
                                    tag: tagArr
                                });
                                tempIndex++;
                            }
                        }

                        console.log(childrenArr1);
                        for (let h of childrenArr1) {
                            // recursive function 
                        }

                        /* let firstIndexOfTag = htmlText.indexOf('<');
                        let htmlToSend = htmlText;
                        if (firstIndexOfTag > 0) {
                            htmlToSend = htmlText.slice(firstIndexOfTag,);
                            let wordWithNoTag = htmlText.slice(0, firstIndexOfTag);

                            console.log(wordWithNoTag);

                            let wordSplit = wordWithNoTag.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
                            // console.log(wordSplit);
                            wordSplit = wordSplit.split(' ');
                            console.log(wordSplit);

                            if (wordSplit.length > 1) {
                                console.log('if -');
                                let ans = textWithSpaceUtil(wordSplit, tagIndex, x, i, z, tagData);
                                tagData = ans.tagData;
                                tagIndex = ans.tagIndex;
                            }
                            else {
                                console.log('else -');
                                let ans = textWithoutSpaceUtil(x, i, z, tagIndex, tagData, wordWithNoTag);
                                tagData = ans.tagData;
                                tagIndex = ans.tagIndex;
                            }
                        }
                        console.log(htmlToSend);
                        multiTagUtil(htmlToSend);
                        console.log(multiTagArr); */
                    }
                    else {
                        // below code here
                        let ans = textWithSpaceUtil(wordSplit, tagIndex, x, i, z, tagData);
                        tagData = ans.tagData;
                        tagIndex = ans.tagIndex;
                    }

                    /* for(let j=0;j<wordSplit.length;j++)
                       {
                           if(wordSplit[j]!=='')
                           {
                               x[i].innerText=wordSplit[j];
                               x[i].setAttribute("id", `uuid${tagIndex}`);
                               let tempX = x[i].cloneNode(true);
                               tempX.removeAttribute("id");
                               let replacementText=tempX.outerHTML;
                               const htmlPosition = z.children[0].innerHTML.indexOf(x[i].outerHTML);
                               // console.log(htmlPosition);
   
                               const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);
       
                               // console.log(prevHtml);
                               let nc = document.createElement('div');
                               nc.innerHTML = prevHtml;
                               // console.log(nc.innerText);
                               let textOccuranceBefore = (nc.innerText.match(new RegExp(x[i].innerText, "g")) || []).length;
               
                               tagData.push({
                                   index: tagIndex++,
                                   text: x[i].innerText,
                                   replacement: replacementText,
                                   occurrance: textOccuranceBefore + 1
                               });
                           }
                       } */

                }
                else {
                    console.log('else');
                    let ans = textWithoutSpaceUtil(x, i, z, tagIndex, tagData);
                    tagData = ans.tagData;
                    tagIndex = ans.tagIndex;

                    /* if(x[i].innerText.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim()!=='')
                                        {
                                            x[i].setAttribute("id", `uuid${tagIndex}`);
                        
                                            let tempX = x[i].cloneNode(true);
                                            tempX.removeAttribute("id");
                                            let replacementText=tempX.outerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ");
                                            const htmlPosition = z.children[0].innerHTML.indexOf(x[i].outerHTML);
                                            // console.log(htmlPosition);
                                            const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);
                                            // console.log(prevHtml);
                                            let nc = document.createElement('div');
                                            nc.innerHTML = prevHtml;
                                            // console.log(nc.innerText);
                                            let textOccuranceBefore = (nc.innerText.match(new RegExp(x[i].innerText, "g")) || []).length;
                        
                                            tagData.push({
                                                index: tagIndex++,
                                                text: x[i].innerText,
                                                replacement: replacementText,
                                                occurrance: textOccuranceBefore + 1
                                            });
                                        } */
                }
            }
        }

        console.log(tagData);
        localStorage.setItem("stnTagData", JSON.stringify(tagData));

        // Sending data to grammar (Web Socket)
        /* onEditorStateChange2(savedData.blocks, strData, flag, goals); */
    };

    return (
        <>
            <EditorContext.Provider value={{ data, setData, flag1, setFlag1, updateTime, setUpdateTime, publishTime, setPublishTime, readOnlyFlag, setReadOnlyFlag, editor_head, setEditor_head, mainData, setMainData, flag2, setFlag2, flag4, setFlag4, dataMatch, setDataMatch, textList, setTextList, strData, setStrData, mainType, setMainType, flag3, setFlag3, grammarFlag, setGrammarFlag, grammarFlag1, setGrammarFlag1, alertMsg, setAlertMsg, alertUndoMsg, setAlertUndoMsg, blockDetails, setBlockDetails, blockIds, setBlockIds, idNum, setIdNum, goals, setGoals, sideUtils, setSideUtils, dictWords, setDictWords, takeOverMsg, settakeOverMsg, targetUserId, setTargetUserId, tooltip, intialCardNum, tc, setTc, blockNum, editor, checkGr, editorS, setEditorS, setBottomBar, bottomBar, undoFlag, setUndoFlag }}>
                {props.children}
            </EditorContext.Provider>
        </>
    )
}

export default EditorState;
