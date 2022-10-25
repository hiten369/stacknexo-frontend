import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import MainContext from '../../../context/MainContext';
import useScript from '../../../CustomScripts/UseScript';
import { publicIpv4 } from 'public-ip';

const VerifyEmail = (props) => {
    const navigate = useNavigate();
    const context = useContext(MainContext);
    const [value, setValue] = useState('');
    const [value1, setvalue1] = useState('');
    const [tsOut, setTsOut] = useState(true);
    let [ntry, setNtry] = useState(0);
    const { email, otp } = useParams();
    const data = context.userData;
    let flag1 = false;

    useEffect(() => {
        getData();
    }, []);

    const getData=async()=>{
        document.getElementById('auth1').style.display = 'none';
        if (localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')) {
            let userIp = await publicIpv4();
            context.userDetail(userIp);
        }

        if (localStorage.getItem('login_timeout') !== null) {
            if (new Date().getTime() >= localStorage.getItem('login_timeout')) {
                if (otp !== undefined) {
                    let userIp = await publicIpv4();
                    let ans = await context.verifyOtp1(otp, userIp, props.decrypt(email));
                    if (ans.success) {
                        props.setAlert('success', ans.message);
                        let token = ans.token;
                        setWithExpiry('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8', token, 86400000);
                        navigate('/');
                    }
                    else {
                        setTsOut(false);
                        setTimeout(() => {
                            setTsOut(true);
                            context.email2fa(props.decrypt(email), userIp);
                        }, 60000);
                        props.setAlert('danger', ans.message);
                    }
                }
                else {
                    let userIp = await publicIpv4();
                    context.email2fa(props.decrypt(email, userIp));
                    localStorage.removeItem('login_timeout');
                }
            }
            else {
                setTsOut(false);
                setTimeout(() => {
                    setTsOut(true);
                }, localStorage.getItem('login_timeout') - new Date().getTime());
            }
        }
        else {
            if (otp !== undefined) {
                let userIp = await publicIpv4();
                let ans = await context.verifyOtp1(otp, userIp, props.decrypt(email));

                if (ans.success) {
                    let token = ans.token;
                    setWithExpiry('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8', token, 86400000);
                    props.setAlert('success', ans.message);
                    navigate('/');
                }
                else {
                    setTsOut(false);
                    setTimeout(() => {
                        setTsOut(true);
                        context.email2fa(props.decrypt(email, userIp));
                    }, 60000);
                    props.setAlert('danger', ans.message);
                }
            }
            else {
                let userIp = await publicIpv4();
                context.email2fa(props.decrypt(email, userIp));
            }
        }
    };

    if (localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')) {
        if (data.forced2FA) {
            flag1 = true;
            // document.getElementById('auth1').style.display='block';
            // document.getElementById('auth2').style.display='none';
        }
    }

    useScript('/moreJs/j3.js', flag1);

    const btnclk = (e) => {
        if (e.target.id === 'btn1') {
            document.getElementById('auth1').style.display = 'block';
            document.getElementById('auth2').style.display = 'none';
        }
        else {
            document.getElementById('auth1').style.display = 'none';
            document.getElementById('auth2').style.display = 'block';
        }
    };

    const setWithExpiry=(key, value, ttl) => {
        const now = new Date();
        const item = {
            token: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    };

    const onChange=(e)=> {
        setValue(e.target.value);
    };

    // Resend the email verification code
    const submit=async(e) => {
        let userIp = await publicIpv4();
        context.email2fa(props.decrypt(email, userIp));
        e.preventDefault();
        setNtry(++ntry);
        if (ntry === 5) {
            localStorage.setItem('login_timeout', new Date().getTime() + 1200000);
            setTsOut(false);
            setTimeout(() => {
                setTsOut(true);
                setNtry(0);
                localStorage.removeItem('login_timeout');
            }, 1200000);
        }
        else {
            localStorage.setItem('login_timeout', new Date().getTime() + 60000);
            setTsOut(false);
            setTimeout(() => {
                setTsOut(true);
                localStorage.removeItem('login_timeout');
            }, 60000);
        }
    };

    const submit2=async (e) =>{
        e.preventDefault();
        let userIp = await publicIpv4();
        let ans = await context.verifyOtp(value, userIp, props.decrypt(email));
        if (ans.success) {
            props.setAlert('success', ans.message);
            let token = ans.token;
            setWithExpiry('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8', token, 86400000);
            navigate('/');
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    const onChange1=(e)=> {
        setvalue1(e.target.value);
    };

    const submit1=async (e) => {
        e.preventDefault();
        let userIp = await publicIpv4();
        let ans = await context.verify2(value1, userIp);
        if (ans.success) {
            props.setAlert('success', ans.message);
            let token = ans.token;
            setWithExpiry('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8', token, 86400000);
            navigate('/');
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };
    
    return (
        <>
            <div className="d-flex flex-column flex-root">
                {/*begin::Authentication - Signup Verify Email */}
                <div className="d-flex flex-column flex-column-fluid">
                    {/*begin::Content*/}
                    <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
                        {/*begin::Logo*/}
                        <NavLink to="../../demo14/dist/index.html" className="mb-10 pt-lg-10">
                            <img
                                alt="Logo"
                                src="/assets/media/logos/logo-1.svg"
                                className="h-40px mb-5"
                            />
                        </NavLink>
                        {/*end::Logo*/}
                        {/*begin::Wrapper*/}
                        <div id="auth1" className="pt-lg-10 mb-10">
                            {/*begin::Logo*/}

                            <h1 className="fw-bolder fs-2qx text-gray-800 mb-7">
                                Verify Your Google Authenticator Code
                            </h1>
                            {/*end::Logo*/}
                            {/*begin::Message*/}
                            <div className="fs-3 fw-bold text-muted mb-10">
                                Enter the code which is displaying in your device google authenticator app
                            </div>
                            {/*end::Message*/}
                            {/*begin::Action*/}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="text-center mb-10">
                                <input type="text" className=" px-3 py-3 form-control-solid" placeholder="Enter Otp" name="otp" onChange={onChange1} value={value1} />
                                <button onClick={submit1} className="btn mt-2 btn-primary">Submit</button>
                            </div>
                            {/*end::Action*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Wrapper*/}
                        <div id="auth2" className="pt-lg-10 mb-10">
                            {/*begin::Logo*/}

                            <h1 className="fw-bolder fs-2qx text-gray-800 mb-7">
                                Verify Your Email
                            </h1>
                            {/*end::Logo*/}
                            {/*begin::Message*/}
                            <div className="fs-3 fw-bold text-muted mb-10">
                                We have sent an email to
                                <NavLink to="#" className="link-primary fw-bolder">
                                    max@keenthemes.com
                                </NavLink>
                                <br />
                                Enter OTP sent to provided email
                            </div>
                            {/*end::Message*/}
                            {/*begin::Action*/}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="text-center mb-10">
                                <input type="text" className=" px-3 py-3 form-control-solid" placeholder="Enter Otp" name="otp" onChange={onChange} value={value} />
                                <button onClick={submit2} className="btn btn-success mt-2">Submit</button>
                                <button onClick={submit} disabled={!tsOut} className="btn mt-2 btn-primary">{tsOut ? 'Resend Otp' : `Try again in ${Math.floor((localStorage.getItem('login_timeout') - new Date().getTime()) / 1000)} seconds`} </button>
                            </div>
                            {/*end::Action*/}
                            {/*begin::Action*/}
                            <div className="fs-5">
                                <span className="fw-bold text-gray-700">Did’t receive an email?</span>
                                <NavLink
                                    to="../../demo14/dist/authentication/sign-up/basic.html"
                                    className="link-primary fw-bolder"
                                >
                                    Resend
                                </NavLink>
                            </div>
                            {/*end::Action*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Illustration*/}
                        {data.forced2FA ? <div className="row d-flex justify-content-center">
                            <button id="btn1" onClick={btnclk} style={{ width: 'fit-content' }} className="btn mx-2 btn-info">G-Verify</button>
                            <button id="btn2" onClick={btnclk} style={{ width: 'fit-content' }} className="btn mx-2 btn-danger">Email-Verify</button>
                        </div> : null}

                        <div
                            className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                            style={{
                                backgroundImage: "url(assets/media/illustrations/sketchy-1/17.png"
                            }}
                        />
                        {/*end::Illustration*/}
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
                {/*end::Authentication - Signup Verify Email*/}
            </div>
        </>
    )
}

export default VerifyEmail;