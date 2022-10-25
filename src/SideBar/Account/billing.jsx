import React from 'react'
import OfferADealModal from '../../CommonElements/OfferADealModal'
import { NavLink } from 'react-router-dom';

const billing = () => {
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
                                            Account Billing
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
                                            <li className="breadcrumb-item text-gray-600">Account</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Billing</li>
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
                                                id="kt_menu_61b9c78d04d9d"
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
                                                                data-dropdown-parent="#kt_menu_61b9c78d04d9d"
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
                                    <div className="card mb-5 mb-xl-10">
                                        <div className="card-body pt-9 pb-0">
                                            {/*begin::Details*/}
                                            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
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
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_upgrade_plan"
                                                                >
                                                                    Upgrade to Pro
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
                                                                            data-kt-countup-value={75}
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
                                                        to="../../demo14/dist/account/overview.html"
                                                    >
                                                        Overview
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/account/settings.html"
                                                    >
                                                        Settings
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/account/security.html"
                                                    >
                                                        Security
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5 active"
                                                        to="../../demo14/dist/account/billing.html"
                                                    >
                                                        Billing
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/account/statements.html"
                                                    >
                                                        Statements
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/account/referrals.html"
                                                    >
                                                        Referrals
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/account/api-keys.html"
                                                    >
                                                        API Keys
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                                {/*begin::Nav item*/}
                                                <li className="nav-item mt-2">
                                                    <NavLink
                                                        className="nav-link text-active-primary ms-0 me-10 py-5"
                                                        to="../../demo14/dist/account/logs.html"
                                                    >
                                                        Logs
                                                    </NavLink>
                                                </li>
                                                {/*end::Nav item*/}
                                            </ul>
                                            {/*begin::Navs*/}
                                        </div>
                                    </div>
                                    {/*end::Navbar*/}
                                    {/*begin::Billing Summary*/}
                                    <div className="card mb-5 mb-xl-10">
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Notice*/}
                                            <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-12 p-6">
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
                                                        <h4 className="text-gray-900 fw-bolder">
                                                            We need your attention!
                                                        </h4>
                                                        <div className="fs-6 text-gray-700">
                                                            Your payment was declined. To start using tools, please
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bolder"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_card"
                                                            >
                                                                Add Payment Method
                                                            </NavLink>
                                                            .
                                                        </div>
                                                    </div>
                                                    {/*end::Content*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>
                                            {/*end::Notice*/}
                                            {/*begin::Row*/}
                                            <div className="row">
                                                {/*begin::Col*/}
                                                <div className="col-lg-7">
                                                    {/*begin::Heading*/}
                                                    <h3 className="mb-2">Active until Dec 09, 2021</h3>
                                                    <p className="fs-6 text-gray-600 fw-bold mb-6 mb-lg-15">
                                                        We will send you a notification upon Subscription
                                                        expiration
                                                    </p>
                                                    {/*end::Heading*/}
                                                    {/*begin::Info*/}
                                                    <div className="fs-5 mb-2">
                                                        <span className="text-gray-800 fw-bolder me-1">
                                                            $24.99
                                                        </span>
                                                        <span className="text-gray-600 fw-bold">Per Month</span>
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Notice*/}
                                                    <div className="fs-6 text-gray-600 fw-bold">
                                                        Extended Pro Package. Up to 100 Agents &amp; 25 Projects
                                                    </div>
                                                    {/*end::Notice*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-lg-5">
                                                    {/*begin::Heading*/}
                                                    <div className="d-flex text-muted fw-bolder fs-5 mb-3">
                                                        <span className="flex-grow-1 text-gray-800">Users</span>
                                                        <span className="text-gray-800">86 of 100 Used</span>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Progress*/}
                                                    <div className="progress h-8px bg-light-primary mb-2">
                                                        <div
                                                            className="progress-bar bg-primary"
                                                            role="progressbar"
                                                            style={{ width: "86%" }}
                                                            aria-valuenow={86}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Description*/}
                                                    <div className="fs-6 text-gray-600 fw-bold mb-10">
                                                        14 Users remaining until your plan requires update
                                                    </div>
                                                    {/*end::Description*/}
                                                    {/*begin::Action*/}
                                                    <div className="d-flex justify-content-end pb-0 px-0">
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-light btn-active-light-primary me-2"
                                                        >
                                                            Cancel Subscription
                                                        </NavLink>
                                                        <button
                                                            className="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_upgrade_plan"
                                                        >
                                                            Upgrade Plan
                                                        </button>
                                                    </div>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Col*/}
                                            </div>
                                            {/*end::Row*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Billing Summary*/}
                                    {/*begin::Payment methods*/}
                                    <div className="card mb-5 mb-xl-10">
                                        {/*begin::Card header*/}
                                        <div className="card-header card-header-stretch pb-0">
                                            {/*begin::Title*/}
                                            <div className="card-title">
                                                <h3 className="m-0">Payment Methods</h3>
                                            </div>
                                            {/*end::Title*/}
                                            {/*begin::Toolbar*/}
                                            <div className="card-toolbar m-0">
                                                {/*begin::Tab nav*/}
                                                <ul
                                                    className="nav nav-stretch nav-line-tabs border-transparent"
                                                    role="tablist"
                                                >
                                                    {/*begin::Tab item*/}
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_billing_creditcard_tab"
                                                            className="nav-link fs-5 fw-bolder me-5 active"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_billing_creditcard"
                                                        >
                                                            Credit / Debit Card
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Tab item*/}
                                                    {/*begin::Tab item*/}
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_billing_paypal_tab"
                                                            className="nav-link fs-5 fw-bolder"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_billing_paypal"
                                                        >
                                                            Paypal
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Tab item*/}
                                                </ul>
                                                {/*end::Tab nav*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Tab content*/}
                                        <div
                                            id="kt_billing_payment_tab_content"
                                            className="card-body tab-content"
                                        >
                                            {/*begin::Tab panel*/}
                                            <div
                                                id="kt_billing_creditcard"
                                                className="tab-pane fade show active"
                                                role="tabpanel"
                                            >
                                                {/*begin::Title*/}
                                                <h3 className="mb-5">My Cards</h3>
                                                {/*end::Title*/}
                                                {/*begin::Row*/}
                                                <div className="row gx-9 gy-6">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-6">
                                                        {/*begin::Card*/}
                                                        <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column py-2">
                                                                {/*begin::Owner*/}
                                                                <div className="d-flex align-items-center fs-4 fw-bolder mb-5">
                                                                    Marcus Morris
                                                                    <span className="badge badge-light-success fs-7 ms-2">
                                                                        Primary
                                                                    </span>
                                                                </div>
                                                                {/*end::Owner*/}
                                                                {/*begin::Wrapper*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Icon*/}
                                                                    <img
                                                                        src="/assets/media/svg/card-logos/visa.svg"
                                                                        alt
                                                                        className="me-4"
                                                                    />
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Details*/}
                                                                    <div>
                                                                        <div className="fs-4 fw-bolder">
                                                                            Visa **** 1679
                                                                        </div>
                                                                        <div className="fs-6 fw-bold text-gray-400">
                                                                            Card expires at 09/24
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                            {/*begin::Actions*/}
                                                            <div className="d-flex align-items-center py-2">
                                                                <button
                                                                    type="reset"
                                                                    className="btn btn-sm btn-light btn-active-light-primary me-3"
                                                                >
                                                                    Delete
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-light btn-active-light-primary"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_new_card"
                                                                >
                                                                    Edit
                                                                </button>
                                                            </div>
                                                            {/*end::Actions*/}
                                                        </div>
                                                        {/*end::Card*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-6">
                                                        {/*begin::Card*/}
                                                        <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column py-2">
                                                                {/*begin::Owner*/}
                                                                <div className="d-flex align-items-center fs-4 fw-bolder mb-5">
                                                                    Jacob Holder
                                                                </div>
                                                                {/*end::Owner*/}
                                                                {/*begin::Wrapper*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Icon*/}
                                                                    <img
                                                                        src="/assets/media/svg/card-logos/american-express.svg"
                                                                        alt
                                                                        className="me-4"
                                                                    />
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Details*/}
                                                                    <div>
                                                                        <div className="fs-4 fw-bolder">
                                                                            Mastercard **** 2040
                                                                        </div>
                                                                        <div className="fs-6 fw-bold text-gray-400">
                                                                            Card expires at 10/22
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                            {/*begin::Actions*/}
                                                            <div className="d-flex align-items-center py-2">
                                                                <button
                                                                    type="reset"
                                                                    className="btn btn-sm btn-light btn-active-light-primary me-3"
                                                                >
                                                                    Delete
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-light btn-active-light-primary"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_new_card"
                                                                >
                                                                    Edit
                                                                </button>
                                                            </div>
                                                            {/*end::Actions*/}
                                                        </div>
                                                        {/*end::Card*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-6">
                                                        {/*begin::Card*/}
                                                        <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column py-2">
                                                                {/*begin::Owner*/}
                                                                <div className="d-flex align-items-center fs-4 fw-bolder mb-5">
                                                                    Jhon Larson
                                                                </div>
                                                                {/*end::Owner*/}
                                                                {/*begin::Wrapper*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Icon*/}
                                                                    <img
                                                                        src="/assets/media/svg/card-logos/mastercard.svg"
                                                                        alt
                                                                        className="me-4"
                                                                    />
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Details*/}
                                                                    <div>
                                                                        <div className="fs-4 fw-bolder">
                                                                            Mastercard **** 1290
                                                                        </div>
                                                                        <div className="fs-6 fw-bold text-gray-400">
                                                                            Card expires at 03/23
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                            {/*begin::Actions*/}
                                                            <div className="d-flex align-items-center py-2">
                                                                <button
                                                                    type="reset"
                                                                    className="btn btn-sm btn-light btn-active-light-primary me-3"
                                                                >
                                                                    Delete
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-light btn-active-light-primary"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_new_card"
                                                                >
                                                                    Edit
                                                                </button>
                                                            </div>
                                                            {/*end::Actions*/}
                                                        </div>
                                                        {/*end::Card*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-6">
                                                        {/*begin::Notice*/}
                                                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                                {/*begin::Content*/}
                                                                <div className="mb-3 mb-md-0 fw-bold">
                                                                    <h4 className="text-gray-900 fw-bolder">
                                                                        Important Note!
                                                                    </h4>
                                                                    <div className="fs-6 text-gray-700 pe-7">
                                                                        Please carefully read
                                                                        <NavLink to="#" className="fw-bolder me-1">
                                                                            Product Terms
                                                                        </NavLink>
                                                                        adding your new payment card
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
                                                                    Add Card
                                                                </NavLink>
                                                                {/*end::Action*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Notice*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                            {/*begin::Tab panel*/}
                                            <div
                                                id="kt_billing_paypal"
                                                className="tab-pane fade"
                                                role="tabpanel"
                                                aria-labelledby="kt_billing_paypal_tab"
                                            >
                                                {/*begin::Title*/}
                                                <h3 className="mb-5">My Paypal</h3>
                                                {/*end::Title*/}
                                                {/*begin::Description*/}
                                                <div className="text-gray-600 fs-6 fw-bold mb-5">
                                                    To use PayPal as your payment method, you will need to make
                                                    pre-payments each month before your bill is due.
                                                </div>
                                                {/*end::Description*/}
                                                {/*begin::Form*/}
                                                <form className="form">
                                                    {/*begin::Input group*/}
                                                    <div className="mb-7 mw-350px">
                                                        <select
                                                            name="timezone"
                                                            data-control="select2"
                                                            data-placeholder="Select an option"
                                                            data-hide-search="true"
                                                            className="form-select form-select-solid form-select-lg fw-bold fs-6 text-gray-700"
                                                        >
                                                            <option>Select an option</option>
                                                            <option value={25}>US $25.00</option>
                                                            <option value={50}>US $50.00</option>
                                                            <option value={100}>US $100.00</option>
                                                            <option value={125}>US $125.00</option>
                                                            <option value={150}>US $150.00</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    <button type="submit" className="btn btn-primary">
                                                        Pay with Paypal
                                                    </button>
                                                </form>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                        </div>
                                        {/*end::Tab content*/}
                                    </div>
                                    {/*end::Payment methods*/}
                                    {/*begin::Billing Address*/}
                                    <div className="card mb-5 mb-xl-10">
                                        {/*begin::Card header*/}
                                        <div className="card-header">
                                            {/*begin::Title*/}
                                            <div className="card-title">
                                                <h3>Billing Address</h3>
                                            </div>
                                            {/*end::Title*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Addresses*/}
                                            <div className="row gx-9 gy-6">
                                                {/*begin::Col*/}
                                                <div className="col-xl-6">
                                                    {/*begin::Address*/}
                                                    <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                        {/*begin::Details*/}
                                                        <div className="d-flex flex-column py-2">
                                                            <div className="d-flex align-items-center fs-5 fw-bolder mb-5">
                                                                Address 1
                                                                <span className="badge badge-light-success fs-7 ms-2">
                                                                    Primary
                                                                </span>
                                                            </div>
                                                            <div className="fs-6 fw-bold text-gray-600">
                                                                Ap #285-7193 Ullamcorper Avenue
                                                                <br />
                                                                Amesbury HI 93373
                                                                <br />
                                                                US
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex align-items-center py-2">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-sm btn-light btn-active-light-primary me-3"
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_address"
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Address*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-xl-6">
                                                    {/*begin::Address*/}
                                                    <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                        {/*begin::Details*/}
                                                        <div className="d-flex flex-column py-2">
                                                            <div className="d-flex align-items-center fs-5 fw-bolder mb-3">
                                                                Address 2
                                                            </div>
                                                            <div className="fs-6 fw-bold text-gray-600">
                                                                Ap #285-7193 Ullamcorper Avenue
                                                                <br />
                                                                Amesbury HI 93373
                                                                <br />
                                                                US
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex align-items-center py-2">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-sm btn-light btn-active-light-primary me-3"
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_address"
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Address*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-xl-6">
                                                    {/*begin::Address*/}
                                                    <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                        {/*begin::Details*/}
                                                        <div className="d-flex flex-column py-2">
                                                            <div className="d-flex align-items-center fs-5 fw-bolder mb-3">
                                                                Address 3
                                                            </div>
                                                            <div className="fs-6 fw-bold text-gray-600">
                                                                Ap #285-7193 Ullamcorper Avenue
                                                                <br />
                                                                Amesbury HI 93373
                                                                <br />
                                                                US
                                                            </div>
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex align-items-center py-2">
                                                            <button
                                                                type="reset"
                                                                className="btn btn-sm btn-light btn-active-light-primary me-3"
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_address"
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Address*/}
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-xl-6">
                                                    {/*begin::Notice*/}
                                                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 mb-10 p-6">
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                            {/*begin::Content*/}
                                                            <div className="mb-3 mb-md-0 fw-bold">
                                                                <h4 className="text-gray-900 fw-bolder">
                                                                    This is a very important note!
                                                                </h4>
                                                                <div className="fs-6 text-gray-700 pe-7">
                                                                    Writing headlines for blog posts is much science and
                                                                    probably cool audience
                                                                </div>
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Action*/}
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-primary px-6 align-self-center text-nowrap"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_address"
                                                            >
                                                                New Address
                                                            </NavLink>
                                                            {/*end::Action*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Notice*/}
                                                </div>
                                                {/*end::Col*/}
                                            </div>
                                            {/*end::Addresses*/}
                                            {/*begin::Tax info*/}
                                            <div className="mt-10">
                                                <h3 className="mb-3">Tax Location</h3>
                                                <div className="fw-bold text-gray-600 fs-6">
                                                    United States - 10% VAT
                                                    <br />
                                                    <NavLink className="fw-bolder" to="#">
                                                        More Info
                                                    </NavLink>
                                                </div>
                                            </div>
                                            {/*end::Tax info*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Billing Address*/}
                                    {/*begin::Billing History*/}
                                    <div className="card">
                                        {/*begin::Card header*/}
                                        <div className="card-header card-header-stretch border-bottom border-gray-200">
                                            {/*begin::Title*/}
                                            <div className="card-title">
                                                <h3 className="fw-bolder m-0">Billing History</h3>
                                            </div>
                                            {/*end::Title*/}
                                            {/*begin::Toolbar*/}
                                            <div className="card-toolbar m-0">
                                                {/*begin::Tab nav*/}
                                                <ul
                                                    className="nav nav-stretch nav-line-tabs border-transparent"
                                                    role="tablist"
                                                >
                                                    {/*begin::Tab nav item*/}
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_billing_6months_tab"
                                                            className="nav-link fs-5 fw-bold me-3 active"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_billing_months"
                                                        >
                                                            Month
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Tab nav item*/}
                                                    {/*begin::Tab nav item*/}
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_billing_1year_tab"
                                                            className="nav-link fs-5 fw-bold me-3"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_billing_year"
                                                        >
                                                            Year
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Tab nav item*/}
                                                    {/*begin::Tab nav item*/}
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_billing_alltime_tab"
                                                            className="nav-link fs-5 fw-bold"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_billing_all"
                                                        >
                                                            All Time
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Tab nav item*/}
                                                </ul>
                                                {/*end::Tab nav*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Tab Content*/}
                                        <div className="tab-content">
                                            {/*begin::Tab panel*/}
                                            <div
                                                id="kt_billing_months"
                                                className="card-body p-0 tab-pane fade show active"
                                                role="tabpanel"
                                                aria-labelledby="kt_billing_months"
                                            >
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-bordered align-middle gy-4 gs-9">
                                                        <thead className="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
                                                            <tr>
                                                                <td className="min-w-150px">Date</td>
                                                                <td className="min-w-250px">Description</td>
                                                                <td className="min-w-150px">Amount</td>
                                                                <td className="min-w-150px">Invoice</td>
                                                                <td />
                                                            </tr>
                                                        </thead>
                                                        <tbody className="fw-bold text-gray-600">
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Nov 01, 2020</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for Ocrober 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Oct 08, 2020</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for September 2021</NavLink>
                                                                </td>
                                                                <td>$98.03</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Aug 24, 2020</td>
                                                                <td>Paypal</td>
                                                                <td>$35.07</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Aug 01, 2020</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for July 2021</NavLink>
                                                                </td>
                                                                <td>$142.80</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jul 01, 2020</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for June 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jun 17, 2020</td>
                                                                <td>Paypal</td>
                                                                <td>$523.09</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jun 01, 2020</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for May 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                        </tbody>
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                            {/*begin::Tab panel*/}
                                            <div
                                                id="kt_billing_year"
                                                className="card-body p-0 tab-pane fade"
                                                role="tabpanel"
                                                aria-labelledby="kt_billing_year"
                                            >
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-bordered align-middle gy-4 gs-9">
                                                        <thead className="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
                                                            <tr>
                                                                <td className="min-w-150px">Date</td>
                                                                <td className="min-w-250px">Description</td>
                                                                <td className="min-w-150px">Amount</td>
                                                                <td className="min-w-150px">Invoice</td>
                                                                <td />
                                                            </tr>
                                                        </thead>
                                                        <tbody className="fw-bold text-gray-600">
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Dec 01, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Billing for Ocrober 2021</NavLink>
                                                                </td>
                                                                <td>$250.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Oct 08, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Statements for September 2021</NavLink>
                                                                </td>
                                                                <td>$98.03</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Aug 24, 2021</td>
                                                                <td>Paypal</td>
                                                                <td>$35.07</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Aug 01, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for July 2021</NavLink>
                                                                </td>
                                                                <td>$142.80</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jul 01, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Statements for June 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jun 17, 2021</td>
                                                                <td>Paypal</td>
                                                                <td>$23.09</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                        </tbody>
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                            {/*begin::Tab panel*/}
                                            <div
                                                id="kt_billing_all"
                                                className="card-body p-0 tab-pane fade"
                                                role="tabpanel"
                                                aria-labelledby="kt_billing_all"
                                            >
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-bordered align-middle gy-4 gs-9">
                                                        <thead className="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
                                                            <tr>
                                                                <td className="min-w-150px">Date</td>
                                                                <td className="min-w-250px">Description</td>
                                                                <td className="min-w-150px">Amount</td>
                                                                <td className="min-w-150px">Invoice</td>
                                                                <td />
                                                            </tr>
                                                        </thead>
                                                        <tbody className="fw-bold text-gray-600">
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Nov 01, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Billing for Ocrober 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Aug 10, 2021</td>
                                                                <td>Paypal</td>
                                                                <td>$35.07</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Aug 01, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for July 2021</NavLink>
                                                                </td>
                                                                <td>$142.80</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jul 20, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Statements for June 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jun 17, 2021</td>
                                                                <td>Paypal</td>
                                                                <td>$23.09</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                <td>Jun 01, 2021</td>
                                                                <td>
                                                                    <NavLink to="#">Invoice for May 2021</NavLink>
                                                                </td>
                                                                <td>$123.79</td>
                                                                <td>
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        PDF
                                                                    </NavLink>
                                                                </td>
                                                                <td className="text-right">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="btn btn-sm btn-light btn-active-light-primary"
                                                                    >
                                                                        View
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                        </tbody>
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                        </div>
                                        {/*end::Tab Content*/}
                                    </div>
                                    {/*end::Billing Address*/}
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - New Card*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_new_card"
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
                                                    <h2>Add New Card</h2>
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
                                                {/*end::Modal header*/}
                                                {/*begin::Modal body*/}
                                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                    {/*begin::Form*/}
                                                    <form
                                                        id="kt_modal_new_card_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-column mb-7 fv-row">
                                                            {/*begin::Label*/}
                                                            <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                                <span className="required">Name On Card</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="tooltip"
                                                                    title="Specify a card holder's name"
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                placeholder
                                                                name="card_name"
                                                                defaultValue="Max Doe"
                                                            />
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-column mb-7 fv-row">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold form-label mb-2">
                                                                Card Number
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input wrapper*/}
                                                            <div className="position-relative">
                                                                {/*begin::Input*/}
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-solid"
                                                                    placeholder="Enter card number"
                                                                    name="card_number"
                                                                    defaultValue="4111 1111 1111 1111"
                                                                />
                                                                {/*end::Input*/}
                                                                {/*begin::Card logos*/}
                                                                <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                                                    <img
                                                                        src="/assets/media/svg/card-logos/visa.svg"
                                                                        alt
                                                                        className="h-25px"
                                                                    />
                                                                    <img
                                                                        src="/assets/media/svg/card-logos/mastercard.svg"
                                                                        alt
                                                                        className="h-25px"
                                                                    />
                                                                    <img
                                                                        src="/assets/media/svg/card-logos/american-express.svg"
                                                                        alt
                                                                        className="h-25px"
                                                                    />
                                                                </div>
                                                                {/*end::Card logos*/}
                                                            </div>
                                                            {/*end::Input wrapper*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="row mb-10">
                                                            {/*begin::Col*/}
                                                            <div className="col-md-8 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="required fs-6 fw-bold form-label mb-2">
                                                                    Expiration Date
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Row*/}
                                                                <div className="row fv-row">
                                                                    {/*begin::Col*/}
                                                                    <div className="col-6">
                                                                        <select
                                                                            name="card_expiry_month"
                                                                            className="form-select form-select-solid"
                                                                            data-control="select2"
                                                                            data-hide-search="true"
                                                                            data-placeholder="Month"
                                                                        >
                                                                            <option />
                                                                            <option value={1}>1</option>
                                                                            <option value={2}>2</option>
                                                                            <option value={3}>3</option>
                                                                            <option value={4}>4</option>
                                                                            <option value={5}>5</option>
                                                                            <option value={6}>6</option>
                                                                            <option value={7}>7</option>
                                                                            <option value={8}>8</option>
                                                                            <option value={9}>9</option>
                                                                            <option value={10}>10</option>
                                                                            <option value={11}>11</option>
                                                                            <option value={12}>12</option>
                                                                        </select>
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col-6">
                                                                        <select
                                                                            name="card_expiry_year"
                                                                            className="form-select form-select-solid"
                                                                            data-control="select2"
                                                                            data-hide-search="true"
                                                                            data-placeholder="Year"
                                                                        >
                                                                            <option />
                                                                            <option value={2021}>2021</option>
                                                                            <option value={2022}>2022</option>
                                                                            <option value={2023}>2023</option>
                                                                            <option value={2024}>2024</option>
                                                                            <option value={2025}>2025</option>
                                                                            <option value={2026}>2026</option>
                                                                            <option value={2027}>2027</option>
                                                                            <option value={2028}>2028</option>
                                                                            <option value={2029}>2029</option>
                                                                            <option value={2030}>2030</option>
                                                                            <option value={2031}>2031</option>
                                                                        </select>
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                </div>
                                                                {/*end::Row*/}
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-md-4 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                                    <span className="required">CVV</span>
                                                                    <i
                                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Enter a card CVV code"
                                                                    />
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input wrapper*/}
                                                                <div className="position-relative">
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid"
                                                                        minLength={3}
                                                                        maxLength={4}
                                                                        placeholder="CVV"
                                                                        name="card_cvv"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::CVV icon*/}
                                                                    <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                                                        {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                                                        <span className="svg-icon svg-icon-2hx">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path d="M22 7H2V11H22V7Z" fill="black" />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </div>
                                                                    {/*end::CVV icon*/}
                                                                </div>
                                                                {/*end::Input wrapper*/}
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-stack">
                                                            {/*begin::Label*/}
                                                            <div className="me-5">
                                                                <label className="fs-6 fw-bold form-label">
                                                                    Save Card for further billing?
                                                                </label>
                                                                <div className="fs-7 fw-bold text-muted">
                                                                    If you need more info, please check budget planning
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Switch*/}
                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="form-check-label fw-bold text-muted">
                                                                    Save Card
                                                                </span>
                                                            </label>
                                                            {/*end::Switch*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center pt-15">
                                                            <button
                                                                type="reset"
                                                                id="kt_modal_new_card_cancel"
                                                                className="btn btn-light me-3"
                                                            >
                                                                Discard
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                id="kt_modal_new_card_submit"
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
                                                    {/*end::Form*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - New Card*/}
                                    {/*begin::Modal - New Address*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_new_address"
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
                                                    id="kt_modal_new_address_form"
                                                >
                                                    {/*begin::Modal header*/}
                                                    <div
                                                        className="modal-header"
                                                        id="kt_modal_new_address_header"
                                                    >
                                                        {/*begin::Modal title*/}
                                                        <h2>Add New Address</h2>
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
                                                    {/*end::Modal header*/}
                                                    {/*begin::Modal body*/}
                                                    <div className="modal-body py-10 px-lg-17">
                                                        {/*begin::Scroll*/}
                                                        <div
                                                            className="scroll-y me-n7 pe-7"
                                                            id="kt_modal_new_address_scroll"
                                                            data-kt-scroll="true"
                                                            data-kt-scroll-activate="{default: false, lg: true}"
                                                            data-kt-scroll-max-height="auto"
                                                            data-kt-scroll-dependencies="#kt_modal_new_address_header"
                                                            data-kt-scroll-wrappers="#kt_modal_new_address_scroll"
                                                            data-kt-scroll-offset="300px"
                                                        >
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
                                                                        <h4 className="text-gray-900 fw-bolder">
                                                                            Warning
                                                                        </h4>
                                                                        <div className="fs-6 text-gray-700">
                                                                            Updating address may affter to your
                                                                            <NavLink to="#">Tax Location</NavLink>
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Content*/}
                                                                </div>
                                                                {/*end::Wrapper*/}
                                                            </div>
                                                            {/*end::Notice*/}
                                                            {/*end::Notice*/}
                                                            {/*begin::Input group*/}
                                                            <div className="row mb-5">
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required fs-5 fw-bold mb-2">
                                                                        First name
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="first-name"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 fv-row">
                                                                    {/*end::Label*/}
                                                                    <label className="required fs-5 fw-bold mb-2">
                                                                        Last name
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*end::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="last-name"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-5 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                                                    <span className="required">Country</span>
                                                                    <i
                                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Your payment statements may very based on selected country"
                                                                    />
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Select*/}
                                                                <select
                                                                    name="country"
                                                                    data-control="select2"
                                                                    data-dropdown-parent="#kt_modal_new_address"
                                                                    data-placeholder="Select a Country..."
                                                                    className="form-select form-select-solid"
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
                                                                    <option value="CF">Central African Republic</option>
                                                                    <option value="TD">Chad</option>
                                                                    <option value="CL">Chile</option>
                                                                    <option value="CN">China</option>
                                                                    <option value="CX">Christmas Island</option>
                                                                    <option value="CC">Cocos (Keeling) Islands</option>
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
                                                                    <option value="MP">Northern Mariana Islands</option>
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
                                                                    <option value="TC">Turks and Caicos Islands</option>
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
                                                                {/*end::Select*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-5 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="required fs-5 fw-bold mb-2">
                                                                    Address Line 1
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder
                                                                    name="address1"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-5 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="required fs-5 fw-bold mb-2">
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
                                                            <div className="d-flex flex-column mb-5 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="fs-5 fw-bold mb-2">Town</label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder
                                                                    name="city"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="row g-9 mb-5">
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-5 fw-bold mb-2">
                                                                        State / Province
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="state"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-5 fw-bold mb-2">
                                                                        Post Code
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder
                                                                        name="postcode"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-5">
                                                                {/*begin::Wrapper*/}
                                                                <div className="d-flex flex-stack">
                                                                    {/*begin::Label*/}
                                                                    <div className="me-5">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-5 fw-bold">
                                                                            Use as a billing adderess?
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div className="fs-7 fw-bold text-muted">
                                                                            If you need more info, please check budget
                                                                            planning
                                                                        </div>
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Switch*/}
                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input"
                                                                            name="billing"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                            defaultChecked="checked"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="form-check-label fw-bold text-muted">
                                                                            Yes
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </label>
                                                                    {/*end::Switch*/}
                                                                </div>
                                                                {/*begin::Wrapper*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                        </div>
                                                        {/*end::Scroll*/}
                                                    </div>
                                                    {/*end::Modal body*/}
                                                    {/*begin::Modal footer*/}
                                                    <div className="modal-footer flex-center">
                                                        {/*begin::Button*/}
                                                        <button
                                                            type="reset"
                                                            id="kt_modal_new_address_cancel"
                                                            className="btn btn-light me-3"
                                                        >
                                                            Discard
                                                        </button>
                                                        {/*end::Button*/}
                                                        {/*begin::Button*/}
                                                        <button
                                                            type="submit"
                                                            id="kt_modal_new_address_submit"
                                                            className="btn btn-primary"
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
                                    {/*end::Modal - New Address*/}
                                    {/*begin::Modal - Upgrade plan*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_upgrade_plan"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-xl">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content rounded">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header justify-content-end border-0 pb-0">
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
                                                {/*end::Modal header*/}
                                                {/*begin::Modal body*/}
                                                <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                                                    {/*begin::Heading*/}
                                                    <div className="mb-13 text-center">
                                                        <h1 className="mb-3">Upgrade a Plan</h1>
                                                        <div className="text-muted fw-bold fs-5">
                                                            If you need more info, please check
                                                            <NavLink to="#" className="link-primary fw-bolder">
                                                                Pricing Guidelines
                                                            </NavLink>
                                                            .
                                                        </div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Plans*/}
                                                    <div className="d-flex flex-column">
                                                        {/*begin::Nav group*/}
                                                        <div
                                                            className="nav-group nav-group-outline mx-auto"
                                                            data-kt-buttons="true"
                                                        >
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                                                                data-kt-plan="month"
                                                            >
                                                                Monthly
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                                                                data-kt-plan="annual"
                                                            >
                                                                Annual
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Nav group*/}
                                                        {/*begin::Row*/}
                                                        <div className="row mt-10">
                                                            {/*begin::Col*/}
                                                            <div className="col-lg-6 mb-10 mb-lg-0">
                                                                {/*begin::Tabs*/}
                                                                <div className="nav flex-column">
                                                                    {/*begin::Tab link*/}
                                                                    <div
                                                                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_upgrade_plan_startup"
                                                                    >
                                                                        {/*end::Description*/}
                                                                        <div className="d-flex align-items-center me-2">
                                                                            {/*begin::Radio*/}
                                                                            <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    name="plan"
                                                                                    defaultChecked="checked"
                                                                                    defaultValue="startup"
                                                                                />
                                                                            </div>
                                                                            {/*end::Radio*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="flex-grow-1">
                                                                                <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                                                    Startup
                                                                                </h2>
                                                                                <div className="fw-bold opacity-50">
                                                                                    Best for startups
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                        {/*begin::Price*/}
                                                                        <div className="ms-5">
                                                                            <span className="mb-2">$</span>
                                                                            <span
                                                                                className="fs-3x fw-bolder"
                                                                                data-kt-plan-price-month={39}
                                                                                data-kt-plan-price-annual={399}
                                                                            >
                                                                                39
                                                                            </span>
                                                                            <span className="fs-7 opacity-50">
                                                                                /<span data-kt-element="period">Mon</span>
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Price*/}
                                                                    </div>
                                                                    {/*end::Tab link*/}
                                                                    {/*begin::Tab link*/}
                                                                    <div
                                                                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_upgrade_plan_advanced"
                                                                    >
                                                                        {/*end::Description*/}
                                                                        <div className="d-flex align-items-center me-2">
                                                                            {/*begin::Radio*/}
                                                                            <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    name="plan"
                                                                                    defaultValue="advanced"
                                                                                />
                                                                            </div>
                                                                            {/*end::Radio*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="flex-grow-1">
                                                                                <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                                                    Advanced
                                                                                </h2>
                                                                                <div className="fw-bold opacity-50">
                                                                                    Best for 100+ team size
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                        {/*begin::Price*/}
                                                                        <div className="ms-5">
                                                                            <span className="mb-2">$</span>
                                                                            <span
                                                                                className="fs-3x fw-bolder"
                                                                                data-kt-plan-price-month={339}
                                                                                data-kt-plan-price-annual={3399}
                                                                            >
                                                                                339
                                                                            </span>
                                                                            <span className="fs-7 opacity-50">
                                                                                /<span data-kt-element="period">Mon</span>
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Price*/}
                                                                    </div>
                                                                    {/*end::Tab link*/}
                                                                    {/*begin::Tab link*/}
                                                                    <div
                                                                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_upgrade_plan_enterprise"
                                                                    >
                                                                        {/*end::Description*/}
                                                                        <div className="d-flex align-items-center me-2">
                                                                            {/*begin::Radio*/}
                                                                            <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    name="plan"
                                                                                    defaultValue="enterprise"
                                                                                />
                                                                            </div>
                                                                            {/*end::Radio*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="flex-grow-1">
                                                                                <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                                                    Enterprise
                                                                                    <span className="badge badge-light-success ms-2 fs-7">
                                                                                        Most popular
                                                                                    </span>
                                                                                </h2>
                                                                                <div className="fw-bold opacity-50">
                                                                                    Best value for 1000+ team
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                        {/*begin::Price*/}
                                                                        <div className="ms-5">
                                                                            <span className="mb-2">$</span>
                                                                            <span
                                                                                className="fs-3x fw-bolder"
                                                                                data-kt-plan-price-month={999}
                                                                                data-kt-plan-price-annual={9999}
                                                                            >
                                                                                999
                                                                            </span>
                                                                            <span className="fs-7 opacity-50">
                                                                                /<span data-kt-element="period">Mon</span>
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Price*/}
                                                                    </div>
                                                                    {/*end::Tab link*/}
                                                                    {/*begin::Tab link*/}
                                                                    <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6">
                                                                        {/*end::Description*/}
                                                                        <div className="d-flex align-items-center me-2">
                                                                            {/*begin::Radio*/}
                                                                            <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    name="plan"
                                                                                    defaultValue="custom"
                                                                                />
                                                                            </div>
                                                                            {/*end::Radio*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="flex-grow-1">
                                                                                <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                                                    Custom
                                                                                </h2>
                                                                                <div className="fw-bold opacity-50">
                                                                                    Requet a custom license
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                        {/*begin::Price*/}
                                                                        <div className="ms-5">
                                                                            <NavLink to="#" className="btn btn-sm btn-primary">
                                                                                Contact Us
                                                                            </NavLink>
                                                                        </div>
                                                                        {/*end::Price*/}
                                                                    </div>
                                                                    {/*end::Tab link*/}
                                                                </div>
                                                                {/*end::Tabs*/}
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-lg-6">
                                                                {/*begin::Tab content*/}
                                                                <div className="tab-content rounded h-100 bg-light p-10">
                                                                    {/*begin::Tab Pane*/}
                                                                    <div
                                                                        className="tab-pane fade show active"
                                                                        id="kt_upgrade_plan_startup"
                                                                    >
                                                                        {/*begin::Heading*/}
                                                                        <div className="pb-5">
                                                                            <h2 className="fw-bolder text-dark">
                                                                                What’s in Startup Plan?
                                                                            </h2>
                                                                            <div className="text-muted fw-bold">
                                                                                Optimal for 10+ team size and new startup
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Heading*/}
                                                                        {/*begin::Body*/}
                                                                        <div className="pt-1">
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Up to 10 Active Users
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Up to 30 Project Integrations
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Analytics Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                                                    Finance Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                                            x={7}
                                                                                            y="15.3137"
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-45 7 15.3137)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x="8.41422"
                                                                                            y={7}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(45 8.41422 7)"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                                                    Accounting Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                                            x={7}
                                                                                            y="15.3137"
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-45 7 15.3137)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x="8.41422"
                                                                                            y={7}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(45 8.41422 7)"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                                                    Network Platform
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                                            x={7}
                                                                                            y="15.3137"
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-45 7 15.3137)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x="8.41422"
                                                                                            y={7}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(45 8.41422 7)"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                                                    Unlimited Cloud Space
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                                            x={7}
                                                                                            y="15.3137"
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-45 7 15.3137)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x="8.41422"
                                                                                            y={7}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(45 8.41422 7)"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                        </div>
                                                                        {/*end::Body*/}
                                                                    </div>
                                                                    {/*end::Tab Pane*/}
                                                                    {/*begin::Tab Pane*/}
                                                                    <div
                                                                        className="tab-pane fade"
                                                                        id="kt_upgrade_plan_advanced"
                                                                    >
                                                                        {/*begin::Heading*/}
                                                                        <div className="pb-5">
                                                                            <h2 className="fw-bolder text-dark">
                                                                                What’s in Startup Plan?
                                                                            </h2>
                                                                            <div className="text-muted fw-bold">
                                                                                Optimal for 100+ team size and grown company
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Heading*/}
                                                                        {/*begin::Body*/}
                                                                        <div className="pt-1">
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Up to 10 Active Users
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Up to 30 Project Integrations
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Analytics Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Finance Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Accounting Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                                                    Network Platform
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                                            x={7}
                                                                                            y="15.3137"
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-45 7 15.3137)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x="8.41422"
                                                                                            y={7}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(45 8.41422 7)"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                                                    Unlimited Cloud Space
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                                            x={7}
                                                                                            y="15.3137"
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-45 7 15.3137)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x="8.41422"
                                                                                            y={7}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(45 8.41422 7)"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                        </div>
                                                                        {/*end::Body*/}
                                                                    </div>
                                                                    {/*end::Tab Pane*/}
                                                                    {/*begin::Tab Pane*/}
                                                                    <div
                                                                        className="tab-pane fade"
                                                                        id="kt_upgrade_plan_enterprise"
                                                                    >
                                                                        {/*begin::Heading*/}
                                                                        <div className="pb-5">
                                                                            <h2 className="fw-bolder text-dark">
                                                                                What’s in Startup Plan?
                                                                            </h2>
                                                                            <div className="text-muted fw-bold">
                                                                                Optimal for 1000+ team and enterpise
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Heading*/}
                                                                        {/*begin::Body*/}
                                                                        <div className="pt-1">
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Up to 10 Active Users
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Up to 30 Project Integrations
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Analytics Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Finance Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Accounting Module
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center mb-7">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Network Platform
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                            {/*begin::Item*/}
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                                                    Unlimited Cloud Space
                                                                                </span>
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                                        <path
                                                                                            d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </div>
                                                                            {/*end::Item*/}
                                                                        </div>
                                                                        {/*end::Body*/}
                                                                    </div>
                                                                    {/*end::Tab Pane*/}
                                                                </div>
                                                                {/*end::Tab content*/}
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Row*/}
                                                    </div>
                                                    {/*end::Plans*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex flex-center flex-row-fluid pt-12">
                                                        <button
                                                            type="reset"
                                                            className="btn btn-light me-3"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            Upgrade Plan
                                                        </button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Upgrade plan*/}
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
            <OfferADealModal />
        </div>
    )
}

export default billing
