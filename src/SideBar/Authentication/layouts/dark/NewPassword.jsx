import React from 'react'
import { NavLink } from 'react-router-dom';

const NewPassword = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-root">
                {/*begin::Authentication - New password */}
                <div
                    className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
                    style={{
                        backgroundImage: "url(assets/media/illustrations/sketchy-1/14-dark.png"
                    }}
                >
                    {/*begin::Content*/}
                    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                        {/*begin::Logo*/}
                        <NavLink to="../../demo14/dist/index.html" className="mb-12">
                            <img
                                alt="Logo"
                                src="/assets/media/logos/logo-2.svg"
                                className="h-40px"
                            />
                        </NavLink>
                        {/*end::Logo*/}
                        {/*begin::Wrapper*/}
                        <div className="w-lg-550px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                            {/*begin::Form*/}
                            <form
                                className="form w-100"
                                noValidate="novalidate"
                                id="kt_new_password_form"
                            >
                                {/*begin::Heading*/}
                                <div className="text-center mb-10">
                                    {/*begin::Title*/}
                                    <h1 className="text-dark mb-3">Setup New Password</h1>
                                    {/*end::Title*/}
                                    {/*begin::Link*/}
                                    <div className="text-gray-400 fw-bold fs-4">
                                        Already have reset your password ?
                                        <NavLink
                                            to="../../demo14/dist/authentication/layouts/dark/sign-in.html"
                                            className="link-primary fw-bolder"
                                        >
                                            Sign in here
                                        </NavLink>
                                    </div>
                                    {/*end::Link*/}
                                </div>
                                {/*begin::Heading*/}
                                {/*begin::Input group*/}
                                <div className="mb-10 fv-row" data-kt-password-meter="true">
                                    {/*begin::Wrapper*/}
                                    <div className="mb-1">
                                        {/*begin::Label*/}
                                        <label className="form-label fw-bolder text-dark fs-6">
                                            Password
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input wrapper*/}
                                        <div className="position-relative mb-3">
                                            <input
                                                className="form-control form-control-lg form-control-solid"
                                                type="password"
                                                placeholder
                                                name="password"
                                                autoComplete="off"
                                            />
                                            <span
                                                className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                                data-kt-password-meter-control="visibility"
                                            >
                                                <i className="bi bi-eye-slash fs-2" />
                                                <i className="bi bi-eye fs-2 d-none" />
                                            </span>
                                        </div>
                                        {/*end::Input wrapper*/}
                                        {/*begin::Meter*/}
                                        <div
                                            className="d-flex align-items-center mb-3"
                                            data-kt-password-meter-control="highlight"
                                        >
                                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px" />
                                        </div>
                                        {/*end::Meter*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                    {/*begin::Hint*/}
                                    <div className="text-muted">
                                        Use 8 or more characters with a mix of letters, numbers &amp;
                                        symbols.
                                    </div>
                                    {/*end::Hint*/}
                                </div>
                                {/*end::Input group=*/}
                                {/*begin::Input group=*/}
                                <div className="fv-row mb-10">
                                    <label className="form-label fw-bolder text-dark fs-6">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="form-control form-control-lg form-control-solid"
                                        type="password"
                                        placeholder
                                        name="confirm-password"
                                        autoComplete="off"
                                    />
                                </div>
                                {/*end::Input group=*/}
                                {/*begin::Input group=*/}
                                <div className="fv-row mb-10">
                                    <div className="form-check form-check-custom form-check-solid form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="toc"
                                            defaultValue={1}
                                        />
                                        <label className="form-check-label fw-bold text-gray-700 fs-6">
                                            I Agree &amp;
                                            <NavLink to="#" className="ms-1 link-primary">
                                                Terms and conditions
                                            </NavLink>
                                            .
                                        </label>
                                    </div>
                                </div>
                                {/*end::Input group=*/}
                                {/*begin::Action*/}
                                <div className="text-center">
                                    <button
                                        type="button"
                                        id="kt_new_password_submit"
                                        className="btn btn-lg btn-primary fw-bolder"
                                    >
                                        <span className="indicator-label">Submit</span>
                                        <span className="indicator-progress">
                                            Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span>
                                    </button>
                                </div>
                                {/*end::Action*/}
                            </form>
                            {/*end::Form*/}
                        </div>
                        {/*end::Wrapper*/}
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
                {/*end::Authentication - New password*/}
            </div>

        </div>
    )
}

export default NewPassword
