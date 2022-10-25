import React from 'react'
import NewTargetModal from '../../../CommonElements/NewTargetModal'
import ViewUserModal from '../../../CommonElements/ViewUserModal'
import { NavLink } from 'react-router-dom';

const Project = () => {
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
                                            View Project
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
                                            <li className="breadcrumb-item text-gray-600">Projects</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">View Project</li>
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
                                                id="kt_menu_61b9c7af82479"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7af82479"
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
                                    {/*begin::Navbar*/}
                                    <div className="card mb-6 mb-xl-9">
                                        <div className="card-body pt-9 pb-0">
                                            {/*begin::Details*/}
                                            <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
                                                {/*begin::Image*/}
                                                <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                                                    <img
                                                        className="mw-50px mw-lg-75px"
                                                        src="/assets/media/svg/brand-logos/volicity-9.svg"
                                                        alt="image"
                                                    />
                                                </div>
                                                {/*end::Image*/}
                                                {/*begin::Wrapper*/}
                                                <div className="flex-grow-1">
                                                    {/*begin::Head*/}
                                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                        {/*begin::Details*/}
                                                        <div className="d-flex flex-column">
                                                            {/*begin::Status*/}
                                                            <div className="d-flex align-items-center mb-1">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3"
                                                                >
                                                                    CRM Dashboard
                                                                </NavLink>
                                                                <span className="badge badge-light-success me-auto">
                                                                    In Progress
                                                                </span>
                                                            </div>
                                                            {/*end::Status*/}
                                                            {/*begin::Description*/}
                                                            <div className="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                                                                #1 Tool to get started with Web Apps any Kind &amp;
                                                                size
                                                            </div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex mb-4">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-bg-light btn-active-color-primary me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_users_search"
                                                            >
                                                                Add User
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-primary me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_target"
                                                            >
                                                                Add Target
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div className="me-0">
                                                                <button
                                                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
                                                                >
                                                                    <i className="bi bi-three-dots fs-3" />
                                                                </button>
                                                                {/*begin::Menu 3*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                                                                    data-kt-menu="true"
                                                                >
                                                                    {/*begin::Heading*/}
                                                                    <div className="menu-item px-3">
                                                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                                                            Payments
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Heading*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            Create Invoice
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink to="#" className="menu-link flex-stack px-3">
                                                                            Create Payment
                                                                            <i
                                                                                className="fas fa-exclamation-circle ms-2 fs-7"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Specify a target name for future usage and reference"
                                                                            />
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            Generate Bill
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div
                                                                        className="menu-item px-3"
                                                                        data-kt-menu-trigger="hover"
                                                                        data-kt-menu-placement="right-end"
                                                                    >
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            <span className="menu-title">Subscription</span>
                                                                            <span className="menu-arrow" />
                                                                        </NavLink>
                                                                        {/*begin::Menu sub*/}
                                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <NavLink to="#" className="menu-link px-3">
                                                                                    Plans
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <NavLink to="#" className="menu-link px-3">
                                                                                    Billing
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <NavLink to="#" className="menu-link px-3">
                                                                                    Statements
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                            {/*begin::Menu separator*/}
                                                                            <div className="separator my-2" />
                                                                            {/*end::Menu separator*/}
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <div className="menu-content px-3">
                                                                                    {/*begin::Switch*/}
                                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                        {/*begin::Input*/}
                                                                                        <input
                                                                                            className="form-check-input w-30px h-20px"
                                                                                            type="checkbox"
                                                                                            defaultValue={1}
                                                                                            defaultChecked="checked"
                                                                                            name="notifications"
                                                                                        />
                                                                                        {/*end::Input*/}
                                                                                        {/*end::Label*/}
                                                                                        <span className="form-check-label text-muted fs-6">
                                                                                            Recuring
                                                                                        </span>
                                                                                        {/*end::Label*/}
                                                                                    </label>
                                                                                    {/*end::Switch*/}
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                        </div>
                                                                        {/*end::Menu sub*/}
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3 my-1">
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            Settings
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                </div>
                                                                {/*end::Menu 3*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Head*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap justify-content-start">
                                                        {/*begin::Stats*/}
                                                        <div className="d-flex flex-wrap">
                                                            {/*begin::Stat*/}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/*begin::Number*/}
                                                                <div className="d-flex align-items-center">
                                                                    <div className="fs-4 fw-bolder">29 Jan, 2021</div>
                                                                </div>
                                                                {/*end::Number*/}
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                    Due Date
                                                                </div>
                                                                {/*end::Label*/}
                                                            </div>
                                                            {/*end::Stat*/}
                                                            {/*begin::Stat*/}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/*begin::Number*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <rect
                                                                                opacity="0.5"
                                                                                x={11}
                                                                                y={18}
                                                                                width={13}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(-90 11 18)"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div
                                                                        className="fs-4 fw-bolder"
                                                                        data-kt-countup="true"
                                                                        data-kt-countup-value={75}
                                                                    >
                                                                        0
                                                                    </div>
                                                                </div>
                                                                {/*end::Number*/}
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                    Open Tasks
                                                                </div>
                                                                {/*end::Label*/}
                                                            </div>
                                                            {/*end::Stat*/}
                                                            {/*begin::Stat*/}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/*begin::Number*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <rect
                                                                                opacity="0.5"
                                                                                x={13}
                                                                                y={6}
                                                                                width={13}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(90 13 6)"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div
                                                                        className="fs-4 fw-bolder"
                                                                        data-kt-countup="true"
                                                                        data-kt-countup-value={15000}
                                                                        data-kt-countup-prefix="$"
                                                                    >
                                                                        0
                                                                    </div>
                                                                </div>
                                                                {/*end::Number*/}
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                    Budget Spent
                                                                </div>
                                                                {/*end::Label*/}
                                                            </div>
                                                            {/*end::Stat*/}
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Users*/}
                                                        <div className="symbol-group symbol-hover mb-3">
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Alan Warden"
                                                            >
                                                                <span className="symbol-label bg-warning text-inverse-warning fw-bolder">
                                                                    A
                                                                </span>
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Michael Eberon"
                                                            >
                                                                <img
                                                                    alt="Pic"
                                                                    src="/assets/media/avatars/150-12.jpg"
                                                                />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Michelle Swanston"
                                                            >
                                                                <img
                                                                    alt="Pic"
                                                                    src="/assets/media/avatars/150-13.jpg"
                                                                />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Francis Mitcham"
                                                            >
                                                                <img alt="Pic" src="/assets/media/avatars/150-5.jpg" />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Susan Redwood"
                                                            >
                                                                <span className="symbol-label bg-primary text-inverse-primary fw-bolder">
                                                                    S
                                                                </span>
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Melody Macy"
                                                            >
                                                                <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Perry Matthew"
                                                            >
                                                                <span className="symbol-label bg-info text-inverse-info fw-bolder">
                                                                    P
                                                                </span>
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Barry Walter"
                                                            >
                                                                <img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::All users*/}
                                                            <NavLink
                                                                to="#"
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_view_users"
                                                            >
                                                                <span
                                                                    className="symbol-label bg-dark text-inverse-dark fs-8 fw-bolder"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-trigger="hover"
                                                                    title="View more users"
                                                                >
                                                                    +42
                                                                </span>
                                                            </NavLink>
                                                            {/*end::All users*/}
                                                        </div>
                                                        {/*end::Users*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>
                                            {/*end::Details*/}
                                            <div className="separator" />
                                            {/*begin::Nav wrapper*/}
                                            <div className="d-flex overflow-auto h-55px">
                                                {/*begin::Nav links*/}
                                                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6 active"
                                                            to="../../demo14/dist/apps/projects/project.html"
                                                        >
                                                            Overview
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/targets.html"
                                                        >
                                                            Targets
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/budget.html"
                                                        >
                                                            Budget
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/users.html"
                                                        >
                                                            Users
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/files.html"
                                                        >
                                                            Files
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/activity.html"
                                                        >
                                                            Activity
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/settings.html"
                                                        >
                                                            Settings
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                </ul>
                                                {/*end::Nav links*/}
                                            </div>
                                            {/*end::Nav wrapper*/}
                                        </div>
                                    </div>
                                    {/*end::Navbar*/}
                                    {/*begin::Row*/}
                                    <div className="row g-6 g-xl-9">
                                        {/*begin::Col*/}
                                        <div className="col-lg-6">
                                            {/*begin::Summary*/}
                                            <div className="card card-flush h-lg-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header mt-6">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bolder mb-1">Tasks Summary</h3>
                                                        <div className="fs-6 fw-bold text-gray-400">
                                                            24 Overdue Tasks
                                                        </div>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <NavLink to="#" className="btn btn-light btn-sm">
                                                            View Tasks
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body p-9 pt-5">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-wrap">
                                                        {/*begin::Chart*/}
                                                        <div className="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
                                                            <div className="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                                                                <span className="fs-2qx fw-bolder">237</span>
                                                                <span className="fs-6 fw-bold text-gray-400">
                                                                    Total Tasks
                                                                </span>
                                                            </div>
                                                            <canvas id="project_overview_chart" />
                                                        </div>
                                                        {/*end::Chart*/}
                                                        {/*begin::Labels*/}
                                                        <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                                                                <div className="bullet bg-primary me-3" />
                                                                <div className="text-gray-400">Active</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    30
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                                                                <div className="bullet bg-success me-3" />
                                                                <div className="text-gray-400">Completed</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    45
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                                                                <div className="bullet bg-danger me-3" />
                                                                <div className="text-gray-400">Overdue</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    0
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center">
                                                                <div className="bullet bg-gray-300 me-3" />
                                                                <div className="text-gray-400">Yet to start</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    25
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Labels*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Notice*/}
                                                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex flex-stack flex-grow-1">
                                                            {/*begin::Content*/}
                                                            <div className="fw-bold">
                                                                <div className="fs-6 text-gray-700">
                                                                    <NavLink to="#" className="fw-bolder me-1">
                                                                        Invite New .NET Collaborators
                                                                    </NavLink>
                                                                    to create great outstanding business to business
                                                                    .jsp modutr class scripts
                                                                </div>
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Notice*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Summary*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-lg-6">
                                            {/*begin::Graph*/}
                                            <div className="card card-flush h-lg-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header mt-6">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bolder mb-1">Tasks Over Time</h3>
                                                        {/*begin::Labels*/}
                                                        <div className="fs-6 d-flex text-gray-400 fs-6 fw-bold">
                                                            {/*begin::Label*/}
                                                            <div className="d-flex align-items-center me-6">
                                                                <span className="menu-bullet d-flex align-items-center me-2">
                                                                    <span className="bullet bg-success" />
                                                                </span>
                                                                Complete
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <div className="d-flex align-items-center">
                                                                <span className="menu-bullet d-flex align-items-center me-2">
                                                                    <span className="bullet bg-primary" />
                                                                </span>
                                                                Incomplete
                                                            </div>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Labels*/}
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::Select*/}
                                                        <select
                                                            name="status"
                                                            data-control="select2"
                                                            data-hide-search="true"
                                                            className="form-select form-select-solid form-select-sm fw-bolder w-100px"
                                                        >
                                                            <option value={1}>2020 Q1</option>
                                                            <option value={2}>2020 Q2</option>
                                                            <option value={3} selected="selected">
                                                                2020 Q3
                                                            </option>
                                                            <option value={4}>2020 Q4</option>
                                                        </select>
                                                        {/*end::Select*/}
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-10 pb-0 px-5">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_project_overview_graph"
                                                        className="card-rounded-bottom"
                                                        style={{ height: 300 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Graph*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-lg-6">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-lg-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header mt-6">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bolder mb-1">What's on the road?</h3>
                                                        <div className="fs-6 text-gray-400">
                                                            Total 482 participants
                                                        </div>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::Select*/}
                                                        <select
                                                            name="status"
                                                            data-control="select2"
                                                            data-hide-search="true"
                                                            className="form-select form-select-solid form-select-sm fw-bolder w-100px"
                                                        >
                                                            <option value={1} selected="selected">
                                                                Options
                                                            </option>
                                                            <option value={2}>Option 1</option>
                                                            <option value={3}>Option 2</option>
                                                            <option value={4}>Option 3</option>
                                                        </select>
                                                        {/*end::Select*/}
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body p-9 pt-4">
                                                    {/*begin::Dates*/}
                                                    <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_0"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Su</span>
                                                                <span className="fs-6 fw-bolder">22</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary active"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_1"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Mo</span>
                                                                <span className="fs-6 fw-bolder">23</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_2"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Tu</span>
                                                                <span className="fs-6 fw-bolder">24</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_3"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">We</span>
                                                                <span className="fs-6 fw-bolder">25</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_4"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Th</span>
                                                                <span className="fs-6 fw-bolder">26</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_5"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Fr</span>
                                                                <span className="fs-6 fw-bolder">27</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_6"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Sa</span>
                                                                <span className="fs-6 fw-bolder">28</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_7"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Su</span>
                                                                <span className="fs-6 fw-bolder">29</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_8"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Mo</span>
                                                                <span className="fs-6 fw-bolder">30</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                        {/*begin::Date*/}
                                                        <li className="nav-item me-1">
                                                            <NavLink
                                                                className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                                                                data-bs-toggle="tab"
                                                                to="#kt_schedule_day_9"
                                                            >
                                                                <span className="opacity-50 fs-7 fw-bold">Tu</span>
                                                                <span className="fs-6 fw-bolder">31</span>
                                                            </NavLink>
                                                        </li>
                                                        {/*end::Date*/}
                                                    </ul>
                                                    {/*end::Dates*/}
                                                    {/*begin::Tab Content*/}
                                                    <div className="tab-content">
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_0"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        9:00 - 10:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Terry Robins</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Michael Walters</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        14:30 - 15:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        9 Degree Project Estimation Meeting
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Karina Clarke</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_1"
                                                            className="tab-pane fade show active"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Marketing Campaign Discussion
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        16:30 - 17:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Weekly Team Stand-Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Bob Harris</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        16:30 - 17:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Lunch &amp; Learn Catch Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Walter White</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_2"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        16:30 - 17:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Marketing Campaign Discussion
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Terry Robins</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        10:00 - 11:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Team Backlog Grooming Session
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Bob Harris</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        10:00 - 11:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        9 Degree Project Estimation Meeting
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Bob Harris</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_3"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        14:30 - 15:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Lunch &amp; Learn Catch Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Peter Marcus</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        14:30 - 15:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Lunch &amp; Learn Catch Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        12:00 - 13:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Development Team Capacity Review
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">David Stevenson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_4"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        9:00 - 10:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Creative Content Initiative
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Yannis Gloverson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        13:00 - 14:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Dashboard UI/UX Design Review
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Kendell Trevor</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        12:00 - 13:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Weekly Team Stand-Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">David Stevenson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_5"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        14:30 - 15:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Dashboard UI/UX Design Review
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">David Stevenson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        16:30 - 17:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Sean Bean</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        16:30 - 17:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Development Team Capacity Review
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Michael Walters</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_6"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        14:30 - 15:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Creative Content Initiative
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Peter Marcus</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Terry Robins</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        10:00 - 11:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Lunch &amp; Learn Catch Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">David Stevenson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_7"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        16:30 - 17:30
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Dashboard UI/UX Design Review
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        9:00 - 10:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Kendell Trevor</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Weekly Team Stand-Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Yannis Gloverson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_8"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        9 Degree Project Estimation Meeting
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        13:00 - 14:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Lunch &amp; Learn Catch Up
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Sean Bean</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Yannis Gloverson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                        {/*begin::Day*/}
                                                        <div
                                                            id="kt_schedule_day_9"
                                                            className="tab-pane fade show"
                                                        >
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Karina Clarke</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        13:00 - 14:00
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            pm
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Committee Review Approvals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                            {/*begin::Time*/}
                                                            <div className="d-flex flex-stack position-relative mt-8">
                                                                {/*begin::Bar*/}
                                                                <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                {/*end::Bar*/}
                                                                {/*begin::Info*/}
                                                                <div className="fw-bold ms-5 text-gray-600">
                                                                    {/*begin::Time*/}
                                                                    <div className="fs-5">
                                                                        11:00 - 11:45
                                                                        <span className="fs-7 text-gray-400 text-uppercase">
                                                                            am
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        Creative Content Initiative
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::User*/}
                                                                    <div className="text-gray-400">
                                                                        Lead by
                                                                        <NavLink to="#">David Stevenson</NavLink>
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Action*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                                >
                                                                    View
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Time*/}
                                                        </div>
                                                        {/*end::Day*/}
                                                    </div>
                                                    {/*end::Tab Content*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-lg-6">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-lg-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header mt-6">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bolder mb-1">Latest Files</h3>
                                                        <div className="fs-6 text-gray-400">
                                                            Total 382 fiels, 2,6GB space usage
                                                        </div>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                        >
                                                            View All
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body p-9 pt-3">
                                                    {/*begin::Files*/}
                                                    <div className="d-flex flex-column mb-9">
                                                        {/*begin::File*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Icon*/}
                                                            <div className="symbol symbol-30px me-5">
                                                                <img
                                                                    alt="Icon"
                                                                    src="/assets/media/svg/files/pdf.svg"
                                                                />
                                                            </div>
                                                            {/*end::Icon*/}
                                                            {/*begin::Details*/}
                                                            <div className="fw-bold">
                                                                <NavLink
                                                                    className="fs-6 fw-bolder text-dark text-hover-primary"
                                                                    to="#"
                                                                >
                                                                    Project tech requirements
                                                                </NavLink>
                                                                <div className="text-gray-400">
                                                                    2 days ago
                                                                    <NavLink to="#">Karina Clark</NavLink>
                                                                </div>
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Menu*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <g
                                                                            stroke="none"
                                                                            strokeWidth={1}
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <rect
                                                                                x={5}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={5}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*begin::Menu 1*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                data-kt-menu="true"
                                                                id="kt_menu_61b9c7af8357a"
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
                                                                        <label className="form-label fw-bold">
                                                                            Status:
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div>
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-dropdown-parent="#kt_menu_61b9c7af8357a"
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
                                                                        <label className="form-label fw-bold">
                                                                            Member Type:
                                                                        </label>
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
                                                                                <span className="form-check-label">
                                                                                    Author
                                                                                </span>
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
                                                                                <span className="form-check-label">
                                                                                    Customer
                                                                                </span>
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
                                                                            <label className="form-check-label">
                                                                                Enabled
                                                                            </label>
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
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Icon*/}
                                                            <div className="symbol symbol-30px me-5">
                                                                <img
                                                                    alt="Icon"
                                                                    src="/assets/media/svg/files/doc.svg"
                                                                />
                                                            </div>
                                                            {/*end::Icon*/}
                                                            {/*begin::Details*/}
                                                            <div className="fw-bold">
                                                                <NavLink
                                                                    className="fs-6 fw-bolder text-dark text-hover-primary"
                                                                    to="#"
                                                                >
                                                                    Create FureStibe branding proposal
                                                                </NavLink>
                                                                <div className="text-gray-400">
                                                                    Due in 1 day
                                                                    <NavLink to="#">Marcus Blake</NavLink>
                                                                </div>
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Menu*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <g
                                                                            stroke="none"
                                                                            strokeWidth={1}
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <rect
                                                                                x={5}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={5}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*begin::Menu 1*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                data-kt-menu="true"
                                                                id="kt_menu_61b9c7af83743"
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
                                                                        <label className="form-label fw-bold">
                                                                            Status:
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div>
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-dropdown-parent="#kt_menu_61b9c7af83743"
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
                                                                        <label className="form-label fw-bold">
                                                                            Member Type:
                                                                        </label>
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
                                                                                <span className="form-check-label">
                                                                                    Author
                                                                                </span>
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
                                                                                <span className="form-check-label">
                                                                                    Customer
                                                                                </span>
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
                                                                            <label className="form-check-label">
                                                                                Enabled
                                                                            </label>
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
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Icon*/}
                                                            <div className="symbol symbol-30px me-5">
                                                                <img
                                                                    alt="Icon"
                                                                    src="/assets/media/svg/files/css.svg"
                                                                />
                                                            </div>
                                                            {/*end::Icon*/}
                                                            {/*begin::Details*/}
                                                            <div className="fw-bold">
                                                                <NavLink
                                                                    className="fs-6 fw-bolder text-dark text-hover-primary"
                                                                    to="#"
                                                                >
                                                                    Completed Project Stylings
                                                                </NavLink>
                                                                <div className="text-gray-400">
                                                                    Due in 1 day
                                                                    <NavLink to="#">Terry Barry</NavLink>
                                                                </div>
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Menu*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <g
                                                                            stroke="none"
                                                                            strokeWidth={1}
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <rect
                                                                                x={5}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={5}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*begin::Menu 1*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                data-kt-menu="true"
                                                                id="kt_menu_61b9c7af83902"
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
                                                                        <label className="form-label fw-bold">
                                                                            Status:
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div>
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-dropdown-parent="#kt_menu_61b9c7af83902"
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
                                                                        <label className="form-label fw-bold">
                                                                            Member Type:
                                                                        </label>
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
                                                                                <span className="form-check-label">
                                                                                    Author
                                                                                </span>
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
                                                                                <span className="form-check-label">
                                                                                    Customer
                                                                                </span>
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
                                                                            <label className="form-check-label">
                                                                                Enabled
                                                                            </label>
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
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Icon*/}
                                                            <div className="symbol symbol-30px me-5">
                                                                <img alt="Icon" src="/assets/media/svg/files/ai.svg" />
                                                            </div>
                                                            {/*end::Icon*/}
                                                            {/*begin::Details*/}
                                                            <div className="fw-bold">
                                                                <NavLink
                                                                    className="fs-6 fw-bolder text-dark text-hover-primary"
                                                                    to="#"
                                                                >
                                                                    Create Project Wireframes
                                                                </NavLink>
                                                                <div className="text-gray-400">
                                                                    Due in 3 days
                                                                    <NavLink to="#">Roth Bloom</NavLink>
                                                                </div>
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Menu*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <g
                                                                            stroke="none"
                                                                            strokeWidth={1}
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <rect
                                                                                x={5}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={5}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={5}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                            <rect
                                                                                x={14}
                                                                                y={14}
                                                                                width={5}
                                                                                height={5}
                                                                                rx={1}
                                                                                fill="#000000"
                                                                                opacity="0.3"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*begin::Menu 1*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                data-kt-menu="true"
                                                                id="kt_menu_61b9c7af83bed"
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
                                                                        <label className="form-label fw-bold">
                                                                            Status:
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div>
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-dropdown-parent="#kt_menu_61b9c7af83bed"
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
                                                                        <label className="form-label fw-bold">
                                                                            Member Type:
                                                                        </label>
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
                                                                                <span className="form-check-label">
                                                                                    Author
                                                                                </span>
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
                                                                                <span className="form-check-label">
                                                                                    Customer
                                                                                </span>
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
                                                                            <label className="form-check-label">
                                                                                Enabled
                                                                            </label>
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
                                                        {/*end::File*/}
                                                    </div>
                                                    {/*end::Files*/}
                                                    {/*begin::Notice*/}
                                                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: svg/files/upload.svg*/}
                                                        <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={67}
                                                                height={67}
                                                                viewBox="0 0 67 67"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.25"
                                                                    d="M8.375 11.167C8.375 6.54161 12.1246 2.79199 16.75 2.79199H43.9893C46.2105 2.79199 48.3407 3.67436 49.9113 5.24497L56.172 11.5057C57.7426 13.0763 58.625 15.2065 58.625 17.4277V55.8337C58.625 60.459 54.8754 64.2087 50.25 64.2087H16.75C12.1246 64.2087 8.375 60.459 8.375 55.8337V11.167Z"
                                                                    fill="#00A3FF"
                                                                />
                                                                <path
                                                                    d="M41.875 5.28162C41.875 3.90663 42.9896 2.79199 44.3646 2.79199V2.79199C46.3455 2.79199 48.2452 3.57889 49.6459 4.97957L56.4374 11.7711C57.8381 13.1718 58.625 15.0715 58.625 17.0524V17.0524C58.625 18.4274 57.5104 19.542 56.1354 19.542H44.6667C43.1249 19.542 41.875 18.2921 41.875 16.7503V5.28162Z"
                                                                    fill="#00A3FF"
                                                                />
                                                                <path
                                                                    d="M32.4311 25.3368C32.1018 25.4731 31.7933 25.675 31.5257 25.9427L23.1507 34.3177C22.0605 35.4079 22.0605 37.1755 23.1507 38.2657C24.2409 39.3559 26.0085 39.3559 27.0987 38.2657L30.708 34.6563V47.4583C30.708 49.0001 31.9579 50.25 33.4997 50.25C35.0415 50.25 36.2913 49.0001 36.2913 47.4583V34.6563L39.9007 38.2657C40.9909 39.3559 42.7585 39.3559 43.8487 38.2657C44.9389 37.1755 44.9389 35.4079 43.8487 34.3177L35.4737 25.9427C34.6511 25.1201 33.443 24.9182 32.4311 25.3368Z"
                                                                    fill="#00A3FF"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                        {/*end::Icon*/}
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex flex-stack flex-grow-1">
                                                            {/*begin::Content*/}
                                                            <div className="fw-bold">
                                                                <h4 className="text-gray-900 fw-bolder">
                                                                    Quick file uploader
                                                                </h4>
                                                                <div className="fs-6 text-gray-700">
                                                                    Drag &amp; Drop or choose files from computer
                                                                </div>
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Notice*/}
                                                </div>
                                                {/*end::Card body */}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-lg-6">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-lg-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header mt-6">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bolder mb-1">New Contibutors</h3>
                                                        <div className="fs-6 text-gray-400">
                                                            From total 482 Participants
                                                        </div>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                        >
                                                            View All
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card toolbar*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-column p-9 pt-3 mb-9">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="me-5 position-relative">
                                                            {/*begin::Image*/}
                                                            <div className="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic" src="/assets/media/avatars/150-1.jpg" />
                                                            </div>
                                                            {/*end::Image*/}
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-5 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Emma Smith
                                                            </NavLink>
                                                            <div className="text-gray-400">
                                                                8 Pending &amp; 97 Completed Tasks
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Badge*/}
                                                        <div className="badge badge-light ms-auto">5</div>
                                                        {/*end::Badge*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="me-5 position-relative">
                                                            {/*begin::Image*/}
                                                            <div className="symbol symbol-35px symbol-circle">
                                                                <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                    M
                                                                </span>
                                                            </div>
                                                            {/*end::Image*/}
                                                            {/*begin::Online*/}
                                                            <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                            {/*end::Online*/}
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-5 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Melody Macy
                                                            </NavLink>
                                                            <div className="text-gray-400">
                                                                5 Pending &amp; 84 Completed
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Badge*/}
                                                        <div className="badge badge-light ms-auto">8</div>
                                                        {/*end::Badge*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="me-5 position-relative">
                                                            {/*begin::Image*/}
                                                            <div className="symbol symbol-35px symbol-circle">
                                                                <img
                                                                    alt="Pic"
                                                                    src="/assets/media/avatars/150-26.jpg"
                                                                />
                                                            </div>
                                                            {/*end::Image*/}
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-5 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Max Smith
                                                            </NavLink>
                                                            <div className="text-gray-400">
                                                                9 Pending &amp; 103 Completed
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Badge*/}
                                                        <div className="badge badge-light ms-auto">9</div>
                                                        {/*end::Badge*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="me-5 position-relative">
                                                            {/*begin::Image*/}
                                                            <div className="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                                                            </div>
                                                            {/*end::Image*/}
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-5 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Sean Bean
                                                            </NavLink>
                                                            <div className="text-gray-400">
                                                                3 Pending &amp; 55 Completed
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Badge*/}
                                                        <div className="badge badge-light ms-auto">3</div>
                                                        {/*end::Badge*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Avatar*/}
                                                        <div className="me-5 position-relative">
                                                            {/*begin::Image*/}
                                                            <div className="symbol symbol-35px symbol-circle">
                                                                <img
                                                                    alt="Pic"
                                                                    src="/assets/media/avatars/150-15.jpg"
                                                                />
                                                            </div>
                                                            {/*end::Image*/}
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-5 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Brian Cox
                                                            </NavLink>
                                                            <div className="text-gray-400">
                                                                4 Pending &amp; 115 Completed
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Badge*/}
                                                        <div className="badge badge-light ms-auto">4</div>
                                                        {/*end::Badge*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-lg-6">
                                            {/*begin::Tasks*/}
                                            <div className="card card-flush h-lg-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header mt-6">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bolder mb-1">My Tasks</h3>
                                                        <div className="fs-6 text-gray-400">
                                                            Total 25 tasks in backlog
                                                        </div>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                                                        >
                                                            View All
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-column mb-9 p-9 pt-3">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center position-relative mb-7">
                                                        {/*begin::Label*/}
                                                        <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                        {/*end::Label*/}
                                                        {/*begin::Checkbox*/}
                                                        <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </div>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-6 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Create FureStibe branding logo
                                                            </NavLink>
                                                            {/*begin::Info*/}
                                                            <div className="text-gray-400">
                                                                Due in 1 day
                                                                <NavLink to="#">Karina Clark</NavLink>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x={5}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={5}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c7af8481d"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c7af8481d"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center position-relative mb-7">
                                                        {/*begin::Label*/}
                                                        <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                        {/*end::Label*/}
                                                        {/*begin::Checkbox*/}
                                                        <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </div>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-6 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Schedule a meeting with FireBear CTO John
                                                            </NavLink>
                                                            {/*begin::Info*/}
                                                            <div className="text-gray-400">
                                                                Due in 3 days
                                                                <NavLink to="#">Rober Doe</NavLink>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x={5}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={5}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c7af84b1e"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c7af84b1e"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center position-relative mb-7">
                                                        {/*begin::Label*/}
                                                        <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                        {/*end::Label*/}
                                                        {/*begin::Checkbox*/}
                                                        <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </div>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-6 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                9 Degree Porject Estimation
                                                            </NavLink>
                                                            {/*begin::Info*/}
                                                            <div className="text-gray-400">
                                                                Due in 1 week
                                                                <NavLink to="#">Neil Owen</NavLink>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x={5}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={5}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c7af84e14"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c7af84e14"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center position-relative mb-7">
                                                        {/*begin::Label*/}
                                                        <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                        {/*end::Label*/}
                                                        {/*begin::Checkbox*/}
                                                        <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </div>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-6 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Dashgboard UI &amp; UX for Leafr CRM
                                                            </NavLink>
                                                            {/*begin::Info*/}
                                                            <div className="text-gray-400">
                                                                Due in 1 week
                                                                <NavLink to="#">Olivia Wild</NavLink>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x={5}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={5}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c7af850fd"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c7af850fd"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center position-relative">
                                                        {/*begin::Label*/}
                                                        <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                        {/*end::Label*/}
                                                        {/*begin::Checkbox*/}
                                                        <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </div>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Details*/}
                                                        <div className="fw-bold">
                                                            <NavLink
                                                                to="#"
                                                                className="fs-6 fw-bolder text-gray-900 text-hover-primary"
                                                            >
                                                                Mivy App R&amp;D, Meeting with clients
                                                            </NavLink>
                                                            {/*begin::Info*/}
                                                            <div className="text-gray-400">
                                                                Due in 2 weeks
                                                                <NavLink to="#">Sean Bean</NavLink>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x={5}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={5}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c7af853e8"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c7af853e8"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Tasks*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Table*/}
                                    <div className="card card-flush mt-6 mt-xl-9">
                                        {/*begin::Card header*/}
                                        <div className="card-header mt-5">
                                            {/*begin::Card title*/}
                                            <div className="card-title flex-column">
                                                <h3 className="fw-bolder mb-1">Project Spendings</h3>
                                                <div className="fs-6 text-gray-400">
                                                    Total $260,300 sepnt so far
                                                </div>
                                            </div>
                                            {/*begin::Card title*/}
                                            {/*begin::Card toolbar*/}
                                            <div className="card-toolbar my-1">
                                                {/*begin::Select*/}
                                                <div className="me-6 my-1">
                                                    <select
                                                        id="kt_filter_year"
                                                        name="year"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        className="w-125px form-select form-select-solid form-select-sm"
                                                    >
                                                        <option value="All" selected="selected">
                                                            All time
                                                        </option>
                                                        <option value="thisyear">This year</option>
                                                        <option value="thismonth">This month</option>
                                                        <option value="lastmonth">Last month</option>
                                                        <option value="last90days">Last 90 days</option>
                                                    </select>
                                                </div>
                                                {/*end::Select*/}
                                                {/*begin::Select*/}
                                                <div className="me-4 my-1">
                                                    <select
                                                        id="kt_filter_orders"
                                                        name="orders"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        className="w-125px form-select form-select-solid form-select-sm"
                                                    >
                                                        <option value="All" selected="selected">
                                                            All Orders
                                                        </option>
                                                        <option value="Approved">Approved</option>
                                                        <option value="Declined">Declined</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="In Transit">In Transit</option>
                                                    </select>
                                                </div>
                                                {/*end::Select*/}
                                                {/*begin::Search*/}
                                                <div className="d-flex align-items-center position-relative my-1">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                    <span className="svg-icon svg-icon-3 position-absolute ms-3">
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
                                                    <input
                                                        type="text"
                                                        id="kt_filter_search"
                                                        className="form-control form-control-solid form-select-sm w-150px ps-9"
                                                        placeholder="Search Order"
                                                    />
                                                </div>
                                                {/*end::Search*/}
                                            </div>
                                            {/*begin::Card toolbar*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body pt-0">
                                            {/*begin::Table container*/}
                                            <div className="table-responsive">
                                                {/*begin::Table*/}
                                                <table
                                                    id="kt_profile_overview_table"
                                                    className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder"
                                                >
                                                    {/*begin::Head*/}
                                                    <thead className="fs-7 text-gray-400 text-uppercase">
                                                        <tr>
                                                            <th className="min-w-250px">Manager</th>
                                                            <th className="min-w-150px">Date</th>
                                                            <th className="min-w-90px">Amount</th>
                                                            <th className="min-w-90px">Status</th>
                                                            <th className="min-w-50px text-end">Details</th>
                                                        </tr>
                                                    </thead>
                                                    {/*end::Head*/}
                                                    {/*begin::Body*/}
                                                    <tbody className="fs-6">
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-1.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Emma Smith
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            e.smith@kpmg.com.au
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Feb 21, 2021</td>
                                                            <td>$547.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                M
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Melody Macy
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            melody@altbox.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jul 25, 2021</td>
                                                            <td>$509.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-26.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Max Smith
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            max@kt.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Aug 19, 2021</td>
                                                            <td>$872.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-4.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Sean Bean
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            sean@dellito.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Aug 19, 2021</td>
                                                            <td>$934.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-15.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            brian@exchange.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>May 05, 2021</td>
                                                            <td>$406.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                                                C
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Mikaela Collins
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            mikaela@pexcom.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jun 20, 2021</td>
                                                            <td>$558.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-8.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Francis Mitcham
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            f.mitcham@kpmg.com.au
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Sep 22, 2021</td>
                                                            <td>$855.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                O
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Olivia Wild
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            olivia@corpmail.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jun 24, 2021</td>
                                                            <td>$546.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-primary text-primary fw-bold">
                                                                                N
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Neil Owen
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            owen.neil@gmail.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jul 25, 2021</td>
                                                            <td>$827.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Dan Wilson
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            dam@consilting.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Aug 19, 2021</td>
                                                            <td>$710.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                E
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Emma Bold
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            emma@intenso.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Apr 15, 2021</td>
                                                            <td>$552.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-7.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Ana Crown
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            ana.cf@limtel.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jun 24, 2021</td>
                                                            <td>$629.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                A
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Robert Doe
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            robert@benko.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Oct 25, 2021</td>
                                                            <td>$725.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-17.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            John Miller
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            miller@mapple.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jun 24, 2021</td>
                                                            <td>$685.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-success text-success fw-bold">
                                                                                L
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Lucy Kunic
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            lucy.m@fentech.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Nov 10, 2021</td>
                                                            <td>$510.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-10.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Ethan Wilder
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            ethan@loop.com.au
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Sep 22, 2021</td>
                                                            <td>$790.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-success text-success fw-bold">
                                                                                L
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Lucy Kunic
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            lucy.m@fentech.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Feb 21, 2021</td>
                                                            <td>$860.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                M
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Melody Macy
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            melody@altbox.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Dec 20, 2021</td>
                                                            <td>$673.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-1.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Emma Smith
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            e.smith@kpmg.com.au
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>May 05, 2021</td>
                                                            <td>$452.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                A
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Robert Doe
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            robert@benko.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jul 25, 2021</td>
                                                            <td>$814.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                E
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Emma Bold
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            emma@intenso.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Nov 10, 2021</td>
                                                            <td>$985.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-26.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Max Smith
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            max@kt.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Feb 21, 2021</td>
                                                            <td>$838.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-1.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Emma Smith
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            e.smith@kpmg.com.au
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jun 24, 2021</td>
                                                            <td>$933.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-26.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Max Smith
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            max@kt.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Mar 10, 2021</td>
                                                            <td>$892.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                O
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Olivia Wild
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            olivia@corpmail.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Sep 22, 2021</td>
                                                            <td>$505.00</td>
                                                            <td>
                                                                <span className="badge badge-light-info fw-bolder px-4 py-3">
                                                                    In progress
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                A
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Robert Doe
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            robert@benko.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>May 05, 2021</td>
                                                            <td>$486.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Dan Wilson
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            dam@consilting.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Aug 19, 2021</td>
                                                            <td>$576.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-15.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            brian@exchange.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Nov 10, 2021</td>
                                                            <td>$629.00</td>
                                                            <td>
                                                                <span className="badge badge-light-danger fw-bolder px-4 py-3">
                                                                    Rejected
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                A
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Online*/}
                                                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                        {/*end::Online*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Robert Doe
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            robert@benko.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Oct 25, 2021</td>
                                                            <td>$497.00</td>
                                                            <td>
                                                                <span className="badge badge-light-success fw-bolder px-4 py-3">
                                                                    Approved
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/*begin::User*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="me-5 position-relative">
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-15.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <NavLink
                                                                            href
                                                                            className="fs-6 text-gray-800 text-hover-primary"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        <div className="fw-bold text-gray-400">
                                                                            brian@exchange.com
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}
                                                            </td>
                                                            <td>Jun 20, 2021</td>
                                                            <td>$972.00</td>
                                                            <td>
                                                                <span className="badge badge-light-warning fw-bolder px-4 py-3">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td className="text-end">
                                                                <NavLink to="#" className="btn btn-light btn-sm">
                                                                    View
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/*end::Body*/}
                                                </table>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Table container*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Card*/}
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
            <NewTargetModal />
            <ViewUserModal />
        </div>
    )
}

export default Project
