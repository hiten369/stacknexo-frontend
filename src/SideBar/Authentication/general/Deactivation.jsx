import React from 'react'
import { NavLink } from 'react-router-dom';

const Deactivation = () => {
    return (
        <>
            <div className="d-flex flex-column flex-root">
                {/*begin::Authentication - Signup Welcome Message */}
                <div className="d-flex flex-column flex-column-fluid">
                    {/*begin::Content*/}
                    <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
                        {/*begin::Logo*/}
                        <NavLink to="../../demo14/dist/index.html" className="mb-10 pt-lg-10">
                            <img
                                alt="Logo"
                                src="/assets/media/logos/logo-1.svg"
                                className="h-40px mb-5"
                            />
                        </NavLink>
                        {/*end::Logo*/}
                        {/*begin::Wrapper*/}
                        <div className="pt-lg-10 mb-10">
                            {/*begin::Logo*/}
                            <h1 className="fw-bolder fs-2qx text-gray-800 mb-7">
                                Your account is deactivated
                            </h1>
                            {/*end::Logo*/}
                            {/*begin::Message*/}
                            <div className="fw-bold fs-3 text-muted mb-15">
                                Plan your blog post by choosing a topic creating
                                <br />
                                an outline and checking facts.
                            </div>
                            {/*end::Message*/}
                            {/*begin::Action*/}
                            <div className="text-center">
                                <NavLink
                                    to="../../demo14/dist/index.html"
                                    className="btn btn-lg btn-primary fw-bolder"
                                >
                                    Go to homepage
                                </NavLink>
                            </div>
                            {/*end::Action*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Illustration*/}
                        <div
                            className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                            style={{
                                backgroundImage: "url(assets/media/illustrations/sketchy-1/17.png"
                            }}
                        />
                        {/*end::Illustration*/}
                    </div>
                    {/*end::Content*/}
                    {/*begin::Footer*/}
                    <div className="d-flex flex-center flex-column-auto p-10">
                        {/*begin::Links*/}
                        <div className="d-flex align-items-center fw-bold fs-6">
                            <NavLink
                                to="https://keenthemes.com"
                                className="text-muted text-hover-primary px-2"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="mailto:support@keenthemes.com"
                                className="text-muted text-hover-primary px-2"
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="https://1.envato.market/EA4JP"
                                className="text-muted text-hover-primary px-2"
                            >
                                Contact Us
                            </NavLink>
                        </div>
                        {/*end::Links*/}
                    </div>
                    {/*end::Footer*/}
                </div>
                {/*end::Authentication - Signup Welcome Message*/}
            </div>

        </>
    )
}

export default Deactivation
