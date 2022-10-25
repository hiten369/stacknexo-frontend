import React from 'react'
import { NavLink } from 'react-router-dom';

const SelectLocationModal = () => {
    return (
        <div>
            <div
                className="modal fade"
                id="kt_modal_select_location"
                tabIndex={-1}
                aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog mw-1000px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header">
                            {/*begin::Title*/}
                            <h2>Select Location</h2>
                            {/*end::Title*/}
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
                        <div className="modal-body">
                            <div
                                id="kt_modal_select_location_map"
                                className="w-100 rounded"
                                style={{ height: 450 }}
                            />
                        </div>
                        {/*end::Modal body*/}
                        {/*begin::Modal footer*/}
                        <div className="modal-footer d-flex justify-content-end">
                            <NavLink
                                to="#"
                                className="btn btn-active-light me-5"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </NavLink>
                            <button
                                type="button"
                                id="kt_modal_select_location_button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Apply
                            </button>
                        </div>
                        {/*end::Modal footer*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
            </div>

        </div>
    )
}

export default SelectLocationModal
