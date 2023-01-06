import React, { useState } from 'react';
import EditorContext from './EditorContext';
import Tooltip1 from 'codex-tooltip';
import { publicIpv4 } from 'public-ip';

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

    // Declearing variable to use globally for web socket
    var client;
    const [gclient, setGclient] = useState(client);

    const [editorS, setEditorS] = useState(editor);
    const [undoFlag, setUndoFlag] = useState(false);

    // Start later
    // Update the article real time
    const onEditorStateChange = (text, client2) => {
        client2.send(JSON.stringify({
            type: "realTime",
            content: text,
            type1: "ARTICLE",
            articleId: localStorage.getItem('stnArticleId')
        }));
    };

    // Save the article instances (every 50 characters)
    const onEditorStateChange1 = (text, data, client2) => {
        client2.send(JSON.stringify({
            type: "onDemand",
            content: text,
            data,
            type1: "ARTICLE",
            articleId: localStorage.getItem('stnArticleId')
        }));
    };

    // Check for grammarly
    const onEditorStateChange2 = (text, str, flag, goalsObj, client2) => {
        // console.log(text, str);
        client2.send(JSON.stringify({
            type: "fetch",
            content: text,
            type1: "GRAMMAR",
            articleId: localStorage.getItem('stnArticleId'),
            text: str,
            flag,
            goalsObj
        }));
    };

    // Update the article goals (Editor wise)
    const onEditorStateChange3 = (goalsObj, client2) => {
        // console.log(client2);
        client2.send(JSON.stringify({
            type: "update",
            type1: "GOALS",
            articleId: localStorage.getItem('stnArticleId'),
            goalsObj
        }));
    };

    // Update the article goals (User wise - Universal)
    const onEditorStateChange4 = (goalsObj, name, flag, client2) => {
        client2.send(JSON.stringify({
            type: "update",
            type1: "GOALSUSER",
            name: name,
            flag: flag,
            articleId: localStorage.getItem('stnArticleId'),
            goalsObj
        }));
    };

    // Update the dictionary (User)
    const onEditorStateChange5 = async (dictWord, client2) => {
        const userIp = await publicIpv4();
        client2.send(JSON.stringify({
            type: "update",
            type1: "USERDICT",
            articleId: localStorage.getItem('stnArticleId'),
            dictWord,
            userIp
        }));
    };

    // Start later
    // Get article revisions (version history)
    const getVersionHistory = (client2) => {
        // console.log(client2);
        client2.send(JSON.stringify({
            type: "versionHistory",
            type1: "ARTICLE",
            articleId: localStorage.getItem('stnArticleId'),
        }));
    };

    // Post new notification
    const post_noti = (data, client2) => {
        client2.send(JSON.stringify({
            type: "post",
            type1: "NOTIFICATION",
            data
        }));
    };

    // Update notification
    const update_noti = (data, client2) => {
        client2.send(JSON.stringify({
            type: "put",
            type1: "NOTIFICATION",
            data
        }));
    };

    // Get new message
    const get_msg = (client2) => {
        client2.send(JSON.stringify({
            type: "get",
            type1: "MESSAGE",
        }));
    };

    // Delete all messages
    const delete_msg = (client2) => {
        client2.send(JSON.stringify({
            type: "delete",
            type1: "MESSAGE",
        }));
    };

    // *** target user will be different for this ***
    const sendMsg = ({ msgDesc, msgFlag, senderUserId, client2 }) => {
        // modalClickFlag = true;
        // console.log(senderUserId);
        client2.send(JSON.stringify({
            type: "post",
            type1: "MESSAGE",
            data: { msgDesc, msgFlag, msgUser: senderUserId }
        }));
    };

    // The html which is sent here does not contains multiple tags and contains spaces
    const textWithSpaceUtil = (wordSplit, tagIndex, html, z, tagData) => {
        for (let j = 0; j < wordSplit.length; j++) {
            if (wordSplit[j] !== '') {

                // Setting the html inner text the split text, than work accordingly
                html.innerText = wordSplit[j];
                html.setAttribute("id", `uuid${tagIndex}`);
                let tempX = html.cloneNode(true);
                tempX.removeAttribute("id");
                let replacementText = tempX.outerHTML;

                // The index of affected word
                const htmlPosition = z.children[0].innerHTML.indexOf(html.outerHTML);
                // console.log(htmlPosition);

                // Previous html before above index
                const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);

                // console.log(prevHtml);
                let nc = document.createElement('div');
                nc.innerHTML = prevHtml;
                // console.log(nc.innerText);
                let textOccuranceBefore = (nc.innerText.match(new RegExp(html.innerText, "g")) || []).length;

                tagData.push({
                    index: tagIndex++,
                    text: html.innerText.trim(),
                    replacement: replacementText.replaceAll(' ', ''),
                    occurrance: textOccuranceBefore + 1
                });
            }
        }
        return {
            tagData,
            tagIndex
        };
    };

    // The html which is sent here does not contains multiple tags and does not contains spaces
    const textWithoutSpaceUtil = (html, z, tagIndex, tagData, word = '') => {
        // If we are sending some custom word than setting it as innertext to process
        if (word !== '') {
            html.innerText = word.trim();
        }

        if (html.innerText.trim() !== '') {
            html.setAttribute("id", `uuid${tagIndex}`);
            // console.log(html);
            let tempX = html.cloneNode(true);
            tempX.removeAttribute("id");
            let replacementText = tempX.outerHTML;
            // console.log(replacementText);
            // console.log(html.outerHTML);
            // console.log(z.children[0].innerHTML);

            // The index of affected word
            const htmlPosition = z.children[0].innerHTML.indexOf(html.outerHTML);
            // console.log(htmlPosition);

            // Previous html before above index
            const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);
            // console.log(prevHtml);
            let nc = document.createElement('div');
            nc.innerHTML = prevHtml;
            // console.log(nc.innerText);
            let textOccuranceBefore = (nc.innerText.match(new RegExp(html.innerText, "g")) || []).length;

            tagData.push({
                index: tagIndex++,
                text: html.innerText.trim(),
                replacement: replacementText.replaceAll(' ', ''),
                occurrance: textOccuranceBefore + 1
            });
        }
        return {
            tagData,
            tagIndex
        };
    };

    // The html which contains multiple tags
    const multiTagUtil = (tagIndex, html, tagArr, textArr, maxIndex, prevStringToCheck, occurranceArr, tempOccuranceArr) => {

        /* 
            tagIndex: Index of current word,
            html: the affected data,
            tagArr: stores tags used to wrap texts,
            textArr: Main array in which all things are storing,
            maxIndex: the maximum index appears,
            prevStringToCheck: string prior to affected html,
            occurranceArr: stores the words which has been checked, add those word's count to manipulate occurance,
            tempOccuranceArr: to manipulate text arr
        */

        // Setting the maximum index appears in this function
        let tempIndex = tagIndex;
        if (tempIndex > maxIndex) {
            maxIndex = tempIndex;
        }

        // we will be moving in below string, it contains every word with tag
        let tempStr = html.innerHTML.trim();
        let childrenArr = []; // the array in which children are stored, that will be used to make any other tag free, ex - <b><i></i></b> ---> <b></b>

        for (let h of html.children) {
            childrenArr.push(h.outerHTML); // storing the tags which is inside the html sent
        }

        console.log(childrenArr);
        let childrenArr1 = []; // to store current index of that perticular entity processed in childrenArr
        console.log(tagArr);

        tagArr.push(html.tagName); // To store the tags
        localStorage.setItem('stnTagArr', JSON.stringify(tagArr)); // this is done because it was storing its final form to every depedencies
        console.log(tagArr);

        for (let h of childrenArr) {
            h = h.trim();
            console.log(tempStr);
            let ind = tempStr.indexOf(h);
            console.log(ind);

            // there are some text before the tag
            if (ind > 0) {
                console.log('if0');
                // text before the tag
                let text1 = tempStr.slice(0, ind).trim();
                console.log(text1);
                text1 = text1.split(' ');

                // Storing the words and their data accordingly
                for (let h1 of text1) {
                    // console.log(prevStringToCheck);
                    // console.log(h1);
                    let textOccuranceBefore = (prevStringToCheck.match(new RegExp(h1, "g")) || []).length + 1;
                    console.log(textOccuranceBefore);
                    textOccuranceBefore += occurranceArr.filter(x => x === h1).length;
                    console.log(textOccuranceBefore);

                    // to further manipulate textArr
                    tempOccuranceArr.push({
                        index: tempIndex,
                        occurrance: textOccuranceBefore,
                        text: h1
                    });

                    textArr.push({
                        text: h1,
                        index: tempIndex,
                        tag: JSON.parse(localStorage.getItem('stnTagArr')),
                        occurrance: textOccuranceBefore
                    });
                    tempIndex++;
                    occurranceArr.push(h1);
                }
                console.log(textArr);

                // Saving the same children with current index given by above loop
                childrenArr1.push({
                    text: h,
                    index: tempIndex
                });
                console.log(tempIndex);

                tempStr = tempStr.slice(ind,);
                console.log(tempStr);
                tempStr = tempStr.replace(h, '').trim();
                console.log(tempStr);
                let nc1 = document.createElement('div');
                nc1.innerHTML = h;
                tempIndex += nc1.innerText.split(' ').length;
                console.log(tempIndex);
                if (tempIndex > maxIndex) {
                    maxIndex = tempIndex;
                }
            }
            // Index is 0 which means the children is at starting
            else {
                console.log('else0');
                childrenArr1.push({
                    text: h,
                    index: tempIndex
                });

                tempStr = tempStr.replace(h, '');
                let nc1 = document.createElement('div');
                nc1.innerHTML = h;
                tempIndex += nc1.innerText.split(' ').length;
                if (tempIndex > maxIndex) {
                    maxIndex = tempIndex;
                }
            }
        }

        // when the string remains after removing all nested tags
        if (tempStr !== '') {
            tempStr = tempStr.split(' ');
            console.log(tempStr);

            for (let h1 of tempStr) {
                console.log(h1);
                console.log(prevStringToCheck);
                let textOccuranceBefore = (prevStringToCheck.match(new RegExp(h1, "g")) || []).length + 1;
                console.log(textOccuranceBefore);
                textOccuranceBefore += occurranceArr.filter(x => x === h1).length;
                console.log(textOccuranceBefore);

                tempOccuranceArr.push({
                    index: tempIndex,
                    occurrance: textOccuranceBefore,
                    text: h1
                });

                textArr.push({
                    text: h1,
                    index: tempIndex,
                    tag: JSON.parse(localStorage.getItem('stnTagArr')),
                    occurrance: textOccuranceBefore
                });
                tempIndex++;
                occurranceArr.push(h1);
            }
            console.log(textArr);
            console.log(tempIndex);
            if (tempIndex > maxIndex) {
                maxIndex = tempIndex;
            }
        }

        console.log(childrenArr1);

        // reccursively calling it
        for (let h of childrenArr1) {
            let nc = document.createElement('div');
            nc.innerHTML = h.text;
            return multiTagUtil(h.index, nc.children[0], tagArr, textArr, maxIndex, prevStringToCheck, occurranceArr, tempOccuranceArr);
        }

        return {
            textArr,
            maxIndex,
            tempOccuranceArr
        };
    };

    // Check for the grammar
    const checkGr = async (flag) => {
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
        setGrammarFlag(true);
        setGrammarFlag1(true);

        // Save the tag data here
        let y = document.querySelector('.ce-block__content');
        let nb = document.createElement('div');
        nb.innerHTML = y.outerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ");
        y = nb.children[0];
        let z = y.cloneNode(true);
        let x = z.children[0].getElementsByTagName("*");

        let tagData = [];
        let tagIndex = 0;

        // Storing tagged words, their replacement,occurence,index
        for (let i = 0; i < x.length; i++) {
            if ((x[i].tagName !== 'SPAN' && x[i].tagName !== 'BR') && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
                let wordSplit = x[i].innerText.trim();
                wordSplit = wordSplit.split(' ');
                // console.log(wordSplit);

                // Checking if there are multiple words
                if (wordSplit.length > 1) {
                    // if there are multiple tags are present
                    if (x[i].getElementsByTagName('*').length > 0) {
                        console.log('yes');
                        // console.log(x[i].children);
                        // let htmlText = x[i].innerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ").trim();
                        // console.log(htmlText);
                        // console.log(x[i]);
                        let prevStringToCheck = z.children[0].innerHTML.slice(0, z.children[0].innerHTML.indexOf(x[i].outerHTML));
                        // console.log(index1);

                        let ans1 = multiTagUtil(tagIndex, x[i], [], [], -1, prevStringToCheck, [], []);
                        console.log(ans1);
                        let tempOccuranceArr = ans1.tempOccuranceArr;

                        // only texts with occurence with greater than 1 remains
                        tempOccuranceArr = tempOccuranceArr.filter((e) => {
                            const text = e.text;

                            // Count the text occurance in above array
                            const textCount = tempOccuranceArr.reduce((acc, cur) => cur.text === text ? ++acc : acc, 0);
                            return textCount > 1;
                        }).sort((a, b) => a.index - b.index);

                        console.log(tempOccuranceArr);

                        // Bubble sort the occurance according to index order (if index 1>index 2, then occurence follows the same)
                        for (let m = 0; m < tempOccuranceArr.length - 1; m++) {
                            for (let n = 0; n < tempOccuranceArr.length - 1; n++) {
                                if ((tempOccuranceArr[n].index < tempOccuranceArr[n + 1].index && tempOccuranceArr[n].occurrance > tempOccuranceArr[n + 1].occurrance) || (tempOccuranceArr[n].index > tempOccuranceArr[n + 1].index && tempOccuranceArr[n].occurrance < tempOccuranceArr[n + 1].occurrance)) {
                                    [ans1.textArr[ans1.textArr.findIndex(x => x.index === tempOccuranceArr[n].index)].occurrance, ans1.textArr[ans1.textArr.findIndex(x => x.index === tempOccuranceArr[n + 1].index)].occurrance] = [ans1.textArr[ans1.textArr.findIndex(x => x.index === tempOccuranceArr[n + 1].index)].occurrance, ans1.textArr[ans1.textArr.findIndex(x => x.index === tempOccuranceArr[n].index)].occurrance];

                                    [tempOccuranceArr[n].occurrance, tempOccuranceArr[n + 1].occurrance] = [tempOccuranceArr[n + 1].occurrance, tempOccuranceArr[n].occurrance];
                                }
                            }
                        }
                        console.log(ans1.textArr);

                        // wrapping inside the tag and inserting into tagData
                        for (let q of ans1.textArr) {
                            let htmlStr = '';

                            for (let h = 0; h < q.tag.length; h++) {
                                htmlStr += `<${q.tag[h].toLowerCase()}>`;
                            }

                            htmlStr += q.text;

                            for (let h1 = q.tag.length - 1; h1 >= 0; h1--) {
                                htmlStr += `</${q.tag[h1].toLowerCase()}>`
                            }
                            console.log(htmlStr);

                            tagData.push({
                                index: q.index,
                                occurrance: q.occurrance,
                                replacement: htmlStr.replaceAll(' ', ''),
                                text: q.text.trim()
                            });
                        }
                        tagIndex = ans1.maxIndex;
                    }
                    else {
                        // No tags are present just multiple words
                        let ans = textWithSpaceUtil(wordSplit, tagIndex, x[i], z, tagData);
                        tagData = ans.tagData;
                        tagIndex = ans.tagIndex;
                    }
                }
                else {
                    console.log('else');
                    let ans = textWithoutSpaceUtil(x[i], z, tagIndex, tagData);
                    tagData = ans.tagData;
                    tagIndex = ans.tagIndex;
                }
            }
        }

        console.log(tagData);
        localStorage.setItem("stnTagData", JSON.stringify(tagData));

        // Sending data to grammar (Web Socket)
        onEditorStateChange2(savedData.blocks, strData, flag, goals, gclient);
    };

    return (
        <>
            <EditorContext.Provider value={{ data, setData, flag1, setFlag1, updateTime, setUpdateTime, publishTime, setPublishTime, readOnlyFlag, setReadOnlyFlag, editor_head, setEditor_head, mainData, setMainData, flag2, setFlag2, flag4, setFlag4, dataMatch, setDataMatch, textList, setTextList, strData, setStrData, mainType, setMainType, flag3, setFlag3, grammarFlag, setGrammarFlag, grammarFlag1, setGrammarFlag1, alertMsg, setAlertMsg, alertUndoMsg, setAlertUndoMsg, blockDetails, setBlockDetails, blockIds, setBlockIds, idNum, setIdNum, goals, setGoals, sideUtils, setSideUtils, dictWords, setDictWords, takeOverMsg, settakeOverMsg, targetUserId, setTargetUserId, tooltip, intialCardNum, tc, setTc, blockNum, editor, checkGr, editorS, setEditorS, setBottomBar, bottomBar, undoFlag, setUndoFlag, client, onEditorStateChange, onEditorStateChange1, onEditorStateChange2, onEditorStateChange3, onEditorStateChange4, onEditorStateChange5, getVersionHistory, post_noti, update_noti, get_msg, delete_msg, sendMsg, setGclient, gclient }}>
                {props.children}
            </EditorContext.Provider>
        </>
    )
}

export default EditorState;
