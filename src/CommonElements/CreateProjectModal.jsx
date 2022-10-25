import React from 'react'
import { NavLink } from 'react-router-dom';

const CreateProjectModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="kt_modal_create_project"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-fullscreen p-9">
                    {/*begin::Modal content*/}
                    <div className="modal-content modal-rounded">
                        {/*begin::Modal header*/}
                        <div className="modal-header">
                            {/*begin::Modal title*/}
                            <h2>Create Project</h2>
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
                        <div className="modal-body scroll-y m-5">
                            {/*begin::Stepper*/}
                            <div
                                className="stepper stepper-links d-flex flex-column"
                                id="kt_modal_create_project_stepper"
                            >
                                {/*begin::Container*/}
                                <div className="container">
                                    {/*begin::Nav*/}
                                    <div className="stepper-nav justify-content-center py-2">
                                        {/*begin::Step 1*/}
                                        <div
                                            className="stepper-item me-5 me-md-15 current"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">Project Type</h3>
                                        </div>
                                        {/*end::Step 1*/}
                                        {/*begin::Step 2*/}
                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">Project Settings</h3>
                                        </div>
                                        {/*end::Step 2*/}
                                        {/*begin::Step 3*/}
                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">Budget</h3>
                                        </div>
                                        {/*end::Step 3*/}
                                        {/*begin::Step 4*/}
                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">Build A Team</h3>
                                        </div>
                                        {/*end::Step 4*/}
                                        {/*begin::Step 5*/}
                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">Set First Target</h3>
                                        </div>
                                        {/*end::Step 5*/}
                                        {/*begin::Step 6*/}
                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">Upload Files</h3>
                                        </div>
                                        {/*end::Step 6*/}
                                        {/*begin::Step 7*/}
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">Completed</h3>
                                        </div>
                                        {/*end::Step 7*/}
                                    </div>
                                    {/*end::Nav*/}
                                    {/*begin::Form*/}
                                    <form
                                        className="mx-auto w-100 mw-600px pt-15 pb-10"
                                        noValidate="novalidate"
                                        id="kt_modal_create_project_form"
                                        method="post"
                                    >
                                        {/*begin::Type*/}
                                        <div className="current" data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-7 pb-lg-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Project Type</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check out
                                                        <NavLink to="#" className="link-primary fw-bolder">
                                                            FAQ Page
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-15" data-kt-buttons="true">
                                                    {/*begin::Option*/}
                                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6 mb-6 active">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="btn-check"
                                                            type="radio"
                                                            defaultChecked="checked"
                                                            name="project_type"
                                                            defaultValue={1}
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <span className="d-flex">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                            <span className="svg-icon svg-icon-3hx">
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
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Info*/}
                                                            <span className="ms-4">
                                                                <span className="fs-3 fw-bolder text-gray-900 mb-2 d-block">
                                                                    Personal Project
                                                                </span>
                                                                <span className="fw-bold fs-4 text-muted">
                                                                    If you need more info, please check it out
                                                                </span>
                                                            </span>
                                                            {/*end::Info*/}
                                                        </span>
                                                        {/*end::Label*/}
                                                    </label>
                                                    {/*end::Option*/}
                                                    {/*begin::Option*/}
                                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="btn-check"
                                                            type="radio"
                                                            name="project_type"
                                                            defaultValue={2}
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <span className="d-flex">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                            <span className="svg-icon svg-icon-3hx">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Info*/}
                                                            <span className="ms-4">
                                                                <span className="fs-3 fw-bolder text-gray-900 mb-2 d-block">
                                                                    Team Project
                                                                </span>
                                                                <span className="fw-bold fs-4 text-muted">
                                                                    Create corporate account to manage users
                                                                </span>
                                                            </span>
                                                            {/*end::Info*/}
                                                        </span>
                                                        {/*end::Label*/}
                                                    </label>
                                                    {/*end::Option*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="type-next"
                                                    >
                                                        <span className="indicator-label">Project Settings</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Type*/}
                                        {/*begin::Settings*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Project Settings</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check
                                                        <NavLink to="#" className="link-primary">
                                                            Project Guidelines
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Dropzone*/}
                                                    <div
                                                        className="dropzone"
                                                        id="kt_modal_create_project_settings_logo"
                                                    >
                                                        {/*begin::Message*/}
                                                        <div className="dz-message needsclick">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/files/fil010.svg*/}
                                                            <span className="svg-icon svg-icon-3hx svg-icon-primary">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Info*/}
                                                            <div className="ms-4">
                                                                <h3 className="dfs-3 fw-bolder text-gray-900 mb-1">
                                                                    Drop files here or click to upload.
                                                                </h3>
                                                                <span className="fw-bold fs-4 text-muted">
                                                                    Upload up to 10 files
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Dropzone*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-6 fw-bold mb-2">
                                                        Customer
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <select
                                                        className="form-select form-select-solid"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        data-placeholder="Select..."
                                                        name="settings_customer"
                                                    >
                                                        <option />
                                                        <option value={1}>Keenthemes</option>
                                                        <option value={2}>CRM App</option>
                                                    </select>
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                        <span className="required">Project Name</span>
                                                        <i
                                                            className="fas fa-exclamation-circle ms-2 fs-7"
                                                            data-bs-toggle="tooltip"
                                                            title="Specify project name"
                                                        />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder="Enter Project Name"
                                                        defaultValue="StockPro Mobile App"
                                                        name="settings_name"
                                                    />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-6 fw-bold mb-2">
                                                        Project Description
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <textarea
                                                        className="form-control form-control-solid"
                                                        rows={3}
                                                        placeholder="Enter Project Description"
                                                        name="settings_description"
                                                        defaultValue={
                                                            "Experience share market at your fingertips with TICK PRO stock investment mobile trading app"
                                                        }
                                                    />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-6 fw-bold mb-2">
                                                        Release Date
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Wrapper*/}
                                                    <div className="position-relative d-flex align-items-center">
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                        <span className="svg-icon svg-icon-2 position-absolute mx-4">
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
                                                        {/*end::Icon*/}
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-control form-control-solid ps-12"
                                                            placeholder="Pick date range"
                                                            name="settings_release_date"
                                                        />
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-15">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="required fs-6 fw-bold">
                                                                Notifications
                                                            </label>
                                                            <div className="fs-7 fw-bold text-muted">
                                                                Allow Notifications by Phone or Email
                                                            </div>
                                                        </div>
                                                        {/*end::Label*/}
                                                        {/*begin::Checkboxes*/}
                                                        <div className="d-flex">
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid me-10">
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    defaultValue="email"
                                                                    name="settings_notifications[]"
                                                                />
                                                                {/*end::Input*/}
                                                                {/*begin::Label*/}
                                                                <span className="form-check-label fw-bold">
                                                                    Email
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    defaultValue="phone"
                                                                    defaultChecked="checked"
                                                                    name="settings_notifications[]"
                                                                />
                                                                {/*end::Input*/}
                                                                {/*begin::Label*/}
                                                                <span className="form-check-label fw-bold">
                                                                    Phone
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Checkboxes*/}
                                                    </div>
                                                    {/*begin::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="settings-previous"
                                                    >
                                                        Project Type
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="settings-next"
                                                    >
                                                        <span className="indicator-label">Budget</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Settings*/}
                                        {/*begin::Budget*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-10 pb-lg-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Budget</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check
                                                        <NavLink to="#" className="link-primary">
                                                            Project Guidelines
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-6 fw-bold mb-2">
                                                        <span className="required">Setup Budget</span>
                                                        <i
                                                            className="fas fa-exclamation-circle ms-2 fs-7"
                                                            data-bs-toggle="popover"
                                                            data-bs-trigger="hover"
                                                            data-bs-html="true"
                                                            data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class='fas fa-university fs-3 me-3'></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-bold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-dark fw-bolder mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>"
                                                        />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Dialer*/}
                                                    <div
                                                        className="position-relative w-lg-250px"
                                                        id="kt_modal_create_project_budget_setup"
                                                        data-kt-dialer="true"
                                                        data-kt-dialer-min={50}
                                                        data-kt-dialer-max={50000}
                                                        data-kt-dialer-step={100}
                                                        data-kt-dialer-prefix="$"
                                                        data-kt-dialer-decimals={2}
                                                    >
                                                        {/*begin::Decrease control*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                                            data-kt-dialer-control="decrease"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen042.svg*/}
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
                                                        </button>
                                                        {/*end::Decrease control*/}
                                                        {/*begin::Input control*/}
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid border-0 ps-12"
                                                            data-kt-dialer-control="input"
                                                            placeholder="Amount"
                                                            name="budget_setup"
                                                            readOnly="readonly"
                                                            defaultValue="$50"
                                                        />
                                                        {/*end::Input control*/}
                                                        {/*begin::Increase control*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                                            data-kt-dialer-control="increase"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen041.svg*/}
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
                                                        </button>
                                                        {/*end::Increase control*/}
                                                    </div>
                                                    {/*end::Dialer*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-bold mb-2">Budget Usage</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Row*/}
                                                    <div
                                                        className="row g-9"
                                                        data-kt-buttons="true"
                                                        data-kt-buttons-target="[data-kt-button='true']"
                                                    >
                                                        {/*begin::Col*/}
                                                        <div className="col-md-6 col-lg-12 col-xxl-6">
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
                                                                        name="budget_usage"
                                                                        defaultValue={1}
                                                                        defaultChecked="checked"
                                                                    />
                                                                </span>
                                                                {/*end::Radio*/}
                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bolder text-gray-800 mb-2 d-block">
                                                                        Precise Usage
                                                                    </span>
                                                                    <span className="fw-bold fs-7 text-gray-600">
                                                                        Withdraw money to your bank account per
                                                                        transaction under $50,000 budget
                                                                    </span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                        {/*begin::Col*/}
                                                        <div className="col-md-6 col-lg-12 col-xxl-6">
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
                                                                        name="budget_usage"
                                                                        defaultValue={2}
                                                                    />
                                                                </span>
                                                                {/*end::Radio*/}
                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bolder text-gray-800 mb-2 d-block">
                                                                        Extreme Usage
                                                                    </span>
                                                                    <span className="fw-bold fs-7 text-gray-600">
                                                                        Withdraw money to your bank account per
                                                                        transaction under $50,000 budget
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
                                                <div className="fv-row mb-15">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-bold">
                                                                Allow Changes in Budget
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
                                                                name="budget_allow"
                                                                defaultChecked="checked"
                                                            />
                                                            <span className="form-check-label fw-bold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="budget-previous"
                                                    >
                                                        Project Settings
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="budget-next"
                                                    >
                                                        <span className="indicator-label">Build Team</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Budget*/}
                                        {/*begin::Team*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Build a Team</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check
                                                        <NavLink to="#" className="link-primary">
                                                            Project Guidelines
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-bold mb-2">
                                                        Invite Teammates
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder="Add project memnbers by name or email.."
                                                        name="invite_teammates"
                                                    />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-8">
                                                    {/*begin::Label*/}
                                                    <div className="fs-6 fw-bold mb-2">Team Members</div>
                                                    {/*end::Label*/}
                                                    {/*begin::Users*/}
                                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-1.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Emma Smith
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        e.smith@kpmg.com.au
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2} selected="selected">
                                                                        Owner
                                                                    </option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                        M
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Melody Macy
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        melody@altbox.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1} selected="selected">
                                                                        Guest
                                                                    </option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-26.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Max Smith
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">max@kt.com</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-4.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Sean Bean
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        sean@dellito.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2} selected="selected">
                                                                        Owner
                                                                    </option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-15.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Brian Cox
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        brian@exchange.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-warning text-warning fw-bold">
                                                                        C
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Mikaela Collins
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        mikaela@pexcom.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2} selected="selected">
                                                                        Owner
                                                                    </option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-8.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Francis Mitcham
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        f.mitcham@kpmg.com.au
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                        O
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Olivia Wild
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        olivia@corpmail.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2} selected="selected">
                                                                        Owner
                                                                    </option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-primary text-primary fw-bold">
                                                                        N
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Neil Owen
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        owen.neil@gmail.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1} selected="selected">
                                                                        Guest
                                                                    </option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-6.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Dan Wilson
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        dam@consilting.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                        E
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Emma Bold
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        emma@intenso.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2} selected="selected">
                                                                        Owner
                                                                    </option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-7.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Ana Crown
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        ana.cf@limtel.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1} selected="selected">
                                                                        Guest
                                                                    </option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-info text-info fw-bold">
                                                                        A
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Robert Doe
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        robert@benko.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-17.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        John Miller
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        miller@mapple.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-success text-success fw-bold">
                                                                        L
                                                                    </span>
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Lucy Kunic
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        lucy.m@fentech.com
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2} selected="selected">
                                                                        Owner
                                                                    </option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-10.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Ethan Wilder
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        ethan@loop.com.au
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1} selected="selected">
                                                                        Guest
                                                                    </option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3}>Can Edit</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                        {/*begin::User*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/*begin::Details*/}
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="/assets/media/avatars/150-1.jpg"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-5">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Emma Smith
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">
                                                                        e.smith@kpmg.com.au
                                                                    </div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*end::Details*/}
                                                            {/*begin::Access menu*/}
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value={1}>Guest</option>
                                                                    <option value={2}>Owner</option>
                                                                    <option value={3} selected="selected">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {/*end::Access menu*/}
                                                        </div>
                                                        {/*end::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Notice*/}
                                                <div className="d-flex flex-stack mb-15">
                                                    {/*begin::Label*/}
                                                    <div className="me-5 fw-bold">
                                                        <label className="fs-6">
                                                            Adding Users by Team Members
                                                        </label>
                                                        <div className="fs-7 text-muted">
                                                            If you need more info, please check budget planning
                                                        </div>
                                                    </div>
                                                    {/*end::Label*/}
                                                    {/*begin::Switch*/}
                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue
                                                            defaultChecked="checked"
                                                        />
                                                    </label>
                                                    {/*end::Switch*/}
                                                </div>
                                                {/*end::Notice*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="team-previous"
                                                    >
                                                        Budget
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="team-next"
                                                    >
                                                        <span className="indicator-label">Set Target</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Team*/}
                                        {/*begin::Targets*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Set First Target</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Title*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check
                                                        <NavLink to="#" className="link-primary">
                                                            Project Guidelines
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Title*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    <label className="fs-6 fw-bold mb-2">Target Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder="Enter Target Title"
                                                        name="Project Launch"
                                                    />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="row g-9 mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-6 fv-row">
                                                        <label className="required fs-6 fw-bold mb-2">
                                                            Assign
                                                        </label>
                                                        <select
                                                            className="form-select form-select-solid"
                                                            data-control="select2"
                                                            data-hide-search="true"
                                                            data-placeholder="Select a Team Member"
                                                            name="target_assign"
                                                        >
                                                            <option />
                                                            <option value={1}>Karina Clark</option>
                                                            <option value={2} selected="selected">
                                                                Robert Doe
                                                            </option>
                                                            <option value={3}>Niel Owen</option>
                                                            <option value={4}>Olivia Wild</option>
                                                            <option value={5}>Sean Bean</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-6 fv-row">
                                                        <label className="required fs-6 fw-bold mb-2">
                                                            Due Date
                                                        </label>
                                                        <div className="position-relative d-flex align-items-center">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                            <span className="svg-icon svg-icon-2 position-absolute mx-4">
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
                                                            {/*end::Icon*/}
                                                            {/*begin::Datepicker*/}
                                                            <input
                                                                className="form-control form-control-solid ps-12"
                                                                placeholder="Pick date range"
                                                                name="target_due_date"
                                                            />
                                                            {/*end::Datepicker*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    <label className="fs-6 fw-bold mb-2">Target Details</label>
                                                    <textarea
                                                        className="form-control form-control-solid"
                                                        rows={2}
                                                        name="target_details"
                                                        placeholder="Type Target Details"
                                                        defaultValue={
                                                            "Experience share market at your fingertips with TICK PRO stock investment mobile trading app"
                                                        }
                                                    />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    <label className="required fs-6 fw-bold mb-2">Tags</label>
                                                    <input
                                                        className="form-control form-control-solid"
                                                        defaultValue="Important, Urgent"
                                                        name="target_tags"
                                                    />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-bold">
                                                                Allow Changes in Budget
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
                                                                name="target_allow"
                                                                defaultChecked="checked"
                                                            />
                                                            <span className="form-check-label fw-bold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-15">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-bold">Notifications</label>
                                                            <div className="fs-7 fw-bold text-muted">
                                                                Allow Notifications by Phone or Email
                                                            </div>
                                                        </div>
                                                        {/*end::Label*/}
                                                        {/*begin::Checkboxes*/}
                                                        <div className="d-flex">
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid me-10">
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    defaultValue="email"
                                                                    name="target_notifications[]"
                                                                />
                                                                {/*end::Input*/}
                                                                {/*begin::Label*/}
                                                                <span className="form-check-label fw-bold">
                                                                    Email
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    defaultValue="phone"
                                                                    defaultChecked="checked"
                                                                    name="target_notifications[]"
                                                                />
                                                                {/*end::Input*/}
                                                                {/*begin::Label*/}
                                                                <span className="form-check-label fw-bold">
                                                                    Phone
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Checkboxes*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="targets-previous"
                                                    >
                                                        Build a Team
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="targets-next"
                                                    >
                                                        <span className="indicator-label">Upload Files</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Targets*/}
                                        {/*begin::Files*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-10 pb-lg-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Upload Files</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check
                                                        <NavLink to="#" className="link-primary">
                                                            Project Guidelines
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Dropzone*/}
                                                    <div
                                                        className="dropzone"
                                                        id="kt_modal_create_project_files_upload"
                                                    >
                                                        {/*begin::Message*/}
                                                        <div className="dz-message needsclick">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/files/fil010.svg*/}
                                                            <span className="svg-icon svg-icon-3hx svg-icon-primary">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            {/*end::Icon*/}
                                                            {/*begin::Info*/}
                                                            <div className="ms-4">
                                                                <h3 className="dfs-3 fw-bolder text-gray-900 mb-1">
                                                                    Drop files here or click to upload.
                                                                </h3>
                                                                <span className="fw-bold fs-4 text-muted">
                                                                    Upload up to 10 files
                                                                </span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Dropzone*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-bold mb-2">Uploaded File</label>
                                                    {/*End::Label*/}
                                                    {/*begin::Files*/}
                                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="/assets/media/svg/files/pdf.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Avionica Technical Requirements
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">230kb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option />
                                                                    <option value={1}>Remove</option>
                                                                    <option value={2}>Modify</option>
                                                                    <option value={3}>Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="/assets/media/svg/files/doc.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        9 Degree CURD draftplan
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">3.6mb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option />
                                                                    <option value={1}>Remove</option>
                                                                    <option value={2}>Modify</option>
                                                                    <option value={3}>Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="/assets/media/svg/files/css.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        User CRUD Styles
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">85kb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option />
                                                                    <option value={1}>Remove</option>
                                                                    <option value={2}>Modify</option>
                                                                    <option value={3}>Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="/assets/media/svg/files/ai.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Design Initial Logo
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">40kb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option />
                                                                    <option value={1}>Remove</option>
                                                                    <option value={2}>Modify</option>
                                                                    <option value={3}>Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="/assets/media/svg/files/tif.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Tower Hill Bilboard
                                                                    </NavLink>
                                                                    <div className="fw-bold text-muted">27mb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>
                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option />
                                                                    <option value={1}>Remove</option>
                                                                    <option value={2}>Modify</option>
                                                                    <option value={3}>Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                    </div>
                                                    {/*end::Files*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-bold">
                                                                Allow Changes in Budget
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
                                                                name="target_allow"
                                                                defaultChecked="checked"
                                                            />
                                                            <span className="form-check-label fw-bold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="files-previous"
                                                    >
                                                        Set First Target
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="files-next"
                                                    >
                                                        <span className="indicator-label">Complete</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Files*/}
                                        {/*begin::Complete*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-12 text-center">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder text-dark">Project Created!</h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-bold fs-4">
                                                        If you need more info, please check how to create project
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-center pb-20">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="complete-start"
                                                    >
                                                        Create New Project
                                                    </button>
                                                    <NavLink
                                                        href
                                                        className="btn btn-lg btn-primary"
                                                        data-bs-toggle="tooltip"
                                                        title="Coming Soon"
                                                    >
                                                        View Project
                                                    </NavLink>
                                                </div>
                                                {/*end::Actions*/}
                                                {/*begin::Illustration*/}
                                                <div className="text-center px-4">
                                                    <img
                                                        src="/assets/media/illustrations/sketchy-1/9.png"
                                                        alt
                                                        className="mww-100 mh-350px"
                                                    />
                                                </div>
                                                {/*end::Illustration*/}
                                            </div>
                                        </div>
                                        {/*end::Complete*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*begin::Container*/}
                            </div>
                            {/*end::Stepper*/}
                        </div>
                        {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </>
    )
}

export default CreateProjectModal
