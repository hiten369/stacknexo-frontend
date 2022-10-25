import React from 'react'

const AddCustomTopicModal = (props) => {
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="customTopicModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Add Custom Topic</h3>

                            <div id="addCustomModalClose" className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-1"></span>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p>Useful if there is a specific topic that you want mentioned in the grader.</p>
                            <form onSubmit={props.addCustomTopic}>
                                <div className="mb-10">
                                    <label htmlFor="addTopic" className="required form-label">Topic</label>
                                    <input type="text" name="addTopic" id="addTopic" className="form-control form-control-solid" placeholder="fiddle leaf fig" required />
                                </div>
                                <button className="btn btn-dark">Add Topic</button>
                            </form>
                        </div>
                        <div id="customTopicErr" className="text-danger d-none p-5 pt-0">
                            The topic already exists. It might be a similar spelling for one of the existing topics.
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCustomTopicModal;
