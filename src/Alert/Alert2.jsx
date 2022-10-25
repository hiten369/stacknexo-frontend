import React from 'react'

const Alert2 = (props) => {
    return (
        <>
            <div className="alert2">
                <div className="alert21">
                    <img src="/assets/media/editor/green.png" alt="green_tick" />
                </div>
                <div className="alert21 alert22">
                    <p style={{color:"white"}}>{props.message}</p>
                </div>
                <div onClick={props.alertUndo} className="alert21">
                    <button className="btn btn-sm btn-secondary">UNDO</button>
                </div>
                <div onClick={props.closeAlert} className="alert21">
                    <img style={{width:'20px',cursor:'pointer'}} src="/assets/media/editor/close.svg" alt="close" />
                </div>
            </div>
        </>
    )
}

export default Alert2
