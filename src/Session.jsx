import React, { useContext, useEffect, useState } from 'react'
import MainContext from './context/MainContext';
import { publicIpv4 } from 'public-ip';
import Navbar from './Navbar/Navbar';
import Aside from './Aside/Aside';

const Session = (props) => {
    const context = useContext(MainContext);
    const [data, setData] = useState([]);
    const [index1, setIndex1] = useState(-1);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        props.setLoad1(false);
        let userIp = await publicIpv4();
        context.userDetail(userIp);
        let currentIndex = await context.getCurrentSession(userIp);
        setIndex1(currentIndex.data);
        let ans = await context.getUserSessions();
        console.log(ans);
        setData(ans.data);
        props.setLoad1(true);
    };

    const removeSession = async (index) => {
        console.log(index1, index);
        let userIp = await publicIpv4();
        let ans = await context.removeSession(index, userIp);
        if (ans.success) {
            console.log(ans.message);
            if (index === index1) {
                window.location.href = "/login";
            }
        }
        else {
            console.log(ans.message);
        }
    };

    // Remove all sessions of logged in user
    const removeAllSession = async () => {
        let userIp = await publicIpv4();
        let ans = await context.removeAllSessionByUser(userIp);
        if (ans.success) {
            console.log(ans.message);
            window.location.href = "/login";
        }
        else {
            console.log(ans.message);
        }
    };

    return (
        <>
            <Navbar setAlert={props.setAlert} encrypt={props.encrypt} />
            <Aside />
            <div style={{ paddingTop: "5rem", paddingLeft: "2rem" }} className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="page d-flex flex-row flex-column-fluid">
                    {/*begin::Wrapper*/}
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        {/*begin::Content wrapper*/}
                        <div className="d-flex flex-column-fluid">
                            {/*begin::Container*/}
                            <div className="d-flex flex-column flex-column-fluid container-fluid">
                                <button onClick={removeAllSession} className="btn btn-info">Remove all sessions</button>
                                <div className="row">
                                    {props.load ? data.map((e, index) => {
                                        // if(e.userSession.status==='active' || e.)
                                        return (
                                            <div key={index} className="col-md-4">
                                                <div className="card">
                                                    {index1 === index ? <span clasNames="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        Current
                                                        <span className="visually-hidden">unread messages</span>
                                                    </span> : null}
                                                    <div className="card-body">
                                                        <h5 className="card-title">{e.status}</h5>
                                                        {e.device ? <>
                                                            <p className="card-text">{e.device.brand ? e.device.brand : "- -"}</p>
                                                            <p className="card-text">{e.device.model ? e.device.model : "- -"}</p>
                                                            <p className="card-text">{e.device.type ? e.device.type : "- -"}</p>
                                                            <p className="card-text">{e.device.browser ? e.device.browser : "- -"}</p>
                                                        </> : "- -"}
                                                        <p className="card-text">{e.city ? e.city : "- -"}</p>
                                                        <p className="card-text">{e.country ? e.country : "- -"}</p>
                                                        <p className="card-text">{e.ip ? e.ip : "- -"}</p>
                                                        <button onClick={() => {
                                                            removeSession(index);
                                                        }} className="btn btn-danger">Remove Sesison</button>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }) : 'Loading ...'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Session
