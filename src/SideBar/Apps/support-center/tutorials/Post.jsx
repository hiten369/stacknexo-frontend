import React from 'react'
import { NavLink } from 'react-router-dom';

const Post = () => {
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
                                            Tutorials Post
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
                                            <li className="breadcrumb-item text-gray-600">
                                                Support Center
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600">Tutorials</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-500">Tutorial Post</li>
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
                                                id="kt_menu_61b9c7de81dae"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7de81dae"
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
                                    {/*begin::Hero card*/}
                                    <div className="card mb-12">
                                        {/*begin::Hero body*/}
                                        <div className="card-body flex-column p-5">
                                            {/*begin::Hero content*/}
                                            <div className="d-flex align-items-center h-lg-300px p-5 p-lg-15">
                                                {/*begin::Wrapper*/}
                                                <div className="d-flex flex-column align-items-start justift-content-center flex-equal me-5">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bolder fs-4 fs-lg-1 text-gray-800 mb-5 mb-lg-10">
                                                        How Can We Help You?
                                                    </h1>
                                                    {/*end::Title*/}
                                                    {/*begin::Input group*/}
                                                    <div className="position-relative w-100">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary position-absolute top-50 translate-middle ms-8">
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
                                                            className="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px"
                                                            name="search"
                                                            defaultValue
                                                            placeholder="Ask a question"
                                                        />
                                                    </div>
                                                    {/*end::Input group*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                                {/*begin::Wrapper*/}
                                                <div className="flex-equal d-flex justify-content-center align-items-end ms-5">
                                                    {/*begin::Illustration*/}
                                                    <img
                                                        src="/assets/media/illustrations/sketchy-1/20.png"
                                                        alt
                                                        className="mw-100 mh-125px mh-lg-275px mb-lg-n12"
                                                    />
                                                    {/*end::Illustration*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>
                                            {/*end::Hero content*/}
                                            {/*begin::Hero nav*/}
                                            <div className="card-rounded bg-light d-flex flex-stack flex-wrap p-5">
                                                {/*begin::Nav*/}
                                                <ul className="nav flex-wrap border-transparent fw-bolder">
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/overview.html"
                                                        >
                                                            Overview
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/tickets/list.html"
                                                        >
                                                            tickets
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/tutorials/list.html"
                                                        >
                                                            Tutorials
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/faq.html"
                                                        >
                                                            FAQ
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/licenses.html"
                                                        >
                                                            Licenses
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item my-1">
                                                        <NavLink
                                                            className="btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase"
                                                            to="../../demo14/dist/apps/support-center/contact.html"
                                                        >
                                                            Contact US
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                </ul>
                                                {/*end::Nav*/}
                                                {/*begin::Action*/}
                                                <NavLink
                                                    to="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_new_ticket"
                                                    className="btn btn-primary fw-bolder fs-8 fs-lg-base"
                                                >
                                                    Create Ticket
                                                </NavLink>
                                                {/*end::Action*/}
                                            </div>
                                            {/*end::Hero nav*/}
                                        </div>
                                        {/*end::Hero body*/}
                                    </div>
                                    {/*end::Hero card*/}
                                    {/*begin::Post card*/}
                                    <div className="card">
                                        {/*begin::Body*/}
                                        <div className="card-body p-lg-15 pb-lg-0">
                                            {/*begin::Layout*/}
                                            <div className="d-flex flex-column flex-xl-row">
                                                {/*begin::Content*/}
                                                <div className="flex-lg-row-fluid me-xl-15">
                                                    {/*begin::Post content*/}
                                                    <div className="mb-17">
                                                        {/*begin::Wrapper*/}
                                                        <div className="mb-8">
                                                            {/*begin::Info*/}
                                                            <div className="d-flex flex-wrap mb-6">
                                                                {/*begin::Item*/}
                                                                <div className="me-9 my-1">
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                    <span className="svg-icon svg-icon-primary svg-icon-2 me-1">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <rect
                                                                                x={2}
                                                                                y={2}
                                                                                width={9}
                                                                                height={9}
                                                                                rx={2}
                                                                                fill="black"
                                                                            />
                                                                            <rect
                                                                                opacity="0.3"
                                                                                x={13}
                                                                                y={2}
                                                                                width={9}
                                                                                height={9}
                                                                                rx={2}
                                                                                fill="black"
                                                                            />
                                                                            <rect
                                                                                opacity="0.3"
                                                                                x={13}
                                                                                y={13}
                                                                                width={9}
                                                                                height={9}
                                                                                rx={2}
                                                                                fill="black"
                                                                            />
                                                                            <rect
                                                                                opacity="0.3"
                                                                                x={2}
                                                                                y={13}
                                                                                width={9}
                                                                                height={9}
                                                                                rx={2}
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Label*/}
                                                                    <span className="fw-bolder text-gray-400">
                                                                        06 April 2021
                                                                    </span>
                                                                    {/*end::Label*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="me-9 my-1">
                                                                    {/*begin::Icon*/}
                                                                    {/*SVG file not found: icons/duotune/finance/fin006.svgFolder.svg*/}
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Label*/}
                                                                    <span className="fw-bolder text-gray-400">
                                                                        Announcements
                                                                    </span>
                                                                    {/*begin::Label*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                                {/*begin::Item*/}
                                                                <div className="my-1">
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
                                                                    <span className="svg-icon svg-icon-primary svg-icon-2 me-1">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Label*/}
                                                                    <span className="fw-bolder text-gray-400">
                                                                        24 Comments
                                                                    </span>
                                                                    {/*end::Label*/}
                                                                </div>
                                                                {/*end::Item*/}
                                                            </div>
                                                            {/*end::Info*/}
                                                            {/*begin::Title*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-dark text-hover-primary fs-2 fw-bolder"
                                                            >
                                                                Admin Panel - How To Get Started Tutorial. Create a
                                                                customizable SaaS Based applications and solutions
                                                                <span className="fw-bolder text-muted fs-5 ps-1">
                                                                    5 mins read
                                                                </span>
                                                            </NavLink>
                                                            {/*end::Title*/}
                                                            {/*begin::Container*/}
                                                            <div className="overlay mt-8">
                                                                {/*begin::Image*/}
                                                                <div
                                                                    className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-350px"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/2000x800/1.jpg")'
                                                                    }}
                                                                />
                                                                {/*end::Image*/}
                                                                {/*begin::Links*/}
                                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                                                    <NavLink
                                                                        to="../../demo14/dist/pages/about.html"
                                                                        className="btn btn-primary"
                                                                    >
                                                                        About Us
                                                                    </NavLink>
                                                                    <NavLink
                                                                        to="../../demo14/dist/pages/careers/apply.html"
                                                                        className="btn btn-light-primary ms-3"
                                                                    >
                                                                        Join Us
                                                                    </NavLink>
                                                                </div>
                                                                {/*end::Links*/}
                                                            </div>
                                                            {/*end::Container*/}
                                                        </div>
                                                        {/*end::Wrapper*/}
                                                        {/*begin::Description*/}
                                                        <div className="fs-5 fw-bold text-gray-600">
                                                            {/*begin::Text*/}
                                                            <p className="mb-8">
                                                                First, a disclaimer – the entire process of writing a
                                                                blog post often takes more than a couple of hours,
                                                                even if you can type eighty words per minute and your
                                                                writing skills are sharp. From the seed of the idea to
                                                                finally hitting “Publish,” you might spend several
                                                                days or maybe even a week “writing” a blog post, but
                                                                it’s important to spend those vital hours planning
                                                                your post and even thinking about
                                                                <NavLink
                                                                    to="../../demo14/dist/pages/blog/post.html"
                                                                    className="link-primary pe-1"
                                                                >
                                                                    Your Post
                                                                </NavLink>
                                                                (yes, thinking counts as working if you’re a blogger)
                                                                before you actually write it.
                                                            </p>
                                                            {/*end::Text*/}
                                                            {/*begin::Text*/}
                                                            <p className="mb-8">
                                                                There’s an old maxim that states,
                                                                <span className="text-gray-800 pe-1">
                                                                    “No fun for the writer, no fun for the reader.”
                                                                </span>
                                                                No matter what industry you’re working in, as a
                                                                blogger, you should live and die by this statement.
                                                            </p>
                                                            {/*end::Text*/}
                                                            {/*begin::Text*/}
                                                            <p className="mb-8">
                                                                Before you do any of the following steps, be sure to
                                                                pick a topic that actually interests you. Nothing –
                                                                and
                                                                <NavLink
                                                                    to="../../demo14/dist/pages/blog/home.html"
                                                                    className="link-primary pe-1"
                                                                >
                                                                    I mean NOTHING
                                                                </NavLink>
                                                                – will kill a blog post more effectively than a lack
                                                                of enthusiasm from the writer. You can tell when a
                                                                writer is bored by their subject, and it’s so
                                                                cringe-worthy it’s a little embarrassing.
                                                            </p>
                                                            {/*end::Text*/}
                                                            {/*begin::Text*/}
                                                            <p className="mb-17">
                                                                I can hear your objections already. “But Dan, I have
                                                                to blog for a cardboard box manufacturing company.” I
                                                                feel your pain, I really do. During the course of my
                                                                career, I’ve written content for dozens of clients in
                                                                some less-than-thrilling industries (such as financial
                                                                regulatory compliance and corporate housing), but the
                                                                hallmark of a professional blogger is the ability to
                                                                write well about any topic, no matter how dry it may
                                                                be. Blogging is a lot easier, however, if you can
                                                                muster at least a little enthusiasm for the topic at
                                                                hand.
                                                            </p>
                                                            {/*end::Text*/}
                                                        </div>
                                                        {/*end::Description*/}
                                                        {/*begin::Block*/}
                                                        <div className="d-flex align-items-center border-dashed card-rounded p-5 p-lg-10 mb-14">
                                                            {/*begin::Section*/}
                                                            <div className="text-center flex-shrink-0 me-7 me-lg-13">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-70px symbol-circle mb-2">
                                                                    <img
                                                                        src="/assets/media/avatars/150-3.jpg"
                                                                        className
                                                                        alt
                                                                    />
                                                                </div>
                                                                {/*end::Avatar*/}
                                                                {/*begin::Info*/}
                                                                <div className="mb-0">
                                                                    <NavLink
                                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                                        className="text-gray-700 fw-bolder text-hover-primary"
                                                                    >
                                                                        Jane Johnson
                                                                    </NavLink>
                                                                    <span className="text-gray-400 fs-7 fw-bold d-block mt-1">
                                                                        Co-founder
                                                                    </span>
                                                                </div>
                                                                {/*end::Info*/}
                                                            </div>
                                                            {/*end::Section*/}
                                                            {/*begin::Text*/}
                                                            <div className="mb-0 fs-6">
                                                                <div className="text-muted fw-bold lh-lg mb-2">
                                                                    First, a disclaimer – the entire process of writing
                                                                    a blog post often takes more than a couple of hours,
                                                                    even if you can type eighty words per minute and
                                                                    your writing skills are sharp writing a blog post
                                                                    often takes more than a couple.
                                                                </div>
                                                                <NavLink
                                                                    to="../../demo14/dist/pages/profile/overview.html"
                                                                    className="fw-bold link-primary"
                                                                >
                                                                    Author’s Profile
                                                                </NavLink>
                                                            </div>
                                                            {/*end::Text*/}
                                                        </div>
                                                        {/*end::Block*/}
                                                        {/*begin::Icons*/}
                                                        <div className="d-flex flex-center">
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/facebook-4.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/instagram-2-1.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/github.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/behance.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/pinterest-p.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/twitter.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                            {/*begin::Icon*/}
                                                            <NavLink to="#" className="mx-4">
                                                                <img
                                                                    src="/assets/media/svg/brand-logos/dribbble-icon-1.svg"
                                                                    className="h-20px my-2"
                                                                    alt
                                                                />
                                                            </NavLink>
                                                            {/*end::Icon*/}
                                                        </div>
                                                        {/*end::Icons*/}
                                                    </div>
                                                    {/*end::Post content*/}
                                                </div>
                                                {/*end::Content*/}
                                                {/*begin::Sidebar*/}
                                                <div className="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">
                                                    {/*begin::Search blog*/}
                                                    <div className="mb-16">
                                                        <h4 className="text-black mb-7">Search Blog</h4>
                                                        {/*begin::Input group*/}
                                                        <div className="position-relative">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                            <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
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
                                                                className="form-control form-control-solid ps-10"
                                                                name="search"
                                                                defaultValue
                                                                placeholder="Search"
                                                            />
                                                        </div>
                                                        {/*end::Input group*/}
                                                    </div>
                                                    {/*end::Search blog*/}
                                                    {/*begin::Catigories*/}
                                                    <div className="mb-16">
                                                        <h4 className="text-black mb-7">Categories</h4>
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                                                            {/*begin::Text*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-muted text-hover-primary pe-2"
                                                            >
                                                                SaaS Solutions
                                                            </NavLink>
                                                            {/*end::Text*/}
                                                            {/*begin::Number*/}
                                                            <div className="m-0">24</div>
                                                            {/*end::Number*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                                                            {/*begin::Text*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-muted text-hover-primary pe-2"
                                                            >
                                                                Company News
                                                            </NavLink>
                                                            {/*end::Text*/}
                                                            {/*begin::Number*/}
                                                            <div className="m-0">152</div>
                                                            {/*end::Number*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                                                            {/*begin::Text*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-muted text-hover-primary pe-2"
                                                            >
                                                                Events &amp; Activities
                                                            </NavLink>
                                                            {/*end::Text*/}
                                                            {/*begin::Number*/}
                                                            <div className="m-0">52</div>
                                                            {/*end::Number*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                                                            {/*begin::Text*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-muted text-hover-primary pe-2"
                                                            >
                                                                Support Related
                                                            </NavLink>
                                                            {/*end::Text*/}
                                                            {/*begin::Number*/}
                                                            <div className="m-0">305</div>
                                                            {/*end::Number*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                                                            {/*begin::Text*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-muted text-hover-primary pe-2"
                                                            >
                                                                Innovations
                                                            </NavLink>
                                                            {/*end::Text*/}
                                                            {/*begin::Number*/}
                                                            <div className="m-0">70</div>
                                                            {/*end::Number*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack fw-bold fs-5 text-muted">
                                                            {/*begin::Text*/}
                                                            <NavLink
                                                                to="#"
                                                                className="text-muted text-hover-primary pe-2"
                                                            >
                                                                Product Updates
                                                            </NavLink>
                                                            {/*end::Text*/}
                                                            {/*begin::Number*/}
                                                            <div className="m-0">585</div>
                                                            {/*end::Number*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Catigories*/}
                                                    {/*begin::Recent posts*/}
                                                    <div className="m-0">
                                                        <h4 className="text-black mb-7">Recent Posts</h4>
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack mb-7">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-60px symbol-2by3 me-4">
                                                                <div
                                                                    className="symbol-label"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x400/img-1.jpg")'
                                                                    }}
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="m-0">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-dark fw-bolder text-hover-primary fs-6"
                                                                >
                                                                    About Bootstrap Admin
                                                                </NavLink>
                                                                <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                                                                    We’ve been a focused on making a the sky
                                                                </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack mb-7">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-60px symbol-2by3 me-4">
                                                                <div
                                                                    className="symbol-label"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x400/img-2.jpg")'
                                                                    }}
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="m-0">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-dark fw-bolder text-hover-primary fs-6"
                                                                >
                                                                    A yellow sofa
                                                                </NavLink>
                                                                <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                                                                    We’ve been a focused on making a the sky
                                                                </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack mb-7">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-60px symbol-2by3 me-4">
                                                                <div
                                                                    className="symbol-label"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x400/img-3.jpg")'
                                                                    }}
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="m-0">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-dark fw-bolder text-hover-primary fs-6"
                                                                >
                                                                    Our Camra Mega Set
                                                                </NavLink>
                                                                <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                                                                    We’ve been a focused on making a the sky
                                                                </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-60px symbol-2by3 me-4">
                                                                <div
                                                                    className="symbol-label"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x400/img-4.jpg")'
                                                                    }}
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="m-0">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-dark fw-bolder text-hover-primary fs-6"
                                                                >
                                                                    Time to cook and eat?
                                                                </NavLink>
                                                                <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                                                                    We’ve been a focused on making a the sky
                                                                </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Recent posts*/}
                                                </div>
                                                {/*end::Sidebar*/}
                                            </div>
                                            {/*end::Layout*/}
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
                                            {/*begin::Section*/}
                                            <div className="mb-17">
                                                {/*begin::Content*/}
                                                <div className="d-flex flex-stack mb-5">
                                                    {/*begin::Title*/}
                                                    <h3 className="text-dark">Hottest Bundles</h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Link*/}
                                                    <NavLink to="#" className="fs-6 fw-bold link-primary">
                                                        View All Offers
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
                                                        {/*begin::Hot sales post*/}
                                                        <div className="card-xl-stretch me-md-6">
                                                            {/*begin::Overlay*/}
                                                            <NavLink
                                                                className="d-block overlay"
                                                                data-fslightbox="lightbox-hot-sales"
                                                                to="/assets/media/stock/600x400/img-23.jpg"
                                                            >
                                                                {/*begin::Image*/}
                                                                <div
                                                                    className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x400/img-23.jpg")'
                                                                    }}
                                                                />
                                                                {/*end::Image*/}
                                                                {/*begin::Action*/}
                                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                                                    <i className="bi bi-eye-fill fs-2x text-white" />
                                                                </div>
                                                                {/*end::Action*/}
                                                            </NavLink>
                                                            {/*end::Overlay*/}
                                                            {/*begin::Body*/}
                                                            <div className="mt-5">
                                                                {/*begin::Title*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                                                                >
                                                                    25 Products Mega Bundle with 50% off discount
                                                                    amazing
                                                                </NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark mt-3">
                                                                    We’ve been focused on making a the from also not
                                                                    been eye
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Text*/}
                                                                <div className="fs-6 fw-bolder mt-5 d-flex flex-stack">
                                                                    {/*begin::Label*/}
                                                                    <span className="badge border-dashed fs-2 fw-bolder text-dark p-2">
                                                                        <span className="fs-6 fw-bold text-gray-400">
                                                                            $
                                                                        </span>
                                                                        28
                                                                    </span>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Action*/}
                                                                    <NavLink to="#" className="btn btn-primary">
                                                                        Purchase
                                                                    </NavLink>
                                                                    {/*end::Action*/}
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Hot sales post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Hot sales post*/}
                                                        <div className="card-xl-stretch mx-md-3">
                                                            {/*begin::Overlay*/}
                                                            <NavLink
                                                                className="d-block overlay"
                                                                data-fslightbox="lightbox-hot-sales"
                                                                to="/assets/media/stock/600x600/img-14.jpg"
                                                            >
                                                                {/*begin::Image*/}
                                                                <div
                                                                    className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x600/img-14.jpg")'
                                                                    }}
                                                                />
                                                                {/*end::Image*/}
                                                                {/*begin::Action*/}
                                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                                                    <i className="bi bi-eye-fill fs-2x text-white" />
                                                                </div>
                                                                {/*end::Action*/}
                                                            </NavLink>
                                                            {/*end::Overlay*/}
                                                            {/*begin::Body*/}
                                                            <div className="mt-5">
                                                                {/*begin::Title*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                                                                >
                                                                    25 Products Mega Bundle with 50% off discount
                                                                    amazing
                                                                </NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark mt-3">
                                                                    We’ve been focused on making a the from also not
                                                                    been eye
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Text*/}
                                                                <div className="fs-6 fw-bolder mt-5 d-flex flex-stack">
                                                                    {/*begin::Label*/}
                                                                    <span className="badge border-dashed fs-2 fw-bolder text-dark p-2">
                                                                        <span className="fs-6 fw-bold text-gray-400">
                                                                            $
                                                                        </span>
                                                                        27
                                                                    </span>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Action*/}
                                                                    <NavLink to="#" className="btn btn-primary">
                                                                        Purchase
                                                                    </NavLink>
                                                                    {/*end::Action*/}
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Hot sales post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Hot sales post*/}
                                                        <div className="card-xl-stretch ms-md-6">
                                                            {/*begin::Overlay*/}
                                                            <NavLink
                                                                className="d-block overlay"
                                                                data-fslightbox="lightbox-hot-sales"
                                                                to="/assets/media/stock/600x400/img-71.jpg"
                                                            >
                                                                {/*begin::Image*/}
                                                                <div
                                                                    className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("assets/media/stock/600x400/img-71.jpg")'
                                                                    }}
                                                                />
                                                                {/*end::Image*/}
                                                                {/*begin::Action*/}
                                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                                                    <i className="bi bi-eye-fill fs-2x text-white" />
                                                                </div>
                                                                {/*end::Action*/}
                                                            </NavLink>
                                                            {/*end::Overlay*/}
                                                            {/*begin::Body*/}
                                                            <div className="mt-5">
                                                                {/*begin::Title*/}
                                                                <NavLink
                                                                    to="#"
                                                                    className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                                                                >
                                                                    25 Products Mega Bundle with 50% off discount
                                                                    amazing
                                                                </NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark mt-3">
                                                                    We’ve been focused on making a the from also not
                                                                    been eye
                                                                </div>
                                                                {/*end::Text*/}
                                                                {/*begin::Text*/}
                                                                <div className="fs-6 fw-bolder mt-5 d-flex flex-stack">
                                                                    {/*begin::Label*/}
                                                                    <span className="badge border-dashed fs-2 fw-bolder text-dark p-2">
                                                                        <span className="fs-6 fw-bold text-gray-400">
                                                                            $
                                                                        </span>
                                                                        25
                                                                    </span>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Action*/}
                                                                    <NavLink to="#" className="btn btn-primary">
                                                                        Purchase
                                                                    </NavLink>
                                                                    {/*end::Action*/}
                                                                </div>
                                                                {/*end::Text*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Hot sales post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*end::Section*/}
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Post card*/}
                                    {/*begin::Modal - Support Center - Create Ticket*/}
                                    <div
                                        className="modal fade"
                                        id="kt_modal_new_ticket"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        {/*begin::Modal dialog*/}
                                        <div className="modal-dialog modal-dialog-centered mw-750px">
                                            {/*begin::Modal content*/}
                                            <div className="modal-content rounded">
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
                                                <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                                                    {/*begin:Form*/}
                                                    <form
                                                        id="kt_modal_new_ticket_form"
                                                        className="form"
                                                        action="#"
                                                    >
                                                        {/*begin::Heading*/}
                                                        <div className="mb-13 text-center">
                                                            {/*begin::Title*/}
                                                            <h1 className="mb-3">Create Ticket</h1>
                                                            {/*end::Title*/}
                                                            {/*begin::Description*/}
                                                            <div className="text-gray-400 fw-bold fs-5">
                                                                If you need more info, please check
                                                                <NavLink href className="fw-bolder link-primary">
                                                                    Support Guidelines
                                                                </NavLink>
                                                                .
                                                            </div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-column mb-8 fv-row">
                                                            {/*begin::Label*/}
                                                            <label className="d-flex align-items-center fs-6 fw-bold mb-2">
                                                                <span className="required">Subject</span>
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="tooltip"
                                                                    title="Specify a subject for your issue"
                                                                />
                                                            </label>
                                                            {/*end::Label*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                placeholder="Enter your ticket subject"
                                                                name="subject"
                                                            />
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="row g-9 mb-8">
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Product
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Select a product"
                                                                    name="product"
                                                                >
                                                                    <option value>Select a product...</option>
                                                                    <option value={1}>HTML Theme</option>
                                                                    <option value={1}>Angular App</option>
                                                                    <option value={1}>Vue App</option>
                                                                    <option value={1}>React Theme</option>
                                                                    <option value={1}>Figma UI Kit</option>
                                                                    <option value={3}>Laravel App</option>
                                                                    <option value={4}>Blazor App</option>
                                                                    <option value={5}>Django App</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Col*/}
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
                                                                    name="user"
                                                                >
                                                                    <option value>Select a user...</option>
                                                                    <option value={1}>Karina Clark</option>
                                                                    <option value={2}>Robert Doe</option>
                                                                    <option value={3}>Niel Owen</option>
                                                                    <option value={4}>Olivia Wild</option>
                                                                    <option value={5}>Sean Bean</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="row g-9 mb-8">
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Status
                                                                </label>
                                                                <select
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-placeholder="Open"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value />
                                                                    <option value={1} selected="selected">
                                                                        Open
                                                                    </option>
                                                                    <option value={2}>Pending</option>
                                                                    <option value={3}>Resolved</option>
                                                                    <option value={3}>Closed</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col-md-6 fv-row">
                                                                <label className="required fs-6 fw-bold mb-2">
                                                                    Due Date
                                                                </label>
                                                                {/*begin::Input*/}
                                                                <div className="position-relative d-flex align-items-center">
                                                                    {/*begin::Icon*/}
                                                                    <div className="symbol symbol-20px me-4 position-absolute ms-4">
                                                                        <span className="symbol-label bg-secondary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                            <span className="svg-icon">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                >
                                                                                    <rect
                                                                                        x={2}
                                                                                        y={2}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                    <rect
                                                                                        opacity="0.3"
                                                                                        x={13}
                                                                                        y={2}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                    <rect
                                                                                        opacity="0.3"
                                                                                        x={13}
                                                                                        y={13}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                    <rect
                                                                                        opacity="0.3"
                                                                                        x={2}
                                                                                        y={13}
                                                                                        width={9}
                                                                                        height={9}
                                                                                        rx={2}
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Datepicker*/}
                                                                    <input
                                                                        className="form-control form-control-solid ps-12"
                                                                        placeholder="Select a date"
                                                                        name="due_date"
                                                                    />
                                                                    {/*end::Datepicker*/}
                                                                </div>
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="d-flex flex-column mb-8 fv-row">
                                                            <label className="fs-6 fw-bold mb-2">Description</label>
                                                            <textarea
                                                                className="form-control form-control-solid"
                                                                rows={4}
                                                                name="description"
                                                                placeholder="Type your ticket description"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            <label className="fs-6 fw-bold mb-2">Attachments</label>
                                                            {/*begin::Dropzone*/}
                                                            <div
                                                                className="dropzone"
                                                                id="kt_modal_create_ticket_attachments"
                                                            >
                                                                {/*begin::Message*/}
                                                                <div className="dz-message needsclick align-items-center">
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
                                                                        <h3 className="fs-5 fw-bolder text-gray-900 mb-1">
                                                                            Drop files here or click to upload.
                                                                        </h3>
                                                                        <span className="fw-bold fs-7 text-gray-400">
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
                                                        <div className="mb-15 fv-row">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-stack">
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold me-5">
                                                                    <label className="fs-6">Notifications</label>
                                                                    <div className="fs-7 text-gray-400">
                                                                        Allow Notifications by Phone or Email
                                                                    </div>
                                                                </div>
                                                                {/*end::Label*/}
                                                                {/*begin::Checkboxes*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid me-10">
                                                                        <input
                                                                            className="form-check-input h-20px w-20px"
                                                                            type="checkbox"
                                                                            name="notifications[]"
                                                                            defaultValue="email"
                                                                            defaultChecked="checked"
                                                                        />
                                                                        <span className="form-check-label fw-bold">
                                                                            Email
                                                                        </span>
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid">
                                                                        <input
                                                                            className="form-check-input h-20px w-20px"
                                                                            type="checkbox"
                                                                            name="notifications[]"
                                                                            defaultValue="phone"
                                                                        />
                                                                        <span className="form-check-label fw-bold">
                                                                            Phone
                                                                        </span>
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Checkboxes*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="text-center">
                                                            <button
                                                                type="reset"
                                                                id="kt_modal_new_ticket_cancel"
                                                                className="btn btn-light me-3"
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                id="kt_modal_new_ticket_submit"
                                                                className="btn btn-primary"
                                                            >
                                                                <span className="indicator-label">Submit</span>
                                                                <span className="indicator-progress">
                                                                    Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                                </span>
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </form>
                                                    {/*end:Form*/}
                                                </div>
                                                {/*end::Modal body*/}
                                            </div>
                                            {/*end::Modal content*/}
                                        </div>
                                        {/*end::Modal dialog*/}
                                    </div>
                                    {/*end::Modal - Support Center - Create Ticket*/}
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

export default Post
