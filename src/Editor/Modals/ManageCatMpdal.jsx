import React from 'react'
import Select from 'react-select';

const ManageCatModal = (props) => {

    return (
        <>
            <div className="modal fade" tabIndex="-1" id="manageCatModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Category</h4>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={props.updateCat}>
                                <div className="mb-3">
                                    <label htmlFor="catName" className="form-label">Category Name</label>
                                    <input type="text" className="form-control" id="catName" aria-describedby="cat name" name="catName" onChange={props.onChange} value={props.value.catName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="catSlug" className="form-label">Category Slug</label>
                                    <input type="text" className="form-control" id="catSlug" aria-describedby="cat slug" name="catSlug" onChange={props.onChange} value={props.value.catSlug ? props.value.catSlug : ''} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="catParent" className="form-label">Choose Parent Category</label>
                                    {/* {console.log(props.value.catIndex)} */}
                                    <Select
                                        defaultValue={props.selectData[props.value.catIndex]}
                                        value={props.selectData[props.value.catIndex]}
                                        onChange={props.onChangeSelect}
                                        options={props.selectData}
                                        isClearable={true}
                                        isSearchable={false}
                                    />

                                </div>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageCatModal;