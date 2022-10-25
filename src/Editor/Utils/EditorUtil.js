import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import Undo from 'editorjs-undo';
import SimpleImage from '@editorjs/simple-image'
import Underline from '@editorjs/underline';
import Paragraph from '@editorjs/paragraph';
import NestedList from '@editorjs/nested-list';
import ChangeCase from 'editorjs-change-case';
import FootnotesTune from '@editorjs/footnotes';
import LinkAutocomplete from '@editorjs/link-autocomplete';
import TextVariantTune from '@editorjs/text-variant-tune';
import { publicIpv4 } from 'public-ip';

// Toggling the read - only mode
export const func1 = async (flag = false, editorContext, onEditorStateChange2) => {
    const { readOnlyFlag, checkGr, setReadOnlyFlag, setMainData, editorS } = editorContext;
    var { setTc } = editorContext;

    if (flag) {
        document.querySelector('.editor-menu').style.display = 'none';
    }

    await editorS.readOnly.toggle();

    if (readOnlyFlag) {
        checkGr(true, onEditorStateChange2);
    }
    setReadOnlyFlag(!readOnlyFlag);
    setTc(0);
    setMainData([]);
};

// Save the article when click on save button
export const func = async (context, articleId, onEditorStateChange1, editorContext) => {
    const { setAlert, bottomBar, editorS } = editorContext;

    let userIp = await publicIpv4();
    console.log(bottomBar);
    let words = bottomBar.words;
    let savedData = await editorS.save();
    onEditorStateChange1(savedData.blocks, { words, grade: 'A-' });

    let ans = await context.putArticle(articleId, savedData.blocks, userIp);
    if (ans.success) {
        saveAlert(editorContext);
    }
    else {
        setAlert('danger', ans.message);
    }
};

// Getting the document title width to set it dynamically
export const getTextWidth = () => {
    let el = document.getElementById('editor_head');
    // uses a cached canvas if available
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    // get the full font style property
    var font = window.getComputedStyle(el, null).getPropertyValue('font');
    var text = el.value;
    // set the font attr for the canvas text
    context.font = font;
    var textMeasurement = context.measureText(text);
    return textMeasurement.width;
};

// Change the article title
export const editor_head_change = (e, editorContext) => {
    const { setEditor_head } = editorContext;

    var width = Math.floor(getTextWidth());
    // add 20 px to pad the input
    var widthInPx = (width + 20) + "px";
    document.getElementById('editor_head').style.width = widthInPx;
    document.title = e.target.value;
    setEditor_head(e.target.value);
};

// Intializiong the editor
export const initializeEditor = async (context, articleId, onEditorStateChange, onEditorStateChange1, getVersionHistory, editorContext) => {
    const { setEditor_head, setData, setUpdateTime, setPublishTime, setDataMatch, setStrData, setEditorS } = editorContext;
    var { editor, setBottomBar } = editorContext;

    // Fetching the article details by article id
    const userIp = await publicIpv4();
    let ans = await context.getArticle(articleId, userIp);

    if (ans.success) {
        if (ans.data.length !== 0) {
            setData(ans);
        }
        else {
            window.location.href = "/not_found";
        }
    }
    else {
        window.location.href = "/not_found";
    }

    // Getting article update datetime
    let d = new Date(Number(ans.data[0].articleUpdateDate.date));
    setUpdateTime(d.toLocaleString());
    let d1 = new Date();
    let min = d.getMinutes();
    let min1 = d1.getMinutes();
    let hour = d.getHours();
    let hour1 = d1.getHours();
    let date = d.getDate();
    let date1 = d1.getDate();

    if (date === date1) {
        if (hour === hour1) {
            if (min1 === min) {
                setUpdateTime('Few Seconds Ago');
            }
            else if (min1 > min) {
                setUpdateTime(`${min1 - min} minutes ago`);
            }
        }
        else {
            setUpdateTime(`${hour1 - hour} hours ago`);
        }
    }
    else {
        setUpdateTime(`${d.toLocaleDateString()}`);
    }

    // Getting article publish datetime
    let ad = new Date(Number(ans.data[0].articlePublishDate));
    setPublishTime(ad.toLocaleString());
    let ad1 = new Date();
    let amin = ad.getMinutes();
    let amin1 = ad1.getMinutes();
    let ahour = ad.getHours();
    let ahour1 = ad1.getHours();
    let adate = ad.getDate();
    let adate1 = ad1.getDate();

    if (adate === adate1) {

        if (ahour === ahour1) {

            if (amin1 === amin) {
                setPublishTime('Few Seconds Ago');
            }
            else if (amin1 > amin) {
                setPublishTime(`${amin1 - amin} minutes ago`);
            }
        }
        else {
            setPublishTime(`${ahour1 - ahour} hours ago`);
        }
    }
    else {
        setPublishTime(`${ad.toLocaleDateString()}`);
    }

    // Setting article heading
    setEditor_head(ans.data[0].articleHead);

    // Setting page title to article heading
    document.title = ans.data[0].articleHead;

    // Dynamically setting the article title input width by article heading length
    var width = Math.floor(getTextWidth());

    // add 20px to pad the input.
    var widthInPx = (width + 20) + "px";
    document.getElementById('editor_head').style.width = widthInPx;

    // Getting article real time data which is being used to display in editor
    let ans1 = ans.data[0].articleRealTime.articleData;
    // console.log(ans1);

    // Editor Js Initialization
    editor = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        placeholder: 'Let`s write an awesome story!',

        tools: {
            textVariant: {
                class: TextVariantTune,
                inlineToolbar: true
            },
            link: {
                class: LinkAutocomplete,
                config: {
                    endpoint: 'http://localhost:5001/search',
                    queryParam: 'search'
                },
                inlineToolbar: true
            },
            changeCase: {
                class: ChangeCase,
                config: {
                    showLocaleOption: true, // enable locale case options
                    locale: 'TR' // or ['tr', 'TR', 'tr-TR']
                }
            },
            footnotes: {
                class: FootnotesTune,
                inlineToolbar: true
            },
            paragraph: {
                class: Paragraph,
                inlineToolbar: true
            },
            underline: {
                class: Underline,
                inlineToolbar: true
            },
            header: {
                class: Header,
                inlineToolbar: true
            },
            embed: {
                class: Embed,
                inlineToolbar: true
            },
            table: {
                class: Table,
                inlineToolbar: true
            },
            list: {
                class: NestedList,
                inlineToolbar: true,
            },
            // warning: {
            //     class: Warning,
            //     inlineToolbar: true
            // },
            // code: {
            //     class: Code,
            //     inlineToolbar: true
            // },
            image: {
                class: Image,
                config: {
                    endpoints: {
                        byFile: 'http://localhost:5001/imageUp',
                        byUrl: "" //url
                    }
                },
                inlineToolbar: true
            },
            raw: {
                class: Raw,
                inlineToolbar: true
            },
            quote: {
                class: Quote,
                inlineToolbar: true
            },
            marker: {
                class: Marker,
                inlineToolbar: true
            },
            // checklist: {
            //     class: CheckList,
            //     inlineToolbar: true
            // },
            // delimiter: {
            //     class: Delimiter,
            //     inlineToolbar: false

            // },
            // inlineCode: {
            //     class: InlineCode,
            //     inlineToolbar: true
            // },
            simpleImage: {
                class: SimpleImage,
                inlineToolbar: true
            }
        },

        onReady: function () {
            // editor.clear();
            editor.save().then((savedData) => {
                let str1 = "";

                for (let i of savedData.blocks) {
                    // Checklist - Custom
                    // if (i.type === 'checklist') {
                    //     str1 += "\n";
                    //     for (let j of i.data.items) {
                    //         str1 += j.text + " ";
                    //     }
                    // }
                    // Code
                    // else if (i.type === 'code') {
                    //     str1 += "\n";
                    //     str1 += i.data.code + " ";
                    // }
                    // Warning - Custom
                    // else if (i.type === 'warning') {
                    //     str1 += "\n";
                    //     str1 += i.data.message + " ";
                    //     str1 += i.data.title + " ";
                    // }
                    // Delimiter
                    // else if (i.type === 'delimiter') {
                    //     str1 += "\n";
                    // }

                    // Quote
                    if (i.type === 'quote') {
                        str1 += "\n";
                        str1 += i.data.caption + " ";
                        str1 += i.data.text + " ";
                    }

                    // Raw - Custom
                    else if (i.type === 'raw') {
                        str1 += "\n";
                        str1 += i.data.html + " ";
                    }


                    // List
                    else if (i.type === 'list') {
                        str1 += "\n";
                        for (let j of i.data.items) {
                            str1 += j.content + " ";
                        }
                    }

                    // Table - Custom
                    else if (i.type === 'table') {
                        str1 += "\n";
                        for (let j of i.data.content) {
                            for (let k of j) {
                                str1 += k + " ";
                            }
                        }
                    }

                    // Image
                    else if (i.type === 'image') {
                        str1 += "\n";
                        str1 += i.data.caption + " ";
                    }

                    // Other
                    else {
                        str1 += "\n";
                        str1 += i.data.text + " ";
                    }
                }

                str1 = str1.replaceAll('<mark>', '');
                str1 = str1.replaceAll('</mark>', '');
                str1 = str1.replaceAll('&nbsp;', ' ');
                str1 = str1.replaceAll('\n', ' ');
                str1 = str1.replaceAll('\r', ' ');
                str1 = str1.replace(/\s\s+/g, ' ');
                // console.log(str1.split(' '));
                let strArr = str1.split(' ');

                strArr = strArr.filter((e) => {
                    return e !== '';
                });

                let chars = str1.length;
                let words = strArr.length;
                let total_time_rt = words / 200;

                let time_min_rt = Math.floor(total_time_rt);
                let time_sec_rt;

                if (time_min_rt >= 1) {
                    time_sec_rt = Math.floor((total_time_rt - time_min_rt) * 60);
                }
                else {
                    time_sec_rt = Math.floor(total_time_rt * 60);
                }

                let total_time_st = words / 150;
                let time_min_st = Math.floor(total_time_st);
                let time_sec_st, rt, st;

                if (time_min_st >= 1) {
                    time_sec_st = Math.floor((total_time_st - time_min_st) * 60);
                }
                else {
                    time_sec_st = Math.floor(total_time_st * 60);
                }

                if (time_min_rt !== 0) {
                    rt = `${time_min_rt} minute and ${time_sec_rt} second reading time`;
                }
                else {
                    rt = `${time_sec_rt} second reading time`;
                }

                if (time_min_st !== 0) {
                    st = `${time_min_st} minute and ${time_sec_st} second speaking time`;
                }
                else {
                    st = `${time_sec_st} second speaking time`;
                }

                setBottomBar({
                    words: `${words} Words`,
                    chars: `${chars} Characters`,
                    rt,
                    st
                });

                setStrData(str1);
            });
            new Undo({ editor });
        },

        onChange: function () {
            editor.save().then((savedData) => {
                let prevData = localStorage.getItem('prevEditorData');

                if (prevData) {
                    prevData = JSON.parse(prevData);

                    if (JSON.stringify(prevData) === JSON.stringify(savedData.blocks)) {
                        setDataMatch(true);
                    }
                    else {
                        setDataMatch(false);
                    }
                }
                else {
                    setDataMatch(false);
                }

                let d = new Date();
                setUpdateTime('Few Seconds Ago');
                let str1 = "";
                // let n = 0;

                for (let i of savedData.blocks) {
                    // Checklist - Custom
                    // if (i.type === 'checklist') {
                    //     str1 += "\n";
                    //     for (let j of i.data.items) {
                    //         str1 += j.text + " ";
                    //         n += j.text.length;
                    //     }
                    // }
                    // Code
                    // else if (i.type === 'code') {
                    //     str1 += "\n";
                    //     n += i.data.code.length;
                    //     str1 += i.data.code + " ";
                    // }
                    // Warning - Custom
                    // else if (i.type === 'warning') {
                    //     str1 += "\n";
                    //     n += i.data.message.length;
                    //     str1 += i.data.message + " ";
                    //     n += i.data.title.length;
                    //     str1 += i.data.title + " ";
                    // }
                    // Delimiter
                    // else if (i.type === 'delimiter') {
                    //     str1 += "\n";
                    //     n += 1;
                    // }

                    // Quote
                    if (i.type === 'quote') {
                        str1 += "\n";
                        // n += i.data.caption.length;
                        str1 += i.data.caption + " ";
                        // n += i.data.text.length;
                        str1 += i.data.text + " ";
                    }

                    // Raw - Custom
                    else if (i.type === 'raw') {
                        str1 += "\n";
                        // n += i.data.html.length;
                        str1 += i.data.html + " ";
                    }


                    // List
                    else if (i.type === 'list') {
                        str1 += "\n";
                        for (let j of i.data.items) {
                            // n += j.content.length;
                            str1 += j.content + " ";
                        }
                    }

                    // Table - Custom
                    else if (i.type === 'table') {
                        str1 += "\n";
                        for (let j of i.data.content) {
                            for (let k of j) {
                                // n += k.length;
                                str1 += k + " ";
                            }
                        }
                    }

                    // Image
                    else if (i.type === 'image') {
                        str1 += "\n";
                        // n += i.data.caption.length;
                        str1 += i.data.caption + " ";
                    }

                    // Other
                    else {
                        str1 += "\n";
                        // n += i.data.text.length;
                        str1 += i.data.text + " ";
                    }
                }

                str1 = str1.replaceAll('<mark>', '');
                str1 = str1.replaceAll('</mark>', '');
                str1 = str1.replaceAll('&nbsp;', ' ');
                str1 = str1.replaceAll('\n', ' ');
                str1 = str1.replaceAll('\r', ' ');
                str1 = str1.replace(/\s\s+/g, ' ');
                // console.log(str1);
                let strArr = str1.split(' ');

                strArr = strArr.filter((e) => {
                    return e !== '';
                });

                let chars = str1.length;
                let n = chars;
                let words = strArr.length;
                let total_time_rt = words / 200;

                let time_min_rt = Math.floor(total_time_rt);
                let time_sec_rt;

                if (time_min_rt >= 1) {
                    time_sec_rt = Math.floor((total_time_rt - time_min_rt) * 60);
                }
                else {
                    time_sec_rt = Math.floor(total_time_rt * 60);
                }

                let total_time_st = words / 150;
                let time_min_st = Math.floor(total_time_st);
                let time_sec_st, rt, st;

                if (time_min_st >= 1) {
                    time_sec_st = Math.floor((total_time_st - time_min_st) * 60);
                }
                else {
                    time_sec_st = Math.floor(total_time_st * 60);
                }

                if (time_min_rt !== 0) {
                    rt = `${time_min_rt} minute and ${time_sec_rt} second reading time`;
                }
                else {
                    rt = `${time_sec_rt} second reading time`;
                }

                if (time_min_st !== 0) {
                    st = `${time_min_st} minute and ${time_sec_st} second speaking time`;
                }
                else {
                    st = `${time_sec_st} second speaking time`;
                }

                setBottomBar({
                    words: `${words} Words`,
                    chars: `${chars} Characters`,
                    rt,
                    st
                });

                setStrData(str1);

                let stnPrevZ = localStorage.getItem('stnPrevZ');
                if (!stnPrevZ) {
                    let t = {};
                    t[`h${articleId}`] = 1;
                    stnPrevZ = 1;
                    localStorage.setItem('stnPrevZ', JSON.stringify(t));
                }
                else {
                    stnPrevZ = JSON.parse(stnPrevZ)[`h${articleId}`];
                    if (!stnPrevZ) {
                        let tempPrevZ = JSON.parse(localStorage.getItem('stnPrevZ'));
                        tempPrevZ[`h${articleId}`] = 1;
                        localStorage.setItem('stnPrevZ', JSON.stringify(tempPrevZ));
                        stnPrevZ = 1;
                    }
                }

                // Save on every 50 words
                if (n >= (50 * stnPrevZ) || n % 50 === 0) {
                    let tempPrevZ = JSON.parse(localStorage.getItem('stnPrevZ'));
                    ++tempPrevZ[`h${articleId}`];
                    localStorage.setItem('stnPrevZ', JSON.stringify(tempPrevZ));
                    onEditorStateChange1(savedData.blocks, { words, grade: 'A-' });
                }

                // Save on real-time
                else {
                    onEditorStateChange(savedData.blocks);
                }

            });
        },

        data: {
            blocks: ans1
        }
    });
    setEditorS(editor);
    return editor;
};

// Expand the cards by their id
const expandById = (id) => {
    if (document.querySelector('.editor-main12').style.width === '0px') {
        toggleAssistant();
    }

    let b2 = document.querySelectorAll('.em2-box14');
    for (var i of b2) {
        i.classList.remove('em2-box14_b');
    }
    let b1 = document.querySelectorAll('.em2-box2');
    for (var j of b1) {
        j.classList.remove('em2-box2-ani');
        j.classList.remove('em2-box2-ani1');
        j.previousElementSibling.style.display = 'flex';
    }
    let b3 = document.querySelectorAll('.learnMore');
    for (var k of b3) {
        if (k.classList.contains('dictionary')) {
            k.innerText = 'Add to dictionary';
        }
        else {
            k.innerText = 'Learn more';
        }
    }
    if (document.getElementById(`${id}1`)) {
        document.getElementById(`${id}1`).children[0].style.display = 'none';
        document.getElementById(`${id}1`).children[1].classList.add('em2-box2-ani');
    }
};

// Toggling side grammar bar (Except advanced button)
export const toggleAssistant = () => {
    if (document.querySelector('.editor-main12').style.width !== '0px') {
        document.getElementById('assisBtn').innerText = 'CORRECT WITH ASSISTANT';
        document.getElementById('assisBtn1').style.display = 'flex';
        if (!document.getElementById('assisBtn').classList.contains('btn-info')) {
            document.getElementById('assisBtn').classList.add('btn-info');
            document.getElementById('assisBtn').classList.remove('btn-secondary');
        }
        document.querySelector('.editor-main12').style.right = '-750px';
        document.querySelector('.editor-main12').style.width = '0';
        document.querySelector('.editor-main11').style.width = '90%';
    }
    else {
        document.getElementById('assisBtn1').style.display = 'none';
        if (!document.getElementById('assisBtn').classList.contains('btn-secondary')) {
            document.getElementById('assisBtn').classList.add('btn-secondary');
            document.getElementById('assisBtn').classList.remove('btn-info');
        }
        document.getElementById('assisBtn').innerText = 'HIDE ASSISTANT';
        document.querySelector('.editor-main12').style.right = '0px';
        document.querySelector('.editor-main12').style.width = '49%';
        document.querySelector('.editor-main11').style.width = '51%';
    }
};

export const toggleText = async (mainData, editorContext) => {
    const { setMainData, textList, setSideUtils, blockIds, setBlockIds, setFlag3, idNum } = editorContext;
    var { setTc } = editorContext;

    if (mainData.length !== 0) {
        // Toggle between highlighted texts
        let b1 = document.querySelectorAll('.gr0am0');

        for (var i = 0; i < b1.length; i++) {
            b1[i].addEventListener('click', (e) => {

                for (var j of b1) {
                    j.style.backgroundColor = 'unset';
                }

                if (e.target.classList.contains('gr0am0-clarity-ht') || e.target.classList.contains('gr0am1-clarity-ht')) {
                    e.target.style.backgroundColor = 'rgb(224 202 252)';
                    expandById(e.target.id);
                }
                else if (e.target.classList.contains('gr0am0-correct-ht') || e.target.classList.contains('gr0am1-correct-ht')) {
                    e.target.style.backgroundColor = '#ffcdcd';
                    expandById(e.target.id);
                    // console.log('yes');
                }
                else if (e.target.classList.contains('gr0am0-engagem-ht') || e.target.classList.contains('gr0am1-engagem-ht')) {
                    e.target.style.backgroundColor = 'rgb(202 226 252)';
                    expandById(e.target.id);
                }
                else if (e.target.classList.contains('gr0am0-tone-ht') || e.target.classList.contains('gr0am1-tone-ht')) {
                    e.target.style.backgroundColor = 'rgb(216 252 202)';
                    expandById(e.target.id);
                }
            });
        }

        // Remove the highlights if highlighted text is edited
        let b2 = document.querySelectorAll('.cdx-block');

        for (let i1 = 0; i1 < b2.length; i1++) {
            b2[i1].addEventListener('input', () => {
                let temp1 = localStorage.getItem('ttc');

                if (temp1) {
                    if (Number(temp1) >= b2.length - (i1)) {
                        localStorage.setItem('ttc', 0);
                    }
                    else {
                        localStorage.setItem('ttc', ++temp1);
                    }
                }
                else {
                    localStorage.setItem('ttc', 0);
                }

                if (Number(temp1) === b2.length - (i1)) {
                    localStorage.setItem('ttc', 0);
                    let b10 = document.querySelectorAll('.gr0am0');
                    var tt1 = [];
                    var tt2 = [];

                    for (let i = 0; i < b10.length; i++) {
                        tt1.push(b10[i].innerText);
                        tt2.push(b10[i].innerText);
                    }

                    var ttFlag = false;

                    for (let j = 0; j < tt1.length; j++) {

                        if (textList[j] !== tt1[j]) {
                            let tempUtils = JSON.parse(localStorage.getItem('localMainData')).sideUtils;

                            if (b10[j].classList.contains('gr0am0-clarity-ht') || b10[j].classList.contains('gr0am1-clarity-ht')) {
                                tempUtils = { ...tempUtils, 'Clarity': --tempUtils.Clarity };
                            }
                            else if (b10[j].classList.contains('gr0am0-engagem-ht') || b10[j].classList.contains('gr0am1-engagem-ht')) {
                                tempUtils = { ...tempUtils, 'Engagement': --tempUtils.Engagement };
                            }
                            else if (b10[j].classList.contains('gr0am0-correct-ht') || b10[j].classList.contains('gr0am1-correct-ht')) {
                                tempUtils = { ...tempUtils, 'Correctness': --tempUtils.Correctness };
                            }
                            else if (b10[j].classList.contains('gr0am0-tone-ht') || b10[j].classList.contains('gr0am1-tone-ht')) {
                                tempUtils = { ...tempUtils, 'Tone': --tempUtils.Tone };
                            }

                            setSideUtils(tempUtils);
                            localStorage.setItem('localMainData', JSON.stringify({ ...JSON.parse(localStorage.getItem('localMainData')), 'sideUtils': tempUtils }));
                            ttFlag = true;

                            mainData[i1].alerts = mainData[i1].alerts.filter((e, index) => {
                                return blockIds[i1][index] !== b10[j].id;
                            });

                            // Adding removed card index to tackle card highlights after card correction.
                            let tt = idNum[blockIds[i1][j]];
                            let totalRemovedArr = localStorage.getItem('totalRemovedArr');

                            if (totalRemovedArr) {
                                totalRemovedArr = JSON.parse(totalRemovedArr);
                            }
                            else {
                                totalRemovedArr = {};
                            }

                            if (Object.keys(totalRemovedArr).includes(String(i1))) {
                                totalRemovedArr[i1].push(tt);
                            }
                            else {
                                totalRemovedArr[i1] = [tt];
                            }
                            localStorage.setItem('totalRemovedArr', JSON.stringify(totalRemovedArr));


                            blockIds[i1].splice(j, 1);
                            setBlockIds(blockIds);
                            setMainData(mainData);
                            b10[j].className = "";
                            b10[j].style.backgroundColor = "white";
                            tt1.splice(j, 1);
                            textList.splice(j, 1);
                            setTc(textList.length);

                            if (textList.length === 0) {
                                setFlag3(true);
                                document.querySelector('.em2').style.display = 'none';
                            }
                        }

                        if (ttFlag) {
                            break;
                        }
                    }
                }
            });
        }
    }
};

// Alert when saving the data
export const saveAlert = (editorContext) => {
    const { setFlag1 } = editorContext;

    setFlag1(true);
    setTimeout(() => {
        setFlag1(false);
    }, 2500);
};

// Saving the article title on blur event
export const editor_head_save = async (context, articleId, editorContext) => {
    const { editor_head } = editorContext;
    const userIp = await publicIpv4();

    if (editor_head === '') {
        await context.updateArticleHead(articleId, "Untitled", userIp);
        document.getElementById('editor_head').style.width = 170 + 'px';
    }
    else {
        await context.updateArticleHead(articleId, editor_head);
    }
};
