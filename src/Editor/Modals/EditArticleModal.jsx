import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import MainContext from '../../context/MainContext';
import { publicIpv4 } from 'public-ip';

const EditArticleModal = (props) => {
    const context = useContext(MainContext);
    const [slug, setSlug] = useState('');
    const [select1, setSelect1] = useState([]);
    const [select11, setSelect11] = useState([]);
    const [select2, setSelect2] = useState([]);
    const [select21, setSelect21] = useState([]);

    useEffect(() => {
        setSlug(props.articleDetails.articleSlug);
    }, [props]);

    const onChangeSelect1 = (e) => {
        setSelect11(e);
        let tempData = [];

        for (let i of e) {
            tempData.push(i.value);
        }

        setSelect1(tempData);
    };

    const onChangeSelect2 = (e) => {
        setSelect21(e);
        let tempData = [];

        for (let i of e) {
            tempData.push({
                catName: i.label.props.children,
                catId: i.value
            });
        }

        setSelect2(tempData);
    };

    const onChange = (e) => {
        setSlug(e.target.value);
    };

    const onClick = async () => {
        const userIp = await publicIpv4();
        let ans = await context.updateArticleBySlug(props.articleDetails._id, slug, userIp);
        if (ans.success) {
            setSlug('');
            let index = props.mainData.findIndex(x => x._id === ans.data._id);
            props.mainData[index] = ans.data;
            props.setMainData(props.mainData);
            props.setAlert('success', ans.message);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    const handleDlt = async () => {
        const userIp = await publicIpv4();
        let ans = await context.removeArticleCat(props.articleDetails._id, select1, userIp);
        if (ans.success) {
            setSelect11([]);
            let index = props.mainData.findIndex(x => x._id === ans.data._id);
            props.mainData[index] = ans.data;
            props.setMainData(props.mainData);
            props.setAlert('success', ans.message);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    const handleAdd = async () => {
        const userIp = await publicIpv4();
        let ans = await context.updateArticleCat(props.articleDetails._id, select2, userIp);
        if (ans.success) {
            setSelect21([]);
            let index = props.mainData.findIndex(x => x._id === ans.data._id);
            props.mainData[index] = ans.data;
            props.setMainData(props.mainData);
            props.setAlert('success', ans.message);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    return (
        <>
            <div className="modal fade" tabIndex="-1" id="EditArticleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Edit Article Details</h3>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="mb-5">
                                    <h4 className="mb-4">Update Article Category</h4>
                                    <div>
                                        <div className="mb-4">
                                            <h5 className="mb-2">Delete current categories</h5>
                                            <Select
                                                defaultValue={props.articleCats1[0]}
                                                value={select11}
                                                onChange={onChangeSelect1}
                                                options={props.articleCats1}
                                                isClearable={true}
                                                isSearchable={true}
                                                isMulti
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            <button onClick={handleDlt} data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger px-4 py-2 mt-2">Delete</button>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Add more categories</h5>
                                            <Select
                                                defaultValue={props.filteredCats[0]}
                                                value={select21}
                                                onChange={onChangeSelect2}
                                                options={props.filteredCats}
                                                isClearable={true}
                                                isSearchable={true}
                                                isMulti
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            <button onClick={handleAdd} data-bs-dismiss="modal" aria-label="Close" className="btn btn-success px-4 py-2 mt-2">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-2">Update Article Slug</h4>
                                    <div>
                                        <input type="text" className="form-control mb-2" onChange={onChange} value={slug ? slug : ''} />
                                        <button onClick={onClick} className="btn btn-info py-2 px-4" data-bs-dismiss="modal" aria-label="Close">Set</button>
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

export default EditArticleModal;
