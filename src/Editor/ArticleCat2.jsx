import React from 'react'
import useScript from '../CustomScripts/UseScript';

const ArticleCat2 = (props) => {
    useScript('/moreJs/j5.js');

    return (
        <>
            <div className="article-cat2 card card-p-0 card-flush">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                    <div style={{ width: '100%' }} className="card-title px-3 row2 row4 row5">
                        <h3>Categories</h3>
                        <div className="d-flex align-items-center position-relative my-1 ms-2">
                            <span className="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <input type="text" data-kt-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search ..." />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table id="articleCatDatatable" className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                        <thead>
                            <tr className="fw-bold fs-6 text-muted">
                                <th>Title</th>
                                <th>Slug</th>
                                <th className="article-cat-qo">Quick Operations</th>
                            </tr>
                        </thead>
                        {/* Change logic */}
                        <tbody>
                            {props.data.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{e.catName}</td>
                                        <td>{e.catSlug}</td>
                                        <td className="article-cat-qo">
                                            <div className="row2">
                                                <span data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Edit Category">
                                                    <img data-bs-toggle="modal" data-bs-target="#manageCatModal" onClick={() => {
                                                        props.setCat(e);
                                                    }} className="me-2 cursor-pointer" src="/assets/media/editor/edit.svg" alt="edit" />
                                                </span>
                                                <img onClick={() => {
                                                    // props.deleteCat(e.catId);
                                                    props.setId(e.catId);
                                                }} data-bs-toggle="modal" data-bs-target="#dltModal" width="21px" className="cursor-pointer" src="/assets/media/editor/delete.svg" alt="delete" />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ArticleCat2;
