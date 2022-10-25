import React from 'react'
import NewTargetModal from '../../../CommonElements/NewTargetModal'
import { NavLink } from 'react-router-dom';

const Users = () => {
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
                                            Project Users
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
                                            <li className="breadcrumb-item text-gray-500">Users</li>
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
                                                id="kt_menu_61b9c7b2c09ae"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7b2c09ae"
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
                                    <div className="card mb-8">
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
                                                            className="nav-link text-active-primary me-6"
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
                                                            className="nav-link text-active-primary me-6 active"
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
                                    {/*begin::Toolbar*/}
                                    <div className="d-flex flex-wrap flex-stack pb-7">
                                        {/*begin::Title*/}
                                        <div className="d-flex flex-wrap align-items-center my-1">
                                            <h3 className="fw-bolder me-5 my-1">Users (38)</h3>
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
                                                    className="form-control form-control-sm border-body bg-body w-150px ps-10"
                                                    placeholder="Search"
                                                />
                                            </div>
                                            {/*end::Search*/}
                                        </div>
                                        {/*end::Title*/}
                                        {/*begin::Controls*/}
                                        <div className="d-flex flex-wrap my-1">
                                            {/*begin::Tab nav*/}
                                            <ul className="nav nav-pills me-6 mb-2 mb-sm-0">
                                                <li className="nav-item m-0">
                                                    <NavLink
                                                        className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active"
                                                        data-bs-toggle="tab"
                                                        to="#kt_project_users_card_pane"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item m-0">
                                                    <NavLink
                                                        className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary"
                                                        data-bs-toggle="tab"
                                                        to="#kt_project_users_table_pane"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </NavLink>
                                                </li>
                                            </ul>
                                            {/*end::Tab nav*/}
                                            {/*begin::Actions*/}
                                            <div className="d-flex my-0">
                                                {/*begin::Select*/}
                                                <select
                                                    name="status"
                                                    data-control="select2"
                                                    data-hide-search="true"
                                                    data-placeholder="Filter"
                                                    className="form-select form-select-sm border-body bg-body w-150px me-5"
                                                >
                                                    <option value={1}>Recently Updated</option>
                                                    <option value={2}>Last Month</option>
                                                    <option value={3}>Last Quarter</option>
                                                    <option value={4}>Last Year</option>
                                                </select>
                                                {/*end::Select*/}
                                                {/*begin::Select*/}
                                                <select
                                                    name="status"
                                                    data-control="select2"
                                                    data-hide-search="true"
                                                    data-placeholder="Export"
                                                    className="form-select form-select-sm border-body bg-body w-100px"
                                                >
                                                    <option value={1}>Excel</option>
                                                    <option value={1}>PDF</option>
                                                    <option value={2}>Print</option>
                                                </select>
                                                {/*end::Select*/}
                                            </div>
                                            {/*end::Actions*/}
                                        </div>
                                        {/*end::Controls*/}
                                    </div>
                                    {/*end::Toolbar*/}
                                    {/*begin::Tab Content*/}
                                    <div className="tab-content">
                                        {/*begin::Tab pane*/}
                                        <div
                                            id="kt_project_users_card_pane"
                                            className="tab-pane fade show active"
                                        >
                                            {/*begin::Row*/}
                                            <div className="row g-6 g-xl-9">
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <img
                                                                    src="/assets/media//avatars/150-3.jpg"
                                                                    alt="image"
                                                                />
                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Karina Clark
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Art Director at Novica Co.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <span className="symbol-label fs-2x fw-bold text-primary bg-light-primary">
                                                                    S
                                                                </span>
                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Sean Bean
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Developer at Loop Inc
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <img
                                                                    src="/assets/media//avatars/150-2.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Alan Johnson
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Web Designer at Nextop Ltd.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <img
                                                                    src="/assets/media//avatars/150-11.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Robert Doe
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Marketing Analytic at Avito Ltd.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <img
                                                                    src="/assets/media//avatars/150-1.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Olivia Wild
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Art Director at Seal Inc.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <span className="symbol-label fs-2x fw-bold text-warning bg-light-warning">
                                                                    A
                                                                </span>
                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Adam Williams
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                System Arcitect at Wolto Co.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <span className="symbol-label fs-2x fw-bold text-info bg-light-info">
                                                                    P
                                                                </span>
                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Peter Marcus
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Art Director at Novica Co.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <span className="symbol-label fs-2x fw-bold text-success bg-light-success">
                                                                    N
                                                                </span>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Neil Owen
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Accountant at Numbers Co.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-md-6 col-xxl-4">
                                                    {/*begin::Card*/}
                                                    <div className="card">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                                <img
                                                                    src="/assets/media//avatars/150-7.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                            >
                                                                Benjamin Jacob
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Position*/}
                                                            <div className="fw-bold text-gray-400 mb-6">
                                                                Art Director at Novica Co.
                                                            </div>
                                                            {/*end::Position*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-center flex-wrap">
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $14,560
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">
                                                                        Earnings
                                                                    </div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        23
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Tasks</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                                {/*begin::Stats*/}
                                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                                    <div className="fs-6 fw-bolder text-gray-700">
                                                                        $236,400
                                                                    </div>
                                                                    <div className="fw-bold text-gray-400">Sales</div>
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end::Col*/}
                                            </div>
                                            {/*end::Row*/}
                                            {/*begin::Pagination*/}
                                            <div className="d-flex flex-stack flex-wrap pt-10">
                                                <div className="fs-6 fw-bold text-gray-700">
                                                    Showing 1 to 10 of 50 entries
                                                </div>
                                                {/*begin::Pages*/}
                                                <ul className="pagination">
                                                    <li className="page-item previous">
                                                        <NavLink to="#" className="page-link">
                                                            <i className="previous" />
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item active">
                                                        <NavLink to="#" className="page-link">
                                                            1
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item">
                                                        <NavLink to="#" className="page-link">
                                                            2
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item">
                                                        <NavLink to="#" className="page-link">
                                                            3
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item">
                                                        <NavLink to="#" className="page-link">
                                                            4
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item">
                                                        <NavLink to="#" className="page-link">
                                                            5
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item">
                                                        <NavLink to="#" className="page-link">
                                                            6
                                                        </NavLink>
                                                    </li>
                                                    <li className="page-item next">
                                                        <NavLink to="#" className="page-link">
                                                            <i className="next" />
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                                {/*end::Pages*/}
                                            </div>
                                            {/*end::Pagination*/}
                                        </div>
                                        {/*end::Tab pane*/}
                                        {/*begin::Tab pane*/}
                                        <div id="kt_project_users_table_pane" className="tab-pane fade">
                                            {/*begin::Card*/}
                                            <div className="card card-flush">
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table
                                                            id="kt_project_users_table"
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Emma Smith
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    e.smith@kpmg.com.au
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Nov 10, 2021</td>
                                                                    <td>$409.00</td>
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
                                                                                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                        M
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Melody Macy
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    melody@altbox.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Sep 22, 2021</td>
                                                                    <td>$402.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Max Smith
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    max@kt.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Oct 25, 2021</td>
                                                                    <td>$455.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Sean Bean
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    sean@dellito.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Feb 21, 2021</td>
                                                                    <td>$906.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Brian Cox
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    brian@exchange.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jul 25, 2021</td>
                                                                    <td>$498.00</td>
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
                                                                                    <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                                                        C
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Mikaela Collins
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    mikaela@pexcom.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Feb 21, 2021</td>
                                                                    <td>$740.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Francis Mitcham
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    f.mitcham@kpmg.com.au
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>May 05, 2021</td>
                                                                    <td>$432.00</td>
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
                                                                                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                        O
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Olivia Wild
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    olivia@corpmail.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Feb 21, 2021</td>
                                                                    <td>$633.00</td>
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
                                                                                    <span className="symbol-label bg-light-primary text-primary fw-bold">
                                                                                        N
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Neil Owen
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    owen.neil@gmail.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Dec 20, 2021</td>
                                                                    <td>$843.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Dan Wilson
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    dam@consilting.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Sep 22, 2021</td>
                                                                    <td>$492.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Emma Bold
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    emma@intenso.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Nov 10, 2021</td>
                                                                    <td>$659.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Ana Crown
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    ana.cf@limtel.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Mar 10, 2021</td>
                                                                    <td>$504.00</td>
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
                                                                                    <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                        A
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Robert Doe
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    robert@benko.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jun 20, 2021</td>
                                                                    <td>$973.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    John Miller
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    miller@mapple.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Mar 10, 2021</td>
                                                                    <td>$719.00</td>
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
                                                                                    <span className="symbol-label bg-light-success text-success fw-bold">
                                                                                        L
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Lucy Kunic
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    lucy.m@fentech.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Mar 10, 2021</td>
                                                                    <td>$575.00</td>
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
                                                                                        src="/assets/media/avatars/150-10.jpg"
                                                                                    />
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Ethan Wilder
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    ethan@loop.com.au
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Feb 21, 2021</td>
                                                                    <td>$680.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Sean Bean
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    sean@dellito.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Dec 20, 2021</td>
                                                                    <td>$573.00</td>
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
                                                                                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                        M
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Melody Macy
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    melody@altbox.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jun 24, 2021</td>
                                                                    <td>$933.00</td>
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
                                                                                        O
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Olivia Wild
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    olivia@corpmail.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Oct 25, 2021</td>
                                                                    <td>$941.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Ana Crown
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    ana.cf@limtel.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>May 05, 2021</td>
                                                                    <td>$835.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Robert Doe
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    robert@benko.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jun 24, 2021</td>
                                                                    <td>$416.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Mikaela Collins
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    mikaela@pexcom.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jul 25, 2021</td>
                                                                    <td>$505.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Ana Crown
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    ana.cf@limtel.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Sep 22, 2021</td>
                                                                    <td>$977.00</td>
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
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Sean Bean
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    sean@dellito.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Dec 20, 2021</td>
                                                                    <td>$441.00</td>
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
                                                                                    <span className="symbol-label bg-light-info text-info fw-bold">
                                                                                        A
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Robert Doe
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    robert@benko.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jul 25, 2021</td>
                                                                    <td>$794.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Melody Macy
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    melody@altbox.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Jul 25, 2021</td>
                                                                    <td>$894.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Lucy Kunic
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    lucy.m@fentech.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Aug 19, 2021</td>
                                                                    <td>$469.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Mikaela Collins
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    mikaela@pexcom.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Nov 10, 2021</td>
                                                                    <td>$630.00</td>
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
                                                                                        M
                                                                                    </span>
                                                                                </div>
                                                                                {/*end::Avatar*/}
                                                                                {/*begin::Online*/}
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Melody Macy
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    melody@altbox.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Nov 10, 2021</td>
                                                                    <td>$422.00</td>
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
                                                                                <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
                                                                                {/*end::Online*/}
                                                                            </div>
                                                                            {/*end::Wrapper*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <NavLink
                                                                                    href
                                                                                    className="mb-1 text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Lucy Kunic
                                                                                </NavLink>
                                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                                    lucy.m@fentech.com
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </td>
                                                                    <td>Mar 10, 2021</td>
                                                                    <td>$936.00</td>
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
                                        {/*end::Tab pane*/}
                                    </div>
                                    {/*end::Tab Content*/}
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
            <NewTargetModal />
        </div>
    )
}

export default Users;