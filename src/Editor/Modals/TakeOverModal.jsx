import React from 'react'

const TakeOverModal = (props) => {
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="takeOverModal" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">The article is already being edited</h5>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="mb-2">User is currently working on this article, which means you cannot make changes, unless you take over.</p>
                            <b className="mb-4">{props.takeOverMsg}</b>
                            <div className="row2 mt-5 row4 row6">
                                <button onClick={() => {
                                    window.location.href = "/editor2";
                                }} data-bs-dismiss="modal" href="/editor2" className="btn btn-outline btn-outline-info btn-active-light-info">Exit the editor</button>
                                <button data-bs-dismiss="modal" onClick={() => { props.func1(true, props.editorContext) }} className="btn mx-3 btn-active-info">Preview</button>
                                <button onClick={(e) => {
                                    props.takeOver(e, props.takeOverFlag);
                                }} className="btn btn-info">Take Over</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeOverModal;
