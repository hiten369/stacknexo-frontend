import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import MainContext from './context/MainContext';
import { publicIpv4 } from 'public-ip';

var client1;
const HeartBeatHandler = (props) => {
    const context = useContext(MainContext);
    const navigate = useNavigate();
    var flag = true;
    var temp = 'idle';

    // Get notification
    const get_noti = () => {
        context.client.send(JSON.stringify({
            type: "get",
            type1: "NOTIFICATION",
        }));
    };

    // Update notification
    const update_noti = (data) => {
        context.client.send(JSON.stringify({
            type: "put",
            type1: "NOTIFICATION",
            data: data
        }));
    };

    // detect user event
    const idleLogout = () => {
        temp = 'idle';

        window.onload = () => {
            resetTimer('load');
        };

        window.onmousemove = () => {
            resetTimer('mouse move');
        };

        window.onmousedown = () => {
            resetTimer('screen touch');
        };

        window.ontouchstart = () => {
            resetTimer('screen swipe');
        };

        window.ontouchmove = () => {
            resetTimer('screen swipe');
        };

        window.onclick = () => {
            resetTimer('click');
        };

        window.onkeydown = () => {
            resetTimer('typing');
        };

        window.addEventListener('scroll', () => { resetTimer('scrolling'); }, true);

        function resetTimer(s) {
            temp = s;
        };
    };

    // Cheking for notifications
    // Getting websocket messages
    // Managing heartbear api, tracking user activity
    useEffect(() => {
        checkForNotifications();
        getMessages();
        getData();
    }, []);

    const checkForNotifications=()=>{
        setInterval(() => {
            get_noti();
        }, 4000);
    };

    const getMessages=()=>{
        client1 = context.client;
        context.client.onmessage = async (message) => {
            const dataFromServer = JSON.parse(message.data);
            // console.log(dataFromServer);
            if (dataFromServer.type1 === 'NOTIFICATION') {
                if (dataFromServer.type === 'get') {
                    let curretUser = JSON.parse(localStorage.getItem('stackNUser')).userId;
                    for (let i of dataFromServer.data.data) {
                        if (i.notiUser === curretUser) {
                            console.log('this is heartbeat page noti');
                            props.notify({ id: i._id, title: i.notiTitle, desc: i.notiDesc, type: i.notiType });
                            setTimeout(() => {
                                update_noti({ notiId: i._id, notiFlag: false });
                            }, 1000);
                        }
                    }
                }
            }
        }
    };

    const getData = async () => {
        // Tracking user active status along various tabs.
        // If internet is connected.
        if (navigator.onLine) {
            // Filtering the pages for which the api should not run.
            if (!window.location.pathname.includes('/login') && !window.location.pathname.includes('/verifyEmail') && !window.location.pathname.includes('/offline')) {
                document.addEventListener('visibilitychange', () => {
                    if (flag) {
                        let url = window.location.href;
                        let l = localStorage.getItem('stn445566');
                        if (document.hidden) {
                            if (l) {
                                l = JSON.parse(l);
                            }
                            else {
                                l = {};
                            }
                            l[url] = 'Inactive';
                            localStorage.setItem('stn445566', JSON.stringify(l));
                        }
                        else {
                            if (l) {
                                l = JSON.parse(l);
                            }
                            else {
                                l = {};
                            }
                            l[url] = 'Active';
                            localStorage.setItem('stn445566', JSON.stringify(l));
                        }
                    }
                });
            }
        }

        // Constantly run heart beat every 4 second.
        setInterval(async () => {

            // If internet is connected.
            if (navigator.onLine) {

                // Filtering the pages for which the api should not run.
                if (!window.location.pathname.includes('/login') && !window.location.pathname.includes('/verifyEmail') && !window.location.pathname.includes('/offline')) {

                    let url1 = window.location.href;
                    let l1 = localStorage.getItem('stn445577');
                    if (l1) {
                        l1 = JSON.parse(l1);
                        if (!l1.tabUrls.includes(url1)) {
                            l1.tabUrls.push(url1);
                            l1.tabCount += 1;
                            localStorage.setItem('stn445577', JSON.stringify({ tabUrls: l1.tabUrls, tabCount: l1.tabCount }));
                        }
                    }
                    else {
                        localStorage.setItem('stn445577', JSON.stringify({ tabUrls: [url1], tabCount: 1 }));
                    }
                    window.onbeforeunload = () => {
                        flag = false;
                        let url2 = window.location.href;
                        let l = localStorage.getItem('stn445566');
                        if (l) {
                            l = JSON.parse(l);
                            delete l[url2];
                            localStorage.setItem('stn445566', JSON.stringify(l));
                        }
                        let l1 = localStorage.getItem('stn445577');
                        if (l1) {
                            l1 = JSON.parse(l1);
                            if (l1.tabUrls.includes(url2)) {
                                l1.tabUrls.splice(l1.tabUrls.indexOf(url2), 1);
                                l1.tabCount -= 1;
                                localStorage.setItem('stn445577', JSON.stringify(l1));
                            }
                        }
                        let l2 = localStorage.getItem('stn445588');
                        if (l2) {
                            l2 = JSON.parse(l2);
                            l2.splice(l2.indexOf(url2), 1);
                            localStorage.setItem('stn445588', JSON.stringify(l2));
                        }
                    }

                    idleLogout();

                    // Check if refresh token is present.
                    if (localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')) {
                        // console.log('if');
                        let userIp = await publicIpv4();
                        let ans = await context.verifyReft(userIp);

                        // Checking if present refresh token is true.
                        if (ans.flag) {
                            // console.log('if 1');
                            let ans2 = await context.verifySession(userIp);

                            // Verifying the current session.
                            if (ans2.flag) {
                                // console.log('if 2');

                                // Check if jwt token is present.
                                if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
                                    // console.log('if 3');
                                    let ans1 = await context.verifyJwt(userIp);
                                    // Validating the jwt token.
                                    if (ans1.flag) {
                                        // console.log('if 4');

                                        // Login the user
                                        if (localStorage.getItem('stn445577') && localStorage.getItem('stn445566') && localStorage.getItem('stn445588') && temp) {
                                            context.heartBeat(JSON.parse(localStorage.getItem('stn445588')), temp, JSON.parse(localStorage.getItem('stn445566')), JSON.parse(localStorage.getItem('stn445577')).tabCount);
                                            console.log('Heart Beat');
                                            // console.log(JSON.parse(localStorage.getItem('stn445588')));
                                            // console.log(temp);
                                            // console.log(JSON.parse(localStorage.getItem('stn445566')));
                                            // console.log(JSON.parse(localStorage.getItem('stn445577')).tabCount);
                                        }
                                        context.userDetail(userIp);
                                    }
                                    else {
                                        console.log(ans1);
                                        console.log('else 4');
                                        localStorage.removeItem('stn445566');
                                        localStorage.removeItem('stn445577');
                                        localStorage.removeItem('stn445588');
                                        props.setAlert('danger', 'Not Authorised! Login in to continue');
                                        localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');

                                        // Checking if remember me is selected when logging in.
                                        if (JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).rememberMe) {
                                            console.log('else 4 if');

                                            // Redirect user to 2 fa page while removing the jwt token.
                                            navigate(`/verifyEmail/${props.encrypt(JSON.parse(localStorage.getItem('stackNUser')).email)}`);
                                        }

                                        // Remember me is not selected.
                                        else {
                                            console.log('else 4 else');
                                            navigate('/login');
                                        }
                                    }
                                }
                                else {
                                    console.log('else 3');

                                    // Redirecting user to 2 fa page.
                                    localStorage.removeItem('stn445566');
                                    localStorage.removeItem('stn445577');
                                    localStorage.removeItem('stn445588');
                                    props.setAlert('danger', 'Not Authorised! Login in to continue');

                                    // Checking if remember me is selected when logging in.
                                    if (JSON.parse(localStorage.getItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y')).rememberMe) {
                                        console.log('else 3 if');

                                        // Redirect user to 2 fa page while removing the jwt token.
                                        navigate(`/verifyEmail/${props.encrypt(JSON.parse(localStorage.getItem('stackNUser')).email)}`);
                                    }

                                    // Remember me is not selected.
                                    else {
                                        console.log('else 3 else');
                                        navigate('/login');
                                    }
                                }
                            }

                            // If current session is not active, Remove the refresh token along with the jwt token and user detail.
                            else {
                                console.log('else 2');
                                localStorage.removeItem('stn445566');
                                localStorage.removeItem('stn445577');
                                localStorage.removeItem('stn445588');
                                localStorage.removeItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y');
                                localStorage.removeItem('stackNUser');
                                props.setAlert('danger', 'Not Authorised! Login in to continue');
                                localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
                                navigate('/login');
                            }
                        }

                        // Present refresh token is invalid, Remove the refresh token along with the jwt token (if present) and user detail.
                        else {
                            console.log('else 1');
                            localStorage.removeItem('stn445566');
                            localStorage.removeItem('stn445577');
                            localStorage.removeItem('stn445588');
                            props.setAlert('danger', 'Not Authorised! Login in to continue');
                            localStorage.removeItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y');
                            localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
                            localStorage.removeItem('stackNUser');
                            navigate('/login');
                        }
                    }

                    // Remove the jwt token and user detail (if any)
                    else {
                        console.log('else');
                        localStorage.removeItem('stn445566');
                        localStorage.removeItem('stn445577');
                        localStorage.removeItem('stn445588');
                        localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
                        localStorage.removeItem('stackNUser');
                        props.setAlert('danger', 'Not Authorised! Login in to continue');
                        navigate('/login');
                    }
                }
            }

            // Navigate to offline page.
            else {
                localStorage.removeItem('stn445566');
                localStorage.removeItem('stn445577');
                localStorage.removeItem('stn445588');
                // localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
                navigate('/offline');
            }
        }, 4000);
    };

    // Checking the urls
    useEffect(() => {
        let url = window.location.href;
        let l = localStorage.getItem('stn445588');
        let l1 = localStorage.getItem('stn445566');

        if (l) {
            l = JSON.parse(l);

            if (l.includes(url)) {
                alert("You cannot same url in 2 tabs! ");
                window.open("about:blank", "_self");
                window.close();
            }
            else {
                l.push(url);
                localStorage.setItem('stn445588', JSON.stringify(l));
            }
        }
        else {
            localStorage.setItem('stn445588', JSON.stringify([url]));
        }

        if (!l1) {
            let t = {};
            t[url] = 'Active';
            localStorage.setItem('stn445566', JSON.stringify(t));
        }
        else {
            l1 = JSON.parse(l1);
            if (!Object.keys(l1).includes(url)) {
                l1[url] = 'Active';
                localStorage.setItem('stn445566', JSON.stringify(l1));
            }
        }

    }, [window.location.href]);


    return (
        <>

        </>
    )
}

export default HeartBeatHandler;
