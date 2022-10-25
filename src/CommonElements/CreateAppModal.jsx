import React, { useContext, useState } from 'react'
import MainContext from '../context/MainContext';
import { publicIpv4 } from 'public-ip';

const CreateAppModal = (props) => {
    const context = useContext(MainContext);
    const [serviceArray, setServiceArray] = useState([]);
    const [userG, setUserG] = useState('User');
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        designationName: '',
        forced2FA: '',
        userGroup: 'User',
        password: '',
        cpassword: '',
    });

    // Visible/hide password
    const togglePassword = (e) => {
        let x = document.getElementById('password');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    // Generate the random password
    const setPassword = () => {
        var chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", "0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
        var randomstring = [5, 3, 2].map(function (len, i) { return Array(len).fill(chars[i]).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('') }).concat().join('').split('').sort(function () { return 0.5 - Math.random() }).join('');
        document.getElementById('password').value = randomstring;
        document.getElementById('cpassword').value = randomstring;
        setValue({ ...value, cpassword: randomstring, password: randomstring });
    };

    const onChange = (e) => {
        setValue((val) => {
            if (e.target.name === 'userService') {
                if (e.target.checked) {
                    setServiceArray(serviceArray.concat(e.target.id));
                    setValue({ ...val, userGroup: { [userG]: serviceArray.concat(e.target.id) } });
                }
                else {
                    setServiceArray(serviceArray.filter((f) => {
                        return f !== e.target.id;
                    }));

                    setValue({
                        ...val, userGroup: {
                            [userG]: serviceArray.filter((f) => {
                                return f !== e.target.id;
                            })
                        }
                    });
                }
            }
            else if (e.target.name === 'userGroup') {
                setUserG(e.target.value);
                setValue({ ...val, userGroup: { [e.target.value]: serviceArray } });
            }
            else {
                setValue({ ...val, [e.target.name]: e.target.value });
            }
        })
    };

    const submit = async (e) => {
        e.preventDefault();
        let ip=await publicIpv4();
        let ans = await context.signin(value.firstName, value.lastName, value.email, value.password, value.cpassword, value.dob, value.designationName, value.forced2FA, value.userGroup, ip);
        if (ans.success) {
            props.setAlert('success', 'User has been created successfully! ');
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    return (
        <div>
            <div className="modal fade" id="kt_modal_create_app" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-900px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header">
                            {/*begin::Modal title*/}
                            <h2>Create App</h2>
                            {/*end::Modal title*/}
                            {/*begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                <span className="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </div>
                            {/*end::Close*/}
                        </div>
                        {/*end::Modal header*/}
                        {/*begin::Modal body*/}
                        <div className="modal-body py-lg-10 px-lg-10">
                            {/*begin::Stepper*/}
                            <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
                                {/*begin::Aside*/}
                                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                                    {/*begin::Nav*/}
                                    <div className="stepper-nav ps-lg-10">
                                        {/*begin::Step 1*/}
                                        <div className="stepper-item current" data-kt-stepper-element="nav">
                                            {/*begin::Line*/}
                                            <div className="stepper-line w-40px" />
                                            {/*end::Line*/}
                                            {/*begin::Icon*/}
                                            <div className="stepper-icon w-40px h-40px">
                                                <i className="stepper-check fas fa-check" />
                                                <span className="stepper-number">1</span>
                                            </div>
                                            {/*end::Icon*/}
                                            {/*begin::Label*/}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Details</h3>
                                                <div className="stepper-desc">User Details</div>
                                            </div>
                                            {/*end::Label*/}
                                        </div>
                                        {/*end::Step 1*/}
                                        {/*begin::Step 2*/}
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            {/*begin::Line*/}
                                            <div className="stepper-line w-40px" />
                                            {/*end::Line*/}
                                            {/*begin::Icon*/}
                                            <div className="stepper-icon w-40px h-40px">
                                                <i className="stepper-check fas fa-check" />
                                                <span className="stepper-number">2</span>
                                            </div>
                                            {/*begin::Icon*/}
                                            {/*begin::Label*/}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">User Group</h3>
                                                <div className="stepper-desc">Define who is accessing website</div>
                                            </div>
                                            {/*begin::Label*/}
                                        </div>
                                        {/*end::Step 2*/}
                                        {/*begin::Step 3*/}
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            {/*begin::Line*/}
                                            <div className="stepper-line w-40px" />
                                            {/*end::Line*/}
                                            {/*begin::Icon*/}
                                            <div className="stepper-icon w-40px h-40px">
                                                <i className="stepper-check fas fa-check" />
                                                <span className="stepper-number">3</span>
                                            </div>
                                            {/*end::Icon*/}
                                            {/*begin::Label*/}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Services</h3>
                                                <div className="stepper-desc">Select Services</div>
                                            </div>
                                            {/*end::Label*/}
                                        </div>
                                        {/*end::Step 3*/}
                                        {/*begin::Step 4*/}
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            {/*begin::Line*/}
                                            <div className="stepper-line w-40px" />
                                            {/*end::Line*/}
                                            {/*begin::Icon*/}
                                            <div className="stepper-icon w-40px h-40px">
                                                <i className="stepper-check fas fa-check" />
                                                <span className="stepper-number">4</span>
                                            </div>
                                            {/*end::Icon*/}
                                            {/*begin::Label*/}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Password</h3>
                                                <div className="stepper-desc">Choose a password</div>
                                            </div>
                                            {/*end::Label*/}
                                        </div>
                                        {/*end::Step 4*/}
                                    </div>
                                    {/*end::Nav*/}
                                </div>
                                {/*begin::Aside*/}
                                {/*begin::Content*/}
                                <div className="flex-row-fluid py-lg-5 px-lg-15">
                                    {/*begin::Form*/}
                                    <form className="form" noValidate="novalidate" id="kt_modal_create_app_form">
                                        {/*begin::Step 1*/}
                                        <div className="current" data-kt-stepper-element="content">
                                            <div className="w-100">
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                                        <span className="required">First Name</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="User First Name" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" className="form-control form-control-lg form-control-solid" name="firstName" placeholder="First Name" onChange={onChange} />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                                        <span className="required">Last Name</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="User Last Name" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" className="form-control form-control-lg form-control-solid" name="lastName" placeholder="Last Name" onChange={onChange} />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                                        <span className="required">Email</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="User Email" onChange={onChange} />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="email" className="form-control form-control-lg form-control-solid" name="email" placeholder="Email" onChange={onChange} />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                                        <span className="required">D.O.B</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Date of birth" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="date" className="form-control form-control-lg form-control-solid" name="dob" placeholder="D.O.B" onChange={onChange} />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                                        <span className="required">Designation Name</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="User Designation Name" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" className="form-control form-control-lg form-control-solid" name="designationName" placeholder="Designation Name" onChange={onChange} />
                                                    {/*end::Input*/}
                                                </div>
                                            </div>
                                        </div>
                                        {/*end::Step 1*/}
                                        {/*begin::Step 2*/}
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                {/*begin::Input group*/}
                                                <div className="fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                                        <span className="required">Select User Group</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin:Option*/}
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        {/*begin:Label*/}
                                                        <span className="d-flex align-items-center me-2">
                                                            {/*begin:Info*/}
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bolder fs-6">User</span>
                                                            </span>
                                                            {/*end:Info*/}
                                                        </span>
                                                        {/*end:Label*/}
                                                        {/*begin:Input*/}
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" defaultChecked="checked" name="userGroup" value={'User'} onChange={onChange} />
                                                        </span>
                                                        {/*end:Input*/}
                                                    </label>
                                                    {/*end::Option*/}
                                                    {/*begin:Option*/}
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        {/*begin:Label*/}
                                                        <span className="d-flex align-items-center me-2">
                                                            {/*begin:Info*/}
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bolder fs-6">Admin</span>
                                                            </span>
                                                            {/*end:Info*/}
                                                        </span>
                                                        {/*end:Label*/}
                                                        {/*begin:Input*/}
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="userGroup" value={'Admin'} onChange={onChange} />
                                                        </span>
                                                        {/*end:Input*/}
                                                    </label>
                                                    {/*end::Option*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                        </div>
                                        {/*end::Step 2*/}
                                        {/*begin::Step 3*/}
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-5 fw-bold mb-2">Select Services</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row">
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input className="form-check-input userServices" type="checkbox" value="Service 1" id="userService1" name="userService" onChange={onChange} />
                                                        <label className="form-check-label" htmlFor="userService1">
                                                            Service 1
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="fv-row">
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input className="form-check-input userServices" type="checkbox" value="Service 2" id="userService2" name="userService" onChange={onChange} />
                                                        <label className="form-check-label" htmlFor="userService2">
                                                            Service 2
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="fv-row">
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input className="form-check-input userServices" type="checkbox" value="Service 3" id="userService3" name="userService" onChange={onChange} />
                                                        <label className="form-check-label" htmlFor="userService3">
                                                            Service 3
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="fv-row">
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input className="form-check-input userServices" type="checkbox" value="Service 4" id="userService4" name="userService" onChange={onChange} />
                                                        <label className="form-check-label" htmlFor="userService4">
                                                            Service 4
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="fv-row">
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input className="form-check-input userServices" type="checkbox" value="Service 5" id="userService5" name="userService" onChange={onChange} />
                                                        <label className="form-check-label" htmlFor="userService5">
                                                            Service 5
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                        </div>
                                        {/*end::Step 3*/}
                                        {/*begin::Step 4*/}
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                {/*begin::Input group*/}
                                                <div className="d-flex flex-column mb-7 fv-row">
                                                    {/*begin::Label*/}
                                                    <label htmlFor="password" className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                        <span className="required">Create Password</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Create Password" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    <input type="password" className="form-control form-control-solid" name="password" id="password" placeholder="Password" onChange={onChange} />
                                                    {/* Show password */}
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input onClick={togglePassword} className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                            Show Password
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="d-flex flex-column mb-7 fv-row">
                                                    {/*begin::Label*/}
                                                    <label htmlFor="cpassword" className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                        <span className="required">Confirm Password</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Confirm Password" />
                                                    </label>
                                                    {/*end::Label*/}
                                                    <input type="password" className="form-control form-control-solid" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={onChange} />
                                                </div>
                                                {/*end::Input group*/}
                                                <button type="button" onClick={setPassword} className="btn btn-sm btn-primary">Generate Password</button>
                                            </div>
                                        </div>
                                        {/*end::Step 4*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-stack pt-10">
                                            {/*begin::Wrapper*/}
                                            <div className="me-2">
                                                <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                                                    <span className="svg-icon svg-icon-3 me-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.5" x={6} y={11} width={13} height={2} rx={1} fill="black" />
                                                            <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}Back</button>
                                            </div>
                                            {/*end::Wrapper*/}
                                            {/*begin::Wrapper*/}
                                            <div>
                                                <button data-bs-dismiss="modal" onClick={submit} type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                                    <span className="indicator-label">Submit
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                        <span className="svg-icon svg-icon-3 ms-2 me-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                                </button>
                                                <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                    <span className="svg-icon svg-icon-3 ms-1 me-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}</button>
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Actions*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Content*/}
                            </div>
                            {/*end::Stepper*/}
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

export default CreateAppModal