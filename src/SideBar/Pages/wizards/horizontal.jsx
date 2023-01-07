import React from 'react'

const horizontal = () => {
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
                                            Wizard Horizontal
                                        </h1>
                                        {/*end::Title*/}
                                        {/*begin::Breadcrumb*/}
                                        <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">
                                                <a
                                                    href="../../demo14/dist/index.html"
                                                    className="text-gray-600 text-hover-primary"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Pages</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Wizards</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Horizontal</li>
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
                                            <a
                                                href="#"
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
                                            </a>
                                            {/*begin::Menu 1*/}
                                            <div
                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                data-kt-menu="true"
                                                id="kt_menu_61b9c77123824"
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
                                                                data-dropdown-parent="#kt_menu_61b9c77123824"
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
                                        <a
                                            href="#"
                                            className="btn btn-dark fw-bolder"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_create_app"
                                            id="kt_toolbar_primary_button"
                                        >
                                            Create
                                        </a>
                                        {/*end::Button*/}
                                    </div>
                                    {/*end::Actions*/}
                                </div>
                                {/*end::Toolbar*/}
                                {/*begin::Post*/}
                                <div className="content flex-column-fluid" id="kt_content">
                                    {/*begin::Card*/}
                                    <div className="card">
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Stepper*/}
                                            <div
                                                className="stepper stepper-links d-flex flex-column pt-15"
                                                id="kt_create_account_stepper"
                                            >
                                                {/*begin::Nav*/}
                                                <div className="stepper-nav mb-5">
                                                    {/*begin::Step 1*/}
                                                    <div
                                                        className="stepper-item current"
                                                        data-kt-stepper-element="nav"
                                                    >
                                                        <h3 className="stepper-title">Account Type</h3>
                                                    </div>
                                                    {/*end::Step 1*/}
                                                    {/*begin::Step 2*/}
                                                    <div className="stepper-item" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Account Info</h3>
                                                    </div>
                                                    {/*end::Step 2*/}
                                                    {/*begin::Step 3*/}
                                                    <div className="stepper-item" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Business Info</h3>
                                                    </div>
                                                    {/*end::Step 3*/}
                                                    {/*begin::Step 4*/}
                                                    <div className="stepper-item" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Billing Details</h3>
                                                    </div>
                                                    {/*end::Step 4*/}
                                                    {/*begin::Step 5*/}
                                                    <div className="stepper-item" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Completed</h3>
                                                    </div>
                                                    {/*end::Step 5*/}
                                                </div>
                                                {/*end::Nav*/}
                                                {/*begin::Form*/}
                                                <form
                                                    className="mx-auto mw-600px w-100 pt-15 pb-10"
                                                    noValidate="novalidate"
                                                    id="kt_create_account_form"
                                                >
                                                    {/*begin::Step 1*/}
                                                    <div className="current" data-kt-stepper-element="content">
                                                        {/*begin::Wrapper*/}
                                                        <div className="w-100">
                                                            {/*begin::Heading*/}
                                                            <div className="pb-10 pb-lg-15">
                                                                {/*begin::Title*/}
                                                                <h2 className="fw-bolder d-flex align-items-center text-dark">
                                                                    Choose Account Type
                                                                    <i
                                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Billing is issued based on your selected account type"
                                                                    />
                                                                </h2>
                                                                {/*end::Title*/}
                                                                {/*begin::Notice*/}
                                                                <div className="text-muted fw-bold fs-6">
                                                                    If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bolder">
                                                                        Help Page
                                                                    </a>
                                                                    .
                                                                </div>
                                                                {/*end::Notice*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row">
                                                                {/*begin::Row*/}
                                                                <div className="row">
                                                                    {/*begin::Col*/}
                                                                    <div className="col-lg-6">
                                                                        {/*begin::Option*/}
                                                                        <input
                                                                            type="radio"
                                                                            className="btn-check"
                                                                            name="account_type"
                                                                            defaultValue="personal"
                                                                            defaultChecked="checked"
                                                                            id="kt_create_account_form_account_type_personal"
                                                                        />
                                                                        <label
                                                                            className="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                                                                            htmlFor="kt_create_account_form_account_type_personal"
                                                                        >
                                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                                                                            <span className="svg-icon svg-icon-3x me-5">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                                                                                        fill="black"
                                                                                    />
                                                                                    <path
                                                                                        opacity="0.3"
                                                                                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <span className="d-block fw-bold text-start">
                                                                                <span className="text-dark fw-bolder d-block fs-4 mb-2">
                                                                                    Personal Account
                                                                                </span>
                                                                                <span className="text-muted fw-bold fs-6">
                                                                                    If you need more info, please check it out
                                                                                </span>
                                                                            </span>
                                                                            {/*end::Info*/}
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col-lg-6">
                                                                        {/*begin::Option*/}
                                                                        <input
                                                                            type="radio"
                                                                            className="btn-check"
                                                                            name="account_type"
                                                                            defaultValue="corporate"
                                                                            id="kt_create_account_form_account_type_corporate"
                                                                        />
                                                                        <label
                                                                            className="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                                                                            htmlFor="kt_create_account_form_account_type_corporate"
                                                                        >
                                                                            {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                                            <span className="svg-icon svg-icon-3x me-5">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        opacity="0.3"
                                                                                        d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                                                                        fill="black"
                                                                                    />
                                                                                    <path
                                                                                        d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <span className="d-block fw-bold text-start">
                                                                                <span className="text-dark fw-bolder d-block fs-4 mb-2">
                                                                                    Corporate Account
                                                                                </span>
                                                                                <span className="text-muted fw-bold fs-6">
                                                                                    Create corporate account to mane users
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
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Step 1*/}
                                                    {/*begin::Step 2*/}
                                                    <div data-kt-stepper-element="content">
                                                        {/*begin::Wrapper*/}
                                                        <div className="w-100">
                                                            {/*begin::Heading*/}
                                                            <div className="pb-10 pb-lg-15">
                                                                {/*begin::Title*/}
                                                                <h2 className="fw-bolder text-dark">Account Info</h2>
                                                                {/*end::Title*/}
                                                                {/*begin::Notice*/}
                                                                <div className="text-muted fw-bold fs-6">
                                                                    If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bolder">
                                                                        Help Page
                                                                    </a>
                                                                    .
                                                                </div>
                                                                {/*end::Notice*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Input group*/}
                                                            <div className="mb-10 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="d-flex align-items-center form-label mb-3">
                                                                    Specify Team Size
                                                                    <i
                                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Provide your team size to help us setup your billing"
                                                                    />
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Row*/}
                                                                <div className="row mb-2" data-kt-buttons="true">
                                                                    {/*begin::Col*/}
                                                                    <div className="col">
                                                                        {/*begin::Option*/}
                                                                        <label className="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4">
                                                                            <input
                                                                                type="radio"
                                                                                className="btn-check"
                                                                                name="account_team_size"
                                                                                defaultValue="1-1"
                                                                            />
                                                                            <span className="fw-bolder fs-3">1-1</span>
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col">
                                                                        {/*begin::Option*/}
                                                                        <label className="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4 active">
                                                                            <input
                                                                                type="radio"
                                                                                className="btn-check"
                                                                                name="account_team_size"
                                                                                defaultChecked="checked"
                                                                                defaultValue="2-10"
                                                                            />
                                                                            <span className="fw-bolder fs-3">2-10</span>
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col">
                                                                        {/*begin::Option*/}
                                                                        <label className="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4">
                                                                            <input
                                                                                type="radio"
                                                                                className="btn-check"
                                                                                name="account_team_size"
                                                                                defaultValue="10-50"
                                                                            />
                                                                            <span className="fw-bolder fs-3">10-50</span>
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col">
                                                                        {/*begin::Option*/}
                                                                        <label className="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4">
                                                                            <input
                                                                                type="radio"
                                                                                className="btn-check"
                                                                                name="account_team_size"
                                                                                defaultValue="50+"
                                                                            />
                                                                            <span className="fw-bolder fs-3">50+</span>
                                                                        </label>
                                                                        {/*end::Option*/}
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                </div>
                                                                {/*end::Row*/}
                                                                {/*begin::Hint*/}
                                                                <div className="form-text">
                                                                    Customers will see this shortened version of your
                                                                    statement descriptor
                                                                </div>
                                                                {/*end::Hint*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="mb-10 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="form-label mb-3">
                                                                    Team Account Name
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    name="account_name"
                                                                    placeholder
                                                                    defaultValue
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="mb-0 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="d-flex align-items-center form-label mb-5">
                                                                    Select Account Plan
                                                                    <i
                                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Monthly billing will be based on your account plan"
                                                                    />
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <div className="mb-0">
                                                                    {/*begin:Option*/}
                                                                    <label className="d-flex flex-stack mb-5 cursor-pointer">
                                                                        {/*begin:Label*/}
                                                                        <span className="d-flex align-items-center me-2">
                                                                            {/*begin::Icon*/}
                                                                            <span className="symbol symbol-50px me-6">
                                                                                <span className="symbol-label">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                                                                                    <span className="svg-icon svg-icon-1 svg-icon-gray-600">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                        >
                                                                                            <path
                                                                                                d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                                                                                                fill="black"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                            </span>
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Description*/}
                                                                            <span className="d-flex flex-column">
                                                                                <span className="fw-bolder text-gray-800 text-hover-primary fs-5">
                                                                                    Company Account
                                                                                </span>
                                                                                <span className="fs-6 fw-bold text-muted">
                                                                                    Use images to enhance your post flow
                                                                                </span>
                                                                            </span>
                                                                            {/*end:Description*/}
                                                                        </span>
                                                                        {/*end:Label*/}
                                                                        {/*begin:Input*/}
                                                                        <span className="form-check form-check-custom form-check-solid">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="account_plan"
                                                                                defaultValue={1}
                                                                            />
                                                                        </span>
                                                                        {/*end:Input*/}
                                                                    </label>
                                                                    {/*end::Option*/}
                                                                    {/*begin:Option*/}
                                                                    <label className="d-flex flex-stack mb-5 cursor-pointer">
                                                                        {/*begin:Label*/}
                                                                        <span className="d-flex align-items-center me-2">
                                                                            {/*begin::Icon*/}
                                                                            <span className="symbol symbol-50px me-6">
                                                                                <span className="symbol-label">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                                                                    <span className="svg-icon svg-icon-1 svg-icon-gray-600">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                        >
                                                                                            <path
                                                                                                d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                                                                                fill="black"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                            </span>
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Description*/}
                                                                            <span className="d-flex flex-column">
                                                                                <span className="fw-bolder text-gray-800 text-hover-primary fs-5">
                                                                                    Developer Account
                                                                                </span>
                                                                                <span className="fs-6 fw-bold text-muted">
                                                                                    Use images to your post time
                                                                                </span>
                                                                            </span>
                                                                            {/*end:Description*/}
                                                                        </span>
                                                                        {/*end:Label*/}
                                                                        {/*begin:Input*/}
                                                                        <span className="form-check form-check-custom form-check-solid">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                defaultChecked="checked"
                                                                                name="account_plan"
                                                                                defaultValue={2}
                                                                            />
                                                                        </span>
                                                                        {/*end:Input*/}
                                                                    </label>
                                                                    {/*end::Option*/}
                                                                    {/*begin:Option*/}
                                                                    <label className="d-flex flex-stack mb-0 cursor-pointer">
                                                                        {/*begin:Label*/}
                                                                        <span className="d-flex align-items-center me-2">
                                                                            {/*begin::Icon*/}
                                                                            <span className="symbol symbol-50px me-6">
                                                                                <span className="symbol-label">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
                                                                                    <span className="svg-icon svg-icon-1 svg-icon-gray-600">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                        >
                                                                                            <path
                                                                                                d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                                                                                                fill="black"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                                                                                                fill="black"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                            </span>
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Description*/}
                                                                            <span className="d-flex flex-column">
                                                                                <span className="fw-bolder text-gray-800 text-hover-primary fs-5">
                                                                                    Testing Account
                                                                                </span>
                                                                                <span className="fs-6 fw-bold text-muted">
                                                                                    Use images to enhance time travel rivers
                                                                                </span>
                                                                            </span>
                                                                            {/*end:Description*/}
                                                                        </span>
                                                                        {/*end:Label*/}
                                                                        {/*begin:Input*/}
                                                                        <span className="form-check form-check-custom form-check-solid">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="account_plan"
                                                                                defaultValue={3}
                                                                            />
                                                                        </span>
                                                                        {/*end:Input*/}
                                                                    </label>
                                                                    {/*end::Option*/}
                                                                </div>
                                                                {/*end::Options*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Step 2*/}
                                                    {/*begin::Step 3*/}
                                                    <div data-kt-stepper-element="content">
                                                        {/*begin::Wrapper*/}
                                                        <div className="w-100">
                                                            {/*begin::Heading*/}
                                                            <div className="pb-10 pb-lg-12">
                                                                {/*begin::Title*/}
                                                                <h2 className="fw-bolder text-dark">
                                                                    Business Details
                                                                </h2>
                                                                {/*end::Title*/}
                                                                {/*begin::Notice*/}
                                                                <div className="text-muted fw-bold fs-6">
                                                                    If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bolder">
                                                                        Help Page
                                                                    </a>
                                                                    .
                                                                </div>
                                                                {/*end::Notice*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-10">
                                                                {/*begin::Label*/}
                                                                <label className="form-label required">
                                                                    Business Name
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    name="business_name"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    defaultValue="Keenthemes Inc."
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-10">
                                                                {/*begin::Label*/}
                                                                <label className="d-flex align-items-center form-label">
                                                                    <span className="required">
                                                                        Shortened Descriptor
                                                                    </span>
                                                                    <i
                                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                                        data-bs-toggle="popover"
                                                                        data-bs-trigger="hover"
                                                                        data-bs-html="true"
                                                                        data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class='fas fa-university fs-3 me-3'></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-bold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-dark fw-bolder mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>"
                                                                    />
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    name="business_descriptor"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    defaultValue="KEENTHEMES"
                                                                />
                                                                {/*end::Input*/}
                                                                {/*begin::Hint*/}
                                                                <div className="form-text">
                                                                    Customers will see this shortened version of your
                                                                    statement descriptor
                                                                </div>
                                                                {/*end::Hint*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-10">
                                                                {/*begin::Label*/}
                                                                <label className="form-label required">
                                                                    Corporation Type
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <select
                                                                    name="business_type"
                                                                    className="form-select form-select-lg form-select-solid"
                                                                    data-control="select2"
                                                                    data-placeholder="Select..."
                                                                    data-allow-clear="true"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option />
                                                                    <option value={1}>S Corporation</option>
                                                                    <option value={1}>C Corporation</option>
                                                                    <option value={2}>Sole Proprietorship</option>
                                                                    <option value={3}>Non-profit</option>
                                                                    <option value={4}>Limited Liability</option>
                                                                    <option value={5}>General Partnership</option>
                                                                </select>
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-10">
                                                                {/*end::Label*/}
                                                                <label className="form-label">
                                                                    Business Description
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <textarea
                                                                    name="business_description"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    rows={3}
                                                                    defaultValue={""}
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-0">
                                                                {/*begin::Label*/}
                                                                <label className="fs-6 fw-bold form-label required">
                                                                    Contact Email
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    name="business_email"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    defaultValue="corp@support.com"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Step 3*/}
                                                    {/*begin::Step 4*/}
                                                    <div data-kt-stepper-element="content">
                                                        {/*begin::Wrapper*/}
                                                        <div className="w-100">
                                                            {/*begin::Heading*/}
                                                            <div className="pb-10 pb-lg-15">
                                                                {/*begin::Title*/}
                                                                <h2 className="fw-bolder text-dark">
                                                                    Billing Details
                                                                </h2>
                                                                {/*end::Title*/}
                                                                {/*begin::Notice*/}
                                                                <div className="text-muted fw-bold fs-6">
                                                                    If you need more info, please check out
                                                                    <a href="#" className="text-primary fw-bolder">
                                                                        Help Page
                                                                    </a>
                                                                    .
                                                                </div>
                                                                {/*end::Notice*/}
                                                            </div>
                                                            {/*end::Heading*/}
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
                                                                        defaultChecked="checked"
                                                                    />
                                                                    <span className="form-check-label fw-bold text-muted">
                                                                        Save Card
                                                                    </span>
                                                                </label>
                                                                {/*end::Switch*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Step 4*/}
                                                    {/*begin::Step 5*/}
                                                    <div data-kt-stepper-element="content">
                                                        {/*begin::Wrapper*/}
                                                        <div className="w-100">
                                                            {/*begin::Heading*/}
                                                            <div className="pb-8 pb-lg-10">
                                                                {/*begin::Title*/}
                                                                <h2 className="fw-bolder text-dark">
                                                                    Your Are Done!
                                                                </h2>
                                                                {/*end::Title*/}
                                                                {/*begin::Notice*/}
                                                                <div className="text-muted fw-bold fs-6">
                                                                    If you need more info, please
                                                                    <a
                                                                        href="../../demo14/dist/authentication/sign-in/basic.html"
                                                                        className="link-primary fw-bolder"
                                                                    >
                                                                        Sign In
                                                                    </a>
                                                                    .
                                                                </div>
                                                                {/*end::Notice*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div className="mb-0">
                                                                {/*begin::Text*/}
                                                                <div className="fs-6 text-gray-600 mb-5">
                                                                    Writing headlines for blog posts is as much an art
                                                                    as it is a science and probably warrants its own
                                                                    post, but for all advise is with what works for your
                                                                    great &amp; amazing audience.
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Alert*/}
                                                                {/*begin::Notice*/}
                                                                <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
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
                                                                                To start using great tools, please, please
                                                                                <a href="#" className="fw-bolder">
                                                                                    Create Team Platform
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Content*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </div>
                                                                {/*end::Notice*/}
                                                                {/*end::Alert*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Step 5*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex flex-stack pt-15">
                                                        {/*begin::Wrapper*/}
                                                        <div className="mr-2">
                                                            <button
                                                                type="button"
                                                                className="btn btn-lg btn-light-primary me-3"
                                                                data-kt-stepper-action="previous"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                                                                <span className="svg-icon svg-icon-4 me-1">
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
                                                                            y={11}
                                                                            width={13}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}Back
                                                            </button>
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                        {/*begin::Wrapper*/}
                                                        <div>
                                                            <button
                                                                type="button"
                                                                className="btn btn-lg btn-primary me-3"
                                                                data-kt-stepper-action="submit"
                                                            >
                                                                <span className="indicator-label">
                                                                    Submit
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-3 ms-2 me-0">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <rect
                                                                                opacity="0.5"
                                                                                x={18}
                                                                                y={13}
                                                                                width={13}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(-180 18 13)"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </span>
                                                                <span className="indicator-progress">
                                                                    Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                </span>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-lg btn-primary"
                                                                data-kt-stepper-action="next"
                                                            >
                                                                Continue
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                <span className="svg-icon svg-icon-4 ms-1 me-0">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <rect
                                                                            opacity="0.5"
                                                                            x={18}
                                                                            y={13}
                                                                            width={13}
                                                                            height={2}
                                                                            rx={1}
                                                                            transform="rotate(-180 18 13)"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </button>
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Actions*/}
                                                </form>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end::Stepper*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Card*/}
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
                                        <a
                                            href="https://keenthemes.com"
                                            target="_blank"
                                            className="text-gray-800 text-hover-primary"
                                        >
                                            Keenthemes
                                        </a>
                                    </div>
                                    {/*end::Copyright*/}
                                    {/*begin::Menu*/}
                                    <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                                        <li className="menu-item">
                                            <a
                                                href="https://keenthemes.com"
                                                target="_blank"
                                                className="menu-link px-2"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="https://keenthemes.com/support"
                                                target="_blank"
                                                className="menu-link px-2"
                                            >
                                                Support
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="https://1.envato.market/EA4JP"
                                                target="_blank"
                                                className="menu-link px-2"
                                            >
                                                Purchase
                                            </a>
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

export default horizontal
