import React from 'react'
import { NavLink } from 'react-router-dom';

const AddProduct = () => {
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
                                            Product Form
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
                                            <li className="breadcrumb-item text-gray-500">Add Product</li>
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
                                                id="kt_menu_61b9c7b9a7c13"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7b9a7c13"
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
                                    {/*begin::Form*/}
                                    <form
                                        id="kt_ecommerce_add_product_form"
                                        className="form d-flex flex-column flex-lg-row gap-7 gap-lg-10"
                                        data-kt-redirect="../../demo14/dist/apps/ecommerce/catalog/products.html"
                                    >
                                        {/*begin::Aside column*/}
                                        <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px">
                                            {/*begin::Thumbnail settings*/}
                                            <div className="card card-flush py-4">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Thumbnail</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body text-center pt-0">
                                                    {/*begin::Image input*/}
                                                    <div
                                                        className="image-input image-input-empty image-input-outline mb-3"
                                                        data-kt-image-input="true"
                                                        style={{
                                                            backgroundImage:
                                                                "url(assets/media/svg/files/blank-image.svg)"
                                                        }}
                                                    >
                                                        {/*begin::Preview existing avatar*/}
                                                        <div className="image-input-wrapper w-150px h-150px" />
                                                        {/*end::Preview existing avatar*/}
                                                        {/*begin::Label*/}
                                                        <label
                                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                            data-kt-image-input-action="change"
                                                            data-bs-toggle="tooltip"
                                                            title="Change avatar"
                                                        >
                                                            <i className="bi bi-pencil-fill fs-7" />
                                                            {/*begin::Inputs*/}
                                                            <input
                                                                type="file"
                                                                name="avatar"
                                                                accept=".png, .jpg, .jpeg"
                                                            />
                                                            <input type="hidden" name="avatar_remove" />
                                                            {/*end::Inputs*/}
                                                        </label>
                                                        {/*end::Label*/}
                                                        {/*begin::Cancel*/}
                                                        <span
                                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                            data-kt-image-input-action="cancel"
                                                            data-bs-toggle="tooltip"
                                                            title="Cancel avatar"
                                                        >
                                                            <i className="bi bi-x fs-2" />
                                                        </span>
                                                        {/*end::Cancel*/}
                                                        {/*begin::Remove*/}
                                                        <span
                                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                            data-kt-image-input-action="remove"
                                                            data-bs-toggle="tooltip"
                                                            title="Remove avatar"
                                                        >
                                                            <i className="bi bi-x fs-2" />
                                                        </span>
                                                        {/*end::Remove*/}
                                                    </div>
                                                    {/*end::Image input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Set the product thumbnail image. Only *.png, *.jpg and
                                                        *.jpeg image files are accepted
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Thumbnail settings*/}
                                            {/*begin::Status*/}
                                            <div className="card card-flush py-4">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Status</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <div
                                                            className="rounded-circle bg-success w-15px h-15px"
                                                            id="kt_ecommerce_add_product_status"
                                                        />
                                                    </div>
                                                    {/*begin::Card toolbar*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0">
                                                    {/*begin::Select2*/}
                                                    <select
                                                        className="form-select mb-2"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        data-placeholder="Select an option"
                                                        id="kt_ecommerce_add_product_status_select"
                                                    >
                                                        <option />
                                                        <option value="published" selected="selected">
                                                            Published
                                                        </option>
                                                        <option value="draft">Draft</option>
                                                        <option value="scheduled">Scheduled</option>
                                                        <option value="inactive">Inactive</option>
                                                    </select>
                                                    {/*end::Select2*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Set the product status.
                                                    </div>
                                                    {/*end::Description*/}
                                                    {/*begin::Datepicker*/}
                                                    <div className="d-none mt-10">
                                                        <label
                                                            htmlFor="kt_ecommerce_add_product_status_datepicker"
                                                            className="form-label"
                                                        >
                                                            Select publishing date and time
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            id="kt_ecommerce_add_product_status_datepicker"
                                                            placeholder="Pick date & time"
                                                        />
                                                    </div>
                                                    {/*end::Datepicker*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Status*/}
                                            {/*begin::Category & tags*/}
                                            <div className="card card-flush py-4">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Product Details</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0">
                                                    {/*begin::Input group*/}
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Categories</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Select2*/}
                                                    <select
                                                        className="form-select mb-2"
                                                        data-control="select2"
                                                        data-placeholder="Select an option"
                                                        data-allow-clear="true"
                                                        multiple="multiple"
                                                    >
                                                        <option />
                                                        <option value="Computers">Computers</option>
                                                        <option value="Watches">Watches</option>
                                                        <option value="Headphones">Headphones</option>
                                                        <option value="Footwear">Footwear</option>
                                                        <option value="Cameras">Cameras</option>
                                                        <option value="Shirts">Shirts</option>
                                                        <option value="Household">Household</option>
                                                        <option value="Handbags">Handbags</option>
                                                        <option value="Wines">Wines</option>
                                                        <option value="Sandals">Sandals</option>
                                                    </select>
                                                    {/*end::Select2*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7 mb-7">
                                                        Add product to a category.
                                                    </div>
                                                    {/*end::Description*/}
                                                    {/*end::Input group*/}
                                                    {/*begin::Button*/}
                                                    <NavLink
                                                        to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                        className="btn btn-light-primary btn-sm mb-10"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 11 18)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x={6}
                                                                    y={11}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Create new category
                                                    </NavLink>
                                                    {/*end::Button*/}
                                                    {/*begin::Input group*/}
                                                    {/*begin::Label*/}
                                                    <label className="form-label d-block">Tags</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        id="kt_ecommerce_add_product_tags"
                                                        name="kt_ecommerce_add_product_tags"
                                                        className="form-control mb-2"
                                                        defaultValue
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Add tags to a product.
                                                    </div>
                                                    {/*end::Description*/}
                                                    {/*end::Input group*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Category & tags*/}
                                            {/*begin::Weekly sales*/}
                                            <div className="card card-flush py-4">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Weekly Sales</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0">
                                                    <span className="text-muted">
                                                        No data available. Sales data will begin capturing once
                                                        product has been published.
                                                    </span>
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Weekly sales*/}
                                            {/*begin::Template settings*/}
                                            <div className="card card-flush py-4">
                                                {/*begin::Card header*/}
                                                <div className="card-header">
                                                    {/*begin::Card title*/}
                                                    <div className="card-title">
                                                        <h2>Product Template</h2>
                                                    </div>
                                                    {/*end::Card title*/}
                                                </div>
                                                {/*end::Card header*/}
                                                {/*begin::Card body*/}
                                                <div className="card-body pt-0">
                                                    {/*begin::Select store template*/}
                                                    <label
                                                        htmlFor="kt_ecommerce_add_product_store_template"
                                                        className="form-label"
                                                    >
                                                        Select a product template
                                                    </label>
                                                    {/*end::Select store template*/}
                                                    {/*begin::Select2*/}
                                                    <select
                                                        className="form-select mb-2"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        data-placeholder="Select an option"
                                                        id="kt_ecommerce_add_product_store_template"
                                                    >
                                                        <option />
                                                        <option value="default" selected="selected">
                                                            Default template
                                                        </option>
                                                        <option value="electronics">Electronics</option>
                                                        <option value="office">Office stationary</option>
                                                        <option value="fashion">Fashion</option>
                                                    </select>
                                                    {/*end::Select2*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Assign a template from your current theme to define how a
                                                        single product is displayed.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Template settings*/}
                                        </div>
                                        {/*end::Aside column*/}
                                        {/*begin::Main column*/}
                                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                                            {/*begin:::Tabs*/}
                                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                                                {/*begin:::Tab item*/}
                                                <li className="nav-item">
                                                    <NavLink
                                                        className="nav-link text-active-primary pb-4 active"
                                                        data-bs-toggle="tab"
                                                        to="#kt_ecommerce_add_product_general"
                                                    >
                                                        General
                                                    </NavLink>
                                                </li>
                                                {/*end:::Tab item*/}
                                                {/*begin:::Tab item*/}
                                                <li className="nav-item">
                                                    <NavLink
                                                        className="nav-link text-active-primary pb-4"
                                                        data-bs-toggle="tab"
                                                        to="#kt_ecommerce_add_product_advanced"
                                                    >
                                                        Advanced
                                                    </NavLink>
                                                </li>
                                                {/*end:::Tab item*/}
                                            </ul>
                                            {/*end:::Tabs*/}
                                            {/*begin::Tab content*/}
                                            <div className="tab-content">
                                                {/*begin::Tab pane*/}
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="kt_ecommerce_add_product_general"
                                                    role="tab-panel"
                                                >
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        {/*begin::General options*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>General</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required form-label">
                                                                        Product Name
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        name="product_name"
                                                                        className="form-control mb-2"
                                                                        placeholder="Product name"
                                                                        defaultValue
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        A product name is required and recommended to be
                                                                        unique.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div>
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">Description</label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Editor*/}
                                                                    <div
                                                                        id="kt_ecommerce_add_product_description"
                                                                        name="kt_ecommerce_add_product_description"
                                                                        className="min-h-200px mb-2"
                                                                    />
                                                                    {/*end::Editor*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set a description to the product for better
                                                                        visibility.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::General options*/}
                                                        {/*begin::Media*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Media</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row mb-2">
                                                                    {/*begin::Dropzone*/}
                                                                    <div
                                                                        className="dropzone"
                                                                        id="kt_ecommerce_add_product_media"
                                                                    >
                                                                        {/*begin::Message*/}
                                                                        <div className="dz-message needsclick">
                                                                            {/*begin::Icon*/}
                                                                            <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-4">
                                                                                <h3 className="fs-5 fw-bolder text-gray-900 mb-1">
                                                                                    Drop files here or click to upload.
                                                                                </h3>
                                                                                <span className="fs-7 fw-bold text-gray-400">
                                                                                    Upload up to 10 files
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Dropzone*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Description*/}
                                                                <div className="text-muted fs-7">
                                                                    Set the product media gallery.
                                                                </div>
                                                                {/*end::Description*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::Media*/}
                                                        {/*begin::Pricing*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Pricing</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required form-label">
                                                                        Base Price
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        name="price"
                                                                        className="form-control mb-2"
                                                                        placeholder="Product price"
                                                                        defaultValue
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set the product price.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row mb-10">
                                                                    {/*begin::Label*/}
                                                                    <label className="fs-6 fw-bold mb-2">
                                                                        Discount Type
                                                                        <i
                                                                            className="fas fa-exclamation-circle ms-2 fs-7"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Select a discount type that will be applied to this product"
                                                                        />
                                                                    </label>
                                                                    {/*End::Label*/}
                                                                    {/*begin::Row*/}
                                                                    <div
                                                                        className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
                                                                        data-kt-buttons="true"
                                                                        data-kt-buttons-target="[data-kt-button='true']"
                                                                    >
                                                                        {/*begin::Col*/}
                                                                        <div className="col">
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
                                                                                        name="discount_option"
                                                                                        defaultValue={1}
                                                                                        defaultChecked="checked"
                                                                                    />
                                                                                </span>
                                                                                {/*end::Radio*/}
                                                                                {/*begin::Info*/}
                                                                                <span className="ms-5">
                                                                                    <span className="fs-4 fw-bolder text-gray-800 d-block">
                                                                                        No Discount
                                                                                    </span>
                                                                                </span>
                                                                                {/*end::Info*/}
                                                                            </label>
                                                                            {/*end::Option*/}
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                        {/*begin::Col*/}
                                                                        <div className="col">
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
                                                                                        name="discount_option"
                                                                                        defaultValue={2}
                                                                                    />
                                                                                </span>
                                                                                {/*end::Radio*/}
                                                                                {/*begin::Info*/}
                                                                                <span className="ms-5">
                                                                                    <span className="fs-4 fw-bolder text-gray-800 d-block">
                                                                                        Percentage %
                                                                                    </span>
                                                                                </span>
                                                                                {/*end::Info*/}
                                                                            </label>
                                                                            {/*end::Option*/}
                                                                        </div>
                                                                        {/*end::Col*/}
                                                                        {/*begin::Col*/}
                                                                        <div className="col">
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
                                                                                        name="discount_option"
                                                                                        defaultValue={3}
                                                                                    />
                                                                                </span>
                                                                                {/*end::Radio*/}
                                                                                {/*begin::Info*/}
                                                                                <span className="ms-5">
                                                                                    <span className="fs-4 fw-bolder text-gray-800 d-block">
                                                                                        Fixed Price
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
                                                                <div
                                                                    className="d-none mb-10 fv-row"
                                                                    id="kt_ecommerce_add_product_discount_percentage"
                                                                >
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">
                                                                        Set Discount Percentage
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Slider*/}
                                                                    <div className="d-flex flex-column text-center mb-5">
                                                                        <div className="d-flex align-items-start justify-content-center mb-7">
                                                                            <span
                                                                                className="fw-bolder fs-3x"
                                                                                id="kt_ecommerce_add_product_discount_label"
                                                                            >
                                                                                0
                                                                            </span>
                                                                            <span className="fw-bolder fs-4 mt-1 ms-2">
                                                                                %
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            id="kt_ecommerce_add_product_discount_slider"
                                                                            className="noUi-sm"
                                                                        />
                                                                    </div>
                                                                    {/*end::Slider*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set a percentage discount to be applied on this
                                                                        product.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div
                                                                    className="d-none mb-10 fv-row"
                                                                    id="kt_ecommerce_add_product_discount_fixed"
                                                                >
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">
                                                                        Fixed Discounted Price
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        name="dicsounted_price"
                                                                        className="form-control mb-2"
                                                                        placeholder="Discounted price"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set the discounted product price. The product will
                                                                        be reduced at the determined fixed price
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Tax*/}
                                                                <div className="d-flex flex-wrap gap-5">
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row w-100 flex-md-root">
                                                                        {/*begin::Label*/}
                                                                        <label className="required form-label">
                                                                            Tax Class
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Select2*/}
                                                                        <select
                                                                            className="form-select mb-2"
                                                                            name="tax"
                                                                            data-control="select2"
                                                                            data-hide-search="true"
                                                                            data-placeholder="Select an option"
                                                                        >
                                                                            <option />
                                                                            <option value={0}>Tax Free</option>
                                                                            <option value={1}>Taxable Goods</option>
                                                                            <option value={2}>Downloadable Product</option>
                                                                        </select>
                                                                        {/*end::Select2*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fs-7">
                                                                            Set the product tax class.
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row w-100 flex-md-root">
                                                                        {/*begin::Label*/}
                                                                        <label className="form-label">
                                                                            VAT Amount (%)
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control mb-2"
                                                                            defaultValue
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fs-7">
                                                                            Set the product VAT about.
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                </div>
                                                                {/*end:Tax*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::Pricing*/}
                                                    </div>
                                                </div>
                                                {/*end::Tab pane*/}
                                                {/*begin::Tab pane*/}
                                                <div
                                                    className="tab-pane fade"
                                                    id="kt_ecommerce_add_product_advanced"
                                                    role="tab-panel"
                                                >
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        {/*begin::Inventory*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Inventory</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required form-label">SKU</label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        name="sku"
                                                                        className="form-control mb-2"
                                                                        placeholder="SKU Number"
                                                                        defaultValue
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Enter the product SKU.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required form-label">
                                                                        Barcode
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        name="sku"
                                                                        className="form-control mb-2"
                                                                        placeholder="Barcode Number"
                                                                        defaultValue
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Enter the product barcode number.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required form-label">
                                                                        Quantity
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div className="d-flex gap-3">
                                                                        <input
                                                                            type="number"
                                                                            name="shelf"
                                                                            className="form-control mb-2"
                                                                            placeholder="On shelf"
                                                                            defaultValue
                                                                        />
                                                                        <input
                                                                            type="number"
                                                                            name="warehouse"
                                                                            className="form-control mb-2"
                                                                            placeholder="In warehouse"
                                                                        />
                                                                    </div>
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Enter the product quantity.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">
                                                                        Allow Backorders
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultValue
                                                                        />
                                                                        <label className="form-check-label">Yes</label>
                                                                    </div>
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Allow customers to purchase products that are out
                                                                        of stock.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::Inventory*/}
                                                        {/*begin::Variations*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Variations</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div
                                                                    className
                                                                    data-kt-ecommerce-catalog-add-product="auto-options"
                                                                >
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">
                                                                        Add Product Variations
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Repeater*/}
                                                                    <div id="kt_ecommerce_add_product_options">
                                                                        {/*begin::Form group*/}
                                                                        <div className="form-group">
                                                                            <div
                                                                                data-repeater-list="kt_ecommerce_add_product_options"
                                                                                className="d-flex flex-column gap-3"
                                                                            >
                                                                                <div
                                                                                    data-repeater-item
                                                                                    className="form-group d-flex flex-wrap gap-5"
                                                                                >
                                                                                    {/*begin::Select2*/}
                                                                                    <div className="w-100 w-md-200px">
                                                                                        <select
                                                                                            className="form-select"
                                                                                            name="product_option"
                                                                                            data-placeholder="Select a variation"
                                                                                            data-kt-ecommerce-catalog-add-product="product_option"
                                                                                        >
                                                                                            <option />
                                                                                            <option value="color">Color</option>
                                                                                            <option value="size">Size</option>
                                                                                            <option value="material">
                                                                                                Material
                                                                                            </option>
                                                                                            <option value="style">Style</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    {/*end::Select2*/}
                                                                                    {/*begin::Input*/}
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control mw-100 w-200px"
                                                                                        name="product_option_value"
                                                                                        placeholder="Variation"
                                                                                    />
                                                                                    {/*end::Input*/}
                                                                                    <button
                                                                                        type="button"
                                                                                        data-repeater-delete
                                                                                        className="btn btn-sm btn-icon btn-light-danger"
                                                                                    >
                                                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
                                                                                        <span className="svg-icon svg-icon-2">
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width={24}
                                                                                                height={24}
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                            >
                                                                                                <rect
                                                                                                    opacity="0.5"
                                                                                                    x="7.05025"
                                                                                                    y="15.5356"
                                                                                                    width={12}
                                                                                                    height={2}
                                                                                                    rx={1}
                                                                                                    transform="rotate(-45 7.05025 15.5356)"
                                                                                                    fill="black"
                                                                                                />
                                                                                                <rect
                                                                                                    x="8.46447"
                                                                                                    y="7.05029"
                                                                                                    width={12}
                                                                                                    height={2}
                                                                                                    rx={1}
                                                                                                    transform="rotate(45 8.46447 7.05029)"
                                                                                                    fill="black"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Form group*/}
                                                                        {/*begin::Form group*/}
                                                                        <div className="form-group mt-5">
                                                                            <button
                                                                                type="button"
                                                                                data-repeater-create
                                                                                className="btn btn-sm btn-light-primary"
                                                                            >
                                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                                                                <span className="svg-icon svg-icon-2">
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
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            transform="rotate(-90 11 18)"
                                                                                            fill="black"
                                                                                        />
                                                                                        <rect
                                                                                            x={6}
                                                                                            y={11}
                                                                                            width={12}
                                                                                            height={2}
                                                                                            rx={1}
                                                                                            fill="black"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}Add another variation
                                                                            </button>
                                                                        </div>
                                                                        {/*end::Form group*/}
                                                                    </div>
                                                                    {/*end::Repeater*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::Variations*/}
                                                        {/*begin::Shipping*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Shipping</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div className="fv-row">
                                                                    {/*begin::Input*/}
                                                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id="kt_ecommerce_add_product_shipping_checkbox"
                                                                            defaultValue={1}
                                                                        />
                                                                        <label className="form-check-label">
                                                                            This is a physical product
                                                                        </label>
                                                                    </div>
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set if the product is a physical or digital item.
                                                                        Physical products may require shipping.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Shipping form*/}
                                                                <div
                                                                    id="kt_ecommerce_add_product_shipping"
                                                                    className="d-none mt-10"
                                                                >
                                                                    {/*begin::Input group*/}
                                                                    <div className="mb-10 fv-row">
                                                                        {/*begin::Label*/}
                                                                        <label className="form-label">Weight</label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Editor*/}
                                                                        <input
                                                                            type="text"
                                                                            name="weight"
                                                                            className="form-control mb-2"
                                                                            placeholder="Product weight"
                                                                            defaultValue
                                                                        />
                                                                        {/*end::Editor*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fs-7">
                                                                            Set a product weight in grams (g).
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                    {/*begin::Input group*/}
                                                                    <div className="fv-row">
                                                                        {/*begin::Label*/}
                                                                        <label className="form-label">Dimension</label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                                                                            <input
                                                                                type="number"
                                                                                name="width"
                                                                                className="form-control mb-2"
                                                                                placeholder="Width (w)"
                                                                                defaultValue
                                                                            />
                                                                            <input
                                                                                type="number"
                                                                                name="height"
                                                                                className="form-control mb-2"
                                                                                placeholder="Height (h)"
                                                                                defaultValue
                                                                            />
                                                                            <input
                                                                                type="number"
                                                                                name="length"
                                                                                className="form-control mb-2"
                                                                                placeholder="Lengtn (l)"
                                                                                defaultValue
                                                                            />
                                                                        </div>
                                                                        {/*end::Input*/}
                                                                        {/*begin::Description*/}
                                                                        <div className="text-muted fs-7">
                                                                            Enter the product dimensions.
                                                                        </div>
                                                                        {/*end::Description*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                </div>
                                                                {/*end::Shipping form*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::Shipping*/}
                                                        {/*begin::Meta options*/}
                                                        <div className="card card-flush py-4">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Meta Options</h2>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                            {/*begin::Card body*/}
                                                            <div className="card-body pt-0">
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10">
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">Meta Tag Title</label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control mb-2"
                                                                        name="meta_title"
                                                                        placeholder="Meta tag name"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set a meta tag title. Recommended to be simple and
                                                                        precise keywords.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div className="mb-10">
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">
                                                                        Meta Tag Description
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Editor*/}
                                                                    <div
                                                                        id="kt_ecommerce_add_product_meta_description"
                                                                        name="kt_ecommerce_add_product_meta_description"
                                                                        className="min-h-100px mb-2"
                                                                    />
                                                                    {/*end::Editor*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set a meta tag description to the category for
                                                                        increased SEO ranking.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                                {/*begin::Input group*/}
                                                                <div>
                                                                    {/*begin::Label*/}
                                                                    <label className="form-label">
                                                                        Meta Tag Keywords
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Editor*/}
                                                                    <input
                                                                        id="kt_ecommerce_add_product_meta_keywords"
                                                                        name="kt_ecommerce_add_product_meta_keywords"
                                                                        className="form-control mb-2"
                                                                    />
                                                                    {/*end::Editor*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="text-muted fs-7">
                                                                        Set a list of keywords that the category is
                                                                        related to. Separate the keywords by adding a
                                                                        comma
                                                                        <code>,</code>between each keyword.
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Input group*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        {/*end::Meta options*/}
                                                    </div>
                                                </div>
                                                {/*end::Tab pane*/}
                                            </div>
                                            {/*end::Tab content*/}
                                            <div className="d-flex justify-content-end">
                                                {/*begin::Button*/}
                                                <NavLink
                                                    to="../../demo14/dist/apps/ecommerce/catalog/products.html"
                                                    id="kt_ecommerce_add_product_cancel"
                                                    className="btn btn-light me-5"
                                                >
                                                    Cancel
                                                </NavLink>
                                                {/*end::Button*/}
                                                {/*begin::Button*/}
                                                <button
                                                    type="submit"
                                                    id="kt_ecommerce_add_product_submit"
                                                    className="btn btn-primary"
                                                >
                                                    <span className="indicator-label">Save Changes</span>
                                                    <span className="indicator-progress">
                                                        Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                    </span>
                                                </button>
                                                {/*end::Button*/}
                                            </div>
                                        </div>
                                        {/*end::Main column*/}
                                    </form>
                                    {/*end::Form*/}
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

export default AddProduct
