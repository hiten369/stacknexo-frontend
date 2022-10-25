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
        words:'0 Words',
        chars:'0 Characters',
        rt:'Reading Time - not enough text',
        st:'Speaking Time - not enough text'
    });

    // Tooltip initialization
    const tooltip = new Tooltip1();

    var intialCardNum = 0;
    let blockNum = 0;
    var editor = null;

    const [editorS, setEditorS] = useState(editor);

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
        setGrammarFlag(true);
        setGrammarFlag1(true);

        // Sending data to grammar (Web Socket)
        onEditorStateChange2(savedData.blocks, strData, flag, goals);
    };

    return (
        <>
            <EditorContext.Provider value={{ data, setData, flag1, setFlag1, updateTime, setUpdateTime, publishTime, setPublishTime, readOnlyFlag, setReadOnlyFlag, editor_head, setEditor_head, mainData, setMainData, flag2, setFlag2, flag4, setFlag4, dataMatch, setDataMatch, textList, setTextList, strData, setStrData, mainType, setMainType, flag3, setFlag3, grammarFlag, setGrammarFlag, grammarFlag1, setGrammarFlag1, alertMsg, setAlertMsg, alertUndoMsg, setAlertUndoMsg, blockDetails, setBlockDetails, blockIds, setBlockIds, idNum, setIdNum, goals, setGoals, sideUtils, setSideUtils, dictWords, setDictWords, takeOverMsg, settakeOverMsg, targetUserId, setTargetUserId, tooltip, intialCardNum, tc, setTc, blockNum, editor, checkGr, editorS, setEditorS, setBottomBar, bottomBar }}>
                {props.children}
            </EditorContext.Provider>
        </>
    )
}

export default EditorState;
