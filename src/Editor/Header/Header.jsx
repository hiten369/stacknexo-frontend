import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

var t;
const Header = (props) => {
    const navigate=useNavigate();

    useEffect(()=>{
        const add=window.location.pathname.split('/')[window.location.pathname.split('/').length-1];
        if(add==='overview')
        {
            document.getElementById('research').classList.add('e-header-active');
            document.body.style.fontFamily=`'Inter', sans-serif`;
            document.body.style.fontFamily=`'Montserrat', sans-serif`;
        }
        else
        {
            document.getElementById('grader').classList.add('e-header-active');
            document.body.style.fontFamily=`'Inter', sans-serif`;
        }
    },[]);

    const func = (e) => {
        if (e === 'op1') {
            navigate(`/editor2/${props.articleId}/overview`);
        }
        else {
            navigate(`/editor2/${props.articleId}`);
        }
    };

    const func1 = () => {
        let b1 = document.querySelector('.e-share');
        if (window.getComputedStyle(b1, null).display === 'block') {
            b1.style.display = 'none';
        }
        else {
            b1.style.display = 'block';
        }
    };

    const copyToClipboard=()=> {
        var target = `/editor2/${props.articleId}`;
        navigator.clipboard.writeText(target).then(function () {
            // Setting the message for bottom right alert box
            clearTimeout(t);
            document.getElementById('e-text-copy').style.display='block';
            t=setTimeout(() => {
                document.getElementById('e-text-copy').style.display='none';
            }, 4000);
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    };

    return (
        <>
            <div className="e-header">
                <div className="e-header1 row2 row4 row5">
                    <div className="e-header11 row2 row4">
                        <div className="e-header-logo mx-5">
                            Stacknexo
                        </div>
                        <div className="e-header-title ms-5 row2 row4">
                            <div onClick={() => func('op1')} id="research" className="e-header-t1 row2 row4 me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-inboxes" viewBox="0 0 16 16">
                                    <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438L14.933 6zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z" />
                                </svg>
                                <p className="ms-3">Content Research</p>
                            </div>
                            <div onClick={() => func('op2')} id="grader" className="e-header-t1 row2 row4 ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-textarea-t" viewBox="0 0 16 16">
                                    <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                    <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
                                </svg>
                                <p className="ms-3">Content Grader</p>
                            </div>
                        </div>
                    </div>
                    <div className="e-header12">
                        <button onClick={func1} className="btn btn-info py-2 px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1 bi bi-share-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>
            </div>
            <div className="e-share">
                <h5>Only those who has the permission to view and edit the article can access.</h5>
                <b id="e-text-copy" className="text-success mt-2">Copied to clipboard</b>
                <div className="e-share1">
                    <input type="text" className="form-control" onChange={(e)=>{
                        e.target.value=e.target.value;
                    }} value={`/editor2/${props.articleId}`} />
                    <button onClick={copyToClipboard} className="btn ms-2 btn-icon btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;
