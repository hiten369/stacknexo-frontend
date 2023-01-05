import React, { useContext } from 'react';
import EditorContext from '../../context/EditorContext';

const TakeOverModal1 = () => {
    const editorContext = useContext(EditorContext);
    const { sendMsg, client }=editorContext;
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="takeOverModal1" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Takeover Request</h5>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="mb-4">User wants to take access of this article.</p>
                            <div className="row2 mt-5 row4 row6">
                                <button onClick={() => {
                                    sendMsg({ msgDesc: 'Take over request granted', msgFlag: true, client2: client});
                                    window.location.href="/editor2";
                                }} data-bs-dismiss="modal" className="btn me-2 btn-outline btn-outline-info btn-active-light-info">Grant Access</button>
                                <button onClick={() => {
                                    sendMsg({ msgDesc: 'Take over request denied', msgFlag: false, client2: client });
                                    document.getElementById('takeOverModal1').click();
                                }} data-bs-dismiss="modal" className="btn ms-2 btn-info">Deny Access</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeOverModal1;
