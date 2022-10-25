import React from 'react'
import NewTargetModal from '../../../CommonElements/NewTargetModal'
import ViewUserModal from '../../../CommonElements/ViewUserModal'
import { NavLink } from 'react-router-dom';

const Budget = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="page d-flex flex-row flex-column-fluid">
                    {/*begin::Wrapper*/}
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        {/*begin::Content wrapper*/}
                        <div className="d-flex flex-column-fluid">
                            {/*begin::Aside*/}
                            <div
                                id="kt_aside"
                                className="aside card"
                                data-kt-drawer="true"
                                data-kt-drawer-name="aside"
                                data-kt-drawer-activate="{default: true, lg: false}"
                                data-kt-drawer-overlay="true"
                                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                                data-kt-drawer-direction="start"
                                data-kt-drawer-toggle="#kt_aside_toggle"
                            >
                                {/*begin::Footer*/}
                                <div
                                    className="aside-footer flex-column-auto pt-5 pb-7 px-5"
                                    id="kt_aside_footer"
                                >
                                    <NavLink
                                        to="../../demo14/dist/documentation/getting-started.html"
                                        className="btn btn-bg-light btn-color-gray-500 btn-active-color-gray-900 w-100"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-dismiss-="click"
                                        title="200+ in-house components and 3rd-party plugins"
                                    >
                                        <span className="btn-label">Docs &amp; Components</span>
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                                        <span className="svg-icon btn-icon svg-icon-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    opacity="0.3"
                                                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                                    fill="black"
                                                />
                                                <rect x={7} y={17} width={6} height={2} rx={1} fill="black" />
                                                <rect
                                                    x={7}
                                                    y={12}
                                                    width={10}
                                                    height={2}
                                                    rx={1}
                                                    fill="black"
                                                />
                                                <rect x={7} y={7} width={6} height={2} rx={1} fill="black" />
                                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </NavLink>
                                </div>
                                {/*end::Footer*/}
                            </div>
                            {/*end::Aside*/}
                            {/*begin::Container*/}
                            <div className="d-flex flex-column flex-column-fluid container-fluid">
                                {/*begin::Toolbar*/}
                                <div className="toolbar mb-5 mb-lg-7" id="kt_toolbar">
                                    {/*begin::Page title*/}
                                    <div className="page-title d-flex flex-column me-3">
                                        {/*begin::Title*/}
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">
                                            Project Budget
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
                                            <li className="breadcrumb-item text-gray-500">Budget</li>
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
                                                id="kt_menu_61b9c7b1ed7e9"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7b1ed7e9"
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
                                    <div className="card mb-10">
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
                                                            className="nav-link text-active-primary me-6 active"
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
                                    {/*begin::Form*/}
                                    <form className="form">
                                        {/*begin::Card*/}
                                        <div className="card">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                {/*begin::Card header*/}
                                                <div className="card-title fs-3 fw-bolder">
                                                    Project Budget
                                                </div>
                                                {/*end::Card header*/}
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body">
                                                {/*begin::Row*/}
                                                <div className="row mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-3">
                                                        <div className="fs-6 fw-bold mt-2 mb-3">
                                                            Current Status
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-9">
                                                        {/*begin::Progress*/}
                                                        <div className="d-flex flex-column">
                                                            <div className="d-flex justify-content-between w-100 fs-4 fw-bolder mb-3">
                                                                <span>Budget</span>
                                                                <span>$22,300 of 36,000 Used</span>
                                                            </div>
                                                            <div className="h-8px bg-light rounded mb-3">
                                                                <div
                                                                    className="bg-success rounded h-8px"
                                                                    role="progressbar"
                                                                    style={{ width: "68%" }}
                                                                    aria-valuenow={50}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                            <div className="fw-bold text-gray-600">
                                                                14 Targets are remaining
                                                            </div>
                                                        </div>
                                                        {/*end::Progress*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                                {/*begin::Row*/}
                                                <div className="row mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-3">
                                                        <div className="fs-6 fw-bold mt-2 mb-3">
                                                            Usage Character
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-9">
                                                        {/*begin::Row*/}
                                                        <div
                                                            className="row g-9"
                                                            data-kt-buttons="true"
                                                            data-kt-buttons-target="[data-kt-button]"
                                                        >
                                                            {/*begin::Col*/}
                                                            <div className="col-md-4 col-lg-12 col-xxl-4">
                                                                <label
                                                                    className="btn btn-outline btn-outline-dashed btn-outline-default active d-flex text-start p-6"
                                                                    data-kt-button="true"
                                                                >
                                                                    {/*begin::Radio button*/}
                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="usage"
                                                                            defaultValue={1}
                                                                            defaultChecked="checked"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio button*/}
                                                                    <span className="ms-5">
                                                                        <span className="fs-4 fw-bolder mb-1 d-block">
                                                                            Precise Usage
                                                                        </span>
                                                                        <span className="fw-bold fs-7 text-gray-600">
                                                                            Withdraw money to your bank account per
                                                                            transaction under $50,000 budget
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-md-4 col-lg-12 col-xxl-4">
                                                                <label
                                                                    className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6"
                                                                    data-kt-button="true"
                                                                >
                                                                    {/*begin::Radio button*/}
                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="usage"
                                                                            defaultValue={2}
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio button*/}
                                                                    <span className="ms-5">
                                                                        <span className="fs-4 fw-bolder mb-1 d-block">
                                                                            Normal Usage
                                                                        </span>
                                                                        <span className="fw-bold fs-7 text-gray-600">
                                                                            Withdraw money to your bank account per
                                                                            transaction under $50,000 budget
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-md-4 col-lg-12 col-xxl-4">
                                                                <label
                                                                    className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6"
                                                                    data-kt-button="true"
                                                                >
                                                                    {/*begin::Radio button*/}
                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="usage"
                                                                            defaultValue={3}
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio button*/}
                                                                    <span className="ms-5">
                                                                        <span className="fs-4 fw-bolder mb-1 d-block">
                                                                            Extreme Usage
                                                                        </span>
                                                                        <span className="fw-bold fs-7 text-gray-600">
                                                                            Withdraw money to your bank account per
                                                                            transaction under $50,000 budget
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Row*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                                {/*begin::Row*/}
                                                <div className="row mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-3">
                                                        <div className="fs-6 fw-bold mt-2 mb-3">Budget Notes</div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-9">
                                                        <textarea
                                                            name="notes"
                                                            className="form-control form-control-solid"
                                                            rows={5}
                                                            defaultValue={
                                                                "Organize your thoughts with an outline. Here’s the outlining strategy I use. I promise it works like a charm. Not only will it make writing your blog post easier, it’ll help you make your message"
                                                            }
                                                        />
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                                {/*begin::Row*/}
                                                <div className="row mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-3">
                                                        <div className="fs-6 fw-bold mt-2 mb-3">
                                                            Manage Budget
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-9">
                                                        {/*begin::Dialer*/}
                                                        <div
                                                            className="position-relative w-md-300px"
                                                            data-kt-dialer="true"
                                                            data-kt-dialer-min={1000}
                                                            data-kt-dialer-max={50000}
                                                            data-kt-dialer-step={1000}
                                                            data-kt-dialer-prefix="$"
                                                            data-kt-dialer-decimals={2}
                                                        >
                                                            {/*begin::Decrease control*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                                                data-kt-dialer-control="decrease"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                <span className="svg-icon svg-icon-1">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={2}
                                                                            y={2}
                                                                            width={20}
                                                                            height={20}
                                                                            rx={5}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x="6.0104"
                                                                            y="10.9247"
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Decrease control*/}
                                                            {/*begin::Input control*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid border-0 ps-12"
                                                                data-kt-dialer-control="input"
                                                                placeholder="Amount"
                                                                name="manageBudget"
                                                                readOnly="readonly"
                                                                defaultValue="$36,000.00"
                                                            />
                                                            {/*end::Input control*/}
                                                            {/*begin::Increase control*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                                                data-kt-dialer-control="increase"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                                                <span className="svg-icon svg-icon-1">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={2}
                                                                            y={2}
                                                                            width={20}
                                                                            height={20}
                                                                            rx={5}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x="10.8891"
                                                                            y="17.8033"
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            transform="rotate(-90 10.8891 17.8033)"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x="6.01041"
                                                                            y="10.9247"
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Increase control*/}
                                                        </div>
                                                        {/*end::Dialer*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                                {/*begin::Row*/}
                                                <div className="row mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-3">
                                                        <div className="fs-6 fw-bold mt-2 mb-3">
                                                            Overuse Notifications
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-9">
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex fw-bold h-100">
                                                            {/*begin::Checkbox*/}
                                                            <div className="form-check form-check-custom form-check-solid me-9">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    id="email"
                                                                />
                                                                <label
                                                                    className="form-check-label ms-3"
                                                                    htmlFor="email"
                                                                >
                                                                    Email
                                                                </label>
                                                            </div>
                                                            {/*end::Checkbox*/}
                                                            {/*begin::Checkbox*/}
                                                            <div className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    id="phone"
                                                                    defaultChecked="checked"
                                                                />
                                                                <label
                                                                    className="form-check-label ms-3"
                                                                    htmlFor="phone"
                                                                >
                                                                    Phone
                                                                </label>
                                                            </div>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                                {/*begin::Row*/}
                                                <div className="row">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-3">
                                                        <div className="fs-6 fw-bold mt-2 mb-3">
                                                            Allow Changes
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-9">
                                                        {/*begin::Switch*/}
                                                        <div className="form-check form-switch form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                                id="allowchanges"
                                                                defaultChecked="checked"
                                                            />
                                                            <label
                                                                className="form-check-label fw-bold text-gray-400 ms-3"
                                                                htmlFor="allowchanges"
                                                            >
                                                                Allowed
                                                            </label>
                                                        </div>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*end::Card body*/}
                                            {/*begin::Card footer*/}
                                            <div className="card-footer d-flex justify-content-end py-6">
                                                <button
                                                    type="reset"
                                                    className="btn btn-light btn-active-light-primary me-2"
                                                >
                                                    Discard
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    Save Changes
                                                </button>
                                            </div>
                                            {/*end::Card footer*/}
                                        </div>
                                        {/*end::Card*/}
                                    </form>
                                    {/*end:Form*/}
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

export default Budget
