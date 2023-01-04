import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReconnectingWebSocket from 'reconnecting-websocket';
import DisconnectAlert from '../Alert/DisconnectAlert';
import EditorContext from '../context/EditorContext';

var client1;
// const baseUrl='http://stacknexo-backend-app.herokuapp.com';
const baseUrl = 'stacknexo-backend-app.herokuapp.com';
const WebSocketHandler = (props) => {
    const navigate = useNavigate();
    const context = useContext(EditorContext);

    // Constantly check for web socket connection
    useEffect(() => {
        let url = window.location.pathname.replace(/\//g, '-');
        if (localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')) {
            let token = JSON.parse(localStorage.getItem('bnfu498hjdrdmsix3e1mc3nrtnyev8erx4nrerime9ntvcu34n8')).token;

            const options = {
                connectionTimeout: 2500,
                maxRetries: 10,
            };

            // context.client = new ReconnectingWebSocket(`ws://127.0.0.1:5001/socketServer/${token}/${url}`, [], options);
            context.client = new ReconnectingWebSocket(`ws://localhost:5001/socketServer/${token}/${url}`, [], options);
            // context.client = new ReconnectingWebSocket(`wss://${baseUrl}/socketServer/${token}/${url}`, [], options);
            client1 = context.client;
            window.addEventListener('offline', () => {
                console.log('offline');
                context.client.close();
            });
            context.client.addEventListener('close', () => {
                console.log('close');
                document.getElementById('dis_modal').style.display = 'block';
            });
            context.client.addEventListener('open', () => {
                console.log('open');
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
