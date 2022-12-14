import React from 'react'
import { NavLink } from 'react-router-dom';

const List = () => {
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
                                            My Projects
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
                                            <li className="breadcrumb-item text-gray-600">Projects</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">My Projects</li>
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
                                                id="kt_menu_61b9c7ae8949a"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7ae8949a"
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
                                    {/*begin::Stats*/}
                                    <div className="row g-6 g-xl-9">
                                        <div className="col-lg-6 col-xxl-4">
                                            {/*begin::Card*/}
                                            <div className="card h-100">
                                                {/*begin::Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Heading*/}
                                                    <div className="fs-2hx fw-bolder">237</div>
                                                    <div className="fs-4 fw-bold text-gray-400 mb-7">
                                                        Current Projects
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-wrap">
                                                        {/*begin::Chart*/}
                                                        <div className="d-flex flex-center h-100px w-100px me-9 mb-5">
                                                            <canvas id="kt_project_list_chart" />
                                                        </div>
                                                        {/*end::Chart*/}
                                                        {/*begin::Labels*/}
                                                        <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                                                                <div className="bullet bg-primary me-3" />
                                                                <div className="text-gray-400">Active</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    30
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                                                                <div className="bullet bg-success me-3" />
                                                                <div className="text-gray-400">Completed</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    45
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <div className="d-flex fs-6 fw-bold align-items-center">
                                                                <div className="bullet bg-gray-300 me-3" />
                                                                <div className="text-gray-400">Yet to start</div>
                                                                <div className="ms-auto fw-bolder text-gray-700">
                                                                    25
                                                                </div>
                                                            </div>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Labels*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Card body*/}
                                            </div>
                                            {/*end::Card*/}
                                        </div>
                                        <div className="col-lg-6 col-xxl-4">
                                            {/*begin::Budget*/}
                                            <div className="card h-100">
                                                <div className="card-body p-9">
                                                    <div className="fs-2hx fw-bolder">$3,290.00</div>
                                                    <div className="fs-4 fw-bold text-gray-400 mb-7">
                                                        Project Finance
                                                    </div>
                                                    <div className="fs-6 d-flex justify-content-between mb-4">
                                                        <div className="fw-bold">Avg. Project Budget</div>
                                                        <div className="d-flex fw-bolder">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr007.svg*/}
                                                            <span className="svg-icon svg-icon-3 me-1 svg-icon-success">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}$6,570
                                                        </div>
                                                    </div>
                                                    <div className="separator separator-dashed" />
                                                    <div className="fs-6 d-flex justify-content-between my-4">
                                                        <div className="fw-bold">Lowest Project Check</div>
                                                        <div className="d-flex fw-bolder">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr006.svg*/}
                                                            <span className="svg-icon svg-icon-3 me-1 svg-icon-danger">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M13.4 14.8L5.3 6.69999C4.9 6.29999 4.9 5.7 5.3 5.3C5.7 4.9 6.29999 4.9 6.69999 5.3L14.8 13.4L13.4 14.8Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M19.8 8.5L8.5 19.8H18.8C19.4 19.8 19.8 19.4 19.8 18.8V8.5Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}$408
                                                        </div>
                                                    </div>
                                                    <div className="separator separator-dashed" />
                                                    <div className="fs-6 d-flex justify-content-between mt-4">
                                                        <div className="fw-bold">Ambassador Page</div>
                                                        <div className="d-flex fw-bolder">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr007.svg*/}
                                                            <span className="svg-icon svg-icon-3 me-1 svg-icon-success">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}$920
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Budget*/}
                                        </div>
                                        <div className="col-lg-6 col-xxl-4">
                                            {/*begin::Clients*/}
                                            <div className="card h-100">
                                                <div className="card-body p-9">
                                                    {/*begin::Heading*/}
                                                    <div className="fs-2hx fw-bolder">49</div>
                                                    <div className="fs-4 fw-bold text-gray-400 mb-7">
                                                        Our Clients
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Users group*/}
                                                    <div className="symbol-group symbol-hover mb-9">
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Alan Warden"
                                                        >
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bolder">
                                                                A
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Michael Eberon"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-12.jpg" />
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Michelle Swanston"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-13.jpg" />
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Francis Mitcham"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-5.jpg" />
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Susan Redwood"
                                                        >
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bolder">
                                                                S
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Melody Macy"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Perry Matthew"
                                                        >
                                                            <span className="symbol-label bg-info text-inverse-info fw-bolder">
                                                                P
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Barry Walter"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
                                                        </div>
                                                        <NavLink
                                                            to="#"
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_view_users"
                                                        >
                                                            <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bolder">
                                                                +42
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Users group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex">
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-primary btn-sm me-3"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_view_users"
                                                        >
                                                            All Clients
                                                        </NavLink>
                                                        <NavLink
                                                            to="#"
                                                            className="btn btn-light btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_users_search"
                                                        >
                                                            Invite New
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
                                            </div>
                                            {/*end::Clients*/}
                                        </div>
                                    </div>
                                    {/*end::Stats*/}
                                    {/*begin::Toolbar*/}
                                    <div className="d-flex flex-wrap flex-stack my-5">
                                        {/*begin::Heading*/}
                                        <h2 className="fs-2 fw-bold my-2">
                                            Projects
                                            <span className="fs-6 text-gray-400 ms-1">by Status</span>
                                        </h2>
                                        {/*end::Heading*/}
                                        {/*begin::Controls*/}
                                        <div className="d-flex flex-wrap my-1">
                                            {/*begin::Select wrapper*/}
                                            <div className="m-0">
                                                {/*begin::Select*/}
                                                <select
                                                    name="status"
                                                    data-control="select2"
                                                    data-hide-search="true"
                                                    className="form-select form-select-sm bg-body border-body fw-bolder w-125px"
                                                >
                                                    <option value="Active" selected="selected">
                                                        Active
                                                    </option>
                                                    <option value="Approved">In Progress</option>
                                                    <option value="Declined">To Do</option>
                                                    <option value="In Progress">Completed</option>
                                                </select>
                                                {/*end::Select*/}
                                            </div>
                                            {/*end::Select wrapper*/}
                                        </div>
                                        {/*end::Controls*/}
                                    </div>
                                    {/*end::Toolbar*/}
                                    {/*begin::Row*/}
                                    <div className="row g-6 g-xl-9">
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/plurk.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bolder me-auto px-4 py-3">
                                                            In Progress
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">Fitnes App</div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Jun 24, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 50% completed"
                                                    >
                                                        <div
                                                            className="bg-primary rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "50%" }}
                                                            aria-valuenow={50}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Emma Smith"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-1.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Rudy Stone"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-2.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Susan Redwood"
                                                        >
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bolder">
                                                                S
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/disqus.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light fw-bolder me-auto px-4 py-3">
                                                            Pending
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">Leaf CRM</div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                May 10, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $36,400.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 30% completed"
                                                    >
                                                        <div
                                                            className="bg-info rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "30%" }}
                                                            aria-valuenow={30}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Alan Warden"
                                                        >
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bolder">
                                                                A
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Brian Cox"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/figma-1.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-success fw-bolder me-auto px-4 py-3">
                                                            Completed
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">
                                                        Atica Banking
                                                    </div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Mar 14, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $605,100.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 100% completed"
                                                    >
                                                        <div
                                                            className="bg-success rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "100%" }}
                                                            aria-valuenow={100}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Mad Macy"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Cris Willson"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-8.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Mike Garcie"
                                                        >
                                                            <span className="symbol-label bg-info text-inverse-info fw-bolder">
                                                                M
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/sentry-3.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light fw-bolder me-auto px-4 py-3">
                                                            Pending
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">
                                                        Finance Dispatch
                                                    </div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Aug 19, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 60% completed"
                                                    >
                                                        <div
                                                            className="bg-info rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "60%" }}
                                                            aria-valuenow={60}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Nich Warden"
                                                        >
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bolder">
                                                                N
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Rob Otto"
                                                        >
                                                            <span className="symbol-label bg-success text-inverse-success fw-bolder">
                                                                R
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/xing-icon.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bolder me-auto px-4 py-3">
                                                            In Progress
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">9 Degree</div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Nov 10, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 40% completed"
                                                    >
                                                        <div
                                                            className="bg-primary rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "40%" }}
                                                            aria-valuenow={40}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Francis Mitcham"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-5.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Michelle Swanston"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-13.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Susan Redwood"
                                                        >
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bolder">
                                                                S
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/tvit.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bolder me-auto px-4 py-3">
                                                            In Progress
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">GoPro App</div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Aug 19, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 70% completed"
                                                    >
                                                        <div
                                                            className="bg-primary rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "70%" }}
                                                            aria-valuenow={70}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Melody Macy"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Robin Watterman"
                                                        >
                                                            <span className="symbol-label bg-success text-inverse-success fw-bolder">
                                                                R
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/aven.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bolder me-auto px-4 py-3">
                                                            In Progress
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">Buldozer CRM</div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Jun 24, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 70% completed"
                                                    >
                                                        <div
                                                            className="bg-primary rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "70%" }}
                                                            aria-valuenow={70}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Melody Macy"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="John Mixin"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-11.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Emma Smith"
                                                        >
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bolder">
                                                                S
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/treva.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-danger fw-bolder me-auto px-4 py-3">
                                                            Overdue
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">
                                                        Aviasales App
                                                    </div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Nov 10, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 10% completed"
                                                    >
                                                        <div
                                                            className="bg-danger rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "10%" }}
                                                            aria-valuenow={10}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Alan Warden"
                                                        >
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bolder">
                                                                A
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Brian Cox"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 col-xl-4">
                                            {/*begin::Card*/}
                                            <NavLink
                                                to="../../demo14/dist/apps/projects/project.html"
                                                className="card border-hover-primary"
                                            >
                                                {/*begin::Card header*/}
                                                <div className="card-header border-0 pt-9">
                                                    {/*begin::Card Title*/}
                                                    <div className="card-title m-0">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img
                                                                src="/assets/media/svg/brand-logos/kanba.svg"
                                                                alt="image"
                                                                className="p-3"
                                                            />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                    </div>
                                                    {/*end::Car Title*/}
                                                    {/*begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-success fw-bolder me-auto px-4 py-3">
                                                            Completed
                                                        </span>
                                                    </div>
                                                    {/*end::Card toolbar*/}
                                                </div>
                                                {/*end:: Card header*/}
                                                {/*begin:: Card body*/}
                                                <div className="card-body p-9">
                                                    {/*begin::Name*/}
                                                    <div className="fs-3 fw-bolder text-dark">Oppo CRM</div>
                                                    {/*end::Name*/}
                                                    {/*begin::Description*/}
                                                    <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                                                        CRM App application to HR efficiency
                                                    </p>
                                                    {/*end::Description*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap mb-5">
                                                        {/*begin::Due*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                Aug 19, 2021
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Due Date</div>
                                                        </div>
                                                        {/*end::Due*/}
                                                        {/*begin::Budget*/}
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bolder">
                                                                $284,900.00
                                                            </div>
                                                            <div className="fw-bold text-gray-400">Budget</div>
                                                        </div>
                                                        {/*end::Budget*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Progress*/}
                                                    <div
                                                        className="h-4px w-100 bg-light mb-5"
                                                        data-bs-toggle="tooltip"
                                                        title="This project 100% completed"
                                                    >
                                                        <div
                                                            className="bg-success rounded h-4px"
                                                            role="progressbar"
                                                            style={{ width: "100%" }}
                                                            aria-valuenow={100}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                    {/*end::Progress*/}
                                                    {/*begin::Users*/}
                                                    <div className="symbol-group symbol-hover">
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Nick Macy"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Sean Paul"
                                                        >
                                                            <img alt="Pic" src="/assets/media/avatars/150-8.jpg" />
                                                        </div>
                                                        {/*begin::User*/}
                                                        {/*begin::User*/}
                                                        <div
                                                            className="symbol symbol-35px symbol-circle"
                                                            data-bs-toggle="tooltip"
                                                            title="Mike Collin"
                                                        >
                                                            <span className="symbol-label bg-info text-inverse-info fw-bolder">
                                                                M
                                                            </span>
                                                        </div>
                                                        {/*begin::User*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                </div>
                                                {/*end:: Card body*/}
                                            </NavLink>
                                            {/*end::Card*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Row*/}
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
                                    {/*begin::Modals*/}
                                    {/*begin::Modal - View Users*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_view_users"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog mw-650px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header pb-0 border-0 justify-content-end">
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
                                                <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                                    {/*begin::Heading*/}
                                                    <div className="text-center mb-13">
                                                        {/*begin::Title*/}
                                                        <h1 className="mb-3">Browse Users</h1>
                                                        {/*end::Title*/}
                                                        {/*begin::Description*/}
                                                        <div className="text-muted fw-bold fs-5">
                                                            If you need more info, please check out our
                                                            <NavLink to="#" className="link-primary fw-bolder">
                                                                Users Directory
                                                            </NavLink>
                                                            .
                                                        </div>
                                                        {/*end::Description*/}
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Users*/}
                                                    <div className="mb-15">
                                                        {/*begin::List*/}
                                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Emma Smith
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Art Director
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            e.smith@kpmg.com.au
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $23,000
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Melody Macy
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Marketing Analytic
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            melody@altbox.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $50,500
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Max Smith
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Software Enginer
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            max@kt.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $75,900
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Sean Bean
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Web Developer
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            sean@dellito.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $10,500
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Brian Cox
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                UI/UX Designer
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            brian@exchange.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $20,000
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Mikaela Collins
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Head Of Marketing
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            mikaela@pexcom.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $9,300
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Francis Mitcham
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Software Arcitect
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            f.mitcham@kpmg.com.au
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $15,000
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Olivia Wild
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                System Admin
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            olivia@corpmail.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $23,000
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Neil Owen
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Account Manager
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            owen.neil@gmail.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $45,800
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Dan Wilson
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Web Desinger
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            dam@consilting.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $90,500
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Emma Bold
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Corporate Finance
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            emma@intenso.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $5,000
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Ana Crown
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Customer Relationship
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            ana.cf@limtel.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $70,000
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex flex-stack py-5">
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
                                                                    <div className="ms-6">
                                                                        {/*begin::Name*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                                                                        >
                                                                            Robert Doe
                                                                            <span className="badge badge-light fs-8 fw-bold ms-2">
                                                                                Marketing Executive
                                                                            </span>
                                                                        </NavLink>
                                                                        {/*end::Name*/}
                                                                        {/*begin::Email*/}
                                                                        <div className="fw-bold text-muted">
                                                                            robert@benko.com
                                                                        </div>
                                                                        {/*end::Email*/}
                                                                    </div>
                                                                    {/*end::Details*/}
                                                                </div>
                                                                {/*end::Details*/}
                                                                {/*begin::Stats*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Sales*/}
                                                                    <div className="text-end">
                                                                        <div className="fs-5 fw-bolder text-dark">
                                                                            $45,500
                                                                        </div>
                                                                        <div className="fs-7 text-muted">Sales</div>
                                                                    </div>
                                                                    {/*end::Sales*/}
                                                                </div>
                                                                {/*end::Stats*/}
                                                            </div>
                                                            {/*end::User*/}
                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Users*/}
                                                    {/*begin::Notice*/}
                                                    <div className="d-flex justify-content-between">
                                                        {/*begin::Label*/}
                                                        <div className="fw-bold">
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
                                                            <span className="form-check-label fw-bold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Notice*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - View Users*/}
                                    {/*begin::Modal - Users Search*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_users_search"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-650px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content">
                                                {/*begin::Modal header*/}
                                                <div className="modal-header pb-0 border-0 justify-content-end">
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
                                                <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                                    {/*begin::Content*/}
                                                    <div className="text-center mb-13">
                                                        <h1 className="mb-3">Search Users</h1>
                                                        <div className="text-muted fw-bold fs-5">
                                                            Invite Collaborators To Your Project
                                                        </div>
                                                    </div>
                                                    {/*end::Content*/}
                                                    {/*begin::Search*/}
                                                    <div
                                                        id="kt_modal_users_search_handler"
                                                        data-kt-search-keypress="true"
                                                        data-kt-search-min-length={2}
                                                        data-kt-search-enter="enter"
                                                        data-kt-search-layout="inline"
                                                    >
                                                        {/*begin::Form*/}
                                                        <form
                                                            data-kt-search-element="form"
                                                            className="w-100 position-relative mb-5"
                                                            autoComplete="off"
                                                        >
                                                            {/*begin::Hidden input(Added to disable form autocomplete)*/}
                                                            <input type="hidden" />
                                                            {/*end::Hidden input*/}
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
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
                                                            {/*end::Icon*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg form-control-solid px-15"
                                                                name="search"
                                                                defaultValue
                                                                placeholder="Search by username, full name or email..."
                                                                data-kt-search-element="input"
                                                            />
                                                            {/*end::Input*/}
                                                            {/*begin::Spinner*/}
                                                            <span
                                                                className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                                                                data-kt-search-element="spinner"
                                                            >
                                                                <span className="spinner-border h-15px w-15px align-middle text-muted" />
                                                            </span>
                                                            {/*end::Spinner*/}
                                                            {/*begin::Reset*/}
                                                            <span
                                                                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                                                                data-kt-search-element="clear"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
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
                                                            </span>
                                                            {/*end::Reset*/}
                                                        </form>
                                                        {/*end::Form*/}
                                                        {/*begin::Wrapper*/}
                                                        <div className="py-5">
                                                            {/*begin::Suggestions*/}
                                                            <div data-kt-search-element="suggestions">
                                                                {/*begin::Heading*/}
                                                                <h3 className="fw-bold mb-5">Recently searched:</h3>
                                                                {/*end::Heading*/}
                                                                {/*begin::Users*/}
                                                                <div className="mh-375px scroll-y me-n7 pe-7">
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-1.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Emma Smith
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Art Director
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <span className="symbol-label bg-light-danger text-danger fw-bold">
                                                                                M
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Melody Macy
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Marketing Analytic
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-26.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Max Smith
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Software Enginer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-4.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Sean Bean
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                Web Developer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                    {/*begin::User*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                                                    >
                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px symbol-circle me-5">
                                                                            <img
                                                                                alt="Pic"
                                                                                src="/assets/media/avatars/150-15.jpg"
                                                                            />
                                                                        </div>
                                                                        {/*end::Avatar*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="fw-bold">
                                                                            <span className="fs-6 text-gray-800 me-2">
                                                                                Brian Cox
                                                                            </span>
                                                                            <span className="badge badge-light">
                                                                                UI/UX Designer
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </NavLink>
                                                                    {/*end::User*/}
                                                                </div>
                                                                {/*end::Users*/}
                                                            </div>
                                                            {/*end::Suggestions*/}
                                                            {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                                                            <div
                                                                data-kt-search-element="results"
                                                                className="d-none"
                                                            >
                                                                {/*begin::Users*/}
                                                                <div className="mh-375px scroll-y me-n7 pe-7">
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={0}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='0']"
                                                                                    defaultValue={0}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={1}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='1']"
                                                                                    defaultValue={1}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={2}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='2']"
                                                                                    defaultValue={2}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                                <div className="fw-bold text-muted">
                                                                                    max@kt.com
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={3}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='3']"
                                                                                    defaultValue={3}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={4}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='4']"
                                                                                    defaultValue={4}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={5}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='5']"
                                                                                    defaultValue={5}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={6}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='6']"
                                                                                    defaultValue={6}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={7}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='7']"
                                                                                    defaultValue={7}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={8}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='8']"
                                                                                    defaultValue={8}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={9}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='9']"
                                                                                    defaultValue={9}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={10}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='10']"
                                                                                    defaultValue={10}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={11}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='11']"
                                                                                    defaultValue={11}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={12}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='12']"
                                                                                    defaultValue={12}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={13}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='13']"
                                                                                    defaultValue={13}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={14}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='14']"
                                                                                    defaultValue={14}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={15}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='15']"
                                                                                    defaultValue={15}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                    {/*begin::Separator*/}
                                                                    <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                                                    {/*end::Separator*/}
                                                                    {/*begin::User*/}
                                                                    <div
                                                                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                                        data-user-id={16}
                                                                    >
                                                                        {/*begin::Details*/}
                                                                        <div className="d-flex align-items-center">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="form-check form-check-custom form-check-solid me-5">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    name="users"
                                                                                    data-kt-check="true"
                                                                                    data-kt-check-target="[data-user-id='16']"
                                                                                    defaultValue={16}
                                                                                />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
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
                                                                </div>
                                                                {/*end::Users*/}
                                                                {/*begin::Actions*/}
                                                                <div className="d-flex flex-center mt-15">
                                                                    <button
                                                                        type="reset"
                                                                        id="kt_modal_users_search_reset"
                                                                        data-bs-dismiss="modal"
                                                                        className="btn btn-active-light me-3"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        id="kt_modal_users_search_submit"
                                                                        className="btn btn-primary"
                                                                    >
                                                                        Add Selected Users
                                                                    </button>
                                                                </div>
                                                                {/*end::Actions*/}
                                                            </div>
                                                            {/*end::Results*/}
                                                            {/*begin::Empty*/}
                                                            <div
                                                                data-kt-search-element="empty"
                                                                className="text-center d-none"
                                                            >
                                                                {/*begin::Message*/}
                                                                <div className="fw-bold py-10">
                                                                    <div className="text-gray-600 fs-3 mb-2">
                                                                        No users found
                                                                    </div>
                                                                    <div className="text-muted fs-6">
                                                                        Try to search by username, full name or email...
                                                                    </div>
                                                                </div>
                                                                {/*end::Message*/}
                                                                {/*begin::Illustration*/}
                                                                <div className="text-center px-5">
                                                                    <img
                                                                        src="/assets/media/illustrations/sketchy-1/1.png"
                                                                        alt
                                                                        className="w-100 h-200px h-sm-325px"
                                                                    />
                                                                </div>
                                                                {/*end::Illustration*/}
                                                            </div>
                                                            {/*end::Empty*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                    </div>
                                                    {/*end::Search*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Users Search*/}
                                    {/*end::Modals*/}
                                </div>
                                {/*end::Post*/}
                                {/*begin::Footer*/}
                                <div
                                    className="footer py-4 d-flex flex-column flex-md-row flex-stack"
                                    id="kt_footer"
                                >
                                    {/*begin::Copyright*/}
                                    <div className="text-dark order-2 order-md-1">
                                        <span className="text-muted fw-bold me-1">2021??</span>
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

export default List
