import React from 'react'
import OfferADealModal from '../../CommonElements/OfferADealModal'
import { NavLink } from 'react-router-dom';

const Activity = () => {
    return (
        <>
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
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">Activity</h1>
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
                                            <li className="breadcrumb-item text-gray-500">Activity</li>
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
                                                id="kt_menu_61b9c76fe107f"
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
                                                                data-dropdown-parent="#kt_menu_61b9c76fe107f"
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
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/pages/profile/followers.html"
                                                    >
                                                        Followers
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5 active"
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
                                    {/*begin::Timeline*/}
                                    <div className="card">
                                        {/*begin::Card head*/}
                                        <div className="card-header card-header-stretch">
                                            {/*begin::Title*/}
                                            <div className="card-title d-flex align-items-center">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                <span className="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
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
                                                <h3 className="fw-bolder m-0 text-gray-800">Jan 23, 2021</h3>
                                            </div>
                                            {/*end::Title*/}
                                            {/*begin::Toolbar*/}
                                            <div className="card-toolbar m-0">
                                                {/*begin::Tab nav*/}
                                                <ul
                                                    className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_today_tab"
                                                            className="nav-link justify-content-center text-active-gray-800 active"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_today"
                                                        >
                                                            Today
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_week_tab"
                                                            className="nav-link justify-content-center text-active-gray-800"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_week"
                                                        >
                                                            Week
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_month_tab"
                                                            className="nav-link justify-content-center text-active-gray-800"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_month"
                                                        >
                                                            Month
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_year_tab"
                                                            className="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_year"
                                                        >
                                                            2021
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                                {/*end::Tab nav*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Card head*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Tab Content*/}
                                            <div className="tab-content">
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_today"
                                                    className="card-body p-0 tab-pane fade show active"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_today_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        There are 2 new tasks for you in “AirPlus Mobile
                                                                        APp” project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Added at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    {/*begin::Record*/}
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                                                                        >
                                                                            Meeting with customer
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <div className="min-w-175px pe-2">
                                                                            <span className="badge badge-light text-muted">
                                                                                Application Design
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Users*/}
                                                                        <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <img
                                                                                    src="/assets/media/avatars/150-3.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            {/*end::User*/}
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <img
                                                                                    src="/assets/media/avatars/150-11.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            {/*end::User*/}
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">
                                                                                    A
                                                                                </div>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Users*/}
                                                                        {/*begin::Progress*/}
                                                                        <div className="min-w-125px pe-2">
                                                                            <span className="badge badge-light-primary">
                                                                                In Progress
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Progress*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="btn btn-sm btn-light btn-active-light-primary"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Record*/}
                                                                    {/*begin::Record*/}
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                                                                        >
                                                                            Project Delivery Preparation
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <div className="min-w-175px">
                                                                            <span className="badge badge-light text-muted">
                                                                                CRM System Development
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Users*/}
                                                                        <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <img
                                                                                    src="/assets/media/avatars/150-5.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            {/*end::User*/}
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">
                                                                                    B
                                                                                </div>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Users*/}
                                                                        {/*begin::Progress*/}
                                                                        <div className="min-w-125px">
                                                                            <span className="badge badge-light-success">
                                                                                Completed
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Progress*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="btn btn-sm btn-light btn-active-light-primary"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Record*/}
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n2">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="overflow-auto pe-3">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Invitation for crafting engaging designs that
                                                                        speak human workshop
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Alan Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        You have received a new order:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 5:05 AM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Robert Rich"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-14.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    {/*begin::Notice*/}
                                                                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                                                        {/*begin::Icon*/}
                                                                        {/*begin::Svg Icon | path: icons/duotune/coding/cod004.svg*/}
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
                                                                                    d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                        {/*end::Icon*/}
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                                            {/*begin::Content*/}
                                                                            <div className="mb-3 mb-md-0 fw-bold">
                                                                                <h4 className="text-gray-900 fw-bolder">
                                                                                    Database Backup Process Completed!
                                                                                </h4>
                                                                                <div className="fs-6 text-gray-700 pe-7">
                                                                                    Login into Admin Dashboard to make sure the
                                                                                    data integrity is OK
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Content*/}
                                                                            {/*begin::Action*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-primary px-6 align-self-center text-nowrap"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#kt_modal_"
                                                                            >
                                                                                Proceed
                                                                            </NavLink>
                                                                            {/*end::Action*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Notice*/}
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New order
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is placed for Workshow Planning &amp; Budget
                                                                        Estimation
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            Jimmy Bold
                                                                        </NavLink>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_week"
                                                    className="card-body p-0 tab-pane fade show"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_week_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n2">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="overflow-auto pe-3">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Invitation for crafting engaging designs that
                                                                        speak human workshop
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Alan Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_month"
                                                    className="card-body p-0 tab-pane fade show"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_month_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New order
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is placed for Workshow Planning &amp; Budget
                                                                        Estimation
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            Jimmy Bold
                                                                        </NavLink>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n2">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="overflow-auto pe-3">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Invitation for crafting engaging designs that
                                                                        speak human workshop
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Alan Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_year"
                                                    className="card-body p-0 tab-pane fade show"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_year_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New order
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is placed for Workshow Planning &amp; Budget
                                                                        Estimation
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            Jimmy Bold
                                                                        </NavLink>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                            </div>
                                            {/*end::Tab Content*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Timeline*/}
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
            <OfferADealModal />
        </>
    )
}

export default Activity
