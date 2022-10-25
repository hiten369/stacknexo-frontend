import React from 'react'
import { NavLink } from 'react-router-dom';

const Listing = () => {
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
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">Messages</h1>
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
                                            <li className="breadcrumb-item text-gray-600">Inbox</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Messages</li>
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
                                                id="kt_menu_61b9c7c3402c6"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7c3402c6"
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
                                    {/*begin::Inbox App - Messages */}
                                    <div className="d-flex flex-column flex-lg-row">
                                        {/*begin::Sidebar*/}
                                        <div className="flex-column flex-lg-row-auto w-100 w-lg-275px mb-10 mb-lg-0">
                                            {/*begin::Sticky aside*/}
                                            <div
                                                className="card card-flush mb-0"
                                                data-kt-sticky="false"
                                                data-kt-sticky-name="inbox-aside-sticky"
                                                data-kt-sticky-offset="{default: false, xl: '0px'}"
                                                data-kt-sticky-width="{lg: '275px'}"
                                                data-kt-sticky-left="auto"
                                                data-kt-sticky-top="150px"
                                                data-kt-sticky-animation="false"
                                                data-kt-sticky-zindex={95}
                                            >
                                                {/*begin::Aside content*/}
                                                <div className="card-body">
                                                    {/*begin::Button*/}
                                                    <NavLink
                                                        to="../../demo14/dist/apps/inbox/compose.html"
                                                        className="btn btn-primary text-uppercase w-100 mb-10"
                                                    >
                                                        New Message
                                                    </NavLink>
                                                    {/*end::Button*/}
                                                    {/*begin::Menu*/}
                                                    <div className="menu menu-column menu-rounded menu-state-bg menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary mb-10">
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::Inbox*/}
                                                            <span className="menu-link active">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bolder">Inbox</span>
                                                                <span className="badge badge-light-success">3</span>
                                                            </span>
                                                            {/*end::Inbox*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::Marked*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs024.svg*/}
                                                                    <span className="svg-icon svg-icon-2 me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M7.16973 20.95C6.26973 21.55 5.16972 20.75 5.46972 19.75L7.36973 14.05L2.46972 10.55C1.56972 9.95005 2.06973 8.55005 3.06973 8.55005H20.8697C21.9697 8.55005 22.3697 9.95005 21.4697 10.55L7.16973 20.95Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.0697 2.75L7.46973 13.95L16.9697 20.85C17.8697 21.45 18.9697 20.65 18.6697 19.65L13.1697 2.75C12.7697 1.75 11.3697 1.75 11.0697 2.75Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bolder">Marked</span>
                                                            </span>
                                                            {/*end::Marked*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::Draft*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21 22H14C13.4 22 13 21.6 13 21V3C13 2.4 13.4 2 14 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M10 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H10C10.6 2 11 2.4 11 3V21C11 21.6 10.6 22 10 22Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bolder">Draft</span>
                                                                <span className="badge badge-light-warning">5</span>
                                                            </span>
                                                            {/*end::Draft*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::Sent*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen016.svg*/}
                                                                    <span className="svg-icon svg-icon-2 me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bolder">Sent</span>
                                                            </span>
                                                            {/*end::Sent*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin::Trash*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 me-3">
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
                                                                </span>
                                                                <span className="menu-title fw-bolder">Trash</span>
                                                            </span>
                                                            {/*end::Trash*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                    </div>
                                                    {/*end::Menu*/}
                                                    {/*begin::Menu*/}
                                                    <div className="menu menu-column menu-rounded menu-state-bg menu-state-title-primary">
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::Custom work*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs009.svg*/}
                                                                    <span className="svg-icon svg-icon-6 svg-icon-danger me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bold">
                                                                    Custom Work
                                                                </span>
                                                                <span className="badge badge-light-danger">6</span>
                                                            </span>
                                                            {/*end::Custom work*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::Partnership*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs009.svg*/}
                                                                    <span className="svg-icon svg-icon-6 svg-icon-success me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bold">
                                                                    Partnership
                                                                </span>
                                                            </span>
                                                            {/*end::Partnership*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item mb-3">
                                                            {/*begin::In progress*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs009.svg*/}
                                                                    <span className="svg-icon svg-icon-6 svg-icon-info me-3">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bold">
                                                                    In Progress
                                                                </span>
                                                            </span>
                                                            {/*end::In progress*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin::Add label*/}
                                                            <span className="menu-link">
                                                                <span className="menu-icon">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                                                    <span className="svg-icon svg-icon-2 me-3">
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
                                                                                width={12}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(-90 11 18)"
                                                                                fill="black"
                                                                            />
                                                                            <rect
                                                                                x={6}
                                                                                y={11}
                                                                                width={12}
                                                                                height={2}
                                                                                rx={1}
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="menu-title fw-bold">Add Label</span>
                                                            </span>
                                                            {/*end::Add label*/}
                                                        </div>
                                                        {/*end::Menu item*/}
                                                    </div>
                                                    {/*end::Menu*/}
                                                </div>
                                                {/*end::Aside content*/}
                                            </div>
                                            {/*end::Sticky aside*/}
                                        </div>
                                        {/*end::Sidebar*/}
                                        {/*begin::Content*/}
                                        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex flex-wrap gap-1">
                                                        {/*begin::Checkbox*/}
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                data-kt-check="true"
                                                                data-kt-check-target="#kt_inbox_listing .form-check-input"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Filter*/}
                                                        <div>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-icon btn-clear btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-start"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-2">
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
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="show_all"
                                                                    >
                                                                        All
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="show_read"
                                                                    >
                                                                        Read
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="show_unread"
                                                                    >
                                                                        Unread
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="show_starred"
                                                                    >
                                                                        Starred
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="show_unstarred"
                                                                    >
                                                                        Unstarred
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::Filter*/}
                                                        {/*begin::Reload*/}
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-sm btn-icon btn-clear btn-active-light-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Reload"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr029.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M14.5 20.7259C14.6 21.2259 14.2 21.826 13.7 21.926C13.2 22.026 12.6 22.0259 12.1 22.0259C9.5 22.0259 6.9 21.0259 5 19.1259C1.4 15.5259 1.09998 9.72592 4.29998 5.82592L5.70001 7.22595C3.30001 10.3259 3.59999 14.8259 6.39999 17.7259C8.19999 19.5259 10.8 20.426 13.4 19.926C13.9 19.826 14.4 20.2259 14.5 20.7259ZM18.4 16.8259L19.8 18.2259C22.9 14.3259 22.7 8.52593 19 4.92593C16.7 2.62593 13.5 1.62594 10.3 2.12594C9.79998 2.22594 9.4 2.72595 9.5 3.22595C9.6 3.72595 10.1 4.12594 10.6 4.02594C13.1 3.62594 15.7 4.42595 17.6 6.22595C20.5 9.22595 20.7 13.7259 18.4 16.8259Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M2 3.62592H7C7.6 3.62592 8 4.02592 8 4.62592V9.62589L2 3.62592ZM16 14.4259V19.4259C16 20.0259 16.4 20.4259 17 20.4259H22L16 14.4259Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </NavLink>
                                                        {/*end::Reload*/}
                                                        {/*begin::Archive*/}
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Archive"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </NavLink>
                                                        {/*end::Archive*/}
                                                        {/*begin::Delete*/}
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Delete"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-2">
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
                                                        </NavLink>
                                                        {/*end::Delete*/}
                                                        {/*begin::Mark as read*/}
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Mark as read"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen028.svg*/}
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
                                                                        x={7}
                                                                        y={2}
                                                                        width={14}
                                                                        height={16}
                                                                        rx={3}
                                                                        fill="black"
                                                                    />
                                                                    <rect
                                                                        x={3}
                                                                        y={6}
                                                                        width={14}
                                                                        height={16}
                                                                        rx={3}
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </NavLink>
                                                        {/*end::Mark as read*/}
                                                        {/*begin::Move*/}
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Move"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr076.svg*/}
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
                                                                        width={12}
                                                                        height={2}
                                                                        rx={1}
                                                                        transform="matrix(-1 0 0 1 15.5 11)"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                                                                        fill="#C4C4C4"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </NavLink>
                                                        {/*end::Move*/}
                                                    </div>
                                                    {/*end::Actions*/}
                                                    {/*begin::Pagination*/}
                                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                                        {/*begin::Search*/}
                                                        <div className="d-flex align-items-center position-relative">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                            <span className="svg-icon svg-icon-2 position-absolute ms-4">
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
                                                                data-kt-inbox-listing-filter="search"
                                                                className="form-control form-control-sm form-control-solid mw-100 min-w-150px min-w-md-200px ps-12"
                                                                placeholder="Search Inbox"
                                                            />
                                                        </div>
                                                        {/*end::Search*/}
                                                        {/*begin::Sort*/}
                                                        <span>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title="Sort"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen059.svg*/}
                                                                <span className="svg-icon svg-icon-2 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={15}
                                                                        viewBox="0 0 16 15"
                                                                        fill="none"
                                                                    >
                                                                        <rect
                                                                            y={6}
                                                                            width={16}
                                                                            height={3}
                                                                            rx="1.5"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            y={12}
                                                                            width={8}
                                                                            height={3}
                                                                            rx="1.5"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            width={12}
                                                                            height={3}
                                                                            rx="1.5"
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
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="filter_newest"
                                                                    >
                                                                        Newest
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="filter_oldest"
                                                                    >
                                                                        Oldest
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-inbox-listing-filter="filter_unread"
                                                                    >
                                                                        Unread
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </span>
                                                        {/*end::Sort*/}
                                                        {/*begin::Settings*/}
                                                        <span>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title="Settings"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                                                                <span className="svg-icon svg-icon-2 m-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <rect
                                                                            x={10}
                                                                            y={10}
                                                                            width={4}
                                                                            height={4}
                                                                            rx={2}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={17}
                                                                            y={10}
                                                                            width={4}
                                                                            height={4}
                                                                            rx={2}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={3}
                                                                            y={10}
                                                                            width={4}
                                                                            height={4}
                                                                            rx={2}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-250px py-4"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen008.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}New Group
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}Contacts
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com014.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    opacity="0.3"
                                                                                    x={14}
                                                                                    y={4}
                                                                                    width={4}
                                                                                    height={4}
                                                                                    rx={2}
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    opacity="0.3"
                                                                                    x={6}
                                                                                    y={5}
                                                                                    width={6}
                                                                                    height={6}
                                                                                    rx={3}
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}Groups
                                                                        <span className="badge badge-light-primary ms-auto">
                                                                            new
                                                                        </span>
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs030.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M14 4.5C14 5.9 12.9 7 11.5 7C10.1 7 9 5.9 9 4.5C9 3.1 10.1 2 11.5 2C12.9 2 14 3.1 14 4.5ZM18.5 2C17.1 2 16 3.1 16 4.5C16 5.9 17.1 7 18.5 7C19.9 7 21 5.9 21 4.5C21 3.1 19.9 2 18.5 2ZM4.5 9C3.1 9 2 10.1 2 11.5C2 12.9 3.1 14 4.5 14C5.9 14 7 12.9 7 11.5C7 10.1 5.9 9 4.5 9ZM11.5 9C10.1 9 9 10.1 9 11.5C9 12.9 10.1 14 11.5 14C12.9 14 14 12.9 14 11.5C14 10.1 12.9 9 11.5 9ZM18.5 9C17.1 9 16 10.1 16 11.5C16 12.9 17.1 14 18.5 14C19.9 14 21 12.9 21 11.5C21 10.1 19.9 9 18.5 9ZM4.5 16C3.1 16 2 17.1 2 18.5C2 19.9 3.1 21 4.5 21C5.9 21 7 19.9 7 18.5C7 17.1 5.9 16 4.5 16ZM11.5 16C10.1 16 9 17.1 9 18.5C9 19.9 10.1 21 11.5 21C12.9 21 14 19.9 14 18.5C14 17.1 12.9 16 11.5 16ZM18.5 16C17.1 16 16 17.1 16 18.5C16 19.9 17.1 21 18.5 21C19.9 21 21 19.9 21 18.5C21 17.1 19.9 16 18.5 16Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}Calls
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}Settings
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                <div className="separator my-5" />
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
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
                                                                        {/*end::Svg Icon*/}Help
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                                                                        <span className="svg-icon svg-icon-3 me-3">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}Privacy
                                                                        <span className="badge badge-light-danger ms-auto">
                                                                            5
                                                                        </span>
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </span>
                                                        {/*end::Settings*/}
                                                    </div>
                                                    {/*end::Pagination*/}
                                                </div>
                                                <div className="card-body p-0">
                                                    {/*begin::Table*/}
                                                    <table
                                                        className="table table-hover table-row-dashed fs-6 gy-5 my-0"
                                                        id="kt_inbox_listing"
                                                    >
                                                        {/*begin::Table head*/}
                                                        <thead className="d-none">
                                                            <tr>
                                                                <th>Checkbox</th>
                                                                <th>Actions</th>
                                                                <th>Author</th>
                                                                <th>Title</th>
                                                                <th>Date</th>
                                                            </tr>
                                                        </thead>
                                                        {/*end::Table head*/}
                                                        {/*begin::Table body*/}
                                                        <tbody>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <div className="symbol-label bg-light-danger">
                                                                                <span className="text-danger">M</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Melody Macy</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Digital PPV Customer Confirmation
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Thank you for ordering UFC 240 Holloway vs
                                                                                Edgar Alternate camera angles...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                    {/*begin::Badges*/}
                                                                    <div className="badge badge-light-primary">
                                                                        inbox
                                                                    </div>
                                                                    <div className="badge badge-light-warning">
                                                                        task
                                                                    </div>
                                                                    {/*end::Badges*/}
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold">8:30 PM</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-26.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Max Smith</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Your iBuy.com grocery shopping confirmation
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Please make sure that you have one of the
                                                                                following cards with you when we deliver your
                                                                                order...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold">day ago</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-4.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Sean Bean</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Your Order #224820998666029 has been Confirmed
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Your Order #224820998666029 has been placed on
                                                                                Saturday, 29 June
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">11:20 PM</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-15.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Brian Cox</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Payment Notification DLOP2329KD
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Your payment of 4500USD to AirCar has been
                                                                                authorized and confirmed, thank you your
                                                                                account. This...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                    {/*begin::Badges*/}
                                                                    <div className="badge badge-light-danger">new</div>
                                                                    {/*end::Badges*/}
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">
                                                                        2 days ago
                                                                    </span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <div className="symbol-label bg-light-warning">
                                                                                <span className="text-warning">C</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Mikaela Collins</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Congratulations on your iRun Coach
                                                                                subscription
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Congratulations on your iRun Coach
                                                                                subscription. You made no space for excuses
                                                                                and you
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">July 25</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-8.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Francis Mitcham</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Pay bills &amp; win up to 600$ Cashback!
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Congratulations on your iRun Coach
                                                                                subscription. You made no space for excuses
                                                                                and you decided on a healthier and happier
                                                                                life...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">July 24</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <div className="symbol-label bg-light-danger">
                                                                                <span className="text-danger">O</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Olivia Wild</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Activate your LIPO Account today
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Thank you for creating a LIPO Account. Please
                                                                                click the link below to activate your account.
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                    {/*begin::Badges*/}
                                                                    <div className="badge badge-light-warning">
                                                                        task
                                                                    </div>
                                                                    {/*end::Badges*/}
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">July 13</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <div className="symbol-label bg-light-primary">
                                                                                <span className="text-primary">N</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Neil Owen</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                About your request for PalmLake
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                What you requested can't be arranged ahead of
                                                                                time but PalmLake said they'll do their best
                                                                                to accommodate you upon arrival....
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">May 25</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-6.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Dan Wilson</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Welcome, Patty
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Discover interesting ideas and unique
                                                                                perspectives. Read, explore and follow your
                                                                                interests. Get personalized recommendations
                                                                                delivered to you....
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold">April 15</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <div className="symbol-label bg-light-danger">
                                                                                <span className="text-danger">E</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Emma Bold</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Free Video Marketing Guide
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Video has rolled into every marketing platform
                                                                                or channel, leaving...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                    {/*begin::Badges*/}
                                                                    <div className="badge badge-light-success">
                                                                        project
                                                                    </div>
                                                                    {/*end::Badges*/}
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">April 3</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-7.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Ana Crown</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Your iBuy.com grocery shopping confirmation
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Please make sure that you have one of the
                                                                                following cards with you when we deliver your
                                                                                order...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">March 17</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <div className="symbol-label bg-light-info">
                                                                                <span className="text-info">A</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">Robert Doe</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Your Order #224820998666029 has been Confirmed
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Your Order #224820998666029 has been placed on
                                                                                Saturday, 07 March
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">March 12</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                            <tr>
                                                                <td className="ps-9">
                                                                    {/*begin::Checkbox*/}
                                                                    <div className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                    </div>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                                <td className="min-w-80px">
                                                                    {/*begin::Star*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Star"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Star*/}
                                                                    {/*begin::Important*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="right"
                                                                        title="Mark as important"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen056.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mt-1">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </NavLink>
                                                                    {/*end::Important*/}
                                                                </td>
                                                                {/*begin::Author*/}
                                                                <td className="w-150px w-md-175px">
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/inbox/reply.html"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <span
                                                                                className="symbol-label"
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url(assets/media/avatars/150-17.jpg)"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Name*/}
                                                                        <span className="fw-bold">John Miller</span>
                                                                        {/*end::Name*/}
                                                                    </NavLink>
                                                                </td>
                                                                {/*end::Author*/}
                                                                {/*begin::Title*/}
                                                                <td>
                                                                    <div className="text-dark mb-1">
                                                                        {/*begin::Heading*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                                            className="text-dark"
                                                                        >
                                                                            <span className="fw-bolder">
                                                                                Payment Notification DLOP2329KD
                                                                            </span>
                                                                            <span className="fw-bolder d-none d-md-inine">
                                                                                -
                                                                            </span>
                                                                            <span className="d-none d-md-inine text-muted">
                                                                                Your payment of 4500USD to AirCar has been
                                                                                authorized and confirmed, thank you your
                                                                                account. This...
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Heading*/}
                                                                    </div>
                                                                </td>
                                                                {/*end::Title*/}
                                                                {/*begin::Date*/}
                                                                <td className="w-100px text-end fs-7 pe-9">
                                                                    <span className="fw-bold text-muted">March 11</span>
                                                                </td>
                                                                {/*end::Date*/}
                                                            </tr>
                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Content*/}
                                    </div>
                                    {/*end::Inbox App - Messages */}
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

export default Listing
