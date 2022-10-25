import React from 'react'
import { NavLink } from 'react-router-dom';

const List = () => {
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
                                            Users List
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
                                            <li className="breadcrumb-item text-gray-600">
                                                User Management
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Users</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Users List</li>
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
                                                id="kt_menu_61b9c7bda7074"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7bda7074"
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
                                    {/*begin::Card*/}
                                    <div className="card">
                                        {/*begin::Card header*/}
                                        <div className="card-header border-0 pt-6">
                                            {/*begin::Card title*/}
                                            <div className="card-title">
                                                {/*begin::Search*/}
                                                <div className="d-flex align-items-center position-relative my-1">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
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
                                                        data-kt-user-table-filter="search"
                                                        className="form-control form-control-solid w-250px ps-14"
                                                        placeholder="Search user"
                                                    />
                                                </div>
                                                {/*end::Search*/}
                                            </div>
                                            {/*begin::Card title*/}
                                            {/*begin::Card toolbar*/}
                                            <div className="card-toolbar">
                                                {/*begin::Toolbar*/}
                                                <div
                                                    className="d-flex justify-content-end"
                                                    data-kt-user-table-toolbar="base"
                                                >
                                                    {/*begin::Filter*/}
                                                    <button
                                                        type="button"
                                                        className="btn btn-light-primary me-3"
                                                        data-kt-menu-trigger="click"
                                                        data-kt-menu-placement="bottom-end"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    </button>
                                                    {/*begin::Menu 1*/}
                                                    <div
                                                        className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                                                        data-kt-menu="true"
                                                    >
                                                        {/*begin::Header*/}
                                                        <div className="px-7 py-5">
                                                            <div className="fs-5 text-dark fw-bolder">
                                                                Filter Options
                                                            </div>
                                                        </div>
                                                        {/*end::Header*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator border-gray-200" />
                                                        {/*end::Separator*/}
                                                        {/*begin::Content*/}
                                                        <div
                                                            className="px-7 py-5"
                                                            data-kt-user-table-filter="form"
                                                        >
                                                            {/*begin::Input group*/}
                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-bold">
                                                                    Role:
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid fw-bolder"
                                                                    data-kt-select2="true"
                                                                    data-placeholder="Select option"
                                                                    data-allow-clear="true"
                                                                    data-kt-user-table-filter="role"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option />
                                                                    <option value="Administrator">Administrator</option>
                                                                    <option value="Analyst">Analyst</option>
                                                                    <option value="Developer">Developer</option>
                                                                    <option value="Support">Support</option>
                                                                    <option value="Trial">Trial</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-bold">
                                                                    Two Step Verification:
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid fw-bolder"
                                                                    data-kt-select2="true"
                                                                    data-placeholder="Select option"
                                                                    data-allow-clear="true"
                                                                    data-kt-user-table-filter="two-step"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option />
                                                                    <option value="Enabled">Enabled</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Actions*/}
                                                            <div className="d-flex justify-content-end">
                                                                <button
                                                                    type="reset"
                                                                    className="btn btn-light btn-active-light-primary fw-bold me-2 px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="reset"
                                                                >
                                                                    Reset
                                                                </button>
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-primary fw-bold px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="filter"
                                                                >
                                                                    Apply
                                                                </button>
                                                            </div>
                                                            {/*end::Actions*/}
                                                        </div>
                                                        {/*end::Content*/}
                                                    </div>
                                                    {/*end::Menu 1*/}
                                                    {/*end::Filter*/}
                                                    {/*begin::Export*/}
                                                    <button
                                                        type="button"
                                                        className="btn btn-light-primary me-3"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_export_users"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x="12.75"
                                                                    y="4.25"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(90 12.75 4.25)"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                                                    fill="#C4C4C4"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Export
                                                    </button>
                                                    {/*end::Export*/}
                                                    {/*begin::Add user*/}
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_add_user"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.5"
                                                                    x="11.364"
                                                                    y="20.364"
                                                                    width={16}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 11.364 20.364)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="4.36396"
                                                                    y="11.364"
                                                                    width={16}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Add User
                                                    </button>
                                                    {/*end::Add user*/}
                                                </div>
                                                {/*end::Toolbar*/}
                                                {/*begin::Group actions*/}
                                                <div
                                                    className="d-flex justify-content-end align-items-center d-none"
                                                    data-kt-user-table-toolbar="selected"
                                                >
                                                    <div className="fw-bolder me-5">
                                                        <span
                                                            className="me-2"
                                                            data-kt-user-table-select="selected_count"
                                                        />
                                                        Selected
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        data-kt-user-table-select="delete_selected"
                                                    >
                                                        Delete Selected
                                                    </button>
                                                </div>
                                                {/*end::Group actions*/}
                                                {/*begin::Modal - Adjust Balance*/}
                                                <div
                                                    className="modal fade"
                                                    id="kt_modal_export_users"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                >
                                                    {/*begin::Modal dialog*/}
                                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                                        {/*begin::Modal content*/}
                                                        <div className="modal-content">
                                                            {/*begin::Modal header*/}
                                                            <div className="modal-header">
                                                                {/*begin::Modal title*/}
                                                                <h2 className="fw-bolder">Export Users</h2>
                                                                {/*end::Modal title*/}
                                                                {/*begin::Close*/}
                                                                <div
                                                                    className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                    data-kt-users-modal-action="close"
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
                                                            {/*end::Modal header*/}
                                                            {/*begin::Modal body*/}
                                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                                {/*begin::Form*/}
                                                                <form
                                                                    id="kt_modal_export_users_form"
                                                                    className="form"
                                                                    action="#"
                                                                >
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-10">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-6 fw-bold form-label mb-2">
                                                                            Select Roles:
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <select
                                                                            name="role"
                                                                            data-control="select2"
                                                                            data-placeholder="Select a role"
                                                                            data-hide-search="true"
                                                                            className="form-select form-select-solid fw-bolder"
                                                                        >
                                                                            <option />
                                                                            <option value="Administrator">
                                                                                Administrator
                                                                            </option>
                                                                            <option value="Analyst">Analyst</option>
                                                                            <option value="Developer">Developer</option>
                                                                            <option value="Support">Support</option>
                                                                            <option value="Trial">Trial</option>
                                                                        </select>
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-10">
                                                                        {/*begin::Label*/}
                                                                        <label className="required fs-6 fw-bold form-label mb-2">
                                                                            Select Export Format:
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <select
                                                                            name="format"
                                                                            data-control="select2"
                                                                            data-placeholder="Select a format"
                                                                            data-hide-search="true"
                                                                            className="form-select form-select-solid fw-bolder"
                                                                        >
                                                                            <option />
                                                                            <option value="excel">Excel</option>
                                                                            <option value="pdf">PDF</option>
                                                                            <option value="cvs">CVS</option>
                                                                            <option value="zip">ZIP</option>
                                                                        </select>
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Actions*/}
                                                                    <div className="text-center">
                                                                        <button
                                                                            type="reset"
                                                                            className="btn btn-light me-3"
                                                                            data-kt-users-modal-action="cancel"
                                                                        >
                                                                            Discard
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-primary"
                                                                            data-kt-users-modal-action="submit"
                                                                        >
                                                                            <span className="indicator-label">Submit</span>
                                                                            <span className="indicator-progress">
                                                                                Please wait...
                                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    {/*end::Actions*/}
                                                                </form>
                                                                {/*end::Form*/}
                                                            </div>
                                                            {/*end::Modal body*/}
                                                        </div>
                                                        {/*end::Modal content*/}
                                                    </div>
                                                    {/*end::Modal dialog*/}
                                                </div>
                                                {/*end::Modal - New Card*/}
                                                {/*begin::Modal - Add task*/}
                                                <div
                                                    className="modal fade"
                                                    id="kt_modal_add_user"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                >
                                                    {/*begin::Modal dialog*/}
                                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                                        {/*begin::Modal content*/}
                                                        <div className="modal-content">
                                                            {/*begin::Modal header*/}
                                                            <div
                                                                className="modal-header"
                                                                id="kt_modal_add_user_header"
                                                            >
                                                                {/*begin::Modal title*/}
                                                                <h2 className="fw-bolder">Add User</h2>
                                                                {/*end::Modal title*/}
                                                                {/*begin::Close*/}
                                                                <div
                                                                    className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                    data-kt-users-modal-action="close"
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
                                                            {/*end::Modal header*/}
                                                            {/*begin::Modal body*/}
                                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                                {/*begin::Form*/}
                                                                <form
                                                                    id="kt_modal_add_user_form"
                                                                    className="form"
                                                                    action="#"
                                                                >
                                                                    {/*begin::Scroll*/}
                                                                    <div
                                                                        className="d-flex flex-column scroll-y me-n7 pe-7"
                                                                        id="kt_modal_add_user_scroll"
                                                                        data-kt-scroll="true"
                                                                        data-kt-scroll-activate="{default: false, lg: true}"
                                                                        data-kt-scroll-max-height="auto"
                                                                        data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                                                        data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                                                        data-kt-scroll-offset="300px"
                                                                    >
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-7">
                                                                            {/*begin::Label*/}
                                                                            <label className="d-block fw-bold fs-6 mb-5">
                                                                                Avatar
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Image input*/}
                                                                            <div
                                                                                className="image-input image-input-outline"
                                                                                data-kt-image-input="true"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/blank.png)"
                                                                                }}
                                                                            >
                                                                                {/*begin::Preview existing avatar*/}
                                                                                <div
                                                                                    className="image-input-wrapper w-125px h-125px"
                                                                                    style={{
                                                                                        backgroundImage:
                                                                                            "url(assets/media/avatars/150-1.jpg)"
                                                                                    }}
                                                                                />
                                                                                {/*end::Preview existing avatar*/}
                                                                                {/*begin::Label*/}
                                                                                <label
                                                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                                    data-kt-image-input-action="change"
                                                                                    data-bs-toggle="tooltip"
                                                                                    title="Change avatar"
                                                                                >
                                                                                    <i className="bi bi-pencil-fill fs-7" />
                                                                                    {/*begin::Inputs*/}
                                                                                    <input
                                                                                        type="file"
                                                                                        name="avatar"
                                                                                        accept=".png, .jpg, .jpeg"
                                                                                    />
                                                                                    <input type="hidden" name="avatar_remove" />
                                                                                    {/*end::Inputs*/}
                                                                                </label>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Cancel*/}
                                                                                <span
                                                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                                    data-kt-image-input-action="cancel"
                                                                                    data-bs-toggle="tooltip"
                                                                                    title="Cancel avatar"
                                                                                >
                                                                                    <i className="bi bi-x fs-2" />
                                                                                </span>
                                                                                {/*end::Cancel*/}
                                                                                {/*begin::Remove*/}
                                                                                <span
                                                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                                    data-kt-image-input-action="remove"
                                                                                    data-bs-toggle="tooltip"
                                                                                    title="Remove avatar"
                                                                                >
                                                                                    <i className="bi bi-x fs-2" />
                                                                                </span>
                                                                                {/*end::Remove*/}
                                                                            </div>
                                                                            {/*end::Image input*/}
                                                                            {/*begin::Hint*/}
                                                                            <div className="form-text">
                                                                                Allowed file types: png, jpg, jpeg.
                                                                            </div>
                                                                            {/*end::Hint*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-7">
                                                                            {/*begin::Label*/}
                                                                            <label className="required fw-bold fs-6 mb-2">
                                                                                Full Name
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <input
                                                                                type="text"
                                                                                name="user_name"
                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                placeholder="Full name"
                                                                                defaultValue="Emma Smith"
                                                                            />
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-7">
                                                                            {/*begin::Label*/}
                                                                            <label className="required fw-bold fs-6 mb-2">
                                                                                Email
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <input
                                                                                type="email"
                                                                                name="user_email"
                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                placeholder="example@domain.com"
                                                                                defaultValue="e.smith@kpmg.com.au"
                                                                            />
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Input group*/}
                                                                        <div className="mb-7">
                                                                            {/*begin::Label*/}
                                                                            <label className="required fw-bold fs-6 mb-5">
                                                                                Role
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Roles*/}
                                                                            {/*begin::Input row*/}
                                                                            <div className="d-flex fv-row">
                                                                                {/*begin::Radio*/}
                                                                                <div className="form-check form-check-custom form-check-solid">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input me-3"
                                                                                        name="user_role"
                                                                                        type="radio"
                                                                                        defaultValue={0}
                                                                                        id="kt_modal_update_role_option_0"
                                                                                        defaultChecked="checked"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <label
                                                                                        className="form-check-label"
                                                                                        htmlFor="kt_modal_update_role_option_0"
                                                                                    >
                                                                                        <div className="fw-bolder text-gray-800">
                                                                                            Administrator
                                                                                        </div>
                                                                                        <div className="text-gray-600">
                                                                                            Best for business owners and company
                                                                                            administrators
                                                                                        </div>
                                                                                    </label>
                                                                                    {/*end::Label*/}
                                                                                </div>
                                                                                {/*end::Radio*/}
                                                                            </div>
                                                                            {/*end::Input row*/}
                                                                            <div className="separator separator-dashed my-5" />
                                                                            {/*begin::Input row*/}
                                                                            <div className="d-flex fv-row">
                                                                                {/*begin::Radio*/}
                                                                                <div className="form-check form-check-custom form-check-solid">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input me-3"
                                                                                        name="user_role"
                                                                                        type="radio"
                                                                                        defaultValue={1}
                                                                                        id="kt_modal_update_role_option_1"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <label
                                                                                        className="form-check-label"
                                                                                        htmlFor="kt_modal_update_role_option_1"
                                                                                    >
                                                                                        <div className="fw-bolder text-gray-800">
                                                                                            Developer
                                                                                        </div>
                                                                                        <div className="text-gray-600">
                                                                                            Best for developers or people primarily
                                                                                            using the API
                                                                                        </div>
                                                                                    </label>
                                                                                    {/*end::Label*/}
                                                                                </div>
                                                                                {/*end::Radio*/}
                                                                            </div>
                                                                            {/*end::Input row*/}
                                                                            <div className="separator separator-dashed my-5" />
                                                                            {/*begin::Input row*/}
                                                                            <div className="d-flex fv-row">
                                                                                {/*begin::Radio*/}
                                                                                <div className="form-check form-check-custom form-check-solid">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input me-3"
                                                                                        name="user_role"
                                                                                        type="radio"
                                                                                        defaultValue={2}
                                                                                        id="kt_modal_update_role_option_2"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <label
                                                                                        className="form-check-label"
                                                                                        htmlFor="kt_modal_update_role_option_2"
                                                                                    >
                                                                                        <div className="fw-bolder text-gray-800">
                                                                                            Analyst
                                                                                        </div>
                                                                                        <div className="text-gray-600">
                                                                                            Best for people who need full access to
                                                                                            analytics data, but don't need to update
                                                                                            business settings
                                                                                        </div>
                                                                                    </label>
                                                                                    {/*end::Label*/}
                                                                                </div>
                                                                                {/*end::Radio*/}
                                                                            </div>
                                                                            {/*end::Input row*/}
                                                                            <div className="separator separator-dashed my-5" />
                                                                            {/*begin::Input row*/}
                                                                            <div className="d-flex fv-row">
                                                                                {/*begin::Radio*/}
                                                                                <div className="form-check form-check-custom form-check-solid">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input me-3"
                                                                                        name="user_role"
                                                                                        type="radio"
                                                                                        defaultValue={3}
                                                                                        id="kt_modal_update_role_option_3"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <label
                                                                                        className="form-check-label"
                                                                                        htmlFor="kt_modal_update_role_option_3"
                                                                                    >
                                                                                        <div className="fw-bolder text-gray-800">
                                                                                            Support
                                                                                        </div>
                                                                                        <div className="text-gray-600">
                                                                                            Best for employees who regularly refund
                                                                                            payments and respond to disputes
                                                                                        </div>
                                                                                    </label>
                                                                                    {/*end::Label*/}
                                                                                </div>
                                                                                {/*end::Radio*/}
                                                                            </div>
                                                                            {/*end::Input row*/}
                                                                            <div className="separator separator-dashed my-5" />
                                                                            {/*begin::Input row*/}
                                                                            <div className="d-flex fv-row">
                                                                                {/*begin::Radio*/}
                                                                                <div className="form-check form-check-custom form-check-solid">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input me-3"
                                                                                        name="user_role"
                                                                                        type="radio"
                                                                                        defaultValue={4}
                                                                                        id="kt_modal_update_role_option_4"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <label
                                                                                        className="form-check-label"
                                                                                        htmlFor="kt_modal_update_role_option_4"
                                                                                    >
                                                                                        <div className="fw-bolder text-gray-800">
                                                                                            Trial
                                                                                        </div>
                                                                                        <div className="text-gray-600">
                                                                                            Best for people who need to preview
                                                                                            content data, but don't need to make any
                                                                                            updates
                                                                                        </div>
                                                                                    </label>
                                                                                    {/*end::Label*/}
                                                                                </div>
                                                                                {/*end::Radio*/}
                                                                            </div>
                                                                            {/*end::Input row*/}
                                                                            {/*end::Roles*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                    </div>
                                                                    {/*end::Scroll*/}
                                                                    {/*begin::Actions*/}
                                                                    <div className="text-center pt-15">
                                                                        <button
                                                                            type="reset"
                                                                            className="btn btn-light me-3"
                                                                            data-kt-users-modal-action="cancel"
                                                                        >
                                                                            Discard
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-primary"
                                                                            data-kt-users-modal-action="submit"
                                                                        >
                                                                            <span className="indicator-label">Submit</span>
                                                                            <span className="indicator-progress">
                                                                                Please wait...
                                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    {/*end::Actions*/}
                                                                </form>
                                                                {/*end::Form*/}
                                                            </div>
                                                            {/*end::Modal body*/}
                                                        </div>
                                                        {/*end::Modal content*/}
                                                    </div>
                                                    {/*end::Modal dialog*/}
                                                </div>
                                                {/*end::Modal - Add task*/}
                                            </div>
                                            {/*end::Card toolbar*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body py-4">
                                            {/*begin::Table*/}
                                            <table
                                                className="table align-middle table-row-dashed fs-6 gy-5"
                                                id="kt_table_users"
                                            >
                                                {/*begin::Table head*/}
                                                <thead>
                                                    {/*begin::Table row*/}
                                                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                                        <th className="w-10px pe-2">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    data-kt-check="true"
                                                                    data-kt-check-target="#kt_table_users .form-check-input"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </th>
                                                        <th className="min-w-125px">User</th>
                                                        <th className="min-w-125px">Role</th>
                                                        <th className="min-w-125px">Last login</th>
                                                        <th className="min-w-125px">Two-step</th>
                                                        <th className="min-w-125px">Joined Date</th>
                                                        <th className="text-end min-w-100px">Actions</th>
                                                    </tr>
                                                    {/*end::Table row*/}
                                                </thead>
                                                {/*end::Table head*/}
                                                {/*begin::Table body*/}
                                                <tbody className="text-gray-600 fw-bold">
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-1.jpg"
                                                                            alt="Emma Smith"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Emma Smith
                                                                </NavLink>
                                                                <span>e.smith@kpmg.com.au</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Administrator</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                Yesterday
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>25 Oct 2021, 2:40 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-danger text-danger">
                                                                        M
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Melody Macy
                                                                </NavLink>
                                                                <span>melody@altbox.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Analyst</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                20 mins ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>25 Jul 2021, 9:23 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                            alt="Max Smith"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Max Smith
                                                                </NavLink>
                                                                <span>max@kt.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Developer</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                3 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>25 Oct 2021, 10:10 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-4.jpg"
                                                                            alt="Sean Bean"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Sean Bean
                                                                </NavLink>
                                                                <span>sean@dellito.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Support</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                5 hours ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>10 Mar 2021, 6:43 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                            alt="Brian Cox"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Brian Cox
                                                                </NavLink>
                                                                <span>brian@exchange.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Developer</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                2 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>05 May 2021, 5:20 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-warning text-warning">
                                                                        C
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Mikaela Collins
                                                                </NavLink>
                                                                <span>mikaela@pexcom.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Administrator</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                5 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>24 Jun 2021, 8:43 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-8.jpg"
                                                                            alt="Francis Mitcham"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Francis Mitcham
                                                                </NavLink>
                                                                <span>f.mitcham@kpmg.com.au</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Trial</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                3 weeks ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>10 Mar 2021, 5:30 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-danger text-danger">
                                                                        O
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Olivia Wild
                                                                </NavLink>
                                                                <span>olivia@corpmail.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Administrator</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                Yesterday
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>25 Oct 2021, 6:43 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-primary text-primary">
                                                                        N
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Neil Owen
                                                                </NavLink>
                                                                <span>owen.neil@gmail.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Analyst</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                20 mins ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>20 Jun 2021, 10:30 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-6.jpg"
                                                                            alt="Dan Wilson"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Dan Wilson
                                                                </NavLink>
                                                                <span>dam@consilting.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Developer</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                3 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>10 Nov 2021, 5:30 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-danger text-danger">
                                                                        E
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Emma Bold
                                                                </NavLink>
                                                                <span>emma@intenso.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Support</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                5 hours ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>10 Mar 2021, 5:20 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-7.jpg"
                                                                            alt="Ana Crown"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Ana Crown
                                                                </NavLink>
                                                                <span>ana.cf@limtel.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Developer</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                2 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>15 Apr 2021, 10:10 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-info text-info">
                                                                        A
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Robert Doe
                                                                </NavLink>
                                                                <span>robert@benko.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Administrator</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                5 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>05 May 2021, 11:05 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-17.jpg"
                                                                            alt="John Miller"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    John Miller
                                                                </NavLink>
                                                                <span>miller@mapple.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Trial</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                3 weeks ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>20 Jun 2021, 2:40 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-success text-success">
                                                                        L
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Lucy Kunic
                                                                </NavLink>
                                                                <span>lucy.m@fentech.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Administrator</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                Yesterday
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>15 Apr 2021, 5:30 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-danger text-danger">
                                                                        M
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Melody Macy
                                                                </NavLink>
                                                                <span>melody@altbox.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Analyst</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                20 mins ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>20 Jun 2021, 11:30 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-26.jpg"
                                                                            alt="Max Smith"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Max Smith
                                                                </NavLink>
                                                                <span>max@kt.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Developer</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                3 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>20 Dec 2021, 2:40 pm</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-4.jpg"
                                                                            alt="Sean Bean"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Sean Bean
                                                                </NavLink>
                                                                <span>sean@dellito.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Support</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                5 hours ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>05 May 2021, 10:30 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-15.jpg"
                                                                            alt="Brian Cox"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Brian Cox
                                                                </NavLink>
                                                                <span>brian@exchange.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Developer</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                2 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td>
                                                            <div className="badge badge-light-success fw-bolder">
                                                                Enabled
                                                            </div>
                                                        </td>
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>24 Jun 2021, 6:43 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label fs-3 bg-light-warning text-warning">
                                                                        C
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Mikaela Collins
                                                                </NavLink>
                                                                <span>mikaela@pexcom.com</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Administrator</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                5 days ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>21 Feb 2021, 11:05 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::User=*/}
                                                        <td className="d-flex align-items-center">
                                                            {/*begin:: Avatar */}
                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                <NavLink to="../../demo14/dist/apps/user-management/users/view.html">
                                                                    <div className="symbol-label">
                                                                        <img
                                                                            src="/assets/media/avatars/150-8.jpg"
                                                                            alt="Francis Mitcham"
                                                                            className="w-100"
                                                                        />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::User details*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                    className="text-gray-800 text-hover-primary mb-1"
                                                                >
                                                                    Francis Mitcham
                                                                </NavLink>
                                                                <span>f.mitcham@kpmg.com.au</span>
                                                            </div>
                                                            {/*begin::User details*/}
                                                        </td>
                                                        {/*end::User=*/}
                                                        {/*begin::Role=*/}
                                                        <td>Trial</td>
                                                        {/*end::Role=*/}
                                                        {/*begin::Last login=*/}
                                                        <td>
                                                            <div className="badge badge-light fw-bolder">
                                                                3 weeks ago
                                                            </div>
                                                        </td>
                                                        {/*end::Last login=*/}
                                                        {/*begin::Two step=*/}
                                                        <td />
                                                        {/*end::Two step=*/}
                                                        {/*begin::Joined*/}
                                                        <td>22 Sep 2021, 11:30 am</td>
                                                        {/*begin::Joined*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light btn-active-light-primary btn-sm"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/user-management/users/view.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-users-table-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                </tbody>
                                                {/*end::Table body*/}
                                            </table>
                                            {/*end::Table*/}
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

        </div>
    )
}

export default List
