import React from 'react'
import { NavLink } from 'react-router-dom';

const Add = () => {
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
                                            Subscription Details
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
                                                Add Subscription
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
                                                id="kt_menu_61b9c7d8739f4"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7d8739f4"
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
                                            {/*begin::Form*/}
                                            <form
                                                className="form"
                                                action="#"
                                                id="kt_subscriptions_create_new"
                                            >
                                                {/*begin::Customer*/}
                                                <div className="card card-flush pt-3 mb-5 mb-lg-10">
                                                    {/*begin::Card header*/}
                                                    <div className="card-header">
                                                        {/*begin::Card title*/}
                                                        <div className="card-title">
                                                            <h2 className="fw-bolder">Customer</h2>
                                                        </div>
                                                        {/*begin::Card title*/}
                                                    </div>
                                                    {/*end::Card header*/}
                                                    {/*begin::Card body*/}
                                                    <div className="card-body pt-0">
                                                        {/*begin::Description*/}
                                                        <div className="text-gray-500 fw-bold fs-5 mb-5">
                                                            Select or add a customer to a subscription:
                                                        </div>
                                                        {/*end::Description*/}
                                                        {/*begin::Selected customer*/}
                                                        <div className="d-flex align-items-center p-3 mb-2">
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
                                                        {/*end::Selected customer*/}
                                                        {/*begin::Customer add buttons*/}
                                                        <div className="mb-7 d-none">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_customer_search"
                                                            >
                                                                Select Customer
                                                            </NavLink>
                                                            <span className="fw-bolder text-gray-500 mx-2">or</span>
                                                            <NavLink
                                                                to="../../demo14/dist/apps/customers/list.html"
                                                                className="btn btn-light-primary"
                                                            >
                                                                Add New Customer
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Customer add buttons*/}
                                                        {/*begin::Customer change button*/}
                                                        <div className="mb-10">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_customer_search"
                                                            >
                                                                Change Customer
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Customer change button*/}
                                                        {/*begin::Notice*/}
                                                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed rounded-3 p-6">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-stack flex-grow-1">
                                                                {/*begin::Content*/}
                                                                <div className="fw-bold">
                                                                    <h4 className="text-gray-900 fw-bolder">
                                                                        This is a very important privacy notice!
                                                                    </h4>
                                                                    <div className="fs-6 text-gray-700">
                                                                        Writing headlines for blog posts is much science
                                                                        and probably cool audience.
                                                                        <NavLink to="#" className="fw-bolder">
                                                                            Learn more
                                                                        </NavLink>
                                                                        .
                                                                    </div>
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Notice*/}
                                                    </div>
                                                    {/*end::Card body*/}
                                                </div>
                                                {/*end::Customer*/}
                                                {/*begin::Pricing*/}
                                                <div className="card card-flush pt-3 mb-5 mb-lg-10">
                                                    {/*begin::Card header*/}
                                                    <div className="card-header">
                                                        {/*begin::Card title*/}
                                                        <div className="card-title">
                                                            <h2 className="fw-bolder">Products</h2>
                                                        </div>
                                                        {/*begin::Card title*/}
                                                        {/*begin::Card toolbar*/}
                                                        <div className="card-toolbar">
                                                            <button
                                                                type="button"
                                                                className="btn btn-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_add_product"
                                                            >
                                                                Add Product
                                                            </button>
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
                                                                className="table align-middle table-row-dashed fs-6 fw-bold gy-4"
                                                                id="kt_subscription_products_table"
                                                            >
                                                                {/*begin::Table head*/}
                                                                <thead>
                                                                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                                                        <th className="min-w-300px">Product</th>
                                                                        <th className="min-w-100px">Qty</th>
                                                                        <th className="min-w-150px">Total</th>
                                                                        <th className="min-w-70px text-end">Remove</th>
                                                                    </tr>
                                                                </thead>
                                                                {/*end::Table head*/}
                                                                {/*begin::Table body*/}
                                                                <tbody className="text-gray-600">
                                                                    <tr>
                                                                        <td>Beginner Plan</td>
                                                                        <td>1</td>
                                                                        <td>149.99 / Month</td>
                                                                        <td className="text-end">
                                                                            {/*begin::Delete*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px me-3"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Delete"
                                                                                data-kt-action="product_remove"
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
                                                                            </NavLink>
                                                                            {/*end::Delete*/}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Pro Plan</td>
                                                                        <td>1</td>
                                                                        <td>499.99 / Month</td>
                                                                        <td className="text-end">
                                                                            {/*begin::Delete*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px me-3"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Delete"
                                                                                data-kt-action="product_remove"
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
                                                                            </NavLink>
                                                                            {/*end::Delete*/}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Team Plan</td>
                                                                        <td>1</td>
                                                                        <td>999.99 / Month</td>
                                                                        <td className="text-end">
                                                                            {/*begin::Delete*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px me-3"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Delete"
                                                                                data-kt-action="product_remove"
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
                                                                            </NavLink>
                                                                            {/*end::Delete*/}
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
                                                {/*end::Pricing*/}
                                                {/*begin::Payment method*/}
                                                <div
                                                    className="card card-flush pt-3 mb-5 mb-lg-10"
                                                    data-kt-subscriptions-form="pricing"
                                                >
                                                    {/*begin::Card header*/}
                                                    <div className="card-header">
                                                        {/*begin::Card title*/}
                                                        <div className="card-title">
                                                            <h2 className="fw-bolder">Payment Method</h2>
                                                        </div>
                                                        {/*begin::Card title*/}
                                                        {/*begin::Card toolbar*/}
                                                        <div className="card-toolbar">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-light-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_card"
                                                            >
                                                                New Method
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Card toolbar*/}
                                                    </div>
                                                    {/*end::Card header*/}
                                                    {/*begin::Card body*/}
                                                    <div className="card-body pt-0">
                                                        {/*begin::Options*/}
                                                        <div id="kt_create_new_payment_method">
                                                            {/*begin::Option*/}
                                                            <div className="py-1">
                                                                {/*begin::Header*/}
                                                                <div className="py-3 d-flex flex-stack flex-wrap">
                                                                    {/*begin::Toggle*/}
                                                                    <div
                                                                        className="d-flex align-items-center collapsible toggle"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#kt_create_new_payment_method_1"
                                                                    >
                                                                        {/*begin::Arrow*/}
                                                                        <div className="btn btn-sm btn-icon btn-active-color-primary ms-n3 me-2">
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                            <span className="svg-icon toggle-on svg-icon-primary svg-icon-2">
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
                                                                                        x="6.0104"
                                                                                        y="10.9247"
                                                                                        width={12}
                                                                                        height={2}
                                                                                        rx={1}
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                                                            <span className="svg-icon toggle-off svg-icon-2">
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
                                                                            {/*end::Svg Icon*/}
                                                                        </div>
                                                                        {/*end::Arrow*/}
                                                                        {/*begin::Logo*/}
                                                                        <img
                                                                            src="/assets/media/svg/card-logos/mastercard.svg"
                                                                            className="w-40px me-3"
                                                                            alt
                                                                        />
                                                                        {/*end::Logo*/}
                                                                        {/*begin::Summary*/}
                                                                        <div className="me-3">
                                                                            <div className="d-flex align-items-center fw-bolder">
                                                                                Mastercard
                                                                                <div className="badge badge-light-primary ms-5">
                                                                                    Primary
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-muted">
                                                                                Expires Dec 2024
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Summary*/}
                                                                    </div>
                                                                    {/*end::Toggle*/}
                                                                    {/*begin::Input*/}
                                                                    <div className="d-flex my-3 ms-9">
                                                                        {/*begin::Radio*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="payment_method"
                                                                                defaultChecked="checked"
                                                                            />
                                                                        </label>
                                                                        {/*end::Radio*/}
                                                                    </div>
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Header*/}
                                                                {/*begin::Body*/}
                                                                <div
                                                                    id="kt_create_new_payment_method_1"
                                                                    className="collapse show fs-6 ps-10"
                                                                >
                                                                    {/*begin::Details*/}
                                                                    <div className="d-flex flex-wrap py-5">
                                                                        {/*begin::Col*/}
                                                                        <div className="flex-equal me-5">
                                                                            <table className="table table-flush fw-bold gy-1">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Name
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Emma Smith
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Number
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            **** 4538
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Expires
                                                                                        </td>
                                                                                        <td className="text-gray-800">12/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Type
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Mastercard credit card
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Issuer
                                                                                        </td>
                                                                                        <td className="text-gray-800">VICBANK</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            ID
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            id_4325df90sdf8
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                        {/*begin::Col*/}
                                                                        <div className="flex-equal">
                                                                            <table className="table table-flush fw-bold gy-1">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Billing address
                                                                                        </td>
                                                                                        <td className="text-gray-800">AU</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Phone
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            No phone provided
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Email
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            <NavLink
                                                                                                to="#"
                                                                                                className="text-gray-900 text-hover-primary"
                                                                                            >
                                                                                                e.smith@kpmg.com.au
                                                                                            </NavLink>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Origin
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Australia
                                                                                            <div className="symbol symbol-20px symbol-circle ms-2">
                                                                                                <img src="/assets/media/flags/australia.svg" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            CVC check
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Passed
                                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                            <span className="svg-icon svg-icon-2 svg-icon-success">
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
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Body*/}
                                                            </div>
                                                            {/*end::Option*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*begin::Option*/}
                                                            <div className="py-1">
                                                                {/*begin::Header*/}
                                                                <div className="py-3 d-flex flex-stack flex-wrap">
                                                                    {/*begin::Toggle*/}
                                                                    <div
                                                                        className="d-flex align-items-center collapsible toggle collapsed"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#kt_create_new_payment_method_2"
                                                                    >
                                                                        {/*begin::Arrow*/}
                                                                        <div className="btn btn-sm btn-icon btn-active-color-primary ms-n3 me-2">
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                            <span className="svg-icon toggle-on svg-icon-primary svg-icon-2">
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
                                                                                        x="6.0104"
                                                                                        y="10.9247"
                                                                                        width={12}
                                                                                        height={2}
                                                                                        rx={1}
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                                                            <span className="svg-icon toggle-off svg-icon-2">
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
                                                                            {/*end::Svg Icon*/}
                                                                        </div>
                                                                        {/*end::Arrow*/}
                                                                        {/*begin::Logo*/}
                                                                        <img
                                                                            src="/assets/media/svg/card-logos/visa.svg"
                                                                            className="w-40px me-3"
                                                                            alt
                                                                        />
                                                                        {/*end::Logo*/}
                                                                        {/*begin::Summary*/}
                                                                        <div className="me-3">
                                                                            <div className="d-flex align-items-center fw-bolder">
                                                                                Visa
                                                                            </div>
                                                                            <div className="text-muted">
                                                                                Expires Feb 2022
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Summary*/}
                                                                    </div>
                                                                    {/*end::Toggle*/}
                                                                    {/*begin::Input*/}
                                                                    <div className="d-flex my-3 ms-9">
                                                                        {/*begin::Radio*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="payment_method"
                                                                            />
                                                                        </label>
                                                                        {/*end::Radio*/}
                                                                    </div>
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Header*/}
                                                                {/*begin::Body*/}
                                                                <div
                                                                    id="kt_create_new_payment_method_2"
                                                                    className="collapse fs-6 ps-10"
                                                                >
                                                                    {/*begin::Details*/}
                                                                    <div className="d-flex flex-wrap py-5">
                                                                        {/*begin::Col*/}
                                                                        <div className="flex-equal me-5">
                                                                            <table className="table table-flush fw-bold gy-1">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Name
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Melody Macy
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Number
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            **** 1122
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Expires
                                                                                        </td>
                                                                                        <td className="text-gray-800">02/2022</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Type
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Visa credit card
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Issuer
                                                                                        </td>
                                                                                        <td className="text-gray-800">ENBANK</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            ID
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            id_w2r84jdy723
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                        {/*begin::Col*/}
                                                                        <div className="flex-equal">
                                                                            <table className="table table-flush fw-bold gy-1">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Billing address
                                                                                        </td>
                                                                                        <td className="text-gray-800">UK</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Phone
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            No phone provided
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Email
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            <NavLink
                                                                                                to="#"
                                                                                                className="text-gray-900 text-hover-primary"
                                                                                            >
                                                                                                melody@altbox.com
                                                                                            </NavLink>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Origin
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            United Kingdom
                                                                                            <div className="symbol symbol-20px symbol-circle ms-2">
                                                                                                <img src="/assets/media/flags/united-kingdom.svg" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            CVC check
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Passed
                                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                                                                                            <span className="svg-icon svg-icon-2 svg-icon-success">
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
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Body*/}
                                                            </div>
                                                            {/*end::Option*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*begin::Option*/}
                                                            <div className="py-1">
                                                                {/*begin::Header*/}
                                                                <div className="py-3 d-flex flex-stack flex-wrap">
                                                                    {/*begin::Toggle*/}
                                                                    <div
                                                                        className="d-flex align-items-center collapsible toggle collapsed"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#kt_create_new_payment_method_3"
                                                                    >
                                                                        {/*begin::Arrow*/}
                                                                        <div className="btn btn-sm btn-icon btn-active-color-primary ms-n3 me-2">
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                            <span className="svg-icon toggle-on svg-icon-primary svg-icon-2">
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
                                                                                        x="6.0104"
                                                                                        y="10.9247"
                                                                                        width={12}
                                                                                        height={2}
                                                                                        rx={1}
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                                                            <span className="svg-icon toggle-off svg-icon-2">
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
                                                                            {/*end::Svg Icon*/}
                                                                        </div>
                                                                        {/*end::Arrow*/}
                                                                        {/*begin::Logo*/}
                                                                        <img
                                                                            src="/assets/media/svg/card-logos/american-express.svg"
                                                                            className="w-40px me-3"
                                                                            alt
                                                                        />
                                                                        {/*end::Logo*/}
                                                                        {/*begin::Summary*/}
                                                                        <div className="me-3">
                                                                            <div className="d-flex align-items-center fw-bolder">
                                                                                American Express
                                                                                <div className="badge badge-light-danger ms-5">
                                                                                    Expired
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-muted">
                                                                                Expires Aug 2021
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Summary*/}
                                                                    </div>
                                                                    {/*end::Toggle*/}
                                                                    {/*begin::Input*/}
                                                                    <div className="d-flex my-3 ms-9">
                                                                        {/*begin::Radio*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="payment_method"
                                                                            />
                                                                        </label>
                                                                        {/*end::Radio*/}
                                                                    </div>
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Header*/}
                                                                {/*begin::Body*/}
                                                                <div
                                                                    id="kt_create_new_payment_method_3"
                                                                    className="collapse fs-6 ps-10"
                                                                >
                                                                    {/*begin::Details*/}
                                                                    <div className="d-flex flex-wrap py-5">
                                                                        {/*begin::Col*/}
                                                                        <div className="flex-equal me-5">
                                                                            <table className="table table-flush fw-bold gy-1">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Name
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Max Smith
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Number
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            **** 9321
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Expires
                                                                                        </td>
                                                                                        <td className="text-gray-800">08/2021</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Type
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            American express credit card
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Issuer
                                                                                        </td>
                                                                                        <td className="text-gray-800">USABANK</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            ID
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            id_89457jcje63
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                        {/*begin::Col*/}
                                                                        <div className="flex-equal">
                                                                            <table className="table table-flush fw-bold gy-1">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Billing address
                                                                                        </td>
                                                                                        <td className="text-gray-800">US</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Phone
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            No phone provided
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Email
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            <NavLink
                                                                                                to="#"
                                                                                                className="text-gray-900 text-hover-primary"
                                                                                            >
                                                                                                max@kt.com
                                                                                            </NavLink>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            Origin
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            United States of America
                                                                                            <div className="symbol symbol-20px symbol-circle ms-2">
                                                                                                <img src="/assets/media/flags/united-states.svg" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted min-w-125px w-125px">
                                                                                            CVC check
                                                                                        </td>
                                                                                        <td className="text-gray-800">
                                                                                            Failed
                                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                                                            <span className="svg-icon svg-icon-2 svg-icon-danger">
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
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Body*/}
                                                            </div>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Options*/}
                                                    </div>
                                                    {/*end::Card body*/}
                                                </div>
                                                {/*end::Payment method*/}
                                                {/*begin::Card*/}
                                                <div className="card card-flush pt-3 mb-5 mb-lg-10">
                                                    {/*begin::Card header*/}
                                                    <div className="card-header">
                                                        {/*begin::Card title*/}
                                                        <div className="card-title">
                                                            <h2 className="fw-bolder">Advanced Options</h2>
                                                        </div>
                                                        {/*begin::Card title*/}
                                                    </div>
                                                    {/*end::Card header*/}
                                                    {/*begin::Card body*/}
                                                    <div className="card-body pt-0">
                                                        {/*begin::Custom fields*/}
                                                        <div className="d-flex flex-column mb-15 fv-row">
                                                            {/*begin::Label*/}
                                                            <div className="fs-5 fw-bolder form-label mb-3">
                                                                Custom fields
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-html="true"
                                                                    data-bs-content="Add custom fields to the billing invoice."
                                                                />
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    id="kt_create_new_custom_fields"
                                                                    className="table align-middle table-row-dashed fw-bold fs-6 gy-5"
                                                                >
                                                                    {/*begin::Table head*/}
                                                                    <thead>
                                                                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                                                            <th className="pt-0">Field Name</th>
                                                                            <th className="pt-0">Field Value</th>
                                                                            <th className="pt-0 text-end">Remove</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {/*end::Table head*/}
                                                                    {/*begin::Table body*/}
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-solid"
                                                                                    name="row-name"
                                                                                    defaultValue
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-solid"
                                                                                    name="row-value"
                                                                                    defaultValue
                                                                                />
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px me-3"
                                                                                    data-kt-action="field_remove"
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
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    {/*end::Table body*/}
                                                                </table>
                                                                {/*end:Table*/}
                                                            </div>
                                                            {/*end::Table wrapper*/}
                                                            {/*begin::Add custom field*/}
                                                            <button
                                                                type="button"
                                                                className="btn btn-light-primary me-auto"
                                                                id="kt_create_new_custom_fields_add"
                                                            >
                                                                Add custom field
                                                            </button>
                                                            {/*end::Add custom field*/}
                                                        </div>
                                                        {/*end::Custom fields*/}
                                                        {/*begin::Invoice footer*/}
                                                        <div className="d-flex flex-column mb-10 fv-row">
                                                            {/*begin::Label*/}
                                                            <div className="fs-5 fw-bolder form-label mb-3">
                                                                Invoice footer
                                                                <i
                                                                    tabIndex={0}
                                                                    className="cursor-pointer fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover focus"
                                                                    data-bs-html="true"
                                                                    data-bs-content="Add an addition invoice footer note."
                                                                />
                                                            </div>
                                                            {/*end::Label*/}
                                                            <textarea
                                                                className="form-control form-control-solid rounded-3"
                                                                rows={4}
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        {/*end::Invoice footer*/}
                                                        {/*begin::Option*/}
                                                        <div className="d-flex flex-column mb-5 fv-row rounded-3 p-7 border border-dashed border-gray-300">
                                                            {/*begin::Label*/}
                                                            <div className="fs-5 fw-bolder form-label mb-3">
                                                                Usage treshold
                                                                <i
                                                                    tabIndex={0}
                                                                    className="cursor-pointer fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover focus"
                                                                    data-bs-html="true"
                                                                    data-bs-delay-hide={1000}
                                                                    data-bs-content="Thresholds help manage risk by limiting the unpaid usage balance a customer can accrue. Thresholds only measure and bill for metered usage (including discounts but excluding tax). <NavLink to='#'>Learn more</NavLink>."
                                                                />
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                    defaultValue={1}
                                                                />
                                                                <span className="form-check-label text-gray-600">
                                                                    Bill immediately if usage treshold reaches 80%.
                                                                </span>
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <div className="d-flex flex-column fv-row rounded-3 p-7 border border-dashed border-gray-300">
                                                            {/*begin::Label*/}
                                                            <div className="fs-5 fw-bolder form-label mb-3">
                                                                Pro-rate billing
                                                                <i
                                                                    tabIndex={0}
                                                                    className="cursor-pointer fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover focus"
                                                                    data-bs-html="true"
                                                                    data-bs-delay-hide={1000}
                                                                    data-bs-content="Pro-rated billing dynamically calculates the remainder amount leftover per billing cycle that is owed. <NavLink to='#'>Learn more</NavLink>."
                                                                />
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                                <span className="form-check-label text-gray-600">
                                                                    Allow pro-rated billing when treshold usage is paid
                                                                    before end of billing cycle.
                                                                </span>
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Option*/}
                                                    </div>
                                                    {/*end::Card body*/}
                                                </div>
                                                {/*end::Card*/}
                                            </form>
                                            {/*end::Form*/}
                                        </div>
                                        {/*end::Content*/}
                                        {/*begin::Sidebar*/}
                                        <div className="flex-column flex-lg-row-auto w-100 w-lg-250px w-xl-300px mb-10 order-1 order-lg-2">
                                            {/*begin::Card*/}
                                            <div
                                                className="card card-flush pt-3 mb-0"
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
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0 fs-6">
                                                    {/*begin::Section*/}
                                                    <div className="mb-7">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-3">Customer details</h5>
                                                        {/*end::Title*/}
                                                        {/*begin::Details*/}
                                                        <div className="d-flex align-items-center mb-1">
                                                            {/*begin::Name*/}
                                                            <NavLink
                                                                to="../../demo14/dist/apps/customers/view.html"
                                                                className="fw-bolder text-gray-800 text-hover-primary me-2"
                                                            >
                                                                Sean Bean
                                                            </NavLink>
                                                            {/*end::Name*/}
                                                            {/*begin::Status*/}
                                                            <span className="badge badge-light-success">
                                                                Active
                                                            </span>
                                                            {/*end::Status*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Email*/}
                                                        <NavLink
                                                            to="#"
                                                            className="fw-bold text-gray-600 text-hover-primary"
                                                        >
                                                            sean@dellito.com
                                                        </NavLink>
                                                        {/*end::Email*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Seperator*/}
                                                    <div className="separator separator-dashed mb-7" />
                                                    {/*end::Seperator*/}
                                                    {/*begin::Section*/}
                                                    <div className="mb-7">
                                                        {/*begin::Title*/}
                                                        <h5 className="mb-3">Product details</h5>
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
                                                        <h5 className="mb-3">Payment Details</h5>
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
                                                    {/*begin::Actions*/}
                                                    <div className="mb-0">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            id="kt_subscriptions_create_button"
                                                        >
                                                            {/*begin::Indicator*/}
                                                            <span className="indicator-label">
                                                                Create Subscription
                                                            </span>
                                                            <span className="indicator-progress">
                                                                Please wait...
                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                            </span>
                                                            {/*end::Indicator*/}
                                                        </button>
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
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - Users Search*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_customer_search"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-650px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header pb-0 border-0 justify-content-end">
                                                    {/*begin::Close*/}
                                                    <div
                                                        className="btn btn-icon btn-sm btn-active-icon-primary"
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
                                                <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                                    {/*begin::Content*/}
                                                    <div className="text-center mb-12">
                                                        <h1 className="fw-bolder mb-3">Search Customers</h1>
                                                        <div className="text-gray-400 fw-bold fs-5">
                                                            Add a customer to a subscription
                                                        </div>
                                                    </div>
                                                    {/*end::Content*/}
                                                    {/*begin::Search*/}
                                                    <div
                                                        id="kt_modal_customer_search_handler"
                                                        data-kt-search-keypress="true"
                                                        data-kt-search-min-length={2}
                                                        data-kt-search-enter="enter"
                                                        data-kt-search-layout="inline"
                                                    >
                                                        {/*begin::Form*/}
                                                        <form
                                                            data-kt-search-element="form"
                                                            className="w-100 position-relative mb-5"
                                                            autoComplete="off"
                                                        >
                                                            {/*begin::Hidden input(Added to disable form autocomplete)*/}
                                                            <input type="hidden" />
                                                            {/*end::Hidden input*/}
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
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
                                                            {/*end::Icon*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg form-control-solid px-15"
                                                                name="search"
                                                                defaultValue
                                                                placeholder="Search by username, full name or email..."
                                                                data-kt-search-element="input"
                                                            />
                                                            {/*end::Input*/}
                                                            {/*begin::Spinner*/}
                                                            <span
                                                                className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                                                                data-kt-search-element="spinner"
                                                            >
                                                                <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                                                            </span>
                                                            {/*end::Spinner*/}
                                                            {/*begin::Reset*/}
                                                            <span
                                                                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                                                                data-kt-search-element="clear"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
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
                                                            </span>
                                                            {/*end::Reset*/}
                                                        </form>
                                                        {/*end::Form*/}
                                                        {/*begin::Wrapper*/}
                                                        <div className="py-5">
                                                            {/*begin::Suggestions*/}
                                                            <div data-kt-search-element="suggestions">
                                                                {/*begin::Illustration*/}
                                                                <div className="text-center px-4 pt-10">
                                                                    <img
                                                                        src="/assets/media/illustrations/sketchy-1/4.png"
                                                                        alt
                                                                        className="mw-100 mh-200px"
                                                                    />
                                                                </div>
                                                                {/*end::Illustration*/}
                                                            </div>
                                                            {/*end::Suggestions*/}
                                                            {/*begin::Results*/}
                                                            <div
                                                                data-kt-search-element="results"
                                                                className="d-none"
                                                            >
                                                                {/*begin::Users*/}
                                                                <div className="mh-300px scroll-y me-n5 pe-5">
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-1.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Emma Smith
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Art Director
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                M
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Melody Macy
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Marketing Analytic
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-26.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Max Smith
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Software Enginer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-4.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Sean Bean
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Web Developer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-15.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Brian Cox
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                UI/UX Designer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                                                C
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Mikaela Collins
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Head Of Marketing
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-8.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Francis Mitcham
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Software Arcitect
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                O
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Olivia Wild
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                System Admin
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <span className="symbol-label bg-light-primary text-primary fw-bold">
                                                                                N
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Neil Owen
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Account Manager
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="d-flex align-items-center p-3 rounded-3 border-hover border border-dashed border-gray-300 cursor-pointer mb-1"
                                                                        data-kt-search-element="customer"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Dan Wilson
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Web Desinger
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Users*/}
                                                            </div>
                                                            {/*end::Results*/}
                                                            {/*begin::Empty*/}
                                                            <div
                                                                data-kt-search-element="empty"
                                                                className="text-center d-none"
                                                            >
                                                                {/*begin::Message*/}
                                                                <div className="fw-bold py-0 mb-10">
                                                                    <div className="text-gray-600 fs-3 mb-2">
                                                                        No users found
                                                                    </div>
                                                                    <div className="text-gray-400 fs-6">
                                                                        Try to search by username, full name or email...
                                                                    </div>
                                                                </div>
                                                                {/*end::Message*/}
                                                                {/*begin::Illustration*/}
                                                                <div className="text-center px-4">
                                                                    <img
                                                                        src="/assets/media/illustrations/sketchy-1/9.png"
                                                                        alt="user"
                                                                        className="mw-100 mh-200px"
                                                                    />
                                                                </div>
                                                                {/*end::Illustration*/}
                                                            </div>
                                                            {/*end::Empty*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Search*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Users Search*/}
                                    {/*begin::Modal - New Product*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_add_product"
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
                                                    id="kt_modal_add_product_form"
                                                >
                                                    {/*begin::Modal header*/}
                                                    <div className="modal-header">
                                                        {/*begin::Modal title*/}
                                                        <h2 className="fw-bolder">Add a Product</h2>
                                                        {/*end::Modal title*/}
                                                        {/*begin::Close*/}
                                                        <div
                                                            className="btn btn-icon btn-sm btn-active-icon-primary"
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
                                                        {/*begin::Label*/}
                                                        <h3 className="mb-7">
                                                            <span className="fw-bolder required">
                                                                Select Subscription
                                                            </span>
                                                            <i
                                                                className="fas fa-exclamation-circle ms-1 fs-7"
                                                                data-bs-toggle="tooltip"
                                                                title="Please select a subscription"
                                                            />
                                                        </h3>
                                                        {/*end::Label*/}
                                                        {/*begin::Scroll*/}
                                                        <div className="scroll-y mh-300px me-n7 pe-7">
                                                            {/*begin::Product*/}
                                                            <div className="fv-row">
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            defaultChecked="checked"
                                                                            data-kt-product-name="Basic"
                                                                            data-kt-product-price="15.99"
                                                                            data-kt-product-frequency="Month"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">Basic</span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Basic subscription
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $15.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Month
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Basic Bundle"
                                                                            data-kt-product-price="149.99"
                                                                            data-kt-product-frequency="Year"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">Basic Bundle</span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Basic yearly bundle
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $149.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Year
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Teams"
                                                                            data-kt-product-price="20.99"
                                                                            data-kt-product-frequency="Month"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">Teams</span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Teams subscription
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $20.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Month
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Teams Bundle"
                                                                            data-kt-product-price="199.99"
                                                                            data-kt-product-frequency="Year"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">Teams Bundle</span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Teams yearly bundle
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $199.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Year
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Corporate"
                                                                            data-kt-product-price="224.99"
                                                                            data-kt-product-frequency="Month"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">Corporate</span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Corporate subscription
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $224.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Month
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Corporate Bundle"
                                                                            data-kt-product-price="1249.99"
                                                                            data-kt-product-frequency="Year"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">
                                                                            Corporate Bundle
                                                                        </span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Corporate yearly bundle
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $1249.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Year
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Enterprise"
                                                                            data-kt-product-price="224.99"
                                                                            data-kt-product-frequency="Month"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">Enterprise</span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Enterprise subscription
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $224.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Month
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
                                                                {/*begin::Subscription*/}
                                                                <label className="d-flex align-items-center mb-5">
                                                                    {/*begin::Radio*/}
                                                                    <span className="form-check form-check-custom form-check-solid me-5">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="product"
                                                                            data-kt-product-name="Enterprise Bundle"
                                                                            data-kt-product-price="2249.99"
                                                                            data-kt-product-frequency="Year"
                                                                        />
                                                                    </span>
                                                                    {/*end::Radio*/}
                                                                    {/*begin::Description*/}
                                                                    <span className="d-flex flex-column me-3">
                                                                        <span className="fw-bolder">
                                                                            Enterprise Bundle
                                                                        </span>
                                                                        <span className="text-gray-400 fw-bold fs-6">
                                                                            Enterprise yearly bundle
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Pricing*/}
                                                                    <span className="fw-bolder ms-auto">
                                                                        $2249.99 /
                                                                        <span className="text-gray-400 fs-6 fw-bold">
                                                                            Year
                                                                        </span>
                                                                    </span>
                                                                    {/*end::Pricing*/}
                                                                </label>
                                                                {/*end::Subscription*/}
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
                                                            id="kt_modal_add_product_cancel"
                                                            className="btn btn-light me-3"
                                                        >
                                                            Discard
                                                        </button>
                                                        {/*end::Button*/}
                                                        {/*begin::Button*/}
                                                        <button
                                                            type="button"
                                                            id="kt_modal_add_product_submit"
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
                                    {/*end::Modal - New Product*/}
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

export default Add
