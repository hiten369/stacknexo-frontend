import React from 'react'

const Offline1 = () => {
    return (
        <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="page d-flex flex-row flex-column-fluid">
                {/*begin::Wrapper*/}
                <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    {/*begin::Content wrapper*/}
                    <div className="d-flex flex-column-fluid">
                        {/*begin::Container*/}
                        <div className="d-flex flex-column flex-column-fluid container-fluid">
                            <h1>You are offline</h1>
                            <a href="/" className="btn btn-info">Reload</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offline1;