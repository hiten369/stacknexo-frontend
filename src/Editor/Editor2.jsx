import React, { useContext, useEffect, useMemo, useState } from 'react'
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
import { closeAlert, dltCard, expand1, expand2, textChange, trigger_active, alertUndo, replace_nth } from './Utils/GrammarUtils';
import { dis_goals, goalsReset, initializeGoals, setGoals1, toggleGoalsUniversal, toggle_goals, toggle_intent } from './Utils/GoalsUtils';
import { updateDict, updateDictModal } from './Utils/DictionaryUtil';
import EditorContext from '../context/EditorContext';
import TakeOverModal2 from './Modals/TakeOverModal2';
import WordsBar from './BottomBar/WordsBar';
import RevisionBar from './BottomBar/RevisionBar';
import Header from './Header/Header';
import RevisionPopup from './Popups/RevisionPopup';

import AddCustomTopicModal from './Modals/AddCustomTopicModal';

import { publicIpv4 } from 'public-ip';
import CorrectionCard from './Cards/CorrectionCard';
import Topics from './Topic/Topics';
// import Warning from '@editorjs/warning'
// import Code from '@editorjs/code'
// import CheckList from '@editorjs/checklist'
// import Delimiter from '@editorjs/delimiter'
// import InlineCode from '@editorjs/inline-code'
// import { w3cwebsocket } from 'websocket';
// import useScript from '../CustomScripts/UseScript';

var client1;
// var modalClickFlag = true;
var editorG;
var int;

const Editor2 = (props) => {
  // ***Editor Section***
  const context = useContext(MainContext);
  const editorContext = useContext(EditorContext);

  const { data, flag1, updateTime, publishTime, editor_head, mainData, setMainData, flag2, flag4, dataMatch, setTextList, mainType, flag3, setFlag3, grammarFlag, setGrammarFlag, grammarFlag1, setGrammarFlag1, alertMsg, blockDetails, setBlockDetails, blockIds, setBlockIds, setIdNum, sideUtils, setSideUtils, dictWords, takeOverMsg, settakeOverMsg, targetUserId, setTargetUserId, tooltip, checkGr, strData, mainDataRefreshFlag, tagData, undoFlag, getVersionHistory, post_noti, get_msg, delete_msg, update_noti } = editorContext;
  var { intialCardNum, tc, setTc } = editorContext;

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
  const [modalClickFlag, setModalClickFlag] = useState(true);

  // const onEditorStateChange = (text) => {
  //   editorContext.onEditorStateChange(text, articleId, client1);
  // };
  // const onEditorStateChange1 = (text, data) => editorContext.onEditorStateChange1(text, data, articleId);
  // const onEditorStateChange2 = (text, str, flag, goalsObj) => editorContext.onEditorStateChange2(text, str, flag, goalsObj, articleId);
  // const onEditorStateChange3 = (goalsObj) => editorContext.onEditorStateChange3(goalsObj, articleId);
  // const onEditorStateChange4 = (goalsObj, name, flag) => editorContext.onEditorStateChange4(goalsObj, name, flag, articleId);
  // const onEditorStateChange5 = (dictWord) => editorContext.onEditorStateChange5(dictWord, articleId);

  // Take Over functionality if multiple users are trying to access same article
  const takeOver = async (e, flag) => {
    if (!flag) {
      // send request to the user who is currently accessing the article.
      post_noti({ notiTitle: "demo title", notiDesc: "demo desc", notiType: "info", notiFlag1: true, notiURL: articleId, notiUser: targetUserId }, client1);

      // Setting the timer; disable the button (n seconds)
      let n = 5;
      settakeOverMsg(`Request for take over the article has been sent. You can request for re-takeover in ${n} seconds.`)
      e.target.setAttribute('disabled', true);
      e.target.innerText = 'Request Pending';

      // Clear the previous intervals
      clearInterval(int);

      // Constantly check for the action from user who is currently accessing the article (every 3 seconds).
      int = setInterval(() => {
        get_msg(client1);
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
      post_noti({ notiTitle: "demo title", notiDesc: "demo desc", notiType: "info", notiFlag1: true, notiURL: articleId, notiUser: targetUserId, notiFlag2: true }, client1);
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

  // Handeling Multi-User
  const getMultiData = async () => {
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

  // Setting the goals
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

  // Managing tooltip and websocket messages (response from backend)
  useEffect(() => {
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      if (editorContext.client) {
        client1 = editorContext.client;

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

        let blockNum = 0;
        client1.onmessage = async (message) => {
          const dataFromServer = JSON.parse(message.data);
          // console.log(dataFromServer);

          if (dataFromServer.type1) {
            if (dataFromServer.type1 === 'ARTICLE') {
              if (dataFromServer.type) {
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
                    getVersionHistory(client1);
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
            }
            else if (dataFromServer.type1 == 'GRAMMAR') {
              if (dataFromServer.type) {
                // if response is for editor block's changes (for making grammar button disable when processing)
                if (dataFromServer.type === "fetch") {
                  // Counting the number of blocks using localStorage (One by one as response recieving)
                  let localBlockCount = localStorage.getItem('localBlockCount');

                  if (localBlockCount) {
                    blockNum = JSON.parse(localBlockCount).blockNum + 1;
                    localStorage.setItem('localBlockCount', JSON.stringify({
                      blockNum
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
                      let tagData = JSON.parse(localStorage.getItem("stnTagData"));
                      // console.log(tagData);

                      tagData = tagData[blockNum - 1];

                      tagData.sort((a, b) => a.index - b.index);

                      if (tagData.length > 0) {
                        let replacedString = document.querySelectorAll('.ce-block__content')[blockNum - 1].children[0].innerHTML.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ");

                        for (let i = tagData.length - 1; i >= 0; i--) {
                          replacedString = replace_nth(replacedString, tagData[i].text, tagData[i].replacement, tagData[i].occurrance);
                        }

                        // console.log(replacedString);
                        document.querySelectorAll('.ce-block__content')[blockNum - 1].children[0].innerHTML = replacedString;
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
                        let tempTextListArr = [];
                        let tempIdNum1 = 0;

                        for (let i of temp1.children) {
                          localMainData.idNum[i.id] = tempIdNum1++;
                          // localMainData.textList.push(i.innerText);
                          tempTextListArr.push(i.innerText);
                          tempArr.push(i.id);

                          if (i.children.length !== 0) {
                            let k = i.children;

                            for (let j of k) {
                              localMainData.idNum[j.id] = tempIdNum1++;
                              // localMainData.textList.push(j.innerText);
                              tempTextListArr.push(j.innerText);
                              tempArr.push(j.id);

                              if (j.children.length !== 0) {
                                k = j.children;
                              }
                            }
                          }
                        }

                        setIdNum(localMainData.idNum);
                        localMainData.blockIds[blockNum - 1] = tempArr;
                        localMainData.textList[blockNum - 1] = tempTextListArr;
                        setBlockIds(localMainData.blockIds);
                        // setTextList(localMainData.textList);
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
                        // setTextList(blockIds2);
                        setTextList({ "0": blockIds2 });

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
                          intialCardNum: intialCardNum, blockIds: { "0": blockIds1 }, textList: { "0": blockIds2 }, idNum: tempIdObj, sideUtils: tempSideUtil
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
              }
            }
            else if (dataFromServer.type1 === 'MESSAGE') {
              if (dataFromServer.type) {
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
                      delete_msg(client1);
                    }, 600);
                  }
                }
              }
            }
            else if (dataFromServer.type1 === 'NOTIFICATION') {
              if (dataFromServer.type) {
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
                            update_noti({ notiId: i._id, notiFlag: false, notiFlag1: false, notiFlag2: false }, client1);
                          }, 1000);
                          // modalClickFlag = false;
                          setModalClickFlag(false);
                        }
                      }
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

  // Handeling Multi-User
  // Setting the goals
  useEffect(() => {
    getMultiData();
    getGoalsData();
  }, []);

  // Managing date time, article heading, page title and editor js
  const getEditorData = async () => {
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      // console.log(client1);
      let ans = await initializeEditor(context, articleId, editorContext, client1);
      editorContext.setGclient(client1);
      getVersionHistory(client1);
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

  // Toggling between highlighted texts and triggering cards by clicking it, edit highlighted text.
  useEffect(() => {
    if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
      toggleText(editorContext);
    }
    else {
      props.setAlert('danger', 'Not Authorised! Login in to continue');
      navigate('/login');
    }
  }, [undoFlag, blockDetails]);

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

  // For testing purpose
  const rand = async () => {
    // post_noti({notiTitle:"demo title",notiDesc:"demo desc",notiType:"info",notiFlag1:true}, , client1);
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
    // const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");
    const y = document.querySelector('.ce-block__content');
    let z = y.cloneNode(true);
    let x = z.children[0].getElementsByTagName("*");

    // x=x.children[0].getElementsByTagName("*");
    // console.log(x[0]);
    // console.log(x[1]);

    for (let i = 0; i < x.length; i++) {
      // for (let i = 0; i < x.children[0].getElementsByTagName("*").length; i++) {
      // console.log(x[i].parentNode);
      if ((x[i].tagName !== 'SPAN' && x[i].tagName !== 'BR') && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
        // if ((x.children[0].getElementsByTagName("*")[i].tagName !== 'SPAN' && x.children[0].getElementsByTagName("*")[i].tagName !== 'BR') && (x.children[0].getElementsByTagName("*")[i].parentNode?.tagName === 'SPAN' || x.children[0].getElementsByTagName("*")[i].parentNode?.tagName === 'DIV')) {
        // console.log(i);
        // console.log(x[i]);

        x[i].setAttribute("id", `uuid${i}`);
        // x.children[0].getElementsByTagName("*")[i].setAttribute("id", `uuid${i}`);
        // console.log(x[i]);

        let tempX = x[i].cloneNode(true);
        // let tempX = x.children[0].getElementsByTagName("*")[i].cloneNode(true);
        tempX.removeAttribute("id");
        // console.log(x.children[0].innerHTML);
        console.log(z.children[0].innerHTML);
        // console.log(document.querySelector('.ce-block__content').children[0].innerHTML);
        // console.log(x.children[0].getElementsByTagName("*")[i].outerHTML);

        // const htmlPosition = document.querySelector('.ce-block__content').children[0].innerHTML.indexOf(x[i].outerHTML);
        // const htmlPosition = x.children[0].innerHTML.indexOf(x.children[0].getElementsByTagName("*")[i].outerHTML);
        const htmlPosition = z.children[0].innerHTML.indexOf(x[i].outerHTML);
        // console.log(htmlPosition);

        // const prevHtml = document.querySelector('.ce-block__content').children[0].innerHTML.slice(0, htmlPosition);
        // const prevHtml = x.children[0].innerHTML.slice(0, htmlPosition);
        const prevHtml = z.children[0].innerHTML.slice(0, htmlPosition);
        console.log(prevHtml);
        let nc = document.createElement('div');
        nc.innerHTML = prevHtml;
        console.log(nc.innerText);

        let textOccuranceBefore = (nc.innerText.match(new RegExp(x[i].innerText, "g")) || []).length;
        // let textOccuranceBefore = (nc.innerText.match(new RegExp(x.children[0].getElementsByTagName("*")[i].innerText, "g")) || []).length;
        console.log(textOccuranceBefore);

        changeStrArr.push({
          text: x[i].innerText,
          // text: x.children[0].getElementsByTagName("*")[i].innerText,
          replacement: tempX.outerHTML,
          occurrance: textOccuranceBefore + 1
        });
      }
    }

    console.log(changeStrArr);
    let replacedString = document.querySelector('.ce-block__content').children[0].innerHTML; // Might need to change this also
    replacedString = replacedString.replaceAll("&nbsp;", "");
    console.log(replacedString);

    for (let i = changeStrArr.length - 1; i >= 0; i--) {
      replacedString = replace_nth(replacedString, changeStrArr[i].text, changeStrArr[i].replacement, changeStrArr[i].occurrance);
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
      <TakeOverModal takeOverFlag={takeOverFlag} takeOver={takeOver} takeOverMsg={takeOverMsg} editorContext={editorContext} func1={func1} />
      <button id="takeOverModalBtn" data-bs-toggle="modal" data-bs-target="#takeOverModal"></button>

      {/* Asking permission to take over current article */}
      <TakeOverModal1 setModalClickFlag={setModalClickFlag} />
      <button id="takeOverModalBtn1" data-bs-toggle="modal" data-bs-target="#takeOverModal1"></button>

      {/* Admin/Editor take over the article, asking to retakeover request or go back */}
      <TakeOverModal2 />
      <button id="takeOverModalBtn2" data-bs-toggle="modal" data-bs-target="#takeOverModal2"></button>

      {/* Dictionary Modal */}
      <DictionaryModal editorContext={editorContext} updateDictModal={updateDictModal} dictWords={dictWords} />

      {/* Performance Modal */}
      <SetPerformanceModal mainData={mainData} />

      {/* Set Goals Modal */}
      <SetGoalModal />

      {/* Header */}
      <Header articleId={articleId} />

      {/* Revision confirmation popup */}
      {revisionFlag ? <RevisionPopup client={client1} setRevisionStats={setRevisionStats} revisionStats={revisionStats} editorG={editorG} currentData={currentData} setRevisionFlag={setRevisionFlag} /> : null}

      {/* Grammar box with Editor */}
      <div className="editor-main">
        {flag2 ? <Alert2 message={alertMsg} closeAlert={() => {
          closeAlert(editorContext);
        }} alertUndo={() => {
          alertUndo(editorContext);
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
              <RevisionBar revisionStats={revisionStats} setRevisionStats={setRevisionStats} setCurrentData={setCurrentData} setRevisionFlag={setRevisionFlag} instances={instances} setInstances={setInstances} editorG={editorG} client={client1} articleId={articleId} />
            </> : <h4 className="mt-5 mx-5">Loading...</h4>}
            <div id="editorjs"></div>
            <div className="editor-menu">
              <img data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Read only mode." onClick={() => {
                func1(false, editorContext);
              }} src="/assets/media/editor/readOnly.svg" alt="Read only" />
              <img data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Save article." onClick={() => {
                func(context, articleId, editorContext, client1);
              }} src="/assets/media/editor/save.svg" alt="Save" />
            </div>
          </div>

          {/* Topics Cards */}
          {/* <Topics /> */}

          {/* Grammar cards with side grammar panel */}
          <div className="editor-main12">

            {/* Grammar Cards */}
            <div className="editor-main121">
              <div className="em0">
                {mainData.length !== 0 ?
                  <>
                    <span className={`badge me-3 badge-circle badge-${mainType === 'all' ? 'secondary' : mainType === 'Correctness' ? 'danger' : mainType === 'Clarity' ? 'info' : mainType === 'Engagement' ? 'primary' : mainType === 'Tone' ? 'success' : 'dark'}`}>{tc}</span>
                    <b>{mainType === 'all' ? 'All Suggestions' : mainType}</b>
                  </> :
                  null}
              </div>
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

              {/* Grammar cards */}
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
                          <CorrectionCard key={index} ind={ind} index={index} e={e} />
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
                            <CorrectionCard key={index1} ind={ind} index={index1} e={e} />
                          )
                        }
                      });
                    }
                  }
                })}
              </div> : null}
            </div>

            {/* Side Grammar Panel */}
            <GrammarPanel />
          </div>
        </div>
      </div>

    </>
  );
};

export default Editor2;
