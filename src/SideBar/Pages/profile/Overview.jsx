import React from 'react'
import OfferADealModal from '../../CommonElements/OfferADealModal'
import { NavLink } from 'react-router-dom';

const Overview = () => {
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
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">Overview</h1>
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
                                            <li className="breadcrumb-item text-gray-500">Overview</li>
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
                                                id="kt_menu_61b9c76a2cb4f"
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
                                                                data-dropdown-parent="#kt_menu_61b9c76a2cb4f"
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
                                    <div className="card mb-5 mb-xxl-8">
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
                                                        className="nav-link text-active-primary ms-0 me-10 py-5 active"
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
                                    {/*begin::Row*/}
                                    <div className="row g-5 g-xxl-8">
                                        {/*begin::Col*/}
                                        <div className="col-xl-6">
                                            {/*begin::Feeds Widget 1*/}
                                            <div className="card mb-5 mb-xxl-8">
                                                {/*begin::Body*/}
                                                <div className="card-body pb-0">
                                                    {/*begin::Header*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::User*/}
                                                        <div className="d-flex align-items-center flex-grow-1">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-1.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                                                                >
                                                                    Grace Green
                                                                </NavLink>
                                                                <span className="text-gray-400 fw-bold">
                                                                    PHP, SQLite, Artisan CLI
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Menu*/}
                                                        <div className="my-0">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
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
                                                            </button>
                                                            {/*begin::Menu 2*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                                                        Quick Actions
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mb-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Ticket
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Customer
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div
                                                                    className="menu-item px-3"
                                                                    data-kt-menu-trigger="hover"
                                                                    data-kt-menu-placement="right-start"
                                                                >
                                                                    {/*begin::Menu item*/}
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        <span className="menu-title">New Group</span>
                                                                        <span className="menu-arrow" />
                                                                    </NavLink>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu sub*/}
                                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Admin Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Staff Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Member Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                    </div>
                                                                    {/*end::Menu sub*/}
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Contact
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mt-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content px-3 py-3">
                                                                        <NavLink
                                                                            className="btn btn-primary btn-sm px-4"
                                                                            to="#"
                                                                        >
                                                                            Generate Reports
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu 2*/}
                                                        </div>
                                                        {/*end::Menu*/}
                                                    </div>
                                                    {/*end::Header*/}
                                                    {/*begin::Form*/}
                                                    <form
                                                        id="kt_forms_widget_1_form"
                                                        className="ql-quil ql-quil-plain pb-3"
                                                    >
                                                        {/*begin::Editor*/}
                                                        <div id="kt_forms_widget_1_editor" className="py-6" />
                                                        {/*end::Editor*/}
                                                        <div className="separator" />
                                                        {/*begin::Toolbar*/}
                                                        <div
                                                            id="kt_forms_widget_1_editor_toolbar"
                                                            className="ql-toolbar d-flex flex-stack py-2"
                                                        >
                                                            <div className="me-2">
                                                                <span className="ql-formats ql-size ms-0">
                                                                    <select className="ql-size w-75px" />
                                                                </span>
                                                                <span className="ql-formats">
                                                                    <button className="ql-bold" />
                                                                    <button className="ql-italic" />
                                                                    <button className="ql-underline" />
                                                                    <button className="ql-strike" />
                                                                    <button className="ql-image" />
                                                                    <button className="ql-link" />
                                                                    <button className="ql-clean" />
                                                                </span>
                                                            </div>
                                                            <div className="me-n3">
                                                                <span className="btn btn-icon btn-sm btn-active-color-primary">
                                                                    <i className="flaticon2-clip-symbol icon-ms" />
                                                                </span>
                                                                <span className="btn btn-icon btn-sm btn-active-color-primary">
                                                                    <i className="flaticon2-pin icon-ms" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </form>
                                                    {/*end::Form*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Feeds Widget 1*/}
                                            {/*begin::Feeds Widget 2*/}
                                            <div className="card mb-5 mb-xxl-8">
                                                {/*begin::Body*/}
                                                <div className="card-body pb-0">
                                                    {/*begin::Header*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::User*/}
                                                        <div className="d-flex align-items-center flex-grow-1">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-6.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                                                                >
                                                                    Nick Logan
                                                                </NavLink>
                                                                <span className="text-gray-400 fw-bold">
                                                                    PHP, SQLite, Artisan CLI
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Menu*/}
                                                        <div className="my-0">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
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
                                                            </button>
                                                            {/*begin::Menu 2*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                                                        Quick Actions
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mb-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Ticket
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Customer
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div
                                                                    className="menu-item px-3"
                                                                    data-kt-menu-trigger="hover"
                                                                    data-kt-menu-placement="right-start"
                                                                >
                                                                    {/*begin::Menu item*/}
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        <span className="menu-title">New Group</span>
                                                                        <span className="menu-arrow" />
                                                                    </NavLink>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu sub*/}
                                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Admin Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Staff Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Member Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                    </div>
                                                                    {/*end::Menu sub*/}
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Contact
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mt-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content px-3 py-3">
                                                                        <NavLink
                                                                            className="btn btn-primary btn-sm px-4"
                                                                            to="#"
                                                                        >
                                                                            Generate Reports
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu 2*/}
                                                        </div>
                                                        {/*end::Menu*/}
                                                    </div>
                                                    {/*end::Header*/}
                                                    {/*begin::Post*/}
                                                    <div className="mb-5">
                                                        {/*begin::Text*/}
                                                        <p className="text-gray-800 fw-normal mb-5">
                                                            Outlines keep you honest. They stop you from indulging
                                                            in poorly thought-out metaphors about driving and keep
                                                            you focused on the overall structure of your post
                                                        </p>
                                                        {/*end::Text*/}
                                                        {/*begin::Toolbar*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
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
                                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={12}
                                                                            width={7}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={7}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}120
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                <span className="svg-icon svg-icon-2">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}15
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </div>
                                                    {/*end::Post*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator mb-4" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Reply input*/}
                                                    <form className="position-relative mb-6">
                                                        <textarea
                                                            className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                                                            data-kt-autosize="true"
                                                            rows={1}
                                                            placeholder="Reply.."
                                                            defaultValue={""}
                                                        />
                                                        <div className="position-absolute top-0 end-0 me-n5">
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                <span className="svg-icon svg-icon-3 mb-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                <span className="svg-icon svg-icon-2 mb-3">
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
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                    </form>
                                                    {/*edit::Reply input*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Feeds Widget 2*/}
                                            {/*begin::Feeds Widget 3*/}
                                            <div className="card mb-5 mb-xxl-8">
                                                {/*begin::Body*/}
                                                <div className="card-body pb-0">
                                                    {/*begin::Header*/}
                                                    <div className="d-flex align-items-center mb-3">
                                                        {/*begin::User*/}
                                                        <div className="d-flex align-items-center flex-grow-1">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-10.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                                                                >
                                                                    Carles Nilson
                                                                </NavLink>
                                                                <span className="text-gray-400 fw-bold">
                                                                    Yestarday at 5:06 PM
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Menu*/}
                                                        <div className="my-0">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
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
                                                            </button>
                                                            {/*begin::Menu 2*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                                                        Quick Actions
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mb-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Ticket
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Customer
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div
                                                                    className="menu-item px-3"
                                                                    data-kt-menu-trigger="hover"
                                                                    data-kt-menu-placement="right-start"
                                                                >
                                                                    {/*begin::Menu item*/}
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        <span className="menu-title">New Group</span>
                                                                        <span className="menu-arrow" />
                                                                    </NavLink>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu sub*/}
                                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Admin Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Staff Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Member Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                    </div>
                                                                    {/*end::Menu sub*/}
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Contact
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mt-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content px-3 py-3">
                                                                        <NavLink
                                                                            className="btn btn-primary btn-sm px-4"
                                                                            to="#"
                                                                        >
                                                                            Generate Reports
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu 2*/}
                                                        </div>
                                                        {/*end::Menu*/}
                                                    </div>
                                                    {/*end::Header*/}
                                                    {/*begin::Post*/}
                                                    <div className="mb-7">
                                                        {/*begin::Text*/}
                                                        <div className="text-gray-800 mb-5">
                                                            Outlines keep you honest. They stop you from indulging
                                                            in poorly thought-out metaphors about driving and keep
                                                            you focused on the overall structure of your post
                                                        </div>
                                                        {/*end::Text*/}
                                                        {/*begin::Toolbar*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
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
                                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={12}
                                                                            width={7}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={7}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}12
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                <span className="svg-icon svg-icon-2">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}150
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </div>
                                                    {/*end::Post*/}
                                                    {/*begin::Replies*/}
                                                    <div className="mb-7 ps-10">
                                                        {/*begin::Reply*/}
                                                        <div className="d-flex mb-5">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-11.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column flex-row-fluid">
                                                                {/*begin::Info*/}
                                                                <div className="d-flex align-items-center flex-wrap mb-1">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="text-gray-800 text-hover-primary fw-bolder me-2"
                                                                    >
                                                                        Alice Danchik
                                                                    </NavLink>
                                                                    <span className="text-gray-400 fw-bold fs-7">
                                                                        1 day
                                                                    </span>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
                                                                    >
                                                                        Reply
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Post*/}
                                                                <span className="text-gray-800 fs-7 fw-normal pt-1">
                                                                    Long before you sit dow to put digital pen to paper
                                                                    you need to make sure you have to sit down and
                                                                    write.
                                                                </span>
                                                                {/*end::Post*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Reply*/}
                                                        {/*begin::Reply*/}
                                                        <div className="d-flex">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-8.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column flex-row-fluid">
                                                                {/*begin::Info*/}
                                                                <div className="d-flex align-items-center flex-wrap mb-1">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="text-gray-800 text-hover-primary fw-bolder me-2"
                                                                    >
                                                                        Harris Bold
                                                                    </NavLink>
                                                                    <span className="text-gray-400 fw-bold fs-7">
                                                                        2 days
                                                                    </span>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
                                                                    >
                                                                        Reply
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Info*/}
                                                                {/*begin::Post*/}
                                                                <span className="text-gray-800 fs-7 fw-normal pt-1">
                                                                    Outlines keep you honest. They stop you from
                                                                    indulging in poorly
                                                                </span>
                                                                {/*end::Post*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Reply*/}
                                                    </div>
                                                    {/*end::Replies*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator mb-4" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Reply input*/}
                                                    <form className="position-relative mb-6">
                                                        <textarea
                                                            className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                                                            data-kt-autosize="true"
                                                            rows={1}
                                                            placeholder="Reply.."
                                                            defaultValue={""}
                                                        />
                                                        <div className="position-absolute top-0 end-0 me-n5">
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                <span className="svg-icon svg-icon-3 mb-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                <span className="svg-icon svg-icon-2 mb-3">
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
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                    </form>
                                                    {/*edit::Reply input*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Feeds Widget 3*/}
                                            {/*begin::Feeds Widget 4*/}
                                            <div className="card mb-5 mb-xxl-8">
                                                {/*begin::Body*/}
                                                <div className="card-body pb-0">
                                                    {/*begin::Header*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::User*/}
                                                        <div className="d-flex align-items-center flex-grow-1">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-13.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                                                                >
                                                                    Carles Nilson
                                                                </NavLink>
                                                                <span className="text-gray-400 fw-bold">
                                                                    Last week at 10:00 PM
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Menu*/}
                                                        <div className="my-0">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
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
                                                    {/*end::Header*/}
                                                    {/*begin::Post*/}
                                                    <div className="mb-7">
                                                        {/*begin::Text*/}
                                                        <div className="text-gray-800 mb-5">
                                                            Outlines keep you honest. They stop you from indulging
                                                            in poorly thought-out metaphors about driving and keep
                                                            you focused on the overall structure of your post
                                                        </div>
                                                        {/*end::Text*/}
                                                        {/*begin::Toolbar*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
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
                                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={12}
                                                                            width={7}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={7}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}22
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                <span className="svg-icon svg-icon-2">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}59
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </div>
                                                    {/*end::Post*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator mb-4" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Reply input*/}
                                                    <form className="position-relative mb-6">
                                                        <textarea
                                                            className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                                                            data-kt-autosize="true"
                                                            rows={1}
                                                            placeholder="Reply.."
                                                            defaultValue={""}
                                                        />
                                                        <div className="position-absolute top-0 end-0 me-n5">
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                <span className="svg-icon svg-icon-3 mb-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                <span className="svg-icon svg-icon-2 mb-3">
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
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                    </form>
                                                    {/*edit::Reply input*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Feeds Widget 4*/}
                                            {/*begin::Feeds widget 5*/}
                                            <div className="card d-none" id="kt_widget_5">
                                                {/*begin::Body*/}
                                                <div className="card-body pb-0">
                                                    {/*begin::Header*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::User*/}
                                                        <div className="d-flex align-items-center flex-grow-1">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="/assets/media/avatars/150-13.jpg" alt />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                                                                >
                                                                    Carles Nilson
                                                                </NavLink>
                                                                <span className="text-gray-400 fw-bold">
                                                                    Last week at 10:00 PM
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::Menu*/}
                                                        <div className="my-0">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
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
                                                            </button>
                                                            {/*begin::Menu 2*/}
                                                            <div
                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                                                                data-kt-menu="true"
                                                            >
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                                                        Quick Actions
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mb-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Ticket
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Customer
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div
                                                                    className="menu-item px-3"
                                                                    data-kt-menu-trigger="hover"
                                                                    data-kt-menu-placement="right-start"
                                                                >
                                                                    {/*begin::Menu item*/}
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        <span className="menu-title">New Group</span>
                                                                        <span className="menu-arrow" />
                                                                    </NavLink>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu sub*/}
                                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Admin Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Staff Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                        {/*begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <NavLink to="#" className="menu-link px-3">
                                                                                Member Group
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Menu item*/}
                                                                    </div>
                                                                    {/*end::Menu sub*/}
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink to="#" className="menu-link px-3">
                                                                        New Contact
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu separator*/}
                                                                <div className="separator mt-3 opacity-75" />
                                                                {/*end::Menu separator*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content px-3 py-3">
                                                                        <NavLink
                                                                            className="btn btn-primary btn-sm px-4"
                                                                            to="#"
                                                                        >
                                                                            Generate Reports
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu 2*/}
                                                        </div>
                                                        {/*end::Menu*/}
                                                    </div>
                                                    {/*end::Header*/}
                                                    {/*begin::Post*/}
                                                    <div className="mb-7">
                                                        {/*begin::Image*/}
                                                        <div
                                                            className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("assets/media/stock/900x600/19.jpg")'
                                                            }}
                                                        />
                                                        {/*end::Image*/}
                                                        {/*begin::Text*/}
                                                        <div className="text-gray-800 mb-5">
                                                            Outlines keep you honest. They stop you from indulging
                                                            in poorly thought-out metaphors about driving and keep
                                                            you focused on the overall structure of your post
                                                        </div>
                                                        {/*end::Text*/}
                                                        {/*begin::Toolbar*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
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
                                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={12}
                                                                            width={7}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={7}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}20
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                <span className="svg-icon svg-icon-2">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}50
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </div>
                                                    {/*end::Post*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator mb-4" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Reply input*/}
                                                    <form className="position-relative mb-6">
                                                        <textarea
                                                            className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                                                            data-kt-autosize="true"
                                                            rows={1}
                                                            placeholder="Reply.."
                                                            defaultValue={""}
                                                        />
                                                        <div className="position-absolute top-0 end-0 me-n5">
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                <span className="svg-icon svg-icon-3 mb-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                <span className="svg-icon svg-icon-2 mb-3">
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
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                    </form>
                                                    {/*edit::Reply input*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Feeds widget 5*/}
                                            {/*begin::Feeds widget 4, 5 load more*/}
                                            <button
                                                className="btn btn-primary w-100 text-center"
                                                id="kt_widget_5_load_more_btn"
                                            >
                                                <span className="indicator-label">More Feeds</span>
                                                <span className="indicator-progress">
                                                    Loading...
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                </span>
                                            </button>
                                            {/*end::Feeds widget 4, 5 load more*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 1*/}
                                            <div className="card mb-5 mb-xxl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    {/*begin::Title*/}
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Statistics
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 400 new members
                                                        </span>
                                                    </h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
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
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c76a2ffed"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c76a2ffed"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_1_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 1*/}
                                            {/*begin::List Widget 5*/}
                                            <div className="card mb-5 mb-xxl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header align-items-center border-0 mt-4">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="fw-bolder mb-2 text-dark">
                                                            Activities
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            890,344 Sales
                                                        </span>
                                                    </h3>
                                                    <div className="card-toolbar">
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
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
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c76a3031d"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c76a3031d"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body pt-5">
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline-label">
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                08:42
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-warning fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Text*/}
                                                            <div className="fw-mormal timeline-content text-muted ps-3">
                                                                Outlines keep you honest. And keep structure
                                                            </div>
                                                            {/*end::Text*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                10:00
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-success fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Content*/}
                                                            <div className="timeline-content d-flex">
                                                                <span className="fw-bolder text-gray-800 ps-3">
                                                                    AEOL meeting
                                                                </span>
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                14:37
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-danger fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Desc*/}
                                                            <div className="timeline-content fw-bolder text-gray-800 ps-3">
                                                                Make deposit
                                                                <NavLink to="#" className="text-primary">
                                                                    USD 700
                                                                </NavLink>
                                                                . to ESL
                                                            </div>
                                                            {/*end::Desc*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                16:50
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-primary fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Text*/}
                                                            <div className="timeline-content fw-mormal text-muted ps-3">
                                                                Indulging in poorly driving and keep structure keep
                                                                great
                                                            </div>
                                                            {/*end::Text*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                21:03
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-danger fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Desc*/}
                                                            <div className="timeline-content fw-bold text-gray-800 ps-3">
                                                                New order placed
                                                                <NavLink to="#" className="text-primary">
                                                                    #XF-2356
                                                                </NavLink>
                                                                .
                                                            </div>
                                                            {/*end::Desc*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                16:50
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-primary fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Text*/}
                                                            <div className="timeline-content fw-mormal text-muted ps-3">
                                                                Indulging in poorly driving and keep structure keep
                                                                great
                                                            </div>
                                                            {/*end::Text*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                21:03
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-danger fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Desc*/}
                                                            <div className="timeline-content fw-bold text-gray-800 ps-3">
                                                                New order placed
                                                                <NavLink to="#" className="text-primary">
                                                                    #XF-2356
                                                                </NavLink>
                                                                .
                                                            </div>
                                                            {/*end::Desc*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Label*/}
                                                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                                                                10:30
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Badge*/}
                                                            <div className="timeline-badge">
                                                                <i className="fa fa-genderless text-success fs-1" />
                                                            </div>
                                                            {/*end::Badge*/}
                                                            {/*begin::Text*/}
                                                            <div className="timeline-content fw-mormal text-muted ps-3">
                                                                Finance KPI Mobile app launch preparion meeting
                                                            </div>
                                                            {/*end::Text*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end: Card Body*/}
                                            </div>
                                            {/*end: List Widget 5*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Row*/}
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
        </div>
    )
}

export default Overview
