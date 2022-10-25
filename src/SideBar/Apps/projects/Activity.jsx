import React from 'react'
import ViewUserModal from '../../../CommonElements/ViewUserModal';
import NewTargetModal from '../../../CommonElements/NewTargetModal';
import { NavLink } from 'react-router-dom';

const Activity = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="page d-flex flex-row flex-column-fluid">
                    {/*begin::Wrapper*/}
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        {/*begin::Header*/}
                        <div id="kt_header" className="header">
                            {/*begin::Container*/}
                            <div className="container-fluid d-flex flex-stack">
                                {/*begin::Brand*/}
                                <div className="d-flex align-items-center me-5">
                                    {/*begin::Aside toggle*/}
                                    <div
                                        className="d-lg-none btn btn-icon btn-active-color-white w-30px h-30px ms-n2 me-3"
                                        id="kt_aside_toggle"
                                    >
                                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                                        <span className="svg-icon svg-icon-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                                    fill="black"
                                                />
                                                <path
                                                    opacity="0.3"
                                                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </div>
                                    {/*end::Aside  toggle*/}
                                    {/*begin::Logo*/}
                                    <NavLink to="../../demo14/dist/index.html">
                                        <img
                                            alt="Logo"
                                            src="/assets/media/logos/logo-2.svg"
                                            className="h-25px h-lg-30px"
                                        />
                                    </NavLink>
                                    {/*end::Logo*/}
                                    {/*begin::Nav*/}
                                    <div className="ms-5 ms-md-10">
                                        {/*begin::Toggle*/}
                                        <button
                                            type="button"
                                            className="btn btn-flex btn-active-color-white align-items-cenrer justify-content-center justify-content-md-between align-items-lg-cenrer flex-md-content-between bg-white bg-opacity-10 btn-color-gray-500 px-0 ps-md-6 pe-md-5 h-30px w-30px h-md-35px w-md-200px"
                                            data-kt-menu-trigger="click"
                                            data-kt-menu-placement="bottom-start"
                                        >
                                            <span className="d-none d-md-inline">Dashboard</span>
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                            <span className="svg-icon svg-icon-4 ms-md-4 me-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </button>
                                        {/*end::Toggle*/}
                                        {/*begin::Menu*/}
                                        <div
                                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg fw-bold w-200px pb-3"
                                            data-kt-menu="true"
                                        >
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-7 text-dark fw-bolder px-3 py-4">
                                                    Select department:
                                                </div>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mb-3 opacity-75" />
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <NavLink to="#" className="menu-link px-3">
                                                    Accounting &amp; Finance
                                                </NavLink>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <NavLink to="#" className="menu-link px-3">
                                                    Human Resources
                                                </NavLink>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <NavLink to="#" className="menu-link px-3">
                                                    Marketing
                                                </NavLink>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <NavLink to="#" className="menu-link px-3">
                                                    Warehouse
                                                </NavLink>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <NavLink to="#" className="menu-link px-3">
                                                    Production
                                                </NavLink>
                                            </div>
                                            {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu*/}
                                    </div>
                                    {/*end::Nav*/}
                                </div>
                                {/*end::Brand*/}
                                {/*begin::Topbar*/}
                                <div className="d-flex align-items-center">
                                    {/*begin::Topbar*/}
                                    <div className="d-flex align-items-center flex-shrink-0">
                                        {/*begin::Search*/}
                                        <div
                                            id="kt_header_search"
                                            className="d-flex align-items-stretch"
                                            data-kt-search-keypress="true"
                                            data-kt-search-min-length={2}
                                            data-kt-search-enter="enter"
                                            data-kt-search-layout="menu"
                                            data-kt-menu-trigger="auto"
                                            data-kt-menu-overflow="false"
                                            data-kt-menu-permanent="true"
                                            data-kt-menu-placement="bottom-end"
                                        >
                                            {/*begin::Search toggle*/}
                                            <div
                                                className="d-flex align-items-center"
                                                data-kt-search-element="toggle"
                                                id="kt_header_search_toggle"
                                            >
                                                <div className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
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
                                                </div>
                                            </div>
                                            {/*end::Search toggle*/}
                                            {/*begin::Menu*/}
                                            <div
                                                data-kt-search-element="content"
                                                className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
                                            >
                                                {/*begin::Wrapper*/}
                                                <div data-kt-search-element="wrapper">
                                                    {/*begin::Form*/}
                                                    <form
                                                        data-kt-search-element="form"
                                                        className="w-100 position-relative mb-3"
                                                        autoComplete="off"
                                                    >
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
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
                                                            className="form-control form-control-flush ps-10"
                                                            name="search"
                                                            defaultValue
                                                            placeholder="Search..."
                                                            data-kt-search-element="input"
                                                        />
                                                        {/*end::Input*/}
                                                        {/*begin::Spinner*/}
                                                        <span
                                                            className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                                                            data-kt-search-element="spinner"
                                                        >
                                                            <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                                                        </span>
                                                        {/*end::Spinner*/}
                                                        {/*begin::Reset*/}
                                                        <span
                                                            className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
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
                                                        {/*begin::Toolbar*/}
                                                        <div
                                                            className="position-absolute top-50 end-0 translate-middle-y"
                                                            data-kt-search-element="toolbar"
                                                        >
                                                            {/*begin::Preferences toggle*/}
                                                            <div
                                                                data-kt-search-element="preferences-show"
                                                                className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                                                                data-bs-toggle="tooltip"
                                                                title="Show search preferences"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                                                                <span className="svg-icon svg-icon-1">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                                            fill="black"
                                                                        />
                                                                        <path
                                                                            d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </div>
                                                            {/*end::Preferences toggle*/}
                                                            {/*begin::Advanced search toggle*/}
                                                            <div
                                                                data-kt-search-element="advanced-options-form-show"
                                                                className="btn btn-icon w-20px btn-sm btn-active-color-primary"
                                                                data-bs-toggle="tooltip"
                                                                title="Show more search options"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                                <span className="svg-icon svg-icon-2">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </div>
                                                            {/*end::Advanced search toggle*/}
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </form>
                                                    {/*end::Form*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator border-gray-200 mb-6" />
                                                    {/*end::Separator*/}
                                                    {/*begin::Recently viewed*/}
                                                    <div data-kt-search-element="results" className="d-none">
                                                        {/*begin::Items*/}
                                                        <div className="scroll-y mh-200px mh-lg-350px">
                                                            {/*begin::Category title*/}
                                                            <h3
                                                                className="fs-5 text-muted m-0 pb-5"
                                                                data-kt-search-element="category-title"
                                                            >
                                                                Users
                                                            </h3>
                                                            {/*end::Category title*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="/assets/media/avatars/150-1.jpg" alt />
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">Karina Clark</span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Marketing Manager
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="/assets/media/avatars/150-3.jpg" alt />
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">Olivia Bold</span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Software Engineer
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="/assets/media/avatars/150-8.jpg" alt />
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">Ana Clark</span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        UI/UX Designer
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="/assets/media/avatars/150-11.jpg" alt />
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">Nick Pitola</span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Art Director
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="/assets/media/avatars/150-12.jpg" alt />
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">Edward Kulnic</span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        System Administrator
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Category title*/}
                                                            <h3
                                                                className="fs-5 text-muted m-0 pt-5 pb-5"
                                                                data-kt-search-element="category-title"
                                                            >
                                                                Customers
                                                            </h3>
                                                            {/*end::Category title*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        <img
                                                                            className="w-20px h-20px"
                                                                            src="/assets/media/svg/brand-logos/volicity-9.svg"
                                                                            alt
                                                                        />
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">
                                                                        Company Rbranding
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        UI Design
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        <img
                                                                            className="w-20px h-20px"
                                                                            src="/assets/media/svg/brand-logos/tvit.svg"
                                                                            alt
                                                                        />
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">
                                                                        Company Re-branding
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Web Development
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        <img
                                                                            className="w-20px h-20px"
                                                                            src="/assets/media/svg/misc/infography.svg"
                                                                            alt
                                                                        />
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">
                                                                        Business Analytics App
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Administration
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        <img
                                                                            className="w-20px h-20px"
                                                                            src="/assets/media/svg/brand-logos/leaf.svg"
                                                                            alt
                                                                        />
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">
                                                                        EcoLeaf App Launch
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Marketing
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        <img
                                                                            className="w-20px h-20px"
                                                                            src="/assets/media/svg/brand-logos/tower.svg"
                                                                            alt
                                                                        />
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                                    <span className="fs-6 fw-bold">
                                                                        Tower Group Website
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        Google Adwords
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Category title*/}
                                                            <h3
                                                                className="fs-5 text-muted m-0 pt-5 pb-5"
                                                                data-kt-search-element="category-title"
                                                            >
                                                                Projects
                                                            </h3>
                                                            {/*end::Category title*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={7}
                                                                                    y={17}
                                                                                    width={6}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={7}
                                                                                    y={12}
                                                                                    width={10}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={7}
                                                                                    y={7}
                                                                                    width={6}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-bold">
                                                                        Si-Fi Project by AU Themes
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        #45670
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <rect
                                                                                    x={8}
                                                                                    y={9}
                                                                                    width={3}
                                                                                    height={10}
                                                                                    rx="1.5"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    opacity="0.5"
                                                                                    x={13}
                                                                                    y={5}
                                                                                    width={3}
                                                                                    height={14}
                                                                                    rx="1.5"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={18}
                                                                                    y={11}
                                                                                    width={3}
                                                                                    height={8}
                                                                                    rx="1.5"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={3}
                                                                                    y={13}
                                                                                    width={3}
                                                                                    height={6}
                                                                                    rx="1.5"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-bold">
                                                                        Shopix Mobile App Planning
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        #45690
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={6}
                                                                                    y={12}
                                                                                    width={7}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    fill="black"
                                                                                />
                                                                                <rect
                                                                                    x={6}
                                                                                    y={7}
                                                                                    width={12}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-bold">
                                                                        Finance Monitoring SAAS Discussion
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        #21090
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <NavLink
                                                                to="#"
                                                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                            >
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
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
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-bold">
                                                                        Dashboard Analitics Launch
                                                                    </span>
                                                                    <span className="fs-7 fw-bold text-muted">
                                                                        #34560
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </NavLink>
                                                            {/*end::Item*/}
                                                        </div>
                                                        {/*end::Items*/}
                                                    </div>
                                                    {/*end::Recently viewed*/}
                                                    {/*begin::Recently viewed*/}
                                                    <div className="mb-4" data-kt-search-element="main">
                                                        {/*begin::Heading*/}
                                                        <div className="d-flex flex-stack fw-bold mb-4">
                                                            {/*begin::Label*/}
                                                            <span className="text-muted fs-6 me-2">
                                                                Recently Searched:
                                                            </span>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Items*/}
                                                        <div className="scroll-y mh-200px mh-lg-325px">
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/electronics/elc004.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M15 17H9V20H15V17Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        BoomApp by Keenthemes
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #45789
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        "Kept API Project Meeting
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #84050
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
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
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        "KPI Monitoring App Launch
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #84250
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M20 8L12.5 5L5 14V19H20V8Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        Project Reference FAQ
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #67945
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        "FitPro App Development
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #84250
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
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
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        Shopix Mobile App
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #45690
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/*begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <span className="symbol-label bg-light">
                                                                        {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M20 8L12.5 5L5 14V19H20V8Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                                {/*end::Symbol*/}
                                                                {/*begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                    >
                                                                        "Landing UI Design" Launch
                                                                    </NavLink>
                                                                    <span className="fs-7 text-muted fw-bold">
                                                                        #24005
                                                                    </span>
                                                                </div>
                                                                {/*end::Title*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                        </div>
                                                        {/*end::Items*/}
                                                    </div>
                                                    {/*end::Recently viewed*/}
                                                    {/*begin::Empty*/}
                                                    <div
                                                        data-kt-search-element="empty"
                                                        className="text-center d-none"
                                                    >
                                                        {/*begin::Icon*/}
                                                        <div className="pt-10 pb-10">
                                                            {/*begin::Svg Icon | path: icons/duotune/files/fil024.svg*/}
                                                            <span className="svg-icon svg-icon-4x opacity-50">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                                                        fill="black"
                                                                    />
                                                                    <rect
                                                                        x="13.6993"
                                                                        y="13.6656"
                                                                        width="4.42828"
                                                                        height="1.73089"
                                                                        rx="0.865447"
                                                                        transform="rotate(45 13.6993 13.6656)"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </div>
                                                        {/*end::Icon*/}
                                                        {/*begin::Message*/}
                                                        <div className="pb-15 fw-bold">
                                                            <h3 className="text-gray-600 fs-5 mb-2">
                                                                No result found
                                                            </h3>
                                                            <div className="text-muted fs-7">
                                                                Please try again with a different query
                                                            </div>
                                                        </div>
                                                        {/*end::Message*/}
                                                    </div>
                                                    {/*end::Empty*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                                {/*begin::Preferences*/}
                                                <form
                                                    data-kt-search-element="advanced-options-form"
                                                    className="pt-1 d-none"
                                                >
                                                    {/*begin::Heading*/}
                                                    <h3 className="fw-bold text-dark mb-7">Advanced Search</h3>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-5">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm form-control-solid"
                                                            placeholder="Contains the word"
                                                            name="query"
                                                        />
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-5">
                                                        {/*begin::Radio group*/}
                                                        <div className="nav-group nav-group-fluid">
                                                            {/*begin::Option*/}
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="type"
                                                                    defaultValue="has"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                                    All
                                                                </span>
                                                            </label>
                                                            {/*end::Option*/}
                                                            {/*begin::Option*/}
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="type"
                                                                    defaultValue="users"
                                                                />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                    Users
                                                                </span>
                                                            </label>
                                                            {/*end::Option*/}
                                                            {/*begin::Option*/}
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="type"
                                                                    defaultValue="orders"
                                                                />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                    Orders
                                                                </span>
                                                            </label>
                                                            {/*end::Option*/}
                                                            {/*begin::Option*/}
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="type"
                                                                    defaultValue="projects"
                                                                />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                    Projects
                                                                </span>
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Radio group*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-5">
                                                        <input
                                                            type="text"
                                                            name="assignedto"
                                                            className="form-control form-control-sm form-control-solid"
                                                            placeholder="Assigned to"
                                                            defaultValue
                                                        />
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-5">
                                                        <input
                                                            type="text"
                                                            name="collaborators"
                                                            className="form-control form-control-sm form-control-solid"
                                                            placeholder="Collaborators"
                                                            defaultValue
                                                        />
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-5">
                                                        {/*begin::Radio group*/}
                                                        <div className="nav-group nav-group-fluid">
                                                            {/*begin::Option*/}
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="attachment"
                                                                    defaultValue="has"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                                    Has attachment
                                                                </span>
                                                            </label>
                                                            {/*end::Option*/}
                                                            {/*begin::Option*/}
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="attachment"
                                                                    defaultValue="any"
                                                                />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                    Any
                                                                </span>
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Radio group*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-5">
                                                        <select
                                                            name="timezone"
                                                            aria-label="Select a Timezone"
                                                            data-control="select2"
                                                            data-placeholder="date_period"
                                                            className="form-select form-select-sm form-select-solid"
                                                        >
                                                            <option value="next">Within the next</option>
                                                            <option value="last">Within the last</option>
                                                            <option value="between">Between</option>
                                                            <option value="on">On</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row mb-8">
                                                        {/*begin::Col*/}
                                                        <div className="col-6">
                                                            <input
                                                                type="number"
                                                                name="date_number"
                                                                className="form-control form-control-sm form-control-solid"
                                                                placeholder="Lenght"
                                                                defaultValue
                                                            />
                                                        </div>
                                                        {/*end::Col*/}
                                                        {/*begin::Col*/}
                                                        <div className="col-6">
                                                            <select
                                                                name="date_typer"
                                                                aria-label="Select a Timezone"
                                                                data-control="select2"
                                                                data-placeholder="Period"
                                                                className="form-select form-select-sm form-select-solid"
                                                            >
                                                                <option value="days">Days</option>
                                                                <option value="weeks">Weeks</option>
                                                                <option value="months">Months</option>
                                                                <option value="years">Years</option>
                                                            </select>
                                                        </div>
                                                        {/*end::Col*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex justify-content-end">
                                                        <button
                                                            type="reset"
                                                            className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2"
                                                            data-kt-search-element="advanced-options-form-cancel"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <NavLink
                                                            to="../../demo14/dist/pages/search/horizontal.html"
                                                            className="btn btn-sm fw-bolder btn-primary"
                                                            data-kt-search-element="advanced-options-form-search"
                                                        >
                                                            Search
                                                        </NavLink>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </form>
                                                {/*end::Preferences*/}
                                                {/*begin::Preferences*/}
                                                <form
                                                    data-kt-search-element="preferences"
                                                    className="pt-1 d-none"
                                                >
                                                    {/*begin::Heading*/}
                                                    <h3 className="fw-bold text-dark mb-7">
                                                        Search Preferences
                                                    </h3>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="pb-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                                                Projects
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                                defaultChecked="checked"
                                                            />
                                                        </label>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                                                Targets
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                                defaultChecked="checked"
                                                            />
                                                        </label>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                                                Affiliate Programs
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </label>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                                                Referrals
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                                defaultChecked="checked"
                                                            />
                                                        </label>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                                                Users
                                                            </span>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </label>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex justify-content-end pt-7">
                                                        <button
                                                            type="reset"
                                                            className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2"
                                                            data-kt-search-element="preferences-dismiss"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-sm fw-bolder btn-primary"
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </form>
                                                {/*end::Preferences*/}
                                            </div>
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Search*/}
                                        {/*begin::Activities*/}
                                        <div className="d-flex align-items-center ms-1">
                                            {/*begin::Drawer toggle*/}
                                            <div
                                                className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px"
                                                id="kt_activities_toggle"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                                <span className="svg-icon svg-icon-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            x={8}
                                                            y={9}
                                                            width={3}
                                                            height={10}
                                                            rx="1.5"
                                                            fill="black"
                                                        />
                                                        <rect
                                                            opacity="0.5"
                                                            x={13}
                                                            y={5}
                                                            width={3}
                                                            height={14}
                                                            rx="1.5"
                                                            fill="black"
                                                        />
                                                        <rect
                                                            x={18}
                                                            y={11}
                                                            width={3}
                                                            height={8}
                                                            rx="1.5"
                                                            fill="black"
                                                        />
                                                        <rect
                                                            x={3}
                                                            y={13}
                                                            width={3}
                                                            height={6}
                                                            rx="1.5"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                            </div>
                                            {/*end::Drawer toggle*/}
                                        </div>
                                        {/*end::Activities*/}
                                        {/*begin::Chat*/}
                                        <div className="d-flex align-items-center ms-1">
                                            {/*begin::Menu wrapper*/}
                                            <div
                                                className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px position-relative"
                                                id="kt_drawer_chat_toggle"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                <span className="svg-icon svg-icon-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            opacity="0.3"
                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                            fill="black"
                                                        />
                                                        <rect
                                                            x={6}
                                                            y={12}
                                                            width={7}
                                                            height={2}
                                                            rx={1}
                                                            fill="black"
                                                        />
                                                        <rect
                                                            x={6}
                                                            y={7}
                                                            width={12}
                                                            height={2}
                                                            rx={1}
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                                <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                                            </div>
                                            {/*end::Menu wrapper*/}
                                        </div>
                                        {/*end::Chat*/}
                                        {/*begin::Quick links*/}
                                        <div className="d-flex align-items-center ms-1">
                                            {/*begin::Menu wrapper*/}
                                            <div
                                                className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-attach="parent"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                <span className="svg-icon svg-icon-2">
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
                                            </div>
                                            {/*begin::Menu*/}
                                            <div
                                                className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
                                                data-kt-menu="true"
                                            >
                                                {/*begin::Heading*/}
                                                <div
                                                    className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                                                    style={{
                                                        backgroundImage: 'url("assets/media/misc/pattern-1.jpg")'
                                                    }}
                                                >
                                                    {/*begin::Title*/}
                                                    <h3 className="text-white fw-bold mb-3">Quick Links</h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Status*/}
                                                    <span className="badge bg-primary py-2 px-3">
                                                        25 pending tasks
                                                    </span>
                                                    {/*end::Status*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin:Nav*/}
                                                <div className="row g-0">
                                                    {/*begin:Item*/}
                                                    <div className="col-6">
                                                        <NavLink
                                                            to="../../demo14/dist/apps/projects/budget.html"
                                                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/finance/fin009.svg*/}
                                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            <span className="fs-5 fw-bold text-gray-800 mb-0">
                                                                Accounting
                                                            </span>
                                                            <span className="fs-7 text-gray-400">eCommerce</span>
                                                        </NavLink>
                                                    </div>
                                                    {/*end:Item*/}
                                                    {/*begin:Item*/}
                                                    <div className="col-6">
                                                        <NavLink
                                                            to="../../demo14/dist/apps/projects/settings.html"
                                                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            <span className="fs-5 fw-bold text-gray-800 mb-0">
                                                                Administration
                                                            </span>
                                                            <span className="fs-7 text-gray-400">Console</span>
                                                        </NavLink>
                                                    </div>
                                                    {/*end:Item*/}
                                                    {/*begin:Item*/}
                                                    <div className="col-6">
                                                        <NavLink
                                                            to="../../demo14/dist/apps/projects/list.html"
                                                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                                                        fill="black"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                            <span className="fs-5 fw-bold text-gray-800 mb-0">
                                                                Projects
                                                            </span>
                                                            <span className="fs-7 text-gray-400">
                                                                Pending Tasks
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                    {/*end:Item*/}
                                                    {/*begin:Item*/}
                                                    <div className="col-6">
                                                        <NavLink
                                                            to="../../demo14/dist/apps/projects/users.html"
                                                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                                                        >
                                                            {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
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
                                                            <span className="fs-5 fw-bold text-gray-800 mb-0">
                                                                Customers
                                                            </span>
                                                            <span className="fs-7 text-gray-400">Latest cases</span>
                                                        </NavLink>
                                                    </div>
                                                    {/*end:Item*/}
                                                </div>
                                                {/*end:Nav*/}
                                                {/*begin::View more*/}
                                                <div className="py-2 text-center border-top">
                                                    <NavLink
                                                        to="../../demo14/dist/pages/profile/activity.html"
                                                        className="btn btn-color-gray-600 btn-active-color-primary"
                                                    >
                                                        View All
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                        <span className="svg-icon svg-icon-5">
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
                                                    </NavLink>
                                                </div>
                                                {/*end::View more*/}
                                            </div>
                                            {/*end::Menu*/}
                                            {/*end::Menu wrapper*/}
                                        </div>
                                        {/*end::Quick links*/}
                                        {/*begin::User*/}
                                        <div
                                            className="d-flex align-items-center ms-1"
                                            id="kt_header_user_menu_toggle"
                                        >
                                            {/*begin::User info*/}
                                            <div
                                                className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-attach="parent"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                {/*begin::Name*/}
                                                <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
                                                    <span className="text-muted fs-8 fw-bold lh-1 mb-1">
                                                        Max
                                                    </span>
                                                    <span className="text-white fs-8 fw-bolder lh-1">
                                                        UX Designer
                                                    </span>
                                                </div>
                                                {/*end::Name*/}
                                                {/*begin::Symbol*/}
                                                <div className="symbol symbol-30px symbol-md-40px">
                                                    <img src="/assets/media/avatars/150-26.jpg" alt="image" />
                                                </div>
                                                {/*end::Symbol*/}
                                            </div>
                                            {/*end::User info*/}
                                            {/*begin::Menu*/}
                                            <div
                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                                                data-kt-menu="true"
                                            >
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <div className="menu-content d-flex align-items-center px-3">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px me-5">
                                                            <img alt="Logo" src="/assets/media/avatars/150-26.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Username*/}
                                                        <div className="d-flex flex-column">
                                                            <div className="fw-bolder d-flex align-items-center fs-5">
                                                                Max Smith
                                                                <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                                                                    Pro
                                                                </span>
                                                            </div>
                                                            <NavLink
                                                                to="#"
                                                                className="fw-bold text-muted text-hover-primary fs-7"
                                                            >
                                                                max@kt.com
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Username*/}
                                                    </div>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator my-2" />
                                                {/*end::Menu separator*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-5">
                                                    <NavLink
                                                        to="../../demo14/dist/account/overview.html"
                                                        className="menu-link px-5"
                                                    >
                                                        My Profile
                                                    </NavLink>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-5">
                                                    <NavLink
                                                        to="../../demo14/dist/apps/projects/list.html"
                                                        className="menu-link px-5"
                                                    >
                                                        <span className="menu-text">My Projects</span>
                                                        <span className="menu-badge">
                                                            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
                                                                3
                                                            </span>
                                                        </span>
                                                    </NavLink>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div
                                                    className="menu-item px-5"
                                                    data-kt-menu-trigger="hover"
                                                    data-kt-menu-placement="left-start"
                                                >
                                                    <NavLink to="#" className="menu-link px-5">
                                                        <span className="menu-title">My Subscription</span>
                                                        <span className="menu-arrow" />
                                                    </NavLink>
                                                    {/*begin::Menu sub*/}
                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/referrals.html"
                                                                className="menu-link px-5"
                                                            >
                                                                Referrals
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/billing.html"
                                                                className="menu-link px-5"
                                                            >
                                                                Billing
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/statements.html"
                                                                className="menu-link px-5"
                                                            >
                                                                Payments
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/statements.html"
                                                                className="menu-link d-flex flex-stack px-5"
                                                            >
                                                                Statements
                                                                <i
                                                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                                                    data-bs-toggle="tooltip"
                                                                    title="View your statements"
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu separator*/}
                                                        <div className="separator my-2" />
                                                        {/*end::Menu separator*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <div className="menu-content px-3">
                                                                <label className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input
                                                                        className="form-check-input w-30px h-20px"
                                                                        type="checkbox"
                                                                        defaultValue={1}
                                                                        defaultChecked="checked"
                                                                        name="notifications"
                                                                    />
                                                                    <span className="form-check-label text-muted fs-7">
                                                                        Notifications
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                    </div>
                                                    {/*end::Menu sub*/}
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-5">
                                                    <NavLink
                                                        to="../../demo14/dist/account/statements.html"
                                                        className="menu-link px-5"
                                                    >
                                                        My Statements
                                                    </NavLink>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator my-2" />
                                                {/*end::Menu separator*/}
                                                {/*begin::Menu item*/}
                                                <div
                                                    className="menu-item px-5"
                                                    data-kt-menu-trigger="hover"
                                                    data-kt-menu-placement="left-start"
                                                >
                                                    <NavLink to="#" className="menu-link px-5">
                                                        <span className="menu-title position-relative">
                                                            Language
                                                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                                                English
                                                                <img
                                                                    className="w-15px h-15px rounded-1 ms-2"
                                                                    src="/assets/media/flags/united-states.svg"
                                                                    alt
                                                                />
                                                            </span>
                                                        </span>
                                                    </NavLink>
                                                    {/*begin::Menu sub*/}
                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/settings.html"
                                                                className="menu-link d-flex px-5 active"
                                                            >
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img
                                                                        className="rounded-1"
                                                                        src="/assets/media/flags/united-states.svg"
                                                                        alt
                                                                    />
                                                                </span>
                                                                English
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/settings.html"
                                                                className="menu-link d-flex px-5"
                                                            >
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img
                                                                        className="rounded-1"
                                                                        src="/assets/media/flags/spain.svg"
                                                                        alt
                                                                    />
                                                                </span>
                                                                Spanish
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/settings.html"
                                                                className="menu-link d-flex px-5"
                                                            >
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img
                                                                        className="rounded-1"
                                                                        src="/assets/media/flags/germany.svg"
                                                                        alt
                                                                    />
                                                                </span>
                                                                German
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/settings.html"
                                                                className="menu-link d-flex px-5"
                                                            >
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img
                                                                        className="rounded-1"
                                                                        src="/assets/media/flags/japan.svg"
                                                                        alt
                                                                    />
                                                                </span>
                                                                Japanese
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <NavLink
                                                                to="../../demo14/dist/account/settings.html"
                                                                className="menu-link d-flex px-5"
                                                            >
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img
                                                                        className="rounded-1"
                                                                        src="/assets/media/flags/france.svg"
                                                                        alt
                                                                    />
                                                                </span>
                                                                French
                                                            </NavLink>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                    </div>
                                                    {/*end::Menu sub*/}
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-5 my-1">
                                                    <NavLink
                                                        to="../../demo14/dist/account/settings.html"
                                                        className="menu-link px-5"
                                                    >
                                                        Account Settings
                                                    </NavLink>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-5">
                                                    <NavLink
                                                        to="../../demo14/dist/authentication/flows/basic/sign-in.html"
                                                        className="menu-link px-5"
                                                    >
                                                        Sign Out
                                                    </NavLink>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator my-2" />
                                                {/*end::Menu separator*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-5">
                                                    <div className="menu-content px-5">
                                                        <label
                                                            className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                                                            htmlFor="kt_user_menu_dark_mode_toggle"
                                                        >
                                                            <input
                                                                className="form-check-input w-30px h-20px"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                                name="mode"
                                                                id="kt_user_menu_dark_mode_toggle"
                                                                data-kt-url="../../demo14/dist/index.html"
                                                            />
                                                            <span className="pulse-ring ms-n1" />
                                                            <span className="form-check-label text-gray-600 fs-7">
                                                                Dark Mode
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*end::Menu item*/}
                                            </div>
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::User */}
                                    </div>
                                    {/*end::Topbar*/}
                                </div>
                                {/*end::Topbar*/}
                            </div>
                            {/*end::Container*/}
                        </div>
                        {/*end::Header*/}
                        {/*begin::Content wrapper*/}
                        <div className="d-flex flex-column-fluid">
                            {/*begin::Aside*/}
                            <div
                                id="kt_aside"
                                className="aside card"
                                data-kt-drawer="true"
                                data-kt-drawer-name="aside"
                                data-kt-drawer-activate="{default: true, lg: false}"
                                data-kt-drawer-overlay="true"
                                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                                data-kt-drawer-direction="start"
                                data-kt-drawer-toggle="#kt_aside_toggle"
                            >
                                {/*begin::Aside menu*/}
                                <div className="aside-menu flex-column-fluid px-5">
                                    {/*begin::Aside Menu*/}
                                    <div
                                        className="hover-scroll-overlay-y my-5 pe-4 me-n4"
                                        id="kt_aside_menu_wrapper"
                                        data-kt-scroll="true"
                                        data-kt-scroll-activate="{default: false, lg: true}"
                                        data-kt-scroll-height="auto"
                                        data-kt-scroll-dependencies="#kt_header, #kt_aside_footer"
                                        data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
                                        data-kt-scroll-offset="{lg: '75px'}"
                                    >
                                        {/*begin::Menu*/}
                                        <div
                                            className="menu menu-column menu-rounded fw-bold fs-6"
                                            id="#kt_aside_menu"
                                            data-kt-menu="true"
                                        >
                                            <div className="menu-item">
                                                <div className="menu-content pb-2">
                                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                                                        Dashboard
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <NavLink className="menu-link" to="../../demo14/dist/index.html">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    <span className="menu-title">Default</span>
                                                </NavLink>
                                            </div>
                                            <div className="menu-item">
                                                <NavLink
                                                    className="menu-link"
                                                    to="../../demo14/dist/landing.html"
                                                >
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com001.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M19 10.4C19 10.3 19 10.2 19 10C19 8.9 18.1 8 17 8H16.9C15.6 6.2 14.6 4.29995 13.9 2.19995C13.3 2.09995 12.6 2 12 2C11.9 2 11.8 2 11.7 2C12.4 4.6 13.5 7.10005 15.1 9.30005C15 9.50005 15 9.7 15 10C15 11.1 15.9 12 17 12C17.1 12 17.3 12 17.4 11.9C18.6 13 19.9 14 21.4 14.8C21.4 14.8 21.5 14.8 21.5 14.9C21.7 14.2 21.8 13.5 21.9 12.7C20.9 12.1 19.9 11.3 19 10.4Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M12 15C11 13.1 10.2 11.2 9.60001 9.19995C9.90001 8.89995 10 8.4 10 8C10 7.1 9.40001 6.39998 8.70001 6.09998C8.40001 4.99998 8.20001 3.90005 8.00001 2.80005C7.30001 3.10005 6.70001 3.40002 6.20001 3.90002C6.40001 4.80002 6.50001 5.6 6.80001 6.5C6.40001 6.9 6.10001 7.4 6.10001 8C6.10001 9 6.80001 9.8 7.80001 10C8.30001 11.6 9.00001 13.2 9.70001 14.7C7.10001 13.2 4.70001 11.5 2.40001 9.5C2.20001 10.3 2.10001 11.1 2.10001 11.9C4.60001 13.9 7.30001 15.7 10.1 17.2C10.2 18.2 11 19 12 19C12.6 20 13.2 20.9 13.9 21.8C14.6 21.7 15.3 21.5 15.9 21.2C15.4 20.5 14.9 19.8 14.4 19.1C15.5 19.5 16.5 19.9 17.6 20.2C18.3 19.8 18.9 19.2 19.4 18.6C17.6 18.1 15.7 17.5 14 16.7C13.9 15.8 13.1 15 12 15Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Landing Page</span>
                                                </NavLink>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-content pt-8 pb-2">
                                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                                                        Crafted
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Pages</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Profile</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/profile/overview.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Overview</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/profile/projects.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Projects</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/profile/campaigns.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Campaigns</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/profile/documents.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Documents</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/profile/followers.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Followers</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/profile/activity.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Activity</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Wizards</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/horizontal.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Horizontal</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/vertical.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Vertical</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/two-factor-authentication.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Two Factor Auth</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/create-app.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create App</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/create-campaign.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create Campaign</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/create-account.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create Account</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/create-project.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create Project</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/wizards/offer-a-deal.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Offer a Deal</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Search</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/search/horizontal.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Horizontal</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/search/vertical.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Vertical</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/search/users.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Users</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/search/select-location.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Location</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Blog</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/blog/home.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Blog Home</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/blog/post.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Blog Post</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/pages/about.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">About Us</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/pages/contact.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Contact Us</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/pages/team.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Our Team</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/pages/licenses.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Licenses</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/pages/sitemap.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Sitemap</span>
                                                        </NavLink>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Pricing</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/pricing/pricing-1.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Pricing 1</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/pricing/pricing-2.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Pricing 2</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Careers</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/careers/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Careers List</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/careers/apply.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Careers Apply</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">FAQ</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/faq/classic.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Classic</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/pages/faq/extended.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Extended</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com013.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={8}
                                                                    y={3}
                                                                    width={8}
                                                                    height={8}
                                                                    rx={4}
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Account</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/overview.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Overview</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/settings.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Settings</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/security.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Security</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/billing.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Billing</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/statements.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Statements</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/referrals.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Referrals</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/api-keys.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">API Keys</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/account/logs.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Logs</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/technology/teh004.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Authentication</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Basic Layout</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/basic/sign-in.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sign-in</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/basic/sign-up.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sign-up</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/basic/two-steps.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Two-steps</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/basic/password-reset.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Password Reset</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/basic/new-password.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">New Password</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Aside Layout</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/aside/sign-in.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sign-in</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/aside/sign-up.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sign-up</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/aside/two-steps.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Two-steps</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/aside/password-reset.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Password Reset</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/aside/new-password.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">New Password</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Dark Layout</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/dark/sign-in.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sign-in</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/dark/sign-up.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sign-up</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/dark/two-steps.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Two-steps</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/dark/password-reset.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Password Reset</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/layouts/dark/new-password.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">New Password</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/extended/multi-steps-sign-up.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Multi-steps Sign-up</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/extended/two-factor-authentication.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Two Factor Auth</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/extended/free-trial-sign-up.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Free Trial Sign-up</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/extended/coming-soon.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Coming Soon</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/general/welcome.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Welcome Message</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/general/verify-email.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Verify Email</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/general/password-confirmation.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">
                                                                Password Confirmation
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/general/deactivation.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Account Deactivation</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/general/error-404.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Error 404</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/authentication/general/error-500.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Error 500</span>
                                                        </NavLink>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Email Templates</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/email/verify-email.html"
                                                                    target="blank"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Verify Email</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/email/invitation.html"
                                                                    target="blank"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Account Invitation
                                                                    </span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/email/password-reset.html"
                                                                    target="blank"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Password Reset</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/authentication/email/password-change.html"
                                                                    target="blank"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Password Changed</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/art/art009.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M21 18.3V4H20H5C4.4 4 4 4.4 4 5V20C10.9 20 16.7 15.6 19 9.5V18.3C18.4 18.6 18 19.3 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 19.3 21.6 18.6 21 18.3Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M22 4C22 2.9 21.1 2 20 2C18.9 2 18 2.9 18 4C18 4.7 18.4 5.29995 18.9 5.69995C18.1 12.6 12.6 18.2 5.70001 18.9C5.30001 18.4 4.7 18 4 18C2.9 18 2 18.9 2 20C2 21.1 2.9 22 4 22C4.8 22 5.39999 21.6 5.79999 20.9C13.8 20.1 20.1 13.7 20.9 5.80005C21.6 5.40005 22 4.8 22 4Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Modals</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">General</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/general/invite-friends.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Invite Friends</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/general/view-users.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">View Users</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/general/select-users.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Select Users</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/general/upgrade-plan.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Upgrade Plan</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/general/share-earn.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Share &amp; Earn</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Forms</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/forms/new-target.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">New Target</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/forms/new-card.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">New Card</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/forms/new-address.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">New Address</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/forms/create-api-key.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create API Key</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Wizards</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/wizards/create-app.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create App</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/wizards/create-campaign.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create Campaign</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/wizards/create-account.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Create Business Acc
                                                                    </span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/wizards/create-project.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Create Project</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/wizards/offer-a-deal.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Offer a Deal</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/wizards/two-factor-authentication.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Two Factor Auth</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Search</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/search/users.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Users</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/modals/search/select-location.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Select Location</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen022.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Widgets</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/widgets/lists.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Lists</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/widgets/statistics.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Statistics</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/widgets/charts.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Charts</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/widgets/mixed.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Mixed</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/widgets/tables.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Tables</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/widgets/feeds.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Feeds</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-content pt-8 pb-2">
                                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                                                        Apps
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item here show menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    </span>
                                                    <span className="menu-title">Projects</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/list.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">My Projects</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/project.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">View Project</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/targets.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Targets</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/budget.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Budget</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/users.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Users</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/files.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Files</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link active"
                                                            to="../../demo14/dist/apps/projects/activity.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Activity</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/projects/settings.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Settings</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm001.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">eCommerce</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Catalog</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/products.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Products</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/categories.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Categories</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/add-product.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Add Product</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-product.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Edit Product</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/add-category.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Add Category</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/ecommerce/catalog/edit-category.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Edit Category</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="#"
                                                            title="Coming soon"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Sales</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="#"
                                                            title="Coming soon"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Customers</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="#"
                                                            title="Coming soon"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Reports</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="#"
                                                            title="Coming soon"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Settings</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion mb-1"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">User Management</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion mb-1"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Users</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/user-management/users/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Users List</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/user-management/users/view.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">View User</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Roles</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/user-management/roles/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Roles List</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/user-management/roles/view.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">View Role</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/user-management/permissions.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Permissions</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Inbox</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/inbox/listing.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Messages</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/inbox/compose.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Compose</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/inbox/reply.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">View &amp; Reply</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x={6}
                                                                    y={12}
                                                                    width={7}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x={6}
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Chat</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/chat/private.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Private Chat</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/chat/group.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Group Chat</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/chat/drawer.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Drawer Chat</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    </span>
                                                    <span className="menu-title">Customers</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/customers/getting-started.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Getting Started</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/customers/list.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Customer Listing</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/customers/view.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Customer Details</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/files/fil025.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">File Manager</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/file-manager/folders.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Folders</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/file-manager/files.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Files</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/file-manager/blank.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Blank Directory</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/file-manager/settings.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Settings</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    </span>
                                                    <span className="menu-title">Invoice Manager</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">View Invoices</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/invoices/view/invoice-1.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Invoice 1</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/invoices/view/invoice-2.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Invoice 2</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/invoices/create.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Create Invoice</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Subscriptions</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/subscriptions/getting-started.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Getting Started</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/subscriptions/list.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Subscription List</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/subscriptions/add.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Add Subscription</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/subscriptions/view.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">View Subscription</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion mb-1"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    <span className="menu-title">Support Center</span>
                                                    <span className="menu-arrow" />
                                                </span>
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/support-center/overview.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Overview</span>
                                                        </NavLink>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion mb-1"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Tickets</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/support-center/tickets/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Tickets List</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/support-center/tickets/view.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">View Ticket</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-kt-menu-trigger="click"
                                                        className="menu-item menu-accordion mb-1"
                                                    >
                                                        <span className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Tutorials</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        <div className="menu-sub menu-sub-accordion">
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/support-center/tutorials/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Tutorials List</span>
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-item">
                                                                <NavLink
                                                                    className="menu-link"
                                                                    to="../../demo14/dist/apps/support-center/tutorials/post.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Tutorial Post</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/support-center/faq.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">FAQ</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/support-center/licenses.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Licenses</span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="menu-item">
                                                        <NavLink
                                                            className="menu-link"
                                                            to="../../demo14/dist/apps/support-center/contact.html"
                                                        >
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot" />
                                                            </span>
                                                            <span className="menu-title">Contact Us</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <NavLink
                                                    className="menu-link"
                                                    to="../../demo14/dist/apps/calendar.html"
                                                >
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                        <span className="svg-icon svg-icon-2">
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
                                                    </span>
                                                    <span className="menu-title">Calendar</span>
                                                </NavLink>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-content pt-8 pb-0">
                                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                                                        Layout
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <NavLink
                                                    className="menu-link"
                                                    to="https://preview.keenthemes.com/metronic8/demo14/layout-builder.html"
                                                    title="Build your layout and export HTML for server side integration"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover"
                                                    data-bs-dismiss="click"
                                                    data-bs-placement="right"
                                                >
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Layout Builder</span>
                                                </NavLink>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-content">
                                                    <div className="separator mx-1 my-4" />
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <NavLink
                                                    className="menu-link"
                                                    to="../../demo14/dist/documentation/getting-started/changelog.html"
                                                >
                                                    <span className="menu-icon">
                                                        {/*begin::Svg Icon | path: icons/duotune/coding/cod003.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                    <span className="menu-title">Changelog v8.0.32</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                        {/*end::Menu*/}
                                    </div>
                                </div>
                                {/*end::Aside menu*/}
                                {/*begin::Footer*/}
                                <div
                                    className="aside-footer flex-column-auto pt-5 pb-7 px-5"
                                    id="kt_aside_footer"
                                >
                                    <NavLink
                                        to="../../demo14/dist/documentation/getting-started.html"
                                        className="btn btn-bg-light btn-color-gray-500 btn-active-color-gray-900 w-100"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-dismiss-="click"
                                        title="200+ in-house components and 3rd-party plugins"
                                    >
                                        <span className="btn-label">Docs &amp; Components</span>
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                                        <span className="svg-icon btn-icon svg-icon-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    opacity="0.3"
                                                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                                    fill="black"
                                                />
                                                <rect x={7} y={17} width={6} height={2} rx={1} fill="black" />
                                                <rect
                                                    x={7}
                                                    y={12}
                                                    width={10}
                                                    height={2}
                                                    rx={1}
                                                    fill="black"
                                                />
                                                <rect x={7} y={7} width={6} height={2} rx={1} fill="black" />
                                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </NavLink>
                                </div>
                                {/*end::Footer*/}
                            </div>
                            {/*end::Aside*/}
                            {/*begin::Container*/}
                            <div className="d-flex flex-column flex-column-fluid container-fluid">
                                {/*begin::Toolbar*/}
                                <div className="toolbar mb-5 mb-lg-7" id="kt_toolbar">
                                    {/*begin::Page title*/}
                                    <div className="page-title d-flex flex-column me-3">
                                        {/*begin::Title*/}
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">
                                            Project Activity
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
                                            <li className="breadcrumb-item text-gray-500">Activity</li>
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
                                                id="kt_menu_61b9c7b4b2417"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7b4b2417"
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
                                    {/*begin::Navbar*/}
                                    <div className="card mb-5 mb-xxl-8">
                                        <div className="card-body pt-9 pb-0">
                                            {/*begin::Details*/}
                                            <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
                                                {/*begin::Image*/}
                                                <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                                                    <img
                                                        className="mw-50px mw-lg-75px"
                                                        src="/assets/media/svg/brand-logos/volicity-9.svg"
                                                        alt="image"
                                                    />
                                                </div>
                                                {/*end::Image*/}
                                                {/*begin::Wrapper*/}
                                                <div className="flex-grow-1">
                                                    {/*begin::Head*/}
                                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                        {/*begin::Details*/}
                                                        <div className="d-flex flex-column">
                                                            {/*begin::Status*/}
                                                            <div className="d-flex align-items-center mb-1">
                                                                <NavLink
                                                                    to="#"
                                                                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3"
                                                                >
                                                                    CRM Dashboard
                                                                </NavLink>
                                                                <span className="badge badge-light-success me-auto">
                                                                    In Progress
                                                                </span>
                                                            </div>
                                                            {/*end::Status*/}
                                                            {/*begin::Description*/}
                                                            <div className="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                                                                #1 Tool to get started with Web Apps any Kind &amp;
                                                                size
                                                            </div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Details*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex mb-4">
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-bg-light btn-active-color-primary me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_users_search"
                                                            >
                                                                Add User
                                                            </NavLink>
                                                            <NavLink
                                                                to="#"
                                                                className="btn btn-sm btn-primary me-3"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_new_target"
                                                            >
                                                                Add Target
                                                            </NavLink>
                                                            {/*begin::Menu*/}
                                                            <div className="me-0">
                                                                <button
                                                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                                                    data-kt-menu-trigger="click"
                                                                    data-kt-menu-placement="bottom-end"
                                                                >
                                                                    <i className="bi bi-three-dots fs-3" />
                                                                </button>
                                                                {/*begin::Menu 3*/}
                                                                <div
                                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                                                                    data-kt-menu="true"
                                                                >
                                                                    {/*begin::Heading*/}
                                                                    <div className="menu-item px-3">
                                                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                                                            Payments
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Heading*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            Create Invoice
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink to="#" className="menu-link flex-stack px-3">
                                                                            Create Payment
                                                                            <i
                                                                                className="fas fa-exclamation-circle ms-2 fs-7"
                                                                                data-bs-toggle="tooltip"
                                                                                title="Specify a target name for future usage and reference"
                                                                            />
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            Generate Bill
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div
                                                                        className="menu-item px-3"
                                                                        data-kt-menu-trigger="hover"
                                                                        data-kt-menu-placement="right-end"
                                                                    >
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            <span className="menu-title">Subscription</span>
                                                                            <span className="menu-arrow" />
                                                                        </NavLink>
                                                                        {/*begin::Menu sub*/}
                                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <NavLink to="#" className="menu-link px-3">
                                                                                    Plans
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <NavLink to="#" className="menu-link px-3">
                                                                                    Billing
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <NavLink to="#" className="menu-link px-3">
                                                                                    Statements
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                            {/*begin::Menu separator*/}
                                                                            <div className="separator my-2" />
                                                                            {/*end::Menu separator*/}
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <div className="menu-content px-3">
                                                                                    {/*begin::Switch*/}
                                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                        {/*begin::Input*/}
                                                                                        <input
                                                                                            className="form-check-input w-30px h-20px"
                                                                                            type="checkbox"
                                                                                            defaultValue={1}
                                                                                            defaultChecked="checked"
                                                                                            name="notifications"
                                                                                        />
                                                                                        {/*end::Input*/}
                                                                                        {/*end::Label*/}
                                                                                        <span className="form-check-label text-muted fs-6">
                                                                                            Recuring
                                                                                        </span>
                                                                                        {/*end::Label*/}
                                                                                    </label>
                                                                                    {/*end::Switch*/}
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Menu item*/}
                                                                        </div>
                                                                        {/*end::Menu sub*/}
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3 my-1">
                                                                        <NavLink to="#" className="menu-link px-3">
                                                                            Settings
                                                                        </NavLink>
                                                                    </div>
                                                                    {/*end::Menu item*/}
                                                                </div>
                                                                {/*end::Menu 3*/}
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Head*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex flex-wrap justify-content-start">
                                                        {/*begin::Stats*/}
                                                        <div className="d-flex flex-wrap">
                                                            {/*begin::Stat*/}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/*begin::Number*/}
                                                                <div className="d-flex align-items-center">
                                                                    <div className="fs-4 fw-bolder">29 Jan, 2021</div>
                                                                </div>
                                                                {/*end::Number*/}
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                    Due Date
                                                                </div>
                                                                {/*end::Label*/}
                                                            </div>
                                                            {/*end::Stat*/}
                                                            {/*begin::Stat*/}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/*begin::Number*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
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
                                                                                width={13}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(-90 11 18)"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div
                                                                        className="fs-4 fw-bolder"
                                                                        data-kt-countup="true"
                                                                        data-kt-countup-value={75}
                                                                    >
                                                                        0
                                                                    </div>
                                                                </div>
                                                                {/*end::Number*/}
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                    Open Tasks
                                                                </div>
                                                                {/*end::Label*/}
                                                            </div>
                                                            {/*end::Stat*/}
                                                            {/*begin::Stat*/}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/*begin::Number*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                                    <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <rect
                                                                                opacity="0.5"
                                                                                x={13}
                                                                                y={6}
                                                                                width={13}
                                                                                height={2}
                                                                                rx={1}
                                                                                transform="rotate(90 13 6)"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div
                                                                        className="fs-4 fw-bolder"
                                                                        data-kt-countup="true"
                                                                        data-kt-countup-value={15000}
                                                                        data-kt-countup-prefix="$"
                                                                    >
                                                                        0
                                                                    </div>
                                                                </div>
                                                                {/*end::Number*/}
                                                                {/*begin::Label*/}
                                                                <div className="fw-bold fs-6 text-gray-400">
                                                                    Budget Spent
                                                                </div>
                                                                {/*end::Label*/}
                                                            </div>
                                                            {/*end::Stat*/}
                                                        </div>
                                                        {/*end::Stats*/}
                                                        {/*begin::Users*/}
                                                        <div className="symbol-group symbol-hover mb-3">
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
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Michael Eberon"
                                                            >
                                                                <img
                                                                    alt="Pic"
                                                                    src="/assets/media/avatars/150-12.jpg"
                                                                />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Michelle Swanston"
                                                            >
                                                                <img
                                                                    alt="Pic"
                                                                    src="/assets/media/avatars/150-13.jpg"
                                                                />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Francis Mitcham"
                                                            >
                                                                <img alt="Pic" src="/assets/media/avatars/150-5.jpg" />
                                                            </div>
                                                            {/*end::User*/}
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
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Melody Macy"
                                                            >
                                                                <img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Perry Matthew"
                                                            >
                                                                <span className="symbol-label bg-info text-inverse-info fw-bolder">
                                                                    P
                                                                </span>
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::User*/}
                                                            <div
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="tooltip"
                                                                title="Barry Walter"
                                                            >
                                                                <img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::All users*/}
                                                            <NavLink
                                                                to="#"
                                                                className="symbol symbol-35px symbol-circle"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_view_users"
                                                            >
                                                                <span
                                                                    className="symbol-label bg-dark text-inverse-dark fs-8 fw-bolder"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-trigger="hover"
                                                                    title="View more users"
                                                                >
                                                                    +42
                                                                </span>
                                                            </NavLink>
                                                            {/*end::All users*/}
                                                        </div>
                                                        {/*end::Users*/}
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>
                                            {/*end::Details*/}
                                            <div className="separator" />
                                            {/*begin::Nav wrapper*/}
                                            <div className="d-flex overflow-auto h-55px">
                                                {/*begin::Nav links*/}
                                                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/project.html"
                                                        >
                                                            Overview
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/targets.html"
                                                        >
                                                            Targets
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/budget.html"
                                                        >
                                                            Budget
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/users.html"
                                                        >
                                                            Users
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/files.html"
                                                        >
                                                            Files
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6 active"
                                                            to="../../demo14/dist/apps/projects/activity.html"
                                                        >
                                                            Activity
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/projects/settings.html"
                                                        >
                                                            Settings
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                </ul>
                                                {/*end::Nav links*/}
                                            </div>
                                            {/*end::Nav wrapper*/}
                                        </div>
                                    </div>
                                    {/*end::Navbar*/}
                                    {/*begin::Timeline*/}
                                    <div className="card">
                                        {/*begin::Card head*/}
                                        <div className="card-header card-header-stretch">
                                            {/*begin::Title*/}
                                            <div className="card-title d-flex align-items-center">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                <span className="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
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
                                                <h3 className="fw-bolder m-0 text-gray-800">Jan 23, 2021</h3>
                                            </div>
                                            {/*end::Title*/}
                                            {/*begin::Toolbar*/}
                                            <div className="card-toolbar m-0">
                                                {/*begin::Tab nav*/}
                                                <ul
                                                    className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_today_tab"
                                                            className="nav-link justify-content-center text-active-gray-800 active"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_today"
                                                        >
                                                            Today
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_week_tab"
                                                            className="nav-link justify-content-center text-active-gray-800"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_week"
                                                        >
                                                            Week
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_month_tab"
                                                            className="nav-link justify-content-center text-active-gray-800"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_month"
                                                        >
                                                            Month
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <NavLink
                                                            id="kt_activity_year_tab"
                                                            className="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
                                                            data-bs-toggle="tab"
                                                            role="tab"
                                                            to="#kt_activity_year"
                                                        >
                                                            2021
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                                {/*end::Tab nav*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Card head*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Tab Content*/}
                                            <div className="tab-content">
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_today"
                                                    className="card-body p-0 tab-pane fade show active"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_today_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        There are 2 new tasks for you in “AirPlus Mobile
                                                                        APp” project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Added at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    {/*begin::Record*/}
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                                                                        >
                                                                            Meeting with customer
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <div className="min-w-175px pe-2">
                                                                            <span className="badge badge-light text-muted">
                                                                                Application Design
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Users*/}
                                                                        <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <img
                                                                                    src="/assets/media/avatars/150-3.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            {/*end::User*/}
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <img
                                                                                    src="/assets/media/avatars/150-11.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            {/*end::User*/}
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">
                                                                                    A
                                                                                </div>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Users*/}
                                                                        {/*begin::Progress*/}
                                                                        <div className="min-w-125px pe-2">
                                                                            <span className="badge badge-light-primary">
                                                                                In Progress
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Progress*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="btn btn-sm btn-light btn-active-light-primary"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Record*/}
                                                                    {/*begin::Record*/}
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                                        {/*begin::Title*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                                                                        >
                                                                            Project Delivery Preparation
                                                                        </NavLink>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Label*/}
                                                                        <div className="min-w-175px">
                                                                            <span className="badge badge-light text-muted">
                                                                                CRM System Development
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Users*/}
                                                                        <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <img
                                                                                    src="/assets/media/avatars/150-5.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            {/*end::User*/}
                                                                            {/*begin::User*/}
                                                                            <div className="symbol symbol-circle symbol-25px">
                                                                                <div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">
                                                                                    B
                                                                                </div>
                                                                            </div>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Users*/}
                                                                        {/*begin::Progress*/}
                                                                        <div className="min-w-125px">
                                                                            <span className="badge badge-light-success">
                                                                                Completed
                                                                            </span>
                                                                        </div>
                                                                        {/*end::Progress*/}
                                                                        {/*begin::Action*/}
                                                                        <NavLink
                                                                            to="../../demo14/dist/apps/projects/project.html"
                                                                            className="btn btn-sm btn-light btn-active-light-primary"
                                                                        >
                                                                            View
                                                                        </NavLink>
                                                                        {/*end::Action*/}
                                                                    </div>
                                                                    {/*end::Record*/}
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n2">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="overflow-auto pe-3">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Invitation for crafting engaging designs that
                                                                        speak human workshop
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Alan Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        You have received a new order:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 5:05 AM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Robert Rich"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-14.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    {/*begin::Notice*/}
                                                                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                                                        {/*begin::Icon*/}
                                                                        {/*begin::Svg Icon | path: icons/duotune/coding/cod004.svg*/}
                                                                        <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    opacity="0.3"
                                                                                    d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z"
                                                                                    fill="black"
                                                                                />
                                                                                <path
                                                                                    d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z"
                                                                                    fill="black"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                        {/*end::Icon*/}
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                                            {/*begin::Content*/}
                                                                            <div className="mb-3 mb-md-0 fw-bold">
                                                                                <h4 className="text-gray-900 fw-bolder">
                                                                                    Database Backup Process Completed!
                                                                                </h4>
                                                                                <div className="fs-6 text-gray-700 pe-7">
                                                                                    Login into Admin Dashboard to make sure the
                                                                                    data integrity is OK
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Content*/}
                                                                            {/*begin::Action*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="btn btn-primary px-6 align-self-center text-nowrap"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#kt_modal_"
                                                                            >
                                                                                Proceed
                                                                            </NavLink>
                                                                            {/*end::Action*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Notice*/}
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New order
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is placed for Workshow Planning &amp; Budget
                                                                        Estimation
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            Jimmy Bold
                                                                        </NavLink>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_week"
                                                    className="card-body p-0 tab-pane fade show"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_week_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n2">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="overflow-auto pe-3">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Invitation for crafting engaging designs that
                                                                        speak human workshop
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Alan Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_month"
                                                    className="card-body p-0 tab-pane fade show"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_month_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New order
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is placed for Workshow Planning &amp; Budget
                                                                        Estimation
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            Jimmy Bold
                                                                        </NavLink>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n2">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="overflow-auto pe-3">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Invitation for crafting engaging designs that
                                                                        speak human workshop
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Alan Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                                {/*begin::Tab panel*/}
                                                <div
                                                    id="kt_activity_year"
                                                    className="card-body p-0 tab-pane fade show"
                                                    role="tabpanel"
                                                    aria-labelledby="kt_activity_year_tab"
                                                >
                                                    {/*begin::Timeline*/}
                                                    <div className="timeline">
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="mb-5 pe-3">
                                                                    {/*begin::Title*/}
                                                                    <NavLink
                                                                        to="#"
                                                                        className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                                                    >
                                                                        3 New Incoming Project Files:
                                                                    </NavLink>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Sent at 10:30 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Jan Hummer"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/pdf.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="../../demo14/dist/apps/projects/project.html"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance KPI App Guidelines
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">1.9mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*begin::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/doc.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Client UAT Testing Results
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">18kb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="d-flex flex-aligns-center">
                                                                            {/*begin::Icon*/}
                                                                            <img
                                                                                alt="../../demo14/dist/apps/projects/project.html"
                                                                                className="w-30px me-3"
                                                                                src="/assets/media/svg/files/css.svg"
                                                                            />
                                                                            {/*end::Icon*/}
                                                                            {/*begin::Info*/}
                                                                            <div className="ms-1 fw-bold">
                                                                                {/*begin::Desc*/}
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="fs-6 text-hover-primary fw-bolder"
                                                                                >
                                                                                    Finance Reports
                                                                                </NavLink>
                                                                                {/*end::Desc*/}
                                                                                {/*begin::Number*/}
                                                                                <div className="text-gray-400">20mb</div>
                                                                                {/*end::Number*/}
                                                                            </div>
                                                                            {/*end::Icon*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        Task
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        merged with
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #45890
                                                                        </NavLink>
                                                                        in “Ads Pro Admin Dashboard project:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Initiated at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Nina Nilson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-11.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        3 new application design concepts added:
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Created at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <div
                                                                            className="symbol symbol-circle symbol-25px"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-boundary="window"
                                                                            data-bs-placement="top"
                                                                            title="Marcus Dotson"
                                                                        >
                                                                            <img
                                                                                src="/assets/media/avatars/150-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                                {/*begin::Timeline details*/}
                                                                <div className="overflow-auto pb-5">
                                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/9.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay me-10">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/11.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                        {/*begin::Item*/}
                                                                        <div className="overlay">
                                                                            {/*begin::Image*/}
                                                                            <div className="overlay-wrapper">
                                                                                <img
                                                                                    alt="img"
                                                                                    className="rounded w-150px"
                                                                                    src="/assets/media/stock/300x270/6.jpg"
                                                                                />
                                                                            </div>
                                                                            {/*end::Image*/}
                                                                            {/*begin::Link*/}
                                                                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                                                <NavLink
                                                                                    to="#"
                                                                                    className="btn btn-sm btn-primary btn-shadow"
                                                                                >
                                                                                    Explore
                                                                                </NavLink>
                                                                            </div>
                                                                            {/*end::Link*/}
                                                                        </div>
                                                                        {/*end::Item*/}
                                                                    </div>
                                                                </div>
                                                                {/*end::Timeline details*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mb-10 mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New case
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is assigned to you in Multi-platform Database
                                                                        Design project
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="overflow-auto pb-5">
                                                                        {/*begin::Wrapper*/}
                                                                        <div className="d-flex align-items-center mt-1 fs-6">
                                                                            {/*begin::Info*/}
                                                                            <div className="text-muted me-2 fs-7">
                                                                                Added at 4:23 PM by
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                            {/*begin::User*/}
                                                                            <NavLink
                                                                                to="#"
                                                                                className="text-primary fw-bolder me-1"
                                                                            >
                                                                                Alice Tan
                                                                            </NavLink>
                                                                            {/*end::User*/}
                                                                        </div>
                                                                        {/*end::Wrapper*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                        {/*begin::Timeline item*/}
                                                        <div className="timeline-item">
                                                            {/*begin::Timeline line*/}
                                                            <div className="timeline-line w-40px" />
                                                            {/*end::Timeline line*/}
                                                            {/*begin::Timeline icon*/}
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                fill="black"
                                                                            />
                                                                            <path
                                                                                opacity="0.3"
                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                fill="black"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Timeline icon*/}
                                                            {/*begin::Timeline content*/}
                                                            <div className="timeline-content mt-n1">
                                                                {/*begin::Timeline heading*/}
                                                                <div className="pe-3 mb-5">
                                                                    {/*begin::Title*/}
                                                                    <div className="fs-5 fw-bold mb-2">
                                                                        New order
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            #67890
                                                                        </NavLink>
                                                                        is placed for Workshow Planning &amp; Budget
                                                                        Estimation
                                                                    </div>
                                                                    {/*end::Title*/}
                                                                    {/*begin::Description*/}
                                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                                        {/*begin::Info*/}
                                                                        <div className="text-muted me-2 fs-7">
                                                                            Placed at 4:23 PM by
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                        {/*begin::User*/}
                                                                        <NavLink
                                                                            to="#"
                                                                            className="text-primary fw-bolder me-1"
                                                                        >
                                                                            Jimmy Bold
                                                                        </NavLink>
                                                                        {/*end::User*/}
                                                                    </div>
                                                                    {/*end::Description*/}
                                                                </div>
                                                                {/*end::Timeline heading*/}
                                                            </div>
                                                            {/*end::Timeline content*/}
                                                        </div>
                                                        {/*end::Timeline item*/}
                                                    </div>
                                                    {/*end::Timeline*/}
                                                </div>
                                                {/*end::Tab panel*/}
                                            </div>
                                            {/*end::Tab Content*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Timeline*/}
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
            <ViewUserModal />
            <NewTargetModal />
        </div>
    )
}

export default Activity
