import React from 'react'
import { NavLink } from 'react-router-dom';

const NewAddressModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="kt_modal_new_address"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Form*/}
                        <form className="form" action="#" id="kt_modal_new_address_form">
                            {/*begin::Modal header*/}
                            <div className="modal-header" id="kt_modal_new_address_header">
                                {/*begin::Modal title*/}
                                <h2>Add New Address</h2>
                                {/*end::Modal title*/}
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
                            <div className="modal-body py-10 px-lg-17">
                                {/*begin::Scroll*/}
                                <div
                                    className="scroll-y me-n7 pe-7"
                                    id="kt_modal_new_address_scroll"
                                    data-kt-scroll="true"
                                    data-kt-scroll-activate="{default: false, lg: true}"
                                    data-kt-scroll-max-height="auto"
                                    data-kt-scroll-dependencies="#kt_modal_new_address_header"
                                    data-kt-scroll-wrappers="#kt_modal_new_address_scroll"
                                    data-kt-scroll-offset="300px"
                                >
                                    {/*begin::Notice*/}
                                    {/*begin::Notice*/}
                                    <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                                        {/*begin::Icon*/}
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                                        <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
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
                                                    x={11}
                                                    y={14}
                                                    width={7}
                                                    height={2}
                                                    rx={1}
                                                    transform="rotate(-90 11 14)"
                                                    fill="black"
                                                />
                                                <rect
                                                    x={11}
                                                    y={17}
                                                    width={2}
                                                    height={2}
                                                    rx={1}
                                                    transform="rotate(-90 11 17)"
                                                    fill="black"
                                                />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                        {/*end::Icon*/}
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-stack flex-grow-1">
                                            {/*begin::Content*/}
                                            <div className="fw-bold">
                                                <h4 className="text-gray-900 fw-bolder">Warning</h4>
                                                <div className="fs-6 text-gray-700">
                                                    Updating address may affter to your
                                                    <NavLink to="#">Tax Location</NavLink>
                                                </div>
                                            </div>
                                            {/*end::Content*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Notice*/}
                                    {/*end::Notice*/}
                                    {/*begin::Input group*/}
                                    <div className="row mb-5">
                                        {/*begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/*begin::Label*/}
                                            <label className="required fs-5 fw-bold mb-2">First name</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <input
                                                type="text"
                                                className="form-control form-control-solid"
                                                placeholder
                                                name="first-name"
                                            />
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/*end::Label*/}
                                            <label className="required fs-5 fw-bold mb-2">Last name</label>
                                            {/*end::Label*/}
                                            {/*end::Input*/}
                                            <input
                                                type="text"
                                                className="form-control form-control-solid"
                                                placeholder
                                                name="last-name"
                                            />
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/*begin::Label*/}
                                        <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                            <span className="required">Country</span>
                                            <i
                                                className="fas fa-exclamation-circle ms-2 fs-7"
                                                data-bs-toggle="tooltip"
                                                title="Your payment statements may very based on selected country"
                                            />
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Select*/}
                                        <select
                                            name="country"
                                            data-control="select2"
                                            data-dropdown-parent="#kt_modal_new_address"
                                            data-placeholder="Select a Country..."
                                            className="form-select form-select-solid"
                                        >
                                            <option value>Select a Country...</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia, Plurinational State of</option>
                                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="BN">Brunei Darussalam</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="CI">Côte d'Ivoire</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">Curaçao</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GU">Guam</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="HT">Haiti</option>
                                            <option value="VA">Holy See (Vatican City State)</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran, Islamic Republic of</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KP">
                                                Korea, Democratic People's Republic of
                                            </option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Lao People's Democratic Republic</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia, Federated States of</option>
                                            <option value="MD">Moldova, Republic of</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="MP">Northern Mariana Islands</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PW">Palau</option>
                                            <option value="PS">Palestinian Territory, Occupied</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russian Federation</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="BL">Saint Barthélemy</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="MF">Saint Martin (French part)</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="WS">Samoa</option>
                                            <option value="SM">San Marino</option>
                                            <option value="ST">Sao Tome and Principe</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SX">Sint Maarten (Dutch part)</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syrian Arab Republic</option>
                                            <option value="TW">Taiwan, Province of China</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania, United Republic of</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="VI">Virgin Islands</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                        {/*end::Select*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/*begin::Label*/}
                                        <label className="required fs-5 fw-bold mb-2">
                                            Address Line 1
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                            className="form-control form-control-solid"
                                            placeholder
                                            name="address1"
                                        />
                                        {/*end::Input*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/*begin::Label*/}
                                        <label className="required fs-5 fw-bold mb-2">
                                            Address Line 2
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                            className="form-control form-control-solid"
                                            placeholder
                                            name="address2"
                                        />
                                        {/*end::Input*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/*begin::Label*/}
                                        <label className="fs-5 fw-bold mb-2">Town</label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                            className="form-control form-control-solid"
                                            placeholder
                                            name="city"
                                        />
                                        {/*end::Input*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="row g-9 mb-5">
                                        {/*begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/*begin::Label*/}
                                            <label className="fs-5 fw-bold mb-2">State / Province</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <input
                                                className="form-control form-control-solid"
                                                placeholder
                                                name="state"
                                            />
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/*begin::Label*/}
                                            <label className="fs-5 fw-bold mb-2">Post Code</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <input
                                                className="form-control form-control-solid"
                                                placeholder
                                                name="postcode"
                                            />
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="fv-row mb-5">
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-stack">
                                            {/*begin::Label*/}
                                            <div className="me-5">
                                                {/*begin::Label*/}
                                                <label className="fs-5 fw-bold">
                                                    Use as a billing adderess?
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <div className="fs-7 fw-bold text-muted">
                                                    If you need more info, please check budget planning
                                                </div>
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Label*/}
                                            {/*begin::Switch*/}
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input
                                                    className="form-check-input"
                                                    name="billing"
                                                    type="checkbox"
                                                    defaultValue={1}
                                                    defaultChecked="checked"
                                                />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <span className="form-check-label fw-bold text-muted">
                                                    Yes
                                                </span>
                                                {/*end::Label*/}
                                            </label>
                                            {/*end::Switch*/}
                                        </div>
                                        {/*begin::Wrapper*/}
                                    </div>
                                    {/*end::Input group*/}
                                </div>
                                {/*end::Scroll*/}
                            </div>
                            {/*end::Modal body*/}
                            {/*begin::Modal footer*/}
                            <div className="modal-footer flex-center">
                                {/*begin::Button*/}
                                <button
                                    type="reset"
                                    id="kt_modal_new_address_cancel"
                                    className="btn btn-light me-3"
                                >
                                    Discard
                                </button>
                                {/*end::Button*/}
                                {/*begin::Button*/}
                                <button
                                    type="submit"
                                    id="kt_modal_new_address_submit"
                                    className="btn btn-primary"
                                >
                                    <span className="indicator-label">Submit</span>
                                    <span className="indicator-progress">
                                        Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>
                                </button>
                                {/*end::Button*/}
                            </div>
                            {/*end::Modal footer*/}
                        </form>
                        {/*end::Form*/}
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewAddressModal
