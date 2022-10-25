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
                                            View Subscriptions
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
                                            <li className="breadcrumb-item text-gray-600">Subscriptions</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">
                                                View Subscription
                                            </li>
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
                                                id="kt_menu_61b9c7d989624"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7d989624"
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
                                        {/*begin::Content*/}
                                        <div className="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
                                            {/*begin::Card*/}
                                            <div className="card card-flush pt-3 mb-5 mb-xl-10">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2 className="fw-bolder">Product Details</h2>
                                                    </div>
                                                    {/*begin::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <NavLink
                                                            to="../../demo14/dist/apps/subscriptions/add.html"
                                                            className="btn btn-light-primary"
                                                        >
                                                            Update Product
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-3">
                                                    {/*begin::Section*/}
                                                    <div className="mb-10">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-4">Billing Address:</h5>
                                                        {/*end::Title*/}
                                                        {/*begin::Details*/}
                                                        <div className="d-flex flex-wrap py-5">
                                                            {/*begin::Row*/}
                                                            <div className="flex-equal me-5">
                                                                {/*begin::Details*/}
                                                                <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                                                    {/*begin::Row*/}
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-gray-400 min-w-175px w-175px">
                                                                                Bill to:
                                                                            </td>
                                                                            <td className="text-gray-800 min-w-200px">
                                                                                <NavLink
                                                                                    to="../../demo14/dist/pages/apps/customers/view.html"
                                                                                    className="text-gray-800 text-hover-primary"
                                                                                >
                                                                                    e.smith@kpmg.com.au
                                                                                </NavLink>
                                                                            </td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                        {/*begin::Row*/}
                                                                        <tr>
                                                                            <td className="text-gray-400">
                                                                                Customer Name:
                                                                            </td>
                                                                            <td className="text-gray-800">Emma Smith</td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                        {/*begin::Row*/}
                                                                        <tr>
                                                                            <td className="text-gray-400">Address:</td>
                                                                            <td className="text-gray-800">
                                                                                Floor 10, 101 Avenue of the Light Square, New
                                                                                York, NY, 10050.
                                                                            </td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                        {/*begin::Row*/}
                                                                        <tr>
                                                                            <td className="text-gray-400">Phone:</td>
                                                                            <td className="text-gray-800">
                                                                                (555) 555-1234
                                                                            </td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                    </tbody>
                                                                </table>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Row*/}
                                                            {/*begin::Row*/}
                                                            <div className="flex-equal">
                                                                {/*begin::Details*/}
                                                                <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                                                    {/*begin::Row*/}
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-gray-400 min-w-175px w-175px">
                                                                                Subscribed Product:
                                                                            </td>
                                                                            <td className="text-gray-800 min-w-200px">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-800 text-hover-primary"
                                                                                >
                                                                                    Basic Bundle
                                                                                </NavLink>
                                                                            </td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                        {/*begin::Row*/}
                                                                        <tr>
                                                                            <td className="text-gray-400">
                                                                                Subscription Fees:
                                                                            </td>
                                                                            <td className="text-gray-800">
                                                                                $149.99 / Year
                                                                            </td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                        {/*begin::Row*/}
                                                                        <tr>
                                                                            <td className="text-gray-400">
                                                                                Billing method:
                                                                            </td>
                                                                            <td className="text-gray-800">Annually</td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                        {/*begin::Row*/}
                                                                        <tr>
                                                                            <td className="text-gray-400">Currency:</td>
                                                                            <td className="text-gray-800">
                                                                                USD - US Dollar
                                                                            </td>
                                                                        </tr>
                                                                        {/*end::Row*/}
                                                                    </tbody>
                                                                </table>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Row*/}
                                                        </div>
                                                        {/*end::Row*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Section*/}
                                                    <div className="mb-0">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-4">Subscribed Products:</h5>
                                                        {/*end::Title*/}
                                                        {/*begin::Product table*/}
                                                        <div className="table-responsive">
                                                            {/*begin::Table*/}
                                                            <table className="table align-middle table-row-dashed fs-6 gy-4 mb-0">
                                                                {/*begin::Table head*/}
                                                                <thead>
                                                                    {/*begin::Table row*/}
                                                                    <tr className="border-bottom border-gray-200 text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                                        <th className="min-w-150px">Product</th>
                                                                        <th className="min-w-125px">Subscription ID</th>
                                                                        <th className="min-w-125px">Qty</th>
                                                                        <th className="min-w-125px">Total</th>
                                                                        <th className="text-end min-w-70px">Actions</th>
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                </thead>
                                                                {/*end::Table head*/}
                                                                {/*begin::Table body*/}
                                                                <tbody className="fw-bold text-gray-800">
                                                                    <tr>
                                                                        <td>
                                                                            <label className="w-150px">Basic Bundle</label>
                                                                            <div className="fw-normal text-gray-600">
                                                                                Basic yearly bundle
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge badge-light-danger">
                                                                                sub_4567_8765
                                                                            </span>
                                                                        </td>
                                                                        <td>1</td>
                                                                        <td>$149.99 / Year</td>
                                                                        <td className="text-end">
                                                                            {/*begin::Action*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
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
                                                                            </NavLink>
                                                                            {/*begin::Menu*/}
                                                                            <div
                                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4"
                                                                                data-kt-menu="true"
                                                                            >
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <NavLink to="#" className="menu-link px-3">
                                                                                        Pause Subscription
                                                                                    </NavLink>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <NavLink
                                                                                        to="#"
                                                                                        className="menu-link px-3"
                                                                                        data-kt-subscriptions-view-action="delete"
                                                                                    >
                                                                                        Edit Subscription
                                                                                    </NavLink>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <NavLink
                                                                                        to="#"
                                                                                        className="menu-link text-danger px-3"
                                                                                        data-kt-subscriptions-view-action="edit"
                                                                                    >
                                                                                        Cancel Subscription
                                                                                    </NavLink>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                            </div>
                                                                            {/*end::Menu*/}
                                                                            {/*end::Action*/}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label className="w-150px">Pro Bundle</label>
                                                                            <div className="fw-normal text-gray-400">
                                                                                Basic yearly bundle
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge badge-light-danger">
                                                                                sub_4567_3433
                                                                            </span>
                                                                        </td>
                                                                        <td>5</td>
                                                                        <td>$949.99 / Year</td>
                                                                        <td className="text-end">
                                                                            {/*begin::Action*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
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
                                                                            </NavLink>
                                                                            {/*begin::Menu*/}
                                                                            <div
                                                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4"
                                                                                data-kt-menu="true"
                                                                            >
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <NavLink to="#" className="menu-link px-3">
                                                                                        Pause Subscription
                                                                                    </NavLink>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <NavLink
                                                                                        to="#"
                                                                                        className="menu-link px-3"
                                                                                        data-kt-subscriptions-view-action="delete"
                                                                                    >
                                                                                        Edit Subscription
                                                                                    </NavLink>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <NavLink
                                                                                        to="#"
                                                                                        className="menu-link text-danger px-3"
                                                                                        data-kt-subscriptions-view-action="edit"
                                                                                    >
                                                                                        Cancel Subscription
                                                                                    </NavLink>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                            </div>
                                                                            {/*end::Menu*/}
                                                                            {/*end::Action*/}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body*/}
                                                            </table>
                                                            {/*end::Table*/}
                                                        </div>
                                                        {/*end::Product table*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                            {/*begin::Card*/}
                                            <div className="card card-flush pt-3 mb-5 mb-xl-10">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Recent Events</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <NavLink to="#" className="btn btn-light-primary">
                                                            View All Events
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0">
                                                    {/*begin::Table wrapper*/}
                                                    <div className="table-responsive">
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
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fw-bolder text-gray-800 text-hover-primary me-1"
                                                                        >
                                                                            Sean Bean
                                                                        </NavLink>
                                                                        has made payment to
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fw-bolder text-gray-800 text-hover-primary"
                                                                        >
                                                                            6405-2723
                                                                        </NavLink>
                                                                    </td>
                                                                    {/*end::Event=*/}
                                                                    {/*begin::Timestamp=*/}
                                                                    <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                        10 Mar 2021, 9:23 pm
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
                                                                            className="fw-bolder text-gray-800 text-hover-primary me-1"
                                                                        >
                                                                            6465-8735
                                                                        </NavLink>
                                                                        is
                                                                        <span className="badge badge-light-info">
                                                                            In Progress
                                                                        </span>
                                                                    </td>
                                                                    {/*end::Event=*/}
                                                                    {/*begin::Timestamp=*/}
                                                                    <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                        10 Mar 2021, 10:30 am
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
                                                                            className="fw-bolder text-gray-800 text-hover-primary me-1"
                                                                        >
                                                                            Brian Cox
                                                                        </NavLink>
                                                                        has made payment to
                                                                        <NavLink
                                                                            to="#"
                                                                            className="fw-bolder text-gray-800 text-hover-primary"
                                                                        >
                                                                            6133-4747
                                                                        </NavLink>
                                                                    </td>
                                                                    {/*end::Event=*/}
                                                                    {/*begin::Timestamp=*/}
                                                                    <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                        10 Nov 2021, 10:30 am
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
                                                                            className="fw-bolder text-gray-800 text-hover-primary me-1"
                                                                        >
                                                                            9740-9208
                                                                        </NavLink>
                                                                        status has changed from
                                                                        <span className="badge badge-light-primary me-1">
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
                                                                        24 Jun 2021, 5:30 pm
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
                                                                            className="fw-bolder text-gray-800 text-hover-primary me-1"
                                                                        >
                                                                            3181-8961
                                                                        </NavLink>
                                                                        has been
                                                                        <span className="badge badge-light-danger">
                                                                            Declined
                                                                        </span>
                                                                    </td>
                                                                    {/*end::Event=*/}
                                                                    {/*begin::Timestamp=*/}
                                                                    <td className="pe-0 text-gray-600 text-end min-w-200px">
                                                                        25 Oct 2021, 6:43 am
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
                                            <div className="card card-flush pt-3 mb-5 mb-xl-10">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Invoices</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::Tab nav*/}
                                                        <ul
                                                            className="nav nav-stretch fs-5 fw-bold nav-line-tabs nav-line-tabs-2x border-transparent"
                                                            role="tablist"
                                                        >
                                                            <li className="nav-item" role="presentation">
                                                                <NavLink
                                                                    id="kt_referrals_year_tab"
                                                                    className="nav-link text-active-primary active"
                                                                    data-bs-toggle="tab"
                                                                    role="tab"
                                                                    to="#kt_customer_details_invoices_1"
                                                                >
                                                                    This Year
                                                                </NavLink>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <NavLink
                                                                    id="kt_referrals_2019_tab"
                                                                    className="nav-link text-active-primary ms-3"
                                                                    data-bs-toggle="tab"
                                                                    role="tab"
                                                                    to="#kt_customer_details_invoices_2"
                                                                >
                                                                    2020
                                                                </NavLink>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <NavLink
                                                                    id="kt_referrals_2018_tab"
                                                                    className="nav-link text-active-primary ms-3"
                                                                    data-bs-toggle="tab"
                                                                    role="tab"
                                                                    to="#kt_customer_details_invoices_3"
                                                                >
                                                                    2019
                                                                </NavLink>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <NavLink
                                                                    id="kt_referrals_2017_tab"
                                                                    className="nav-link text-active-primary ms-3"
                                                                    data-bs-toggle="tab"
                                                                    role="tab"
                                                                    to="#kt_customer_details_invoices_4"
                                                                >
                                                                    2018
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                        {/*end::Tab nav*/}
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-2">
                                                    {/*begin::Tab Content*/}
                                                    <div
                                                        id="kt_referred_users_tab_content"
                                                        className="tab-content"
                                                    >
                                                        {/*begin::Tab panel*/}
                                                        <div
                                                            id="kt_customer_details_invoices_1"
                                                            className="tab-pane fade show active"
                                                            role="tabpanel"
                                                        >
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    id="kt_customer_details_invoices_table_1"
                                                                    className="table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0"
                                                                >
                                                                    {/*begin::Thead*/}
                                                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bolder">
                                                                        <tr className="text-start text-gray-400">
                                                                            <th className="min-w-100px">Order ID</th>
                                                                            <th className="min-w-100px">Amount</th>
                                                                            <th className="min-w-100px">Status</th>
                                                                            <th className="min-w-125px">Date</th>
                                                                            <th className="w-100px">Invoice</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {/*end::Thead*/}
                                                                    {/*begin::Tbody*/}
                                                                    <tbody className="fs-6 fw-bold text-gray-600">
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    102445788
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$38.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Nov 01, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    423445721
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-2.60</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Oct 24, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    312445984
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$76.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Oct 08, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    312445984
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$5.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Sep 15, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    523445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-1.30</td>
                                                                            <td>
                                                                                <span className="badge badge-light-success">
                                                                                    Approved
                                                                                </span>
                                                                            </td>
                                                                            <td>May 30, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Tbody*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Tab panel*/}
                                                        {/*begin::Tab panel*/}
                                                        <div
                                                            id="kt_customer_details_invoices_2"
                                                            className="tab-pane fade"
                                                            role="tabpanel"
                                                        >
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    id="kt_customer_details_invoices_table_2"
                                                                    className="table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0"
                                                                >
                                                                    {/*begin::Thead*/}
                                                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bolder">
                                                                        <tr className="text-start text-gray-400">
                                                                            <th className="min-w-100px">Order ID</th>
                                                                            <th className="min-w-100px">Amount</th>
                                                                            <th className="min-w-100px">Status</th>
                                                                            <th className="min-w-125px">Date</th>
                                                                            <th className="w-100px">Invoice</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {/*end::Thead*/}
                                                                    {/*begin::Tbody*/}
                                                                    <tbody className="fs-6 fw-bold text-gray-600">
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    523445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-1.30</td>
                                                                            <td>
                                                                                <span className="badge badge-light-danger">
                                                                                    Rejected
                                                                                </span>
                                                                            </td>
                                                                            <td>May 30, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    231445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$204.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Apr 22, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    426445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$31.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-success">
                                                                                    Approved
                                                                                </span>
                                                                            </td>
                                                                            <td>Feb 09, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    984445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$52.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Nov 01, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    324442313
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-0.80</td>
                                                                            <td>
                                                                                <span className="badge badge-light-danger">
                                                                                    Rejected
                                                                                </span>
                                                                            </td>
                                                                            <td>Jan 04, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Tbody*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Tab panel*/}
                                                        {/*begin::Tab panel*/}
                                                        <div
                                                            id="kt_customer_details_invoices_3"
                                                            className="tab-pane fade"
                                                            role="tabpanel"
                                                        >
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    id="kt_customer_details_invoices_table_3"
                                                                    className="table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0"
                                                                >
                                                                    {/*begin::Thead*/}
                                                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bolder">
                                                                        <tr className="text-start text-gray-400">
                                                                            <th className="min-w-100px">Order ID</th>
                                                                            <th className="min-w-100px">Amount</th>
                                                                            <th className="min-w-100px">Status</th>
                                                                            <th className="min-w-125px">Date</th>
                                                                            <th className="w-100px">Invoice</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {/*end::Thead*/}
                                                                    {/*begin::Tbody*/}
                                                                    <tbody className="fs-6 fw-bold text-gray-600">
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    426445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$31.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-danger">
                                                                                    Rejected
                                                                                </span>
                                                                            </td>
                                                                            <td>Feb 09, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    984445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$52.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-success">
                                                                                    Approved
                                                                                </span>
                                                                            </td>
                                                                            <td>Nov 01, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    324442313
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-0.80</td>
                                                                            <td>
                                                                                <span className="badge badge-light-info">
                                                                                    In progress
                                                                                </span>
                                                                            </td>
                                                                            <td>Jan 04, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    312445984
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$5.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-info">
                                                                                    In progress
                                                                                </span>
                                                                            </td>
                                                                            <td>Sep 15, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    102445788
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$38.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-danger">
                                                                                    Rejected
                                                                                </span>
                                                                            </td>
                                                                            <td>Nov 01, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Tbody*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Tab panel*/}
                                                        {/*begin::Tab panel*/}
                                                        <div
                                                            id="kt_customer_details_invoices_4"
                                                            className="tab-pane fade"
                                                            role="tabpanel"
                                                        >
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    id="kt_customer_details_invoices_table_4"
                                                                    className="table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0"
                                                                >
                                                                    {/*begin::Thead*/}
                                                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bolder">
                                                                        <tr className="text-start text-gray-400">
                                                                            <th className="min-w-100px">Order ID</th>
                                                                            <th className="min-w-100px">Amount</th>
                                                                            <th className="min-w-100px">Status</th>
                                                                            <th className="min-w-125px">Date</th>
                                                                            <th className="w-100px">Invoice</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {/*end::Thead*/}
                                                                    {/*begin::Tbody*/}
                                                                    <tbody className="fs-6 fw-bold text-gray-600">
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    102445788
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$38.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-warning">
                                                                                    Pending
                                                                                </span>
                                                                            </td>
                                                                            <td>Nov 01, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    423445721
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-2.60</td>
                                                                            <td>
                                                                                <span className="badge badge-light-danger">
                                                                                    Rejected
                                                                                </span>
                                                                            </td>
                                                                            <td>Oct 24, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    102445788
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$38.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-info">
                                                                                    In progress
                                                                                </span>
                                                                            </td>
                                                                            <td>Nov 01, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    423445721
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-danger">$-2.60</td>
                                                                            <td>
                                                                                <span className="badge badge-light-success">
                                                                                    Approved
                                                                                </span>
                                                                            </td>
                                                                            <td>Oct 24, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="text-gray-600 text-hover-primary"
                                                                                >
                                                                                    426445943
                                                                                </NavLink>
                                                                            </td>
                                                                            <td className="text-success">$31.00</td>
                                                                            <td>
                                                                                <span className="badge badge-light-info">
                                                                                    In progress
                                                                                </span>
                                                                            </td>
                                                                            <td>Feb 09, 2020</td>
                                                                            <td className>
                                                                                <button className="btn btn-sm btn-light btn-active-light-primary">
                                                                                    Download
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Tbody*/}
                                                                </table>
                                                                {/*end::Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                        </div>
                                                        {/*end::Tab panel*/}
                                                    </div>
                                                    {/*end::Tab Content*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Content*/}
                                        {/*begin::Sidebar*/}
                                        <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2">
                                            {/*begin::Card*/}
                                            <div
                                                className="card card-flush mb-0"
                                                data-kt-sticky="true"
                                                data-kt-sticky-name="subscription-summary"
                                                data-kt-sticky-offset="{default: false, lg: '200px'}"
                                                data-kt-sticky-width="{lg: '250px', xl: '300px'}"
                                                data-kt-sticky-left="auto"
                                                data-kt-sticky-top="150px"
                                                data-kt-sticky-animation="false"
                                                data-kt-sticky-zindex={95}
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Summary</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::More options*/}
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-sm btn-light btn-icon"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                                                            <span className="svg-icon svg-icon-3">
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
                                                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4"
                                                            data-kt-menu="true"
                                                        >
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <NavLink to="#" className="menu-link px-3">
                                                                    Pause Subscription
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <NavLink
                                                                    to="#"
                                                                    className="menu-link px-3"
                                                                    data-kt-subscriptions-view-action="delete"
                                                                >
                                                                    Edit Subscription
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <NavLink
                                                                    to="#"
                                                                    className="menu-link text-danger px-3"
                                                                    data-kt-subscriptions-view-action="edit"
                                                                >
                                                                    Cancel Subscription
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                        </div>
                                                        {/*end::Menu*/}
                                                        {/*end::More options*/}
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0 fs-6">
                                                    {/*begin::Section*/}
                                                    <div className="mb-7">
                                                        {/*begin::Details*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-60px symbol-circle me-3">
                                                                <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-column">
                                                                {/*begin::Name*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="fs-4 fw-bolder text-gray-900 text-hover-primary me-2"
                                                                >
                                                                    Sean Bean
                                                                </NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Email*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="fw-bold text-gray-600 text-hover-primary"
                                                                >
                                                                    sean@dellito.com
                                                                </NavLink>
                                                                {/*end::Email*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Seperator*/}
                                                    <div className="separator separator-dashed mb-7" />
                                                    {/*end::Seperator*/}
                                                    {/*begin::Section*/}
                                                    <div className="mb-7">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-4">Product details</h5>
                                                        {/*end::Title*/}
                                                        {/*begin::Details*/}
                                                        <div className="mb-0">
                                                            {/*begin::Plan*/}
                                                            <span className="badge badge-light-info me-2">
                                                                Basic Bundle
                                                            </span>
                                                            {/*end::Plan*/}
                                                            {/*begin::Price*/}
                                                            <span className="fw-bold text-gray-600">
                                                                $149.99 / Year
                                                            </span>
                                                            {/*end::Price*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Seperator*/}
                                                    <div className="separator separator-dashed mb-7" />
                                                    {/*end::Seperator*/}
                                                    {/*begin::Section*/}
                                                    <div className="mb-10">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-4">Payment Details</h5>
                                                        {/*end::Title*/}
                                                        {/*begin::Details*/}
                                                        <div className="mb-0">
                                                            {/*begin::Card info*/}
                                                            <div className="fw-bold text-gray-600 d-flex align-items-center">
                                                                Mastercard
                                                                <img
                                                                    src="/assets/media/svg/card-logos/mastercard.svg"
                                                                    className="w-35px ms-2"
                                                                    alt
                                                                />
                                                            </div>
                                                            {/*end::Card info*/}
                                                            {/*begin::Card expiry*/}
                                                            <div className="fw-bold text-gray-600">
                                                                Expires Dec 2024
                                                            </div>
                                                            {/*end::Card expiry*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Seperator*/}
                                                    <div className="separator separator-dashed mb-7" />
                                                    {/*end::Seperator*/}
                                                    {/*begin::Section*/}
                                                    <div className="mb-10">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-4">Subscription Details</h5>
                                                        {/*end::Title*/}
                                                        {/*begin::Details*/}
                                                        <table className="table fs-6 fw-bold gs-0 gy-2 gx-2">
                                                            {/*begin::Row*/}
                                                            <tbody>
                                                                <tr className>
                                                                    <td className="text-gray-400">Subscription ID:</td>
                                                                    <td className="text-gray-800">sub_4567_8765</td>
                                                                </tr>
                                                                {/*end::Row*/}
                                                                {/*begin::Row*/}
                                                                <tr className>
                                                                    <td className="text-gray-400">Started:</td>
                                                                    <td className="text-gray-800">15 Apr 2021</td>
                                                                </tr>
                                                                {/*end::Row*/}
                                                                {/*begin::Row*/}
                                                                <tr className>
                                                                    <td className="text-gray-400">Status:</td>
                                                                    <td>
                                                                        <span className="badge badge-light-success">
                                                                            Active
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                {/*end::Row*/}
                                                                {/*begin::Row*/}
                                                                <tr className>
                                                                    <td className="text-gray-400">Next Invoice:</td>
                                                                    <td className="text-gray-800">15 Apr 2022</td>
                                                                </tr>
                                                                {/*end::Row*/}
                                                            </tbody>
                                                        </table>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Actions*/}
                                                    <div className="mb-0">
                                                        <NavLink
                                                            to="../../demo14/dist/apps/subscriptions/add.html"
                                                            className="btn btn-primary"
                                                            id="kt_subscriptions_create_button"
                                                        >
                                                            Edit Subscription
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Sidebar*/}
                                    </div>
                                    {/*end::Layout*/}
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
