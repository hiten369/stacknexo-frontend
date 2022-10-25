import React from 'react'
import { NavLink } from 'react-router-dom';

const Permissions = () => {
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
                                            Permissions List
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
                                            <li className="breadcrumb-item text-gray-500">Permissions</li>
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
                                                id="kt_menu_61b9c7c251a5b"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7c251a5b"
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
                                    <div className="card card-flush">
                                        {/*begin::Card header*/}
                                        <div className="card-header mt-6">
                                            {/*begin::Card title*/}
                                            <div className="card-title">
                                                {/*begin::Search*/}
                                                <div className="d-flex align-items-center position-relative my-1 me-5">
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
                                                        data-kt-permissions-table-filter="search"
                                                        className="form-control form-control-solid w-250px ps-15"
                                                        placeholder="Search Permissions"
                                                    />
                                                </div>
                                                {/*end::Search*/}
                                            </div>
                                            {/*end::Card title*/}
                                            {/*begin::Card toolbar*/}
                                            <div className="card-toolbar">
                                                {/*begin::Button*/}
                                                <button
                                                    type="button"
                                                    className="btn btn-light-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_add_permission"
                                                >
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                                    <span className="svg-icon svg-icon-3">
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
                                                    {/*end::Svg Icon*/}Add Permission
                                                </button>
                                                {/*end::Button*/}
                                            </div>
                                            {/*end::Card toolbar*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body pt-0">
                                            {/*begin::Table*/}
                                            <table
                                                className="table align-middle table-row-dashed fs-6 gy-5 mb-0"
                                                id="kt_permissions_table"
                                            >
                                                {/*begin::Table head*/}
                                                <thead>
                                                    {/*begin::Table row*/}
                                                    <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                        <th className="min-w-125px">Name</th>
                                                        <th className="min-w-250px">Assigned to</th>
                                                        <th className="min-w-125px">Created Date</th>
                                                        <th className="text-end min-w-100px">Actions</th>
                                                    </tr>
                                                    {/*end::Table row*/}
                                                </thead>
                                                {/*end::Table head*/}
                                                {/*begin::Table body*/}
                                                <tbody className="fw-bold text-gray-600">
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>User Management</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>24 Jun 2021, 5:30 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Content Management</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-danger fs-7 m-1"
                                                            >
                                                                Developer
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-success fs-7 m-1"
                                                            >
                                                                Analyst
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-info fs-7 m-1"
                                                            >
                                                                Support
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-warning fs-7 m-1"
                                                            >
                                                                Trial
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>10 Mar 2021, 5:20 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Financial Management</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-success fs-7 m-1"
                                                            >
                                                                Analyst
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>20 Dec 2021, 8:43 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Reporting</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-success fs-7 m-1"
                                                            >
                                                                Analyst
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>24 Jun 2021, 9:23 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Payroll</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-success fs-7 m-1"
                                                            >
                                                                Analyst
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>20 Jun 2021, 6:05 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Disputes Management</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-danger fs-7 m-1"
                                                            >
                                                                Developer
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-info fs-7 m-1"
                                                            >
                                                                Support
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>22 Sep 2021, 9:23 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>API Controls</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-danger fs-7 m-1"
                                                            >
                                                                Developer
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>10 Nov 2021, 11:30 am</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Database Management</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-danger fs-7 m-1"
                                                            >
                                                                Developer
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>25 Oct 2021, 11:05 am</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    <tr>
                                                        {/*begin::Name=*/}
                                                        <td>Repository Management</td>
                                                        {/*end::Name=*/}
                                                        {/*begin::Assigned to=*/}
                                                        <td>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-primary fs-7 m-1"
                                                            >
                                                                Administrator
                                                            </NavLink>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                className="badge badge-light-danger fs-7 m-1"
                                                            >
                                                                Developer
                                                            </NavLink>
                                                        </td>
                                                        {/*end::Assigned to=*/}
                                                        {/*begin::Created Date*/}
                                                        <td>20 Dec 2021, 5:20 pm</td>
                                                        {/*end::Created Date*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            {/*begin::Update*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_permission"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Update*/}
                                                            {/*begin::Delete*/}
                                                            <button
                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                                data-kt-permissions-table-filter="delete_row"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            opacity="0.5"
                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                            {/*end::Delete*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                </tbody>
                                                {/*end::Table body*/}
                                            </table>
                                            {/*end::Table*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Card*/}
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - Add permissions*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_permission"
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
                                                    <h2 className="fw-bolder">Add a Permission</h2>
                                                    {/*end::Modal title*/}
                                                    {/*begin::Close*/}
                                                    <div
                                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                                        data-kt-permissions-modal-action="close"
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
                                                        id="kt_modal_add_permission_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Permission Name</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-html="true"
                                                                    data-bs-content="Permission names is required to be unique."
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder="Enter a permission name"
                                                                name="permission_name"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid me-9">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    name="permissions_core"
                                                                    id="kt_permissions_core"
                                                                />
                                                                <span
                                                                    className="form-check-label"
                                                                    htmlFor="kt_permissions_core"
                                                                >
                                                                    Set as core permission
                                                                </span>
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Disclaimer*/}
                                                        <div className="text-gray-600">
                                                            Permission set as a
                                                            <strong className="me-1">Core Permission</strong>will be
                                                            locked and
                                                            <strong className="me-1">not editable</strong>in future
                                                        </div>
                                                        {/*end::Disclaimer*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center pt-15">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-light me-3"
                                                                data-kt-permissions-modal-action="cancel"
                                                            >
                                                                Discard
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                                data-kt-permissions-modal-action="submit"
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
                                    {/*end::Modal - Add permissions*/}
                                    {/*begin::Modal - Update permissions*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_update_permission"
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
                                                    <h2 className="fw-bolder">Update Permission</h2>
                                                    {/*end::Modal title*/}
                                                    {/*begin::Close*/}
                                                    <div
                                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                                        data-kt-permissions-modal-action="close"
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
                                                    {/*begin::Notice*/}
                                                    {/*begin::Notice*/}
                                                    <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                                                        <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
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
                                                                    rx={10}
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x={11}
                                                                    y={14}
                                                                    width={7}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 11 14)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x={11}
                                                                    y={17}
                                                                    width={2}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 11 17)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                        {/*end::Icon*/}
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex flex-stack flex-grow-1">
                                                            {/*begin::Content*/}
                                                            <div className="fw-bold">
                                                                <div className="fs-6 text-gray-700">
                                                                    <strong className="me-1">Warning!</strong>By editing
                                                                    the permission name, you might break the system
                                                                    permissions functionality. Please ensure you're
                                                                    absolutely certain before proceeding.
                                                                </div>
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Notice*/}
                                                    {/*end::Notice*/}
                                                    {/*begin::Form*/}
                                                    <form
                                                        id="kt_modal_update_permission_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Permission Name</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-html="true"
                                                                    data-bs-content="Permission names is required to be unique."
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder="Enter a permission name"
                                                                name="permission_name"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center pt-15">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-light me-3"
                                                                data-kt-permissions-modal-action="cancel"
                                                            >
                                                                Discard
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                                data-kt-permissions-modal-action="submit"
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
                                    {/*end::Modal - Update permissions*/}
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

export default Permissions;