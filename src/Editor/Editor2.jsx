import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../context/MainContext';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import './editor.css';
import Alert1 from '../Alert/Alert1';
import Alert2 from '../Alert/Alert2';
import Sidebar from './Sidebar';
import HeartBeatHandler from '../HeartBeatHandler';
import SetPerformanceModal from './Modals/SetPerformanceModal';
import SetGoalModal from './Modals/SetGoalModal';
import GrammarPanel from './Sidepanel/GrammarPanel';
import DictionaryModal from './Modals/DictionaryModal';
import TakeOverModal from './Modals/TakeOverModal';
import TakeOverModal1 from './Modals/TakeOverModal1';
import { func1, func, editor_head_change, initializeEditor, toggleAssistant, toggleText, saveAlert, editor_head_save } from './Utils/EditorUtil';
import { closeAlert, dltCard, expand1, expand2, textChange, trigger_active, alertUndo } from './Utils/GrammarUtils';
import { dis_goals, goalsReset, initializeGoals, setGoals1, toggleGoalsUniversal, toggle_goals, toggle_intent } from './Utils/GoalsUtils';
import { updateDict, updateDictModal } from './Utils/DictionaryUtil';
import EditorContext from '../context/EditorContext';
import TakeOverModal2 from './Modals/TakeOverModal2';
import WordsBar from './BottomBar/WordsBar';
import RevisionBar from './BottomBar/RevisionBar';
import Header from './Header/Header';
import RevisionPopup from './Popups/RevisionPopup';
import ProgressBar from "@ramonak/react-progress-bar";
import AddCustomTopicModal from './Modals/AddCustomTopicModal';
import Mark from 'mark.js';
import { publicIpv4 } from 'public-ip';
// import Warning from '@editorjs/warning'
// import Code from '@editorjs/code'
// import CheckList from '@editorjs/checklist'
// import Delimiter from '@editorjs/delimiter'
// import InlineCode from '@editorjs/inline-code'
// import { w3cwebsocket } from 'websocket';
// import useScript from '../CustomScripts/UseScript';

var client1;
var modalClickFlag = true;
var editorG;
var int;

const Editor2 = (props) => {
  // ***Editor Section***
  const context = useContext(MainContext);
  const editorContext = useContext(EditorContext);

  const { data, flag1, updateTime, publishTime, editor_head, mainData, setMainData, flag2, flag4, dataMatch, setTextList, mainType, flag3, setFlag3, grammarFlag, setGrammarFlag, grammarFlag1, setGrammarFlag1, alertMsg, blockDetails, setBlockDetails, blockIds, setBlockIds, setIdNum, sideUtils, setSideUtils, dictWords, takeOverMsg, settakeOverMsg, targetUserId, setTargetUserId, tooltip, checkGr, strData, mainDataRefreshFlag, tagData } = editorContext;
  var { intialCardNum, blockNum, tc, setTc } = editorContext;

  const navigate = useNavigate();
  const { articleId } = useParams();

  const [senderUserId, setSenderUserId] = useState('');
  const [takeOverFlag, setTakeOverFlag] = useState(false);
  const [instances, setInstances] = useState([]);
  const [revisionFlag, setRevisionFlag] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const [revisionStats, setRevisionStats] = useState({
    old: '',
    current: ''
  });
  const [showOverviewFlag, setShowOverviewFlag] = useState(false);
  const [topics, setTopics] = useState({});
  const [ignoredTopics, setIgnoredTopics] = useState([]);
  const [isTcExpanded, setIsTcExpanded] = useState(false);
  const [customTopic, setCustomTopic] = useState([]);

  // Start later
  // Update the article real time
  const onEditorStateChange = (text) => {
    client1.send(JSON.stringify({
      type: "realTime",
      content: text,
      type1: "ARTICLE",
      articleId: articleId,
    }));
  };

  // Update the article goals (Editor wise)
  const onEditorStateChange3 = (goalsObj) => {
    client1.send(JSON.stringify({
      type: "update",
      type1: "GOALS",
      articleId: articleId,
      goalsObj: goalsObj
    }));
  };

  // Update the article goals (User wise - Universal)
  const onEditorStateChange4 = (goalsObj, name, flag) => {
    client1.send(JSON.stringify({
      type: "update",
      type1: "GOALSUSER",
      name: name,
      flag: flag,
      articleId: articleId,
      goalsObj: goalsObj
    }));
  };

  // Update the dictionary (User)
  const onEditorStateChange5 = async (dictWord) => {
    const userIp = await publicIpv4();
    client1.send(JSON.stringify({
      type: "update",
      type1: "USERDICT",
      articleId: articleId,
      dictWord: dictWord,
      userIp
    }));
  };

  // Save the article instances (every 50 characters)
  const onEditorStateChange1 = (text, data) => {
    client1.send(JSON.stringify({
      type: "onDemand",
      content: text,
      data,
      type1: "ARTICLE",
      articleId: articleId
    }));
  };

  // Check for grammarly
  const onEditorStateChange2 = (text, str, flag, goalsObj) => {
    // console.log(text, str);
    client1.send(JSON.stringify({
      type: "fetch",
      content: text,
      type1: "GRAMMAR",
      articleId: articleId,
      text: str,
      flag: flag,
      goalsObj: goalsObj
    }));
  };

  // Start later
  // Get article revisions (version history)
  const getVersionHistory = () => {
    client1.send(JSON.stringify({
      type: "versionHistory",
      type1: "ARTICLE",
      articleId: articleId,
    }));
  };

  // Post new notification
  const post_noti = (data) => {
    client1.send(JSON.stringify({
      type: "post",
      type1: "NOTIFICATION",
      data: data
    }));
  };

  // Update notification
  const update_noti = (data) => {
    context.client.send(JSON.stringify({
      type: "put",
      type1: "NOTIFICATION",
      data: data
    }));
  };

  // Get new message
  const get_msg = () => {
    client1.send(JSON.stringify({
      type: "get",
      type1: "MESSAGE",
    }));
  };

  // Delete all messages
  const delete_msg = () => {
    client1.send(JSON.stringify({
      type: "delete",
      type1: "MESSAGE",
    }));
  };

  // *** target user will be different for this ***
  const sendMsg = ({ msgDesc, msgFlag }) => {
    modalClickFlag = true;
    // console.log(senderUserId);
    client1.send(JSON.stringify({
      type: "post",
      type1: "MESSAGE",
      data: { msgDesc, msgFlag, msgUser: senderUserId }
    }));
  };

  const takeOver = async (e, flag) => {
    if (!flag) {
      // send request to the user who is currently accessing the article.
      post_noti({ notiTitle: "demo title", notiDesc: "demo desc", notiType: "info", notiFlag1: true, notiURL: articleId, notiUser: targetUserId });

      // Setting the timer; disable the button (n seconds)
      let n = 5;
      settakeOverMsg(`Request for take over the article has been sent. You can request for re-takeover in ${n} seconds.`)
      e.target.setAttribute('disabled', true);
      e.target.innerText = 'Request Pending';

      // Clear the previous intervals
      clearInterval(int);

      // Constantly check for the action from user who is currently accessing the article (every 2 seconds).
      int = setInterval(() => {
        get_msg();
      }, 3000);

      // Countdown timer.
      let s1 = setInterval(() => {
        settakeOverMsg(`Request for take over the article has been sent. You can request for re-takeover in ${--n} seconds.`);
      }, 1000);

      // Reset the timer.
      setTimeout(() => {
        e.target.removeAttribute('disabled');
        e.target.innerText = 'Take Over';
        clearInterval(s1);
      }, 5000);
    }
    else {
      const userIp = await publicIpv4();
      // Direct access to article
      post_noti({ notiTitle: "demo title", notiDesc: "demo desc", notiType: "info", notiFlag1: true, notiURL: articleId, notiUser: targetUserId, notiFlag2: true });
      await context.updateActiveUser(articleId, JSON.parse(localStorage.getItem('stackNUser')).designationName, userIp);
      document.getElementById('takeOverModalBtn').click();
    }
  };

  // Multi-User Utility
  const multiUserUtil = async (id) => {
    let lastHb = await context.lastHeartBeat(id);

    if (!lastHb.data) {
      return false;
    }

    let lastHbTime = lastHb.data.ts;
    let currentTime = new Date().getTime();

    if (currentTime - lastHbTime < 20000) {
      let cUrl = lastHb.data.userEvent.currentTab;
      let currentUrl = window.location.href;

      if (Object.keys(cUrl).includes(currentUrl)) {
        return true;
      }
    }
    return false;
  };

  const getMultiData = async () => {
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

    const userIp = await publicIpv4();
    const article = await context.getArticle(articleId, userIp);
    const articleActiveUser = article.data[0].articleActiveUser;
    const activeUserId = articleActiveUser.userId; // article user id
    setTargetUserId(activeUserId);
    const activeUserType = articleActiveUser.userType; // article user type
    const currentUserType = JSON.parse(localStorage.getItem('stackNUser')).designationName;

    if (activeUserId === '') {
      const userIp = await publicIpv4();
      await context.updateActiveUser(articleId, currentUserType, userIp);
    }
    else {
      const curretUserId = JSON.parse(localStorage.getItem('stackNUser')).userId;

      // if last user of article is not the current user of article
      if (activeUserId !== curretUserId) {
        let multiUserFlag = await multiUserUtil(activeUserId);

        // Check the currect status of user (if user is currently working on the article)
        if (multiUserFlag) {
          // if admin is accessing the article
          if (activeUserType === 'ADMIN') {
            // if incoming connection is user
            if (currentUserType === 'USER') {
              // console.log('11');
              // Request Takeover
              setTakeOverFlag(false);
              document.getElementById('takeOverModalBtn').click();
            }

            // if incoming connection is editor
            if (currentUserType === 'EDITOR') {
              // console.log('12');
              // Request Takeover
              setTakeOverFlag(false);
              document.getElementById('takeOverModalBtn').click();
            }

            // if incoming connection is admin
            if (currentUserType === 'ADMIN') {
              // console.log('13');
              // Request Takeover
              setTakeOverFlag(false);
              document.getElementById('takeOverModalBtn').click();
            }
          }

          // if editor is accessing the article
          if (activeUserType === 'EDITOR') {
            // if incoming connection is user
            if (currentUserType === 'USER') {
              // console.log('21');
              // Request Takeover
              setTakeOverFlag(false);
              document.getElementById('takeOverModalBtn').click();
            }

            // if incoming connection is editor
            if (currentUserType === 'EDITOR') {
              // console.log('22');
              // Request Takeover
              setTakeOverFlag(false);
              document.getElementById('takeOverModalBtn').click();
            }

            // if incoming connection is admin
            if (currentUserType === 'ADMIN') {
              // console.log('23');
              // Direct Access
              setTakeOverFlag(true);
              document.getElementById('takeOverModalBtn').click();
            }
          }

          // if user is accessing the article
          if (activeUserType === 'USER') {
            // if incoming connection is user
            if (currentUserType === 'USER') {
              // console.log('31');
              // Request Takeover
              setTakeOverFlag(false);
              document.getElementById('takeOverModalBtn').click();
            }

            // if incoming connection is editor
            if (currentUserType === 'EDITOR') {
              // console.log('32');
              // Direct Access
              setTakeOverFlag(true);
              document.getElementById('takeOverModalBtn').click();
            }

            // if incoming connection is admin
            if (currentUserType === 'ADMIN') {
              console.log('33');
              // Direct Access
              setTakeOverFlag(true);
              document.getElementById('takeOverModalBtn').click();
            }
          }
        }
        else {
          const userIp = await publicIpv4();
          // Direct access by user 
          await context.updateActiveUser(articleId, currentUserType, userIp);
        }
      }
    }
  };

  const getGoalsData = async () => {
    localStorage.setItem('ttc', 0);
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      initializeGoals(editorContext, context, articleId);
    }
    else {
      props.setAlert('danger', 'Not Authorised! Login in to continue');
      navigate('/login');
    }
  };

  // Handeling Multi-User and overview api data
  // Setting the goals
  useEffect(() => {
    getGoalsData();
    getMultiData();
  }, []);

  const getEditorData = async () => {
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      let ans = await initializeEditor(context, articleId, onEditorStateChange, onEditorStateChange1, getVersionHistory, editorContext);
      getVersionHistory();
      editorG = ans;
    }
    else {
      props.setAlert('danger', 'Not Authorised! Login in to continue');
      navigate('/login');
    }
  };

  // Managing date time, article heading, page title and editor js
  useEffect(() => {
    getEditorData();
  }, [articleId]);

  // Managing tooltip and websocket messages (response from backend)
  useEffect(() => {
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      let t0 = document.querySelectorAll('.ce-toolbox__button')[0];
      let t1 = document.querySelectorAll('.ce-toolbox__button')[1];
      let t2 = document.querySelectorAll('.ce-toolbox__button')[2];
      let t3 = document.querySelectorAll('.ce-toolbox__button')[3];
      let t4 = document.querySelectorAll('.ce-toolbox__button')[4];
      let t5 = document.querySelectorAll('.ce-toolbox__button')[5];
      let t6 = document.querySelectorAll('.ce-toolbox__button')[6];

      if (t1) {
        tooltip.onHover(t0, 'Text', {
          placement: 'top'
        });
        tooltip.onHover(t1, 'Heading', {
          placement: 'top'
        });
        tooltip.onHover(t2, 'Table', {
          placement: 'top'
        });
        tooltip.onHover(t3, 'List', {
          placement: 'top'
        });
        tooltip.onHover(t4, 'Image', {
          placement: 'top'
        });
        tooltip.onHover(t5, 'Raw HTML', {
          placement: 'top'
        });
        tooltip.onHover(t6, 'Quote', {
          placement: 'top'
        });
      }

      if (context.client) {
        client1 = context.client;

        client1.onopen = async () => {
          const userIp = await publicIpv4();
          let ans = await context.getArticle(articleId, userIp);
          if (ans.success) {
            if (ans.data.length !== 0) {
              client1.send(JSON.stringify({ "type1": "ARTICLE", "articleId": articleId }));
              console.log('WebSocket Client Connected');
            }
            else {
              window.location.href = "/not_found";
            }
          }
          else {
            window.location.href = "/not_found";
          }
        };

        blockNum = 0;
        client1.onmessage = async (message) => {
          const dataFromServer = JSON.parse(message.data);
          // console.log(dataFromServer);

          if (dataFromServer.type1 === 'ARTICLE') {
            // Response when article is updating real-time
            if (dataFromServer.type === "realTime") {
              let ans = dataFromServer.data;
              if (ans.success) {
                saveAlert(editorContext);
              }
              else {
                props.setAlert('danger', ans.message);
              }
            }

            // Response when article is updating every 50 characters
            else if (dataFromServer.type === "onDemand") {
              let ans = dataFromServer.data;
              if (ans.success) {
                saveAlert(editorContext);
                getVersionHistory();
              }
              else {
                props.setAlert('danger', ans.message);
              }
            }

            // Response of getting article instances
            else if (dataFromServer.type === "versionHistory") {
              let ans = dataFromServer.data;
              setInstances(ans.data.articleData);
            }
          }
          else if (dataFromServer.type1 == 'GRAMMAR') {
            // if response is for editor block's changes (for making grammar button disable when processing)
            if (dataFromServer.type === "fetch") {

              // Counting the number of blocks using localStorage (One by one as response recieving)
              let localBlockCount = localStorage.getItem('localBlockCount');

              if (localBlockCount) {
                blockNum = JSON.parse(localBlockCount).blockNum + 1;
                localStorage.setItem('localBlockCount', JSON.stringify({
                  blockNum: blockNum
                }));
              }
              else {
                localStorage.setItem('localBlockCount', JSON.stringify({
                  blockNum: 1,
                }));
                blockNum = 1;
              }

              // Saving the data
              const savedData = await editorG.save();

              // Total count of blocks (instant)
              let blockNum1 = savedData.blocks.length;
              console.log(blockNum, blockNum1);

              // Disable the check grammar, correct text button until all blocks are fetched.
              if (blockNum === blockNum1) {
                setGrammarFlag1(false);
              }
            }

            // if grammar send something (i.e., not null) - Handling the grammar data
            if (dataFromServer.data.grammarly) {
              if (dataFromServer.data.grammarly.str) {
                console.log(dataFromServer.data.grammarly);

                // Storing the highlighted text's id and text itself
                // Generating an element in which edited string is stored (String recieved from server)
                let temp1 = document.createElement('div');
                temp1.innerHTML = dataFromServer.data.grammarly.str.text;

                // Update the editor with blocks sent by grammarly
                editorG.blocks.update(dataFromServer.data.grammarly.ids, dataFromServer.data.grammarly.str);

                // Insert html tags here
                let tagData=JSON.parse(localStorage.getItem("stnTagData"));
                console.log(tagData);
                if(tagData.length>0)
                {
                  let replacedString=document.querySelector('.ce-block__content').children[0].innerHTML;
  
                  for (let i=tagData.length-1;i>=0;i--) {
                    replacedString = replace_nth(replacedString, tagData[i].text, tagData[i].replacement, tagData[i].occurrance);
                  }
  
                  console.log(replacedString);
                  document.querySelector('.ce-block__content').children[0].innerHTML=replacedString;
                }

                // Initialy set the block details sent by grammarly which includes block id and text
                if (blockDetails.length === 0) {
                  setBlockDetails(blockDetails.concat({
                    id: dataFromServer.data.grammarly.ids,
                    text: dataFromServer.data.grammarly.str.text
                  }));
                }

                // Initially set the count of cards in each block
                intialCardNum += dataFromServer.data.grammarly.data.alerts.length;

                // Initialising the localStorage and handeling data with the help of it.
                let localMainData = localStorage.getItem('localMainData');

                if (localMainData) {
                  localMainData = JSON.parse(localMainData);

                  // Setting the cards count
                  intialCardNum = localMainData.intialCardNum + dataFromServer.data.grammarly.data.alerts.length;

                  for (let i of dataFromServer.data.grammarly.data.alerts) {
                    // Filtering out the dictionary words
                    if (dictWords.includes(i.highlightText)) {
                      intialCardNum--;
                    }
                  }

                  let tempArr = [];
                  let tempIdNum1 = 0;

                  for (let i of temp1.children) {
                    localMainData.idNum[i.id] = tempIdNum1++;
                    localMainData.textList.push(i.innerText);
                    tempArr.push(i.id);

                    if (i.children.length !== 0) {
                      let k = i.children;

                      for (let j of k) {
                        localMainData.idNum[j.id] = tempIdNum1++;
                        localMainData.textList.push(j.innerText);
                        tempArr.push(j.id);

                        if (j.children.length !== 0) {
                          k = j.children;
                        }
                      }
                    }
                  }

                  setIdNum(localMainData.idNum);
                  localMainData.blockIds[blockNum - 1] = tempArr;
                  setBlockIds(localMainData.blockIds);
                  setTextList(localMainData.textList);

                  // Concating previous localstorage data and Setting block details and main data (alerts) with the help of local storage
                  setBlockDetails(localMainData.blockDetails.concat({
                    id: dataFromServer.data.grammarly.ids,
                    text: dataFromServer.data.grammarly.str.text
                  }));
                  setMainData(localMainData.mainData.concat(dataFromServer.data.grammarly.data));

                  // Setting sidebar secions values
                  let tempSideUtil = {
                    Correctness: 0,
                    Clarity: 0,
                    Engagement: 0,
                    Tone: 0
                  };

                  for (let j of localMainData.mainData.concat(dataFromServer.data.grammarly.data)) {
                    for (let i of j.alerts) {
                      tempSideUtil = ({ ...tempSideUtil, [i.cardLayout.outcome]: ++tempSideUtil[i.cardLayout.outcome] });
                    }
                  }

                  setSideUtils(tempSideUtil);

                  // Concating previous localstorage data with Grammarly alerts and their data and block details in localstorage, blockIds, textLists
                  localStorage.setItem("localMainData", JSON.stringify({
                    mainData: localMainData.mainData.concat(dataFromServer.data.grammarly.data), blockDetails: localMainData.blockDetails.concat({
                      id: dataFromServer.data.grammarly.ids,
                      text: dataFromServer.data.grammarly.str.text
                    }),
                    intialCardNum: intialCardNum, blockIds: localMainData.blockIds, textList: localMainData.textList, idNum: localMainData.idNum, sideUtils: tempSideUtil
                  }));
                }
                else {
                  // Initially set the count of cards in each block
                  intialCardNum = dataFromServer.data.grammarly.data.alerts.length;

                  // Storing and setting the highlighted text's id and text
                  let blockIds1 = [];
                  let blockIds2 = [];
                  let tempIdNum = 0;
                  let tempIdObj = {};

                  for (let i of temp1.children) {
                    blockIds1.push(i.id);
                    blockIds2.push(i.innerText);
                    tempIdObj[i.id] = tempIdNum++;

                    if (i.children.length !== 0) {
                      let k = i.children;

                      for (let j of k) {
                        tempIdObj[j.id] = tempIdNum++;
                        blockIds1.push(j.id);
                        blockIds2.push(j.innerText);

                        if (j.children.length !== 0) {
                          k = j.children;
                        }
                      }
                    }
                  }

                  setIdNum(tempIdObj);
                  setBlockIds({ "0": blockIds1 });
                  setTextList(blockIds2);

                  // Setting sidebar section values (alerts)
                  let tempSideUtil = {
                    Correctness: 0,
                    Clarity: 0,
                    Engagement: 0,
                    Tone: 0
                  };

                  for (let i of dataFromServer.data.grammarly.data.alerts) {
                    tempSideUtil = { ...tempSideUtil, [i.cardLayout.outcome]: ++tempSideUtil[i.cardLayout.outcome] };

                    // Filtering out the dictionary words
                    if (dictWords.includes(i.highlightText)) {
                      intialCardNum--;
                    }
                  }
                  // console.log(intialCardNum);
                  setSideUtils(tempSideUtil);

                  // Re-setting the main data (alert cards)
                  setMainData(mainData.concat(dataFromServer.data.grammarly.data));

                  // Re-setting the block details
                  setBlockDetails(blockDetails.concat({
                    id: dataFromServer.data.grammarly.ids,
                    text: dataFromServer.data.grammarly.str.text
                  }));

                  // Initialising Grammarly alerts and their data and block details in localstorage
                  localStorage.setItem('localMainData', JSON.stringify({
                    mainData: [dataFromServer.data.grammarly.data], blockDetails: [{
                      id: dataFromServer.data.grammarly.ids,
                      text: dataFromServer.data.grammarly.str.text
                    }],
                    intialCardNum: intialCardNum, blockIds: { "0": blockIds1 }, textList: blockIds2, idNum: tempIdObj, sideUtils: tempSideUtil
                  }));
                }
                // console.log(intialCardNum);
                setTc(intialCardNum);

                // Disabling the check grammar button until unless the data is fetched
                setGrammarFlag(false);

                if (intialCardNum > 0) {
                  setFlag3(false);
                }
              }
            }
            else {
              setGrammarFlag(false);
            }
          }
          else if (dataFromServer.type1 === 'MESSAGE') {
            if (dataFromServer.type === "get") {
              for (let i of dataFromServer.data.data) {
                if (i.msgFlag) {
                  // Clear the message interval
                  clearInterval(int);
                  settakeOverMsg(<p className="text-success">{i.msgDesc}</p>);

                  // close the modal box.
                  document.getElementById('takeOverModalBtn').click();

                  const userIp = await publicIpv4();
                  // Grant access to user to access the article
                  await context.updateActiveUser(articleId, JSON.parse(localStorage.getItem('stackNUser')).designationName, userIp);
                }
                else {
                  settakeOverMsg(<p className="text-danger">{i.msgDesc}</p>);
                }
                setTimeout(() => {
                  delete_msg();
                }, 600);
              }
            }
          }
          else if (dataFromServer.type1 === 'NOTIFICATION') {
            if (dataFromServer.type === 'get') {
              let curretUser = JSON.parse(localStorage.getItem('stackNUser')).userId;
              for (let i of dataFromServer.data.data) {
                if (i.notiUser === curretUser) {
                  if (i.notiFlag1) {
                    props.notify({ id: i._id, title: i.notiTitle, desc: i.notiDesc, type: i.notiType });
                    if (articleId === i.notiURL) {
                      if (i.notiFlag2) {
                        // pop-up a modal
                        document.getElementById('takeOverModalBtn2').click();
                      }
                      else {
                        setSenderUserId(i.notiSender);
                        if (modalClickFlag) {
                          document.getElementById('takeOverModalBtn1').click();
                        }
                      }

                      setTimeout(() => {
                        update_noti({ notiId: i._id, notiFlag: false, notiFlag1: false, notiFlag2: false });
                      }, 1000);
                      modalClickFlag = false;
                    }
                  }
                }
              }
            }
          }
        };
      }
    }
    else {
      props.setAlert('danger', 'Not Authorised! Login in to continue');
      navigate('/login');
    }
  }, [editor_head]);

  // Toggling between highlighted texts and triggering cards by clicking it, edit highlighted text.
  useEffect(() => {
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      toggleText(mainData, editorContext);
    }
    else {
      props.setAlert('danger', 'Not Authorised! Login in to continue');
      navigate('/login');
    }
  }, [mainData]);

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

  // Toggling side grammar bar when clicked on advanced button (not in use)
  function toggleAssistant1() {
    document.getElementById('assisBtn1').style.display = 'none';
    if (!document.getElementById('assisBtn').classList.contains('btn-secondary')) {
      document.getElementById('assisBtn').classList.add('btn-secondary');
      document.getElementById('assisBtn').classList.remove('btn-info');
    }
    document.getElementById('assisBtn').innerText = 'HIDE ASSISTANT';
    document.querySelector('.editor-main12').style.right = '0px';
    document.querySelector('.editor-main12').style.width = '50%';
    document.querySelector('.editor-main11').style.width = '50%';
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

  const replace_nth = function (s, f, r, n) {
    // From the given string s, find f, replace as r only on n’th occurrence
    // return s.replace(RegExp("^(?:.*?" + f + "){" + n + "}"), x => x.replace(RegExp(f + "$"), r));
    // return s.replace(RegExp("^(?:.*?" + "\\b" + f + "\\b" + "){" + n + "}"), x => x.replace(RegExp(f + "$"), r));
    return s.replace(RegExp("^(?:.*?" + "\\b" + f + "\\b" + "){" + n + "}"), x => x.replace(RegExp("\\b" + f + "\\b" + "$"), r)); //double changed
  };

  // For testing purpose
  const rand = async () => {
    // post_noti({notiTitle:"demo title",notiDesc:"demo desc",notiType:"info",notiFlag1:true});
    // trigger_takeover();
    // document.getElementById('takeOverModalBtn').click();
    // setTargetUserId('62bdf7971c5a067251a8e715');
    // console.log(client1);
    // console.log(blockIds);
    // console.log(textList);
    // console.log(blockIdsNum);
    // console.log(blockDetails);
    // setMainData(mainData.concat({'a':12}));
    // let savedData = await editorG.save();
    // console.log(savedData);
    // console.log(idNum);
    // console.log(goals);
    // console.log(mainData);
    // console.log(sideUtils);
    // console.log(dictWords);
    // console.log(blockIds);
    // document.getElementById('').show();
    // console.log(blockDetails);
    // context.ua();
    let changeStrArr = [];
    const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");
    for (let i = 0; i < x.length; i++) {
      console.log(x[i].parentNode);
      if (x[i].tagName !== 'SPAN' && (x[i].parentNode?.tagName==='SPAN' || x[i].parentNode?.tagName==='DIV')) {
        console.log(i);
        console.log(x[i]);
        x[i].setAttribute("id", `uuid${i}`);
        let tempX = x[i].cloneNode(true);
        tempX.removeAttribute("id");
        const htmlPosition = document.querySelector('.ce-block__content').children[0].innerHTML.indexOf(x[i].outerHTML);
        // console.log(htmlPosition);
        const prevHtml = document.querySelector('.ce-block__content').children[0].innerHTML.slice(0, htmlPosition);
        // console.log(prevHtml);
        let nc = document.createElement('div');
        nc.innerHTML = prevHtml;
        // console.log(nc.innerText);
        let textOccuranceBefore = (nc.innerText.match(new RegExp(x[i].innerText, "g")) || []).length;
        changeStrArr.push({
          text: x[i].innerText,
          replacement: tempX.outerHTML,
          occurrance: textOccuranceBefore + 1
        });
      }
    }

    console.log(changeStrArr);
    let replacedString=document.querySelector('.ce-block__content').children[0].innerHTML;

    for (let i=changeStrArr.length-1;i>=0;i--) {
      replacedString= replace_nth(replacedString, changeStrArr[i].text, changeStrArr[i].replacement, changeStrArr[i].occurrance);
    }
    
    console.log(replacedString);

    // console.log(x[2].outerHTML);
    // const stringToRemember = x[2].innerText;
    // console.log(x[2].innerText);
    // console.log(document.querySelector('.ce-block__content').children[0]);
    // console.log(String(x[2]));
    // const htmlPosition = document.querySelector('.ce-block__content').children[0].innerHTML.indexOf(x[2].outerHTML);
    // console.log(htmlPosition);
    // const prevHtml = document.querySelector('.ce-block__content').children[0].innerHTML.slice(0, htmlPosition);
    // console.log(prevHtml);
    // let nc = document.createElement('div');
    // nc.innerHTML = prevHtml;
    // console.log(nc.innerText);
    // let textOccuranceBefore = (nc.innerText.match(new RegExp(stringToRemember, "g")) || []).length;
    // console.log(document.querySelector('.ce-block__content').children[0].innerHTML);
    // console.log(textOccuranceBefore);
    // find position/word with occurance of textOccuranceBefore+1 of the stringToRemember.
    // let replacedString=replace_nth(document.querySelector('.ce-block__content').children[0].innerHTML, stringToRemember, "hiten", textOccuranceBefore+1);
    // console.log(replacedString);
  };

  return (
    <>
      {/* Testing */}
      <button style={{ position: "absolute", top: "4rem", left: "3rem", zIndex: "99999" }} onClick={rand}>Test</button>

      {/* Heartbeat api handler */}
      {/* <HeartBeatHandler notify={props.notify} setAlert={props.setAlert} encrypt={props.encrypt} /> */}

      {/* Side Bar */}
      <Sidebar key={articleId} articleId={articleId} />

      {/* Take Over Modal for take over request */}
      <TakeOverModal takeOverFlag={takeOverFlag} takeOver={takeOver} takeOverMsg={takeOverMsg} editorContext={editorContext} onEditorStateChange2={onEditorStateChange2} func1={func1} />
      <button id="takeOverModalBtn" data-bs-toggle="modal" data-bs-target="#takeOverModal"></button>

      {/* Take Over Modal for respond to a take over request */}
      <TakeOverModal1 sendMsg={sendMsg} targetUserId={targetUserId} />
      <button id="takeOverModalBtn1" data-bs-toggle="modal" data-bs-target="#takeOverModal1"></button>

      {/* Take Over Modal for respond to a take over request */}
      <TakeOverModal2 sendMsg={sendMsg} targetUserId={targetUserId} />
      <button id="takeOverModalBtn2" data-bs-toggle="modal" data-bs-target="#takeOverModal2"></button>

      {/* Dictionary Modal */}
      <DictionaryModal editorContext={editorContext} onEditorStateChange5={onEditorStateChange5} updateDictModal={updateDictModal} dictWords={dictWords} />

      {/* Performance Modal */}
      <SetPerformanceModal mainData={mainData} />

      {/* Set Goals Modal */}
      <SetGoalModal toggle_goals={toggle_goals} toggle_intent={toggle_intent} dis_goals={dis_goals} setGoals1={(e) => {
        setGoals1(e, editorContext, onEditorStateChange3, onEditorStateChange4);
      }} goalsReset={() => {
        goalsReset(editorContext, onEditorStateChange3);
      }} toggleGoalsUniversal={() => {
        toggleGoalsUniversal(onEditorStateChange4);
      }} />

      {/* Custom Topic Modal */}
      <AddCustomTopicModal addCustomTopic={addCustomTopic} />

      {/* Header */}
      <Header articleId={articleId} />

      {/* Revision confirmation popup */}
      {revisionFlag ? <RevisionPopup setRevisionStats={setRevisionStats} revisionStats={revisionStats} editorG={editorG} onEditorStateChange={onEditorStateChange} currentData={currentData} setRevisionFlag={setRevisionFlag} /> : null}

      {/* Grammar box with Editor */}
      <div className="editor-main">
        {flag2 ? <Alert2 message={alertMsg} closeAlert={() => {
          closeAlert(editorContext);
        }} alertUndo={() => {
          alertUndo(editorContext, onEditorStateChange5);
        }} /> : null}

        <div className="editor-main1">

          {/* Editor with Words-Bar, Revision-Bar */}
          <div className="editor-main11">
            {props.load ? <>
              <div className="row1">
                <input className="me-3" id="editor_head" name="editor_title" onChange={(e) => {
                  editor_head_change(e, editorContext);
                }} onBlur={() => {
                  editor_head_save(context, articleId, editorContext);
                }} value={editor_head} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="right" title="Rename" type="text" placeholder="Untitled Document" />
                {flag1 ? <Alert1 /> : null}
              </div>
              <div className="articleStatus">{data.data ? data.data.articleStatus : null}</div>
              <div className="updateTs">
                <div className="me-3 updateTs1" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title={`Last Updated: ${updateTime}`}><img src="/assets/media/editor/updated.png" alt="Last Updated" /><p>{updateTime === 'Invalid Date' ? 'Loading ..' : updateTime}</p></div>
                <div className="me-3 updateTs1" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title={`Last Published: ${publishTime}`} ><img src="/assets/media/editor/publish.png" alt="Last Published" /><p>{publishTime}</p></div>
              </div>
              <WordsBar />
              <RevisionBar revisionStats={revisionStats} setRevisionStats={setRevisionStats} setCurrentData={setCurrentData} setRevisionFlag={setRevisionFlag} getVersionHistory={getVersionHistory} instances={instances} setInstances={setInstances} editorG={editorG} onEditorStateChange={onEditorStateChange} articleId={articleId} />
            </> : <h4 className="mt-5 mx-5">Loading...</h4>}
            <div id="editorjs"></div>
            <div className="editor-menu">
              <img data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Read only mode." onClick={() => {
                func1(false, editorContext, onEditorStateChange2);
              }} src="/assets/media/editor/readOnly.svg" alt="Read only" />
              <img data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Save article." onClick={() => {
                func(context, articleId, onEditorStateChange1, editorContext);
              }} src="/assets/media/editor/save.svg" alt="Save" />
            </div>
          </div>

          {/* Topics Cards */}
          {/* <div className="editor-tc">
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
                      return (
                        // (strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length
                        <div key={index} className={topics[e].maxUses > 2 ? (Math.ceil(topics[e].maxUses / 2) <= (strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length) ? `editor-tc-card cursor-pointer mb-1 editor-tc-card-done` : `editor-tc-card cursor-pointer mb-1` : Math.ceil(topics[e].maxUses) <= (strData.match(new RegExp("\\b" + e + "\\b", "g")) || []).length ? `editor-tc-card cursor-pointer mb-1 editor-tc-card-done` : `editor-tc-card cursor-pointer mb-1`}>
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

                    {customTopic.length > 0 ? customTopic.map((e, index) => {
                      return (
                        <div className="p-2" key={index}>
                          <h5 className="my-0">{e}</h5>
                          <p>custom topic</p>
                        </div>
                      );
                    }) : null}

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
          </div> */}

          {/* Grammar cards with side grammar panel */}
          <div className="editor-main12">
            {/* Side Grammar Panel */}
            <div className="editor-main121">
              <div className="em0">{mainData.length !== 0 ? <><span className={`badge me-3 badge-circle badge-${mainType === 'all' ? 'secondary' : mainType === 'Correctness' ? 'danger' : mainType === 'Clarity' ? 'info' : mainType === 'Engagement' ? 'primary' : mainType === 'Tone' ? 'success' : 'dark'}`}>{tc}</span><b>{mainType === 'all' ? 'All Suggestions' : mainType}</b></> : null}</div>
              {mainType !== 'all' ? <div onClick={(e) => {
                trigger_active(e, editorContext);
              }} className="editor-main1210">
                <p>Back to all suggestions X</p>
              </div> : null}
              {flag3 ? <div className="em1">
                <img src="/assets/media/editor/i1.svg" alt="Nothing" />
                <h5 className="my-2">Nothing to check yet</h5>
                <p>Start writing or upload a document to see feedback</p>
              </div> : null}
              {mainData.length !== 0 ? <div className="em2">
                {mainData.map((g, ind) => {
                  if (blockDetails[ind]) {
                    if (mainType === 'all') {
                      return g.alerts.map((e, index) => {

                        if (localStorage.getItem('localMainData')) {
                          if (dictWords.includes(e.highlightText)) {
                            dltCard(blockIds[ind][index], ind, index, '', false, '', true, editorContext);
                          }
                        }

                        return (
                          <div onClick={(f) => {
                            expand1(f, blockIds[ind][index]);
                          }} key={index} id={`${blockIds[ind][index]}1`} className={`em2-box px-4 py-4 ${blockDetails[ind].id}`}>
                            <div className="em2-box1">
                              {e.cardLayout.outcome === 'Clarity' ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path><path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path></svg> : e.cardLayout.outcome === 'Correctness' ? <svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path><g filter="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path></g><defs><filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg> : e.cardLayout.outcome === 'Engagement' ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path><path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path></svg> : e.cardLayout.outcome === 'Tone' ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path><path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path></svg> : null}
                              <p className="ms-2">{`${e.highlightText.slice(0, 27)}...`}</p>
                              <p className="text-gray ms-3">{e.todo}</p>
                              <div className="baseMiniActivateBtnSelector f1758bz9"><i className="icon_f1r6abcu activeTopIcon_ficds8d" data-role="icon"><svg width="10" viewBox="0 0 10 10" className="holder_f19n375c"><path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path></svg></i><i className="icon_f1r6abcu activeBottomIcon_f1tqo8o3" data-role="icon"><svg width="10" viewBox="0 0 10 10" className="holder_f19n375c"><path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path></svg></i></div>
                            </div>
                            <div className="em2-box2">
                              <div className="em2-box11 mb-3">
                                {e.cardLayout.outcome === 'Clarity' ?

                                  <div className="em2-box111 mt-2 mb-5">
                                    <svg width="20" viewBox="0 0 20 20" className="">
                                      <path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path>
                                      <path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path>
                                    </svg>
                                    <p className="text-gray">{e.cardLayout.group}</p>
                                  </div> :

                                  e.cardLayout.outcome === 'Correctness' ?
                                    <div className="em2-box111 mt-2 mb-5">
                                      <svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path>
                                        <g filter="url(#a)">
                                          <path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path>
                                        </g>
                                        <defs>
                                          <filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter>
                                        </defs>
                                      </svg>
                                      <p className="text-gray">{e.cardLayout.group}</p>
                                    </div> :

                                    e.cardLayout.outcome === 'Engagement' ?
                                      <div className="em2-box111 mt-2 mb-5">
                                        <svg width="20" viewBox="0 0 20 20">
                                          <path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path>
                                          <path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path>
                                          <path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path>
                                        </svg>
                                        <p className="text-gray">{e.cardLayout.group}</p>
                                      </div> :

                                      e.cardLayout.outcome === 'Tone' ?
                                        <div className="em2-box111 mt-2 mb-5">
                                          <svg width="20" viewBox="0 0 20 20" className="">
                                            <path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path>
                                            <path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path>
                                            <path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path>
                                          </svg>
                                          <p className="text-gray">{e.cardLayout.group}</p>
                                        </div> : null}

                                <div>
                                  {e.transforms ? e.transforms.length > 1 ?
                                    <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>{e.transforms.map((f, index2) => {
                                      return (
                                        <span key={index2} onClick={() => {
                                          textChange(
                                            blockIds[ind][index],
                                            e.begin !== e.end ?
                                              (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ?
                                                e.text :
                                                `${e.begin}-${e.end}` :
                                              e.begin - e.highlightBegin,
                                            e.replacements[index2],
                                            e.begin !== e.end ? false : true,
                                            ind,
                                            index,
                                            e.begin,
                                            e.end,
                                            e.text,
                                            e.end > e.highlightEnd ? true : false,
                                            e.begin < e.highlightBegin ? true : false,
                                            e.highlightBegin - e.begin,
                                            editorContext,
                                            onEditorStateChange,
                                            onEditorStateChange2
                                          )
                                        }}>{parse(f)}</span>
                                      );
                                    })}
                                    </p> :

                                    e.group === 'Spelling' ?
                                      e.category === 'Unknown' ?
                                        <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>
                                          <b>Unknown word: </b>
                                          <i className="text-danger fw-bolder">{e.text}</i>
                                        </p> :

                                        <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>
                                          <span onClick={() => {
                                            textChange(
                                              blockIds[ind][index],
                                              e.begin !== e.end ?
                                                (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ?
                                                  e.text :
                                                  `${e.begin}-${e.end}` :
                                                e.begin - e.highlightBegin,
                                              e.replacements[0],
                                              e.begin !== e.end ? false : true,
                                              ind,
                                              index,
                                              e.begin,
                                              e.end,
                                              e.text,
                                              e.end > e.highlightEnd ? true : false,
                                              e.begin < e.highlightBegin ? true : false,
                                              e.highlightBegin - e.begin,
                                              editorContext,
                                              onEditorStateChange,
                                              onEditorStateChange2)
                                          }}>{parse(e.transforms[0])}</span>
                                        </p> :

                                      <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className={e.cardLayout.outcome === 'Correctness' ? 'cpar cpar_correct' : 'cpar'}>
                                        <span onClick={() => {
                                          textChange(
                                            blockIds[ind][index],
                                            e.begin !== e.end ?
                                              (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ?
                                                e.text :
                                                `${e.begin}-${e.end}` :
                                              e.begin - e.highlightBegin,
                                            e.replacements[0],
                                            e.begin !== e.end ? false : true,
                                            ind,
                                            index,
                                            e.begin,
                                            e.end,
                                            e.text,
                                            e.end > e.highlightEnd ? true : false,
                                            e.begin < e.highlightBegin ? true : false,
                                            e.highlightBegin - e.begin,
                                            editorContext,
                                            onEditorStateChange,
                                            onEditorStateChange2)
                                        }}>{parse(e.transforms[0])}</span>
                                      </p> :

                                    <b>{e.title}</b>}
                                </div>
                              </div>
                              <div className="em2-box12 mb-4">
                                <p dangerouslySetInnerHTML={{ __html: e.explanation.slice(3,) }}></p>
                              </div>
                              {e.examples !== '' ?
                                <>
                                  <div className="em2-box14 mb-4">
                                    <div className="em-box141 mb-3">
                                      <p dangerouslySetInnerHTML={{ __html: e.details.slice(3,) }}></p>
                                    </div>

                                    <div className="em-box142">
                                      {e.examples.split('<br/>')[0] ? <div className="em-box1421 my-2">
                                        <div className="em-box-incorrect my-1">
                                          <h5 className="text-red mb-0">Incorrect</h5>
                                          <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[0].split(':')[1] ? e.examples.split('<br/>')[0].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[0].slice(3,) }}></p>
                                        </div>
                                        <div className="em-box-correct my-1">
                                          <h5 className="text-green mb-0">correct</h5>
                                          <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[1].split(':')[1] ? e.examples.split('<br/>')[1].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[1].slice(3,) }}></p>
                                        </div>
                                      </div> : null}

                                      {e.examples.split('<br/>')[2] ?
                                        <div className="em-box1421 my-2">
                                          <div className="em-box-incorrect my-1">
                                            <h5 className="text-red mb-0">Incorrect</h5>
                                            <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[2].split(':')[1] ? e.examples.split('<br/>')[2].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[2].slice(3,) }}></p>
                                          </div>
                                          <div className="em-box-correct my-1">
                                            <h5 className="text-green mb-0">correct</h5>
                                            <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[3].split(':')[1] ? e.examples.split('<br/>')[3].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[3].slice(3,) }}></p>
                                          </div>
                                        </div>
                                        : null}

                                    </div>
                                  </div>

                                  <div className="em2-box13 mb-3">
                                    <div onClick={expand2} className="em2-box131">
                                      <p className="text-gray learnMore">Learn more</p>
                                    </div>

                                    <div onClick={() => {
                                      dltCard(blockIds[ind][index], ind, index, 'Dismissed', false, '', false, editorContext);
                                    }} className="em2-box132">
                                      <img src="/assets/media/editor/delete.svg" alt="Delete" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Dismiss" />
                                    </div>

                                  </div>
                                </> :
                                <>
                                  <div className="em2-box13 mb-3">
                                    <div className="em2-box131">
                                      <p onClick={() => {
                                        updateDict(blockIds[ind][index], ind, e.highlightText, editorContext, onEditorStateChange5);
                                      }} className="text-gray learnMore dictionary">Add to dictionary</p>
                                    </div>
                                    <div onClick={() => {
                                      dltCard(blockIds[ind][index], ind, index, 'Dismissed', false, '', false, editorContext);
                                    }} className="em2-box132">
                                      <img src="/assets/media/editor/delete.svg" alt="Delete" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Dismiss" />
                                    </div>
                                  </div>
                                </>
                              }
                            </div>
                          </div>
                        );

                      });
                    }
                    else {
                      return g.alerts.map((e, index1) => {

                        if (localStorage.getItem('localMainData')) {
                          if (dictWords.includes(e.highlightText)) {
                            dltCard(blockIds[ind][index1], ind, index1, '', false, '', true, editorContext);
                          }
                        }

                        if (mainType === e.cardLayout.outcome) {
                          return (
                            <div onClick={(f) => { expand1(f, blockIds[ind][index1]) }} key={index1} id={`${blockIds[ind][index1]}1`} className={`em2-box px-4 py-4 ${blockDetails[ind].id}`}>
                              <div className="em2-box1">
                                {e.cardLayout.outcome === 'Clarity' ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path><path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path></svg> : e.cardLayout.outcome === 'Correctness' ? <svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path><g filter="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path></g><defs><filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg> : e.cardLayout.outcome === 'Engagement' ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path><path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path></svg> : e.cardLayout.outcome === 'Tone' ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path><path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path></svg> : null}
                                <p className="ms-2">{`${e.highlightText.slice(0, 27)}...`}</p>
                                <p className="text-gray ms-3">{e.todo}</p>
                                <div className="baseMiniActivateBtnSelector f1758bz9"><i className="icon_f1r6abcu activeTopIcon_ficds8d" data-role="icon"><svg width="10" viewBox="0 0 10 10" className="holder_f19n375c"><path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path></svg></i><i className="icon_f1r6abcu activeBottomIcon_f1tqo8o3" data-role="icon"><svg width="10" viewBox="0 0 10 10" className="holder_f19n375c"><path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path></svg></i></div>
                              </div>
                              <div className="em2-box2">
                                <div className="em2-box11 mb-3">
                                  {e.cardLayout.outcome === 'Clarity' ? <div className="em2-box111 mt-2 mb-5"><svg width="20" viewBox="0 0 20 20" className=""><path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path><path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path></svg><p className="text-gray">{e.cardLayout.group}</p></div> : e.cardLayout.outcome === 'Correctness' ? <div className="em2-box111 mt-2 mb-5"><svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path><g filter="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path></g><defs><filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg><p className="text-gray">{e.cardLayout.group}</p></div> : e.cardLayout.outcome === 'Engagement' ? <div className="em2-box111 mt-2 mb-5"><svg width="20" viewBox="0 0 20 20"><path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path><path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path></svg><p className="text-gray">{e.cardLayout.group}</p></div> : e.cardLayout.outcome === 'Tone' ? <div className="em2-box111 mt-2 mb-5"><svg width="20" viewBox="0 0 20 20" className=""><path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path><path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path></svg><p className="text-gray">{e.cardLayout.group}</p></div> : null}
                                  <div>
                                    {e.transforms ? e.transforms.length > 1 ? <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>{e.transforms.map((f, index) => {
                                      return (
                                        <span key={index} onClick={() => { textChange(blockIds[ind][index1], e.begin !== e.end ? (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ? e.text : `${e.begin}-${e.end}` : e.begin - e.highlightBegin, e.replacements[index], e.begin !== e.end ? false : true, ind, index1, e.begin, e.end, e.text, e.end > e.highlightEnd ? true : false, e.begin < e.highlightBegin ? true : false, e.highlightBegin - e.begin, editorContext, onEditorStateChange, onEditorStateChange2) }}>{parse(f)}</span>
                                      );
                                    })}</p> : e.group === 'Spelling' ? e.category === 'Unknown' ? <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'><b>Unknown word: </b><i className="text-danger fw-bolder">{e.text}</i></p> : <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'><span onClick={() => { textChange(blockIds[ind][index1], e.begin !== e.end ? (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ? e.text : `${e.begin}-${e.end}` : e.begin - e.highlightBegin, e.replacements[0], e.begin !== e.end ? false : true, ind, index1, e.begin, e.end, e.text, e.end > e.highlightEnd ? true : false, e.begin < e.highlightBegin ? true : false, e.highlightBegin - e.begin, editorContext, onEditorStateChange, onEditorStateChange2) }}>{parse(e.transforms[0])}</span></p> : <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className={e.cardLayout.outcome === 'Correctness' ? 'cpar cpar_correct' : 'cpar'}><span onClick={() => { textChange(blockIds[ind][index1], e.begin !== e.end ? (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ? e.text : `${e.begin}-${e.end}` : e.begin - e.highlightBegin, e.replacements[0], e.begin !== e.end ? false : true, ind, index1, e.begin, e.end, e.text, e.end > e.highlightEnd ? true : false, e.begin < e.highlightBegin ? true : false, e.highlightBegin - e.begin, editorContext, onEditorStateChange, onEditorStateChange2) }}>{parse(e.transforms[0])}</span></p> : <b>{e.title}</b>}
                                  </div>
                                </div>
                                <div className="em2-box12 mb-4">
                                  <p dangerouslySetInnerHTML={{ __html: e.explanation.slice(3,) }}></p>
                                </div>
                                {e.examples !== '' ? <><div className="em2-box14 mb-4">
                                  <div className="em-box141 mb-3">
                                    <p dangerouslySetInnerHTML={{ __html: e.details.slice(3,) }}></p>
                                  </div>
                                  <div className="em-box142">
                                    <div className="em-box1421 my-2">
                                      <div className="em-box-incorrect my-1">
                                        <h5 className="text-red mb-0">Incorrect</h5>
                                        <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[0].split(':')[1] ? e.examples.split('<br/>')[0].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[0].slice(3,) }}></p>
                                      </div>
                                      <div className="em-box-correct my-1">
                                        <h5 className="text-green mb-0">correct</h5>
                                        <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[1].split(':')[1] ? e.examples.split('<br/>')[1].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[1].slice(3,) }}></p>
                                      </div>
                                    </div>
                                    <div className="em-box1421 my-2">
                                      <div className="em-box-incorrect my-1">
                                        <h5 className="text-red mb-0">Incorrect</h5>
                                        <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[2].split(':')[1] ? e.examples.split('<br/>')[2].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[2].slice(3,) }}></p>
                                      </div>
                                      <div className="em-box-correct my-1">
                                        <h5 className="text-green mb-0">correct</h5>
                                        <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[3].split(':')[1] ? e.examples.split('<br/>')[3].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[3].slice(3,) }}></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                  <div className="em2-box13 mb-3">
                                    <div onClick={expand2} className="em2-box131">
                                      <p className="text-gray learnMore">Learn more</p>
                                    </div>
                                    <div onClick={() => {
                                      dltCard(blockIds[ind][index1], ind, index1, 'Dismissed', false, '', false, editorContext);
                                    }} className="em2-box132">
                                      <img src="/assets/media/editor/delete.svg" alt="Delete" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Dismiss" />
                                    </div>
                                  </div></> : <div className="em2-box13 mb-3">
                                  <div className="em2-box131">
                                    <p onClick={() => {
                                      updateDict(blockIds[ind][index1], ind, e.highlightText, editorContext, onEditorStateChange5);
                                    }} className="text-gray learnMore dictionary">Add to dictionary</p>
                                  </div>
                                  <div onClick={() => {
                                    dltCard(blockIds[ind][index1], ind, index1, 'Dismissed', false, '', false, editorContext);
                                  }} className="em2-box132">
                                    <img src="/assets/media/editor/delete.svg" alt="Delete" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Dismiss" />
                                  </div>
                                </div>}
                              </div>
                            </div>
                          )
                        }
                      });
                    }
                  }
                })}
              </div> : null}
            </div>

            <GrammarPanel trigger_active={(e) => {
              trigger_active(e, editorContext);
            }} mainData={mainData} sideUtils={sideUtils} toggleAssistant={toggleAssistant} toggleAssistant1={toggleAssistant} onEditorStateChange2={onEditorStateChange2} grammarFlag={grammarFlag} grammarFlag1={grammarFlag1} dataMatch={dataMatch} checkGr={checkGr} tc={tc} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor2;
