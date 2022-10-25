import React from 'react'
import { NavLink } from 'react-router-dom';

const Create = () => {
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
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">Create</h1>
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
                                                Invoice Manager
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">
                                                Create Invoice
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
                                                id="kt_menu_61b9c7d587532"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7d587532"
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
                                        <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body p-12">
                                                    {/*begin::Form*/}
                                                    <form action id="kt_invoice_form">
                                                        {/*begin::Wrapper*/}
                                                        <div className="d-flex flex-column align-items-start flex-xxl-row">
                                                            {/*begin::Input group*/}
                                                            <div
                                                                className="d-flex align-items-center flex-equal fw-row me-4 order-2"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-trigger="hover"
                                                                title="Specify invoice date"
                                                            >
                                                                {/*begin::Date*/}
                                                                <div className="fs-6 fw-bolder text-gray-700 text-nowrap">
                                                                    Date:
                                                                </div>
                                                                {/*end::Date*/}
                                                                {/*begin::Input*/}
                                                                <div className="position-relative d-flex align-items-center w-150px">
                                                                    {/*begin::Datepicker*/}
                                                                    <input
                                                                        className="form-control form-control-transparent fw-bolder pe-5"
                                                                        placeholder="Select date"
                                                                        name="invoice_date"
                                                                    />
                                                                    {/*end::Datepicker*/}
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                    <span className="svg-icon svg-icon-2 position-absolute ms-4 end-0">
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
                                                                    {/*end::Icon*/}
                                                                </div>
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div
                                                                className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-trigger="hover"
                                                                title="Enter invoice number"
                                                            >
                                                                <span className="fs-2x fw-bolder text-gray-800">
                                                                    Invoice #
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-flush fw-bolder text-muted fs-3 w-125px"
                                                                    defaultValue={2021001}
                                                                    placehoder="..."
                                                                />
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div
                                                                className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-trigger="hover"
                                                                title="Specify invoice due date"
                                                            >
                                                                {/*begin::Date*/}
                                                                <div className="fs-6 fw-bolder text-gray-700 text-nowrap">
                                                                    Due Date:
                                                                </div>
                                                                {/*end::Date*/}
                                                                {/*begin::Input*/}
                                                                <div className="position-relative d-flex align-items-center w-150px">
                                                                    {/*begin::Datepicker*/}
                                                                    <input
                                                                        className="form-control form-control-transparent fw-bolder pe-5"
                                                                        placeholder="Select date"
                                                                        name="invoice_due_date"
                                                                    />
                                                                    {/*end::Datepicker*/}
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                    <span className="svg-icon svg-icon-2 position-absolute end-0 ms-4">
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
                                                                    {/*end::Icon*/}
                                                                </div>
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                        </div>
                                                        {/*end::Top*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator separator-dashed my-10" />
                                                        {/*end::Separator*/}
                                                        {/*begin::Wrapper*/}
                                                        <div className="mb-0">
                                                            {/*begin::Row*/}
                                                            <div className="row gx-10 mb-5">
                                                                {/*begin::Col*/}
                                                                <div className="col-lg-6">
                                                                    <label className="form-label fs-6 fw-bolder text-gray-700 mb-3">
                                                                        Bill From
                                                                    </label>
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-5">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-solid"
                                                                            placeholder="Name"
                                                                        />
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-5">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-solid"
                                                                            placeholder="Email"
                                                                        />
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-5">
                                                                        <textarea
                                                                            name="notes"
                                                                            className="form-control form-control-solid"
                                                                            rows={3}
                                                                            placeholder="Who is this invoice from?"
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                                {/*begin::Col*/}
                                                                <div className="col-lg-6">
                                                                    <label className="form-label fs-6 fw-bolder text-gray-700 mb-3">
                                                                        Bill To
                                                                    </label>
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-5">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-solid"
                                                                            placeholder="Name"
                                                                        />
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-5">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-solid"
                                                                            placeholder="Email"
                                                                        />
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-5">
                                                                        <textarea
                                                                            name="notes"
                                                                            className="form-control form-control-solid"
                                                                            rows={3}
                                                                            placeholder="What is this invoice for?"
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                            </div>
                                                            {/*end::Row*/}
                                                            {/*begin::Table wrapper*/}
                                                            <div className="table-responsive mb-10">
                                                                {/*begin::Table*/}
                                                                <table
                                                                    className="table g-5 gs-0 mb-0 fw-bolder text-gray-700"
                                                                    data-kt-element="items"
                                                                >
                                                                    {/*begin::Table head*/}
                                                                    <thead>
                                                                        <tr className="border-bottom fs-7 fw-bolder text-gray-700 text-uppercase">
                                                                            <th className="min-w-300px w-475px">Item</th>
                                                                            <th className="min-w-100px w-100px">QTY</th>
                                                                            <th className="min-w-150px w-150px">Price</th>
                                                                            <th className="min-w-100px w-150px text-end">
                                                                                Total
                                                                            </th>
                                                                            <th className="min-w-75px w-75px text-end">
                                                                                Action
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    {/*end::Table head*/}
                                                                    {/*begin::Table body*/}
                                                                    <tbody>
                                                                        <tr
                                                                            className="border-bottom border-bottom-dashed"
                                                                            data-kt-element="item"
                                                                        >
                                                                            <td className="pe-7">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-solid mb-2"
                                                                                    name="name[]"
                                                                                    placeholder="Item name"
                                                                                />
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-solid"
                                                                                    name="description[]"
                                                                                    placeholder="Description"
                                                                                />
                                                                            </td>
                                                                            <td className="ps-0">
                                                                                <input
                                                                                    className="form-control form-control-solid"
                                                                                    type="number"
                                                                                    min={1}
                                                                                    name="quantity[]"
                                                                                    placeholder={1}
                                                                                    defaultValue={1}
                                                                                    data-kt-element="quantity"
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-solid text-end"
                                                                                    name="price[]"
                                                                                    placeholder={0.0}
                                                                                    defaultValue={0.0}
                                                                                    data-kt-element="price"
                                                                                />
                                                                            </td>
                                                                            <td className="pt-8 text-end text-nowrap">
                                                                                $<span data-kt-element="total">0.00</span>
                                                                            </td>
                                                                            <td className="pt-5 text-end">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-sm btn-icon btn-active-color-primary"
                                                                                    data-kt-element="remove-item"
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
                                                                    {/*begin::Table foot*/}
                                                                    <tfoot>
                                                                        <tr className="border-top border-top-dashed align-top fs-6 fw-bolder text-gray-700">
                                                                            <th className="text-primary">
                                                                                <button
                                                                                    className="btn btn-link py-1"
                                                                                    data-kt-element="add-item"
                                                                                >
                                                                                    Add item
                                                                                </button>
                                                                            </th>
                                                                            <th
                                                                                colSpan={2}
                                                                                className="border-bottom border-bottom-dashed ps-0"
                                                                            >
                                                                                <div className="d-flex flex-column align-items-start">
                                                                                    <div className="fs-5">Subtotal</div>
                                                                                    <button
                                                                                        className="btn btn-link py-1"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-trigger="hover"
                                                                                        title="Coming soon"
                                                                                    >
                                                                                        Add tax
                                                                                    </button>
                                                                                    <button
                                                                                        className="btn btn-link py-1"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-trigger="hover"
                                                                                        title="Coming soon"
                                                                                    >
                                                                                        Add discount
                                                                                    </button>
                                                                                </div>
                                                                            </th>
                                                                            <th
                                                                                colSpan={2}
                                                                                className="border-bottom border-bottom-dashed text-end"
                                                                            >
                                                                                $<span data-kt-element="sub-total">0.00</span>
                                                                            </th>
                                                                        </tr>
                                                                        <tr className="align-top fw-bolder text-gray-700">
                                                                            <th />
                                                                            <th colSpan={2} className="fs-4 ps-0">
                                                                                Total
                                                                            </th>
                                                                            <th
                                                                                colSpan={2}
                                                                                className="text-end fs-4 text-nowrap"
                                                                            >
                                                                                $
                                                                                <span data-kt-element="grand-total">
                                                                                    0.00
                                                                                </span>
                                                                            </th>
                                                                        </tr>
                                                                    </tfoot>
                                                                    {/*end::Table foot*/}
                                                                </table>
                                                            </div>
                                                            {/*end::Table*/}
                                                            {/*begin::Item template*/}
                                                            <table
                                                                className="table d-none"
                                                                data-kt-element="item-template"
                                                            >
                                                                <tbody>
                                                                    <tr
                                                                        className="border-bottom border-bottom-dashed"
                                                                        data-kt-element="item"
                                                                    >
                                                                        <td className="pe-7">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-solid mb-2"
                                                                                name="name[]"
                                                                                placeholder="Item name"
                                                                            />
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-solid"
                                                                                name="description[]"
                                                                                placeholder="Description"
                                                                            />
                                                                        </td>
                                                                        <td className="ps-0">
                                                                            <input
                                                                                className="form-control form-control-solid"
                                                                                type="number"
                                                                                min={1}
                                                                                name="quantity[]"
                                                                                placeholder={1}
                                                                                data-kt-element="quantity"
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-control-solid text-end"
                                                                                name="price[]"
                                                                                placeholder={0.0}
                                                                                data-kt-element="price"
                                                                            />
                                                                        </td>
                                                                        <td className="pt-8 text-end">
                                                                            $<span data-kt-element="total">0.00</span>
                                                                        </td>
                                                                        <td className="pt-5 text-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-icon btn-active-color-primary"
                                                                                data-kt-element="remove-item"
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
                                                            </table>
                                                            <table
                                                                className="table d-none"
                                                                data-kt-element="empty-template"
                                                            >
                                                                <tbody>
                                                                    <tr data-kt-element="empty">
                                                                        <th
                                                                            colSpan={5}
                                                                            className="text-muted text-center py-10"
                                                                        >
                                                                            No items
                                                                        </th>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            {/*end::Item template*/}
                                                            {/*begin::Notes*/}
                                                            <div className="mb-0">
                                                                <label className="form-label fs-6 fw-bolder text-gray-700">
                                                                    Notes
                                                                </label>
                                                                <textarea
                                                                    name="notes"
                                                                    className="form-control form-control-solid"
                                                                    rows={3}
                                                                    placeholder="Thanks for your business"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                            {/*end::Notes*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </form>
                                                    {/*end::Form*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Content*/}
                                        {/*begin::Sidebar*/}
                                        <div className="flex-lg-auto min-w-lg-300px">
                                            {/*begin::Card*/}
                                            <div
                                                className="card"
                                                data-kt-sticky="true"
                                                data-kt-sticky-name="invoice"
                                                data-kt-sticky-offset="{default: false, lg: '200px'}"
                                                data-kt-sticky-width="{lg: '250px', lg: '300px'}"
                                                data-kt-sticky-left="auto"
                                                data-kt-sticky-top="150px"
                                                data-kt-sticky-animation="false"
                                                data-kt-sticky-zindex={95}
                                            >
                                                {/*begin::Card body*/}
                                                <div className="card-body p-10">
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bolder fs-6 text-gray-700">
                                                            Currency
                                                        </label>
                                                        {/*end::Label*/}
                                                        {/*begin::Select*/}
                                                        <select
                                                            name="currnecy"
                                                            aria-label="Select a Timezone"
                                                            data-control="select2"
                                                            data-placeholder="Select currency"
                                                            className="form-select form-select-solid"
                                                        >
                                                            <option value />
                                                            <option
                                                                data-kt-flag="flags/united-states.svg"
                                                                value="USD"
                                                            >
                                                                USD&nbsp;-&nbsp;USA dollar
                                                            </option>
                                                            <option
                                                                data-kt-flag="flags/united-kingdom.svg"
                                                                value="GBP"
                                                            >
                                                                GBP&nbsp;-&nbsp;British pound
                                                            </option>
                                                            <option data-kt-flag="flags/australia.svg" value="AUD">
                                                                AUD&nbsp;-&nbsp;Australian dollar
                                                            </option>
                                                            <option data-kt-flag="flags/japan.svg" value="JPY">
                                                                JPY&nbsp;-&nbsp;Japanese yen
                                                            </option>
                                                            <option data-kt-flag="flags/sweden.svg" value="SEK">
                                                                SEK&nbsp;-&nbsp;Swedish krona
                                                            </option>
                                                            <option data-kt-flag="flags/canada.svg" value="CAD">
                                                                CAD&nbsp;-&nbsp;Canadian dollar
                                                            </option>
                                                            <option
                                                                data-kt-flag="flags/switzerland.svg"
                                                                value="CHF"
                                                            >
                                                                CHF&nbsp;-&nbsp;Swiss franc
                                                            </option>
                                                        </select>
                                                        {/*end::Select*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator separator-dashed mb-8" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-8">
                                                        {/*begin::Option*/}
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5">
                                                            <span className="form-check-label ms-0 fw-bolder fs-6 text-gray-700">
                                                                Payment method
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultChecked="checked"
                                                                defaultValue
                                                            />
                                                        </label>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5">
                                                            <span className="form-check-label ms-0 fw-bolder fs-6 text-gray-700">
                                                                Late fees
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </label>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label ms-0 fw-bolder fs-6 text-gray-700">
                                                                Notes
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                            />
                                                        </label>
                                                        {/*end::Option*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator separator-dashed mb-8" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Actions*/}
                                                    <div className="mb-0">
                                                        {/*begin::Row*/}
                                                        <div className="row mb-5">
                                                            {/*begin::Col*/}
                                                            <div className="col">
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-light btn-active-light-primary w-100"
                                                                >
                                                                    Preview
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col">
                                                                <NavLink
                                                                    to="#"
                                                                    className="btn btn-light btn-active-light-primary w-100"
                                                                >
                                                                    Download
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Row*/}
                                                        <button
                                                            type="submit"
                                                            to="#"
                                                            className="btn btn-primary w-100"
                                                            id="kt_invoice_submit_button"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen016.svg*/}
                                                            <span className="svg-icon svg-icon-3">
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
                                                            {/*end::Svg Icon*/}Send Invoice
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

export default Create
