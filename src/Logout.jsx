import React, { useContext, useEffect } from 'react'
import MainContext from './context/MainContext';
import { publicIpv4 } from 'public-ip';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
    const context = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let userIp = await publicIpv4();
        let ans = await context.logout(userIp);
        console.log(ans);
        if (ans.success) {
            localStorage.removeItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8');
            localStorage.removeItem('923hufweh8934rbuf3489h348ryc34ry890xcr348efq3we90y');
            localStorage.removeItem('stackNUser');
            props.setAlert('success', ans.message);
            navigate('/login');
        }
        else {
            props.setAlert('danger', ans.message);
        }
    };

    return (
        <>
            logging you out please wait ...
        </>
    )
}

export default Logout;