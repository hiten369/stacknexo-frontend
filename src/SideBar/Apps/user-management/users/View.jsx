import React from 'react'
import { NavLink } from 'react-router-dom';

const View = () => {
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
                                            View User Details
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
                                            <li className="breadcrumb-item text-gray-500">View User</li>
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
                                                id="kt_menu_61b9c7beb9641"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7beb9641"
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
                                        <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
                                            {/*begin::Card*/}
                                            <div className="card mb-5 mb-xl-8">
                                                {/*begin::Card body*/}
                                                <div className="card-body">
                                                    {/*begin::Summary*/}
                                                    {/*begin::User Info*/}
                                                    <div className="d-flex flex-center flex-column py-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-100px symbol-circle mb-7">
                                                            <img src="/assets/media/avatars/150-1.jpg" alt="image" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Name*/}
                                                        <NavLink
                                                            to="#"
                                                            className="fs-3 text-gray-800 text-hover-primary fw-bolder mb-3"
                                                        >
                                                            Emma Smith
                                                        </NavLink>
                                                        {/*end::Name*/}
                                                        {/*begin::Position*/}
                                                        <div className="mb-9">
                                                            {/*begin::Badge*/}
                                                            <div className="badge badge-lg badge-light-primary d-inline">
                                                                Administrator
                                                            </div>
                                                            {/*begin::Badge*/}
                                                        </div>
                                                        {/*end::Position*/}
                                                        {/*begin::Info*/}
                                                        {/*begin::Info heading*/}
                                                        <div className="fw-bolder mb-3">
                                                            Assigned Tickets
                                                            <i
                                                                className="fas fa-exclamation-circle ms-2 fs-7"
                                                                data-bs-toggle="popover"
                                                                data-bs-trigger="hover"
                                                                data-bs-html="true"
                                                                data-bs-content="Number of support tickets assigned, closed and pending this week."
                                                            />
                                                        </div>
                                                        {/*end::Info heading*/}
                                                        <div className="d-flex flex-wrap flex-center">
                                                            {/*begin::Stats*/}
                                                            <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                                                                <div className="fs-4 fw-bolder text-gray-700">
                                                                    <span className="w-75px">243</span>
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-success">
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
                                                                </div>
                                                                <div className="fw-bold text-muted">Total</div>
                                                            </div>
                                                            {/*end::Stats*/}
                                                            {/*begin::Stats*/}
                                                            <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                                                                <div className="fs-4 fw-bolder text-gray-700">
                                                                    <span className="w-50px">56</span>
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-danger">
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
                                                                </div>
                                                                <div className="fw-bold text-muted">Solved</div>
                                                            </div>
                                                            {/*end::Stats*/}
                                                            {/*begin::Stats*/}
                                                            <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                                                                <div className="fs-4 fw-bolder text-gray-700">
                                                                    <span className="w-50px">188</span>
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-success">
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
                                                                </div>
                                                                <div className="fw-bold text-muted">Open</div>
                                                            </div>
                                                            {/*end::Stats*/}
                                                        </div>
                                                        {/*end::Info*/}
                                                    </div>
                                                    {/*end::User Info*/}
                                                    {/*end::Summary*/}
                                                    {/*begin::Details toggle*/}
                                                    <div className="d-flex flex-stack fs-4 py-3">
                                                        <div
                                                            className="fw-bolder rotate collapsible"
                                                            data-bs-toggle="collapse"
                                                            to="#kt_user_view_details"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="kt_user_view_details"
                                                        >
                                                            Details
                                                            <span className="ms-2 rotate-180">
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-3">
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
                                                            </span>
                                                        </div>
                                                        <span
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            title="Edit customer details"
                                                        >
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_update_details"
                                                            >
                                                                Edit
                                                            </NavLink>
                                                        </span>
                                                    </div>
                                                    {/*end::Details toggle*/}
                                                    <div className="separator" />
                                                    {/*begin::Details content*/}
                                                    <div id="kt_user_view_details" className="collapse show">
                                                        <div className="pb-5 fs-6">
                                                            {/*begin::Details item*/}
                                                            <div className="fw-bolder mt-5">Account ID</div>
                                                            <div className="text-gray-600">ID-45453423</div>
                                                            {/*begin::Details item*/}
                                                            {/*begin::Details item*/}
                                                            <div className="fw-bolder mt-5">Email</div>
                                                            <div className="text-gray-600">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-600 text-hover-primary"
                                                                >
                                                                    info@keenthemes.com
                                                                </NavLink>
                                                            </div>
                                                            {/*begin::Details item*/}
                                                            {/*begin::Details item*/}
                                                            <div className="fw-bolder mt-5">Address</div>
                                                            <div className="text-gray-600">
                                                                101 Collin Street,
                                                                <br />
                                                                Melbourne 3000 VIC
                                                                <br />
                                                                Australia
                                                            </div>
                                                            {/*begin::Details item*/}
                                                            {/*begin::Details item*/}
                                                            <div className="fw-bolder mt-5">Language</div>
                                                            <div className="text-gray-600">English</div>
                                                            {/*begin::Details item*/}
                                                            {/*begin::Details item*/}
                                                            <div className="fw-bolder mt-5">Last Login</div>
                                                            <div className="text-gray-600">
                                                                25 Oct 2021, 10:10 pm
                                                            </div>
                                                            {/*begin::Details item*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Details content*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                            {/*begin::Connected Accounts*/}
                                            <div className="card mb-5 mb-xl-8">
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0">
                                                    <div className="card-title">
                                                        <h3 className="fw-bolder m-0">Connected Accounts</h3>
                                                    </div>
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-2">
                                                    {/*begin::Notice*/}
                                                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: icons/duotune/art/art006.svg*/}
                                                        <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z"
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
                                                                    By connecting an account, you hereby agree to our
                                                                    <NavLink to="#" className="me-1">
                                                                        privacy policy
                                                                    </NavLink>
                                                                    and
                                                                    <NavLink to="#">terms of use</NavLink>.
                                                                </div>
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Notice*/}
                                                    {/*begin::Items*/}
                                                    <div className="py-2">
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            <div className="d-flex">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/google-icon.svg"
                                                                    className="w-30px me-6"
                                                                    alt
                                                                />
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 text-dark text-hover-primary fw-bolder"
                                                                    >
                                                                        Google
                                                                    </NavLink>
                                                                    <div className="fs-6 fw-bold text-muted">
                                                                        Plan properly your workflow
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-end">
                                                                {/*begin::Switch*/}
                                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-check-input"
                                                                        name="google"
                                                                        type="checkbox"
                                                                        defaultValue={1}
                                                                        id="kt_modal_connected_accounts_google"
                                                                        defaultChecked="checked"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Label*/}
                                                                    <span
                                                                        className="form-check-label fw-bold text-muted"
                                                                        htmlFor="kt_modal_connected_accounts_google"
                                                                    />
                                                                    {/*end::Label*/}
                                                                </label>
                                                                {/*end::Switch*/}
                                                            </div>
                                                        </div>
                                                        {/*end::Item*/}
                                                        <div className="separator separator-dashed my-5" />
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            <div className="d-flex">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/github.svg"
                                                                    className="w-30px me-6"
                                                                    alt
                                                                />
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 text-dark text-hover-primary fw-bolder"
                                                                    >
                                                                        Github
                                                                    </NavLink>
                                                                    <div className="fs-6 fw-bold text-muted">
                                                                        Keep eye on on your Repositories
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-end">
                                                                {/*begin::Switch*/}
                                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-check-input"
                                                                        name="github"
                                                                        type="checkbox"
                                                                        defaultValue={1}
                                                                        id="kt_modal_connected_accounts_github"
                                                                        defaultChecked="checked"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Label*/}
                                                                    <span
                                                                        className="form-check-label fw-bold text-muted"
                                                                        htmlFor="kt_modal_connected_accounts_github"
                                                                    />
                                                                    {/*end::Label*/}
                                                                </label>
                                                                {/*end::Switch*/}
                                                            </div>
                                                        </div>
                                                        {/*end::Item*/}
                                                        <div className="separator separator-dashed my-5" />
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            <div className="d-flex">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/slack-icon.svg"
                                                                    className="w-30px me-6"
                                                                    alt
                                                                />
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 text-dark text-hover-primary fw-bolder"
                                                                    >
                                                                        Slack
                                                                    </NavLink>
                                                                    <div className="fs-6 fw-bold text-muted">
                                                                        Integrate Projects Discussions
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-end">
                                                                {/*begin::Switch*/}
                                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-check-input"
                                                                        name="slack"
                                                                        type="checkbox"
                                                                        defaultValue={1}
                                                                        id="kt_modal_connected_accounts_slack"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Label*/}
                                                                    <span
                                                                        className="form-check-label fw-bold text-muted"
                                                                        htmlFor="kt_modal_connected_accounts_slack"
                                                                    />
                                                                    {/*end::Label*/}
                                                                </label>
                                                                {/*end::Switch*/}
                                                            </div>
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Items*/}
                                                </div>
                                                {/*end::Card body*/}
                                                {/*begin::Card footer*/}
                                                <div className="card-footer border-0 d-flex justify-content-center pt-0">
                                                    <button className="btn btn-sm btn-light-primary">
                                                        Save Changes
                                                    </button>
                                                </div>
                                                {/*end::Card footer*/}
                                            </div>
                                            {/*end::Connected Accounts*/}
                                        </div>
                                        {/*end::Sidebar*/}
                                        {/*begin::Content*/}
                                        <div className="flex-lg-row-fluid ms-lg-15">
                                            {/*begin:::Tabs*/}
                                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                                                {/*begin:::Tab item*/}
                                                <li className="nav-item">
                                                    <NavLink
                                                        className="nav-link text-active-primary pb-4 active"
                                                        data-bs-toggle="tab"
                                                        to="#kt_user_view_overview_tab"
                                                    >
                                                        Overview
                                                    </NavLink>
                                                </li>
                                                {/*end:::Tab item*/}
                                                {/*begin:::Tab item*/}
                                                <li className="nav-item">
                                                    <NavLink
                                                        className="nav-link text-active-primary pb-4"
                                                        data-kt-countup-tabs="true"
                                                        data-bs-toggle="tab"
                                                        to="#kt_user_view_overview_security"
                                                    >
                                                        Security
                                                    </NavLink>
                                                </li>
                                                {/*end:::Tab item*/}
                                                {/*begin:::Tab item*/}
                                                <li className="nav-item">
                                                    <NavLink
                                                        className="nav-link text-active-primary pb-4"
                                                        data-bs-toggle="tab"
                                                        to="#kt_user_view_overview_events_and_logs_tab"
                                                    >
                                                        Events &amp; Logs
                                                    </NavLink>
                                                </li>
                                                {/*end:::Tab item*/}
                                                {/*begin:::Tab item*/}
                                                <li className="nav-item ms-auto">
                                                    {/*begin::Action menu*/}
                                                    <NavLink
                                                        to="#"
                                                        className="btn btn-primary ps-7"
                                                        data-kt-menu-trigger="click"
                                                        data-kt-menu-attach="parent"
                                                        data-kt-menu-placement="bottom-end"
                                                    >
                                                        Actions
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                        <span className="svg-icon svg-icon-2 me-0">
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
                                                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold py-4 w-250px fs-6"
                                                        data-kt-menu="true"
                                                    >
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5">
                                                            <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                                                                Payments
                                                            </div>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5">
                                                            <NavLink to="#" className="menu-link px-5">
                                                                Create invoice
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5">
                                                            <NavLink to="#" className="menu-link flex-stack px-5">
                                                                Create payments
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="tooltip"
                                                                    title="Specify a target name for future usage and reference"
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div
                                                            className="menu-item px-5"
                                                            data-kt-menu-trigger="hover"
                                                            data-kt-menu-placement="left-start"
                                                        >
                                                            <NavLink to="#" className="menu-link px-5">
                                                                <span className="menu-title">Subscription</span>
                                                                <span className="menu-arrow" />
                                                            </NavLink>
                                                            {/*begin::Menu sub*/}
                                                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-5">
                                                                        Apps
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-5">
                                                                        Billing
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-5">
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
                                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                                            <input
                                                                                className="form-check-input w-30px h-20px"
                                                                                type="checkbox"
                                                                                defaultValue
                                                                                name="notifications"
                                                                                defaultChecked="checked"
                                                                                id="kt_user_menu_notifications"
                                                                            />
                                                                            <span
                                                                                className="form-check-label text-muted fs-6"
                                                                                htmlFor="kt_user_menu_notifications"
                                                                            >
                                                                                Notifications
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu sub*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu separator*/}
                                                        <div className="separator my-3" />
                                                        {/*end::Menu separator*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5">
                                                            <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                                                                Account
                                                            </div>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5">
                                                            <NavLink to="#" className="menu-link px-5">
                                                                Reports
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5 my-1">
                                                            <NavLink to="#" className="menu-link px-5">
                                                                Account Settings
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-5">
                                                            <NavLink to="#" className="menu-link text-danger px-5">
                                                                Delete customer
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                    </div>
                                                    {/*end::Menu*/}
                                                    {/*end::Menu*/}
                                                </li>
                                                {/*end:::Tab item*/}
                                            </ul>
                                            {/*end:::Tabs*/}
                                            {/*begin:::Tab content*/}
                                            <div className="tab-content" id="myTabContent">
                                                {/*begin:::Tab pane*/}
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="kt_user_view_overview_tab"
                                                    role="tabpanel"
                                                >
                                                    {/*begin::Card*/}
                                                    <div className="card card-flush mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header mt-6">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title flex-column">
                                                                <h2 className="mb-1">User's Schedule</h2>
                                                                <div className="fs-6 fw-bold text-muted">
                                                                    2 upcoming meetings
                                                                </div>
                                                            </div>
                                                            {/*end::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light-primary btn-sm"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_add_schedule"
                                                                >
                                                                    {/*SVG file not found: media/icons/duotune/art/art008.svg*/}
                                                                    Add Schedule
                                                                </button>
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
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_0"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Su
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">21</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary active"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_1"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Mo
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">22</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_2"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Tu
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">23</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_3"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            We
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">24</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_4"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Th
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">25</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_5"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Fr
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">26</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_6"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Sa
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">27</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_7"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Su
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">28</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_8"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Mo
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">29</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_9"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            Tu
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">30</span>
                                                                    </NavLink>
                                                                </li>
                                                                {/*end::Date*/}
                                                                {/*begin::Date*/}
                                                                <li className="nav-item me-1">
                                                                    <NavLink
                                                                        className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                        data-bs-toggle="tab"
                                                                        to="#kt_schedule_day_10"
                                                                    >
                                                                        <span className="opacity-50 fs-7 fw-bold">
                                                                            We
                                                                        </span>
                                                                        <span className="fs-6 fw-boldest">31</span>
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Development Team Capacity Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Karina Clarke</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Development Team Capacity Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Walter White</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                14:30 - 15:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Project Review &amp; Testing
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Peter Marcus</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Committee Review Approvals
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Yannis Gloverson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                9 Degree Project Estimation Meeting
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Kendell Trevor</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Lunch &amp; Learn Catch Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">David Stevenson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Weekly Team Stand-Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Bob Harris</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Weekly Team Stand-Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Team Backlog Grooming Session
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Terry Robins</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Marketing Campaign Discussion
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Michael Walters</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                12:00 - 13:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Creative Content Initiative
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Sean Bean</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Sales Pitch Proposal
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Walter White</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Marketing Campaign Discussion
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Karina Clarke</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Weekly Team Stand-Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Yannis Gloverson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                12:00 - 13:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Dashboard UI/UX Design Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Sean Bean</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                11:00 - 11:45
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Creative Content Initiative
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Michael Walters</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                11:00 - 11:45
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Sales Pitch Proposal
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Bob Harris</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                14:30 - 15:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Project Review &amp; Testing
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                12:00 - 13:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Marketing Campaign Discussion
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Caleb Donaldson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Marketing Campaign Discussion
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                14:30 - 15:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Creative Content Initiative
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Terry Robins</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Lunch &amp; Learn Catch Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Walter White</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Committee Review Approvals
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Yannis Gloverson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Dashboard UI/UX Design Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Terry Robins</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Marketing Campaign Discussion
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Walter White</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                14:30 - 15:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Sales Pitch Proposal
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Caleb Donaldson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                9 Degree Project Estimation Meeting
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Yannis Gloverson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Dashboard UI/UX Design Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Lunch &amp; Learn Catch Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Karina Clarke</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                9 Degree Project Estimation Meeting
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">David Stevenson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Team Backlog Grooming Session
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Creative Content Initiative
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Committee Review Approvals
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Karina Clarke</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                16:30 - 17:30
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Development Team Capacity Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">David Stevenson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Dashboard UI/UX Design Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Yannis Gloverson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Project Review &amp; Testing
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Naomi Hayabusa</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Development Team Capacity Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Sean Bean</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                12:00 - 13:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Team Backlog Grooming Session
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Kendell Trevor</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Sales Pitch Proposal
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                11:00 - 11:45
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Development Team Capacity Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">David Stevenson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Committee Review Approvals
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Walter White</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                13:00 - 14:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    pm
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Development Team Capacity Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Sean Bean</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                                    id="kt_schedule_day_10"
                                                                    className="tab-pane fade show"
                                                                >
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                9:00 - 10:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Committee Review Approvals
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Caleb Donaldson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                10:00 - 11:00
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Dashboard UI/UX Design Review
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Sean Bean</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                11:00 - 11:45
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Lunch &amp; Learn Catch Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">Mark Randall</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Time*/}
                                                                    {/*begin::Time*/}
                                                                    <div className="d-flex flex-stack position-relative mt-6">
                                                                        {/*begin::Bar*/}
                                                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                                                                        {/*end::Bar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold ms-5">
                                                                            {/*begin::Time*/}
                                                                            <div className="fs-7 mb-1">
                                                                                11:00 - 11:45
                                                                                <span className="fs-7 text-muted text-uppercase">
                                                                                    am
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Time*/}
                                                                            {/*begin::Title*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fs-5 fw-bolder text-dark text-hover-primary mb-2"
                                                                            >
                                                                                Weekly Team Stand-Up
                                                                            </NavLink>
                                                                            {/*end::Title*/}
                                                                            {/*begin::User*/}
                                                                            <div className="fs-7 text-muted">
                                                                                Lead by
                                                                                <NavLink to="#">David Stevenson</NavLink>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-light bnt-active-light-primary btn-sm"
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
                                                    {/*begin::Tasks*/}
                                                    <div className="card card-flush mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header mt-6">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title flex-column">
                                                                <h2 className="mb-1">User's Tasks</h2>
                                                                <div className="fs-6 fw-bold text-muted">
                                                                    Total 25 tasks in backlog
                                                                </div>
                                                            </div>
                                                            {/*end::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light-primary btn-sm"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_add_task"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
                                                                    <span className="svg-icon svg-icon-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z"
                                                                                fill="black"
                                                                            />
                                                                            <rect
                                                                                x={11}
                                                                                y={19}
                                                                                width={10}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(-90 11 19)"
                                                                                fill="black"
                                                                            />
                                                                            <rect
                                                                                x={7}
                                                                                y={13}
                                                                                width={10}
                                                                                height={2}
                                                                                rx={1}
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}Add Task
                                                                </button>
                                                            </div>
                                                            {/*end::Card toolbar*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body d-flex flex-column">
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center position-relative mb-7">
                                                                {/*begin::Label*/}
                                                                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                                {/*end::Label*/}
                                                                {/*begin::Details*/}
                                                                <div className="fw-bold ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-dark text-hover-primary"
                                                                    >
                                                                        Create FureStibe branding logo
                                                                    </NavLink>
                                                                    {/*begin::Info*/}
                                                                    <div className="fs-7 text-muted">
                                                                        Due in 1 day
                                                                        <NavLink to="#">Karina Clark</NavLink>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Menu*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
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
                                                                {/*begin::Task menu*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                    data-kt-menu="true"
                                                                    data-kt-menu-id="kt-users-tasks"
                                                                >
                                                                    {/*begin::Header*/}
                                                                    <div className="px-7 py-5">
                                                                        <div className="fs-5 text-dark fw-bolder">
                                                                            Update Status
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Header*/}
                                                                    {/*begin::Menu separator*/}
                                                                    <div className="separator border-gray-200" />
                                                                    {/*end::Menu separator*/}
                                                                    {/*begin::Form*/}
                                                                    <form
                                                                        className="form px-7 py-5"
                                                                        data-kt-menu-id="kt-users-tasks-form"
                                                                    >
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-10">
                                                                            {/*begin::Label*/}
                                                                            <label className="form-label fs-6 fw-bold">
                                                                                Status:
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                name="task_status"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-allow-clear="true"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option />
                                                                                <option value={1}>Approved</option>
                                                                                <option value={2}>Pending</option>
                                                                                <option value={3}>In Process</option>
                                                                                <option value={4}>Rejected</option>
                                                                            </select>
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Actions*/}
                                                                        <div className="d-flex justify-content-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                                                data-kt-users-update-task-status="reset"
                                                                            >
                                                                                Reset
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-sm btn-primary"
                                                                                data-kt-users-update-task-status="submit"
                                                                            >
                                                                                <span className="indicator-label">Apply</span>
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
                                                                {/*end::Task menu*/}
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center position-relative mb-7">
                                                                {/*begin::Label*/}
                                                                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                                {/*end::Label*/}
                                                                {/*begin::Details*/}
                                                                <div className="fw-bold ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-dark text-hover-primary"
                                                                    >
                                                                        Schedule a meeting with FireBear CTO John
                                                                    </NavLink>
                                                                    {/*begin::Info*/}
                                                                    <div className="fs-7 text-muted">
                                                                        Due in 3 days
                                                                        <NavLink to="#">Rober Doe</NavLink>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Menu*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
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
                                                                {/*begin::Task menu*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                    data-kt-menu="true"
                                                                    data-kt-menu-id="kt-users-tasks"
                                                                >
                                                                    {/*begin::Header*/}
                                                                    <div className="px-7 py-5">
                                                                        <div className="fs-5 text-dark fw-bolder">
                                                                            Update Status
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Header*/}
                                                                    {/*begin::Menu separator*/}
                                                                    <div className="separator border-gray-200" />
                                                                    {/*end::Menu separator*/}
                                                                    {/*begin::Form*/}
                                                                    <form
                                                                        className="form px-7 py-5"
                                                                        data-kt-menu-id="kt-users-tasks-form"
                                                                    >
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-10">
                                                                            {/*begin::Label*/}
                                                                            <label className="form-label fs-6 fw-bold">
                                                                                Status:
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                name="task_status"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-allow-clear="true"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option />
                                                                                <option value={1}>Approved</option>
                                                                                <option value={2}>Pending</option>
                                                                                <option value={3}>In Process</option>
                                                                                <option value={4}>Rejected</option>
                                                                            </select>
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Actions*/}
                                                                        <div className="d-flex justify-content-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                                                data-kt-users-update-task-status="reset"
                                                                            >
                                                                                Reset
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-sm btn-primary"
                                                                                data-kt-users-update-task-status="submit"
                                                                            >
                                                                                <span className="indicator-label">Apply</span>
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
                                                                {/*end::Task menu*/}
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center position-relative mb-7">
                                                                {/*begin::Label*/}
                                                                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                                {/*end::Label*/}
                                                                {/*begin::Details*/}
                                                                <div className="fw-bold ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-dark text-hover-primary"
                                                                    >
                                                                        9 Degree Project Estimation
                                                                    </NavLink>
                                                                    {/*begin::Info*/}
                                                                    <div className="fs-7 text-muted">
                                                                        Due in 1 week
                                                                        <NavLink to="#">Neil Owen</NavLink>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Menu*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
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
                                                                {/*begin::Task menu*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                    data-kt-menu="true"
                                                                    data-kt-menu-id="kt-users-tasks"
                                                                >
                                                                    {/*begin::Header*/}
                                                                    <div className="px-7 py-5">
                                                                        <div className="fs-5 text-dark fw-bolder">
                                                                            Update Status
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Header*/}
                                                                    {/*begin::Menu separator*/}
                                                                    <div className="separator border-gray-200" />
                                                                    {/*end::Menu separator*/}
                                                                    {/*begin::Form*/}
                                                                    <form
                                                                        className="form px-7 py-5"
                                                                        data-kt-menu-id="kt-users-tasks-form"
                                                                    >
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-10">
                                                                            {/*begin::Label*/}
                                                                            <label className="form-label fs-6 fw-bold">
                                                                                Status:
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                name="task_status"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-allow-clear="true"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option />
                                                                                <option value={1}>Approved</option>
                                                                                <option value={2}>Pending</option>
                                                                                <option value={3}>In Process</option>
                                                                                <option value={4}>Rejected</option>
                                                                            </select>
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Actions*/}
                                                                        <div className="d-flex justify-content-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                                                data-kt-users-update-task-status="reset"
                                                                            >
                                                                                Reset
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-sm btn-primary"
                                                                                data-kt-users-update-task-status="submit"
                                                                            >
                                                                                <span className="indicator-label">Apply</span>
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
                                                                {/*end::Task menu*/}
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center position-relative mb-7">
                                                                {/*begin::Label*/}
                                                                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                                {/*end::Label*/}
                                                                {/*begin::Details*/}
                                                                <div className="fw-bold ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-dark text-hover-primary"
                                                                    >
                                                                        Dashboard UI &amp; UX for Leafr CRM
                                                                    </NavLink>
                                                                    {/*begin::Info*/}
                                                                    <div className="fs-7 text-muted">
                                                                        Due in 1 week
                                                                        <NavLink to="#">Olivia Wild</NavLink>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Menu*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
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
                                                                {/*begin::Task menu*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                    data-kt-menu="true"
                                                                    data-kt-menu-id="kt-users-tasks"
                                                                >
                                                                    {/*begin::Header*/}
                                                                    <div className="px-7 py-5">
                                                                        <div className="fs-5 text-dark fw-bolder">
                                                                            Update Status
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Header*/}
                                                                    {/*begin::Menu separator*/}
                                                                    <div className="separator border-gray-200" />
                                                                    {/*end::Menu separator*/}
                                                                    {/*begin::Form*/}
                                                                    <form
                                                                        className="form px-7 py-5"
                                                                        data-kt-menu-id="kt-users-tasks-form"
                                                                    >
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-10">
                                                                            {/*begin::Label*/}
                                                                            <label className="form-label fs-6 fw-bold">
                                                                                Status:
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                name="task_status"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-allow-clear="true"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option />
                                                                                <option value={1}>Approved</option>
                                                                                <option value={2}>Pending</option>
                                                                                <option value={3}>In Process</option>
                                                                                <option value={4}>Rejected</option>
                                                                            </select>
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Actions*/}
                                                                        <div className="d-flex justify-content-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                                                data-kt-users-update-task-status="reset"
                                                                            >
                                                                                Reset
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-sm btn-primary"
                                                                                data-kt-users-update-task-status="submit"
                                                                            >
                                                                                <span className="indicator-label">Apply</span>
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
                                                                {/*end::Task menu*/}
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center position-relative">
                                                                {/*begin::Label*/}
                                                                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                                                                {/*end::Label*/}
                                                                {/*begin::Details*/}
                                                                <div className="fw-bold ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-dark text-hover-primary"
                                                                    >
                                                                        Mivy App R&amp;D, Meeting with clients
                                                                    </NavLink>
                                                                    {/*begin::Info*/}
                                                                    <div className="fs-7 text-muted">
                                                                        Due in 2 weeks
                                                                        <NavLink to="#">Sean Bean</NavLink>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Menu*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
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
                                                                {/*begin::Task menu*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                                    data-kt-menu="true"
                                                                    data-kt-menu-id="kt-users-tasks"
                                                                >
                                                                    {/*begin::Header*/}
                                                                    <div className="px-7 py-5">
                                                                        <div className="fs-5 text-dark fw-bolder">
                                                                            Update Status
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Header*/}
                                                                    {/*begin::Menu separator*/}
                                                                    <div className="separator border-gray-200" />
                                                                    {/*end::Menu separator*/}
                                                                    {/*begin::Form*/}
                                                                    <form
                                                                        className="form px-7 py-5"
                                                                        data-kt-menu-id="kt-users-tasks-form"
                                                                    >
                                                                        {/*begin::Input group*/}
                                                                        <div className="fv-row mb-10">
                                                                            {/*begin::Label*/}
                                                                            <label className="form-label fs-6 fw-bold">
                                                                                Status:
                                                                            </label>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Input*/}
                                                                            <select
                                                                                className="form-select form-select-solid"
                                                                                name="task_status"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-allow-clear="true"
                                                                                data-hide-search="true"
                                                                            >
                                                                                <option />
                                                                                <option value={1}>Approved</option>
                                                                                <option value={2}>Pending</option>
                                                                                <option value={3}>In Process</option>
                                                                                <option value={4}>Rejected</option>
                                                                            </select>
                                                                            {/*end::Input*/}
                                                                        </div>
                                                                        {/*end::Input group*/}
                                                                        {/*begin::Actions*/}
                                                                        <div className="d-flex justify-content-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                                                data-kt-users-update-task-status="reset"
                                                                            >
                                                                                Reset
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-sm btn-primary"
                                                                                data-kt-users-update-task-status="submit"
                                                                            >
                                                                                <span className="indicator-label">Apply</span>
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
                                                                {/*end::Task menu*/}
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Tasks*/}
                                                </div>
                                                {/*end:::Tab pane*/}
                                                {/*begin:::Tab pane*/}
                                                <div
                                                    className="tab-pane fade"
                                                    id="kt_user_view_overview_security"
                                                    role="tabpanel"
                                                >
                                                    {/*begin::Card*/}
                                                    <div className="card pt-4 mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title">
                                                                <h2>Profile</h2>
                                                            </div>
                                                            {/*end::Card title*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body pt-0 pb-5">
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    className="table align-middle table-row-dashed gy-5"
                                                                    id="kt_table_users_login_session"
                                                                >
                                                                    {/*begin::Table body*/}
                                                                    <tbody className="fs-6 fw-bold text-gray-600">
                                                                        <tr>
                                                                            <td>Email</td>
                                                                            <td>e.smith@kpmg.com.au</td>
                                                                            <td className="text-end">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#kt_modal_update_email"
                                                                                >
                                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                                    <span className="svg-icon svg-icon-3">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                                fill="black"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Password</td>
                                                                            <td>******</td>
                                                                            <td className="text-end">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#kt_modal_update_password"
                                                                                >
                                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                                    <span className="svg-icon svg-icon-3">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                                fill="black"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Role</td>
                                                                            <td>Administrator</td>
                                                                            <td className="text-end">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#kt_modal_update_role"
                                                                                >
                                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                                    <span className="svg-icon svg-icon-3">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                                fill="black"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Table body*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                    {/*begin::Card*/}
                                                    <div className="card pt-4 mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title flex-column">
                                                                <h2 className="mb-1">Two Step Authentication</h2>
                                                                <div className="fs-6 fw-bold text-muted">
                                                                    Keep your account extra secure with a second
                                                                    authentication step.
                                                                </div>
                                                            </div>
                                                            {/*end::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                {/*begin::Add*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light-primary btn-sm"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/technology/teh004.svg*/}
                                                                    <span className="svg-icon svg-icon-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}Add Authentication Step
                                                                </button>
                                                                {/*begin::Menu*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4"
                                                                    data-kt-menu="true"
                                                                >
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="menu-link px-3"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#kt_modal_add_auth_app"
                                                                        >
                                                                            Use authenticator app
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink
                                                                            to="#"
                                                                            className="menu-link px-3"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#kt_modal_add_one_time_password"
                                                                        >
                                                                            Enable one-time password
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                </div>
                                                                {/*end::Menu*/}
                                                                {/*end::Add*/}
                                                            </div>
                                                            {/*end::Card toolbar*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body pb-5">
                                                            {/*begin::Item*/}
                                                            <div className="d-flex flex-stack">
                                                                {/*begin::Content*/}
                                                                <div className="d-flex flex-column">
                                                                    <span>SMS</span>
                                                                    <span className="text-muted fs-6">
                                                                        +61 412 345 678
                                                                    </span>
                                                                </div>
                                                                {/*end::Content*/}
                                                                {/*begin::Action*/}
                                                                <div className="d-flex justify-content-end align-items-center">
                                                                    {/*begin::Button*/}
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto me-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_add_one_time_password"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                        <span className="svg-icon svg-icon-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </button>
                                                                    {/*end::Button*/}
                                                                    {/*begin::Button*/}
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                        id="kt_users_delete_two_step"
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
                                                                    {/*end::Button*/}
                                                                </div>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin:Separator*/}
                                                            <div className="separator separator-dashed my-5" />
                                                            {/*end:Separator*/}
                                                            {/*begin::Disclaimer*/}
                                                            <div className="text-gray-600">
                                                                If you lose your mobile device or security key, you
                                                                can
                                                                <NavLink to="#" className="me-1">
                                                                    generate a backup code
                                                                </NavLink>
                                                                to sign in to your account.
                                                            </div>
                                                            {/*end::Disclaimer*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                    {/*begin::Card*/}
                                                    <div className="card pt-4 mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title flex-column">
                                                                <h2>Email Notifications</h2>
                                                                <div className="fs-6 fw-bold text-muted">
                                                                    Choose what messages you’d like to receive for each
                                                                    of your accounts.
                                                                </div>
                                                            </div>
                                                            {/*end::Card title*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body">
                                                            {/*begin::Form*/}
                                                            <form
                                                                className="form"
                                                                id="kt_users_email_notification_form"
                                                            >
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_0"
                                                                            type="checkbox"
                                                                            defaultValue={0}
                                                                            id="kt_modal_update_email_notification_0"
                                                                            defaultChecked="checked"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_0"
                                                                        >
                                                                            <div className="fw-bolder">
                                                                                Successful Payments
                                                                            </div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification for every successful
                                                                                payment.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_1"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                            id="kt_modal_update_email_notification_1"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_1"
                                                                        >
                                                                            <div className="fw-bolder">Payouts</div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification for every initiated
                                                                                payout.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_2"
                                                                            type="checkbox"
                                                                            defaultValue={2}
                                                                            id="kt_modal_update_email_notification_2"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_2"
                                                                        >
                                                                            <div className="fw-bolder">
                                                                                Application fees
                                                                            </div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification each time you collect a
                                                                                fee from an account.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_3"
                                                                            type="checkbox"
                                                                            defaultValue={3}
                                                                            id="kt_modal_update_email_notification_3"
                                                                            defaultChecked="checked"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_3"
                                                                        >
                                                                            <div className="fw-bolder">Disputes</div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification if a payment is
                                                                                disputed by a customer and for dispute
                                                                                resolutions.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_4"
                                                                            type="checkbox"
                                                                            defaultValue={4}
                                                                            id="kt_modal_update_email_notification_4"
                                                                            defaultChecked="checked"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_4"
                                                                        >
                                                                            <div className="fw-bolder">Payment reviews</div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification if a payment is marked
                                                                                as an elevated risk.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_5"
                                                                            type="checkbox"
                                                                            defaultValue={5}
                                                                            id="kt_modal_update_email_notification_5"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_5"
                                                                        >
                                                                            <div className="fw-bolder">Mentions</div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification if a teammate mentions
                                                                                you in a note.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_6"
                                                                            type="checkbox"
                                                                            defaultValue={6}
                                                                            id="kt_modal_update_email_notification_6"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_6"
                                                                        >
                                                                            <div className="fw-bolder">
                                                                                Invoice Mispayments
                                                                            </div>
                                                                            <div className="text-gray-600">
                                                                                Receive a notification if a customer sends an
                                                                                incorrect amount to pay their invoice.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_7"
                                                                            type="checkbox"
                                                                            defaultValue={7}
                                                                            id="kt_modal_update_email_notification_7"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_7"
                                                                        >
                                                                            <div className="fw-bolder">Webhooks</div>
                                                                            <div className="text-gray-600">
                                                                                Receive notifications about consistently
                                                                                failing webhook endpoints.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                <div className="separator separator-dashed my-5" />
                                                                {/*begin::Item*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            name="email_notification_8"
                                                                            type="checkbox"
                                                                            defaultValue={8}
                                                                            id="kt_modal_update_email_notification_8"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="kt_modal_update_email_notification_8"
                                                                        >
                                                                            <div className="fw-bolder">Trial</div>
                                                                            <div className="text-gray-600">
                                                                                Receive helpful tips when you try out our
                                                                                products.
                                                                            </div>
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Action buttons*/}
                                                                <div className="d-flex justify-content-end align-items-center mt-12">
                                                                    {/*begin::Button*/}
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-light me-5"
                                                                        id="kt_users_email_notification_cancel"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    {/*end::Button*/}
                                                                    {/*begin::Button*/}
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary"
                                                                        id="kt_users_email_notification_submit"
                                                                    >
                                                                        <span className="indicator-label">Save</span>
                                                                        <span className="indicator-progress">
                                                                            Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                        </span>
                                                                    </button>
                                                                    {/*end::Button*/}
                                                                </div>
                                                                {/*begin::Action buttons*/}
                                                            </form>
                                                            {/*end::Form*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                        {/*begin::Card footer*/}
                                                        {/*end::Card footer*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>
                                                {/*end:::Tab pane*/}
                                                {/*begin:::Tab pane*/}
                                                <div
                                                    className="tab-pane fade"
                                                    id="kt_user_view_overview_events_and_logs_tab"
                                                    role="tabpanel"
                                                >
                                                    {/*begin::Card*/}
                                                    <div className="card pt-4 mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title">
                                                                <h2>Login Sessions</h2>
                                                            </div>
                                                            {/*end::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                {/*begin::Filter*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm btn-flex btn-light-primary"
                                                                    id="kt_modal_sign_out_sesions"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr077.svg*/}
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
                                                                                x={4}
                                                                                y={11}
                                                                                width={12}
                                                                                height={2}
                                                                                rx={1}
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M5.86875 11.6927L7.62435 10.2297C8.09457 9.83785 8.12683 9.12683 7.69401 8.69401C7.3043 8.3043 6.67836 8.28591 6.26643 8.65206L3.34084 11.2526C2.89332 11.6504 2.89332 12.3496 3.34084 12.7474L6.26643 15.3479C6.67836 15.7141 7.3043 15.6957 7.69401 15.306C8.12683 14.8732 8.09458 14.1621 7.62435 13.7703L5.86875 12.3073C5.67684 12.1474 5.67684 11.8526 5.86875 11.6927Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                                                                                fill="#C4C4C4"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}Sign out all sessions
                                                                </button>
                                                                {/*end::Filter*/}
                                                            </div>
                                                            {/*end::Card toolbar*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body pt-0 pb-5">
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    className="table align-middle table-row-dashed gy-5"
                                                                    id="kt_table_users_login_session"
                                                                >
                                                                    {/*begin::Table head*/}
                                                                    <thead className="border-bottom border-gray-200 fs-7 fw-bolder">
                                                                        {/*begin::Table row*/}
                                                                        <tr className="text-start text-muted text-uppercase gs-0">
                                                                            <th className="min-w-100px">Location</th>
                                                                            <th>Device</th>
                                                                            <th>IP Address</th>
                                                                            <th className="min-w-125px">Time</th>
                                                                            <th className="min-w-70px">Actions</th>
                                                                        </tr>
                                                                        {/*end::Table row*/}
                                                                    </thead>
                                                                    {/*end::Table head*/}
                                                                    {/*begin::Table body*/}
                                                                    <tbody className="fs-6 fw-bold text-gray-600">
                                                                        <tr>
                                                                            {/*begin::Invoice=*/}
                                                                            <td>Australia</td>
                                                                            {/*end::Invoice=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>Chome - Windows</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Amount=*/}
                                                                            <td>207.26.48.349</td>
                                                                            {/*end::Amount=*/}
                                                                            {/*begin::Date=*/}
                                                                            <td>23 seconds ago</td>
                                                                            {/*end::Date=*/}
                                                                            {/*begin::Action=*/}
                                                                            <td>Current session</td>
                                                                            {/*end::Action=*/}
                                                                        </tr>
                                                                        <tr>
                                                                            {/*begin::Invoice=*/}
                                                                            <td>Australia</td>
                                                                            {/*end::Invoice=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>Safari - iOS</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Amount=*/}
                                                                            <td>207.49.44.230</td>
                                                                            {/*end::Amount=*/}
                                                                            {/*begin::Date=*/}
                                                                            <td>3 days ago</td>
                                                                            {/*end::Date=*/}
                                                                            {/*begin::Action=*/}
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    data-kt-users-sign-out="single_user"
                                                                                >
                                                                                    Sign out
                                                                                </NavLink>
                                                                            </td>
                                                                            {/*end::Action=*/}
                                                                        </tr>
                                                                        <tr>
                                                                            {/*begin::Invoice=*/}
                                                                            <td>Australia</td>
                                                                            {/*end::Invoice=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>Chrome - Windows</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Amount=*/}
                                                                            <td>207.25.50.39</td>
                                                                            {/*end::Amount=*/}
                                                                            {/*begin::Date=*/}
                                                                            <td>last week</td>
                                                                            {/*end::Date=*/}
                                                                            {/*begin::Action=*/}
                                                                            <td>Expired</td>
                                                                            {/*end::Action=*/}
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Table body*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                    {/*begin::Card*/}
                                                    <div className="card pt-4 mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title">
                                                                <h2>Logs</h2>
                                                            </div>
                                                            {/*end::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                {/*begin::Button*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm btn-light-primary"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/files/fil021.svg*/}
                                                                    <span className="svg-icon svg-icon-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}Download Report
                                                                </button>
                                                                {/*end::Button*/}
                                                            </div>
                                                            {/*end::Card toolbar*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body py-0">
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    className="table align-middle table-row-dashed fw-bold text-gray-600 fs-6 gy-5"
                                                                    id="kt_table_users_logs"
                                                                >
                                                                    {/*begin::Table body*/}
                                                                    <tbody>
                                                                        {/*begin::Table row*/}
                                                                        <tr>
                                                                            {/*begin::Badge=*/}
                                                                            <td className="min-w-70px">
                                                                                <div className="badge badge-light-warning">
                                                                                    404 WRN
                                                                                </div>
                                                                            </td>
                                                                            {/*end::Badge=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>
                                                                                POST /v1/customer/c_61b9c7bebc106/not_found
                                                                            </td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Timestamp=*/}
                                                                            <td className="pe-0 text-end min-w-200px">
                                                                                20 Dec 2021, 10:10 pm
                                                                            </td>
                                                                            {/*end::Timestamp=*/}
                                                                        </tr>
                                                                        {/*end::Table row*/}
                                                                        {/*begin::Table row*/}
                                                                        <tr>
                                                                            {/*begin::Badge=*/}
                                                                            <td className="min-w-70px">
                                                                                <div className="badge badge-light-success">
                                                                                    200 OK
                                                                                </div>
                                                                            </td>
                                                                            {/*end::Badge=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>POST /v1/invoices/in_1415_5189/payment</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Timestamp=*/}
                                                                            <td className="pe-0 text-end min-w-200px">
                                                                                21 Feb 2021, 5:20 pm
                                                                            </td>
                                                                            {/*end::Timestamp=*/}
                                                                        </tr>
                                                                        {/*end::Table row*/}
                                                                        {/*begin::Table row*/}
                                                                        <tr>
                                                                            {/*begin::Badge=*/}
                                                                            <td className="min-w-70px">
                                                                                <div className="badge badge-light-danger">
                                                                                    500 ERR
                                                                                </div>
                                                                            </td>
                                                                            {/*end::Badge=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>POST /v1/invoice/in_4039_6581/invalid</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Timestamp=*/}
                                                                            <td className="pe-0 text-end min-w-200px">
                                                                                10 Nov 2021, 5:20 pm
                                                                            </td>
                                                                            {/*end::Timestamp=*/}
                                                                        </tr>
                                                                        {/*end::Table row*/}
                                                                        {/*begin::Table row*/}
                                                                        <tr>
                                                                            {/*begin::Badge=*/}
                                                                            <td className="min-w-70px">
                                                                                <div className="badge badge-light-danger">
                                                                                    500 ERR
                                                                                </div>
                                                                            </td>
                                                                            {/*end::Badge=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>POST /v1/invoice/in_8765_2424/invalid</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Timestamp=*/}
                                                                            <td className="pe-0 text-end min-w-200px">
                                                                                05 May 2021, 6:05 pm
                                                                            </td>
                                                                            {/*end::Timestamp=*/}
                                                                        </tr>
                                                                        {/*end::Table row*/}
                                                                        {/*begin::Table row*/}
                                                                        <tr>
                                                                            {/*begin::Badge=*/}
                                                                            <td className="min-w-70px">
                                                                                <div className="badge badge-light-danger">
                                                                                    500 ERR
                                                                                </div>
                                                                            </td>
                                                                            {/*end::Badge=*/}
                                                                            {/*begin::Status=*/}
                                                                            <td>POST /v1/invoice/in_2559_1579/invalid</td>
                                                                            {/*end::Status=*/}
                                                                            {/*begin::Timestamp=*/}
                                                                            <td className="pe-0 text-end min-w-200px">
                                                                                22 Sep 2021, 10:10 pm
                                                                            </td>
                                                                            {/*end::Timestamp=*/}
                                                                        </tr>
                                                                        {/*end::Table row*/}
                                                                    </tbody>
                                                                    {/*end::Table body*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                    {/*begin::Card*/}
                                                    <div className="card pt-4 mb-6 mb-xl-9">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title">
                                                                <h2>Events</h2>
                                                            </div>
                                                            {/*end::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                {/*begin::Button*/}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm btn-light-primary"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/files/fil021.svg*/}
                                                                    <span className="svg-icon svg-icon-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}Download Report
                                                                </button>
                                                                {/*end::Button*/}
                                                            </div>
                                                            {/*end::Card toolbar*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body py-0">
                                                            {/*begin::Table*/}
                                                            <table
                                                                className="table align-middle table-row-dashed fs-6 text-gray-600 fw-bold gy-5"
                                                                id="kt_table_customers_events"
                                                            >
                                                                {/*begin::Table body*/}
                                                                <tbody>
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            Invoice
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary me-1"
                                                                            >
                                                                                #SEP-45656
                                                                            </NavLink>
                                                                            status has changed from
                                                                            <span className="badge badge-light-warning me-1">
                                                                                Pending
                                                                            </span>
                                                                            to
                                                                            <span className="badge badge-light-info">
                                                                                In Progress
                                                                            </span>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            20 Jun 2021, 11:05 am
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            Invoice
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary me-1"
                                                                            >
                                                                                #KIO-45656
                                                                            </NavLink>
                                                                            status has changed from
                                                                            <span className="badge badge-light-succees me-1">
                                                                                In Transit
                                                                            </span>
                                                                            to
                                                                            <span className="badge badge-light-success">
                                                                                Approved
                                                                            </span>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            19 Aug 2021, 6:05 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Brian Cox
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #OLP-45690
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            15 Apr 2021, 5:20 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Brian Cox
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #OLP-45690
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            25 Jul 2021, 10:10 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Max Smith
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #SDK-45670
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            05 May 2021, 8:43 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            Invoice
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary me-1"
                                                                            >
                                                                                #LOP-45640
                                                                            </NavLink>
                                                                            has been
                                                                            <span className="badge badge-light-danger">
                                                                                Declined
                                                                            </span>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            25 Oct 2021, 5:30 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Emma Smith
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #XRS-45670
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            24 Jun 2021, 11:05 am
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Max Smith
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #SDK-45670
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            15 Apr 2021, 8:43 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Brian Cox
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #OLP-45690
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            15 Apr 2021, 5:30 pm
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        {/*begin::Event=*/}
                                                                        <td className="min-w-400px">
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-gray-600 text-hover-primary me-1"
                                                                            >
                                                                                Melody Macy
                                                                            </NavLink>
                                                                            has made payment to
                                                                            <NavLink
                                                                                to="#"
                                                                                className="fw-bolder text-gray-900 text-hover-primary"
                                                                            >
                                                                                #XRS-45670
                                                                            </NavLink>
                                                                        </td>
                                                                        {/*end::Event=*/}
                                                                        {/*begin::Timestamp=*/}
                                                                        <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                            19 Aug 2021, 10:30 am
                                                                        </td>
                                                                        {/*end::Timestamp=*/}
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
                                                {/*end:::Tab pane*/}
                                            </div>
                                            {/*end:::Tab content*/}
                                        </div>
                                        {/*end::Content*/}
                                    </div>
                                    {/*end::Layout*/}
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - Update user details*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_update_details"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-650px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Form*/}
                                                <form
                                                    className="form"
                                                    action="#"
                                                    id="kt_modal_update_user_form"
                                                >
                                                    {/*begin::Modal header*/}
                                                    <div
                                                        className="modal-header"
                                                        id="kt_modal_update_user_header"
                                                    >
                                                        {/*begin::Modal title*/}
                                                        <h2 className="fw-bolder">Update User Details</h2>
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
                                                    <div className="modal-body py-10 px-lg-17">
                                                        {/*begin::Scroll*/}
                                                        <div
                                                            className="d-flex flex-column scroll-y me-n7 pe-7"
                                                            id="kt_modal_update_user_scroll"
                                                            data-kt-scroll="true"
                                                            data-kt-scroll-activate="{default: false, lg: true}"
                                                            data-kt-scroll-max-height="auto"
                                                            data-kt-scroll-dependencies="#kt_modal_update_user_header"
                                                            data-kt-scroll-wrappers="#kt_modal_update_user_scroll"
                                                            data-kt-scroll-offset="300px"
                                                        >
                                                            {/*begin::User toggle*/}
                                                            <div
                                                                className="fw-boldest fs-3 rotate collapsible mb-7"
                                                                data-bs-toggle="collapse"
                                                                to="#kt_modal_update_user_user_info"
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="kt_modal_update_user_user_info"
                                                            >
                                                                User Information
                                                                <span className="ms-2 rotate-180">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                    <span className="svg-icon svg-icon-3">
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
                                                                </span>
                                                            </div>
                                                            {/*end::User toggle*/}
                                                            {/*begin::User form*/}
                                                            <div
                                                                id="kt_modal_update_user_user_info"
                                                                className="collapse show"
                                                            >
                                                                {/*begin::Input group*/}
                                                                <div className="mb-7">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        <span>Update Avatar</span>
                                                                        <i
                                                                            className="fas fa-exclamation-circle ms-1 fs-7"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Allowed file types: png, jpg, jpeg."
                                                                        />
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Image input wrapper*/}
                                                                    <div className="mt-1">
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
                                                                                        "url(assets/media/avatars/150-1.jpg"
                                                                                }}
                                                                            />
                                                                            {/*end::Preview existing avatar*/}
                                                                            {/*begin::Edit*/}
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
                                                                            {/*end::Edit*/}
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
                                                                    </div>
                                                                    {/*end::Image input wrapper*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row mb-7">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">Name</label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="name"
                                                                        defaultValue="Emma Smith"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row mb-7">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        <span>Email</span>
                                                                        <i
                                                                            className="fas fa-exclamation-circle ms-1 fs-7"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Email address must be active"
                                                                        />
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="email"
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="email"
                                                                        defaultValue="e.smith@kpmg.com.au"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row mb-7">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        Description
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="description"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row mb-15">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        Language
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <select
                                                                        name="language"
                                                                        aria-label="Select a Language"
                                                                        data-control="select2"
                                                                        data-placeholder="Select a Language..."
                                                                        className="form-select form-select-solid"
                                                                        data-dropdown-parent="#kt_modal_update_details"
                                                                    >
                                                                        <option />
                                                                        <option value="id">
                                                                            Bahasa Indonesia - Indonesian
                                                                        </option>
                                                                        <option value="msa">Bahasa Melayu - Malay</option>
                                                                        <option value="ca">Català - Catalan</option>
                                                                        <option value="cs">Čeština - Czech</option>
                                                                        <option value="da">Dansk - Danish</option>
                                                                        <option value="de">Deutsch - German</option>
                                                                        <option value="en">English</option>
                                                                        <option value="en-gb">
                                                                            English UK - British English
                                                                        </option>
                                                                        <option value="es">Español - Spanish</option>
                                                                        <option value="fil">Filipino</option>
                                                                        <option value="fr">Français - French</option>
                                                                        <option value="ga">Gaeilge - Irish (beta)</option>
                                                                        <option value="gl">
                                                                            Galego - Galician (beta)
                                                                        </option>
                                                                        <option value="hr">Hrvatski - Croatian</option>
                                                                        <option value="it">Italiano - Italian</option>
                                                                        <option value="hu">Magyar - Hungarian</option>
                                                                        <option value="nl">Nederlands - Dutch</option>
                                                                        <option value="no">Norsk - Norwegian</option>
                                                                        <option value="pl">Polski - Polish</option>
                                                                        <option value="pt">Português - Portuguese</option>
                                                                        <option value="ro">Română - Romanian</option>
                                                                        <option value="sk">Slovenčina - Slovak</option>
                                                                        <option value="fi">Suomi - Finnish</option>
                                                                        <option value="sv">Svenska - Swedish</option>
                                                                        <option value="vi">
                                                                            Tiếng Việt - Vietnamese
                                                                        </option>
                                                                        <option value="tr">Türkçe - Turkish</option>
                                                                        <option value="el">Ελληνικά - Greek</option>
                                                                        <option value="bg">
                                                                            Български език - Bulgarian
                                                                        </option>
                                                                        <option value="ru">Русский - Russian</option>
                                                                        <option value="sr">Српски - Serbian</option>
                                                                        <option value="uk">
                                                                            Українська мова - Ukrainian
                                                                        </option>
                                                                        <option value="he">עִבְרִית - Hebrew</option>
                                                                        <option value="ur">اردو - Urdu (beta)</option>
                                                                        <option value="ar">العربية - Arabic</option>
                                                                        <option value="fa">فارسی - Persian</option>
                                                                        <option value="mr">मराठी - Marathi</option>
                                                                        <option value="hi">हिन्दी - Hindi</option>
                                                                        <option value="bn">বাংলা - Bangla</option>
                                                                        <option value="gu">ગુજરાતી - Gujarati</option>
                                                                        <option value="ta">தமிழ் - Tamil</option>
                                                                        <option value="kn">ಕನ್ನಡ - Kannada</option>
                                                                        <option value="th">ภาษาไทย - Thai</option>
                                                                        <option value="ko">한국어 - Korean</option>
                                                                        <option value="ja">日本語 - Japanese</option>
                                                                        <option value="zh-cn">
                                                                            简体中文 - Simplified Chinese
                                                                        </option>
                                                                        <option value="zh-tw">
                                                                            繁體中文 - Traditional Chinese
                                                                        </option>
                                                                    </select>
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                            </div>
                                                            {/*end::User form*/}
                                                            {/*begin::Address toggle*/}
                                                            <div
                                                                className="fw-boldest fs-3 rotate collapsible mb-7"
                                                                data-bs-toggle="collapse"
                                                                to="#kt_modal_update_user_address"
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="kt_modal_update_user_address"
                                                            >
                                                                Address Details
                                                                <span className="ms-2 rotate-180">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                    <span className="svg-icon svg-icon-3">
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
                                                                </span>
                                                            </div>
                                                            {/*end::Address toggle*/}
                                                            {/*begin::Address form*/}
                                                            <div
                                                                id="kt_modal_update_user_address"
                                                                className="collapse show"
                                                            >
                                                                {/*begin::Input group*/}
                                                                <div className="d-flex flex-column mb-7 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        Address Line 1
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="address1"
                                                                        defaultValue="101, Collins Street"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="d-flex flex-column mb-7 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        Address Line 2
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="address2"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="d-flex flex-column mb-7 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">Town</label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="city"
                                                                        defaultValue="Melbourne"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="row g-9 mb-7">
                                                                    {/*begin::Col*/}
                                                                    <div className="col-md-6 fv-row">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-6 fw-bold mb-2">
                                                                            State / Province
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-control form-control-solid"
                                                                            placeholder
                                                                            name="state"
                                                                            defaultValue="Victoria"
                                                                        />
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col-md-6 fv-row">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-6 fw-bold mb-2">
                                                                            Post Code
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-control form-control-solid"
                                                                            placeholder
                                                                            name="postcode"
                                                                            defaultValue={3000}
                                                                        />
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="d-flex flex-column mb-7 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        <span>Country</span>
                                                                        <i
                                                                            className="fas fa-exclamation-circle ms-1 fs-7"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Country of origination"
                                                                        />
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <select
                                                                        name="country"
                                                                        aria-label="Select a Country"
                                                                        data-control="select2"
                                                                        data-placeholder="Select a Country..."
                                                                        className="form-select form-select-solid"
                                                                        data-dropdown-parent="#kt_modal_update_details"
                                                                    >
                                                                        <option value>Select a Country...</option>
                                                                        <option value="AF">Afghanistan</option>
                                                                        <option value="AX">Aland Islands</option>
                                                                        <option value="AL">Albania</option>
                                                                        <option value="DZ">Algeria</option>
                                                                        <option value="AS">American Samoa</option>
                                                                        <option value="AD">Andorra</option>
                                                                        <option value="AO">Angola</option>
                                                                        <option value="AI">Anguilla</option>
                                                                        <option value="AG">Antigua and Barbuda</option>
                                                                        <option value="AR">Argentina</option>
                                                                        <option value="AM">Armenia</option>
                                                                        <option value="AW">Aruba</option>
                                                                        <option value="AU">Australia</option>
                                                                        <option value="AT">Austria</option>
                                                                        <option value="AZ">Azerbaijan</option>
                                                                        <option value="BS">Bahamas</option>
                                                                        <option value="BH">Bahrain</option>
                                                                        <option value="BD">Bangladesh</option>
                                                                        <option value="BB">Barbados</option>
                                                                        <option value="BY">Belarus</option>
                                                                        <option value="BE">Belgium</option>
                                                                        <option value="BZ">Belize</option>
                                                                        <option value="BJ">Benin</option>
                                                                        <option value="BM">Bermuda</option>
                                                                        <option value="BT">Bhutan</option>
                                                                        <option value="BO">
                                                                            Bolivia, Plurinational State of
                                                                        </option>
                                                                        <option value="BQ">
                                                                            Bonaire, Sint Eustatius and Saba
                                                                        </option>
                                                                        <option value="BA">Bosnia and Herzegovina</option>
                                                                        <option value="BW">Botswana</option>
                                                                        <option value="BR">Brazil</option>
                                                                        <option value="IO">
                                                                            British Indian Ocean Territory
                                                                        </option>
                                                                        <option value="BN">Brunei Darussalam</option>
                                                                        <option value="BG">Bulgaria</option>
                                                                        <option value="BF">Burkina Faso</option>
                                                                        <option value="BI">Burundi</option>
                                                                        <option value="KH">Cambodia</option>
                                                                        <option value="CM">Cameroon</option>
                                                                        <option value="CA">Canada</option>
                                                                        <option value="CV">Cape Verde</option>
                                                                        <option value="KY">Cayman Islands</option>
                                                                        <option value="CF">
                                                                            Central African Republic
                                                                        </option>
                                                                        <option value="TD">Chad</option>
                                                                        <option value="CL">Chile</option>
                                                                        <option value="CN">China</option>
                                                                        <option value="CX">Christmas Island</option>
                                                                        <option value="CC">
                                                                            Cocos (Keeling) Islands
                                                                        </option>
                                                                        <option value="CO">Colombia</option>
                                                                        <option value="KM">Comoros</option>
                                                                        <option value="CK">Cook Islands</option>
                                                                        <option value="CR">Costa Rica</option>
                                                                        <option value="CI">Côte d'Ivoire</option>
                                                                        <option value="HR">Croatia</option>
                                                                        <option value="CU">Cuba</option>
                                                                        <option value="CW">Curaçao</option>
                                                                        <option value="CZ">Czech Republic</option>
                                                                        <option value="DK">Denmark</option>
                                                                        <option value="DJ">Djibouti</option>
                                                                        <option value="DM">Dominica</option>
                                                                        <option value="DO">Dominican Republic</option>
                                                                        <option value="EC">Ecuador</option>
                                                                        <option value="EG">Egypt</option>
                                                                        <option value="SV">El Salvador</option>
                                                                        <option value="GQ">Equatorial Guinea</option>
                                                                        <option value="ER">Eritrea</option>
                                                                        <option value="EE">Estonia</option>
                                                                        <option value="ET">Ethiopia</option>
                                                                        <option value="FK">
                                                                            Falkland Islands (Malvinas)
                                                                        </option>
                                                                        <option value="FJ">Fiji</option>
                                                                        <option value="FI">Finland</option>
                                                                        <option value="FR">France</option>
                                                                        <option value="PF">French Polynesia</option>
                                                                        <option value="GA">Gabon</option>
                                                                        <option value="GM">Gambia</option>
                                                                        <option value="GE">Georgia</option>
                                                                        <option value="DE">Germany</option>
                                                                        <option value="GH">Ghana</option>
                                                                        <option value="GI">Gibraltar</option>
                                                                        <option value="GR">Greece</option>
                                                                        <option value="GL">Greenland</option>
                                                                        <option value="GD">Grenada</option>
                                                                        <option value="GU">Guam</option>
                                                                        <option value="GT">Guatemala</option>
                                                                        <option value="GG">Guernsey</option>
                                                                        <option value="GN">Guinea</option>
                                                                        <option value="GW">Guinea-Bissau</option>
                                                                        <option value="HT">Haiti</option>
                                                                        <option value="VA">
                                                                            Holy See (Vatican City State)
                                                                        </option>
                                                                        <option value="HN">Honduras</option>
                                                                        <option value="HK">Hong Kong</option>
                                                                        <option value="HU">Hungary</option>
                                                                        <option value="IS">Iceland</option>
                                                                        <option value="IN">India</option>
                                                                        <option value="ID">Indonesia</option>
                                                                        <option value="IR">
                                                                            Iran, Islamic Republic of
                                                                        </option>
                                                                        <option value="IQ">Iraq</option>
                                                                        <option value="IE">Ireland</option>
                                                                        <option value="IM">Isle of Man</option>
                                                                        <option value="IL">Israel</option>
                                                                        <option value="IT">Italy</option>
                                                                        <option value="JM">Jamaica</option>
                                                                        <option value="JP">Japan</option>
                                                                        <option value="JE">Jersey</option>
                                                                        <option value="JO">Jordan</option>
                                                                        <option value="KZ">Kazakhstan</option>
                                                                        <option value="KE">Kenya</option>
                                                                        <option value="KI">Kiribati</option>
                                                                        <option value="KP">
                                                                            Korea, Democratic People's Republic of
                                                                        </option>
                                                                        <option value="KW">Kuwait</option>
                                                                        <option value="KG">Kyrgyzstan</option>
                                                                        <option value="LA">
                                                                            Lao People's Democratic Republic
                                                                        </option>
                                                                        <option value="LV">Latvia</option>
                                                                        <option value="LB">Lebanon</option>
                                                                        <option value="LS">Lesotho</option>
                                                                        <option value="LR">Liberia</option>
                                                                        <option value="LY">Libya</option>
                                                                        <option value="LI">Liechtenstein</option>
                                                                        <option value="LT">Lithuania</option>
                                                                        <option value="LU">Luxembourg</option>
                                                                        <option value="MO">Macao</option>
                                                                        <option value="MG">Madagascar</option>
                                                                        <option value="MW">Malawi</option>
                                                                        <option value="MY">Malaysia</option>
                                                                        <option value="MV">Maldives</option>
                                                                        <option value="ML">Mali</option>
                                                                        <option value="MT">Malta</option>
                                                                        <option value="MH">Marshall Islands</option>
                                                                        <option value="MQ">Martinique</option>
                                                                        <option value="MR">Mauritania</option>
                                                                        <option value="MU">Mauritius</option>
                                                                        <option value="MX">Mexico</option>
                                                                        <option value="FM">
                                                                            Micronesia, Federated States of
                                                                        </option>
                                                                        <option value="MD">Moldova, Republic of</option>
                                                                        <option value="MC">Monaco</option>
                                                                        <option value="MN">Mongolia</option>
                                                                        <option value="ME">Montenegro</option>
                                                                        <option value="MS">Montserrat</option>
                                                                        <option value="MA">Morocco</option>
                                                                        <option value="MZ">Mozambique</option>
                                                                        <option value="MM">Myanmar</option>
                                                                        <option value="NA">Namibia</option>
                                                                        <option value="NR">Nauru</option>
                                                                        <option value="NP">Nepal</option>
                                                                        <option value="NL">Netherlands</option>
                                                                        <option value="NZ">New Zealand</option>
                                                                        <option value="NI">Nicaragua</option>
                                                                        <option value="NE">Niger</option>
                                                                        <option value="NG">Nigeria</option>
                                                                        <option value="NU">Niue</option>
                                                                        <option value="NF">Norfolk Island</option>
                                                                        <option value="MP">
                                                                            Northern Mariana Islands
                                                                        </option>
                                                                        <option value="NO">Norway</option>
                                                                        <option value="OM">Oman</option>
                                                                        <option value="PK">Pakistan</option>
                                                                        <option value="PW">Palau</option>
                                                                        <option value="PS">
                                                                            Palestinian Territory, Occupied
                                                                        </option>
                                                                        <option value="PA">Panama</option>
                                                                        <option value="PG">Papua New Guinea</option>
                                                                        <option value="PY">Paraguay</option>
                                                                        <option value="PE">Peru</option>
                                                                        <option value="PH">Philippines</option>
                                                                        <option value="PL">Poland</option>
                                                                        <option value="PT">Portugal</option>
                                                                        <option value="PR">Puerto Rico</option>
                                                                        <option value="QA">Qatar</option>
                                                                        <option value="RO">Romania</option>
                                                                        <option value="RU">Russian Federation</option>
                                                                        <option value="RW">Rwanda</option>
                                                                        <option value="BL">Saint Barthélemy</option>
                                                                        <option value="KN">Saint Kitts and Nevis</option>
                                                                        <option value="LC">Saint Lucia</option>
                                                                        <option value="MF">
                                                                            Saint Martin (French part)
                                                                        </option>
                                                                        <option value="VC">
                                                                            Saint Vincent and the Grenadines
                                                                        </option>
                                                                        <option value="WS">Samoa</option>
                                                                        <option value="SM">San Marino</option>
                                                                        <option value="ST">Sao Tome and Principe</option>
                                                                        <option value="SA">Saudi Arabia</option>
                                                                        <option value="SN">Senegal</option>
                                                                        <option value="RS">Serbia</option>
                                                                        <option value="SC">Seychelles</option>
                                                                        <option value="SL">Sierra Leone</option>
                                                                        <option value="SG">Singapore</option>
                                                                        <option value="SX">
                                                                            Sint Maarten (Dutch part)
                                                                        </option>
                                                                        <option value="SK">Slovakia</option>
                                                                        <option value="SI">Slovenia</option>
                                                                        <option value="SB">Solomon Islands</option>
                                                                        <option value="SO">Somalia</option>
                                                                        <option value="ZA">South Africa</option>
                                                                        <option value="KR">South Korea</option>
                                                                        <option value="SS">South Sudan</option>
                                                                        <option value="ES">Spain</option>
                                                                        <option value="LK">Sri Lanka</option>
                                                                        <option value="SD">Sudan</option>
                                                                        <option value="SR">Suriname</option>
                                                                        <option value="SZ">Swaziland</option>
                                                                        <option value="SE">Sweden</option>
                                                                        <option value="CH">Switzerland</option>
                                                                        <option value="SY">Syrian Arab Republic</option>
                                                                        <option value="TW">
                                                                            Taiwan, Province of China
                                                                        </option>
                                                                        <option value="TJ">Tajikistan</option>
                                                                        <option value="TZ">
                                                                            Tanzania, United Republic of
                                                                        </option>
                                                                        <option value="TH">Thailand</option>
                                                                        <option value="TG">Togo</option>
                                                                        <option value="TK">Tokelau</option>
                                                                        <option value="TO">Tonga</option>
                                                                        <option value="TT">Trinidad and Tobago</option>
                                                                        <option value="TN">Tunisia</option>
                                                                        <option value="TR">Turkey</option>
                                                                        <option value="TM">Turkmenistan</option>
                                                                        <option value="TC">
                                                                            Turks and Caicos Islands
                                                                        </option>
                                                                        <option value="TV">Tuvalu</option>
                                                                        <option value="UG">Uganda</option>
                                                                        <option value="UA">Ukraine</option>
                                                                        <option value="AE">United Arab Emirates</option>
                                                                        <option value="GB">United Kingdom</option>
                                                                        <option value="US">United States</option>
                                                                        <option value="UY">Uruguay</option>
                                                                        <option value="UZ">Uzbekistan</option>
                                                                        <option value="VU">Vanuatu</option>
                                                                        <option value="VE">
                                                                            Venezuela, Bolivarian Republic of
                                                                        </option>
                                                                        <option value="VN">Vietnam</option>
                                                                        <option value="VI">Virgin Islands</option>
                                                                        <option value="YE">Yemen</option>
                                                                        <option value="ZM">Zambia</option>
                                                                        <option value="ZW">Zimbabwe</option>
                                                                    </select>
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                            </div>
                                                            {/*end::Address form*/}
                                                        </div>
                                                        {/*end::Scroll*/}
                                                    </div>
                                                    {/*end::Modal body*/}
                                                    {/*begin::Modal footer*/}
                                                    <div className="modal-footer flex-center">
                                                        {/*begin::Button*/}
                                                        <button
                                                            type="reset"
                                                            className="btn btn-light me-3"
                                                            data-kt-users-modal-action="cancel"
                                                        >
                                                            Discard
                                                        </button>
                                                        {/*end::Button*/}
                                                        {/*begin::Button*/}
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
                                                        {/*end::Button*/}
                                                    </div>
                                                    {/*end::Modal footer*/}
                                                </form>
                                                {/*end::Form*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Modal - Update user details*/}
                                    {/*begin::Modal - Add schedule*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_schedule"
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
                                                    <h2 className="fw-bolder">Add an Event</h2>
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
                                                        id="kt_modal_add_schedule_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold form-label mb-2">
                                                                Event Name
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                name="event_name"
                                                                defaultValue
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Date &amp; Time</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-html="true"
                                                                    data-bs-content="Select a date & time."
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder="Pick date & time"
                                                                name="event_datetime"
                                                                id="kt_modal_add_schedule_datepicker"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold form-label mb-2">
                                                                Event Organiser
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                name="event_org"
                                                                defaultValue
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold form-label mb-2">
                                                                Send Event Details To
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                id="kt_modal_add_schedule_tagify"
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                name="event_invitees"
                                                                defaultValue="e.smith@kpmg.com.au, melody@altbox.com"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
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
                                    {/*end::Modal - Add schedule*/}
                                    {/*begin::Modal - Add task*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_task"
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
                                                    <h2 className="fw-bolder">Add a Task</h2>
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
                                                        id="kt_modal_add_task_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold form-label mb-2">
                                                                Task Name
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                name="task_name"
                                                                defaultValue
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Task Due Date</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-html="true"
                                                                    data-bs-content="Select a due date."
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder="Pick date"
                                                                name="task_duedate"
                                                                id="kt_modal_add_task_datepicker"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                Task Description
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <textarea
                                                                className="form-control form-control-solid rounded-3"
                                                                defaultValue={""}
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
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
                                    {/*begin::Modal - Update email*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_update_email"
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
                                                    <h2 className="fw-bolder">Update Email Address</h2>
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
                                                        id="kt_modal_update_email_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Notice*/}
                                                        {/*begin::Notice*/}
                                                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                                                            <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
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
                                                                        Please note that a valid email address is required
                                                                        to complete the email verification.
                                                                    </div>
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Notice*/}
                                                        {/*end::Notice*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Email Address</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder
                                                                name="profile_email"
                                                                defaultValue="e.smith@kpmg.com.au"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
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
                                    {/*end::Modal - Update email*/}
                                    {/*begin::Modal - Update password*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_update_password"
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
                                                    <h2 className="fw-bolder">Update Password</h2>
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
                                                        id="kt_modal_update_password_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Input group=*/}
                                                        <div className="fv-row mb-10">
                                                            <label className="required form-label fs-6 mb-2">
                                                                Current Password
                                                            </label>
                                                            <input
                                                                className="form-control form-control-lg form-control-solid"
                                                                type="password"
                                                                placeholder
                                                                name="current_password"
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                        {/*end::Input group=*/}
                                                        {/*begin::Input group*/}
                                                        <div
                                                            className="mb-10 fv-row"
                                                            data-kt-password-meter="true"
                                                        >
                                                            {/*begin::Wrapper*/}
                                                            <div className="mb-1">
                                                                {/*begin::Label*/}
                                                                <label className="form-label fw-bold fs-6 mb-2">
                                                                    New Password
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input wrapper*/}
                                                                <div className="position-relative mb-3">
                                                                    <input
                                                                        className="form-control form-control-lg form-control-solid"
                                                                        type="password"
                                                                        placeholder
                                                                        name="new_password"
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
                                                                Use 8 or more characters with a mix of letters,
                                                                numbers &amp; symbols.
                                                            </div>
                                                            {/*end::Hint*/}
                                                        </div>
                                                        {/*end::Input group=*/}
                                                        {/*begin::Input group=*/}
                                                        <div className="fv-row mb-10">
                                                            <label className="form-label fw-bold fs-6 mb-2">
                                                                Confirm New Password
                                                            </label>
                                                            <input
                                                                className="form-control form-control-lg form-control-solid"
                                                                type="password"
                                                                placeholder
                                                                name="confirm_password"
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                        {/*end::Input group=*/}
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
                                    {/*end::Modal - Update password*/}
                                    {/*begin::Modal - Update role*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_update_role"
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
                                                    <h2 className="fw-bolder">Update User Role</h2>
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
                                                        id="kt_modal_update_role_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Notice*/}
                                                        {/*begin::Notice*/}
                                                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                                                            <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
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
                                                                        Please note that reducing a user role rank, that
                                                                        user will lose all priviledges that was assigned
                                                                        to the previous role.
                                                                    </div>
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Notice*/}
                                                        {/*end::Notice*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-5">
                                                                <span className="required">Select a user role</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input row*/}
                                                            <div className="d-flex">
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
                                                            <div className="d-flex">
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
                                                                            Best for developers or people primarily using
                                                                            the API
                                                                        </div>
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                            {/*end::Input row*/}
                                                            <div className="separator separator-dashed my-5" />
                                                            {/*begin::Input row*/}
                                                            <div className="d-flex">
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
                                                            <div className="d-flex">
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
                                                                            Best for employees who regularly refund payments
                                                                            and respond to disputes
                                                                        </div>
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                            {/*end::Input row*/}
                                                            <div className="separator separator-dashed my-5" />
                                                            {/*begin::Input row*/}
                                                            <div className="d-flex">
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
                                                                            Best for people who need to preview content
                                                                            data, but don't need to make any updates
                                                                        </div>
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                            {/*end::Input row*/}
                                                        </div>
                                                        {/*end::Input group*/}
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
                                    {/*end::Modal - Update role*/}
                                    {/*begin::Modal - Add task*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_auth_app"
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
                                                    <h2 className="fw-bolder">Add Authenticator App</h2>
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
                                                    {/*begin::Content*/}
                                                    <div className="fw-bolder d-flex flex-column justify-content-center mb-5">
                                                        {/*begin::Label*/}
                                                        <div
                                                            className="text-center mb-5"
                                                            data-kt-add-auth-action="qr-code-label"
                                                        >
                                                            Download the
                                                            <NavLink to="#">Authenticator app</NavLink>, add a new account,
                                                            then scan this barcode to set up your account.
                                                        </div>
                                                        <div
                                                            className="text-center mb-5 d-none"
                                                            data-kt-add-auth-action="text-code-label"
                                                        >
                                                            Download the
                                                            <NavLink to="#">Authenticator app</NavLink>, add a new account,
                                                            then enter this code to set up your account.
                                                        </div>
                                                        {/*end::Label*/}
                                                        {/*begin::QR code*/}
                                                        <div
                                                            className="d-flex flex-center"
                                                            data-kt-add-auth-action="qr-code"
                                                        >
                                                            <img
                                                                src="/assets/media/misc/qr-code.png"
                                                                alt="Scan this QR code"
                                                            />
                                                        </div>
                                                        {/*end::QR code*/}
                                                        {/*begin::Text code*/}
                                                        <div
                                                            className="border rounded p-5 d-flex flex-center d-none"
                                                            data-kt-add-auth-action="text-code"
                                                        >
                                                            <div className="fs-1">gi2kdnb54is709j</div>
                                                        </div>
                                                        {/*end::Text code*/}
                                                    </div>
                                                    {/*end::Content*/}
                                                    {/*begin::Action*/}
                                                    <div className="d-flex flex-center">
                                                        <div
                                                            className="btn btn-light-primary"
                                                            data-kt-add-auth-action="text-code-button"
                                                        >
                                                            Enter code manually
                                                        </div>
                                                        <div
                                                            className="btn btn-light-primary d-none"
                                                            data-kt-add-auth-action="qr-code-button"
                                                        >
                                                            Scan barcode instead
                                                        </div>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Add task*/}
                                    {/*begin::Modal - Add task*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_one_time_password"
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
                                                    <h2 className="fw-bolder">Enable One Time Password</h2>
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
                                                        className="form"
                                                        id="kt_modal_add_one_time_password_form"
                                                    >
                                                        {/*begin::Label*/}
                                                        <div className="fw-bolder mb-9">
                                                            Enter the new phone number to receive an SMS to when you
                                                            log in.
                                                        </div>
                                                        {/*end::Label*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Mobile number</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-1 fs-7"
                                                                    data-bs-toggle="tooltip"
                                                                    title="A valid mobile number is required to receive the one-time password to validate your account login."
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                name="otp_mobile_number"
                                                                placeholder="+6123 456 789"
                                                                defaultValue
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator saperator-dashed my-5" />
                                                        {/*end::Separator*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Email</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-solid"
                                                                name="otp_email"
                                                                defaultValue="e.smith@kpmg.com.au"
                                                                readOnly="readonly"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Confirm password</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="password"
                                                                className="form-control form-control-solid"
                                                                name="otp_confirm_password"
                                                                defaultValue
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center pt-15">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-light me-3"
                                                                data-kt-users-modal-action="cancel"
                                                            >
                                                                Cancel
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

export default View
