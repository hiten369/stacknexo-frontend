import React from 'react'
import { NavLink } from 'react-router-dom';

const ShareEarnModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="kt_modal_share_earn"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-800px">
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
                        <div className="modal-body scroll-y pt-0 pb-15">
                            {/*begin::Wrapper*/}
                            <div className="mw-lg-600px mx-auto">
                                {/*begin::Heading*/}
                                <div className="mb-13 text-center">
                                    {/*begin::Title*/}
                                    <h1 className="mb-3">Share &amp; Earn</h1>
                                    {/*end::Title*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fw-bold fs-5">
                                        If you need more info, please check
                                        <NavLink to="#" className="link-primary fw-bolder">
                                            Author Commision
                                        </NavLink>
                                        .
                                    </div>
                                    {/*end::Description*/}
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Input group*/}
                                <div className="mb-10">
                                    {/*begin::Title*/}
                                    <h4 className="fs-5 fw-bold text-gray-800">
                                        Share my referral link with friends
                                    </h4>
                                    {/*end::Title*/}
                                    {/*begin::Title*/}
                                    <div className="d-flex">
                                        <input
                                            id="kt_share_earn_link_input"
                                            type="text"
                                            className="form-control form-control-solid me-3 flex-grow-1"
                                            name="search"
                                            defaultValue="https://keenthemes.com/?ref=skitechnology"
                                        />
                                        <button
                                            id="kt_share_earn_link_copy_button"
                                            className="btn btn-light fw-bolder flex-shrink-0"
                                            data-clipboard-target="#kt_share_earn_link_input"
                                        >
                                            Copy Link
                                        </button>
                                    </div>
                                    {/*end::Title*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Actions*/}
                                <div className="d-flex">
                                    <NavLink to="#" className="btn btn-light w-100">
                                        <img
                                            alt="Logo"
                                            src="/assets/media/svg/social-logos/google.svg"
                                            className="h-15px me-3"
                                        />
                                        Import Contacts
                                    </NavLink>
                                    <NavLink to="#" className="btn btn-light w-100 mx-6">
                                        <img
                                            alt="Logo"
                                            src="/assets/media/svg/social-logos/facebook.svg"
                                            className="h-20px me-3"
                                        />
                                        Facebook
                                    </NavLink>
                                    <NavLink to="#" className="btn btn-light w-100">
                                        <img
                                            alt="Logo"
                                            src="/assets/media/svg/social-logos/twitter.svg"
                                            className="h-20px me-3"
                                        />
                                        Twitter
                                    </NavLink>
                                </div>
                                {/*end::Actions*/}
                                {/*begin::Input group*/}
                                <div className="d-flex align-items-center mt-10">
                                    {/*begin::Label*/}
                                    <div className="flex-grow-1">
                                        <span className="fs-6 fw-bold text-gray-800 d-block">
                                            Adding Users by Team Members
                                        </span>
                                        <span className="fs-7 fw-bold text-muted">
                                            If you need more info, please check budget planning
                                        </span>
                                    </div>
                                    {/*end::Label*/}
                                    {/*begin::Switch*/}
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue={1}
                                            defaultChecked="checked"
                                        />
                                        <span className="form-check-label">Allowed</span>
                                    </label>
                                    {/*end::Switch*/}
                                </div>
                                {/*end::Input group*/}
                            </div>
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </>
    )
}

export default ShareEarnModal
