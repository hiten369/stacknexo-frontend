import React, { useContext, useEffect, useMemo, useState } from 'react';
import Header from './Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import MainContext from '../context/MainContext';
import DataTable from 'react-data-table-component';
import './editor.css';
import ProgressBar from "@ramonak/react-progress-bar";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import OutsideClickHandler from 'react-outside-click-handler';
import './overview.css';
import { publicIpv4 } from 'public-ip';

var t;
const typesByIndent = {
  1: "head2",
  2: "head3",
  3: "head4"
};

const builderTypes = {
  head2: `<h5 class="my-0">H2</h5>`,
  head3: `<h5 class="my-0">H3</h5>`,
  head4: `<h5 class="my-0">H4</h5>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
    </svg>`,
  bullet: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </svg>`
};

// Utility to sort used in competitive analysis table (position)
const positionSort = (rowA, rowB) => {
  const a = rowA.position;
  const b = rowB.position;

  if (a > b) {
    return -1;
  }

  if (b > a) {
    return 1;
  }

  return 0;
};

// Utility to sort used in competitive analysis table (Last updated)
const customUpdateSort = (rowA, rowB) => {
  const a = rowA.lastUpdate.row;
  const b = rowB.lastUpdate.row;
  // console.log(a,b);
  if (a > b) {
    return -1;
  }

  if (b > a) {
    return 1;
  }

  return 0;
};

var outLineN = 3;
var outLineM = 0;
var topicsN = 10;
var contentGradeValue = {
  "A+": 10,
  "A-": 9,
  "B+": 8,
  "B-": 7,
  "C+": 6,
  "C-": 5,
  "D+": 4,
  "D-": 3,
  "E+": 2,
  "E-": 1,
  "F": 0,
};      // Utility for calculating values of content grade

const Overview = (props) => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const context = useContext(MainContext);
  const [data, setData] = useState([]); //store different useful data
  const [topics, setTopics] = useState({}); // setting the topics to display
  const [data1, setData1] = useState([]); // store data for commonly cited links
  const [sliderValue, setSliderValue] = useState(400); // slider bar value
  const [sliderMax, setSliderMax] = useState(0); // Maximum value of slider
  const [sliderStep, setSliderStep] = useState(1); // Minimum value of slider
  const [rewriteTitles, setRewriteTitles] = useState(''); // stores the title which is selected from rewrite modal
  const [mainVals, setMainVals] = useState({
    Title: ['Everything We Know About Ted 3 So Far (Informative)', 'A Ted 3 Update: The Facts With Low Hype', 'The High Quality Video Technology In Ted 3', 'A Complete Timeline Of Ted 3 News'],
    Description: ['In the first full-length trailer for Ted 3, we see that John continues to have problems with Ted. Check out the trailer here.', `Three new Ted movies are coming out after Ted 2. Here's what we know about the three movies so far.`, 'We’re three months out from the third Ted movie and more details have surfaced than we’ve gotten in the past. We’ve collected all the available information here.', "Ted 3 is the sequel to Ted, the highest grossing original R-rated comedy of all time. But the post-production process will take a while so the sequel won't hit theaters until summer 2015. Learn more here."]
  });      // Stores the fetched values of title and description
  const [bookmarkVals, setBookmarkVals] = useState({  // Bookmark values from title and description 
    Title: [],
    Description: []
  });
  const [outlineVals, setOutlineVals] = useState(['Why A Ted 3?', 'Pacific Rim 2: Uprising In March 2018?', 'When Ted 3 Is Happening And What It’s Title Will Be', 'Wahlberg And Mac Farlane Talk Ted 3']);  // Outline ideas in builder box
  const [outlineVals1, setOutlineVals1] = useState([]); // Selected outlines
  const [rewriteType, setRewriteType] = useState('Title'); // to know either title is active or description is active (Rewrite Modal)
  const [mainRewriteType, setMainRewriteType] = useState('Title'); // First rewrite type when rewrite box is opened
  const [refFlag, setRefFlag] = useState(true); // 
  const [title, setTitle] = useState('Click to add title'); // Title to display
  const [title1, setTitle1] = useState('Click to add title'); // refrence value to track original value of title
  const [titleLength, setTitleLength] = useState(0); // length of the title
  const [titleColor, setTitleColor] = useState('text-success'); // colour of the title
  const [description, setDescription] = useState('Click to add description'); // Description to display
  const [description1, setDescription1] = useState('Click to add description'); // refrence value to track original value of description
  const [descriptionLength, setDescriptionLength] = useState(0); // length of the description
  const [descriptionColor, setDescriptionColor] = useState('text-success'); // color of the description
  const [isTitleEditable, setIsTitleEditable] = useState(false); // if title can be edited
  const [isDescEditable, setIsDescEditable] = useState(false); // if title can be edited
  const [builderVals, setBuilderVals] = useState([]); // Setting the builder box entities.
  const [builderEditable, setBuilderEditable] = useState(false); // if any builder card is selected. (to make builder features like up, bototm, etc activate)
  const [builderCardIndex, setBuilderCardIndex] = useState([]); // Saving the index of builder card clicked (active).
  const [builderRefresh, setBuilderRefresh] = useState(false); // To refresh the builder box.
  const [addHeadFlag, setAddHeadFlag] = useState(false); // if newly created empty line box is open or close (Builder Box).
  const [addHeadIndex, setAddHeadIndex] = useState(0); // Recently added builder card position
  const [editLinkVals, setEditLinkVals] = useState({}); // Handeling the data in links
  const [outLineRefresh, setOutLineRefresh] = useState(false); // Refreshing the competitor outlines
  const [ignoredTopics, setIgnoredTopics] = useState([]); // Store the ignored topics
  const [toggleIgnoredTopicsFlag, setToggleIgnoredTopicsFlag] = useState(false); // Whether to show ignored topics or not
  const [topicRefresh, setTopicRefresh] = useState(false); // Refresh the topic cards
  var [startDragIndex, setStartDragIndex] = useState(0); // Index of card which we are dragging
  const [wordCountArr, setWordCountArr] = useState([]); // Count number of words in array of recieved articles
  const [sliderText, setSliderText] = useState(''); // Text above the slider bar
  const [topicsToCover, setTopicsToCover] = useState([]); // topics which are selected from outlines and topics

  useEffect(() => {
    getData(false);
  }, []);

  // Get the data from APIs (backend)
  const getData = async (flag) => {
    let urls = ["https://movieweb.com/will-ted-3-happen/", "https://webnewsobserver.com/2021/10/13/ted-3-release-date-cast-plot/", "https://www.looper.com/841977/will-there-be-a-ted-3/", "https://www.michigansportszone.com/ted-3-everything-about-renewal-cancellation-for-2021/", "https://www.fedregsadvisor.com/entertainment/9530/ted-3/", "https://www.liveakhbar.in/2021/06/17/ted-3-release-date-cast-plot/", "https://screenrant.com/ted-3-movie-updates-release-date-story/", "https://alphanewscall.com/2021/10/12/ted-3/", "https://movieideas.fandom.com/wiki/Ted_3", "https://www.imdb.com/title/tt13633880/"];

    let topicsArr = ["living teddy bear", "fan"];

    let stnBuilderVals = localStorage.getItem('stnBuilderVals');
    if (stnBuilderVals) {
      stnBuilderVals = JSON.parse(stnBuilderVals);
      setBuilderVals(stnBuilderVals);
    }

    let stnOverviewBookmark = localStorage.getItem('stnOverviewBookmark');
    if (stnOverviewBookmark) {
      setBookmarkVals(JSON.parse(stnOverviewBookmark));
    }

    let stnOverviewMain = localStorage.getItem('stnOverviewMain');
    if (stnOverviewMain) {
      stnOverviewMain = JSON.parse(stnOverviewMain);
      if (stnOverviewMain.title !== '') {
        setTitle(stnOverviewMain.title);
        setTitle1(stnOverviewMain.title);
        setTitleLength(stnOverviewMain.title.length);
        if (stnOverviewMain.title.length <= 35) {
          setTitleColor("text-danger");
        }
        else if (stnOverviewMain.title.length > 35 && stnOverviewMain.title.length <= 55) {
          setTitleColor("text-warning");
        }
        else if (stnOverviewMain.title.length > 55 && stnOverviewMain.title.length <= 65) {
          setTitleColor("text-success");
        }
        else if (stnOverviewMain.title.length > 65) {
          setTitleColor("text-primary");
        }
      }
      else {
        document.querySelector('.title-edit1').style.display = 'none';
        document.querySelector('.overview-title').classList.add('overview-title1');
      }

      if (stnOverviewMain.description !== '') {
        setDescription(stnOverviewMain.description);
        setDescription1(stnOverviewMain.description);
        setDescriptionLength(stnOverviewMain.description.length)
        if (stnOverviewMain.description.length <= 60) {
          setDescriptionColor("text-danger");
        }
        else if (stnOverviewMain.description.length > 60 && stnOverviewMain.description.length <= 130) {
          setDescriptionColor("text-warning");
        }
        else if (stnOverviewMain.description.length > 130 && stnOverviewMain.description.length <= 190) {
          setDescriptionColor("text-success");
        }
        else if (stnOverviewMain.description.length > 190) {
          setDescriptionColor("text-primary");
        }
      }
      else {
        document.querySelector('.desc-edit1').style.display = 'none';
        document.querySelector('.overview-desc').classList.add('overview-desc1');
      }
    }
    else {
      document.querySelector('.title-edit1').style.display = 'none';
      document.querySelector('.desc-edit1').style.display = 'none';
      document.querySelector('.overview-title').classList.add('overview-title1');
      document.querySelector('.overview-desc').classList.add('overview-desc1');
    }

    let stnTopicsToCover = localStorage.getItem('stnTopicsToCover');
    if (stnTopicsToCover) {
      stnTopicsToCover = JSON.parse(stnTopicsToCover);
      setTopicsToCover(stnTopicsToCover);
    }

    const maxWordCount = 1300;
    setSliderMax(maxWordCount)
    if (maxWordCount > 0 && maxWordCount <= 200) {
      setSliderStep(10);
    }
    else if (maxWordCount > 200 && maxWordCount <= 400) {
      setSliderStep(25);
    }
    else if (maxWordCount > 400 && maxWordCount <= 800) {
      setSliderStep(50);
    }
    else {
      setSliderStep(100);
    }

    let data;
    let stnOverviewApiData = localStorage.getItem('stnOverviewApiData');

    if (stnOverviewApiData && !flag) {
      props.setLoad(true);
      stnOverviewApiData = JSON.parse(stnOverviewApiData);
      data = stnOverviewApiData;
    }
    else {
      const userIp = await publicIpv4();
      data = await context.analyzeLinks(urls, topicsArr, userIp, articleId, flag);
      console.log(data);
      if (data.success) {
        localStorage.setItem('stnOverviewApiData', JSON.stringify(data));
      }
      else {
        props.setAlert("danger", data.message);
      }
    }

    setTimeout(() => {
      document.getElementById('headUpdateAvg').innerText = `AVG: ${data.data.averageValues.avgUpdate}`;
      document.getElementById('headDAAvg').innerText = `AVG: ${data.data.averageValues.avgDA}`;
      document.getElementById('headWCAvg').innerText = `AVG: ${data.data.averageValues.avgWC}`;
    }, 1000);

    let tempWordCountArr = [];
    let nn = 0;

    for (let i of data.data.dataArr) {
      if (i.wordCount < 400) {
        nn++;
      }
      tempWordCountArr.push(i.wordCount)
    }

    setWordCountArr(tempWordCountArr);
    setSliderText(`Greater than ${(nn / data.data.dataArr.length) * 100}% of competitors`);

    let tempCited = data.data.citedLinks1;
    tempCited.sort((a, b) => b.citedBy - a.citedBy);
    let topicsTemp = data.data.topics;

    let stnIgnoredTopics = localStorage.getItem('stnIgnoredTopics');

    if (stnIgnoredTopics) {
      stnIgnoredTopics = JSON.parse(stnIgnoredTopics);

      for (let i of stnIgnoredTopics) {
        delete topicsTemp[Object.keys(i)[0]];
      }

      setIgnoredTopics(stnIgnoredTopics);
    }

    setData(data.data.dataArr);
    setTopics(topicsTemp);
    setData1(tempCited);
  }

  // Competitive Analysis table
  const columns = useMemo(() => [
    {
      name: <div className="table1-head">POSITION</div>,
      selector: row => <div className="positon_bor">
        {row.position}
      </div>,
      sortField: 'position',
      sortFunction: positionSort,
      sortable: true,
      grow: 0.05
    },
    {
      name: <div className="table1-head">CONTENT</div>,
      selector: row => <div>
        <h5 className="mb-0">{row.title}</h5>
        <a href={row.url} target="_blank">{new URL(row.url).hostname}</a>
        <p className="mt-2">{row.description}</p>
      </div>,
      wrap: true,
      style: { padding: '13px 0px' },
    },
    {
      name: <div className="table1-head"><div>LAST UPDATED</div><div id="headUpdateAvg"></div></div>,
      selector: row => row.lastUpdate.formated !== 'NaN years ago' ? row.lastUpdate.formated : '',
      sortable: true,
      sortFunction: customUpdateSort,
      grow: 0.2,
      wrap: true
    },
    {
      name: <div className="table1-head"><div>DOMAIN AUTHORITY</div><div id="headDAAvg"></div></div>,
      selector: row => row.domainAuthority,
      sortable: true,
      grow: 0.1,
      wrap: true
    },
    {
      name: <div className="table1-head"><div>WORD COUNT</div><div id="headWCAvg"></div></div>,
      selector: row => row.wordCount,
      sortable: true,
      grow: 0.1,
      wrap: true
    },
    {
      name: <div className="table1-head">CONTENT GRADE</div>,
      selector: row => row.contentGrade,
      sortable: true,
      grow: 0.1,
      wrap: true
    },
  ], []);

  // Commonly cited links table
  const columns1 = useMemo(() => [
    {
      name: 'TITLE',
      selector: row => row.title,
    },
    {
      name: 'DOMAIN',
      selector: row => row.domain,
    },
    {
      name: 'DOMAIN AUTHORITY',
      selector: row => row.domainAuthority,
      sortable: true,
    },
    {
      name: 'CITED BY',
      selector: row => row.citedBy,
      sortable: true,
    },
  ], []);

  // Handeling the sider
  const handleSliderChange = value => {
    setSliderValue(value);
    let nn = 0;
    for (let i of wordCountArr) {
      if (i < value) {
        nn++;
      }
    }
    setSliderText(`Greater than ${(nn / wordCountArr.length) * 100}% of competitors`);
  };

  // Hide/Show bookmark window by clicking bookmark in popups.
  const toggleBookmark = (flag) => {
    setRewriteTitles('');
    if (document.querySelector('.rewrite-selected')) {
      document.querySelector('.rewrite-selected').classList.remove('rewrite-selected');
    }

    // if bookmark (inside the rewrite box --> top-left) is active (bookmark window is toggled)
    if (flag) {
      console.log('yes');
      setRewriteType(mainRewriteType);
      document.querySelector('.rewrite-tol2-active').classList.remove('rewrite-tol2-active');

      if (mainRewriteType === 'Title') {
        document.querySelector('.rewrite-tol21').children[0].classList.add('rewrite-tol2-active');
      }
      else {
        document.querySelector('.rewrite-tol21').children[1].classList.add('rewrite-tol2-active');
      }

      document.querySelector('.rewrite-tol1').style.display = 'block';
      document.querySelector('.rewrite-tol2').style.display = 'none';
    }
    else {
      document.querySelector('.rewrite-tol1').style.display = 'none';
      document.querySelector('.rewrite-tol2').style.display = 'block';
    }
  };

  // Switch in between title and description (bookmark window)
  const switchBookmart = (e) => {
    setRewriteType(e.target.innerText);
    document.querySelector('.rewrite-tol2-active').classList.remove('rewrite-tol2-active');
    e.target.classList.add('rewrite-tol2-active');
  };

  // selecting the rewrite cards (title and description)
  const selectRewriteCards = (f, id, word) => {
    if (f.target.tagName !== 'svg' && f.target.tagName !== 'path') {
      if (document.querySelector('.rewrite-selected')) {
        if (document.querySelector('.rewrite-selected').id !== id) {
          document.querySelector('.rewrite-selected').classList.remove('rewrite-selected');
        }
      }

      document.getElementById(id).classList.toggle('rewrite-selected');

      // If the same title is selected
      if (rewriteTitles === word) {
        setRewriteTitles('');
      }
      else {
        setRewriteTitles(word);
      }
    }
    else {
      setRefFlag(!refFlag);
      let stnOverviewBookmark = localStorage.getItem('stnOverviewBookmark');
      if (stnOverviewBookmark) {
        stnOverviewBookmark = JSON.parse(stnOverviewBookmark);

        if (stnOverviewBookmark[rewriteType].includes(word)) {

          bookmarkVals[rewriteType].splice(bookmarkVals[rewriteType].indexOf(word), 1);

          mainVals[rewriteType].push(word)
          stnOverviewBookmark[rewriteType].splice(stnOverviewBookmark[rewriteType].indexOf(word), 1);
        }
        else {
          bookmarkVals[rewriteType].push(word)
          mainVals[rewriteType].splice(mainVals[rewriteType].indexOf(word), 1);
          stnOverviewBookmark[rewriteType].push(word);
        }

        localStorage.setItem('stnOverviewBookmark', JSON.stringify(stnOverviewBookmark));
      }
      else {
        bookmarkVals[rewriteType].push(word);
        mainVals[rewriteType].splice(mainVals[rewriteType].indexOf(word), 1);
        setMainVals(mainVals);

        let tempObj = {
          Title: [],
          Description: []
        };

        tempObj[rewriteType] = [word];
        localStorage.setItem('stnOverviewBookmark', JSON.stringify(tempObj));
      }
    }
  };

  // Clicking on submit button of rewrite title after choosing it
  const handleSelectClick = () => {
    // console.log(rewriteTitles);
    if (rewriteType === 'Title') {
      setTitle1(rewriteTitles);
      setTitleLength(rewriteTitles.length);
      if (rewriteTitles.length <= 35) {
        setTitleColor("text-danger");
      }
      else if (rewriteTitles.length > 35 && rewriteTitles.length <= 55) {
        setTitleColor("text-warning");
      }
      else if (rewriteTitles.length > 55 && rewriteTitles.length <= 65) {
        setTitleColor("text-success");
      }
      else if (rewriteTitles.length > 65) {
        setTitleColor("text-primary");
      }
      localStorage.setItem('stnOverviewMain', JSON.stringify({ title: rewriteTitles, description: description1 }));
    }
    else {
      setDescription1(rewriteTitles);
      setDescriptionLength(rewriteTitles.length)
      if (rewriteTitles.length <= 60) {
        setDescriptionColor("text-danger");
      }
      else if (rewriteTitles.length > 60 && rewriteTitles.length <= 130) {
        setDescriptionColor("text-warning");
      }
      else if (rewriteTitles.length > 130 && rewriteTitles.length <= 190) {
        setDescriptionColor("text-success");
      }
      else if (rewriteTitles.length > 190) {
        setDescriptionColor("text-primary");
      }
      localStorage.setItem('stnOverviewMain', JSON.stringify({ title: title1, description: rewriteTitles }));
    }
  };

  // refreshing the rewrite to get new data
  const refreshRewrite = () => {
    console.log('refresh');
  };

  // Close the rewrite popup either by clicking outside or cross icon (Title / Description)
  const closeRewrite = () => {
    document.querySelector('.rewrite-box').classList.add('d-none');
  };

  // Open the rewrite box either by clicking on title or description
  const openRewrite = (type) => {
    setMainRewriteType(type);
    setRewriteType(type);
    document.querySelector('.rewrite-box').classList.remove('d-none');
    document.querySelector('.rewrite-tol2-active').classList.remove('rewrite-tol2-active');
    if (type === 'Title') {
      document.querySelector('.rewrite-box-foot').style.display = 'block';
      document.querySelector('.rewrite-tol21').children[0].classList.add('rewrite-tol2-active');
    }
    else {
      document.querySelector('.rewrite-box-foot').style.display = 'none';
      document.querySelector('.rewrite-tol21').children[1].classList.add('rewrite-tol2-active');
    }
  };

  // Open outline rewrite box
  const openOutline = () => {
    document.querySelector('.outline-box').classList.remove('d-none');
  };

  // Handle change of title input (Div)
  const titleInput = (e) => {
    e.preventDefault();
    const text = e.target.textContent;
    setTitle(text);
    setTitleLength(text.length);
    if (text.length <= 35) {
      setTitleColor("text-danger");
    }
    else if (text.length > 35 && text.length <= 55) {
      setTitleColor("text-warning");
    }
    else if (text.length > 55 && text.length <= 65) {
      setTitleColor("text-success");
    }
    else if (text.length > 65) {
      setTitleColor("text-primary");
    }
  };

  // Handle change of description input (Div)
  const descInput = (e) => {
    e.preventDefault();
    const text = e.target.textContent;
    // console.log(text);
    setDescription(text);
    setDescriptionLength(text.length)
    if (text.length <= 60) {
      setDescriptionColor("text-danger");
    }
    else if (text.length > 60 && text.length <= 130) {
      setDescriptionColor("text-warning");
    }
    else if (text.length > 130 && text.length <= 190) {
      setDescriptionColor("text-success");
    }
    else if (text.length > 190) {
      setDescriptionColor("text-primary");
    }
  };

  // Make title in builder box editable
  const titleClick = () => {
    setIsTitleEditable(true);
    document.querySelector('.title-edit2').style.display = 'flex';
    document.querySelector('.title-edit1').style.display = 'none';
    document.querySelector('.overview-title').classList.add('overview-title1');
  };

  // Make description in builder box editable
  const descClick = () => {
    setIsDescEditable(true);
    document.querySelector('.desc-edit2').style.display = 'flex';
    document.querySelector('.desc-edit1').style.display = 'none';
    document.querySelector('.overview-desc').classList.add('overview-desc1');
  }

  // Save the title
  const saveTitle = () => {
    if (isTitleEditable) {
      setIsTitleEditable(false);
      setTitle1(title);

      if (title === '') {
        document.querySelector('.title-edit1').style.display = 'none';
        document.querySelector('.overview-title').classList.add('overview-title1');
        setTitle('Click to add title');
        setTitle1('Click to add title');
      }

      document.querySelector('.title-edit2').style.display = 'none';
      document.querySelector('.title-edit1').style.display = 'block';
      document.querySelector('.overview-title').classList.remove('overview-title1');
      localStorage.setItem('stnOverviewMain', JSON.stringify({ title, description: description1 }));
    }
  };

  // Save the description
  const saveDesc = () => {
    if (isDescEditable) {
      setIsDescEditable(false);
      setDescription1(description);

      if (description === '') {
        document.querySelector('.desc-edit1').style.display = 'none';
        document.querySelector('.overview-desc').classList.add('overview-desc1');
        setDescription('Click to add description');
        setDescription1('Click to add description');
      }

      document.querySelector('.desc-edit2').style.display = 'none';
      document.querySelector('.desc-edit1').style.display = 'block';
      document.querySelector('.overview-desc').classList.remove('overview-desc1');
      localStorage.setItem('stnOverviewMain', JSON.stringify({ title: title1, description }));
    }
  };

  // Make the title uneditable with saving the text
  const closeTitle = () => {
    document.querySelector('.overview-title').innerText = title1;
    setTitle(title1);
    setIsTitleEditable(false);
    document.querySelector('.title-edit2').style.display = 'none';
    document.querySelector('.title-edit1').style.display = 'block';
    document.querySelector('.overview-title').classList.remove('overview-title1');
  };

  // Make the description uneditable with saving the text
  const closeDesc = () => {
    document.querySelector('.overview-desc').innerText = description1;
    setDescription(description1);
    setIsDescEditable(false);
    document.querySelector('.desc-edit2').style.display = 'none';
    document.querySelector('.desc-edit1').style.display = 'block';
    document.querySelector('.overview-desc').classList.remove('overview-desc1');
  };

  // Close the outline box model
  const closeOutline = () => {
    document.querySelector('.outline-box').classList.add('d-none');
  };

  // Refresh the outline
  const refreshOutline = () => {
    console.log('refresh outline');
  };

  // Call the api again
  const refreshOutlineMain = () => {
    getData(true);
  };

  // Handle click on outline cards
  const selectOutlineCards = (e, id, word) => {
    if (document.getElementById(id).classList.contains('outline-selected')) {
      document.getElementById(id).classList.remove('outline-selected');
    }
    else {
      document.getElementById(id).classList.add('outline-selected');
    }
    if (outlineVals1.includes(word)) {
      setOutlineVals1(() => {
        return outlineVals1.filter((f) => {
          return f !== word;
        });
      });
    }
    else {
      setOutlineVals1(outlineVals1.concat(word));
    }
  };

  // Handle click on the add outline button
  const handleOutlineClick = () => {
    let temp = [];
    if (outlineVals1.length === 0) {
      for (let i of outlineVals) {
        temp.push({
          type: "head2",
          text: i,
          indent: 1,
          url: ''
        });
      }
    }
    else {
      for (let i of outlineVals1) {
        temp.push({
          type: "head2",
          text: i,
          indent: 1,
          url: ''
        });
      }
    }

    setBuilderVals(builderVals.concat(temp));

    let stnBuilderVals = localStorage.getItem('stnBuilderVals');
    if (stnBuilderVals) {
      stnBuilderVals = JSON.parse(stnBuilderVals);
      stnBuilderVals = stnBuilderVals.concat(temp);
      localStorage.setItem('stnBuilderVals', JSON.stringify(stnBuilderVals));
    }
    else {
      localStorage.setItem('stnBuilderVals', JSON.stringify(temp));
    }
    setOutlineVals([]);
    setOutlineVals1([]);
    document.querySelector('.outline-box').classList.add('d-none');
  };

  // Handle click on builder box card
  const builderCardClick = (e, id, index) => {
    if (e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
      if (document.getElementById(id).classList.contains('om2-inner5-card0')) {
        document.getElementById(id).classList.toggle('om2-inner5-card-selected');

        if (builderCardIndex.includes(index)) {
          setBuilderCardIndex(() => {
            return builderCardIndex.filter((e) => {
              return e !== index;
            });
          });
        }
        else {
          setBuilderCardIndex(builderCardIndex.concat(index));
        }

        // If at least one card is selected, only after that some builder features are available (up, down, ...)
        if (document.querySelectorAll('.om2-inner5-card-selected').length > 0) {
          setBuilderEditable(true);
        }
        else {
          setBuilderEditable(false);
        }
      }
    }
  };

  // Make builder box card editable
  const editBuilderVal = (id, index) => {
    if (builderVals[index].type !== 'link') {
      let b1 = document.getElementById(id);
      b1.contentEditable = true;
      b1.previousElementSibling.style.display = 'none';
      b1.classList.add('builder_text1');
      b1.parentNode.parentNode.classList.remove('om2-inner5-card0');
      b1.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
      b1.parentNode.nextElementSibling.style.display = 'none';
    }
    else {
      setEditLinkVals({
        ...editLinkVals, [index]: {
          editText: builderVals[index].text,
          editUrl: builderVals[index].url
        }
      });
      let b2 = document.getElementById(`builder-card-${index}`);
      b2.style.display = 'none';
      document.getElementById(`editLink${index}`).style.display = 'flex';
    }
  };

  // handeling link's data onchange
  const handleChangeEdit = (e, index) => {
    setEditLinkVals({
      ...editLinkVals, [index]: {
        ...editLinkVals[index], [e.target.name]: e.target.value
      }
    });
  };

  // Save the link
  const editLinkSave = (index) => {
    builderVals[index] = {
      ...builderVals[index], "text": editLinkVals[index].editText, "url": editLinkVals[index].editUrl
    };
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
    editLinkClose(index);
    setBuilderRefresh(!builderRefresh);
  };

  // close edit option
  const editLinkClose = (index) => {
    delete editLinkVals[index];
    let b2 = document.getElementById(`builder-card-${index}`);
    b2.style.display = 'flex';
    document.getElementById(`editLink${index}`).style.display = 'none';
  };

  // Save the builder card
  const saveBuilderCard = (index) => {
    let b1 = document.getElementById(`builder-card-div-${index}`);
    builderVals[index] = {
      ...builderVals[index],
      text: b1.innerText
    };

    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));

    b1.contentEditable = false;
    b1.previousElementSibling.style.display = 'block';
    b1.classList.remove('builder_text1');
    b1.parentNode.parentNode.classList.add('om2-inner5-card0');
    b1.parentNode.nextElementSibling.nextElementSibling.style.display = 'none';
    b1.parentNode.nextElementSibling.style.display = 'block';
  };

  // When there is no card in builder box
  const saveBuilderCard1 = () => {
    let b1 = document.getElementById("builder-card-div-init");

    setBuilderVals(builderVals.concat({
      type: "head2",
      text: b1.innerText,
      indent: 1,
      url: ''
    }));

    localStorage.setItem('stnBuilderVals', JSON.stringify([{
      type: "head2",
      text: b1.innerText,
      indent: 1,
      url: ''
    }]));
  };

  // close the builder card
  const closeBuilderCard = (index) => {
    let b1 = document.getElementById(`builder-card-div-${index}`);
    b1.innerText = builderVals[index].text;

    b1.contentEditable = false;
    b1.previousElementSibling.style.display = 'block';
    b1.classList.remove('builder_text1');
    b1.parentNode.parentNode.classList.add('om2-inner5-card0');
    b1.parentNode.nextElementSibling.nextElementSibling.style.display = 'none';
    b1.parentNode.nextElementSibling.style.display = 'block';
  };

  // Up shift the card
  const handleBuilder_up = (e) => {
    if (e.target.tagName === 'svg') {
      if (e.target.parentNode.classList.contains('cursor-pointer')) {
        builderCardIndex.sort();
        if (!builderCardIndex.includes(0)) {

          for (let i = 0; i < builderCardIndex.length; i++) {
            let prevVal = builderVals[builderCardIndex[i]];
            builderVals[builderCardIndex[i]] = builderVals[builderCardIndex[i] - 1];
            builderVals[builderCardIndex[i] - 1] = prevVal;
            document.getElementById(`builder-card-${builderCardIndex[i]}`).classList.toggle('om2-inner5-card-selected');
            document.getElementById(`builder-card-${builderCardIndex[i] - 1}`).classList.toggle('om2-inner5-card-selected');
            builderCardIndex[i]--;
          }

        }
      }
    }
    else if (e.target.tagName === 'path') {
      if (e.target.parentNode.parentNode.classList.contains('cursor-pointer')) {
        builderCardIndex.sort();
        if (!builderCardIndex.includes(0)) {

          for (let i = 0; i < builderCardIndex.length; i++) {
            let prevVal = builderVals[builderCardIndex[i]];
            builderVals[builderCardIndex[i]] = builderVals[builderCardIndex[i] - 1];
            builderVals[builderCardIndex[i] - 1] = prevVal;
            document.getElementById(`builder-card-${builderCardIndex[i]}`).classList.toggle('om2-inner5-card-selected');
            document.getElementById(`builder-card-${builderCardIndex[i] - 1}`).classList.toggle('om2-inner5-card-selected');
            builderCardIndex[i]--;
          }

        }
      }
    }
    setBuilderRefresh(!builderRefresh);
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
    // console.log(builderVals);
  };

  // down shift the card
  const handleBuilder_bottom = (e) => {
    if (e.target.tagName === 'svg') {
      if (e.target.parentNode.classList.contains('cursor-pointer')) {
        builderCardIndex.sort();
        if (!builderCardIndex.includes(builderVals.length - 1)) {

          for (let i = builderCardIndex.length - 1; i >= 0; i--) {
            let prevVal = builderVals[builderCardIndex[i]];
            builderVals[builderCardIndex[i]] = builderVals[builderCardIndex[i] + 1];
            builderVals[builderCardIndex[i] + 1] = prevVal;
            document.getElementById(`builder-card-${builderCardIndex[i]}`).classList.toggle('om2-inner5-card-selected');
            document.getElementById(`builder-card-${builderCardIndex[i] + 1}`).classList.toggle('om2-inner5-card-selected');
            builderCardIndex[i]++;
          }

        }
      }
    }
    else if (e.target.tagName === 'path') {
      if (e.target.parentNode.parentNode.classList.contains('cursor-pointer')) {
        builderCardIndex.sort();
        if (!builderCardIndex.includes(builderVals.length - 1)) {

          for (let i = builderCardIndex.length - 1; i >= 0; i--) {
            let prevVal = builderVals[builderCardIndex[i]];
            builderVals[builderCardIndex[i]] = builderVals[builderCardIndex[i] + 1];
            builderVals[builderCardIndex[i] + 1] = prevVal;
            document.getElementById(`builder-card-${builderCardIndex[i]}`).classList.toggle('om2-inner5-card-selected');
            document.getElementById(`builder-card-${builderCardIndex[i] + 1}`).classList.toggle('om2-inner5-card-selected');
            builderCardIndex[i]++;
          }

        }
      }
    }
    setBuilderRefresh(!builderRefresh);
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
    // console.log(builderVals);
  };

  // left shift the card
  const handleBuilder_left = (e) => {
    if (e.target.tagName === 'svg') {
      if (e.target.parentNode.classList.contains('cursor-pointer')) {
        for (let i = 0; i < builderCardIndex.length; i++) {
          if (builderVals[builderCardIndex[i]].indent > 1) {
            --builderVals[builderCardIndex[i]].indent;
            if (builderVals[builderCardIndex[i]].type === 'head2' || builderVals[builderCardIndex[i]].type === 'head3' || builderVals[builderCardIndex[i]].type === 'head4') {
              builderVals[builderCardIndex[i]].type = typesByIndent[builderVals[builderCardIndex[i]].indent];
            }
          }
        }
      }
    }
    else if (e.target.tagName === 'path') {
      if (e.target.parentNode.parentNode.classList.contains('cursor-pointer')) {
        for (let i = 0; i < builderCardIndex.length; i++) {
          if (builderVals[builderCardIndex[i]].indent > 1) {
            --builderVals[builderCardIndex[i]].indent;
            if (builderVals[builderCardIndex[i]].type === 'head2' || builderVals[builderCardIndex[i]].type === 'head3' || builderVals[builderCardIndex[i]].type === 'head4') {
              builderVals[builderCardIndex[i]].type = typesByIndent[builderVals[builderCardIndex[i]].indent];
            }
          }
        }
      }
    }
    setBuilderRefresh(!builderRefresh);
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
  };

  // right shift the card
  const handleBuilder_right = (e) => {
    if (e.target.tagName === 'svg') {
      if (e.target.parentNode.classList.contains('cursor-pointer')) {
        for (let i = 0; i < builderCardIndex.length; i++) {
          if (builderVals[builderCardIndex[i]].indent < 3) {
            ++builderVals[builderCardIndex[i]].indent;
            if (builderVals[builderCardIndex[i]].type === 'head2' || builderVals[builderCardIndex[i]].type === 'head3' || builderVals[builderCardIndex[i]].type === 'head4') {
              builderVals[builderCardIndex[i]].type = typesByIndent[builderVals[builderCardIndex[i]].indent];
            }
          }
        }
      }
    }
    else if (e.target.tagName === 'path') {
      if (e.target.parentNode.parentNode.classList.contains('cursor-pointer')) {
        for (let i = 0; i < builderCardIndex.length; i++) {
          if (builderVals[builderCardIndex[i]].indent < 3) {
            ++builderVals[builderCardIndex[i]].indent;
            if (builderVals[builderCardIndex[i]].type === 'head2' || builderVals[builderCardIndex[i]].type === 'head3' || builderVals[builderCardIndex[i]].type === 'head4') {
              builderVals[builderCardIndex[i]].type = typesByIndent[builderVals[builderCardIndex[i]].indent];
            }
          }
        }
      }
    }
    setBuilderRefresh(!builderRefresh);
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
  };

  // Utility function - to reverse the array (used to reverse builder card array to perform delete operation)
  const isReversed = (arr) => {
    let flag = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        flag = false;
        break;
      }
    }

    return flag;
  };

  // Delete the builder card (single/multiple)
  const handleBuilder_delete = (e) => {
    if (e.target.tagName === 'svg') {
      if (e.target.parentNode.classList.contains('cursor-pointer')) {

        if (!isReversed(builderCardIndex)) {
          builderCardIndex.sort().reverse();
        }

        for (let i of builderCardIndex) {
          builderVals.splice(i, 1);
          document.getElementById(`builder-card-${i}`).classList.toggle('om2-inner5-card-selected');
        }

        setBuilderCardIndex([]);

        if (document.querySelectorAll('.om2-inner5-card-selected').length > 0) {
          setBuilderEditable(true);
        }
        else {
          setBuilderEditable(false);
        }
        setBuilderRefresh(!builderRefresh);
        localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
      }
    }
    else if (e.target.tagName === 'path') {
      if (e.target.parentNode.parentNode.classList.contains('cursor-pointer')) {

        if (!isReversed(builderCardIndex)) {
          builderCardIndex.sort().reverse();
        }

        for (let i of builderCardIndex) {
          builderVals.splice(i, 1);
          document.getElementById(`builder-card-${i}`).classList.toggle('om2-inner5-card-selected');
        }

        setBuilderCardIndex([]);

        if (document.querySelectorAll('.om2-inner5-card-selected').length > 0) {
          setBuilderEditable(true);
        }
        else {
          setBuilderEditable(false);
        }
        setBuilderRefresh(!builderRefresh);
        localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
      }
    }
  };

  // Handling onclick of newly inserted empty line of outline box.
  useEffect(() => {
    if (addHeadFlag) {
      if (document.getElementById("addHeadRight")) {
        document.getElementById("addHeadRight").addEventListener('click', () => {
          let text = document.getElementById('addHead').value;
          if (text !== '') {
            let indent = 1;
            let type = "head2";

            // If some builder card is selected and clicked on add icon, to get that's indent, idAdd class is used.Updating the indent.
            if (document.getElementById("addHeadRight").classList.contains('isAdd')) {
              indent = document.getElementById("addHeadRight").classList[2].slice(7,);

              if (indent === '2') {
                type = "head3";
              }
              else if (indent === '3') {
                type = "head4";
              }
            }

            // added builder card position is last.
            if (builderVals.length - 1 === addHeadIndex) {
              builderVals.push({
                indent,
                text,
                type
              });
            }
            else {
              builderVals.splice(addHeadIndex + 1, 0, {
                indent,
                text,
                type
              });
            }

            localStorage.setItem("stnBuilderVals", JSON.stringify(builderVals));
            setBuilderRefresh(!builderRefresh);
            setAddHeadFlag(false);
            document.getElementById("tempAddHead").remove();
          }
        });
      }
      if (document.getElementById("addBulletRight")) {
        document.getElementById("addBulletRight").addEventListener('click', () => {
          let text = document.getElementById('addHead').value;
          if (text !== '') {
            let indent = 1;

            // If some builder card is selected and clicked on add icon, to get that's indent, idAdd class is used.Updating the indent.
            if (document.getElementById("addBulletRight").classList.contains('isAdd')) {
              indent = document.getElementById("addBulletRight").classList[2].slice(7,);
            }

            // added builder card position is last.
            if (builderVals.length - 1 === addHeadIndex) {
              builderVals.push({
                indent,
                text,
                type: "bullet"
              });
            }
            else {
              builderVals.splice(addHeadIndex + 1, 0, {
                indent,
                text,
                type: "bullet"
              });
            }

            localStorage.setItem("stnBuilderVals", JSON.stringify(builderVals));
            setBuilderRefresh(!builderRefresh);
            setAddHeadFlag(false);
            document.getElementById("tempAddHead").remove();
          }
        });
      }
      if (document.getElementById("addLinkRight")) {
        document.getElementById("addLinkRight").addEventListener('click', () => {
          let text = document.getElementById('addHead').value;
          let url = document.getElementById('addHeadUrl').value;
          if (text !== '') {
            if (builderVals.length - 1 === addHeadIndex) {
              builderVals.push({
                indent: 1,
                text,
                type: "link",
                url
              });
            }
            else {
              builderVals.splice(addHeadIndex + 1, 0, {
                indent: 1,
                text,
                type: "link",
                url
              });
            }

            localStorage.setItem("stnBuilderVals", JSON.stringify(builderVals));
            setBuilderRefresh(!builderRefresh);
            setAddHeadFlag(false);
            document.getElementById("tempAddHead").remove();
          }
        });
      }

      document.getElementById("addHeadClose").addEventListener('click', () => {
        setAddHeadFlag(false);
        document.getElementById("tempAddHead").remove();
      });
    }
  }, [addHeadFlag]);

  // Handling the change in types and inserting new empty lines of corresponding type.
  const handleBuilder_heading = (type) => {
    if (builderVals.length > 0) {
      if (addHeadFlag) {
        setAddHeadFlag(false);
        document.getElementById("tempAddHead").remove();
      }

      // If some builder-card/s is/are selected
      if (builderCardIndex.length !== 0) {
        let flag = true;

        // looping in selected builder card's index.
        for (let i of builderCardIndex) {

          // if incoming type is head and previous card with that index is bullet, change it to heading.
          if (type === 'head') {
            if (builderVals[i].type === 'bullet') {
              builderVals[i].type = 'head2';
              flag = false;
            }
          }
          // if incoming type is bullet and previous card with that index is head, change it to bullet.
          else if (type === 'bullet') {
            if (builderVals[i].type !== 'bullet' && builderVals[i].type !== 'link') {
              builderVals[i].type = 'bullet';
              flag = false;
            }
          }
        }

        // If there's no change in types i.e., add new empty line.
        if (flag) {
          if (!addHeadFlag) {
            let nc = document.createElement('div');
            nc.setAttribute("id", "tempAddHead");

            if (type === 'head') {
              nc.innerHTML = `
                            <div class="row2 addHead">
                                <input id="addHead" type="text" />
                                <div class="ms-2 row2">
                                    <div id="addHeadRight" class="me-3 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                    <div id="addHeadClose" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        `;
            }
            else if (type === 'bullet') {
              nc.innerHTML = `
                            <div class="row2 addHead">
                                <input id="addHead" type="text" />
                                <div class="ms-2 row2">
                                    <div id="addBulletRight" class="me-3 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                    <div id="addHeadClose" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            `;
            }
            else if (type === 'link') {
              nc.innerHTML = `
                            <div class="row2 row8 addHead1 addHead">
                                <div class="row2 row7">
                                    <input id="addHead" placeholder="add text here" type="text" />
                                    <input class="mt-2" id="addHeadUrl" placeholder="add url here" type="text" />
                                </div>
                                <div class="ms-2 row2">
                                    <div id="addLinkRight" class="me-3 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                    <div id="addHeadClose" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            `;
            }

            // Insert it at last index of selected builder card.
            document.getElementById(`builder-card-${builderCardIndex[builderCardIndex.length - 1]}`).parentNode.insertBefore(nc, document.getElementById(`builder-card-${builderCardIndex[builderCardIndex.length - 1]}`).nextSibling);
            setAddHeadFlag(true);
            setAddHeadIndex(builderCardIndex[builderCardIndex.length - 1]);
          }
        }
        else {
          setBuilderRefresh(!builderRefresh);
          localStorage.setItem("stnBuilderVals", JSON.stringify(builderVals));
        }
      }
      else {
        if (!addHeadFlag) {
          let nc = document.createElement('div');
          nc.setAttribute("id", "tempAddHead");

          if (type === 'head') {
            nc.innerHTML = `
                        <div class="row2 addHead">
                            <input id="addHead" type="text" />
                            <div class="ms-2 row2">
                                <div id="addHeadRight" class="me-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                </div>
                                <div id="addHeadClose" class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        `;
          }
          else if (type === 'bullet') {
            nc.innerHTML = `
                        <div class="row2 addHead">
                            <input id="addHead" type="text" />
                            <div class="ms-2 row2">
                                <div id="addBulletRight" class="me-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                </div>
                                <div id="addHeadClose" class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        `;
          }
          else if (type === 'link') {
            nc.innerHTML = `
                        <div class="row2 row8 addHead1 addHead">
                            <div class="row2 row7">
                                <input id="addHead" placeholder="add text here" type="text" />
                                <input class="mt-2" id="addHeadUrl" placeholder="add url here" type="text" />
                            </div>
                            <div class="ms-2 row2">
                                <div id="addLinkRight" class="me-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                </div>
                                <div id="addHeadClose" class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        `;
          }

          // Add it to the last position of builder box.
          document.getElementById(`builder-card-${builderVals.length - 1}`).parentNode.insertBefore(nc, document.getElementById(`builder-card-${builderVals.length - 1}`).nextSibling);
          setAddHeadFlag(true);
          setAddHeadIndex(builderVals.length - 1);
        }
      }
    }
  };

  // add text from competitor outlines to builder box.
  const omCardOutlineAdd = (index, index2, index1) => {
    let b1 = document.getElementById(`om-card-outline${index}${index2}${index1}`);
    let temp = JSON.parse(localStorage.getItem('stnBuilderVals'));
    if (b1.classList.contains('om-card-outline-active')) {
      temp = temp.filter((e) => {
        return e.text !== b1.innerText;
      });

      setBuilderVals(() => {
        return builderVals.filter((e) => {
          return e.text !== b1.innerText;
        });
      });
    }
    else {
      temp.push({
        type: "head2",
        text: b1.innerText,
        indent: 1,
        url: ''
      });

      setBuilderVals(builderVals.concat({
        type: "head2",
        text: b1.innerText,
        indent: 1,
        url: ''
      }));
    }

    // highlight the inserted text in builder box (highlight to competitor outline section).
    b1.classList.toggle('om-card-outline-active');
    localStorage.setItem('stnBuilderVals', JSON.stringify(temp));
  }

  // Add card to builder box by clicking add button
  const handleBuilder_add = () => {
    if (builderVals.length > 0) {
      if (addHeadFlag) {
        setAddHeadFlag(false);
        document.getElementById("tempAddHead").remove();
      }

      // If any builder card is selected 
      if (builderCardIndex.length !== 0) {
        if (!addHeadFlag) {

          // Getting the builder type of selected card
          let type = builderVals[builderCardIndex[builderCardIndex.length - 1]].type;
          let indent = builderVals[builderCardIndex[builderCardIndex.length - 1]].indent;

          let nc = document.createElement('div');
          nc.setAttribute("id", "tempAddHead");

          if (type === 'head2' || type === 'head3' || type === 'head4') {
            nc.innerHTML = `
                            <div class="row2 addHead">
                                <input id="addHead" type="text" />
                                <div class="ms-2 row2">
                                    <div id="addHeadRight" class="me-3 isAdd indent-${indent} cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                    <div id="addHeadClose" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        `;
          }
          else if (type === 'bullet') {
            nc.innerHTML = `
                            <div class="row2 addHead">
                                <input id="addHead" type="text" />
                                <div class="ms-2 row2">
                                    <div id="addBulletRight" class="me-3 isAdd indent-${indent} cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                    <div id="addHeadClose" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        `;
          }
          else if (type === 'link') {
            nc.innerHTML = `
                            <div class="row2 addHead">
                                <input id="addHead" type="text" />
                                <div class="ms-2 row2">
                                    <div id="addHeadRight" class="me-3 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                    <div id="addHeadClose" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        `;
          }

          // insert just after the last selected card.
          document.getElementById(`builder-card-${builderCardIndex[builderCardIndex.length - 1]}`).parentNode.insertBefore(nc, document.getElementById(`builder-card-${builderCardIndex[builderCardIndex.length - 1]}`).nextSibling);
          setAddHeadFlag(true);
          setAddHeadIndex(builderCardIndex[builderCardIndex.length - 1]);
        }
      }
      else {
        if (!addHeadFlag) {
          let nc = document.createElement('div');
          nc.setAttribute("id", "tempAddHead");

          nc.innerHTML = `
                        <div class="row2 addHead">
                            <input id="addHead" type="text" />
                            <div class="ms-2 row2">
                                <div id="addHeadRight" class="me-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                </div>
                                <div id="addHeadClose" class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    `;

          // insert at last position of builder box
          document.getElementById(`builder-card-${builderVals.length - 1}`).parentNode.insertBefore(nc, document.getElementById(`builder-card-${builderVals.length - 1}`).nextSibling);
          setAddHeadFlag(true);
          setAddHeadIndex(builderVals.length - 1);
        }
      }
    }
  };

  // Copy utility
  const copyToClipboard = (target) => {
    navigator.clipboard.writeText(target).then(function () {
      // Setting the message for bottom right alert box
      clearTimeout(t);
      document.getElementById("builder-copy").style.display = 'block';
      t = setTimeout(() => {
        document.getElementById('builder-copy').style.display = 'none';
      }, 2000);
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  };

  // Copy the builder cards
  const builderCopy = () => {
    let str = "";
    if (builderCardIndex.length > 0) {
      for (let i of builderCardIndex) {
        let text = builderVals[i].text;
        str += text + "\n";
      }
    }
    else {
      for (let i of builderVals) {
        let text = i.text;
        str += text + "\n";
      }
    }
    for (let i of topicsToCover) {
      str += i + "\n";
    }
    copyToClipboard(str);
  };

  // Hide/Show whole side builder box (- icon, top-right)
  const toggleBuilderBox = (flag) => {
    if (flag) {
      document.querySelector('.over-main11').style.width = "100%";
      document.querySelector('.over-main12').style.display = 'none';
      document.querySelector('.build-outline').style.display = 'block';
      document.querySelector('.over-main').style.paddingRight = '1rem';
    }
    else {
      document.querySelector('.over-main11').style.width = "70%";
      document.querySelector('.over-main12').style.display = 'block';
      document.querySelector('.build-outline').style.display = 'none';
      document.querySelector('.over-main').style.paddingRight = '2rem';
    }
  };

  // show all/minimize outlines (Competitor Outlines)
  const showAllOutline = (e) => {
    if (outLineN === data.length) {
      outLineN = 3;
      outLineM = 0;
      e.target.innerText = 'Show all outline';
    }
    else {
      outLineN = data.length;
      e.target.innerText = 'Minimize Outline';
    }
    setOutLineRefresh(!outLineRefresh);
  };

  // show all/minimize topics
  const showAllTopics = (e) => {
    if (topicsN === Object.keys(topics).length) {
      topicsN = 10;
      e.target.innerText = 'Show all topics';
    }
    else {
      topicsN = Object.keys(topics).length;
      e.target.innerText = 'Minimize topics';
    }
    setToggleIgnoredTopicsFlag(!toggleIgnoredTopicsFlag);
    setTopicRefresh(!topicRefresh);
  };

  // expand/minimize topics
  const topicToggle = (index, e, key) => {
    // if Ignore topic/Add to outline button is clicked
    if (e.target.classList.contains('om-inner5-outline-btn')) {
      if (e.target.innerText === 'Add to Outline') {
        e.target.innerText = 'Remove from Outline';
        setTopicsToCover(topicsToCover.concat(key));

        let stnTopicsToCover = localStorage.getItem('stnTopicsToCover');
        if (stnTopicsToCover) {
          stnTopicsToCover = JSON.parse(stnTopicsToCover);
          stnTopicsToCover.push(key);
          localStorage.setItem('stnTopicsToCover', JSON.stringify(stnTopicsToCover));
        }
        else {
          localStorage.setItem('stnTopicsToCover', JSON.stringify([key]));
        }

        if (topicsToCover.length + 1 === Object.keys(topics).length) {
          document.getElementById('allAllOutline').innerText = 'Remove All From Outline';
        }

      }
      else if (e.target.innerText === 'Remove from Outline') {
        if (document.getElementById('allAllOutline').innerText === 'Remove All From Outline') {
          document.getElementById('allAllOutline').innerText = 'Add All To Outline';
        }

        let stnTopicsToCover = localStorage.getItem('stnTopicsToCover');
        stnTopicsToCover = JSON.parse(stnTopicsToCover);
        stnTopicsToCover.splice(stnTopicsToCover.indexOf(key), 1);
        localStorage.setItem('stnTopicsToCover', JSON.stringify(stnTopicsToCover));

        e.target.innerText = 'Add to Outline';

        setTopicsToCover(() => {
          return topicsToCover.filter((f) => {
            return f !== key;
          });
        });
      }
      else if (e.target.innerText === 'Ignore Topic') {
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
      }
    }
    // expand/minimize
    else {
      document.getElementById(`topics-card-title${index}`).classList.toggle('om-inner5-box11-active');
      document.getElementById(`topics-card-detail${index}`).classList.toggle('d-none');
    }
  };

  // add/remove all values of topics to topics to cover array (shown bottom of builder box)
  const addAllToOutline = (e) => {
    if (e.target.innerText === 'Remove All From Outline') {
      setTopicsToCover([]);
      localStorage.setItem('stnTopicsToCover', JSON.stringify([]));
      e.target.innerText = 'Add All To Outline';
    }
    else {
      setTopicsToCover(Object.keys(topics));
      localStorage.setItem('stnTopicsToCover', JSON.stringify(Object.keys(topics)));
      e.target.innerText = 'Remove All From Outline';
    }
  };

  // restore the ignored topic
  const recoverTopic = (key, index) => {
    setTopics({ ...topics, [key]: ignoredTopics[index][key] });
    topicsN = Object.keys(topics).length + 1;
    let stnIgnoredTopics = localStorage.getItem('stnIgnoredTopics');
    stnIgnoredTopics = JSON.parse(stnIgnoredTopics);
    stnIgnoredTopics.splice(stnIgnoredTopics.indexOf(key), 1);
    localStorage.setItem('stnIgnoredTopics', JSON.stringify(stnIgnoredTopics));

    setIgnoredTopics(() => {
      return ignoredTopics.filter((e) => {
        return Object.keys(e)[0] !== key;
      });
    });

    setTopicRefresh(!topicRefresh);
  };

  // drag and drop utility
  const ondragstartcapture = (e, index) => {
    setStartDragIndex(index);
    setTimeout(() => {
      document.getElementById(`builder-card-${index}`).style.visibility = 'hidden';
    }, 10);
  };

  // drag and drop utility
  const ondragover = (e, index) => {
    document.getElementById(`builder-card-${startDragIndex}`).style.visibility = 'visible';
    document.getElementById(`builder-card-${index}`).style.visibility = 'hidden';

    if (startDragIndex < index) {
      for (let i = startDragIndex; i < index; i++) {
        [builderVals[i], builderVals[i + 1]] = [builderVals[i + 1], builderVals[i]];

        setBuilderRefresh(!builderRefresh);
      }
    }
    else {
      for (let i = startDragIndex; i > index; i--) {
        [builderVals[i], builderVals[i - 1]] = [builderVals[i - 1], builderVals[i]];
        setBuilderRefresh(!builderRefresh);
      }
    }
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));

    setStartDragIndex(index);
  };

  // drag and drop utility
  const ondragend = () => {
    document.getElementById(`builder-card-${startDragIndex}`).style.visibility = 'visible';
    setBuilderRefresh(!builderRefresh);
    localStorage.setItem('stnBuilderVals', JSON.stringify(builderVals));
  };

  // Sort by (Competitor Outlines)
  const handleContentGradeFilter = (e) => {
    if (e.target.value === 'Position') {
      data.sort((a, b) => a.position - b.position);
    }
    else {
      data.sort((a, b) => contentGradeValue[b.contentGrade] - contentGradeValue[a.contentGrade]);
    }
    setOutLineRefresh(!outLineRefresh);
  };

  const test = () => {
    // console.log(ignoredTopics);
    // console.log(topics);
    // let n1=document.getElementById('builder-card-1');
    // let n2=document.getElementById('builder-card-2');
    // swapNodes(n1, n2);
    // console.log(builderVals);
    // console.log(wordCountArr);
  };

  return (
    <>
      <Header articleId={articleId} />
      <button style={{ zIndex: "9999", position: "fixed" }} onClick={test}>test</button>
      <div className="over-main">
        <div className="over-main1">
          <div className="over-main11">
            <div className="om-inner om-inner1">
              <div className="om-inner11 me-4">
                <h5 className="mb-4 mt-3">Your Word Count</h5>
                <h1 className="my-5 pb-2">850</h1>
                <h5 className="mb-2">Suggested: at least 700</h5>
                <p className="small">If there is not enough content, readers will not stay on the page as long as competitor content.</p>
              </div>
              <div className="om-inner11 me-4">
                <h5 className="mb-4 mt-3">Your Content Grade</h5>
                <h1 className="my-5 pb-2">A+</h1>
                <h5 className="mb-2">Suggested: at least A</h5>
                <p className="small">Content Grade shows how well your content covers the topics that it needs to in order to rank for the primary keyword.</p>
              </div>
              <div className="om-inner11 me-4">
                <h5 className="mb-4 mt-3">Keyword Volume</h5>
                <h1 className="my-5 pb-2">9.9K</h1>
                <p className="small mt-2">This is approximately how many searches are made for this keyword every month.</p>
              </div>
              <div className="om-inner11">
                <h5 className="mb-4 mt-3">Articles on First Page</h5>
                <h1 className="my-5 pb-2">71%</h1>
                <p className="small mt-2">This is the percent of content on the first page of Google that are articles. The higher the percentage, the better an article will do for this keyword.</p>
              </div>
              <div onClick={refreshOutlineMain} className="outline-refresh row2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
                <p>Refresh</p>
              </div>
            </div>
            <div className="om-inner om-inner2">
              <div className="om-inner21 om-inner22 mb-3">
                <h1>Competitive Analysis</h1>
                <div className="row2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  <span className="cursor-pointer">Export CSV</span>
                </div>
              </div>
              <div className="om-inner21 mb-5">
                <p>Use the tables below to see the competitive landscape for your content when it comes to Domain Authority, Content Grade, and Word Count. Content that beats the average has a higher chance of ranking on the first page.</p>
              </div>
              <div className="om-inner21">
                {props.load ? <DataTable
                  pagination
                  striped={true}
                  columns={columns}
                  data={data}
                /> : "Loading ..."}
              </div>
            </div>
            <div className="om-inner om-inner3">
              <div className="om-inner21 om-inner22 mb-3">
                <h2>Competitor Outlines</h2>
                <div className="row2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  <span className="cursor-pointer">Export CSV</span>
                </div>
              </div>
              <div className="om-inner21 mb-5">
                <p>Easily see how others are covering this topic so that you can quickly create your own outline.</p>
              </div>
              <div className="row2">
                <span>Sort By: </span>
                <select onChange={handleContentGradeFilter} style={{ width: "fit-content" }} className="form-select ms-2" aria-label="Select example">
                  <option value="Position">Position</option>
                  <option value="Content Grade">Content Grade</option>
                </select>
              </div>
              <div className="om-inner31 mt-4">

                {(outLineRefresh || !outLineRefresh) ? data.slice(0, outLineN).map((e, index) => {
                  if (e.outlineFlag) {
                    outLineM++;
                    return (
                      <div key={index} className="om-inner3-card">
                        <div className="om-inner3-card1">
                          <div className="om-card-upper">
                            <div className="row2">
                              <div>
                                <p>Position</p>
                                <p>{e.position}</p>
                              </div>
                              <div className="mx-3">
                                <p>Content Grade</p>
                                <p>{e.contentGrade}</p>
                              </div>
                              <div>
                                <p>Published</p>
                                <p>{e.lastUpdate.formated}</p>
                              </div>
                            </div>
                          </div>
                          <div className="om-card-body">
                            <b><a href={e.url} target="_blank" className="text-dark"> {e.title}</a></b>
                            <p className="mt-2 mb-4"><a className="text-dark" href={e.url} target="_blank">{(new URL(e.url)).hostname}</a></p>
                            <h5 className="my-2 text-info">DESCRIPTION</h5>
                            <p>{e.description}</p>
                            <div className="mt-4">
                              <h5 className="mb-2 text-info">OUTLINE</h5>
                              {Object.keys(e.outlines).map((g, index2) => {
                                return e.outlines[g].map((f, index1) => {
                                  let checkFlag = builderVals.some(e => e.text === f.trim());
                                  if (checkFlag) {
                                    return (
                                      <b key={index1} onClick={() => {
                                        omCardOutlineAdd(index, index2, index1);
                                      }} className="om-card-outline om-card-outline-active" id={`om-card-outline${index}${index2}${index1}`}>{f}</b>
                                    );
                                  }
                                  else {
                                    return (
                                      <b key={index1} onClick={() => {
                                        omCardOutlineAdd(index, index2, index1);
                                      }} className="om-card-outline" id={`om-card-outline${index}${index2}${index1}`}>{f}</b>
                                    );
                                  }
                                });
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  else {
                    if (outLineM < 3) {
                      ++outLineN;
                    }
                  }
                }) : null}

              </div>
              <div onClick={showAllOutline} className="om-inner31-foot mt-2">
                Show all outlines
              </div>
            </div>
            <div className="om-inner om-inner4">
              <h1 className="mb-3">Question To Answer</h1>
              <p>Looking at commonly searched questions can help you understand what kind of answers your audience is looking for. Find natural ways to answer these questions in your content.</p>
              <div>

              </div>
            </div>
            <div className="om-inner om-inner5">
              <div className="om-inner21 om-inner22 mb-3">
                <h1>Topics To Cover</h1>
                <div className="row2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-3 bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  <span className="cursor-pointer">Export CSV</span>
                </div>
              </div>
              <div className="om-inner21 mb-5">
                <p>Crafting quality content means making sure you cover topics your audience is interested in reading about. Use these key topics to help you create a comprehensive piece that is relevant to your audience. Click on each topic to explore how it is used within other popular content.</p>
              </div>
              <div className="row2 row5">
                <div className="om-inner51">
                  <div className="form-check form-switch form-check-custom form-check-solid">
                    <label className="form-check-label me-3" htmlFor="flexSwitchDefault">
                      <b>Group By Theme</b>
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                  </div>
                </div>
                <div className="om-inner52">
                  <button id="allAllOutline" onClick={addAllToOutline} className="btn btn-light">{topicsToCover.length === Object.keys(topics).length ? 'Remove All From Outline' : 'Add All To Outline'}</button>
                </div>
              </div>
              <div className="om-inner5-box">
                <div className="om-inner5-head row2 row5 my-4">
                  <p className="text-info">KEY TOPICS</p>
                  <p className="text-info">TYPICAL USAGE</p>
                  <p className="text-info">RELEVANCE</p>
                </div>

                {(topicRefresh || !topicRefresh) ? Object.keys(topics).slice(0, topicsN).map((e, index) => {
                  return (
                    <div key={index} className="om-inner5-box1 px-4 py-2">
                      <div onClick={(e1) => {
                        topicToggle(index, e1, e);
                      }} id={`topics-card-title${index}`} className="om-inner5-box11 row2 row5">
                        <div style={{ width: "100%" }}>
                          <p>{e}</p>
                        </div>
                        <div className="row2 om-inner5-box11-outline">
                          <p className="p-2 ms-5 om-inner5-outline-btn">{topicsToCover.includes(e) ? 'Remove from Outline' : 'Add to Outline'}</p>
                          <p className="p-2 ms-1 om-inner5-outline-btn">Ignore Topic</p>
                        </div>
                        <p style={{ width: "100%" }}><i>1 - {topics[e].maxUses} uses {topics[e].headN !== 0 ? `, ${topics[e].headN} uses in heading` : ''} </i></p>
                        <span className="om-fill">
                          <ProgressBar
                            completed={60}
                            bgColor="#8f3fc1"
                            height="18px"
                            borderRadius="6px"
                            labelAlignment="outside"
                            isLabelVisible={false}
                            labelColor="#e80909"
                            labelSize=""
                            maxCompleted={100}
                          />
                        </span>
                      </div>
                      <div id={`topics-card-detail${index}`} className="om-inner5-box12 d-none">
                        <h2 className="mb-4">Examples of {e}</h2>
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
                                      <a href={f.url} target="_blank" className="mb-3">{new URL(f.url).hostname}</a>
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
                  );
                }) : null}

                <div onClick={showAllTopics} className="om-inner5-foot cursor-pointer text-center mx-4 py-4">
                  <p>Show all topics</p>
                </div>

                {(toggleIgnoredTopicsFlag && ignoredTopics.length > 0) ? <div className="ignoredTopics my-5">
                  <h4 className="pb-2">Ignored Topics</h4>
                  {ignoredTopics.map((e, index) => {
                    return (
                      <div key={index} style={{ borderBottom: "1px solid gainsboro" }} className="row2 row5 py-4">
                        <div>{Object.keys(e)[0]}</div>
                        <button onClick={() => {
                          recoverTopic(Object.keys(e)[0], index)
                        }} className="btn py-2 px-4 btn-secondary">Restore Topic</button>
                      </div>
                    );
                  })}
                </div> : null}

              </div>
            </div>
            <div className="om-inner om-inner6">
              <div className="om-inner21 om-inner22 mb-3">
                <h1>Statistics</h1>
              </div>
              <div className="om-inner21 mb-5">
                <p>Citing original research establishes trust with your readers. Use this tool to find relevant statistics for your brief.</p>
              </div>
              <div>
                <b>Find statistics about:</b>
                <div className="row2 mt-2">
                  <input style={{ width: "fit-content" }} type="text" className="form-control" placeholder="keyword" />
                  <button className="btn btn-info ms-3">Search</button>
                </div>
              </div>
              <div className="om-inner6-table-head row2 row5 py-3">
                <p>STATISTICS</p>
                <b>ACTION</b>
              </div>
              <div className="om-inner6-table">
                <div className="om-inner6-table-body row2 row5 px-2 pt-3 pb-5">
                  <div className="row2">
                    <a className="text-dark" href="#">
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <div className="row2">
                        <p className="text-primary me-2">Lorem, ipsum dolor.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div>
                    <button className="btn py-2 px-4 btn-info">Add to Outline</button>
                  </div>
                </div>
                <div className="om-inner6-table-body row2 row5 px-2 pt-3 pb-5">
                  <div className="row2">
                    <a className="text-dark" href="#">
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <div className="row2">
                        <p className="text-primary me-2">Lorem, ipsum dolor.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div>
                    <button className="btn py-2 px-4 btn-info">Add to Outline</button>
                  </div>
                </div>
                <div className="om-inner6-table-body row2 row5 px-2 pt-3 pb-5">
                  <div className="row2">
                    <a className="text-dark" href="#">
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <div className="row2">
                        <p className="text-primary me-2">Lorem, ipsum dolor.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div>
                    <button className="btn py-2 px-4 btn-info">Add to Outline</button>
                  </div>
                </div>
                <div className="om-inner6-table-body row2 row5 px-2 pt-3 pb-5">
                  <div className="row2">
                    <a className="text-dark" href="#">
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <div className="row2">
                        <p className="text-primary me-2">Lorem, ipsum dolor.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div>
                    <button className="btn py-2 px-4 btn-info">Add to Outline</button>
                  </div>
                </div>
                <div className="om-inner6-table-body row2 row5 px-2 pt-3 pb-5">
                  <div className="row2">
                    <a className="text-dark" href="#">
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <div className="row2">
                        <p className="text-primary me-2">Lorem, ipsum dolor.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div>
                    <button className="btn py-2 px-4 btn-info">Add to Outline</button>
                  </div>
                </div>
                <div className="om-inner6-table-foot py-4 mt-4 text-center">
                  <p>Show all statistics</p>
                </div>
              </div>
            </div>
            <div className="om-inner om-inner7">
              <div className="om-inner21 om-inner22 mb-3">
                <h1>Commonly Cited Links</h1>
              </div>
              <div className="om-inner21 mb-5">
                <p>These are the links that competitors most commonly cite. Improve your content's trustworthiness to readers by incorporating them into your content also.</p>
              </div>
              <div className="om-inner7-table">
                <DataTable
                  pagination
                  striped={true}
                  columns={columns1}
                  data={data1}
                  progressPending={!props.load}
                />
              </div>
            </div>
          </div>
          <div className="over-main12">
            <div className="om2-inner mb-4 om2-inner1">
              <div className="row2 row5">
                <div className="om2-inner11">
                  <div className="row2">
                    <b className="me-2">Title</b>
                    <div onClick={() => {
                      openRewrite('Title');
                    }} className="om2-inner111 row2 px-2 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill me-1" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      <p>Rewrite Title</p>
                    </div>
                  </div>
                </div>
                <div onClick={() => {
                  toggleBuilderBox(true);
                }} className="om2-inner12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                  </svg>
                </div>
              </div>
              <OutsideClickHandler onOutsideClick={saveTitle}>
                <div className="row2 row5 mt-1 cursor-pointer">
                  <p className="overview-title" onClick={titleClick} contentEditable={isTitleEditable} suppressContentEditableWarning={true} onInput={titleInput}>{title1}</p>
                  <div onClick={titleClick} className="title-edit1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi cursor-pointer bi-pencil-fill" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </div>
                  <div className="title-edit2 row2">
                    <div onClick={saveTitle} className="me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                    <div onClick={closeTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </OutsideClickHandler>
              <p className={titleColor}>{titleLength}/60</p>
            </div>
            <div className="om2-inner mb-4 om2-inner2">
              <div className="row2">
                <b className="me-3">Description</b>
                <div onClick={() => {
                  openRewrite('Description');
                }} className="om2-inner111 row2 px-2 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-1 bi-lightbulb-fill" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <p>Rewrite Description</p>
                </div>
              </div>
              <OutsideClickHandler onOutsideClick={saveDesc}>
                <div className="row2 row5 mt-1 cursor-pointer">
                  <p className="overview-desc" onClick={descClick} onInput={descInput} contentEditable={isDescEditable} suppressContentEditableWarning={true}>{description1}</p>

                  <div onClick={descClick} className="desc-edit1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi cursor-pointer bi-pencil-fill" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </div>
                  <div className="desc-edit2 row2">
                    <div onClick={saveDesc} className="me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                    <div onClick={closeDesc}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </OutsideClickHandler>
              <p className={descriptionColor}>{descriptionLength}/160</p>
            </div>
            <div className="om2-inner text-center om2-inner3">
              <div className="slider-text">
                <p className="text-info">{sliderText}</p>
              </div>
              <div className="row2 mb-5">
                <b>Word Count</b>
                <div className='value'>{sliderValue}</div>
                <div className='slider'>
                  <Slider
                    min={0}
                    max={sliderMax}
                    step={sliderStep}
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </div>
              </div>
            </div>
            <div className="om2-inner om2-inner4">
              <div className="row2">
                <b className="me-3">Outline</b>
                <div onClick={openOutline} className="om2-inner111 row2 px-2 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill me-1" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <p>Get Outline Ideas</p>
                </div>
              </div>
            </div>
            <div className="om2-inner om2-inner5">
              <div className="om2-inner5-head py-3 row2">
                <div onClick={handleBuilder_up} id="builder-up" className={builderEditable ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Move Up">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                </div>
                <div onClick={handleBuilder_bottom} id="builder-bottom" className={builderEditable ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Move Down">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </div>
                <div onClick={handleBuilder_left} id="builder-left" className={builderEditable ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Unindent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </div>
                <div onClick={handleBuilder_right} id="builder-right" className={builderEditable ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Indent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </div>
                <div onClick={handleBuilder_delete} id="builder-delete" className={builderEditable ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Remove Line">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </div>
                <div onClick={() => {
                  handleBuilder_heading('head');
                }} id="builder-heading" className={builderVals.length > 0 ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Heading">
                  <img width={14} src="/assets/media/editor/h-icon.png" alt="Heading" />
                </div>
                <div onClick={() => {
                  handleBuilder_heading('bullet');
                }} id="builder-list" className={builderVals.length > 0 ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Bullet Point">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div onClick={handleBuilder_add} id="builder-add" className="mx-2 cursor-pointer" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Add Line">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                  </svg>
                </div>
                <div onClick={() => {
                  handleBuilder_heading('link');
                }} id="builder-link" className={builderVals.length > 0 ? 'mx-2 cursor-pointer' : 'mx-2 cursor-na'} data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Add Link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                </div>
              </div>

              <div className="om2-inner5-body mt-3">
                {builderVals.length !== 0 ? builderRefresh || !builderRefresh ? builderVals.map((e, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div draggable={true} onDragEnd={ondragend} onDragStartCapture={(d) => {
                        ondragstartcapture(d, index);
                      }} onDragOver={(d) => {
                        ondragover(d, index);
                      }} onClick={(e) => {
                        builderCardClick(e, `builder-card-${index}`, index);
                      }} id={`builder-card-${index}`} className="om2-inner5-card om2-inner5-card0 mb-1 row2 row5" style={{ marginLeft: `${e.indent - 1}rem` }}>
                        <div className="row2">
                          <div className="om2-inner5-card1 me-2" dangerouslySetInnerHTML={{ __html: builderTypes[e.type] }}></div>
                          <div className="builder_text" id={`builder-card-div-${index}`}>
                            {e.type !== 'link' ? <p>{e.text}</p> : <a href={e.url} target="_blank">{e.text}</a>}
                          </div>
                        </div>
                        <div onClick={() => {
                          editBuilderVal(`builder-card-div-${index}`, index);
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill cursor-pointer" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                          </svg>
                        </div>
                        <div className="builder-edit2 row2">
                          <div onClick={() => {
                            saveBuilderCard(index)
                          }} className="me-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </div>
                          <div onClick={() => {
                            closeBuilderCard(index);
                          }} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {e.type === 'link' ? <div id={`editLink${index}`} className="row2 row8 addHead1 addHead editLink">
                        <div className="row2 row7">
                          <input id="editLink" placeholder="add text here" type="text" name="editText" value={editLinkVals[index] ? editLinkVals[index].editText : ''} onChange={(e) => {
                            handleChangeEdit(e, index);
                          }} />
                          <input className="mt-2" name="editUrl" value={editLinkVals[index] ? editLinkVals[index].editUrl : ''} placeholder="add url here" type="text" onChange={(e) => {
                            handleChangeEdit(e, index)
                          }} />
                        </div>
                        <div className="ms-2 row2">
                          <div onClick={() => {
                            editLinkSave(index);
                          }} className="me-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </div>
                          <div onClick={() => {
                            editLinkClose(index)
                          }} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                          </div>
                        </div>
                      </div> : null}

                    </React.Fragment>

                  )
                }) : null : <>
                  <div className="row2">
                    <div contentEditable={true} className="builder_text builder_text1" id="builder-card-div-init"></div>
                    <div className="builder-edit2 d-flex row2">
                      <div onClick={saveBuilderCard1} className="me-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>}
              </div>

              {topicsToCover.length > 0 ? <div className="om2-inner5-f">
                <div className="row2">
                  <b>Topics to Cover: </b>
                  {topicsToCover.map((e, index) => {
                    return <p key={index} className="mx-2">{e}</p>
                  })}
                </div>
              </div> : null}

              <div className="mt-4">
                <b id="builder-copy" className="text-info text-center">Copied to clipboard</b>
                <div onClick={builderCopy} className="om2-inner5-foot row2 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-check-fill me-1" viewBox="0 0 16 16">
                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                  </svg>
                  {builderCardIndex.length === 0 ? <p>Copy All to Clipboard</p> : <p>Copy {builderCardIndex.length} Selected to Clipboard</p>}
                </div>
              </div>
            </div>
            <OutsideClickHandler onOutsideClick={closeRewrite}>
              <div className="d-none rewrite-box">
                <div className="rewrite-box0">
                  <div className="rewrite-tol1">
                    <div onClick={() => {
                      toggleBookmark(false);
                    }} className="rewrite-box1 rewb1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-1 bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                      </svg>
                      <p>Bookmark</p>
                    </div>
                    <div onClick={closeRewrite} className="rewrite-close">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                    <div onClick={refreshRewrite} className="rewrite-box1">
                      <h4 id="rewrite-heading">Rewrite {rewriteType}</h4>
                    </div>

                    {refFlag || !refFlag ? bookmarkVals[rewriteType] ? bookmarkVals[rewriteType].length !== 0 ? <>
                      <div className="my-2">
                        <h5>Recently Bookmarked</h5>
                      </div>
                      <div className="mb-2">
                        {bookmarkVals[rewriteType].map((e, index) => {
                          return (
                            <div key={index} onClick={(f) => {
                              selectRewriteCards(f, `sb${index}`, e);
                            }} id={`sb${index}`} className="rewrite-box1 rewrite-card">
                              <div className="rewrite-card1">
                                <p style={{ width: "100%" }}>{e}</p>
                                <div className="ms-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </> : null : null : null}

                    <div className="rewrite-box1 mb-1 mt-1 row2 row5">
                      <h5>New Ideas</h5>
                      <div className="row2 rewrite-box01 py-1 px-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                        <p>Refresh</p>
                      </div>
                    </div>

                    {refFlag || !refFlag ? mainVals[rewriteType] ? mainVals[rewriteType].length > 0 ? mainVals[rewriteType].map((e, index) => {
                      return (
                        <div key={index} onClick={(f) => {
                          selectRewriteCards(f, `tb${index}`, e);
                        }} id={`tb${index}`} className="rewrite-box1 rewrite-card">
                          <div className="rewrite-card1">
                            <p style={{ width: "100%" }}>{e}</p>
                            <div className="ms-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-1 bi-bookmark" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )
                    }) : <p className="my-5 text-center">No ideas found</p> : <p className="my-5">Collecting ideas ...</p> : null}

                    <div className="rewrite-tol2-foot">
                      <button id="rewrite-btn" disabled={rewriteTitles === ''} onClick={handleSelectClick} className="btn btn-info py-2 px-4">Choose {rewriteType}</button>
                    </div>
                    <div className="rewrite-box-foot">
                      <h5>Here are a few ideas on how to make your title stand out.</h5>
                      <div className="rewrite-box-foot1">
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                        <span className="badge mb-2 me-2 badge-info">New</span>
                      </div>
                    </div>
                  </div>
                  <div className="rewrite-tol2">
                    <div onClick={() => {
                      toggleBookmark(true);
                    }} className="rewrite-box1 rewb1 rewb2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-1 bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                      </svg>
                      <p>Bookmark</p>
                    </div>
                    <div onClick={closeRewrite} className="rewrite-close">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                    <div className="rewrite-box1 mb-4">
                      <h4>Bookmarks</h4>
                    </div>
                    <div className="rewrite-tol21 mb-4 row2">
                      <div onClick={switchBookmart} className="rewrite-tol2-active">
                        Title
                      </div>
                      <div onClick={switchBookmart}>
                        Description
                      </div>
                    </div>

                    {refFlag || !refFlag ? bookmarkVals[rewriteType] ? bookmarkVals[rewriteType].length > 0 ? bookmarkVals[rewriteType].map((e, index) => {
                      return (
                        <div key={index} onClick={(f) => {
                          selectRewriteCards(f, `rb${index}`, e);
                        }} id={`rb${index}`} className="rewrite-box1 rewrite-card">
                          <div className="rewrite-card1">
                            <p style={{ width: "100%" }}>{e}</p>
                            <div style={{ width: "4rem" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )
                    }) : <p className="my-5 text-center">No bookmarks found</p> : <p className="my-5">No bookmarks found</p> : null}

                    <div className="rewrite-tol2-foot">
                      <button id="rewrite-btn1" disabled={rewriteTitles === ''} onClick={handleSelectClick} className="btn btn-info py-2 px-4">Choose Title</button>
                    </div>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>

            <OutsideClickHandler onOutsideClick={closeOutline}>
              <div className="d-none outline-box">
                <div className="rewrite-box0">
                  <div className="rewrite-tol1">

                    <div onClick={closeOutline} className="rewrite-close">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                    <div onClick={refreshOutline} className="rewrite-box1">
                      <h4 id="rewrite-heading">Get Outline Ideas</h4>
                    </div>

                    <div className="rewrite-box1 mb-1 mt-1 row2 row5">
                      <h5>Here is an idea for an outline.</h5>
                      <div className="row2 rewrite-box01 py-1 px-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                        <p>Refresh</p>
                      </div>
                    </div>

                    {outlineVals.length > 0 ? outlineVals.map((e, index) => {
                      return (
                        <div key={index} onClick={(f) => {
                          selectOutlineCards(f, `ot${index}`, e);
                        }} id={`ot${index}`} className="rewrite-box1 rewrite-card">
                          <div className="rewrite-card1">
                            <p style={{ width: "100%" }}>{e}</p>
                          </div>
                        </div>
                      )
                    }) : <p className="my-5">Collecting ideas ...</p>}

                    <div className="rewrite-tol2-foot">
                      <button id="rewrite-btn2" onClick={handleOutlineClick} className="btn btn-info py-2 px-4">{outlineVals1.length === 0 ? 'Add All Headings' : `Add ${outlineVals1.length} Heading`} </button>
                    </div>

                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      <div onClick={() => {
        toggleBuilderBox(false);
      }} className="build-outline">
        <div className="row2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-chevron-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
          </svg>
          <h5>Build Outline</h5>
        </div>
      </div>
    </>
  )
}

export default Overview;
