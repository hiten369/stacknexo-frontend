import React from 'react'
import { NavLink } from 'react-router-dom';

const ViewUserModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="kt_modal_view_users"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            {/*begin::Close*/}
                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                <span className="svg-icon svg-icon-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <rect
                                            opacity="0.5"
                                            x={6}
                                            y="17.3137"
                                            width={16}
                                            height={2}
                                            rx={1}
                                            transform="rotate(-45 6 17.3137)"
                                            fill="black"
                                        />
                                        <rect
                                            x="7.41422"
                                            y={6}
                                            width={16}
                                            height={2}
                                            rx={1}
                                            transform="rotate(45 7.41422 6)"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </div>
                            {/*end::Close*/}
                        </div>
                        {/*begin::Modal header*/}
                        {/*begin::Modal body*/}
                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            {/*begin::Heading*/}
                            <div className="text-center mb-13">
                                {/*begin::Title*/}
                                <h1 className="mb-3">Browse Users</h1>
                                {/*end::Title*/}
                                {/*begin::Description*/}
                                <div className="text-muted fw-bold fs-5">
                                    If you need more info, please check out our
                                    <NavLink to="#" className="link-primary fw-bolder">
                                        Users Directory
                                    </NavLink>
                                    .
                                </div>
                                {/*end::Description*/}
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Users*/}
                            <div className="mb-15">
                                {/*begin::List*/}
                                <div className="mh-375px scroll-y me-n7 pe-7">
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-1.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Emma Smith
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Art Director
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">e.smith@kpmg.com.au</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$23,000</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                    M
                                                </span>
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Melody Macy
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Marketing Analytic
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">melody@altbox.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$50,500</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Max Smith
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Software Enginer
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">max@kt.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$75,900</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Sean Bean
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Web Developer
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">sean@dellito.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$10,500</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Brian Cox
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        UI/UX Designer
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">brian@exchange.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$20,000</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                    C
                                                </span>
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Mikaela Collins
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Head Of Marketing
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">mikaela@pexcom.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$9,300</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-8.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Francis Mitcham
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Software Arcitect
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">
                                                    f.mitcham@kpmg.com.au
                                                </div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$15,000</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                    O
                                                </span>
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Olivia Wild
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        System Admin
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">olivia@corpmail.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$23,000</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-primary text-primary fw-bold">
                                                    N
                                                </span>
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Neil Owen
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Account Manager
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">owen.neil@gmail.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$45,800</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-6.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Dan Wilson
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Web Desinger
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">dam@consilting.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$90,500</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                    E
                                                </span>
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Emma Bold
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Corporate Finance
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">emma@intenso.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$5,000</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Ana Crown
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Customer Relationship
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$70,000</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                    {/*begin::User*/}
                                    <div className="d-flex flex-stack py-5">
                                        {/*begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-info text-info fw-bold">
                                                    A
                                                </span>
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-6">
                                                {/*begin::Name*/}
                                                <NavLink
                                                    to="#"
                                                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                >
                                                    Robert Doe
                                                    <span className="badge badge-light fs-8 fw-bold ms-2">
                                                        Marketing Executive
                                                    </span>
                                                </NavLink>
                                                {/*end::Name*/}
                                                {/*begin::Email*/}
                                                <div className="fw-bold text-muted">robert@benko.com</div>
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Stats*/}
                                        <div className="d-flex">
                                            {/*begin::Sales*/}
                                            <div className="text-end">
                                                <div className="fs-5 fw-bolder text-dark">$45,500</div>
                                                <div className="fs-7 text-muted">Sales</div>
                                            </div>
                                            {/*end::Sales*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::User*/}
                                </div>
                                {/*end::List*/}
                            </div>
                            {/*end::Users*/}
                            {/*begin::Notice*/}
                            <div className="d-flex justify-content-between">
                                {/*begin::Label*/}
                                <div className="fw-bold">
                                    <label className="fs-6">Adding Users by Team Members</label>
                                    <div className="fs-7 text-muted">
                                        If you need more info, please check budget planning
                                    </div>
                                </div>
                                {/*end::Label*/}
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked="checked"
                                    />
                                    <span className="form-check-label fw-bold text-muted">Allowed</span>
                                </label>
                                {/*end::Switch*/}
                            </div>
                            {/*end::Notice*/}
                        </div>
                        {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </>
    )
}

export default ViewUserModal;