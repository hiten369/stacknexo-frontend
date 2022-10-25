import React from 'react'
import { NavLink } from 'react-router-dom';

const Private = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="page d-flex flex-row flex-column-fluid">
                    {/*begin::Wrapper*/}
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        {/*begin::Content wrapper*/}
                        <div className="d-flex flex-column-fluid">
                            {/*begin::Container*/}
                            <div className="d-flex flex-column flex-column-fluid container-fluid">
                                {/*begin::Toolbar*/}
                                <div className="toolbar mb-5 mb-lg-7" id="kt_toolbar">
                                    {/*begin::Page title*/}
                                    <div className="page-title d-flex flex-column me-3">
                                        {/*begin::Title*/}
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">
                                            Private Chat
                                        </h1>
                                        {/*end::Title*/}
                                        {/*begin::Breadcrumb*/}
                                        <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">
                                                <NavLink
                                                    to="../../demo14/dist/index.html"
                                                    className="text-gray-600 text-hover-primary"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Chat</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Private Chat</li>
                                            {/*end::Item*/}
                                        </ul>
                                        {/*end::Breadcrumb*/}
                                    </div>
                                    {/*end::Page title*/}
                                    {/*begin::Actions*/}
                                    <div className="d-flex align-items-center py-2 py-md-1">
                                        {/*begin::Wrapper*/}
                                        <div className="me-3">
                                            {/*begin::Menu*/}
                                            <NavLink
                                                to="#"
                                                className="btn btn-light fw-bolder"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                                <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}Filter
                                            </NavLink>
                                            {/*begin::Menu 1*/}
                                            <div
                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                data-kt-menu="true"
                                                id="kt_menu_61b9c7c6265ec"
                                            >
                                                {/*begin::Header*/}
                                                <div className="px-7 py-5">
                                                    <div className="fs-5 text-dark fw-bolder">
                                                        Filter Options
                                                    </div>
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator border-gray-200" />
                                                {/*end::Menu separator*/}
                                                {/*begin::Form*/}
                                                <div className="px-7 py-5">
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Status:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <div>
                                                            <select
                                                                className="form-select form-select-solid"
                                                                data-kt-select2="true"
                                                                data-placeholder="Select option"
                                                                data-dropdown-parent="#kt_menu_61b9c7c6265ec"
                                                                data-allow-clear="true"
                                                            >
                                                                <option />
                                                                <option value={1}>Approved</option>
                                                                <option value={2}>Pending</option>
                                                                <option value={2}>In Process</option>
                                                                <option value={2}>Rejected</option>
                                                            </select>
                                                        </div>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Member Type:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Options*/}
                                                        <div className="d-flex">
                                                            {/*begin::Options*/}
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                                <span className="form-check-label">Author</span>
                                                            </label>
                                                            {/*end::Options*/}
                                                            {/*begin::Options*/}
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={2}
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="form-check-label">Customer</span>
                                                            </label>
                                                            {/*end::Options*/}
                                                        </div>
                                                        {/*end::Options*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">
                                                            Notifications:
                                                        </label>
                                                        {/*end::Label*/}
                                                        {/*begin::Switch*/}
                                                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                                name="notifications"
                                                                defaultChecked="checked"
                                                            />
                                                            <label className="form-check-label">Enabled</label>
                                                        </div>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex justify-content-end">
                                                        <button
                                                            type="reset"
                                                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                            data-kt-menu-dismiss="true"
                                                        >
                                                            Reset
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-sm btn-primary"
                                                            data-kt-menu-dismiss="true"
                                                        >
                                                            Apply
                                                        </button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end::Menu 1*/}
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                        {/*begin::Button*/}
                                        <NavLink
                                            to="#"
                                            className="btn btn-dark fw-bolder"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_create_app"
                                            id="kt_toolbar_primary_button"
                                        >
                                            Create
                                        </NavLink>
                                        {/*end::Button*/}
                                    </div>
                                    {/*end::Actions*/}
                                </div>
                                {/*end::Toolbar*/}
                                {/*begin::Post*/}
                                <div className="content flex-column-fluid" id="kt_content">
                                    {/*begin::Layout*/}
                                    <div className="d-flex flex-column flex-lg-row">
                                        {/*begin::Sidebar*/}
                                        <div className="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                                            {/*begin::Contacts*/}
                                            <div className="card card-flush">
                                                {/*begin::Card header*/}
                                                <div
                                                    className="card-header pt-7"
                                                    id="kt_chat_contacts_header"
                                                >
                                                    {/*begin::Form*/}
                                                    <form
                                                        className="w-100 position-relative"
                                                        autoComplete="off"
                                                    >
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.5"
                                                                    x="17.0365"
                                                                    y="15.1223"
                                                                    width="8.15546"
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 17.0365 15.1223)"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                        {/*end::Icon*/}
                                                        {/*begin::Input*/}
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid px-15"
                                                            name="search"
                                                            defaultValue
                                                            placeholder="Search by username or email..."
                                                        />
                                                        {/*end::Input*/}
                                                    </form>
                                                    {/*end::Form*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-5" id="kt_chat_contacts_body">
                                                    {/*begin::List*/}
                                                    <div
                                                        className="scroll-y me-n5 pe-5 h-200px h-lg-auto"
                                                        data-kt-scroll="true"
                                                        data-kt-scroll-activate="{default: false, lg: true}"
                                                        data-kt-scroll-max-height="auto"
                                                        data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
                                                        data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
                                                        data-kt-scroll-offset="5px"
                                                    >
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                                                                        M
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Melody Macy
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        melody@altbox.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">1 day</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-26.jpg"
                                                                    />
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Max Smith
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">max@kt.com</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">3 hrs</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-4.jpg"
                                                                    />
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Sean Bean
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        sean@dellito.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">2 weeks</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-15.jpg"
                                                                    />
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Brian Cox
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        brian@exchange.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">5 hrs</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                                                                        C
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Mikaela Collins
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        mikaela@pexcom.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">2 weeks</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-8.jpg"
                                                                    />
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Francis Mitcham
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        f.mitcham@kpmg.com.au
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">1 day</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                                                                        O
                                                                    </span>
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Olivia Wild
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        olivia@corpmail.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">5 hrs</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <span className="symbol-label bg-light-primary text-primary fs-6 fw-bolder">
                                                                        N
                                                                    </span>
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Neil Owen
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        owen.neil@gmail.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">1 day</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-6.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Dan Wilson
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        dam@consilting.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">20 hrs</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed d-none" />
                                                        {/*end::Separator*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-45px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                                                                        E
                                                                    </span>
                                                                    <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Emma Bold
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        emma@intenso.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Lat seen*/}
                                                            <div className="d-flex flex-column align-items-end ms-2">
                                                                <span className="text-muted fs-7 mb-1">1 day</span>
                                                            </div>
                                                            {/*end::Lat seen*/}
                                                        </div>
                                                        {/*end::User*/}
                                                    </div>
                                                    {/*end::List*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Contacts*/}
                                        </div>
                                        {/*end::Sidebar*/}
                                        {/*begin::Content*/}
                                        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                                            {/*begin::Messenger*/}
                                            <div className="card" id="kt_chat_messenger">
                                                {/*begin::Card header*/}
                                                <div className="card-header" id="kt_chat_messenger_header">
                                                    {/*begin::Title*/}
                                                    <div className="card-title">
                                                        {/*begin::User*/}
                                                        <div className="d-flex justify-content-center flex-column me-3">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                                                            >
                                                                Brian Cox
                                                            </NavLink>
                                                            {/*begin::Info*/}
                                                            <div className="mb-0 lh-1">
                                                                <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                                                                <span className="fs-7 fw-bold text-muted">
                                                                    Active
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                    </div>
                                                    {/*end::Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::Menu*/}
                                                        <div className="me-n3">
                                                            <button
                                                                className="btn btn-sm btn-icon btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                <i className="bi bi-three-dots fs-2" />
                                                            </button>
                                                            {/*begin::Menu 3*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Heading*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                                                        Contacts
                                                                    </div>
                                                                </div>
                                                                {/*end::Heading*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_users_search"
                                                                    >
                                                                        Add Contact
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link flex-stack px-3"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_invite_friends"
                                                                    >
                                                                        Invite Contacts
                                                                        <i
                                                                            className="fas fa-exclamation-circle ms-2 fs-7"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Specify a contact email to send an invitation"
                                                                        />
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div
                                                                    className="menu-item px-3"
                                                                    data-kt-menu-trigger="hover"
                                                                    data-kt-menu-placement="right-start"
                                                                >
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        <span className="menu-title">Groups</span>
                                                                        <span className="menu-arrow" />
                                                                    </NavLink>
                                                                    {/*begin::Menu sub*/}
                                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="menu-link px-3"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Coming soon"
                                                                            >
                                                                                Create Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="menu-link px-3"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Coming soon"
                                                                            >
                                                                                Invite Members
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="menu-link px-3"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Coming soon"
                                                                            >
                                                                                Settings
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                    </div>
                                                                    {/*end::Menu sub*/}
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3 my-1">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Coming soon"
                                                                    >
                                                                        Settings
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu 3*/}
                                                        </div>
                                                        {/*end::Menu*/}
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body" id="kt_chat_messenger_body">
                                                    {/*begin::Messages*/}
                                                    <div
                                                        className="scroll-y me-n5 pe-5 h-300px h-lg-auto"
                                                        data-kt-element="messages"
                                                        data-kt-scroll="true"
                                                        data-kt-scroll-activate="{default: false, lg: true}"
                                                        data-kt-scroll-max-height="auto"
                                                        data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
                                                        data-kt-scroll-wrappers="#kt_content, #kt_chat_messenger_body"
                                                        data-kt-scroll-offset="5px"
                                                    >
                                                        {/*begin::Message(in)*/}
                                                        <div className="d-flex justify-content-start mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-start">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Details*/}
                                                                    <div className="ms-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            2 mins
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    How likely are you to recommend our company to your
                                                                    friends and family ?
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(in)*/}
                                                        {/*begin::Message(out)*/}
                                                        <div className="d-flex justify-content-end mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-end">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Details*/}
                                                                    <div className="me-3">
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            5 mins
                                                                        </span>
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                                                                        >
                                                                            You
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    Hey there, we’re just writing to let you know that
                                                                    you’ve been subscribed to a repository on GitHub.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(out)*/}
                                                        {/*begin::Message(in)*/}
                                                        <div className="d-flex justify-content-start mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-start">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Details*/}
                                                                    <div className="ms-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            1 Hour
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    Ok, Understood!
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(in)*/}
                                                        {/*begin::Message(out)*/}
                                                        <div className="d-flex justify-content-end mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-end">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Details*/}
                                                                    <div className="me-3">
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            2 Hours
                                                                        </span>
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                                                                        >
                                                                            You
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    You’ll receive notifications for all issues, pull
                                                                    requests!
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(out)*/}
                                                        {/*begin::Message(in)*/}
                                                        <div className="d-flex justify-content-start mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-start">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Details*/}
                                                                    <div className="ms-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            3 Hours
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    You can unwatch this repository immediately by
                                                                    clicking here:
                                                                    <NavLink to="https://keenthemes.com">Keenthemes.com</NavLink>
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(in)*/}
                                                        {/*begin::Message(out)*/}
                                                        <div className="d-flex justify-content-end mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-end">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Details*/}
                                                                    <div className="me-3">
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            4 Hours
                                                                        </span>
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                                                                        >
                                                                            You
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    Most purchased Business courses during this sale!
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(out)*/}
                                                        {/*begin::Message(in)*/}
                                                        <div className="d-flex justify-content-start mb-10">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-start">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Details*/}
                                                                    <div className="ms-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            5 Hours
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    Company BBQ to celebrate the last quater
                                                                    achievements and goals. Food and drinks provided
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(in)*/}
                                                        {/*begin::Message(template for out)*/}
                                                        <div
                                                            className="d-flex justify-content-end mb-10 d-none"
                                                            data-kt-element="template-out"
                                                        >
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-end">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Details*/}
                                                                    <div className="me-3">
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            Just now
                                                                        </span>
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                                                                        >
                                                                            You
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                                                                    data-kt-element="message-text"
                                                                />
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(template for out)*/}
                                                        {/*begin::Message(template for in)*/}
                                                        <div
                                                            className="d-flex justify-content-start mb-10 d-none"
                                                            data-kt-element="template-in"
                                                        >
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-column align-items-start">
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center mb-2">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px symbol-circle">
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                        />
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Details*/}
                                                                    <div className="ms-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <span className="text-muted fs-7 mb-1">
                                                                            Just now
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::User*/}
                                                                {/*begin::Text*/}
                                                                <div
                                                                    className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                                                                    data-kt-element="message-text"
                                                                >
                                                                    Right before vacation season we have the next Big
                                                                    Deal for you.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Message(template for in)*/}
                                                    </div>
                                                    {/*end::Messages*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div
                                                    className="card-footer pt-4"
                                                    id="kt_chat_messenger_footer"
                                                >
                                                    {/*begin::Input*/}
                                                    <textarea
                                                        className="form-control form-control-flush mb-3"
                                                        rows={1}
                                                        data-kt-element="input"
                                                        placeholder="Type a message"
                                                        defaultValue={""}
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin:Toolbar*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            <button
                                                                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                                                                type="button"
                                                                data-bs-toggle="tooltip"
                                                                title="Coming soon"
                                                            >
                                                                <i className="bi bi-paperclip fs-3" />
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                                                                type="button"
                                                                data-bs-toggle="tooltip"
                                                                title="Coming soon"
                                                            >
                                                                <i className="bi bi-upload fs-3" />
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                        {/*begin::Send*/}
                                                        <button
                                                            className="btn btn-primary"
                                                            type="button"
                                                            data-kt-element="send"
                                                        >
                                                            Send
                                                        </button>
                                                        {/*end::Send*/}
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Messenger*/}
                                        </div>
                                        {/*end::Content*/}
                                    </div>
                                    {/*end::Layout*/}
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - View Users*/}
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-1.jpg"
                                                                        />
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
                                                                        <div className="fw-bold text-muted">
                                                                            e.smith@kpmg.com.au
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $23,000
                                                                        </div>
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
                                                                        <div className="fw-bold text-muted">
                                                                            melody@altbox.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $50,500
                                                                        </div>
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                        />
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
                                                                        <div className="fw-bold text-muted">
                                                                            max@kt.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $75,900
                                                                        </div>
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-4.jpg"
                                                                        />
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
                                                                        <div className="fw-bold text-muted">
                                                                            sean@dellito.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $10,500
                                                                        </div>
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                        />
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
                                                                        <div className="fw-bold text-muted">
                                                                            brian@exchange.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $20,000
                                                                        </div>
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
                                                                        <div className="fw-bold text-muted">
                                                                            mikaela@pexcom.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $9,300
                                                                        </div>
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-8.jpg"
                                                                        />
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $15,000
                                                                        </div>
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
                                                                        <div className="fw-bold text-muted">
                                                                            olivia@corpmail.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $23,000
                                                                        </div>
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
                                                                        <div className="fw-bold text-muted">
                                                                            owen.neil@gmail.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $45,800
                                                                        </div>
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-6.jpg"
                                                                        />
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
                                                                        <div className="fw-bold text-muted">
                                                                            dam@consilting.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $90,500
                                                                        </div>
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
                                                                        <div className="fw-bold text-muted">
                                                                            emma@intenso.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $5,000
                                                                        </div>
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
                                                                        <img
                                                                            alt="Pic"
                                                                            src="/assets/media/avatars/150-7.jpg"
                                                                        />
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
                                                                        <div className="fw-bold text-muted">
                                                                            ana.cf@limtel.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $70,000
                                                                        </div>
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
                                                                        <div className="fw-bold text-muted">
                                                                            robert@benko.com
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
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $45,500
                                                                        </div>
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
                                                            <label className="fs-6">
                                                                Adding Users by Team Members
                                                            </label>
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
                                                            <span className="form-check-label fw-bold text-muted">
                                                                Allowed
                                                            </span>
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
                                    {/*end::Modal - View Users*/}
                                    {/*begin::Modal - Users Search*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_users_search"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-650px">
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
                                                    {/*begin::Content*/}
                                                    <div className="text-center mb-13">
                                                        <h1 className="mb-3">Search Users</h1>
                                                        <div className="text-muted fw-bold fs-5">
                                                            Invite Collaborators To Your Project
                                                        </div>
                                                    </div>
                                                    {/*end::Content*/}
                                                    {/*begin::Search*/}
                                                    <div
                                                        id="kt_modal_users_search_handler"
                                                        data-kt-search-keypress="true"
                                                        data-kt-search-min-length={2}
                                                        data-kt-search-enter="enter"
                                                        data-kt-search-layout="inline"
                                                    >
                                                        {/*begin::Form*/}
                                                        <form
                                                            data-kt-search-element="form"
                                                            className="w-100 position-relative mb-5"
                                                            autoComplete="off"
                                                        >
                                                            {/*begin::Hidden input(Added to disable form autocomplete)*/}
                                                            <input type="hidden" />
                                                            {/*end::Hidden input*/}
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <rect
                                                                        opacity="0.5"
                                                                        x="17.0365"
                                                                        y="15.1223"
                                                                        width="8.15546"
                                                                        height={2}
                                                                        rx={1}
                                                                        transform="rotate(45 17.0365 15.1223)"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg form-control-solid px-15"
                                                                name="search"
                                                                defaultValue
                                                                placeholder="Search by username, full name or email..."
                                                                data-kt-search-element="input"
                                                            />
                                                            {/*end::Input*/}
                                                            {/*begin::Spinner*/}
                                                            <span
                                                                className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                                                                data-kt-search-element="spinner"
                                                            >
                                                                <span className="spinner-border h-15px w-15px align-middle text-muted" />
                                                            </span>
                                                            {/*end::Spinner*/}
                                                            {/*begin::Reset*/}
                                                            <span
                                                                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                                                                data-kt-search-element="clear"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
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
                                                            </span>
                                                            {/*end::Reset*/}
                                                        </form>
                                                        {/*end::Form*/}
                                                        {/*begin::Wrapper*/}
                                                        <div className="py-5">
                                                            {/*begin::Suggestions*/}
                                                            <div data-kt-search-element="suggestions">
                                                                {/*begin::Heading*/}
                                                                <h3 className="fw-bold mb-5">Recently searched:</h3>
                                                                {/*end::Heading*/}
                                                                {/*begin::Users*/}
                                                                <div className="mh-375px scroll-y me-n7 pe-7">
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-1.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Emma Smith
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Art Director
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                M
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Melody Macy
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Marketing Analytic
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-26.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Max Smith
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Software Enginer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-4.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Sean Bean
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Web Developer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-15.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Brian Cox
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                UI/UX Designer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Users*/}
                                                            </div>
                                                            {/*end::Suggestions*/}
                                                            {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                                                            <div
                                                                data-kt-search-element="results"
                                                                className="d-none"
                                                            >
                                                                {/*begin::Users*/}
                                                                <div className="mh-375px scroll-y me-n7 pe-7">
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={0}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='0']"
                                                                                    defaultValue={0}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-1.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Emma Smith
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    e.smith@kpmg.com.au
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2} selected="selected">
                                                                                    Owner
                                                                                </option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={1}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='1']"
                                                                                    defaultValue={1}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                    M
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Melody Macy
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    melody@altbox.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1} selected="selected">
                                                                                    Guest
                                                                                </option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={2}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='2']"
                                                                                    defaultValue={2}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-26.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Max Smith
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    max@kt.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={3}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='3']"
                                                                                    defaultValue={3}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-4.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Sean Bean
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    sean@dellito.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2} selected="selected">
                                                                                    Owner
                                                                                </option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={4}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='4']"
                                                                                    defaultValue={4}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-15.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Brian Cox
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    brian@exchange.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={5}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='5']"
                                                                                    defaultValue={5}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                                                    C
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Mikaela Collins
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    mikaela@pexcom.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2} selected="selected">
                                                                                    Owner
                                                                                </option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={6}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='6']"
                                                                                    defaultValue={6}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-8.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Francis Mitcham
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    f.mitcham@kpmg.com.au
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={7}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='7']"
                                                                                    defaultValue={7}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                    O
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Olivia Wild
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    olivia@corpmail.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2} selected="selected">
                                                                                    Owner
                                                                                </option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={8}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='8']"
                                                                                    defaultValue={8}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-primary text-primary fw-bold">
                                                                                    N
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Neil Owen
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    owen.neil@gmail.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1} selected="selected">
                                                                                    Guest
                                                                                </option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={9}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='9']"
                                                                                    defaultValue={9}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Dan Wilson
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    dam@consilting.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={10}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='10']"
                                                                                    defaultValue={10}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                    E
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Emma Bold
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    emma@intenso.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2} selected="selected">
                                                                                    Owner
                                                                                </option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={11}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='11']"
                                                                                    defaultValue={11}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-7.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Ana Crown
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    ana.cf@limtel.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1} selected="selected">
                                                                                    Guest
                                                                                </option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={12}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='12']"
                                                                                    defaultValue={12}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                    A
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Robert Doe
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    robert@benko.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={13}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='13']"
                                                                                    defaultValue={13}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-17.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    John Miller
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    miller@mapple.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={14}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='14']"
                                                                                    defaultValue={14}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-success text-success fw-bold">
                                                                                    L
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Lucy Kunic
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    lucy.m@fentech.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2} selected="selected">
                                                                                    Owner
                                                                                </option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={15}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='15']"
                                                                                    defaultValue={15}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <img
                                                                                    alt="Pic"
                                                                                    src="/assets/media/avatars/150-10.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Ethan Wilder
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    ethan@loop.com.au
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1} selected="selected">
                                                                                    Guest
                                                                                </option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3}>Can Edit</option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={16}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='16']"
                                                                                    defaultValue={16}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Avatar*/}
                                                                            <div className="symbol symbol-35px symbol-circle">
                                                                                <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                                                    C
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::Details*/}
                                                                            <div className="ms-5">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                                >
                                                                                    Mikaela Collins
                                                                                </NavLink>
                                                                                <div className="fw-bold text-muted">
                                                                                    mikaela@pexcom.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Details*/}
                                                                        </div>
                                                                        {/*end::Details*/}
                                                                        {/*begin::Access menu*/}
                                                                        <div className="ms-2 w-100px">
                                                                            <select
                                                                                className="form-select form-select-solid form-select-sm"
                                                                                data-control="select2"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option value={1}>Guest</option>
                                                                                <option value={2}>Owner</option>
                                                                                <option value={3} selected="selected">
                                                                                    Can Edit
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        {/*end::Access menu*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Users*/}
                                                                {/*begin::Actions*/}
                                                                <div className="d-flex flex-center mt-15">
                                                                    <button
                                                                        type="reset"
                                                                        id="kt_modal_users_search_reset"
                                                                        data-bs-dismiss="modal"
                                                                        className="btn btn-active-light me-3"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        id="kt_modal_users_search_submit"
                                                                        className="btn btn-primary"
                                                                    >
                                                                        Add Selected Users
                                                                    </button>
                                                                </div>
                                                                {/*end::Actions*/}
                                                            </div>
                                                            {/*end::Results*/}
                                                            {/*begin::Empty*/}
                                                            <div
                                                                data-kt-search-element="empty"
                                                                className="text-center d-none"
                                                            >
                                                                {/*begin::Message*/}
                                                                <div className="fw-bold py-10">
                                                                    <div className="text-gray-600 fs-3 mb-2">
                                                                        No users found
                                                                    </div>
                                                                    <div className="text-muted fs-6">
                                                                        Try to search by username, full name or email...
                                                                    </div>
                                                                </div>
                                                                {/*end::Message*/}
                                                                {/*begin::Illustration*/}
                                                                <div className="text-center px-5">
                                                                    <img
                                                                        src="/assets/media/illustrations/sketchy-1/1.png"
                                                                        alt
                                                                        className="w-100 h-200px h-sm-325px"
                                                                    />
                                                                </div>
                                                                {/*end::Illustration*/}
                                                            </div>
                                                            {/*end::Empty*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Search*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Users Search*/}
                                    {/*end::Modals*/}
                                </div>
                                {/*end::Post*/}
                                {/*begin::Footer*/}
                                <div
                                    className="footer py-4 d-flex flex-column flex-md-row flex-stack"
                                    id="kt_footer"
                                >
                                    {/*begin::Copyright*/}
                                    <div className="text-dark order-2 order-md-1">
                                        <span className="text-muted fw-bold me-1">2021©</span>
                                        <NavLink
                                            to="https://keenthemes.com"
                                            target="_blank"
                                            className="text-gray-800 text-hover-primary"
                                        >
                                            Keenthemes
                                        </NavLink>
                                    </div>
                                    {/*end::Copyright*/}
                                    {/*begin::Menu*/}
                                    <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                                        <li className="menu-item">
                                            <NavLink
                                                to="https://keenthemes.com"
                                                target="_blank"
                                                className="menu-link px-2"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink
                                                to="https://keenthemes.com/support"
                                                target="_blank"
                                                className="menu-link px-2"
                                            >
                                                Support
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink
                                                to="https://1.envato.market/EA4JP"
                                                target="_blank"
                                                className="menu-link px-2"
                                            >
                                                Purchase
                                            </NavLink>
                                        </li>
                                    </ul>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Footer*/}
                            </div>
                            {/*end::Container*/}
                        </div>
                        {/*end::Content wrapper*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Page*/}
            </div>

        </div>
    )
}

export default Private
