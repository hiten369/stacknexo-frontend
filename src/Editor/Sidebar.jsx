import React, { useContext, useEffect, useState } from 'react'
import EditorHomeAlert from '../Alert/EditorHomeAlert';
import MainContext from '../context/MainContext';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import ReactTooltip from 'react-tooltip';
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

var mainData1 = [];
var AlertFlag = false;

const DrawerChat = (props) => {
    const context = useContext(MainContext);
    var [mainData, setMainData] = useState([]);
    const [previousArticle, setPreviousArticle] = useState({
        element: {},
        index: 0,
        id: ''
    });
    const [AlertMsg, setAlertMsg] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggledClearRows, setToggleClearRows] = useState(false);
    const [filterText, setFilterText] = useState('');
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
    const [loadFlag, setLoadFlag] = useState(false);

    // Fetching all articles
    useEffect(() => {
        getData();
    }, [mainFlag]);

    const getData=async()=>{
        let userIp=await publicIpv4();
        let data3 = await context.fetchUserArticles(page, perPage, sortValues.key, sortValues.order, query, '', 'all', 'all', JSON.parse(localStorage.getItem('stackNUser')).designationName, userIp);
        setTotalRows(data3.total);
        mainData1 = data3.data;
        setMainData(data3.data);
    };

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
                selector: row => <p>{row.articleCategory.length !== 0 ? row.articleCategory.map((e) => {
                    return `${e.catName}`;
                }).toString() : ' - '}</p>,
                sortable: true,
                sortField: 'articleCategory',
                center: true,
                wrap: true,
                grow: 0.7
            },
            {
                id: 'articleUpdateDate',
                name: 'Last Modified',
                selector: row => <><p>{`${new Date(Number(row.articleUpdateDate.date)).toLocaleDateString()} at ${tConvert(new Date(Number(row.articleUpdateDate.date)).toLocaleTimeString())}`}</p> by <NavLink className="text-dark" to={`/users/${row.articleUpdateDate.user.id}`}><b>{row.articleUpdateDate.user.name}</b></NavLink></>,
                sortable: true,
                sortField: 'articleUpdateDate',
                wrap: true,
                center: true
            },
            {
                id: 'title',
                name: 'Options',
                selector: (row, index) => <div><ReactTooltip place="bottom" effect="solid" className="px-2 py-2" /><img onClick={() => {
                    deleteArticle(index, row);
                }} data-tip="Delete" className="cursor-pointer" src="/assets/media/editor/delete.svg" alt="Delete" /></div>,
                center: true,
                wrap: true,
                grow: 0.4
            }
        ]
        , []);

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
    function setAlert(flag, message) {
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
            {/* Side Bar Logo */}
            <div className='menu1' id="kt_drawer_chat_toggle1">
                <img src="/assets/media/editor/menu.svg" alt="menu" />
            </div>
            {AlertFlag ? <EditorHomeAlert msg={AlertMsg} undoArticle={undoArticle} closeAlert={closeAlert} /> : null}
            <div id="kt_drawer_chat" className='bg-body' data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '1000px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle1" data-kt-drawer-close="#kt_drawer_chat_close">
                {/*begin::Messenger*/}
                <div className="card edit-box w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
                    {/*begin::Card header*/}
                    <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
                        {/*begin::Title*/}

                        {/*end::Title*/}
                        {/*begin::Card toolbar*/}
                        <div className="card-toolbar edit-menu-hov px-4" id="kt_drawer_chat_close">
                            <div className="card-title">
                                Close
                            </div>
                            {/*begin::Close*/}
                            <div className="btn btn-sm btn-icon">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </div>
                            {/*end::Close*/}
                        </div>
                        {/*end::Card toolbar*/}
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body" id="kt_drawer_chat_messenger_body">
                        <a href="/editor2" className="row2 edit-bor py-4 px-4 edit-menu-hov">
                            <i className="icon_f1r6abcu me-4" data-disabled="false" data-hovered="false" data-active="false" data-role="icon" aria-hidden="true"><svg width="18" viewBox="0 0 18 19" className="holder_f19n375c"><path d="M1 7.97V18.5a.5.5 0 1 1-1 0V7.74a.5.5 0 0 1 .18-.38L8.68.12a.5.5 0 0 1 .64 0l8.5 7.24c.12.1.18.23.18.38V18.5a.5.5 0 1 1-1 0V7.97L9 1.16l-8 6.8zM7 18.5a.5.5 0 1 1-1 0V13a3 3 0 0 1 6 0v5.5a.5.5 0 1 1-1 0V13a2 2 0 1 0-4 0v5.5z" stroke="none"></path></svg></i>
                            <p className="edit-a">Home</p>
                        </a>
                        <div className="edit-bor">
                            <h4 className="mt-4 mx-4">Document</h4>
                            <div onClick={newDoc} className="row2 py-3 px-4 edit-menu-hov">
                                <i className="icon_f1r6abcu me-4" data-disabled="false" data-hovered="false" data-active="false" data-role="icon" aria-hidden="true"><svg width="21" viewBox="0 0 21 21" className="holder_f19n375c"><path d="M11 10h4c.14 0 .26.05.36.14.1.1.14.21.14.36s-.05.27-.14.36c-.1.1-.22.14-.36.14h-4v4c0 .15-.05.27-.14.36-.1.1-.21.15-.36.15a.49.49 0 0 1-.36-.15.49.49 0 0 1-.14-.35V11H6a.49.49 0 0 1-.36-.14.49.49 0 0 1-.14-.36c0-.15.05-.27.14-.36.1-.1.21-.14.36-.14h4V6c0-.15.05-.27.14-.36.1-.1.21-.14.36-.14s.27.04.36.14c.1.1.14.21.14.36v4zm-.5 11c-1.45 0-2.8-.28-4.08-.83a10.66 10.66 0 0 1-5.6-5.59A10.16 10.16 0 0 1 0 10.5c0-1.45.28-2.8.83-4.08A10.66 10.66 0 0 1 6.42.82C7.69.29 9.05 0 10.5 0c1.45 0 2.8.28 4.08.83a10.66 10.66 0 0 1 5.6 5.59c.54 1.27.82 2.63.82 4.08 0 1.45-.28 2.8-.83 4.08a10.66 10.66 0 0 1-5.59 5.6c-1.27.54-2.63.82-4.08.82zm0-1a9.35 9.35 0 0 0 6.72-2.78A9.35 9.35 0 0 0 20 10.5a9.35 9.35 0 0 0-2.78-6.72A9.35 9.35 0 0 0 10.5 1a9.35 9.35 0 0 0-6.72 2.78A9.35 9.35 0 0 0 1 10.5a9.35 9.35 0 0 0 2.78 6.72A9.35 9.35 0 0 0 10.5 20z" stroke="none"></path></svg></i>
                                <p>New Document</p>
                            </div>

                            <div className="row2 py-3 px-4 edit-menu-hov">
                                <i className="icon_f1r6abcu toolbarIcon_fdu8orr me-4" data-disabled="false" data-hovered="false" data-active="false" data-role="icon" aria-hidden="true"><svg width="20" viewBox="0 0 20 19" className="holder_f19n375c"><path strokeWidth="1" d="M10 .4886514v12.02026821M5 8.06180972l4.99384055 4.98770004 5.00615945-5M1 14.0773926v1.9329052c0 1.1045695.8954305 2 2 2h14c1.1045695 0 2-.8954305 2-2V14.006229"></path></svg></i>
                                <p>Download</p>
                            </div>
                            <div className="row2 py-3 px-4 edit-menu-hov">
                                <i className="icon_f1r6abcu me-4" data-disabled="false" data-hovered="false" data-active="false" data-role="icon" aria-hidden="true"><svg width="20" viewBox="0 0 20 19" className="holder_f19n375c"><path d="M4 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V5h3.5c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H16v3.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V15H.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5H4V.5zM5 5h10V1H5v4zm-1 9V9.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V14h3V6H1v8h3zm11-4H5v8h10v-8zm-8.5 2.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5z" stroke="none"></path></svg></i>
                                <p>Print</p>
                            </div>
                            <div className="row2 py-3 px-4 edit-menu-hov" data-bs-toggle="modal" data-bs-target="#dictModal">
                                <img style={{ 'width': "22px" }} className="me-3" src="/assets/media/editor/dictionary.png" alt="Dictionary" />
                                <p>Dictionary</p>
                            </div>
                        </div>
                        <div className="edit-bor">
                            <h4 className="mt-4 mx-4">Document List</h4>
                            <div>
                                <DataTable
                                    // expandableRows
                                    // progressPending={!props.load}
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
                                    paginationDefaultPage={page}
                                    paginationPerPage={perPage}
                                    paginationTotalRows={totalRows}
                                    onChangeRowsPerPage={handlePerRowsChange}
                                    onChangePage={handlePageChange}
                                    sortServer
                                    onSort={handleSort}
                                    persistTableHead
                                    // defaultSortFieldId={sortValues.key}
                                    defaultSortAsc={sortFlag}
                                />
                            </div>
                        </div>
                    </div>
                    {/*end::Card body*/}
                    {/*begin::Card footer*/}

                    {/*end::Card footer*/}
                </div>
                {/*end::Messenger*/}
            </div>
        </>
    )
}

export default DrawerChat;
