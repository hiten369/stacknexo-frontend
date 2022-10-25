import React from 'react'
import { NavLink } from 'react-router-dom';

const Categories = () => {
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
                                            Categories
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
                                            <li className="breadcrumb-item text-gray-600">eCommerce</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Catalog</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Categories</li>
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
                                                id="kt_menu_61b9c7b8b0d57"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7b8b0d57"
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
                                    {/*begin::Category*/}
                                    <div className="card card-flush">
                                        {/*begin::Card header*/}
                                        <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                                            {/*begin::Card title*/}
                                            <div className="card-title">
                                                {/*begin::Search*/}
                                                <div className="d-flex align-items-center position-relative my-1">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                    <span className="svg-icon svg-icon-1 position-absolute ms-4">
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
                                                        data-kt-ecommerce-category-filter="search"
                                                        className="form-control form-control-solid w-250px ps-14"
                                                        placeholder="Search Category"
                                                    />
                                                </div>
                                                {/*end::Search*/}
                                            </div>
                                            {/*end::Card title*/}
                                            {/*begin::Card toolbar*/}
                                            <div className="card-toolbar">
                                                {/*begin::Add customer*/}
                                                <NavLink
                                                    to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                    className="btn btn-primary"
                                                >
                                                    Add Category
                                                </NavLink>
                                                {/*end::Add customer*/}
                                            </div>
                                            {/*end::Card toolbar*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body pt-0">
                                            {/*begin::Table*/}
                                            <table
                                                className="table align-middle table-row-dashed fs-6 gy-5"
                                                id="kt_ecommerce_category_table"
                                            >
                                                {/*begin::Table head*/}
                                                <thead>
                                                    {/*begin::Table row*/}
                                                    <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                        <th className="w-10px pe-2">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    data-kt-check="true"
                                                                    data-kt-check-target="#kt_ecommerce_category_table .form-check-input"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </th>
                                                        <th className="min-w-250px">Category</th>
                                                        <th className="min-w-150px">Category Type</th>
                                                        <th className="text-end min-w-70px">Actions</th>
                                                    </tr>
                                                    {/*end::Table row*/}
                                                </thead>
                                                {/*end::Table head*/}
                                                {/*begin::Table body*/}
                                                <tbody className="fw-bold text-gray-600">
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/68.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Computers
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Our computers and tablets include all the big
                                                                        brands.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/71.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Watches
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Our range of watches are perfect whether you’re
                                                                        looking to upgrade
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/58.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Headphones
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Our big range of headphones makes it easy to
                                                                        upgrade your device at a great price.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-primary">Manual</div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/52.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Footwear
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Whatever your activity needs are, we’ve got you
                                                                        covered.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/76.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Cameras
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        You’ll find exactly what you’re looking for with
                                                                        our huge range of cameras.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-primary">Manual</div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/207.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Shirts
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Any occasion, any time, we have everything you'll
                                                                        ever need.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/50.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Household
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Spice up your home decor with our wide selection.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-primary">Manual</div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/193.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Toys
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Get the perfect gift for the little ones.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/169.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Handbags
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Great fashion, great selections, great prices
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-primary">Manual</div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/177.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Wines
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        Great taste, great selections, great prices
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                    {/*begin::Table row*/}
                                                    <tr>
                                                        {/*begin::Checkbox*/}
                                                        <td>
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                />
                                                            </div>
                                                        </td>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Category=*/}
                                                        <td>
                                                            <div className="d-flex">
                                                                {/*begin::Thumbnail*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                    className="symbol symbol-50px"
                                                                >
                                                                    <span
                                                                        className="symbol-label"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(assets/media//stock/ecommerce/151.gif)"
                                                                        }}
                                                                    />
                                                                </NavLink>
                                                                {/*end::Thumbnail*/}
                                                                <div className="ms-5">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                        className="text-gray-800 text-hover-primary fs-5 fw-bolder mb-1"
                                                                        data-kt-ecommerce-category-filter="category_name"
                                                                    >
                                                                        Sandals
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7 fw-bolder">
                                                                        In season summer footwear with a huge range of
                                                                        options
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/*end::Category=*/}
                                                        {/*begin::Type=*/}
                                                        <td>
                                                            {/*begin::Badges*/}
                                                            <div className="badge badge-light-success">
                                                                Automated
                                                            </div>
                                                            {/*end::Badges*/}
                                                        </td>
                                                        {/*end::Type=*/}
                                                        {/*begin::Action=*/}
                                                        <td className="text-end">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-light btn-active-light-primary"
                                                                data-kt-menu-trigger="click"
                                                                data-kt-menu-placement="bottom-end"
                                                            >
                                                                Actions
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-5 m-0">
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
                                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                        className="menu-link px-3"
                                                                    >
                                                                        Edit
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                                {/*begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="menu-link px-3"
                                                                        data-kt-ecommerce-category-filter="delete_row"
                                                                    >
                                                                        Delete
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Menu item*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </td>
                                                        {/*end::Action=*/}
                                                    </tr>
                                                    {/*end::Table row*/}
                                                </tbody>
                                                {/*end::Table body*/}
                                            </table>
                                            {/*end::Table*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Category*/}
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

export default Categories
