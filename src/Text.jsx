import React, { useContext, useEffect } from 'react'
import MainContext from './context/MainContext';
import HeartBeatHandler from './HeartBeatHandler';

const Text = (props) => {
    const func = () => {
        // console.log(context.client);
        // localStorage.setItem("notify-stn0011",JSON.stringify({title: "demo title", desc: "demo desc", type: "warning"}));
        props.notify({ id:'62d337749cb40629419312f9', title: 'this is title', desc: 'this would be a something long text description', type: 'error' });
    };
    return (
        <>
            {/* <HeartBeatHandler notify={props.notify} setAlert={props.setAlert} encrypt={props.encrypt} /> */}
            <button onClick={func}>Notify</button>
        </>
    )
};

export default Text;
