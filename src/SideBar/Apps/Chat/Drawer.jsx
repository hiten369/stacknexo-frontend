import React from 'react'
import { NavLink } from 'react-router-dom';

const Drawer = () => {
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
                                            Drawer Chat
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
                                            <li className="breadcrumb-item text-gray-600">Chat</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Drawer Chat</li>
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
                                                id="kt_menu_61b9c7c7e2721"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7c7e2721"
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
                                    {/*begin::Heading*/}
                                    <div className="d-flex flex-wrap flex-stack mb-6">
                                        {/*begin::Title*/}
                                        <h3 className="fw-bolder my-2">
                                            My Contacts
                                            <span className="fs-6 fw-bold ms-1">(59)</span>
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Controls*/}
                                        <div className="d-flex my-2">
                                            {/*begin::Select*/}
                                            <select
                                                name="status"
                                                data-control="select2"
                                                data-hide-search="true"
                                                className="form-select form-select-sm border-body bg-body w-125px"
                                            >
                                                <option value="Online" selected="selected">
                                                    Online
                                                </option>
                                                <option value="Pending">Pending</option>
                                                <option value="Declined">Declined</option>
                                                <option value="Accepted">Accepted</option>
                                            </select>
                                            {/*end::Select*/}
                                        </div>
                                        {/*end::Controls*/}
                                    </div>
                                    {/*end::Heading*/}
                                    {/*begin::Contacts*/}
                                    <div className="row g-6 g-xl-9">
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-1.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Emma Smith
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Art Director
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fs-5 fw-bolder">
                                                                M
                                                            </span>
                                                            <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Melody Macy
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Marketing Analytic
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Max Smith
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Software Enginer
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Sean Bean
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Web Developer
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Brian Cox
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        UI/UX Designer
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <span className="symbol-label bg-light-warning text-warning fs-5 fw-bolder">
                                                                C
                                                            </span>
                                                            <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Mikaela Collins
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Head Of Marketing
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-8.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Francis Mitcham
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Software Arcitect
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fs-5 fw-bolder">
                                                                O
                                                            </span>
                                                            <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Olivia Wild
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        System Admin
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <span className="symbol-label bg-light-primary text-primary fs-5 fw-bolder">
                                                                N
                                                            </span>
                                                            <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Neil Owen
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Account Manager
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-6.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Dan Wilson
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Web Desinger
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fs-5 fw-bolder">
                                                                E
                                                            </span>
                                                            <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Emma Bold
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Corporate Finance
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card">
                                                {/*begin::Card body*/}
                                                <div className="card-body d-flex flex-center flex-column p-9">
                                                    {/*begin::Wrapper*/}
                                                    <div className="mb-5">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-75px symbol-circle">
                                                            <img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Name*/}
                                                    <NavLink
                                                        to="#"
                                                        className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
                                                    >
                                                        Ana Crown
                                                    </NavLink>
                                                    {/*end::Name*/}
                                                    {/*begin::Position*/}
                                                    <div className="fw-bold text-gray-400 mb-6">
                                                        Customer Relationship
                                                    </div>
                                                    {/*end::Position*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-center flex-wrap mb-5">
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $14,560
                                                            </div>
                                                            <div className="fw-bold text-gray-400">
                                                                Avg. Earnings
                                                            </div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Stats*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
                                                            <div className="fs-6 fw-bolder text-gray-700">
                                                                $236,400
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Total Sales</div>
                                                        </div>
                                                        {/*end::Stats*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Link*/}
                                                    <button
                                                        className="btn btn-sm btn-light-primary fw-bolder"
                                                        data-kt-drawer-show="true"
                                                        data-kt-drawer-target="#kt_drawer_chat"
                                                    >
                                                        Send Message
                                                    </button>
                                                    {/*end::Link*/}
                                                </div>
                                                {/*begin::Card body*/}
                                            </div>
                                            {/*begin::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Contacts*/}
                                    {/*begin::Pagination*/}
                                    <div className="d-flex flex-stack flex-wrap pt-10">
                                        <div className="fs-6 fw-bold text-gray-700">
                                            Showing 1 to 10 of 50 entries
                                        </div>
                                        {/*begin::Pages*/}
                                        <ul className="pagination">
                                            <li className="page-item previous">
                                                <NavLink to="#" className="page-link">
                                                    <i className="previous" />
                                                </NavLink>
                                            </li>
                                            <li className="page-item active">
                                                <NavLink to="#" className="page-link">
                                                    1
                                                </NavLink>
                                            </li>
                                            <li className="page-item">
                                                <NavLink to="#" className="page-link">
                                                    2
                                                </NavLink>
                                            </li>
                                            <li className="page-item">
                                                <NavLink to="#" className="page-link">
                                                    3
                                                </NavLink>
                                            </li>
                                            <li className="page-item">
                                                <NavLink to="#" className="page-link">
                                                    4
                                                </NavLink>
                                            </li>
                                            <li className="page-item">
                                                <NavLink to="#" className="page-link">
                                                    5
                                                </NavLink>
                                            </li>
                                            <li className="page-item">
                                                <NavLink to="#" className="page-link">
                                                    6
                                                </NavLink>
                                            </li>
                                            <li className="page-item next">
                                                <NavLink to="#" className="page-link">
                                                    <i className="next" />
                                                </NavLink>
                                            </li>
                                        </ul>
                                        {/*end::Pages*/}
                                    </div>
                                    {/*end::Pagination*/}
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

export default Drawer
