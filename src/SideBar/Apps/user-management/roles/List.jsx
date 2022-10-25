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
                                            Roles List
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
                                            <li className="breadcrumb-item text-gray-600">Roles</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Roles List</li>
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
                                                id="kt_menu_61b9c7c029ec7"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7c029ec7"
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
                                    {/*begin::Row*/}
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
                                        {/*begin::Col*/}
                                        <div className="col-md-4">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-md-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Administrator</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-1">
                                                    {/*begin::Users*/}
                                                    <div className="fw-bolder text-gray-600 mb-5">
                                                        Total users with this role: 5
                                                    </div>
                                                    {/*end::Users*/}
                                                    {/*begin::Permissions*/}
                                                    <div className="d-flex flex-column text-gray-600">
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            All Admin Controls
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit Financial Summaries
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            Enabled Bulk Reports
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit Payouts
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit Disputes
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            <em>and 7 more...</em>
                                                        </div>
                                                    </div>
                                                    {/*end::Permissions*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div className="card-footer flex-wrap pt-0">
                                                    <NavLink
                                                        to="../../demo14/dist/apps/user-management/roles/view.html"
                                                        className="btn btn-light btn-active-primary my-1 me-2"
                                                    >
                                                        View Role
                                                    </NavLink>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-active-light-primary my-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_update_role"
                                                    >
                                                        Edit Role
                                                    </button>
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-4">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-md-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Developer</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-1">
                                                    {/*begin::Users*/}
                                                    <div className="fw-bolder text-gray-600 mb-5">
                                                        Total users with this role: 14
                                                    </div>
                                                    {/*end::Users*/}
                                                    {/*begin::Permissions*/}
                                                    <div className="d-flex flex-column text-gray-600">
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            Some Admin Controls
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Financial Summaries only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit API Controls
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Payouts only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit Disputes
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            <em>and 3 more...</em>
                                                        </div>
                                                    </div>
                                                    {/*end::Permissions*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div className="card-footer flex-wrap pt-0">
                                                    <NavLink
                                                        to="../../demo14/dist/apps/user-management/roles/view.html"
                                                        className="btn btn-light btn-active-primary my-1 me-2"
                                                    >
                                                        View Role
                                                    </NavLink>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-active-light-primary my-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_update_role"
                                                    >
                                                        Edit Role
                                                    </button>
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-4">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-md-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Analyst</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-1">
                                                    {/*begin::Users*/}
                                                    <div className="fw-bolder text-gray-600 mb-5">
                                                        Total users with this role: 4
                                                    </div>
                                                    {/*end::Users*/}
                                                    {/*begin::Permissions*/}
                                                    <div className="d-flex flex-column text-gray-600">
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            No Admin Controls
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit Financial Summaries
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            Enabled Bulk Reports
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Payouts only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Disputes only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            <em>and 2 more...</em>
                                                        </div>
                                                    </div>
                                                    {/*end::Permissions*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div className="card-footer flex-wrap pt-0">
                                                    <NavLink
                                                        to="../../demo14/dist/apps/user-management/roles/view.html"
                                                        className="btn btn-light btn-active-primary my-1 me-2"
                                                    >
                                                        View Role
                                                    </NavLink>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-active-light-primary my-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_update_role"
                                                    >
                                                        Edit Role
                                                    </button>
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-4">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-md-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Support</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-1">
                                                    {/*begin::Users*/}
                                                    <div className="fw-bolder text-gray-600 mb-5">
                                                        Total users with this role: 23
                                                    </div>
                                                    {/*end::Users*/}
                                                    {/*begin::Permissions*/}
                                                    <div className="d-flex flex-column text-gray-600">
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            No Admin Controls
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Financial Summaries only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Payouts only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View and Edit Disputes
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            Response to Customer Feedback
                                                        </div>
                                                    </div>
                                                    {/*end::Permissions*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div className="card-footer flex-wrap pt-0">
                                                    <NavLink
                                                        to="../../demo14/dist/apps/user-management/roles/view.html"
                                                        className="btn btn-light btn-active-primary my-1 me-2"
                                                    >
                                                        View Role
                                                    </NavLink>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-active-light-primary my-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_update_role"
                                                    >
                                                        Edit Role
                                                    </button>
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-4">
                                            {/*begin::Card*/}
                                            <div className="card card-flush h-md-100">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Trial</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-1">
                                                    {/*begin::Users*/}
                                                    <div className="fw-bolder text-gray-600 mb-5">
                                                        Total users with this role: 546
                                                    </div>
                                                    {/*end::Users*/}
                                                    {/*begin::Permissions*/}
                                                    <div className="d-flex flex-column text-gray-600">
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            No Admin Controls
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Financial Summaries only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Bulk Reports only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Payouts only
                                                        </div>
                                                        <div className="d-flex align-items-center py-2">
                                                            <span className="bullet bg-primary me-3" />
                                                            View Disputes only
                                                        </div>
                                                    </div>
                                                    {/*end::Permissions*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div className="card-footer flex-wrap pt-0">
                                                    <NavLink
                                                        to="../../demo14/dist/apps/user-management/roles/view.html"
                                                        className="btn btn-light btn-active-primary my-1 me-2"
                                                    >
                                                        View Role
                                                    </NavLink>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-active-light-primary my-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_update_role"
                                                    >
                                                        Edit Role
                                                    </button>
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Add new card*/}
                                        <div className="ol-md-4">
                                            {/*begin::Card*/}
                                            <div className="card h-md-100">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center">
                                                    {/*begin::Button*/}
                                                    <button
                                                        type="button"
                                                        className="btn btn-clear d-flex flex-column flex-center"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_add_role"
                                                    >
                                                        {/*begin::Illustration*/}
                                                        <img
                                                            src="/assets/media/illustrations/sketchy-1/4.png"
                                                            alt
                                                            className="mw-100 mh-150px mb-7"
                                                        />
                                                        {/*end::Illustration*/}
                                                        {/*begin::Label*/}
                                                        <div className="fw-bolder fs-3 text-gray-600 text-hover-primary">
                                                            Add New Role
                                                        </div>
                                                        {/*end::Label*/}
                                                    </button>
                                                    {/*begin::Button*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*begin::Add new card*/}
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - Add role*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_role"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-750px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header">
                                                    {/*begin::Modal title*/}
                                                    <h2 className="fw-bolder">Add a Role</h2>
                                                    {/*end::Modal title*/}
                                                    {/*begin::Close*/}
                                                    <div
                                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                                        data-kt-roles-modal-action="close"
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
                                                <div className="modal-body scroll-y mx-lg-5 my-7">
                                                    {/*begin::Form*/}
                                                    <form
                                                        id="kt_modal_add_role_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Scroll*/}
                                                        <div
                                                            className="d-flex flex-column scroll-y me-n7 pe-7"
                                                            id="kt_modal_add_role_scroll"
                                                            data-kt-scroll="true"
                                                            data-kt-scroll-activate="{default: false, lg: true}"
                                                            data-kt-scroll-max-height="auto"
                                                            data-kt-scroll-dependencies="#kt_modal_add_role_header"
                                                            data-kt-scroll-wrappers="#kt_modal_add_role_scroll"
                                                            data-kt-scroll-offset="300px"
                                                        >
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-10">
                                                                {/*begin::Label*/}
                                                                <label className="fs-5 fw-bolder form-label mb-2">
                                                                    <span className="required">Role name</span>
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder="Enter a role name"
                                                                    name="role_name"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Permissions*/}
                                                            <div className="fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="fs-5 fw-bolder form-label mb-2">
                                                                    Role Permissions
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Table wrapper*/}
                                                                <div className="table-responsive">
                                                                    {/*begin::Table*/}
                                                                    <table className="table align-middle table-row-dashed fs-6 gy-5">
                                                                        {/*begin::Table body*/}
                                                                        <tbody className="text-gray-600 fw-bold">
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                <td className="text-gray-800">
                                                                                    Administrator Access
                                                                                    <i
                                                                                        className="fas fa-exclamation-circle ms-1 fs-7"
                                                                                        data-bs-toggle="tooltip"
                                                                                        title="Allows a full access to the system"
                                                                                    />
                                                                                </td>
                                                                                <td>
                                                                                    {/*begin::Checkbox*/}
                                                                                    <label className="form-check form-check-custom form-check-solid me-9">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="checkbox"
                                                                                            defaultValue
                                                                                            id="kt_roles_select_all"
                                                                                        />
                                                                                        <span
                                                                                            className="form-check-label"
                                                                                            htmlFor="kt_roles_select_all"
                                                                                        >
                                                                                            Select all
                                                                                        </span>
                                                                                    </label>
                                                                                    {/*end::Checkbox*/}
                                                                                </td>
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    User Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="user_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="user_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="user_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Content Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="content_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="content_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="content_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Financial Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="financial_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="financial_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="financial_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">Reporting</td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="reporting_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="reporting_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="reporting_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">Payroll</td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="payroll_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="payroll_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="payroll_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Disputes Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="disputes_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="disputes_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="disputes_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    API Controls
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="api_controls_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="api_controls_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="api_controls_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Database Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="database_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="database_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="database_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Repository Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Options*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="repository_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="repository_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="repository_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Options*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                        </tbody>
                                                                        {/*end::Table body*/}
                                                                    </table>
                                                                    {/*end::Table*/}
                                                                </div>
                                                                {/*end::Table wrapper*/}
                                                            </div>
                                                            {/*end::Permissions*/}
                                                        </div>
                                                        {/*end::Scroll*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center pt-15">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-light me-3"
                                                                data-kt-roles-modal-action="cancel"
                                                            >
                                                                Discard
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                                data-kt-roles-modal-action="submit"
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
                                    {/*end::Modal - Add role*/}
                                    {/*begin::Modal - Update role*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_update_role"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-750px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header">
                                                    {/*begin::Modal title*/}
                                                    <h2 className="fw-bolder">Update Role</h2>
                                                    {/*end::Modal title*/}
                                                    {/*begin::Close*/}
                                                    <div
                                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                                        data-kt-roles-modal-action="close"
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
                                                <div className="modal-body scroll-y mx-5 my-7">
                                                    {/*begin::Form*/}
                                                    <form
                                                        id="kt_modal_update_role_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Scroll*/}
                                                        <div
                                                            className="d-flex flex-column scroll-y me-n7 pe-7"
                                                            id="kt_modal_update_role_scroll"
                                                            data-kt-scroll="true"
                                                            data-kt-scroll-activate="{default: false, lg: true}"
                                                            data-kt-scroll-max-height="auto"
                                                            data-kt-scroll-dependencies="#kt_modal_update_role_header"
                                                            data-kt-scroll-wrappers="#kt_modal_update_role_scroll"
                                                            data-kt-scroll-offset="300px"
                                                        >
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-10">
                                                                {/*begin::Label*/}
                                                                <label className="fs-5 fw-bolder form-label mb-2">
                                                                    <span className="required">Role name</span>
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder="Enter a role name"
                                                                    name="role_name"
                                                                    defaultValue="Developer"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Permissions*/}
                                                            <div className="fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="fs-5 fw-bolder form-label mb-2">
                                                                    Role Permissions
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Table wrapper*/}
                                                                <div className="table-responsive">
                                                                    {/*begin::Table*/}
                                                                    <table className="table align-middle table-row-dashed fs-6 gy-5">
                                                                        {/*begin::Table body*/}
                                                                        <tbody className="text-gray-600 fw-bold">
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                <td className="text-gray-800">
                                                                                    Administrator Access
                                                                                    <i
                                                                                        className="fas fa-exclamation-circle ms-1 fs-7"
                                                                                        data-bs-toggle="tooltip"
                                                                                        title="Allows a full access to the system"
                                                                                    />
                                                                                </td>
                                                                                <td>
                                                                                    {/*begin::Checkbox*/}
                                                                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="checkbox"
                                                                                            defaultValue
                                                                                            id="kt_roles_select_all"
                                                                                        />
                                                                                        <span
                                                                                            className="form-check-label"
                                                                                            htmlFor="kt_roles_select_all"
                                                                                        >
                                                                                            Select all
                                                                                        </span>
                                                                                    </label>
                                                                                    {/*end::Checkbox*/}
                                                                                </td>
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    User Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="user_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="user_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="user_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Content Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="content_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="content_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="content_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Financial Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="financial_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="financial_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="financial_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">Reporting</td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="reporting_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="reporting_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="reporting_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">Payroll</td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="payroll_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="payroll_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="payroll_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Disputes Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="disputes_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="disputes_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="disputes_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    API Controls
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="api_controls_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="api_controls_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="api_controls_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Database Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="database_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="database_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="database_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                {/*begin::Label*/}
                                                                                <td className="text-gray-800">
                                                                                    Repository Management
                                                                                </td>
                                                                                {/*end::Label*/}
                                                                                {/*begin::Input group*/}
                                                                                <td>
                                                                                    {/*begin::Wrapper*/}
                                                                                    <div className="d-flex">
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="repository_management_read"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Read
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="repository_management_write"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Write
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                        {/*begin::Checkbox*/}
                                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultValue
                                                                                                name="repository_management_create"
                                                                                            />
                                                                                            <span className="form-check-label">
                                                                                                Create
                                                                                            </span>
                                                                                        </label>
                                                                                        {/*end::Checkbox*/}
                                                                                    </div>
                                                                                    {/*end::Wrapper*/}
                                                                                </td>
                                                                                {/*end::Input group*/}
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                        </tbody>
                                                                        {/*end::Table body*/}
                                                                    </table>
                                                                    {/*end::Table*/}
                                                                </div>
                                                                {/*end::Table wrapper*/}
                                                            </div>
                                                            {/*end::Permissions*/}
                                                        </div>
                                                        {/*end::Scroll*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center pt-15">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-light me-3"
                                                                data-kt-roles-modal-action="cancel"
                                                            >
                                                                Discard
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                                data-kt-roles-modal-action="submit"
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
                                    {/*end::Modal - Update role*/}
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

export default List
