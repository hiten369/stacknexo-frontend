import React from 'react'
import { NavLink } from 'react-router-dom';

const CreateApiKeyModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="kt_modal_create_api_key"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header" id="kt_modal_create_api_key_header">
                            {/*begin::Modal title*/}
                            <h2>Create API Key</h2>
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
                        {/*begin::Form*/}
                        <form id="kt_modal_create_api_key_form" className="form" action="#">
                            {/*begin::Modal body*/}
                            <div className="modal-body py-10 px-lg-17">
                                {/*begin::Scroll*/}
                                <div
                                    className="scroll-y me-n7 pe-7"
                                    id="kt_modal_create_api_key_scroll"
                                    data-kt-scroll="true"
                                    data-kt-scroll-activate="{default: false, lg: true}"
                                    data-kt-scroll-max-height="auto"
                                    data-kt-scroll-dependencies="#kt_modal_create_api_key_header"
                                    data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll"
                                    data-kt-scroll-offset="300px"
                                >
                                    {/*begin::Notice*/}
                                    <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">
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
                                                <h4 className="text-gray-900 fw-bolder">Please Note!</h4>
                                                <div className="fs-6 text-gray-700">
                                                    Adding new API key may afftect to your
                                                    <NavLink to="#">Affiliate Income</NavLink>
                                                </div>
                                            </div>
                                            {/*end::Content*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Notice*/}
                                    {/*begin::Input group*/}
                                    <div className="mb-5 fv-row">
                                        {/*begin::Label*/}
                                        <label className="required fs-5 fw-bold mb-2">API Name</label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Your API Name"
                                            name="name"
                                        />
                                        {/*end::Input*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/*begin::Label*/}
                                        <label className="required fs-5 fw-bold mb-2">
                                            Short Description
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <textarea
                                            className="form-control form-control-solid"
                                            rows={3}
                                            name="description"
                                            placeholder="Describe your API"
                                            defaultValue={""}
                                        />
                                        {/*end::Input*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="d-flex flex-column mb-10 fv-row">
                                        {/*begin::Label*/}
                                        <label className="required fs-5 fw-bold mb-2">Category</label>
                                        {/*end::Label*/}
                                        {/*begin::Select*/}
                                        <select
                                            name="category"
                                            data-control="select2"
                                            data-hide-search="true"
                                            data-placeholder="Select a Category..."
                                            className="form-select form-select-solid"
                                        >
                                            <option value>Select a Category...</option>
                                            <option value={1}>CRM</option>
                                            <option value={2}>Project Alice</option>
                                            <option value={3}>Keenthemes</option>
                                            <option value={4}>General</option>
                                        </select>
                                        {/*end::Select*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="mb-10">
                                        {/*begin::Heading*/}
                                        <div className="mb-3">
                                            {/*begin::Label*/}
                                            <label className="d-flex align-items-center fs-5 fw-bold">
                                                <span className="required">Specify Your API Method</span>
                                                <i
                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                    data-bs-toggle="tooltip"
                                                    title="Your billing numbers will be calculated based on your API method"
                                                />
                                            </label>
                                            {/*end::Label*/}
                                            {/*begin::Description*/}
                                            <div className="fs-7 fw-bold text-muted">
                                                If you need more info, please check budget planning
                                            </div>
                                            {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Row*/}
                                        <div className="fv-row">
                                            {/*begin::Radio group*/}
                                            <div
                                                className="btn-group w-100"
                                                data-kt-buttons="true"
                                                data-kt-buttons-target="[data-kt-button]"
                                            >
                                                {/*begin::Radio*/}
                                                <label
                                                    className="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success"
                                                    data-kt-button="true"
                                                >
                                                    {/*begin::Input*/}
                                                    <input
                                                        className="btn-check"
                                                        type="radio"
                                                        name="method"
                                                        defaultValue={1}
                                                    />
                                                    {/*end::Input*/}
                                                    Open API
                                                </label>
                                                {/*end::Radio*/}
                                                {/*begin::Radio*/}
                                                <label
                                                    className="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active"
                                                    data-kt-button="true"
                                                >
                                                    {/*begin::Input*/}
                                                    <input
                                                        className="btn-check"
                                                        type="radio"
                                                        name="method"
                                                        defaultChecked="checked"
                                                        defaultValue={2}
                                                    />
                                                    {/*end::Input*/}
                                                    SQL Call
                                                </label>
                                                {/*end::Radio*/}
                                                {/*begin::Radio*/}
                                                <label
                                                    className="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success"
                                                    data-kt-button="true"
                                                >
                                                    {/*begin::Input*/}
                                                    <input
                                                        className="btn-check"
                                                        type="radio"
                                                        name="method"
                                                        defaultValue={3}
                                                    />
                                                    {/*end::Input*/}
                                                    UI/UX
                                                </label>
                                                {/*end::Radio*/}
                                                {/*begin::Radio*/}
                                                <label
                                                    className="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success"
                                                    data-kt-button="true"
                                                >
                                                    {/*begin::Input*/}
                                                    <input
                                                        className="btn-check"
                                                        type="radio"
                                                        name="method"
                                                        defaultValue={4}
                                                    />
                                                    {/*end::Input*/}
                                                    Docs
                                                </label>
                                                {/*end::Radio*/}
                                            </div>
                                            {/*end::Radio group*/}
                                        </div>
                                        {/*end::Row*/}
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
                                    id="kt_modal_create_api_key_cancel"
                                    className="btn btn-light me-3"
                                >
                                    Discard
                                </button>
                                {/*end::Button*/}
                                {/*begin::Button*/}
                                <button
                                    type="submit"
                                    id="kt_modal_create_api_key_submit"
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
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </>
    )
}

export default CreateApiKeyModal
