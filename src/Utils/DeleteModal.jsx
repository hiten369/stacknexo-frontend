import React from 'react';
import './style.css';

const DeleteModal = (props) => {
    return (
        <>
            <div id="dltModal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <div className="icon-box">
                                <img src="/assets/media/utils/red_cross.png" alt="cross" />
                            </div>
                            <h4 className="modal-title w-100">Are you sure?</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Do you really want to delete these records? This process cannot be undone.</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" onClick={() => {
                                if (props.id) {
                                    props.deleteFunc(props.id);
                                }
                                else {
                                    props.deleteFunc();
                                }
                            }} className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal;
