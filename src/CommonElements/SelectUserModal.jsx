import React from 'react'
import { NavLink } from 'react-router-dom';

const SelectUserModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="kt_modal_select_users"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog mw-700px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header pb-0 border-0 d-flex justify-content-end">
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
                        <div className="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">
                            {/*begin::Heading*/}
                            <div className="text-center mb-13">
                                {/*begin::Title*/}
                                <h1 className="d-flex justify-content-center align-items-center mb-3">
                                    Select Users
                                    <span className="badge badge-circle badge-secondary ms-3">81</span>
                                </h1>
                                {/*end::Title*/}
                                {/*begin::Description*/}
                                <div className="text-muted fw-bold fs-5">
                                    If you need more info, please check out
                                    <NavLink to="#" className="link-primary fw-bolder">
                                        FAQ Page
                                    </NavLink>
                                    .
                                </div>
                                {/*end::Description*/}
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Users*/}
                            <div className="mh-475px scroll-y me-n7 pe-7">
                                {/*begin::User*/}
                                <div className="border border-hover-primary p-7 rounded mb-7">
                                    {/*begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/*begin::Info*/}
                                        <div className="d-flex">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="/assets/media/avatars/150-5.jpg" alt />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-5">
                                                {/*begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <NavLink
                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                        className="text-dark fw-bolder text-hover-primary fs-5 me-4"
                                                    >
                                                        Emma Smith
                                                    </NavLink>
                                                    {/*begin::Label*/}
                                                    <span className="badge badge-light-success d-flex align-items-center fs-8 fw-bold">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                        <span className="svg-icon svg-icon-8 svg-icon-success me-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Author
                                                    </span>
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Name*/}
                                                {/*begin::Desc*/}
                                                <span className="text-muted fw-bold mb-3">Art Director</span>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Info*/}
                                        {/*begin::Stats*/}
                                        <div clas="d-flex">
                                            {/*begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bolder fs-5">$75.60</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/*end::Price*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Wrapper*/}
                                    <div className="p-0">
                                        {/*begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Text*/}
                                            <p className="text-gray-700 fw-bold fs-6 mb-4">
                                                First, a disclaimer - the entire process writing a blog post
                                                often takes more.
                                            </p>
                                            {/*end::Text*/}
                                            {/*begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-bold fs-7">
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    Art Director
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    UX
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    Laravel
                                                </span>
                                                {/*end::Tag*/}
                                            </div>
                                            {/*end::Tags*/}
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5" />
                                            {/*end::Separator*/}
                                            {/*begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/*begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-bold me-2">
                                                            90%
                                                        </span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div
                                                            className="progress-bar bg-primary"
                                                            role="progressbar"
                                                            style={{ width: "90%" }}
                                                            aria-valuenow={90}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                                {/*end::Progress*/}
                                                {/*begin::Button*/}
                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                    Select
                                                </NavLink>
                                                {/*end::Button*/}
                                            </div>
                                            {/*end::Action*/}
                                        </div>
                                        {/*end::Footer*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <div className="border border-hover-primary p-7 rounded mb-7">
                                    {/*begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/*begin::Info*/}
                                        <div className="d-flex">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="/assets/media/avatars/150-12.jpg" alt />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-5">
                                                {/*begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <NavLink
                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                        className="text-dark fw-bolder text-hover-primary fs-5 me-4"
                                                    >
                                                        Sean Bean
                                                    </NavLink>
                                                    {/*begin::Label*/}
                                                    <span className="badge badge-light-success d-flex align-items-center fs-8 fw-bold">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                                        <span className="svg-icon svg-icon-8 svg-icon-success me-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}Author
                                                    </span>
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Name*/}
                                                {/*begin::Desc*/}
                                                <span className="text-muted fw-bold mb-3">
                                                    Project Manager
                                                </span>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Info*/}
                                        {/*begin::Stats*/}
                                        <div clas="d-flex">
                                            {/*begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bolder fs-5">$65.45</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/*end::Price*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Wrapper*/}
                                    <div className="p-0">
                                        {/*begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Text*/}
                                            <p className="text-gray-700 fw-bold fs-6 mb-4">
                                                Outlines keep you honest. They stop you from indulging.
                                            </p>
                                            {/*end::Text*/}
                                            {/*begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-bold fs-7">
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    HTML
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    Javascript
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    Python
                                                </span>
                                                {/*end::Tag*/}
                                            </div>
                                            {/*end::Tags*/}
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5" />
                                            {/*end::Separator*/}
                                            {/*begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/*begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-bold me-2">
                                                            58%
                                                        </span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div
                                                            className="progress-bar bg-success"
                                                            role="progressbar"
                                                            style={{ width: "58%" }}
                                                            aria-valuenow={58}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                                {/*end::Progress*/}
                                                {/*begin::Button*/}
                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                    Select
                                                </NavLink>
                                                {/*end::Button*/}
                                            </div>
                                            {/*end::Action*/}
                                        </div>
                                        {/*end::Footer*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <div className="border border-hover-primary p-7 rounded mb-7">
                                    {/*begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/*begin::Info*/}
                                        <div className="d-flex">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="/assets/media/avatars/150-3.jpg" alt />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-5">
                                                {/*begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <NavLink
                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                        className="text-dark fw-bolder text-hover-primary fs-5 me-4"
                                                    >
                                                        Lusy Kunic
                                                    </NavLink>
                                                    {/*begin::Label*/}
                                                    <span className="m-0" />
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Name*/}
                                                {/*begin::Desc*/}
                                                <span className="text-muted fw-bold mb-3">DevOPs</span>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Info*/}
                                        {/*begin::Stats*/}
                                        <div clas="d-flex">
                                            {/*begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bolder fs-5">$60,45</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/*end::Price*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Wrapper*/}
                                    <div className="p-0">
                                        {/*begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Text*/}
                                            <p className="text-gray-700 fw-bold fs-6 mb-4">
                                                Long before you sit down to put digital pen to paper you need
                                                make sure you have to sit down and write.
                                            </p>
                                            {/*end::Text*/}
                                            {/*begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-bold fs-7">
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    Figma
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    SASS
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    CSS
                                                </span>
                                                {/*end::Tag*/}
                                            </div>
                                            {/*end::Tags*/}
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5" />
                                            {/*end::Separator*/}
                                            {/*begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/*begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-bold me-2">
                                                            86%
                                                        </span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "86%" }}
                                                            aria-valuenow={86}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                                {/*end::Progress*/}
                                                {/*begin::Button*/}
                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                    Select
                                                </NavLink>
                                                {/*end::Button*/}
                                            </div>
                                            {/*end::Action*/}
                                        </div>
                                        {/*end::Footer*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <div className="border border-hover-primary p-7 rounded">
                                    {/*begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/*begin::Info*/}
                                        <div className="d-flex">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="/assets/media/avatars/150-4.jpg" alt />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Details*/}
                                            <div className="ms-5">
                                                {/*begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <NavLink
                                                        to="../../demo14/dist/pages/profile/overview.html"
                                                        className="text-dark fw-bolder text-hover-primary fs-5 me-4"
                                                    >
                                                        Mat Dillon
                                                    </NavLink>
                                                    {/*begin::Label*/}
                                                    <span className="m-0" />
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Name*/}
                                                {/*begin::Desc*/}
                                                <span className="text-muted fw-bold mb-3">QA Managers</span>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Details*/}
                                        </div>
                                        {/*end::Info*/}
                                        {/*begin::Stats*/}
                                        <div clas="d-flex">
                                            {/*begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bolder fs-5">$70,30</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/*end::Price*/}
                                        </div>
                                        {/*end::Stats*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Wrapper*/}
                                    <div className="p-0">
                                        {/*begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Text*/}
                                            <p className="text-gray-700 fw-bold fs-6 mb-4">
                                                First, a disclaimer - the entire process writing a blog post
                                                often takes more than couple of hours.
                                            </p>
                                            {/*end::Text*/}
                                            {/*begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-bold fs-7">
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    Figma
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    SASS
                                                </span>
                                                {/*end::Tag*/}
                                                {/*begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">
                                                    CSS
                                                </span>
                                                {/*end::Tag*/}
                                            </div>
                                            {/*end::Tags*/}
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5" />
                                            {/*end::Separator*/}
                                            {/*begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/*begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-bold me-2">
                                                            70%
                                                        </span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div
                                                            className="progress-bar bg-danger"
                                                            role="progressbar"
                                                            style={{ width: "70%" }}
                                                            aria-valuenow={70}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                                {/*end::Progress*/}
                                                {/*begin::Button*/}
                                                <NavLink to="#" className="btn btn-sm btn-primary">
                                                    Select
                                                </NavLink>
                                                {/*end::Button*/}
                                            </div>
                                            {/*end::Action*/}
                                        </div>
                                        {/*end::Footer*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::User*/}
                            </div>
                            {/*end::Users*/}
                        </div>
                        {/*end::Modal Body*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </>
    )
}

export default SelectUserModal
