import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className="mt-3 mb-5"><NavLink to="/">Go back to home</NavLink></h3>
                <img className="mt-5" src="/assets/media/editor/404.png" alt="404" />
            </div>
        </>
    )
}

export default Error404;
