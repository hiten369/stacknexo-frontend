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
                                            Tickets List
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
                                                Support Center
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Tickets</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Tickets List</li>
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
                                                id="kt_menu_61b9c7db9e69b"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7db9e69b"
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
                                    {/*begin::Hero card*/}
                                    <div className="card mb-12">
                                        {/*begin::Hero body*/}
                                        <div className="card-body flex-column p-5">
                                            {/*begin::Hero content*/}
                                            <div className="d-flex align-items-center h-lg-300px p-5 p-lg-15">
                                                {/*begin::Wrapper*/}
                                                <div className="d-flex flex-column align-items-start justift-content-center flex-equal me-5">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder fs-4 fs-lg-1 text-gray-800 mb-5 mb-lg-10">
                                                        How Can We Help You?
                                                    </h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Input group*/}
                                                    <div className="position-relative w-100">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary position-absolute top-50 translate-middle ms-8">
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
                                                            className="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px"
                                                            name="search"
                                                            defaultValue
                                                            placeholder="Ask a question"
                                                        />
                                                    </div>
                                                    {/*end::Input group*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                                {/*begin::Wrapper*/}
                                                <div className="flex-equal d-flex justify-content-center align-items-end ms-5">
                                                    {/*begin::Illustration*/}
                                                    <img
                                                        src="/assets/media/illustrations/sketchy-1/20.png"
                                                        alt
                                                        className="mw-100 mh-125px mh-lg-275px mb-lg-n12"
                                                    />
                                                    {/*end::Illustration*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>
                                            {/*end::Hero content*/}
                                            {/*begin::Hero nav*/}
                                            <div className="card-rounded bg-light d-flex flex-stack flex-wrap p-5">
                                                {/*begin::Nav*/}
                                                <ul className="nav flex-wrap border-transparent fw-bolder">
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/overview.html"
                                                        >
                                                            Overview
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase active"
                                                            to="../../demo14/dist/apps/support-center/tickets/list.html"
                                                        >
                                                            tickets
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/tutorials/list.html"
                                                        >
                                                            Tutorials
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/faq.html"
                                                        >
                                                            FAQ
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/licenses.html"
                                                        >
                                                            Licenses
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/contact.html"
                                                        >
                                                            Contact US
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                </ul>
                                                {/*end::Nav*/}
                                                {/*begin::Action*/}
                                                <NavLink
                                                    to="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_new_ticket"
                                                    className="btn btn-primary fw-bolder fs-8 fs-lg-base"
                                                >
                                                    Create Ticket
                                                </NavLink>
                                                {/*end::Action*/}
                                            </div>
                                            {/*end::Hero nav*/}
                                        </div>
                                        {/*end::Hero body*/}
                                    </div>
                                    {/*end::Hero card*/}
                                    {/*begin::Card*/}
                                    <div className="card">
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Layout*/}
                                            <div className="d-flex flex-column flex-xl-row p-7">
                                                {/*begin::Content*/}
                                                <div className="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
                                                    {/*begin::Tickets*/}
                                                    <div className="mb-0">
                                                        {/*begin::Search form*/}
                                                        <form method="post" action="#" className="form mb-15">
                                                            {/*begin::Input wrapper*/}
                                                            <div className="position-relative">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                                <span className="svg-icon svg-icon-1 svg-icon-primary position-absolute top-50 translate-middle ms-9">
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
                                                                    className="form-control form-control-lg form-control-solid ps-14"
                                                                    name="search"
                                                                    defaultValue
                                                                    placeholder="Search"
                                                                />
                                                            </div>
                                                            {/*end::Input wrapper*/}
                                                        </form>
                                                        {/*end::Search form*/}
                                                        {/*begin::Heading*/}
                                                        <h1 className="text-dark mb-10">Public Tickets</h1>
                                                        {/*end::Heading*/}
                                                        {/*begin::Tickets List*/}
                                                        <div className="mb-10">
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-success">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            How to use Netronic with Django Framework?
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            React
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects are listed amazing
                                                                        <br />
                                                                        outstanding projects are listed
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-warning">
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
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            Admin theme npm issue
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            Angular
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-success">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            Admin theme authentication to node.js / strapi
                                                                            backend
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            warning
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-success">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            How to use Admin theme with Django Framework?
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            HTML
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects are listed amazing
                                                                        <br />
                                                                        outstanding projects are listed
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-warning">
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
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            Reducing footprint of Start theme
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            Angular
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-success">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            Admin theme node.js / strapi backend
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            React
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects are listed amazing
                                                                        <br />
                                                                        outstanding projects are listed
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex mb-10">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-warning">
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
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            Admin theme npm issue
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            View
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                            {/*begin::Ticket*/}
                                                            <div className="d-flex">
                                                                {/*begin::Symbol*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                                                                <span className="svg-icon svg-icon-2x me-5 ms-n1 mt-2 svg-icon-success">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Symbol*/}
                                                                {/*begin::Section*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                            className="text-dark text-hover-primary fs-4 me-3 fw-bold"
                                                                        >
                                                                            How to use Admin theme with Django Framework?
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="badge badge-light my-1">
                                                                            PHP
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                    {/*begin::Text*/}
                                                                    <span className="text-muted fw-bold fs-6">
                                                                        By Keenthemes to save tons and more to time money
                                                                        projects are listed amazing
                                                                        <br />
                                                                        outstanding projects are listed
                                                                    </span>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Ticket*/}
                                                        </div>
                                                        {/*end::Tickets List*/}
                                                        {/*begin::Pagination*/}
                                                        <ul className="pagination">
                                                            <li className="page-item previous disabled">
                                                                <NavLink to="#" className="page-link">
                                                                    <i className="previous" />
                                                                </NavLink>
                                                            </li>
                                                            <li className="page-item">
                                                                <NavLink to="#" className="page-link">
                                                                    1
                                                                </NavLink>
                                                            </li>
                                                            <li className="page-item active">
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
                                                        {/*end::Pagination*/}
                                                    </div>
                                                    {/*end::Tickets*/}
                                                </div>
                                                {/*end::Content*/}
                                                {/*begin::Sidebar*/}
                                                <div className="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
                                                    {/*begin::More channels*/}
                                                    <div className="card-rounded bg-primary bg-opacity-5 p-10 mb-15">
                                                        {/*begin::Title*/}
                                                        <h2 className="text-dark fw-bolder mb-11">
                                                            More Channels
                                                        </h2>
                                                        {/*end::Title*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-10">
                                                            {/*begin::Icon*/}
                                                            <i className="bi bi-file-earmark-text text-primary fs-1 me-5" />
                                                            {/*end::SymIconbol*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <h5 className="text-gray-800 fw-bolder">
                                                                    Project Briefing
                                                                </h5>
                                                                {/*begin::Section*/}
                                                                <div className="fw-bold">
                                                                    {/*begin::Desc*/}
                                                                    <span className="text-muted">Check out our</span>
                                                                    {/*end::Desc*/}
                                                                    {/*begin::Link*/}
                                                                    <NavLink to="#" className="link-primary">
                                                                        Support Policy
                                                                    </NavLink>
                                                                    {/*end::Link*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-10">
                                                            {/*begin::Icon*/}
                                                            <i className="bi bi-chat-square-text-fill text-primary fs-1 me-5" />
                                                            {/*end::SymIconbol*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <h5 className="text-gray-800 fw-bolder">
                                                                    More to discuss?
                                                                </h5>
                                                                {/*begin::Section*/}
                                                                <div className="fw-bold">
                                                                    {/*begin::Desc*/}
                                                                    <span className="text-muted">Email us to</span>
                                                                    {/*end::Desc*/}
                                                                    {/*begin::Link*/}
                                                                    <NavLink to="#" className="link-primary">
                                                                        support@keenthemes.com
                                                                    </NavLink>
                                                                    {/*end::Link*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-10">
                                                            {/*begin::Icon*/}
                                                            <i className="bi bi-twitter text-primary fs-1 me-5" />
                                                            {/*end::SymIconbol*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <h5 className="text-gray-800 fw-bolder">
                                                                    Latest News
                                                                </h5>
                                                                {/*begin::Section*/}
                                                                <div className="fw-bold">
                                                                    {/*begin::Desc*/}
                                                                    <span className="text-muted">Follow us at</span>
                                                                    {/*end::Desc*/}
                                                                    {/*begin::Link*/}
                                                                    <NavLink to="#" className="link-primary">
                                                                        KeenThemes Twitter
                                                                    </NavLink>
                                                                    {/*end::Link*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Icon*/}
                                                            <i className="bi bi-github text-primary fs-1 me-5" />
                                                            {/*end::SymIconbol*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <h5 className="text-gray-800 fw-bolder">
                                                                    Github Access
                                                                </h5>
                                                                {/*begin::Section*/}
                                                                <div className="fw-bold">
                                                                    {/*begin::Desc*/}
                                                                    <span className="text-muted">Our github repo</span>
                                                                    {/*end::Desc*/}
                                                                    {/*begin::Link*/}
                                                                    <NavLink to="#" className="link-primary">
                                                                        KeenThemes Github
                                                                    </NavLink>
                                                                    {/*end::Link*/}
                                                                </div>
                                                                {/*end::Section*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::More channels*/}
                                                    {/*begin::Documentations*/}
                                                    <div className="card-rounded bg-primary bg-opacity-5 p-10 mb-15">
                                                        {/*begin::Title*/}
                                                        <h1 className="fw-bolder text-dark mb-9">
                                                            Documentation
                                                        </h1>
                                                        {/*end::Title*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Angular Admin
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                React Admin
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Vue Dashboard
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Niche Theme
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Dashboard Admin
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Dorsey Front-end
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                CRM Admin
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-6">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Admin Dashbaord
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                            <span className="svg-icon svg-icon-2 ms-n1 me-3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Subtitle*/}
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-gray-800 text-hover-primary fs-5 m-0"
                                                            >
                                                                Intranet Admin
                                                            </NavLink>
                                                            {/*end::Subtitle*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Documentations*/}
                                                </div>
                                                {/*end::Sidebar*/}
                                            </div>
                                            {/*end::Layout*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Card*/}
                                    {/*begin::Modal - Support Center - Create Ticket*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_new_ticket"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-750px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content rounded">
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
                                                <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                                                    {/*begin:Form*/}
                                                    <form
                                                        id="kt_modal_new_ticket_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Heading*/}
                                                        <div className="mb-13 text-center">
                                                            {/*begin::Title*/}
                                                            <h1 className="mb-3">Create Ticket</h1>
                                                            {/*end::Title*/}
                                                            {/*begin::Description*/}
                                                            <div className="text-gray-400 fw-bold fs-5">
                                                                If you need more info, please check
                                                                <NavLink href className="fw-bolder link-primary">
                                                                    Support Guidelines
                                                                </NavLink>
                                                                .
                                                            </div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-column mb-8 fv-row">
                                                            {/*begin::Label*/}
                                                            <label className="d-flex align-items-center fs-6 fw-bold mb-2">
                                                                <span className="required">Subject</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="tooltip"
                                                                    title="Specify a subject for your issue"
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                placeholder="Enter your ticket subject"
                                                                name="subject"
                                                            />
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="row g-9 mb-8">
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Product
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Select a product"
                                                                    name="product"
                                                                >
                                                                    <option value>Select a product...</option>
                                                                    <option value={1}>HTML Theme</option>
                                                                    <option value={1}>Angular App</option>
                                                                    <option value={1}>Vue App</option>
                                                                    <option value={1}>React Theme</option>
                                                                    <option value={1}>Figma UI Kit</option>
                                                                    <option value={3}>Laravel App</option>
                                                                    <option value={4}>Blazor App</option>
                                                                    <option value={5}>Django App</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Assign
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Select a Team Member"
                                                                    name="user"
                                                                >
                                                                    <option value>Select a user...</option>
                                                                    <option value={1}>Karina Clark</option>
                                                                    <option value={2}>Robert Doe</option>
                                                                    <option value={3}>Niel Owen</option>
                                                                    <option value={4}>Olivia Wild</option>
                                                                    <option value={5}>Sean Bean</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="row g-9 mb-8">
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Status
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-placeholder="Open"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value />
                                                                    <option value={1} selected="selected">
                                                                        Open
                                                                    </option>
                                                                    <option value={2}>Pending</option>
                                                                    <option value={3}>Resolved</option>
                                                                    <option value={3}>Closed</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Due Date
                                                                </label>
                                                                {/*begin::Input*/}
                                                                <div className="position-relative d-flex align-items-center">
                                                                    {/*begin::Icon*/}
                                                                    <div className="symbol symbol-20px me-4 position-absolute ms-4">
                                                                        <span className="symbol-label bg-secondary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                            <span className="svg-icon">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                >
                                                                                    <rect
                                                                                        x={2}
                                                                                        y={2}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                    <rect
                                                                                        opacity="0.3"
                                                                                        x={13}
                                                                                        y={2}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                    <rect
                                                                                        opacity="0.3"
                                                                                        x={13}
                                                                                        y={13}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                    <rect
                                                                                        opacity="0.3"
                                                                                        x={2}
                                                                                        y={13}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Datepicker*/}
                                                                    <input
                                                                        className="form-control form-control-solid ps-12"
                                                                        placeholder="Select a date"
                                                                        name="due_date"
                                                                    />
                                                                    {/*end::Datepicker*/}
                                                                </div>
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-column mb-8 fv-row">
                                                            <label className="fs-6 fw-bold mb-2">Description</label>
                                                            <textarea
                                                                className="form-control form-control-solid"
                                                                rows={4}
                                                                name="description"
                                                                placeholder="Type your ticket description"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            <label className="fs-6 fw-bold mb-2">Attachments</label>
                                                            {/*begin::Dropzone*/}
                                                            <div
                                                                className="dropzone"
                                                                id="kt_modal_create_ticket_attachments"
                                                            >
                                                                {/*begin::Message*/}
                                                                <div className="dz-message needsclick align-items-center">
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/files/fil010.svg*/}
                                                                    <span className="svg-icon svg-icon-3hx svg-icon-primary">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Info*/}
                                                                    <div className="ms-4">
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">
                                                                            Drop files here or click to upload.
                                                                        </h3>
                                                                        <span className="fw-bold fs-7 text-gray-400">
                                                                            Upload up to 10 files
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Dropzone*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="mb-15 fv-row">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-stack">
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold me-5">
                                                                    <label className="fs-6">Notifications</label>
                                                                    <div className="fs-7 text-gray-400">
                                                                        Allow Notifications by Phone or Email
                                                                    </div>
                                                                </div>
                                                                {/*end::Label*/}
                                                                {/*begin::Checkboxes*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid me-10">
                                                                        <input
                                                                            className="form-check-input h-20px w-20px"
                                                                            type="checkbox"
                                                                            name="notifications[]"
                                                                            defaultValue="email"
                                                                            defaultChecked="checked"
                                                                        />
                                                                        <span className="form-check-label fw-bold">
                                                                            Email
                                                                        </span>
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid">
                                                                        <input
                                                                            className="form-check-input h-20px w-20px"
                                                                            type="checkbox"
                                                                            name="notifications[]"
                                                                            defaultValue="phone"
                                                                        />
                                                                        <span className="form-check-label fw-bold">
                                                                            Phone
                                                                        </span>
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Checkboxes*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center">
                                                            <button
                                                                type="reset"
                                                                id="kt_modal_new_ticket_cancel"
                                                                className="btn btn-light me-3"
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                id="kt_modal_new_ticket_submit"
                                                                className="btn btn-primary"
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
                                                    {/*end:Form*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Support Center - Create Ticket*/}
                                </div>
                                {/*end::Post*/}
                                {/*begin::Footer*/}
                                <div
                                    className="footer py-4 d-flex flex-column flex-md-row flex-stack"
                                    id="kt_footer"
                                >
                                    {/*begin::Copyright*/}
                                    <div className="text-dark order-2 order-md-1">
                                        <span className="text-muted fw-bold me-1">2021??</span>
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
