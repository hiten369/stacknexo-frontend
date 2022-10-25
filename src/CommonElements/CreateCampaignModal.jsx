import React from 'react'
import { NavLink } from 'react-router-dom';

const CreateCampaignModal = () => {
    return (
        <div>
            <div
                className="modal fade"
                id="kt_modal_create_campaign"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-fullscreen p-9">
                    {/*begin::Modal content*/}
                    <div className="modal-content modal-rounded">
                        {/*begin::Modal header*/}
                        <div className="modal-header py-7 d-flex justify-content-between">
                            {/*begin::Modal title*/}
                            <h2>Create Campaign</h2>
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
                        {/*begin::Modal header*/}
                        {/*begin::Modal body*/}
                        <div className="modal-body scroll-y m-5">
                            {/*begin::Stepper*/}
                            <div
                                className="stepper stepper-links d-flex flex-column"
                                id="kt_modal_create_campaign_stepper"
                            >
                                {/*begin::Nav*/}
                                <div className="stepper-nav justify-content-center py-2">
                                    {/*begin::Step 1*/}
                                    <div
                                        className="stepper-item me-5 me-md-15 current"
                                        data-kt-stepper-element="nav"
                                    >
                                        <h3 className="stepper-title">Campaign Details</h3>
                                    </div>
                                    {/*end::Step 1*/}
                                    {/*begin::Step 2*/}
                                    <div
                                        className="stepper-item me-5 me-md-15"
                                        data-kt-stepper-element="nav"
                                    >
                                        <h3 className="stepper-title">Creative Uploads</h3>
                                    </div>
                                    {/*end::Step 2*/}
                                    {/*begin::Step 3*/}
                                    <div
                                        className="stepper-item me-5 me-md-15"
                                        data-kt-stepper-element="nav"
                                    >
                                        <h3 className="stepper-title">Audiences</h3>
                                    </div>
                                    {/*end::Step 3*/}
                                    {/*begin::Step 4*/}
                                    <div
                                        className="stepper-item me-5 me-md-15"
                                        data-kt-stepper-element="nav"
                                    >
                                        <h3 className="stepper-title">Budget Estimates</h3>
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
                                    className="mx-auto w-100 mw-600px pt-15 pb-10"
                                    noValidate="novalidate"
                                    id="kt_modal_create_campaign_stepper_form"
                                >
                                    {/*begin::Step 1*/}
                                    <div className="current" data-kt-stepper-element="content">
                                        {/*begin::Wrapper*/}
                                        <div className="w-100">
                                            {/*begin::Heading*/}
                                            <div className="pb-10 pb-lg-15">
                                                {/*begin::Title*/}
                                                <h2 className="fw-bolder d-flex align-items-center text-dark">
                                                    Setup Campaign Details
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="Campaign name will be used as reference within your campaign reports"
                                                    />
                                                </h2>
                                                {/*end::Title*/}
                                                {/*begin::Notice*/}
                                                <div className="text-muted fw-bold fs-6">
                                                    If you need more info, please check out
                                                    <NavLink to="#" className="link-primary fw-bolder">
                                                        Help Page
                                                    </NavLink>
                                                    .
                                                </div>
                                                {/*end::Notice*/}
                                            </div>
                                            {/*end::Heading*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-10 fv-row">
                                                {/*begin::Label*/}
                                                <label className="required form-label mb-3">
                                                    Campaign Name
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg form-control-solid"
                                                    name="campaign_name"
                                                    placeholder
                                                    defaultValue
                                                />
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="d-block fw-bold fs-6 mb-5">
                                                    <span className="required">Company Logo</span>
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="E.g. Select a logo to represent the company that's running the campaign."
                                                    />
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Image input*/}
                                                <div
                                                    className="image-input image-input-empty image-input-outline"
                                                    data-kt-image-input="true"
                                                    style={{
                                                        backgroundImage:
                                                            "url(assets/media/svg/files/blank-image.svg)"
                                                    }}
                                                >
                                                    {/*begin::Preview existing avatar*/}
                                                    <div className="image-input-wrapper w-125px h-125px" />
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
                                                {/*begin::Hint*/}
                                                <div className="form-text">
                                                    Allowed file types: png, jpg, jpeg.
                                                </div>
                                                {/*end::Hint*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-10">
                                                {/*begin::Label*/}
                                                <label className="required fw-bold fs-6 mb-5">
                                                    Campaign Goal
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Roles*/}
                                                {/*begin::Input row*/}
                                                <div className="d-flex fv-row">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-check-input me-3"
                                                            name="user_role"
                                                            type="radio"
                                                            defaultValue={0}
                                                            id="kt_modal_update_role_option_0"
                                                            defaultChecked="checked"
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="kt_modal_update_role_option_0"
                                                        >
                                                            <div className="fw-bolder text-gray-800">
                                                                Get more visitors
                                                            </div>
                                                            <div className="text-gray-600">
                                                                Increase impression traffic onto the platform
                                                            </div>
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Radio*/}
                                                </div>
                                                {/*end::Input row*/}
                                                <div className="separator separator-dashed my-5" />
                                                {/*begin::Input row*/}
                                                <div className="d-flex fv-row">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-check-input me-3"
                                                            name="user_role"
                                                            type="radio"
                                                            defaultValue={1}
                                                            id="kt_modal_update_role_option_1"
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="kt_modal_update_role_option_1"
                                                        >
                                                            <div className="fw-bolder text-gray-800">
                                                                Get more messages on chat
                                                            </div>
                                                            <div className="text-gray-600">
                                                                Increase community interaction and communication
                                                            </div>
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Radio*/}
                                                </div>
                                                {/*end::Input row*/}
                                                <div className="separator separator-dashed my-5" />
                                                {/*begin::Input row*/}
                                                <div className="d-flex fv-row">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-check-input me-3"
                                                            name="user_role"
                                                            type="radio"
                                                            defaultValue={2}
                                                            id="kt_modal_update_role_option_2"
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="kt_modal_update_role_option_2"
                                                        >
                                                            <div className="fw-bolder text-gray-800">
                                                                Get more calls
                                                            </div>
                                                            <div className="text-gray-600">
                                                                Boost telecommunication feedback to provide precise
                                                                and accurate information
                                                            </div>
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Radio*/}
                                                </div>
                                                {/*end::Input row*/}
                                                <div className="separator separator-dashed my-5" />
                                                {/*begin::Input row*/}
                                                <div className="d-flex fv-row">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-check-input me-3"
                                                            name="user_role"
                                                            type="radio"
                                                            defaultValue={3}
                                                            id="kt_modal_update_role_option_3"
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="kt_modal_update_role_option_3"
                                                        >
                                                            <div className="fw-bolder text-gray-800">
                                                                Get more likes
                                                            </div>
                                                            <div className="text-gray-600">
                                                                Increase positive interactivity on social media
                                                                platforms
                                                            </div>
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Radio*/}
                                                </div>
                                                {/*end::Input row*/}
                                                <div className="separator separator-dashed my-5" />
                                                {/*begin::Input row*/}
                                                <div className="d-flex fv-row">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-check-input me-3"
                                                            name="user_role"
                                                            type="radio"
                                                            defaultValue={4}
                                                            id="kt_modal_update_role_option_4"
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Label*/}
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="kt_modal_update_role_option_4"
                                                        >
                                                            <div className="fw-bolder text-gray-800">
                                                                Lead generation
                                                            </div>
                                                            <div className="text-gray-600">
                                                                Collect contact information for potential customers
                                                            </div>
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Radio*/}
                                                </div>
                                                {/*end::Input row*/}
                                                {/*end::Roles*/}
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
                                            <div className="pb-10 pb-lg-12">
                                                {/*begin::Title*/}
                                                <h1 className="fw-bolder text-dark">Upload Files</h1>
                                                {/*end::Title*/}
                                                {/*begin::Description*/}
                                                <div className="text-muted fw-bold fs-4">
                                                    If you need more info, please check
                                                    <NavLink to="#" className="link-primary">
                                                        Campaign Guidelines
                                                    </NavLink>
                                                </div>
                                                {/*end::Description*/}
                                            </div>
                                            {/*end::Heading*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
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
                                                                Drop campaign files here or click to upload.
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
                                            <div className="mb-10">
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
                                                                    Product Specifications
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
                                                                    Campaign Creative Poster
                                                                </NavLink>
                                                                <div className="fw-bold text-muted">2.4mb</div>
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
                                                                    src="/assets/media/svg/files/folder-document.svg"
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
                                                                    Campaign Landing Page Source
                                                                </NavLink>
                                                                <div className="fw-bold text-muted">1.12mb</div>
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
                                                                    Landing Page Styling
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
                                                                <img src="/assets/media/svg/files/ai.svg" alt="icon" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Details*/}
                                                            <div className="ms-6">
                                                                <NavLink
                                                                    to="#"
                                                                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                                                                >
                                                                    Design Source Files
                                                                </NavLink>
                                                                <div className="fw-bold text-muted">48mb</div>
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
                                                                    Campaign Plan Document
                                                                </NavLink>
                                                                <div className="fw-bold text-muted">27kb</div>
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
                                                <h1 className="fw-bolder text-dark">Configure Audiences</h1>
                                                {/*end::Title*/}
                                                {/*begin::Description*/}
                                                <div className="text-muted fw-bold fs-4">
                                                    If you need more info, please check
                                                    <NavLink to="#" className="link-primary">
                                                        Campaign Guidelines
                                                    </NavLink>
                                                </div>
                                                {/*end::Description*/}
                                            </div>
                                            {/*end::Heading*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-6 fw-bold mb-2">
                                                    Gender
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="Show your ads to either men or women, or select 'All' for both"
                                                    />
                                                </label>
                                                {/*End::Label*/}
                                                {/*begin::Row*/}
                                                <div
                                                    className="row g-9"
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
                                                                    name="campaign_gender"
                                                                    defaultValue={1}
                                                                    defaultChecked="checked"
                                                                />
                                                            </span>
                                                            {/*end::Radio*/}
                                                            {/*begin::Info*/}
                                                            <span className="ms-5">
                                                                <span className="fs-4 fw-bolder text-gray-800 d-block">
                                                                    All
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
                                                                    name="campaign_gender"
                                                                    defaultValue={2}
                                                                />
                                                            </span>
                                                            {/*end::Radio*/}
                                                            {/*begin::Info*/}
                                                            <span className="ms-5">
                                                                <span className="fs-4 fw-bolder text-gray-800 d-block">
                                                                    Male
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
                                                                    name="campaign_gender"
                                                                    defaultValue={3}
                                                                />
                                                            </span>
                                                            {/*end::Radio*/}
                                                            {/*begin::Info*/}
                                                            <span className="ms-5">
                                                                <span className="fs-4 fw-bolder text-gray-800 d-block">
                                                                    Female
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
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-6 fw-bold mb-2">
                                                    Age
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="Select the minimum and maximum age of the people who will find your ad relevant."
                                                    />
                                                </label>
                                                {/*End::Label*/}
                                                {/*begin::Slider*/}
                                                <div className="d-flex flex-stack">
                                                    <div
                                                        id="kt_modal_create_campaign_age_min"
                                                        className="fs-7 fw-bold text-muted"
                                                    />
                                                    <div
                                                        id="kt_modal_create_campaign_age_slider"
                                                        className="noUi-sm w-100 ms-5 me-8"
                                                    />
                                                    <div
                                                        id="kt_modal_create_campaign_age_max"
                                                        className="fs-7 fw-bold text-muted"
                                                    />
                                                </div>
                                                {/*end::Slider*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-6 fw-bold mb-2">
                                                    Location
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="Enter one or more location points for more specific targeting."
                                                    />
                                                </label>
                                                {/*End::Label*/}
                                                {/*begin::Tagify*/}
                                                <input
                                                    className="form-control d-flex align-items-center"
                                                    defaultValue
                                                    id="kt_modal_create_campaign_location"
                                                />
                                                {/*end::Tagify*/}
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
                                            <div className="pb-10 pb-lg-12">
                                                {/*begin::Title*/}
                                                <h1 className="fw-bolder text-dark">Budget Estimates</h1>
                                                {/*end::Title*/}
                                                {/*begin::Description*/}
                                                <div className="text-muted fw-bold fs-4">
                                                    If you need more info, please check
                                                    <NavLink to="#" className="link-primary">
                                                        Campaign Guidelines
                                                    </NavLink>
                                                </div>
                                                {/*end::Description*/}
                                            </div>
                                            {/*end::Heading*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-6 fw-bold mb-2">
                                                    Campaign Duration
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="Choose how long you want your ad to run for"
                                                    />
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Duration option*/}
                                                <div className="d-flex gap-9 mb-7">
                                                    {/*begin::Button*/}
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline btn-outline-dashed btn-outline-default active"
                                                        id="kt_modal_create_campaign_duration_all"
                                                    >
                                                        Continuous duration
                                                        <br />
                                                        <span className="fs-7">
                                                            Your ad will run continuously for a daily budget.
                                                        </span>
                                                    </button>
                                                    {/*end::Button*/}
                                                    {/*begin::Button*/}
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline btn-outline-dashed btn-outline-default"
                                                        id="kt_modal_create_campaign_duration_fixed"
                                                    >
                                                        Fixed duration
                                                        <br />
                                                        <span className="fs-7">
                                                            Your ad will run on the specified dates only.
                                                        </span>
                                                    </button>
                                                    {/*end::Button*/}
                                                </div>
                                                {/*end::Duration option*/}
                                                {/*begin::Datepicker*/}
                                                <input
                                                    className="form-control form-control-solid d-none"
                                                    placeholder="Pick date & time"
                                                    id="kt_modal_create_campaign_datepicker"
                                                />
                                                {/*end::Datepicker*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-6 fw-bold mb-2">
                                                    Daily Budget
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="Choose the budget allocated for each day. Higher budget will generate better results"
                                                    />
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Slider*/}
                                                <div className="d-flex flex-column text-center">
                                                    <div className="d-flex align-items-start justify-content-center mb-7">
                                                        <span className="fw-bolder fs-4 mt-1 me-2">$</span>
                                                        <span
                                                            className="fw-bolder fs-3x"
                                                            id="kt_modal_create_campaign_budget_label"
                                                        />
                                                        <span className="fw-bolder fs-3x">.00</span>
                                                    </div>
                                                    <div
                                                        id="kt_modal_create_campaign_budget_slider"
                                                        className="noUi-sm"
                                                    />
                                                </div>
                                                {/*end::Slider*/}
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
                                            <div className="pb-12 text-center">
                                                {/*begin::Title*/}
                                                <h1 className="fw-bolder text-dark">Campaign Created!</h1>
                                                {/*end::Title*/}
                                                {/*begin::Description*/}
                                                <div className="fw-bold text-muted fs-4">
                                                    You will receive an email with with the summary of your
                                                    newly created campaign!
                                                </div>
                                                {/*end::Description*/}
                                            </div>
                                            {/*end::Heading*/}
                                            {/*begin::Actions*/}
                                            <div className="d-flex flex-center pb-20">
                                                <button
                                                    id="kt_modal_create_campaign_create_new"
                                                    type="button"
                                                    className="btn btn-lg btn-light me-3"
                                                    data-kt-element="complete-start"
                                                >
                                                    Create New Campaign
                                                </button>
                                                <NavLink
                                                    href
                                                    className="btn btn-lg btn-primary"
                                                    data-bs-toggle="tooltip"
                                                    title="Coming Soon"
                                                >
                                                    View Campaign
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
                                    {/*end::Step 5*/}
                                    {/*begin::Actions*/}
                                    <div className="d-flex flex-stack pt-10">
                                        {/*begin::Wrapper*/}
                                        <div className="me-2">
                                            <button
                                                type="button"
                                                className="btn btn-lg btn-light-primary me-3"
                                                data-kt-stepper-action="previous"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                                                <span className="svg-icon svg-icon-3 me-1">
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
                                                className="btn btn-lg btn-primary"
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
                                                <span className="svg-icon svg-icon-3 ms-1 me-0">
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
                        {/*begin::Modal body*/}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateCampaignModal
