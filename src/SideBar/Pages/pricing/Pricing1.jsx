import React from 'react'
import { NavLink } from 'react-router-dom';

const Pricing1 = () => {
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
                                            Pricing 1
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
                                            <li className="breadcrumb-item text-gray-600">Pricing</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Pricing 1</li>
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
                                                id="kt_menu_61b9c78360e86"
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
                                                                data-dropdown-parent="#kt_menu_61b9c78360e86"
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
                                    {/*begin::Pricing card*/}
                                    <div className="card" id="kt_pricing">
                                        {/*begin::Card body*/}
                                        <div className="card-body p-lg-17">
                                            {/*begin::Plans*/}
                                            <div className="d-flex flex-column">
                                                {/*begin::Heading*/}
                                                <div className="mb-13 text-center">
                                                    <h1 className="fs-2hx fw-bolder mb-5">Choose Your Plan</h1>
                                                    <div className="text-gray-400 fw-bold fs-5">
                                                        If you need more info about our pricing, please check
                                                        <NavLink to="#" className="link-primary fw-bolder">
                                                            Pricing Guidelines
                                                        </NavLink>
                                                        .
                                                    </div>
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Nav group*/}
                                                <div
                                                    className="nav-group nav-group-outline mx-auto mb-15"
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
                                                <div className="row g-10">
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-4">
                                                        <div className="d-flex h-100 align-items-center">
                                                            {/*begin::Option*/}
                                                            <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                                                                {/*begin::Heading*/}
                                                                <div className="mb-7 text-center">
                                                                    {/*begin::Title*/}
                                                                    <h1 className="text-dark mb-5 fw-boldest">
                                                                        Startup
                                                                    </h1>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-gray-400 fw-bold mb-5">
                                                                        Optimal for 10+ team size
                                                                        <br />
                                                                        and new startup
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Price*/}
                                                                    <div className="text-center">
                                                                        <span className="mb-2 text-primary">$</span>
                                                                        <span
                                                                            className="fs-3x fw-bolder text-primary"
                                                                            data-kt-plan-price-month={39}
                                                                            data-kt-plan-price-annual={399}
                                                                        >
                                                                            39
                                                                        </span>
                                                                        <span className="fs-7 fw-bold opacity-50">
                                                                            /<span data-kt-element="period">Mon</span>
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Price*/}
                                                                </div>
                                                                {/*end::Heading*/}
                                                                {/*begin::Features*/}
                                                                <div className="w-100 mb-10">
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-400 flex-grow-1">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-400 flex-grow-1">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-400 flex-grow-1">
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
                                                                        <span className="fw-bold fs-6 text-gray-400 flex-grow-1">
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
                                                                {/*end::Features*/}
                                                                {/*begin::Select*/}
                                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                                    Select
                                                                </NavLink>
                                                                {/*end::Select*/}
                                                            </div>
                                                            {/*end::Option*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-4">
                                                        <div className="d-flex h-100 align-items-center">
                                                            {/*begin::Option*/}
                                                            <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-20 px-10">
                                                                {/*begin::Heading*/}
                                                                <div className="mb-7 text-center">
                                                                    {/*begin::Title*/}
                                                                    <h1 className="text-dark mb-5 fw-boldest">
                                                                        Advanced
                                                                    </h1>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-gray-400 fw-bold mb-5">
                                                                        Optimal for 100+ team siz
                                                                        <br />e and grown company
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Price*/}
                                                                    <div className="text-center">
                                                                        <span className="mb-2 text-primary">$</span>
                                                                        <span
                                                                            className="fs-3x fw-bolder text-primary"
                                                                            data-kt-plan-price-month={339}
                                                                            data-kt-plan-price-annual={3399}
                                                                        >
                                                                            339
                                                                        </span>
                                                                        <span className="fs-7 fw-bold opacity-50">
                                                                            /<span data-kt-element="period">Mon</span>
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Price*/}
                                                                </div>
                                                                {/*end::Heading*/}
                                                                {/*begin::Features*/}
                                                                <div className="w-100 mb-10">
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-400 flex-grow-1">
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
                                                                        <span className="fw-bold fs-6 text-gray-400 flex-grow-1">
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
                                                                {/*end::Features*/}
                                                                {/*begin::Select*/}
                                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                                    Select
                                                                </NavLink>
                                                                {/*end::Select*/}
                                                            </div>
                                                            {/*end::Option*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-xl-4">
                                                        <div className="d-flex h-100 align-items-center">
                                                            {/*begin::Option*/}
                                                            <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                                                                {/*begin::Heading*/}
                                                                <div className="mb-7 text-center">
                                                                    {/*begin::Title*/}
                                                                    <h1 className="text-dark mb-5 fw-boldest">
                                                                        Enterprise
                                                                    </h1>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-gray-400 fw-bold mb-5">
                                                                        Optimal for 1000+ team
                                                                        <br />
                                                                        and enterpise
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                    {/*begin::Price*/}
                                                                    <div className="text-center">
                                                                        <span className="mb-2 text-primary">$</span>
                                                                        <span
                                                                            className="fs-3x fw-bolder text-primary"
                                                                            data-kt-plan-price-month={999}
                                                                            data-kt-plan-price-annual={9999}
                                                                        >
                                                                            999
                                                                        </span>
                                                                        <span className="fs-7 fw-bold opacity-50">
                                                                            /<span data-kt-element="period">Mon</span>
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Price*/}
                                                                </div>
                                                                {/*end::Heading*/}
                                                                {/*begin::Features*/}
                                                                <div className="w-100 mb-10">
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                    <div className="d-flex align-items-center mb-5">
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                        <span className="fw-bold fs-6 text-gray-800 flex-grow-1 pe-3">
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
                                                                {/*end::Features*/}
                                                                {/*begin::Select*/}
                                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                                    Select
                                                                </NavLink>
                                                                {/*end::Select*/}
                                                            </div>
                                                            {/*end::Option*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*xend::Plans*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Pricing card*/}
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

export default Pricing1
