import React from 'react'

const ComingSoon = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-root">
                {/*begin::Authentication - Coming Soon*/}
                <div
                    className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed pt-20"
                    style={{
                        backgroundImage: "url(assets/media/illustrations/sketchy-1/14.png"
                    }}
                >
                    {/*begin::Content*/}
                    <div className="d-flex flex-column flex-center p-10 p-lg-20">
                        {/*begin::Coming soon*/}
                        <div className="d-flex flex-column flex-center">
                            {/*begin::Title*/}
                            <h3 className="fw-bolder fs-2qx text-dark m-0 pb-10">Coming Soon</h3>
                            {/*end::Title*/}
                            {/*begin::Counter*/}
                            <div className="d-flex text-center mb-10 mb-lg-15">
                                <div className="w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3">
                                    <div
                                        className="fs-2 fw-bolder text-gray-800"
                                        id="kt_coming_soon_counter_days"
                                    />
                                    <div className="fs-7 fw-bold text-muted">days</div>
                                </div>
                                <div className="w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3">
                                    <div
                                        className="fs-2 fw-bolder text-gray-800"
                                        id="kt_coming_soon_counter_hours"
                                    />
                                    <div className="fs-7 text-muted">hrs</div>
                                </div>
                                <div className="w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3">
                                    <div
                                        className="fs-2 fw-bolder text-gray-800"
                                        id="kt_coming_soon_counter_minutes"
                                    />
                                    <div className="fs-7 text-muted">min</div>
                                </div>
                                <div className="w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3">
                                    <div
                                        className="fs-2 fw-bolder text-gray-800"
                                        id="kt_coming_soon_counter_seconds"
                                    />
                                    <div className="fs-7 text-muted">sec</div>
                                </div>
                            </div>
                            {/*end::Counter*/}
                            {/*begin::Description*/}
                            <div className="fw-bolder fs-2 text-muted mb-5">
                                Get notified when we Launch!
                            </div>
                            {/*end::Description*/}
                            {/*begin::Form*/}
                            <form className="form fv-row" id="kt_coming_soon_form">
                                {/*begin::Input group*/}
                                <div className="d-flex flex-center">
                                    {/*begin::Input*/}
                                    <input
                                        className="form-control form-control-lg form-control-solid w-md-250px m-2"
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        autoComplete="off"
                                    />
                                    {/*end::Input*/}
                                    {/*begin::Action*/}
                                    <button
                                        type="button"
                                        id="kt_coming_soon_submit"
                                        className="btn btn-lg btn-primary fw-bolder m-2 text-nowrap"
                                    >
                                        <span className="indicator-label">Notify me</span>
                                        <span className="indicator-progress">
                                            Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span>
                                    </button>
                                    {/*end::Action*/}
                                </div>
                                {/*end::Input group*/}
                            </form>
                            {/*end::Form*/}
                        </div>
                        {/*end::Coming soon*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/*end::Authentication - Coming Soon*/}
            </div>

        </div>
    )
}

export default ComingSoon
