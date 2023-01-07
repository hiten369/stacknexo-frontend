import React, { useContext, useEffect, useState } from 'react'

const SetFeaturedModal = () => {

    return (
        <>
            <div className="modal fade" tabIndex="-1" id="setFeaturedModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Set Featured Image</h4>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetFeaturedModal;