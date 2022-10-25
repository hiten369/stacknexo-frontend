import React from 'react'
import { NavLink } from 'react-router-dom';

const UpgradePlanModal = () => {
    return (
        <div>
            <div
                className="modal fade"
                id="kt_modal_upgrade_plan"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-xl">
                    {/*begin::Modal content*/}
                    <div className="modal-content rounded">
                        {/*begin::Modal header*/}
                        <div className="modal-header justify-content-end border-0 pb-0">
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
                        <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            <div className="mb-13 text-center">
                                <h1 className="mb-3">Upgrade a Plan</h1>
                                <div className="text-muted fw-bold fs-5">
                                    If you need more info, please check
                                    <NavLink to="#" className="link-primary fw-bolder">
                                        Pricing Guidelines
                                    </NavLink>
                                    .
                                </div>
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                                {/*begin::Nav group*/}
                                <div
                                    className="nav-group nav-group-outline mx-auto"
                                    data-kt-buttons="true"
                                >
                                    <NavLink
                                        to="#"
                                        className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                                        data-kt-plan="month"
                                    >
                                        Monthly
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                                        data-kt-plan="annual"
                                    >
                                        Annual
                                    </NavLink>
                                </div>
                                {/*end::Nav group*/}
                                {/*begin::Row*/}
                                <div className="row mt-10">
                                    {/*begin::Col*/}
                                    <div className="col-lg-6 mb-10 mb-lg-0">
                                        {/*begin::Tabs*/}
                                        <div className="nav flex-column">
                                            {/*begin::Tab link*/}
                                            <div
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_startup"
                                            >
                                                {/*end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            defaultChecked="checked"
                                                            defaultValue="startup"
                                                        />
                                                    </div>
                                                    {/*end::Radio*/}
                                                    {/*begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                            Startup
                                                        </h2>
                                                        <div className="fw-bold opacity-50">
                                                            Best for startups
                                                        </div>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Description*/}
                                                {/*begin::Price*/}
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span
                                                        className="fs-3x fw-bolder"
                                                        data-kt-plan-price-month={39}
                                                        data-kt-plan-price-annual={399}
                                                    >
                                                        39
                                                    </span>
                                                    <span className="fs-7 opacity-50">
                                                        /<span data-kt-element="period">Mon</span>
                                                    </span>
                                                </div>
                                                {/*end::Price*/}
                                            </div>
                                            {/*end::Tab link*/}
                                            {/*begin::Tab link*/}
                                            <div
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_advanced"
                                            >
                                                {/*end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            defaultValue="advanced"
                                                        />
                                                    </div>
                                                    {/*end::Radio*/}
                                                    {/*begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                            Advanced
                                                        </h2>
                                                        <div className="fw-bold opacity-50">
                                                            Best for 100+ team size
                                                        </div>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Description*/}
                                                {/*begin::Price*/}
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span
                                                        className="fs-3x fw-bolder"
                                                        data-kt-plan-price-month={339}
                                                        data-kt-plan-price-annual={3399}
                                                    >
                                                        339
                                                    </span>
                                                    <span className="fs-7 opacity-50">
                                                        /<span data-kt-element="period">Mon</span>
                                                    </span>
                                                </div>
                                                {/*end::Price*/}
                                            </div>
                                            {/*end::Tab link*/}
                                            {/*begin::Tab link*/}
                                            <div
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_enterprise"
                                            >
                                                {/*end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            defaultValue="enterprise"
                                                        />
                                                    </div>
                                                    {/*end::Radio*/}
                                                    {/*begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                            Enterprise
                                                            <span className="badge badge-light-success ms-2 fs-7">
                                                                Most popular
                                                            </span>
                                                        </h2>
                                                        <div className="fw-bold opacity-50">
                                                            Best value for 1000+ team
                                                        </div>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Description*/}
                                                {/*begin::Price*/}
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span
                                                        className="fs-3x fw-bolder"
                                                        data-kt-plan-price-month={999}
                                                        data-kt-plan-price-annual={9999}
                                                    >
                                                        999
                                                    </span>
                                                    <span className="fs-7 opacity-50">
                                                        /<span data-kt-element="period">Mon</span>
                                                    </span>
                                                </div>
                                                {/*end::Price*/}
                                            </div>
                                            {/*end::Tab link*/}
                                            {/*begin::Tab link*/}
                                            <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6">
                                                {/*end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/*begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            defaultValue="custom"
                                                        />
                                                    </div>
                                                    {/*end::Radio*/}
                                                    {/*begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                                                            Custom
                                                        </h2>
                                                        <div className="fw-bold opacity-50">
                                                            Requet a custom license
                                                        </div>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Description*/}
                                                {/*begin::Price*/}
                                                <div className="ms-5">
                                                    <NavLink to="#" className="btn btn-sm btn-primary">
                                                        Contact Us
                                                    </NavLink>
                                                </div>
                                                {/*end::Price*/}
                                            </div>
                                            {/*end::Tab link*/}
                                        </div>
                                        {/*end::Tabs*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-6">
                                        {/*begin::Tab content*/}
                                        <div className="tab-content rounded h-100 bg-light p-10">
                                            {/*begin::Tab Pane*/}
                                            <div
                                                className="tab-pane fade show active"
                                                id="kt_upgrade_plan_startup"
                                            >
                                                {/*begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bolder text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-bold">
                                                        Optimal for 10+ team size and new startup
                                                    </div>
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Body*/}
                                                <div className="pt-1">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 10 Active Users
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 30 Project Integrations
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                            Finance Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                    x={7}
                                                                    y="15.3137"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-45 7 15.3137)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="8.41422"
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 8.41422 7)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                            Accounting Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                    x={7}
                                                                    y="15.3137"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-45 7 15.3137)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="8.41422"
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 8.41422 7)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                            Network Platform
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                    x={7}
                                                                    y="15.3137"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-45 7 15.3137)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="8.41422"
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 8.41422 7)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                            Unlimited Cloud Space
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                    x={7}
                                                                    y="15.3137"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-45 7 15.3137)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="8.41422"
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 8.41422 7)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Tab Pane*/}
                                            {/*begin::Tab Pane*/}
                                            <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                                                {/*begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bolder text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-bold">
                                                        Optimal for 100+ team size and grown company
                                                    </div>
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Body*/}
                                                <div className="pt-1">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 10 Active Users
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 30 Project Integrations
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Finance Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Accounting Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                            Network Platform
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                    x={7}
                                                                    y="15.3137"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-45 7 15.3137)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="8.41422"
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 8.41422 7)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                                                            Unlimited Cloud Space
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
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
                                                                    x={7}
                                                                    y="15.3137"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-45 7 15.3137)"
                                                                    fill="black"
                                                                />
                                                                <rect
                                                                    x="8.41422"
                                                                    y={7}
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(45 8.41422 7)"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Tab Pane*/}
                                            {/*begin::Tab Pane*/}
                                            <div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
                                                {/*begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bolder text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-bold">
                                                        Optimal for 1000+ team and enterpise
                                                    </div>
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Body*/}
                                                <div className="pt-1">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 10 Active Users
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 30 Project Integrations
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Finance Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Accounting Module
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Network Platform
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                                                            Unlimited Cloud Space
                                                        </span>
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                        <span className="svg-icon svg-icon-1 svg-icon-success">
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
                                                                <path
                                                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Tab Pane*/}
                                        </div>
                                        {/*end::Tab content*/}
                                    </div>
                                    {/*end::Col*/}
                                </div>
                                {/*end::Row*/}
                            </div>
                            {/*end::Plans*/}
                            {/*begin::Actions*/}
                            <div className="d-flex flex-center flex-row-fluid pt-12">
                                <button
                                    type="reset"
                                    className="btn btn-light me-3"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Upgrade Plan
                                </button>
                            </div>
                            {/*end::Actions*/}
                        </div>
                        {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </div>
    )
}

export default UpgradePlanModal
