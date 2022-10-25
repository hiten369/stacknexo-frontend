import React from 'react';
import { NavLink } from 'react-router-dom';

const classic = () => {
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
                                            Faq Classic
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
                                            <li className="breadcrumb-item text-gray-600">FAQ</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Classic</li>
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
                                                id="kt_menu_61b9c78761b28"
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
                                                                data-dropdown-parent="#kt_menu_61b9c78761b28"
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
                                    {/*begin::FAQ card*/}
                                    <div className="card">
                                        {/*begin::Body*/}
                                        <div className="card-body p-lg-15">
                                            {/*begin::Classic content*/}
                                            <div className="mb-13">
                                                {/*begin::Intro*/}
                                                <div className="mb-15">
                                                    {/*begin::Title*/}
                                                    <h4 className="fs-2x text-gray-800 w-bolder mb-6">
                                                        Frequesntly Asked Questions
                                                    </h4>
                                                    {/*end::Title*/}
                                                    {/*begin::Text*/}
                                                    <p className="fw-bold fs-4 text-gray-600 mb-2">
                                                        First, a disclaimer – the entire process of writing a blog
                                                        post often takes more than a couple of hours, even if you
                                                        can type eighty words as per minute and your writing
                                                        skills are sharp.
                                                    </p>
                                                    {/*end::Text*/}
                                                </div>
                                                {/*end::Intro*/}
                                                {/*begin::Row*/}
                                                <div className="row mb-12">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-6 pe-md-10 mb-10 mb-md-0">
                                                        {/*begin::Title*/}
                                                        <h2 className="text-gray-800 fw-bolder mb-4">
                                                            Buying Product
                                                        </h2>
                                                        {/*end::Title*/}
                                                        {/*begin::Accordion*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_4_1"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How does it work?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div
                                                                id="kt_job_4_1"
                                                                className="collapse show fs-6 ms-1"
                                                            >
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_4_2"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    Do I need a designer to use Admin Theme ?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_4_2" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_4_3"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    What do I need to do to start selling?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_4_3" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_4_4"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How much does Extended license cost?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_4_4" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*end::Accordion*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-6 ps-md-10">
                                                        {/*begin::Title*/}
                                                        <h2 className="text-gray-800 fw-bolder mb-4">
                                                            Installation
                                                        </h2>
                                                        {/*end::Title*/}
                                                        {/*begin::Accordion*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_5_1"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    What platforms are compatible?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div
                                                                id="kt_job_5_1"
                                                                className="collapse show fs-6 ms-1"
                                                            >
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_5_2"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How many people can it support?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_5_2" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_5_3"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How long is the warrianty?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_5_3" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_5_4"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How fast is the installation?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_5_4" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*end::Accordion*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                                {/*begin::Row*/}
                                                <div className="row">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-6 pe-md-10 mb-10 mb-md-0">
                                                        {/*begin::Title*/}
                                                        <h2 className="text-gray-800 w-bolder mb-4">
                                                            User Roles
                                                        </h2>
                                                        {/*end::Title*/}
                                                        {/*begin::Accordion*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_6_1"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How does it work?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div
                                                                id="kt_job_6_1"
                                                                className="collapse show fs-6 ms-1"
                                                            >
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_6_2"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    Do I need a designer to use this Admin Theme?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_6_2" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_6_3"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    What do I need to do to start selling?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_6_3" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_6_4"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How much does Extended license cost?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_6_4" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*end::Accordion*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-6 ps-md-10">
                                                        {/*begin::Title*/}
                                                        <h2 className="text-gray-800 fw-bolder mb-4">
                                                            Reports Generation
                                                        </h2>
                                                        {/*end::Title*/}
                                                        {/*begin::Accordion*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_7_1"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    What platforms are compatible?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div
                                                                id="kt_job_7_1"
                                                                className="collapse show fs-6 ms-1"
                                                            >
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_7_2"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How many people can it support?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_7_2" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_7_3"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How long is the warrianty?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_7_3" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                            {/*begin::Separator*/}
                                                            <div className="separator separator-dashed" />
                                                            {/*end::Separator*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Section*/}
                                                        <div className="m-0">
                                                            {/*begin::Heading*/}
                                                            <div
                                                                className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#kt_job_7_4"
                                                            >
                                                                {/*begin::Icon*/}
                                                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
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
                                                                    <span className="svg-icon toggle-off svg-icon-1">
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
                                                                {/*end::Icon*/}
                                                                {/*begin::Title*/}
                                                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">
                                                                    How fast is the installation?
                                                                </h4>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Heading*/}
                                                            {/*begin::Body*/}
                                                            <div id="kt_job_7_4" className="collapse fs-6 ms-1">
                                                                {/*begin::Text*/}
                                                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words as per minute and
                                                                    your writing skills are sharp.
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Content*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*end::Accordion*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*end::Classic content*/}
                                            {/*begin::Section*/}
                                            <div className="mb-17">
                                                {/*begin::Content*/}
                                                <div className="d-flex flex-stack mb-5">
                                                    {/*begin::Title*/}
                                                    <h3 className="text-dark">Video Tutorials</h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Link*/}
                                                    <NavLink to="#" className="fs-6 fw-bold link-primary">
                                                        View All Videos
                                                    </NavLink>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*end::Content*/}
                                                {/*begin::Separator*/}
                                                <div className="separator separator-dashed mb-9" />
                                                {/*end::Separator*/}
                                                {/*begin::Row*/}
                                                <div className="row g-10">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Feature post*/}
                                                        <div className="card-xl-stretch me-md-6">
                                                            {/*begin::Image*/}
                                                            <NavLink
                                                                className="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5"
                                                                style={{
                                                                    backgroundImage:
                                                                        'url("assets/media/stock/600x400/img-73.jpg")'
                                                                }}
                                                                data-fslightbox="lightbox-video-tutorials"
                                                                to="https://www.youtube.com/embed/ptgwzvvAHy4"
                                                            >
                                                                <img
                                                                    src="/assets/media/svg/misc/video-play.svg"
                                                                    className="position-absolute top-50 start-50 translate-middle"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Image*/}
                                                            {/*begin::Body*/}
                                                            <div className="m-0">
                                                                {/*begin::Title*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/pages/profile/overview.html"
                                                                    className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                                                                >
                                                                    Admin Panel - How To Started the Dashboard Tutorial
                                                                </NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark my-4">
                                                                    We’ve been focused on making a the from also not
                                                                    been afraid to and step away been focused create eye
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Content*/}
                                                                <div className="fs-6 fw-bolder">
                                                                    {/*begin::Author*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                                        className="text-gray-700 text-hover-primary"
                                                                    >
                                                                        Jane Miller
                                                                    </NavLink>
                                                                    {/*end::Author*/}
                                                                    {/*begin::Date*/}
                                                                    <span className="text-muted">on Mar 21 2021</span>
                                                                    {/*end::Date*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Feature post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Feature post*/}
                                                        <div className="card-xl-stretch mx-md-3">
                                                            {/*begin::Image*/}
                                                            <NavLink
                                                                className="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5"
                                                                style={{
                                                                    backgroundImage:
                                                                        'url("assets/media/stock/600x400/img-74.jpg")'
                                                                }}
                                                                data-fslightbox="lightbox-video-tutorials"
                                                                to="https://www.youtube.com/embed/UPNvy-2ZtQM"
                                                            >
                                                                <img
                                                                    src="/assets/media/svg/misc/video-play.svg"
                                                                    className="position-absolute top-50 start-50 translate-middle"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Image*/}
                                                            {/*begin::Body*/}
                                                            <div className="m-0">
                                                                {/*begin::Title*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/pages/profile/overview.html"
                                                                    className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                                                                >
                                                                    Admin Panel - How To Started the Dashboard Tutorial
                                                                </NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark my-4">
                                                                    We’ve been focused on making the from v4 to v5 but
                                                                    we have also not been afraid to step away been
                                                                    focused
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Content*/}
                                                                <div className="fs-6 fw-bolder">
                                                                    {/*begin::Author*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                                        className="text-gray-700 text-hover-primary"
                                                                    >
                                                                        Cris Morgan
                                                                    </NavLink>
                                                                    {/*end::Author*/}
                                                                    {/*begin::Date*/}
                                                                    <span className="text-muted">on Apr 14 2021</span>
                                                                    {/*end::Date*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Feature post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Feature post*/}
                                                        <div className="card-xl-stretch ms-md-6">
                                                            {/*begin::Image*/}
                                                            <NavLink
                                                                className="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5"
                                                                style={{
                                                                    backgroundImage:
                                                                        'url("assets/media/stock/600x400/img-47.jpg")'
                                                                }}
                                                                data-fslightbox="lightbox-video-tutorials"
                                                                to="https://www.youtube.com/embed/gq3eQKc71kc"
                                                            >
                                                                <img
                                                                    src="/assets/media/svg/misc/video-play.svg"
                                                                    className="position-absolute top-50 start-50 translate-middle"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Image*/}
                                                            {/*begin::Body*/}
                                                            <div className="m-0">
                                                                {/*begin::Title*/}
                                                                <NavLink
                                                                    to="../../demo14/dist/pages/profile/overview.html"
                                                                    className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                                                                >
                                                                    Admin Panel - How To Started the Dashboard Tutorial
                                                                </NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark my-4">
                                                                    We’ve been focused on making the from v4 to v5 but
                                                                    we’ve also not been afraid to step away been focused
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Content*/}
                                                                <div className="fs-6 fw-bolder">
                                                                    {/*begin::Author*/}
                                                                    <NavLink
                                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                                        className="text-gray-700 text-hover-primary"
                                                                    >
                                                                        Carles Nilson
                                                                    </NavLink>
                                                                    {/*end::Author*/}
                                                                    {/*begin::Date*/}
                                                                    <span className="text-muted">on May 14 2021</span>
                                                                    {/*end::Date*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Feature post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*end::Section*/}
                                            {/*begin::Card*/}
                                            <div className="card mb-4 bg-light text-center">
                                                {/*begin::Body*/}
                                                <div className="card-body py-12">
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/facebook-4.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/instagram-2-1.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/github.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/behance.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/pinterest-p.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/twitter.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                    {/*begin::Icon*/}
                                                    <NavLink to="#" className="mx-4">
                                                        <img
                                                            src="/assets/media/svg/brand-logos/dribbble-icon-1.svg"
                                                            className="h-30px my-2"
                                                            alt
                                                        />
                                                    </NavLink>
                                                    {/*end::Icon*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::FAQ card*/}
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

export default classic
