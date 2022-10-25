import React from 'react'

const DisconnectAlert = (props) => {
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="dis_modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Lost Connection</h3>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p>Your Internet session was interrupted. We’ll try to reconnect you in few seconds.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.reconnect} type="button" className="btn btn-sm btn-secondary">Reconnect Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisconnectAlert;
