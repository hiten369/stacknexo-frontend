import React from 'react'
import { NavLink } from 'react-router-dom';

const Followers = () => {
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
                                            Followers
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
                                            <li className="breadcrumb-item text-gray-600">Pages</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Profile</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Followers</li>
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
                                                id="kt_menu_61b9c76ecf61d"
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
                                                                data-dropdown-parent="#kt_menu_61b9c76ecf61d"
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
                                    <div className="card mb-6">
                                        <div className="card-body pt-9 pb-0">
                                            {/*begin::Details*/}
                                            <div className="d-flex flex-wrap flex-sm-nowrap">
                                                {/*begin: Pic*/}
                                                <div className="me-7 mb-4">
                                                    <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                                        <img src="/assets/media/avatars/150-26.jpg" alt="image" />
                                                        <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px" />
                                                    </div>
                                                </div>
                                                {/*end::Pic*/}
                                                {/*begin::Info*/}
                                                <div className="flex-grow-1">
                                                    {/*begin::Title*/}
                                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-column">
                                                            {/*begin::Name*/}
                                                            <div className="d-flex align-items-center mb-2">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1"
                                                                >
                                                                    Max Smith
                                                                </NavLink>
                                                                <NavLink to="#">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen026.svg*/}
                                                                    <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24px"
                                                                            height="24px"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                                                                                fill="#00A3FF"
                                                                            />
                                                                            <path
                                                                                className="permanent"
                                                                                d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                                                                                fill="white"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Name*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                                                <NavLink
                                                                    to="#"
                                                                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                    <span className="svg-icon svg-icon-4 me-1">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}Developer
                                                                </NavLink>
                                                                <NavLink
                                                                    to="#"
                                                                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                    <span className="svg-icon svg-icon-4 me-1">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}SF, Bay Area
                                                                </NavLink>
                                                                <NavLink
                                                                    to="#"
                                                                    className="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                                                                >
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                                                    <span className="svg-icon svg-icon-4 me-1">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}max@kt.com
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex my-4">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light me-2"
                                                                id="kt_user_follow_button"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                                                                <span className="svg-icon svg-icon-3 d-none">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*begin::Indicator*/}
                                                                <span className="indicator-label">Follow</span>
                                                                <span className="indicator-progress">
                                                                    Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                </span>
                                                                {/*end::Indicator*/}
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-primary me-2"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_offer_a_deal"
                                                            >
                                                                Hire Me
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
                                                    {/*end::Title*/}
                                                    {/*begin::Stats*/}
                                                    <div className="d-flex flex-wrap flex-stack">
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex flex-column flex-grow-1 pe-8">
                                                            {/*begin::Stats*/}
                                                            <div className="d-flex flex-wrap">
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
                                                                            className="fs-2 fw-bolder"
                                                                            data-kt-countup="true"
                                                                            data-kt-countup-value={4500}
                                                                            data-kt-countup-prefix="$"
                                                                        >
                                                                            0
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Number*/}
                                                                    {/*begin::Label*/}
                                                                    <div className="fw-bold fs-6 text-gray-400">
                                                                        Earnings
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
                                                                            className="fs-2 fw-bolder"
                                                                            data-kt-countup="true"
                                                                            data-kt-countup-value={80}
                                                                        >
                                                                            0
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Number*/}
                                                                    {/*begin::Label*/}
                                                                    <div className="fw-bold fs-6 text-gray-400">
                                                                        Projects
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
                                                                            className="fs-2 fw-bolder"
                                                                            data-kt-countup="true"
                                                                            data-kt-countup-value={60}
                                                                            data-kt-countup-prefix="%"
                                                                        >
                                                                            0
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Number*/}
                                                                    {/*begin::Label*/}
                                                                    <div className="fw-bold fs-6 text-gray-400">
                                                                        Success Rate
                                                                    </div>
                                                                    {/*end::Label*/}
                                                                </div>
                                                                {/*end::Stat*/}
                                                            </div>
                                                            {/*end::Stats*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                        {/*begin::Progress*/}
                                                        <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                                            <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                                                <span className="fw-bold fs-6 text-gray-400">
                                                                    Profile Compleation
                                                                </span>
                                                                <span className="fw-bolder fs-6">50%</span>
                                                            </div>
                                                            <div className="h-5px mx-3 w-100 bg-light mb-3">
                                                                <div
                                                                    className="bg-success rounded h-5px"
                                                                    role="progressbar"
                                                                    style={{ width: "50%" }}
                                                                    aria-valuenow={50}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*end::Progress*/}
                                                    </div>
                                                    {/*end::Stats*/}
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Details*/}
                                            {/*begin::Navs*/}
                                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                    >
                                                        Overview
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/pages/profile/projects.html"
                                                    >
                                                        Projects
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/pages/profile/campaigns.html"
                                                    >
                                                        Campaigns
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/pages/profile/documents.html"
                                                    >
                                                        Documents
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5 active"
                                                        to="../../demo14/dist/pages/profile/followers.html"
                                                    >
                                                        Followers
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/pages/profile/activity.html"
                                                    >
                                                        Activity
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                            </ul>
                                            {/*begin::Navs*/}
                                        </div>
                                    </div>
                                    {/*end::Navbar*/}
                                    {/*begin::Followers toolbar*/}
                                    <div className="d-flex flex-wrap flex-stack mb-6">
                                        {/*begin::Title*/}
                                        <h3 className="fw-bolder my-2">
                                            My Connections
                                            <span className="fs-6 text-gray-400 fw-bold ms-1">(29)</span>
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Controls*/}
                                        <div className="d-flex my-2">
                                            {/*begin::Select*/}
                                            <select
                                                name="status"
                                                data-control="select2"
                                                data-hide-search="true"
                                                className="form-select form-select-sm bg-body border-body w-125px"
                                            >
                                                <option value="Active" selected="selected">
                                                    Active
                                                </option>
                                                <option value="Approved">In Progress</option>
                                                <option value="Declined">To Do</option>
                                                <option value="In Progress">Completed</option>
                                            </select>
                                            {/*end::Select*/}
                                        </div>
                                        {/*end::Controls*/}
                                    </div>
                                    {/*end::Followers toolbar*/}
                                    {/*begin::Row*/}
                                    <div className="row g-6 mb-6 g-xl-9 mb-xl-9">
                                        {/*begin::Followers*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-12.jpg" alt="image" />
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Patric Watson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Novica Co.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-1.jpg" alt="image" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Olivia Larson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Seal Inc.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <span className="symbol-label fs-2x fw-bold text-warning bg-light-warning">
                                                            A
                                                        </span>
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
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
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <span className="symbol-label fs-2x fw-bold text-info bg-light-info">
                                                            P
                                                        </span>
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Paul Marcus
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Novica Co.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
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
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <span className="symbol-label fs-2x fw-bold text-primary bg-light-primary">
                                                            S
                                                        </span>
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Sean Paul
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Developer at Loop Inc
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-2.jpg" alt="image" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Kitona Johnson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Web Designer at Nextop Ltd.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-11.jpg" alt="image" />
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
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-7.jpg" alt="image" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Soul Jacob
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Novica Co.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-13.jpg" alt="image" />
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Nina Strong
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        CTO at Kilp Ltd.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-12.jpg" alt="image" />
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Patric Watson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Novica Co.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-1.jpg" alt="image" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Olivia Larson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Seal Inc.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*end::Followers*/}
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row(for show more)*/}
                                    <div
                                        className="row g-6 mb-6 g-xl-9 mb-xl-9 d-none"
                                        id="kt_followers_show_more_cards"
                                    >
                                        {/*begin::Followers*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-12.jpg" alt="image" />
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Patric Watson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Novica Co.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <img src="/assets/media//avatars/150-1.jpg" alt="image" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Olivia Larson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Seal Inc.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <span className="symbol-label fs-2x fw-bold text-warning bg-light-warning">
                                                            A
                                                        </span>
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
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
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <span className="symbol-label fs-2x fw-bold text-info bg-light-info">
                                                            P
                                                        </span>
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Paul Marcus
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director at Novica Co.
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light-primary">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
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
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Following
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
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
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-65px symbol-circle mb-5">
                                                        <span className="symbol-label fs-2x fw-bold text-primary bg-light-primary">
                                                            S
                                                        </span>
                                                        <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3" />
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Sean Paul
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Developer at Loop Inc
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Follow*/}
                                                    <NavLink to="#" className="btn btn-sm btn-light">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                                        <span className="svg-icon svg-icon-3">
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
                                                        {/*end::Svg Icon*/}Follow
                                                    </NavLink>
                                                    {/*end::Follow*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*end::Followers*/}
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Show more*/}
                                    <div className="d-flex flex-center">
                                        <button
                                            className="btn btn-primary"
                                            id="kt_followers_show_more_button"
                                        >
                                            <span className="indicator-label">Show more</span>
                                            <span className="indicator-progress">
                                                Loading...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                        </button>
                                    </div>
                                    {/*end::Show more*/}
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - Offer A Deal*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_offer_a_deal"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-1000px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header py-7 d-flex justify-content-between">
                                                    {/*begin::Modal title*/}
                                                    <h2>Offer a Deal</h2>
                                                    {/*end::Modal title*/}
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
                                                <div className="modal-body scroll-y m-5">
                                                    {/*begin::Stepper*/}
                                                    <div
                                                        className="stepper stepper-links d-flex flex-column"
                                                        id="kt_modal_offer_a_deal_stepper"
                                                    >
                                                        {/*begin::Nav*/}
                                                        <div className="stepper-nav justify-content-center py-2">
                                                            {/*begin::Step 1*/}
                                                            <div
                                                                className="stepper-item me-5 me-md-15 current"
                                                                data-kt-stepper-element="nav"
                                                            >
                                                                <h3 className="stepper-title">Deal Type</h3>
                                                            </div>
                                                            {/*end::Step 1*/}
                                                            {/*begin::Step 2*/}
                                                            <div
                                                                className="stepper-item me-5 me-md-15"
                                                                data-kt-stepper-element="nav"
                                                            >
                                                                <h3 className="stepper-title">Deal Details</h3>
                                                            </div>
                                                            {/*end::Step 2*/}
                                                            {/*begin::Step 3*/}
                                                            <div
                                                                className="stepper-item me-5 me-md-15"
                                                                data-kt-stepper-element="nav"
                                                            >
                                                                <h3 className="stepper-title">Finance Settings</h3>
                                                            </div>
                                                            {/*end::Step 3*/}
                                                            {/*begin::Step 4*/}
                                                            <div
                                                                className="stepper-item"
                                                                data-kt-stepper-element="nav"
                                                            >
                                                                <h3 className="stepper-title">Completed</h3>
                                                            </div>
                                                            {/*end::Step 4*/}
                                                        </div>
                                                        {/*end::Nav*/}
                                                        {/*begin::Form*/}
                                                        <form
                                                            className="mx-auto mw-500px w-100 pt-15 pb-10"
                                                            noValidate="novalidate"
                                                            id="kt_modal_offer_a_deal_form"
                                                        >
                                                            {/*begin::Type*/}
                                                            <div
                                                                className="current"
                                                                data-kt-stepper-element="content"
                                                            >
                                                                {/*begin::Wrapper*/}
                                                                <div className="w-100">
                                                                    {/*begin::Heading*/}
                                                                    <div className="mb-13">
                                                                        {/*begin::Title*/}
                                                                        <h2 className="mb-3">Deal Type</h2>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fw-bold fs-5">
                                                                            If you need more info, please check out
                                                                            <NavLink to="#" className="link-primary fw-bolder">
                                                                                FAQ Page
                                                                            </NavLink>
                                                                            .
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Heading*/}
                                                                    {/*begin::Input group*/}
                                                                    <div
                                                                        className="fv-row mb-15"
                                                                        data-kt-buttons="true"
                                                                    >
                                                                        {/*begin::Option*/}
                                                                        <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6 mb-6 active">
                                                                            {/*begin::Input*/}
                                                                            <input
                                                                                className="btn-check"
                                                                                type="radio"
                                                                                defaultChecked="checked"
                                                                                name="offer_type"
                                                                                defaultValue={1}
                                                                            />
                                                                            {/*end::Input*/}
                                                                            {/*begin::Label*/}
                                                                            <span className="d-flex">
                                                                                {/*begin::Icon*/}
                                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                                <span className="svg-icon svg-icon-3hx">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="none"
                                                                                    >
                                                                                        <path
                                                                                            opacity="0.3"
                                                                                            d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                                                                            fill="black"
                                                                                        />
                                                                                        <path
                                                                                            d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                                {/*end::Icon*/}
                                                                                {/*begin::Info*/}
                                                                                <span className="ms-4">
                                                                                    <span className="fs-3 fw-bolder text-gray-900 mb-2 d-block">
                                                                                        Personal Deal
                                                                                    </span>
                                                                                    <span className="fw-bold fs-4 text-muted">
                                                                                        If you need more info, please check it out
                                                                                    </span>
                                                                                </span>
                                                                                {/*end::Info*/}
                                                                            </span>
                                                                            {/*end::Label*/}
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                        {/*begin::Option*/}
                                                                        <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6">
                                                                            {/*begin::Input*/}
                                                                            <input
                                                                                className="btn-check"
                                                                                type="radio"
                                                                                name="offer_type"
                                                                                defaultValue={2}
                                                                            />
                                                                            {/*end::Input*/}
                                                                            {/*begin::Label*/}
                                                                            <span className="d-flex">
                                                                                {/*begin::Icon*/}
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-3hx">
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
                                                                                {/*end::Icon*/}
                                                                                {/*begin::Info*/}
                                                                                <span className="ms-4">
                                                                                    <span className="fs-3 fw-bolder text-gray-900 mb-2 d-block">
                                                                                        Corporate Deal
                                                                                    </span>
                                                                                    <span className="fw-bold fs-4 text-muted">
                                                                                        Create corporate account to manage users
                                                                                    </span>
                                                                                </span>
                                                                                {/*end::Info*/}
                                                                            </span>
                                                                            {/*end::Label*/}
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Actions*/}
                                                                    <div className="d-flex justify-content-end">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-lg btn-primary"
                                                                            data-kt-element="type-next"
                                                                        >
                                                                            <span className="indicator-label">
                                                                                Offer Details
                                                                            </span>
                                                                            <span className="indicator-progress">
                                                                                Please wait...
                                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    {/*end::Actions*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Type*/}
                                                            {/*begin::Details*/}
                                                            <div data-kt-stepper-element="content">
                                                                {/*begin::Wrapper*/}
                                                                <div className="w-100">
                                                                    {/*begin::Heading*/}
                                                                    <div className="mb-13">
                                                                        {/*begin::Title*/}
                                                                        <h2 className="mb-3">Deal Details</h2>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fw-bold fs-5">
                                                                            If you need more info, please check out
                                                                            <NavLink to="#" className="link-primary fw-bolder">
                                                                                FAQ Page
                                                                            </NavLink>
                                                                            .
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Heading*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-8">
                                                                        {/*begin::Label*/}
                                                                        <label className="required fs-6 fw-bold mb-2">
                                                                            Customer
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-control="select2"
                                                                            data-placeholder="Select an option"
                                                                            name="details_customer"
                                                                        >
                                                                            <option />
                                                                            <option value={1} selected="selected">
                                                                                Keenthemes
                                                                            </option>
                                                                            <option value={2}>CRM App</option>
                                                                        </select>
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-8">
                                                                        {/*begin::Label*/}
                                                                        <label className="required fs-6 fw-bold mb-2">
                                                                            Deal Title
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-solid"
                                                                            placeholder="Enter Deal Title"
                                                                            name="details_title"
                                                                            defaultValue="Marketing Campaign"
                                                                        />
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-8">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-6 fw-bold mb-2">
                                                                            Deal Description
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Label*/}
                                                                        <textarea
                                                                            className="form-control form-control-solid"
                                                                            rows={3}
                                                                            placeholder="Enter Deal Description"
                                                                            name="details_description"
                                                                            defaultValue={
                                                                                "Experience share market at your fingertips with TICK PRO stock investment mobile trading app"
                                                                            }
                                                                        />
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-8">
                                                                        <label className="required fs-6 fw-bold mb-2">
                                                                            Activation Date
                                                                        </label>
                                                                        <div className="position-relative d-flex align-items-center">
                                                                            {/*begin::Icon*/}
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                                            <span className="svg-icon svg-icon-2 position-absolute mx-4">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        opacity="0.3"
                                                                                        d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                                                                        fill="black"
                                                                                    />
                                                                                    <path
                                                                                        d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                                                                        fill="black"
                                                                                    />
                                                                                    <path
                                                                                        d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Datepicker*/}
                                                                            <input
                                                                                className="form-control form-control-solid ps-12"
                                                                                placeholder="Pick date range"
                                                                                name="details_activation_date"
                                                                            />
                                                                            {/*end::Datepicker*/}
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-15">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex flex-stack">
                                                                            {/*begin::Label*/}
                                                                            <div className="me-5">
                                                                                <label className="required fs-6 fw-bold">
                                                                                    Notifications
                                                                                </label>
                                                                                <div className="fs-7 fw-bold text-muted">
                                                                                    Allow Notifications by Phone or Email
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Checkboxes*/}
                                                                            <div className="d-flex">
                                                                                {/*begin::Checkbox*/}
                                                                                <label className="form-check form-check-custom form-check-solid me-10">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input h-20px w-20px"
                                                                                        type="checkbox"
                                                                                        defaultValue="email"
                                                                                        name="details_notifications[]"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <span className="form-check-label fw-bold">
                                                                                        Email
                                                                                    </span>
                                                                                    {/*end::Label*/}
                                                                                </label>
                                                                                {/*end::Checkbox*/}
                                                                                {/*begin::Checkbox*/}
                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        className="form-check-input h-20px w-20px"
                                                                                        type="checkbox"
                                                                                        defaultValue="phone"
                                                                                        defaultChecked="checked"
                                                                                        name="details_notifications[]"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    {/*begin::Label*/}
                                                                                    <span className="form-check-label fw-bold">
                                                                                        Phone
                                                                                    </span>
                                                                                    {/*end::Label*/}
                                                                                </label>
                                                                                {/*end::Checkbox*/}
                                                                            </div>
                                                                            {/*end::Checkboxes*/}
                                                                        </div>
                                                                        {/*begin::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Actions*/}
                                                                    <div className="d-flex flex-stack">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-lg btn-light me-3"
                                                                            data-kt-element="details-previous"
                                                                        >
                                                                            Deal Type
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-lg btn-primary"
                                                                            data-kt-element="details-next"
                                                                        >
                                                                            <span className="indicator-label">
                                                                                Financing
                                                                            </span>
                                                                            <span className="indicator-progress">
                                                                                Please wait...
                                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    {/*end::Actions*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Budget*/}
                                                            <div data-kt-stepper-element="content">
                                                                {/*begin::Wrapper*/}
                                                                <div className="w-100">
                                                                    {/*begin::Heading*/}
                                                                    <div className="mb-13">
                                                                        {/*begin::Title*/}
                                                                        <h2 className="mb-3">Finance</h2>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fw-bold fs-5">
                                                                            If you need more info, please check out
                                                                            <NavLink to="#" className="link-primary fw-bolder">
                                                                                FAQ Page
                                                                            </NavLink>
                                                                            .
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Heading*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-8">
                                                                        {/*begin::Label*/}
                                                                        <label className="d-flex align-items-center fs-6 fw-bold mb-2">
                                                                            <span className="required">Setup Budget</span>
                                                                            <i
                                                                                className="fas fa-exclamation-circle ms-2 fs-7"
                                                                                data-bs-toggle="popover"
                                                                                data-bs-trigger="hover"
                                                                                data-bs-html="true"
                                                                                data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class='fas fa-university fs-3 me-3'></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-bold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-dark fw-bolder mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>"
                                                                            />
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Dialer*/}
                                                                        <div
                                                                            className="position-relative w-lg-250px"
                                                                            id="kt_modal_finance_setup"
                                                                            data-kt-dialer="true"
                                                                            data-kt-dialer-min={50}
                                                                            data-kt-dialer-max={50000}
                                                                            data-kt-dialer-step={100}
                                                                            data-kt-dialer-prefix="$"
                                                                            data-kt-dialer-decimals={2}
                                                                        >
                                                                            {/*begin::Decrease control*/}
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                                                                data-kt-dialer-control="decrease"
                                                                            >
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen042.svg*/}
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
                                                                                            rx={10}
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
                                                                            {/*end::Decrease control*/}
                                                                            {/*begin::Input control*/}
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-solid border-0 ps-12"
                                                                                data-kt-dialer-control="input"
                                                                                placeholder="Amount"
                                                                                name="finance_setup"
                                                                                readOnly="readonly"
                                                                                defaultValue="$50"
                                                                            />
                                                                            {/*end::Input control*/}
                                                                            {/*begin::Increase control*/}
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                                                                data-kt-dialer-control="increase"
                                                                            >
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen041.svg*/}
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
                                                                                            rx={10}
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
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-8">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-6 fw-bold mb-2">
                                                                            Budget Usage
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Row*/}
                                                                        <div
                                                                            className="row g-9"
                                                                            data-kt-buttons="true"
                                                                            data-kt-buttons-target="[data-kt-button='true']"
                                                                        >
                                                                            {/*begin::Col*/}
                                                                            <div className="col-md-6 col-lg-12 col-xxl-6">
                                                                                {/*begin::Option*/}
                                                                                <label
                                                                                    className="btn btn-outline btn-outline-dashed btn-outline-default active d-flex text-start p-6"
                                                                                    data-kt-button="true"
                                                                                >
                                                                                    {/*begin::Radio*/}
                                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="radio"
                                                                                            name="finance_usage"
                                                                                            defaultValue={1}
                                                                                            defaultChecked="checked"
                                                                                        />
                                                                                    </span>
                                                                                    {/*end::Radio*/}
                                                                                    {/*begin::Info*/}
                                                                                    <span className="ms-5">
                                                                                        <span className="fs-4 fw-bolder text-gray-800 mb-2 d-block">
                                                                                            Precise Usage
                                                                                        </span>
                                                                                        <span className="fw-bold fs-7 text-gray-600">
                                                                                            Withdraw money to your bank account per
                                                                                            transaction under $50,000 budget
                                                                                        </span>
                                                                                    </span>
                                                                                    {/*end::Info*/}
                                                                                </label>
                                                                                {/*end::Option*/}
                                                                            </div>
                                                                            {/*end::Col*/}
                                                                            {/*begin::Col*/}
                                                                            <div className="col-md-6 col-lg-12 col-xxl-6">
                                                                                {/*begin::Option*/}
                                                                                <label
                                                                                    className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6"
                                                                                    data-kt-button="true"
                                                                                >
                                                                                    {/*begin::Radio*/}
                                                                                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="radio"
                                                                                            name="finance_usage"
                                                                                            defaultValue={2}
                                                                                        />
                                                                                    </span>
                                                                                    {/*end::Radio*/}
                                                                                    {/*begin::Info*/}
                                                                                    <span className="ms-5">
                                                                                        <span className="fs-4 fw-bolder text-gray-800 mb-2 d-block">
                                                                                            Extreme Usage
                                                                                        </span>
                                                                                        <span className="fw-bold fs-7 text-gray-600">
                                                                                            Withdraw money to your bank account per
                                                                                            transaction under $50,000 budget
                                                                                        </span>
                                                                                    </span>
                                                                                    {/*end::Info*/}
                                                                                </label>
                                                                                {/*end::Option*/}
                                                                            </div>
                                                                            {/*end::Col*/}
                                                                        </div>
                                                                        {/*end::Row*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row mb-15">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex flex-stack">
                                                                            {/*begin::Label*/}
                                                                            <div className="me-5">
                                                                                <label className="fs-6 fw-bold">
                                                                                    Allow Changes in Budget
                                                                                </label>
                                                                                <div className="fs-7 fw-bold text-muted">
                                                                                    If you need more info, please check budget
                                                                                    planning
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Label*/}
                                                                            {/*begin::Switch*/}
                                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    defaultValue={1}
                                                                                    name="finance_allow"
                                                                                    defaultChecked="checked"
                                                                                />
                                                                                <span className="form-check-label fw-bold text-muted">
                                                                                    Allowed
                                                                                </span>
                                                                            </label>
                                                                            {/*end::Switch*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Actions*/}
                                                                    <div className="d-flex flex-stack">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-lg btn-light me-3"
                                                                            data-kt-element="finance-previous"
                                                                        >
                                                                            Project Settings
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-lg btn-primary"
                                                                            data-kt-element="finance-next"
                                                                        >
                                                                            <span className="indicator-label">
                                                                                Build Team
                                                                            </span>
                                                                            <span className="indicator-progress">
                                                                                Please wait...
                                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    {/*end::Actions*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Budget*/}
                                                            {/*begin::Complete*/}
                                                            <div data-kt-stepper-element="content">
                                                                {/*begin::Wrapper*/}
                                                                <div className="w-100">
                                                                    {/*begin::Heading*/}
                                                                    <div className="mb-13">
                                                                        {/*begin::Title*/}
                                                                        <h2 className="mb-3">Deal Created!</h2>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fw-bold fs-5">
                                                                            If you need more info, please check out
                                                                            <NavLink to="#" className="link-primary fw-bolder">
                                                                                FAQ Page
                                                                            </NavLink>
                                                                            .
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Heading*/}
                                                                    {/*begin::Actions*/}
                                                                    <div className="d-flex flex-center pb-20">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-lg btn-light me-3"
                                                                            data-kt-element="complete-start"
                                                                        >
                                                                            Create New Deal
                                                                        </button>
                                                                        <NavLink
                                                                            to="#"
                                                                            className="btn btn-lg btn-primary"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Coming Soon"
                                                                        >
                                                                            View Deal
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Actions*/}
                                                                    {/*begin::Illustration*/}
                                                                    <div className="text-center px-4">
                                                                        <img
                                                                            src="/assets/media/illustrations/sketchy-1/20.png"
                                                                            alt
                                                                            className="mw-100 mh-300px"
                                                                        />
                                                                    </div>
                                                                    {/*end::Illustration*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Complete*/}
                                                        </form>
                                                        {/*end::Form*/}
                                                    </div>
                                                    {/*end::Stepper*/}
                                                </div>
                                                {/*begin::Modal body*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Modal - Offer A Deal*/}
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

export default Followers
