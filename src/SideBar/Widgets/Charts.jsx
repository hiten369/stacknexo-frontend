import React from 'react'

const Charts = () => {
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
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">Charts</h1>
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
                                            <li className="breadcrumb-item text-gray-600">Widgets</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Charts</li>
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
                                                id="kt_menu_61b9c7a98f066"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7a98f066"
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
                                    {/*begin::Row*/}
                                    <div className="row g-5 g-xl-8">
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 1*/}
                                            <div className="card card-xl-stretch mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    {/*begin::Title*/}
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Statistics
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 400 new members
                                                        </span>
                                                    </h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/*begin::Menu*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x={5}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={5}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={5}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <rect
                                                                            x={14}
                                                                            y={14}
                                                                            width={5}
                                                                            height={5}
                                                                            rx={1}
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </button>
                                                        {/*begin::Menu 1*/}
                                                        <div
                                                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                            data-kt-menu="true"
                                                            id="kt_menu_61b9c7a98f60b"
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
                                                                    <label className="form-label fw-bold">
                                                                        Status:
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <div>
                                                                        <select
                                                                            className="form-select form-select-solid"
                                                                            data-kt-select2="true"
                                                                            data-placeholder="Select option"
                                                                            data-dropdown-parent="#kt_menu_61b9c7a98f60b"
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
                                                                    <label className="form-label fw-bold">
                                                                        Member Type:
                                                                    </label>
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
                                                                            <span className="form-check-label">
                                                                                Customer
                                                                            </span>
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
                                                                        <label className="form-check-label">
                                                                            Enabled
                                                                        </label>
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
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_1_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 1*/}
                                        </div>
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 2*/}
                                            <div className="card card-xl-stretch mb-5 mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Orders
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 500 new orders
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                                                            id="kt_charts_widget_2_year_btn"
                                                        >
                                                            Year
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                                                            id="kt_charts_widget_2_month_btn"
                                                        >
                                                            Month
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                                            id="kt_charts_widget_2_week_btn"
                                                        >
                                                            Week
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_2_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 2*/}
                                        </div>
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    <div className="row g-5 g-xl-8">
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 3*/}
                                            <div className="card card-xl-stretch mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Transactions
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 1000 new records
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                                                            id="kt_charts_widget_3_year_btn"
                                                        >
                                                            Year
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                                                            id="kt_charts_widget_3_month_btn"
                                                        >
                                                            Month
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                                            id="kt_charts_widget_3_week_btn"
                                                        >
                                                            Week
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_3_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 3*/}
                                        </div>
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 4*/}
                                            <div className="card card-xl-stretch mb-5 mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Customers
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 500 new customers
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                                                            id="kt_charts_widget_4_year_btn"
                                                        >
                                                            Year
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                                                            id="kt_charts_widget_4_month_btn"
                                                        >
                                                            Month
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                                            id="kt_charts_widget_4_week_btn"
                                                        >
                                                            Week
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_4_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 4*/}
                                        </div>
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    <div className="row g-5 g-xl-8">
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 5*/}
                                            <div className="card card-xl-stretch mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Customers
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 500 new customers
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-secondary px-4 me-1"
                                                            id="kt_charts_widget_5_year_btn"
                                                        >
                                                            Year
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-secondary px-4 me-1"
                                                            id="kt_charts_widget_5_month_btn"
                                                        >
                                                            Month
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-secondary px-4 active"
                                                            id="kt_charts_widget_5_week_btn"
                                                        >
                                                            Week
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_5_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 5*/}
                                        </div>
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 5*/}
                                            <div className="card card-xl-stretch mb-5 mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Orders
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 500+ new orders
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                                                            id="kt_charts_widget_6_sales_btn"
                                                        >
                                                            Sales
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                                                            id="kt_charts_widget_6_expenses_btn"
                                                        >
                                                            Expenses
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_6_chart"
                                                        style={{ height: 350 }}
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 5*/}
                                        </div>
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    <div className="row g-5 g-xl-8">
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 7*/}
                                            <div className="card card-xl-stretch mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Users
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 500 new users
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                                                            id="kt_charts_widget_7_year_btn"
                                                        >
                                                            Year
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                                                            id="kt_charts_widget_7_month_btn"
                                                        >
                                                            Month
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                                            id="kt_charts_widget_7_week_btn"
                                                        >
                                                            Week
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_7_chart"
                                                        style={{ height: 350 }}
                                                        className="card-rounded-bottom"
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 7*/}
                                        </div>
                                        <div className="col-xl-6">
                                            {/*begin::Charts Widget 8*/}
                                            <div className="card card-xl-stretch mb-5 mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder fs-3 mb-1">
                                                            Recent Orders
                                                        </span>
                                                        <span className="text-muted fw-bold fs-7">
                                                            More than 500 new orders
                                                        </span>
                                                    </h3>
                                                    {/*begin::Toolbar*/}
                                                    <div className="card-toolbar" data-kt-buttons="true">
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                                                            id="kt_charts_widget_8_year_btn"
                                                        >
                                                            Year
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                                                            id="kt_charts_widget_8_month_btn"
                                                        >
                                                            Month
                                                        </a>
                                                        <a
                                                            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                                            id="kt_charts_widget_8_week_btn"
                                                        >
                                                            Week
                                                        </a>
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body">
                                                    {/*begin::Chart*/}
                                                    <div
                                                        id="kt_charts_widget_8_chart"
                                                        style={{ height: 350 }}
                                                        className="card-rounded-bottom"
                                                    />
                                                    {/*end::Chart*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Charts Widget 8*/}
                                        </div>
                                    </div>
                                    {/*end::Row*/}
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

export default Charts
