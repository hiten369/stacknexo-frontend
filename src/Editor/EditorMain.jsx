import React, { useContext, useEffect, useState } from 'react'
import EditorHomeAlert from '../Alert/EditorHomeAlert';
import Aside from '../Aside/Aside';
import MainContext from '../context/MainContext';
import './editor.css';
import Navbar from '../Navbar/Navbar';
import { useMemo } from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import HeartBeatHandler from '../HeartBeatHandler';
import SetFeaturedModal from './Modals/SetFeaturedImageModal';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip';
import EditArticleModal from './Modals/EditArticleModal';
import { publicIpv4 } from 'public-ip';

const tConvert = (time) => {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    if (time[0] < 10) {
        time[0] = `0${time[0]}`;
    }
    return time.join(''); // return adjusted time or original string
};

const customStyles = {
    headRow: {
        style: {
            border: 'none',
        },
    },
    headCells: {
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold'
        },
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
        },
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
};

const TextField = styled.input`
height: 33px;
width: 300px;
border-radius: 3px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
border: 1px solid #e5e5e5;
padding: 0 32px 0 16px;
outline:none;

&:hover {
    cursor: pointer;
}

&:focus {
    box-shadow:0px 0px 0px 2px #d193eb;
}
`;

const ClearButton = styled.button`
border-top-left-radius: 0;
border-bottom-left-radius: 0;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border:none;
background-color:#621587;
color:white;
height: 34px;
width: 32px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

&:focus{
    box-shadow:0px 0px 0px 2px #d193eb;
}
`;

const FilterComponent = ({ filterText, onFilter, onSearch }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter .."
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type="button" onClick={onSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
            </svg>
        </ClearButton>
    </>
);

const cats = [{
    value: '',
    label: "All Categories"
}];

var articleCats1 = [];
var temp;
var mainData1 = [];
var AlertFlag = false;
var dateUtil = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
};

const EditorMain = (props) => {
    const context = useContext(MainContext);
    var [data2, setData2] = useState({});
    var [mainData, setMainData] = useState([]);
    const [filterValue, setFilterValue] = useState({
        dates: 'all',
        catId: ''
    });
    const [previousArticle, setPreviousArticle] = useState({
        element: {},
        index: 0,
        id: ''
    });
    const [AlertMsg, setAlertMsg] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggledClearRows, setToggleClearRows] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [filteredCats, setFilteredCats] = useState([]);
    const [articleDetails, setArticleDetails] = useState({});
    const [perPage, setPerPage] = useState(5);
    const [totalRows, setTotalRows] = useState(0);
    const [page, setPage] = useState(1);
    const [mainFlag, setMainFlag] = useState(false);
    const [sortValues, setSortValues] = useState({
        key: '',
        order: ''
    });
    const [sortFlag, setSortFlag] = useState(true);
    const [query, setQuery] = useState('');
    const [mode, setMode] = useState('all');
    const [totals, setTotals] = useState({
        all: 0,
        mine: 0,
        published: 0,
        pending: 0,
        trashed: 0,
        locked: 0,
        pilar: 0
    });
    const [datesInfo, setDatesInfo] = useState([]);
    const [loadFlag, setLoadFlag] = useState(false);

    // Fetching all articles
    useEffect(() => {
        getArticleData();
    }, [mainFlag]);

    const getArticleData = async () => {
        setLoadFlag(false);
        let userIp = await publicIpv4();
        let data3 = await context.fetchUserArticles(page, perPage, sortValues.key, sortValues.order, query, filterValue.catId, filterValue.dates, mode, JSON.parse(localStorage.getItem('stackNUser')).designationName, userIp);
        // console.log(data3);
        setTotalRows(data3.total);
        setData2(data3);
        mainData1 = data3.data;
        setMainData(data3.data);

        setTotals({
            all: data3.totalArticles,
            mine: data3.mineArticles,
            published: data3.publishedArticles,
            pending: data3.pendingArticles,
            trashed: data3.trashedArticles,
            locked: data3.lockedArticles,
            pilar: data3.pilarArticles,
        });

        setLoadFlag(true);
    };

    // Switching in between the pages
    const handlePageChange = page => {
        setMainFlag(!mainFlag);
        setPage(page);
    };

    // Handeling the total number of articles in a page to show
    const handlePerRowsChange = async (newPerPage) => {
        setMainFlag(!mainFlag);
        setPerPage(newPerPage);
    };

    const catDatesData = async () => {
        const ans = await context.getArticleCategories();

        for (let i of ans.data) {
            if (i.catParent === 'N') {
                cats.push({
                    value: i._id,
                    label: <span className="cat-lvl1">{i.catName}</span>
                });
                if (i.catChildren.length !== 0) {
                    for (let j of i.catChildren) {
                        cats.push({
                            value: j.catChildId,
                            label: <span className="cat-lvl2">{j.catChildName}</span>
                        });
                        temp = ans.data[ans.data.findIndex(x => x._id === j.catChildId)];
                        if (temp.catChildren.length !== 0) {
                            for (let k of temp.catChildren) {
                                cats.push({
                                    value: k.catChildId,
                                    label: <span className="cat-lvl3">{k.catChildName}</span>
                                });
                                temp = ans.data[ans.data.findIndex(x => x._id === k.catChildId)];
                                if (temp.catChildren.length !== 0) {
                                    for (let l of temp.catChildren) {
                                        cats.push({
                                            value: l.catChildId,
                                            label: <span className="cat-lvl4">{l.catChildName}</span>
                                        });
                                        temp = ans.data[ans.data.findIndex(x => x._id === l.catChildId)];
                                        if (temp.catChildren.length !== 0) {
                                            for (let m of temp.catChildren) {
                                                cats.push({
                                                    value: m.catChildId,
                                                    label: <span className="cat-lvl5">{m.catChildName}</span>
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        const userIp = await publicIpv4();
        const dates = await context.getArticleInfo(userIp);
        setDatesInfo(dates.data);
    };

    // Fetching categories and article dates
    useEffect(() => {
        catDatesData();
    }, []);

    // Table entities
    const columns = useMemo(() =>
        [
            {
                id: 'articleHead',
                name: 'Title',
                selector: row => <a href={`/editor2/${row._id}`}>{row.articleHead}</a>,
                sortable: true,
                sortField: 'articleHead',
                wrap: true,
                style: { padding: '20px 0px' },
                center: true
            },
            {
                id: 'allowedUsers',
                name: 'Authors',
                selector: row => <div>{row.allowedUsers.length !== 0 ? <><NavLink to={`/users/${row.userId}`}>{row.articleOwner}</NavLink>, <div>{row.allowedUsers.map((e, index) => {
                    return <span key={index}><NavLink key={index} to={`/users/${e.id}`}>{e.name}</NavLink>, </span>
                })}</div></> : <NavLink to={`/users/${row.userId}`}>{row.articleOwner}</NavLink>}</div>,
                sortable: true,
                sortField: 'allowedUsers',
                wrap: true,
                center: true
            },
            {
                id: 'articleCategory',
                name: 'Categories',
                selector: row => <p>{row.articleCategory.length !== 0 ? row.articleCategory.map((e, index) => {
                    return `${e.catName}`;
                }).toString() : ' - '}</p>,
                sortable: true,
                sortField: 'articleCategory',
                center: true,
                wrap: true,
                grow: 0.7
            },
            {
                id: 'articlePublishDate',
                name: 'Publish Date',
                selector: row => `Published at: ${new Date(Number(row.articlePublishDate)).toLocaleDateString()}`,
                sortable: true,
                sortField: 'articlePublishDate',
                wrap: true,
                wrap: true,
                center: true
            },
            {
                id: 'articleFeaturedImage',
                name: 'Featured Image',
                selector: row => <p>{row.articleFeaturedImage !== '' ? <img style={{ width: '20px' }} src="/assets/media/editor/green.png" alt="green_tick" /> : <><img style={{ width: '20px' }} src="/assets/media/editor/red_cross.png" alt="green_tick" /><span className="ms-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#setFeaturedModal">Set</span></>}</p>,
                sortable: true,
                sortField: 'articleFeaturedImage',
                center: true,
                wrap: true,
                grow: 0.4
            },
            {
                id: 'articleUpdateDate',
                name: 'Last Modified',
                selector: row => <><p>{row.articleUpdateDate.date ? `${new Date(Number(row.articleUpdateDate.date)).toLocaleDateString()} at ${tConvert(new Date(Number(row.articleUpdateDate.date)).toLocaleTimeString())}` : 'Few moments ago'}</p> by <NavLink className="text-dark" to={row.articleUpdateDate.user.id ? `/users/${row.articleUpdateDate.user.id}` : ''}><b>{row.articleUpdateDate.user.name}</b></NavLink></>,
                sortable: true,
                sortField: 'articleUpdateDate',
                wrap: true,
                center: true
            },
            {
                id: 'articleSlug',
                name: 'Current URL',
                selector: row => <p>{row.articleSlug !== '' ? row.articleSlug : row._id}</p>,
                sortable: true,
                sortField: 'articleSlug',
                wrap: true,
            },
            {
                id: 'title',
                name: 'Options',
                selector: (row, index) => <div><img data-bs-toggle="modal" data-bs-target="#EditArticleModal" onClick={() => {
                    filterCats(row);
                }} data-tip="Edit" className="me-2 cursor-pointer" src="/assets/media/editor/edit.svg" alt="edit" /><ReactTooltip place="bottom" effect="solid" className="px-2 py-2" /><img onClick={() => {
                    deleteArticle(index, row);
                }} data-tip="Delete" className="cursor-pointer" src="/assets/media/editor/delete.svg" alt="Delete" /></div>,
                center: true,
                wrap: true,
                grow: 0.4
            }
        ]
        , []);

    // Remote sort
    const handleSort = async (column, sortDirection) => {
        setSortFlag(!sortFlag);
        if (sortDirection === 'asc') {
            setSortValues({
                key: column.sortField,
                order: 1,
            });
        }
        else {
            setSortValues({
                key: column.sortField,
                order: -1,
            });
        }
        setMainFlag(!mainFlag);
    };

    // Setting the data for categories dropdown (new cats and all cats)
    const filterCats = (row) => {
        articleCats1 = [];
        setArticleDetails(row);
        let articleCats = row.articleCategory;
        const r = cats.filter((elem) => !articleCats.some(({ catId }) => elem.value === catId));
        setFilteredCats(r);

        for (let i of articleCats) {
            articleCats1.push({
                label: i.catName,
                value: i.catId
            });
        }
    };

    // Toggling between article types (top bar)
    const switchMode = (type) => {
        if (type === 'all') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[0].classList.add('editor1-main2-li-active');
            setMode('all');
        }
        else if (type === 'mine') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[1].classList.add('editor1-main2-li-active');
            setMode('mine');
        }
        else if (type === 'published') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[2].classList.add('editor1-main2-li-active');
            setMode('Published');
        }
        else if (type === 'pending') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[3].classList.add('editor1-main2-li-active');
            setMode('Pending');
        }
        else if (type === 'trashed') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[4].classList.add('editor1-main2-li-active');
            setMode('Trashed');
        }
        else if (type === 'locked') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[5].classList.add('editor1-main2-li-active');
            setMode('Locked');
        }
        else if (type === 'pilar') {
            document.querySelector('.editor1-main2-li-active').classList.remove('editor1-main2-li-active');
            document.querySelectorAll('.editor1-main2-li')[6].classList.add('editor1-main2-li-active');
            setMode('Pilar');
        }
        setMainFlag(!mainFlag);
    };

    // onChange for date and category
    const filterFuncChange = (e) => {
        if (e.target) {
            setFilterValue({ ...filterValue, "dates": e.target.value });
        }
        else {
            if (e.label !== "All Categories") {
                setFilterValue({ ...filterValue, "catId": e.value });
            }
            else {
                setFilterValue({ ...filterValue, "catId": "" });
            }
        }
    };

    // Click on the filter button (Resetting the data with filters)
    const filterFunc1 = async () => {
        setMainFlag(!mainFlag);
    };

    // Handle search query
    const subHeaderComponentMemo = useMemo(() => {
        const filterClick = () => {
            setQuery(filterText);
            setMainFlag(!mainFlag);
        };

        return (
            <FilterComponent onFilter={(e) => {
                setFilterText(e.target.value);
                setQuery(e.target.value);
            }} onSearch={filterClick} filterText={filterText} />
        );
    }, [filterText]);

    // Selecting the articles
    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    // Clear Selection
    const handleClearRows = () => {
        document.querySelector('.cEMZEX').style.overflow = 'hidden';
        setToggleClearRows(!toggledClearRows);
    };

    // Handeling the article selection
    const contextActions = useMemo(() => {
        // console.log(selectedRows);
        if (selectedRows.length === 0) {
            if (document.querySelector('.cEMZEX')) {
                document.querySelector('.cEMZEX').style.overflow = 'hidden';
            }
        }
        else {
            if (document.querySelector('.cEMZEX')) {
                document.querySelector('.cEMZEX').style.overflow = 'unset';
            }
        }
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>Actions</b>
                </button>
                <ul className="dropdown-menu">
                    <li><button onClick={handleClearRows} className="dropdown-item">Clear Selection</button></li>
                    <li><button onClick={() => {
                        deleteArticle(-1);
                    }} className="dropdown-item">Delete Selection</button></li>
                </ul>
            </div>
        );
    }, [mainData, selectedRows]);

    // Create new article document
    const newDoc = async () => {
        const userIp = await publicIpv4();
        let data = await context.newArticle(userIp);
        window.location.href = `/editor2/${data.saveArticle._id}`;
    };

    // Settings of alert bar
    const setAlert = (flag, message) => {
        AlertFlag = flag;
        setAlertMsg(message);
    };

    // deleting functionality
    const deleteArticle = async (ind = -1, rowData = {}) => {
        const userIp = await publicIpv4();

        if (selectedRows.length === 1 || ind !== -1) {
            let index;
            let data;
            if (ind !== -1) {
                index = ind;
                data = rowData;
            }
            else {
                data = selectedRows[0];
                index = mainData.indexOf(selectedRows[0]);
            }

            // Delete the previous article instantly
            if (AlertFlag) {
                setAlert(false, '');
                context.deleteArticle(JSON.parse(localStorage.getItem('articleDltTc')).id, userIp);

                setMainFlag(!mainFlag);

                if (loadFlag) {
                    setTimeout(() => {
                        handleClearRows();
                    }, 1000);
                }
            }

            // Saving information of deleted article for undo
            setPreviousArticle({
                element: data,
                index: index,
                id: data._id
            });

            // Setting details for set timeout
            localStorage.setItem('articleDltTc', JSON.stringify({
                flag: true,
                id: data._id
            }));

            // Alerting
            setAlert(true, `"${data.articleHead}" was deleted.   `);

            // Deleting article from frontend

            if (ind !== -1) {
                mainData1.splice(index, 1);
                setMainData(mainData1);
            }
            else {
                mainData.splice(index, 1);
            }

            // It will delete article permanently after 5 seconds if not undo
            setTimeout(() => {
                setAlert(false, '');
                if (JSON.parse(localStorage.getItem('articleDltTc')).flag === true) {
                    context.deleteArticle(JSON.parse(localStorage.getItem('articleDltTc')).id, userIp);

                    setMainFlag(!mainFlag);

                    if (loadFlag) {
                        setTimeout(() => {
                            handleClearRows();
                        }, 1000);
                    }
                }
            }, 5000);
        }
        else {
            // Delete the previous article instantly
            if (AlertFlag) {
                setAlert(false, '');
                for (let i of JSON.parse(localStorage.getItem('articleDltTc')).id) {
                    context.deleteArticle(i, userIp);

                    setMainFlag(!mainFlag);

                    if (loadFlag) {
                        setTimeout(() => {
                            handleClearRows();
                        }, 1000);
                    }
                }
            }

            // Saving information of deleted article for undo
            let indexArr = [];
            let idArr = [];

            for (let i of selectedRows) {
                indexArr.push(mainData.indexOf(i));
                idArr.push(i._id);

                // Deleting article from frontend
                mainData.splice(mainData.indexOf(i), 1);
            }

            setPreviousArticle({
                element: selectedRows,
                index: indexArr,
                id: idArr
            });

            // // Setting details for set timeout
            localStorage.setItem('articleDltTc', JSON.stringify({
                flag: true,
                id: idArr
            }));

            // // Alerting
            setAlert(true, `"Selected Articles" was deleted.   `);

            // It will delete article permanently after 5 seconds if not undo
            setTimeout(() => {
                setAlert(false, '');
                if (JSON.parse(localStorage.getItem('articleDltTc')).flag === true) {
                    for (let i of JSON.parse(localStorage.getItem('articleDltTc')).id) {
                        context.deleteArticle(i, userIp);

                        setMainFlag(!mainFlag);

                        if (loadFlag) {
                            setTimeout(() => {
                                handleClearRows();
                            }, 1000);
                        }
                    }
                }
            }, 5000);
        }
    };

    // Undo the deleted article witihin 5 seconds
    const undoArticle = () => {
        localStorage.setItem('articleDltTc', JSON.stringify({
            flag: false,
            id: JSON.parse(localStorage.getItem('articleDltTc')).id
        }));
        if (previousArticle.index.constructor === Array) {
            for (let i = 0; i < previousArticle.index.length; i++) {
                mainData.splice(previousArticle.index[i], 0, previousArticle.element[i]);
            }
        }
        else {
            mainData.splice(previousArticle.index, 0, previousArticle.element);
        }
        setAlert(false);
    };

    // Closing the alert (Delete the article instantly)
    const closeAlert = async () => {
        const userIp = await publicIpv4();
        setAlert(false);
        localStorage.setItem('articleDltTc', JSON.stringify({
            flag: false,
            id: JSON.parse(localStorage.getItem('articleDltTc')).id
        }));
        if (JSON.parse(localStorage.getItem('articleDltTc')).id.constructor === Array) {
            for (let i of JSON.parse(localStorage.getItem('articleDltTc')).id) {
                context.deleteArticle(i, userIp);

                setMainFlag(!mainFlag);

                if (loadFlag) {
                    setTimeout(() => {
                        handleClearRows();
                    }, 1000);
                }
            }
        }
        else {
            context.deleteArticle(JSON.parse(localStorage.getItem('articleDltTc')).id, userIp);

            setMainFlag(!mainFlag);

            if (loadFlag) {
                setTimeout(() => {
                    handleClearRows();
                }, 1000);
            }
        }
    };

    return (
        <>
            {/* Handeling heartbear api */}
            {/* <HeartBeatHandler notify={props.notify} setAlert={props.setAlert} encrypt={props.encrypt} /> */}

            {/* Alert bar */}
            {AlertFlag ? <EditorHomeAlert msg={AlertMsg} undoArticle={undoArticle} closeAlert={closeAlert} /> : null}

            {/* Navbar Menu */}
            <Navbar setAlert={props.setAlert} encrypt={props.encrypt} />

            {/* Aside Menu */}
            <Aside flag={true} />

            {/* Featured image model */}
            <SetFeaturedModal setAlert={props.setAlert} />

            {/* Edit article modal */}
            <EditArticleModal mainData={mainData} setMainData={setMainData} setAlert={props.setAlert} filteredCats={filteredCats} articleCats1={articleCats1} articleDetails={articleDetails} />

            <div style={{ 'backgroundColor': 'rgb(240, 240, 240)' }} className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="page d-flex flex-row flex-column-fluid">
                    {/*begin::Wrapper*/}
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        {/*begin::Content wrapper*/}
                        <div className="d-flex flex-column-fluid">
                            {/*begin::Container*/}
                            <div className="d-flex flex-column flex-column-fluid container-fluid editor-main-fluid">
                                {/*begin::Post*/}
                                <div className="content flex-column-fluid" id="kt_content">
                                    <div className="editor1-main">
                                        <div className="editor1-main1">
                                            <div className="eidtor1-main0">
                                                <div className="editor1-main2 row3">
                                                    <div onClick={() => {
                                                        switchMode('all');
                                                    }} className="editor1-main2-li editor1-main2-li-active">
                                                        <span>All</span>
                                                        <span>{`(${data2.data ? totals.all : 0})`}</span>
                                                    </div>
                                                    <div onClick={() => {
                                                        switchMode('mine');
                                                    }} className="editor1-main2-li editor1-main2-li1">
                                                        <span>Mine</span>
                                                        <span>{`(${data2.data ? totals.mine : 0})`}</span>
                                                    </div>
                                                    <div onClick={() => {
                                                        switchMode('published');
                                                    }} className="editor1-main2-li editor1-main2-li1">
                                                        <span>Published</span>
                                                        <span>{`(${data2.data ? totals.published : 0})`}</span>
                                                    </div>
                                                    <div onClick={() => {
                                                        switchMode('pending');
                                                    }} className="editor1-main2-li editor1-main2-li1">
                                                        <span>Peding</span>
                                                        <span>{`(${data2.data ? totals.pending : 0})`}</span>
                                                    </div>
                                                    <div onClick={() => {
                                                        switchMode('trashed');
                                                    }} className="editor1-main2-li editor1-main2-li1">
                                                        <span>Trash</span>
                                                        <span>{`(${data2.data ? totals.trashed : 0})`}</span>
                                                    </div>
                                                    <div onClick={() => {
                                                        switchMode('locked');
                                                    }} className="editor1-main2-li editor1-main2-li1">
                                                        <span>Update Locked</span>
                                                        <span>{`(${data2.data ? totals.locked : 0})`}</span>
                                                    </div>
                                                    <div onClick={() => {
                                                        switchMode('pilar');
                                                    }} className="editor1-main2-li editor1-main2-li1">
                                                        <span>Pilar Content</span>
                                                        <span>{`(${data2.data ? totals.pilar : 0})`}</span>
                                                    </div>
                                                </div>
                                                <div className="editor1-main3 mt-2">
                                                    <div className="row2 row4 row5">
                                                        <div className="row3">
                                                            <div className="editor1-main3-d1">
                                                                <select onChange={filterFuncChange} value={filterValue.dates} name="dates" className="form-select" aria-label="Select Date">
                                                                    <option value="all">All Dates</option>
                                                                    {datesInfo.map((e, index) => {
                                                                        return <option key={index} value={`01/${dateUtil[e.month]}/${e.year}`}>{`${e.month} ${e.year}`}</option>
                                                                    })}
                                                                    {/* <option value="01/06/2022">June 2022</option>
                                                                    <option value="01/05/2022">May 2022</option>
                                                                    <option value="01/04/2022">April 2022</option> */}
                                                                </select>
                                                            </div>
                                                            <div className="editor1-main3-d1 mx-3">
                                                                <Select
                                                                    defaultValue={cats[0]}
                                                                    onChange={filterFuncChange}
                                                                    options={cats}
                                                                    isSearchable={false}
                                                                />
                                                            </div>
                                                            <div className="editor1-main3-d1 ms-1">
                                                                <button onClick={filterFunc1} className="btn py-2 px-4 btn-light-info btn-hover-rise">Filter</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="editor1-main3-d1 ms-1">
                                                                <NavLink to="/articleCategories" className="btn p-3 btn-danger">Manage Categories</NavLink>
                                                                <button onClick={newDoc} className="btn mt-2 p-3 btn-success">+ New Article</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="eidtor2-main0">
                                                <DataTable
                                                    // expandableRows
                                                    progressPending={!props.load}
                                                    // conditionalRowStyles={conditionalRowStyles}
                                                    // dense
                                                    title="Articles"
                                                    columns={columns}
                                                    data={mainData}
                                                    selectableRows
                                                    onSelectedRowsChange={handleChange}
                                                    clearSelectedRows={toggledClearRows}
                                                    contextActions={contextActions}
                                                    customStyles={customStyles}
                                                    highlightOnHover
                                                    subHeader
                                                    subHeaderComponent={subHeaderComponentMemo}
                                                    striped={true}
                                                    pagination
                                                    paginationServer
                                                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                                                    paginationDefaultPage={page}
                                                    paginationPerPage={perPage}
                                                    paginationTotalRows={totalRows}
                                                    onChangeRowsPerPage={handlePerRowsChange}
                                                    onChangePage={handlePageChange}
                                                    sortServer
                                                    onSort={handleSort}
                                                    persistTableHead
                                                    defaultSortAsc={sortFlag}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default EditorMain;
