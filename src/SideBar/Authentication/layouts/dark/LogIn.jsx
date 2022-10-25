import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import MainContext from '../../../../context/MainContext';
import { publicIpv4 } from 'public-ip';

const Login = (props) => {
    const context = useContext(MainContext);
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: "",
        password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);

    const toggleRemeber=()=> {
        setRememberMe(!rememberMe);
    };

    const onChange=(e)=> {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const submit=async(e)=> {
        e.preventDefault();
        let userIp=await publicIpv4();
        let ans = await context.login(value.email, value.password,userIp);
        console.log(ans);
        if (ans.success) {
            localStorage.setItem('stackNUser', JSON.stringify({
                designationName: ans.data.designationName,
                dob: ans.data.dob,
                email: ans.data.email,
                firstName: ans.data.firstName,
                forced2FA: ans.data.forced2FA,
                lastName: ans.data.lastName,
                userGroup: ans.data.userGroup
            }));

            props.setAlert('success', 'Login Successful! ');
            let token = ans.token;
            localStorage.setItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y', JSON.stringify({ token: token, rememberMe: rememberMe })); // Set the refresh token here <-
            navigate(`/verifyEmail/${props.encrypt(value.email)}`);
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    return (
        <>
            <div style={{ backgroundColor: '#180130', minHeight: '100vh', marginTop: '-23px' }} className="d-flex flex-column flex-root">
                {/*begin::Authentication - Sign-in */}
                <div
                    className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
                    style={{
                        backgroundImage: "url(assets/media/illustrations/sketchy-1/14-dark.png"
                    }}
                >
                    {/*begin::Content*/}
                    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                        {/*begin::Logo*/}

                        {/*end::Logo*/}
                        {/*begin::Wrapper*/}
                        <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                            {/*begin::Form*/}
                            <form
                                className="form w-100"
                                noValidate="novalidate"
                                id="kt_sign_in_form"
                                onSubmit={submit}
                            >
                                {/*begin::Heading*/}
                                <div className="text-center mb-10">
                                    {/*begin::Title*/}
                                    <h1 className="text-dark mb-3">Log In</h1>
                                    {/*end::Title*/}

                                </div>
                                {/*begin::Heading*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-10">
                                    {/*begin::Label*/}
                                    <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <input
                                        className="form-control form-control-lg form-control-solid"
                                        type="text"
                                        name="email"
                                        autoComplete="off"
                                        onChange={onChange}
                                        value={value.email}
                                    />
                                    {/*end::Input*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="fv-row mb-10">
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-stack mb-2">
                                        {/*begin::Label*/}
                                        <label className="form-label fw-bolder text-dark fs-6 mb-0">
                                            Password
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Link*/}
                                        <NavLink
                                            to="/passwordReset"
                                            className="link-primary fs-6 fw-bolder"
                                        >
                                            Forgot Password ?
                                        </NavLink>
                                        {/*end::Link*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                    {/*begin::Input*/}
                                    <input
                                        className="form-control form-control-lg form-control-solid"
                                        type="password"
                                        name="password"
                                        autoComplete="off"
                                        onChange={onChange}
                                        value={value.password}
                                    />
                                    {/*end::Input*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Actions*/}
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input" type="checkbox" value={rememberMe} onChange={toggleRemeber} id="rememberMe" />
                                    <label className="form-check-label my-3 mx-2" htmlFor="rememberMe" >
                                        Remember Me
                                    </label>
                                </div>
                                <div className="text-center">
                                    {/*begin::Submit button*/}
                                    <button
                                        type="submit"
                                        id="kt_sign_in_submit"
                                        className="btn btn-lg btn-primary w-100 mb-5"
                                    >
                                        <span className="indicator-label">Continue</span>
                                        <span className="indicator-progress">
                                            Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span>
                                    </button>
                                    {/*end::Submit button*/}
                                </div>
                                {/*end::Actions*/}
                            </form>
                            {/*end::Form*/}
                        </div>
                        {/*end::Wrapper*/}
                    </div>
                    {/*end::Content*/}
                    {/*begin::Footer*/}
                    <div className="d-flex flex-center flex-column-auto p-10">
                        {/*begin::Links*/}
                        <div className="d-flex align-items-center fw-bold fs-6">
                            <NavLink
                                to="https://keenthemes.com"
                                className="text-muted text-hover-primary px-2"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="mailto:support@keenthemes.com"
                                className="text-muted text-hover-primary px-2"
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="https://1.envato.market/EA4JP"
                                className="text-muted text-hover-primary px-2"
                            >
                                Contact Us
                            </NavLink>
                        </div>
                        {/*end::Links*/}
                    </div>
                    {/*end::Footer*/}
                </div>
                {/*end::Authentication - Sign-in*/}
            </div>

        </>
    )
}

export default Login;
