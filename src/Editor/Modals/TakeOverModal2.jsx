import React from 'react';

const TakeOverModal2 = () => {
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="takeOverModal2" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Takeover Alert</h5>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="mb-4">Admin/Editor has take over this article.</p>
                            <div className="row2 mt-5 row4 row6">
                                <button onClick={() => {
                                    window.location.href="/editor2";
                                }} data-bs-dismiss="modal" className="btn me-2 btn-outline btn-outline-info btn-active-light-info">Go back</button>
                                <button onClick={() => {
                                    window.location.reload();
                                }} data-bs-dismiss="modal" className="btn ms-2 btn-info">Request Re-Takeover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeOverModal2;
