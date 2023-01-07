import React from 'react'

const Alert = (props) => {
    return (
        <>
            <div style={{ zIndex: "3000" }} className={`alert alert-${props.color}`}>
                <span className="svg-icon svg-icon-2hx svg-icon-primary me-3">...</span>
                <div className="d-flex flex-column">
                    <h4 className="mb-1 text-dark">Alert ! </h4>
                    <span>{props.message}</span>
                </div>
            </div>
        </>
    )
}

export default Alert
