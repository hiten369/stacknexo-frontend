import React from 'react'
import { NavLink } from 'react-router-dom';

const FreeTrialSignUp = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        {/*begin::Authentication - Signup Free Trial*/}
        <div className="d-flex flex-column flex-xl-row flex-column-fluid">
          {/*begin::Aside*/}
          <div className="d-flex flex-column flex-lg-row-fluid">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-row-fluid flex-center p-10">
              {/*begin::Content*/}
              <div className="d-flex flex-column">
                {/*begin::Logo*/}
                <NavLink to="../../demo14/dist/index.html" className="mb-15">
                  <img
                    alt="Logo"
                    src="/assets/media/logos/logo-1.svg"
                    className="h-40px"
                  />
                </NavLink>
                {/*end::Logo*/}
                {/*begin::Title*/}
                <h1 className="text-dark fs-2x mb-3">Welcome, Guest!</h1>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="fw-bold fs-4 text-gray-400 mb-10">
                  Plan your blog post by choosing a topic creating
                  <br />
                  an outline and checking facts
                </div>
                {/*begin::Description*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Wrapper*/}
            {/*begin::Illustration*/}
            <div
              className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-200px min-h-xl-450px mb-xl-10"
              style={{
                backgroundImage: "url(assets/media/illustrations/sketchy-1/8.png"
              }}
            />
            {/*end::Illustration*/}
          </div>
          {/*begin::Aside*/}
          {/*begin::Content*/}
          <div className="flex-row-fluid d-flex flex-center justfiy-content-xl-first p-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-center p-15 shadow bg-body rounded w-100 w-md-550px mx-auto ms-xl-20">
              {/*begin::Form*/}
              <form className="form" noValidate="novalidate" id="kt_free_trial_form">
                {/*begin::Heading*/}
                <div className="text-center mb-10">
                  {/*begin::Title*/}
                  <h1 className="text-dark mb-3">30 Days Free Trial</h1>
                  {/*end::Title*/}
                  {/*begin::Link*/}
                  <div className="text-gray-400 fw-bold fs-4">
                    Have questions ? Check out
                    <NavLink to="#" className="link-primary fw-bolder">
                      FAQ
                    </NavLink>
                    .
                  </div>
                  {/*end::Link*/}
                </div>
                {/*begin::Heading*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-10">
                  <label className="form-label fw-bolder text-dark fs-6">Email</label>
                  <input
                    className="form-control form-control-solid"
                    type="email"
                    placeholder
                    name="email"
                    autoComplete="off"
                  />
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-7 fv-row" data-kt-password-meter="true">
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
                        className="form-control form-control-solid"
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
                {/*begin::Row*/}
                <div className="fv-row mb-10">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Confirm Password
                  </label>
                  <input
                    className="form-control form-control-solid"
                    type="password"
                    placeholder
                    name="confirm-password"
                    autoComplete="off"
                  />
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="fv-row mb-10">
                  <label className="form-check form-check-custom form-check-solid form-check-inline mb-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="toc"
                      defaultValue={1}
                    />
                    <span className="form-check-label fw-bold text-gray-700">
                      I Agree 30 Days Free Use
                      <NavLink to="#" className="link-primary ms-1">
                        Terms &amp; Conditions
                      </NavLink>
                      .
                    </span>
                  </label>
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="text-center pb-lg-0 pb-8">
                  <button
                    type="button"
                    id="kt_free_trial_submit"
                    className="btn btn-lg btn-primary fw-bolder"
                  >
                    <span className="indicator-label">Create an Account</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                </div>
                {/*end::Row*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Right Content*/}
        </div>
        {/*end::Authentication - Signup Free Trial*/}
      </div>

    </div>
  )
}

export default FreeTrialSignUp
