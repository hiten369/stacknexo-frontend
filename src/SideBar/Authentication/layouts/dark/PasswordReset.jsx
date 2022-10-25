import React from 'react'
import { NavLink } from 'react-router-dom';
import Aside from '../../../../Aside/Aside';
import Navbar from '../../../../Navbar/Navbar';

const PasswordReset = (props) => {
  return (
    <>
      <Navbar setAlert={props.setAlert} encrypt={props.encrypt} />
      <Aside />
      <div className="d-flex flex-column flex-root">
        {/*begin::Authentication - Password reset */}
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
            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              {/*begin::Form*/}
              <form
                className="form w-100"
                noValidate="novalidate"
                id="kt_password_reset_form"
              >
                {/*begin::Heading*/}
                <div className="text-center mb-10">
                  {/*begin::Title*/}
                  <h1 className="text-dark mb-3">Forgot Password ?</h1>
                  {/*end::Title*/}
                  {/*begin::Link*/}
                  <div className="text-gray-400 fw-bold fs-4">
                    Enter your email to reset your password.
                  </div>
                  {/*end::Link*/}
                </div>
                {/*begin::Heading*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-10">
                  <label className="form-label fw-bolder text-gray-900 fs-6">
                    Email
                  </label>
                  <input
                    className="form-control form-control-solid"
                    type="email"
                    placeholder
                    name="email"
                    autoComplete="off"
                  />
                </div>
                {/*end::Input group*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                  <button
                    type="button"
                    id="kt_password_reset_submit"
                    className="btn btn-lg btn-primary fw-bolder me-4"
                  >
                    <span className="indicator-label">Submit</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                  <NavLink
                    to="../../demo14/dist/authentication/layouts/dark/sign-in.html"
                    className="btn btn-lg btn-light-primary fw-bolder"
                  >
                    Cancel
                  </NavLink>
                </div>
                {/*end::Actions*/}
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
        {/*end::Authentication - Password reset*/}
      </div>
    </>
  )
}

export default PasswordReset
