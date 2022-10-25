import React from 'react';
import Select from 'react-select';

const ArticleCat1 = (props) => {
    return (
        <>
            <div className="article-cat1">
                <h3>Create new category</h3>
                <form onSubmit={props.addNewCat}>
                    <div className="mb-3">
                        <label htmlFor="catName" className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="catName" aria-describedby="cat name" name="catName" onChange={props.onChange} value={props.value.catName} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="catSlug" className="form-label">Category Slug</label>
                        <input type="text" className="form-control" id="catSlug" aria-describedby="cat slug" name="catSlug" onChange={props.onChange} value={props.value.catSlug ? props.value.catSlug : ''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="catParent" className="form-label">Choose Parent Category</label>
                        <Select
                            defaultValue={props.selectData[0]}
                            onChange={props.onChangeSelect}
                            options={props.selectData}
                            isClearable={true}
                            isSearchable={false}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ArticleCat1;