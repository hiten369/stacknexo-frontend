import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReconnectingWebSocket from 'reconnecting-websocket';
import DisconnectAlert from '../Alert/DisconnectAlert';
import MainContext from '../context/MainContext';

var client1;
const WebSocketHandler = (props) => {
    const navigate = useNavigate();
    const context = useContext(MainContext);

    // Constantly check for web socket connection
    useEffect(() => {
        let url=window.location.pathname.replace(/\//g,'-');
        if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
            let token = JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token;
         
            const options = {
                connectionTimeout: 1000,
                maxRetries: 10,
            };

            context.client = new ReconnectingWebSocket(`ws://127.0.0.1:5006/socketServer/${token}/${url}`, [], options);
            window.addEventListener('offline', () => {
                context.client.close();
            });
            context.client.addEventListener('close', () => {
                document.getElementById('dis_modal').style.display = 'block';
            });
            context.client.addEventListener('open', () => {
                client1 = context.client;
                document.getElementById('dis_modal').style.display = 'none';
            });
        }
        else {
            props.setAlert('danger', 'Not Authorised! Login in to continue');
            navigate('/login');
        }
    }, []);

    // Reconnection of web socket 
    function reconnect() {
        // console.log(context.client);
        context.client.close();
        context.client.reconnect();
        document.getElementById('dis_modal').style.display = 'none';
    }

    return (
        <>
            {/* Web Socket Warning Alert */}
            <DisconnectAlert reconnect={reconnect} />
        </>
    )
}

export default WebSocketHandler;
