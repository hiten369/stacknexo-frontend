import { publicIpv4 } from 'public-ip';
import React, { useContext, useEffect, useState } from 'react'
import Aside from '../Aside/Aside';
import MainContext from '../context/MainContext';
import Navbar from '../Navbar/Navbar';
import DeleteModal from '../Utils/DeleteModal';
import ArticleCat1 from './ArticleCat1';
import ArticleCat2 from './ArticleCat2';
import ManageCatModal from './Modals/ManageCatMpdal';

var t = [{
    value: 'N',
    label: "None"
}];
var t1 = [];
var t2 = [{
    value: 'N',
    label: "None"
}];
var temp;
var ans;

const ArticleCategories = (props) => {
    const context = useContext(MainContext);
    const [data, setData] = useState([]);
    const [value, setValue] = useState({
        catId: '',
        catName: '',
        catSlug: '',
        catParent: 'N',
        catIndex: 0
    });
    const [flag, setFlag] = useState(true);
    const [data2, setData2] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        getData();
    }, [flag]);

    const getData = async () => {
        ans = await context.getArticleCategories();
        // console.log(ans);
        for (let i of ans.data) {
            if (i.catParent === 'N') {
                t.push({
                    value: i._id,
                    label: <span className="cat-lvl1">{i.catName}</span>
                });

                t1.push({
                    catId: i._id,
                    catName: i.catName,
                    catSlug: i.catSlug && i.catSlug !== '' ? i.catSlug : '-',
                    catParent: i.catParent
                });

                if (i.catChildren.length !== 0) {

                    for (let j of i.catChildren) {
                        t.push({
                            value: j.catChildId,
                            label: <span className="cat-lvl2">{j.catChildName}</span>
                        });

                        t1.push({
                            catId: j.catChildId,
                            catName: ` - ${j.catChildName}`,
                            catSlug: j.catChildSlug && j.catChildSlug !== '' ? j.catChildSlug : '-',
                            catParent: i._id
                        });

                        temp = ans.data[ans.data.findIndex(x => x._id === j.catChildId)];

                        if (temp.catChildren.length !== 0) {

                            for (let k of temp.catChildren) {
                                t.push({
                                    value: k.catChildId,
                                    label: <span className="cat-lvl3">{k.catChildName}</span>
                                });

                                t1.push({
                                    catId: k.catChildId,
                                    catName: ` - - ${k.catChildName}`,
                                    catSlug: k.catChildSlug && k.catChildSlug !== '' ? k.catChildSlug : '-',
                                    catParent: ans.data[ans.data.findIndex(x => x._id === j.catChildId)]._id
                                });

                                temp = ans.data[ans.data.findIndex(x => x._id === k.catChildId)];

                                if (temp.catChildren.length !== 0) {

                                    for (let l of temp.catChildren) {
                                        t.push({
                                            value: l.catChildId,
                                            label: <span className="cat-lvl4">{l.catChildName}</span>
                                        });

                                        t1.push({
                                            catId: l.catChildId,
                                            catName: ` - - - ${l.catChildName}`,
                                            catSlug: l.catChildSlug && l.catChildSlug !== '' ? l.catChildSlug : '-',
                                            catParent: ans.data[ans.data.findIndex(x => x._id === k.catChildId)]._id
                                        });

                                        temp = ans.data[ans.data.findIndex(x => x._id === l.catChildId)];

                                        if (temp.catChildren.length !== 0) {

                                            for (let m of temp.catChildren) {
                                                t.push({
                                                    value: m.catChildId,
                                                    label: <span className="cat-lvl5">{m.catChildName}</span>
                                                });

                                                t1.push({
                                                    catId: m.catChildId,
                                                    catName: ` - - - - ${m.catChildName}`,
                                                    catSlug: m.catChildSlug && m.catChildSlug !== '' ? m.catChildSlug : '-',
                                                    catParent: ans.data[ans.data.findIndex(x => x._id === l.catChildId)]._id
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

        setData2(t1);
        setData(t);
    };

    const addNewCat = async (e) => {
        e.preventDefault();
        const userIp = await publicIpv4();
        let ans = await context.postArticleCategory(value.catName, value.catSlug, value.catParent, userIp);
        if (ans.success) {
            t = [{
                value: 'N',
                label: "None"
            }];

            t1 = [];
            setFlag(!flag);

            setValue({
                catId: '',
                catName: '',
                catSlug: '',
                catParent: 'N'
            });

            props.setAlert('success', ans.message);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    }

    const updateCat = async (e) => {
        e.preventDefault();
        const userIp = await publicIpv4();
        let ans = await context.putArticleCategory(value.catId, value.catName, value.catSlug, value.catParent, userIp);
        // console.log(ans);
        if (ans.success) {
            t = [{
                value: 'N',
                label: "None"
            }];
            t1 = [];
            setFlag(!flag);
            setValue({
                catId: '',
                catName: '',
                catSlug: '',
                catParent: 'N'
            });
            props.setAlert('success', ans.message);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    }

    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    };

    const onChangeSelect = (e) => {
        if (e) {
            setValue({ ...value, "catParent": e.value, "catIndex": data.findIndex(x => x.value === e.value) });
        }
        else {
            setValue({ ...value, "catParent": "N", "catIndex": 0 });
        }
    };

    const setCat = (data1) => {
        t2 = [{
            value: 'N',
            label: "None"
        }];

        for (let i of ans.data) {
            if (i._id !== data1.catId) {
                if (i.catParent === 'N') {
                    t2.push({
                        value: i._id,
                        label: <span className="cat-lvl1">{i.catName}</span>
                    });

                    if (i.catChildren.length !== 0) {
                        for (let j of i.catChildren) {
                            if (j.catChildId !== data1.catId) {
                                t2.push({
                                    value: j.catChildId,
                                    label: <span className="cat-lvl2">{j.catChildName}</span>
                                });
                                temp = ans.data[ans.data.findIndex(x => x._id === j.catChildId)];
                                if (temp.catChildren.length !== 0) {
                                    for (let k of temp.catChildren) {
                                        if (k.catChildId !== data1.catId) {
                                            t2.push({
                                                value: k.catChildId,
                                                label: <span className="cat-lvl3">{k.catChildName}</span>
                                            });
                                            temp = ans.data[ans.data.findIndex(x => x._id === k.catChildId)];
                                            if (temp.catChildren.length !== 0) {
                                                for (let l of temp.catChildren) {
                                                    if (l.catChildId !== data1.catId) {
                                                        t2.push({
                                                            value: l.catChildId,
                                                            label: <span className="cat-lvl4">{l.catChildName}</span>
                                                        });
                                                        temp = ans.data[ans.data.findIndex(x => x._id === l.catChildId)];
                                                        if (temp.catChildren.length !== 0) {
                                                            for (let m of temp.catChildren) {
                                                                if (m.catChildId !== data1.catId) {
                                                                    t2.push({
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
                        }
                    }
                }
            }
        }
        setData(t2);

        setValue({
            catId: data1.catId,
            catName: data1.catName.replace(/-/g, '').trim(),
            catParent: data1.catParent,
            catSlug: data1.catSlug,
            catIndex: t2.findIndex(x => x.value === data1.catParent)
        });
        // console.log(data2.findIndex(x => x.value === data1.catParent));
    };

    const deleteFunc = async (id) => {
        // console.log(id);
        const userIp = await publicIpv4();
        let ans = await context.deleteArticleCategory(id, userIp);
        if (ans.success) {
            t = [{
                value: 'N',
                label: "None"
            }];
            t1 = [];
            setFlag(!flag);
            props.setAlert('success', ans.message);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    return (
        <>
            {/* <HeartBeatHandler setAlert={props.setAlert} encrypt={props.encrypt} /> */}
            <ManageCatModal value={value} onChange={onChange} selectData={data} onChangeSelect={onChangeSelect} updateCat={updateCat} />
            <DeleteModal deleteFunc={deleteFunc} id={id} />
            <Navbar setAlert={props.setAlert} encrypt={props.encrypt} />
            <Aside flag={true} />
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
                                    {props.load ?
                                        <div className="d-flex article-cat-main">
                                            <ArticleCat1 onChangeSelect={onChangeSelect} selectData={t} onChange={onChange} addNewCat={addNewCat} value={value} />
                                            <ArticleCat2 data={data2} setCat={setCat} setId={setId} deleteCat={deleteFunc} />
                                        </div>
                                        : 'loading ...'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleCategories;
