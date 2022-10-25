import React, { useContext, useEffect } from 'react'
import MainContext from './context/MainContext';

const TestPage = () => {

    const context = useContext(MainContext);
    useEffect(() => {
        context.client.onopen = async () => {
            console.log('connected');
        };
    }, []);
    const f = () => {
        console.log(context.client);
    };
    return (
        <>
            Just for testing purpose
            <button onClick={f}>Test</button>
        </>
    )
}

export default TestPage;