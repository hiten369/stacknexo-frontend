import React, { useContext, useEffect, useState } from 'react'
import EditorContext from '../../context/EditorContext';
import OutsideClickHandler from 'react-outside-click-handler';

const WordsBar = () => {
    const context = useContext(EditorContext);
    const { bottomBar } = context;
    const [value, setValue] = useState(bottomBar.words);
    const [flag, setFlag] = useState('words');

    useEffect(() => {
        setValue(bottomBar[flag]);
    }, [bottomBar]);

    const func = (e) => {
        document.querySelector('.bottomBar-active').classList.remove('bottomBar-active');
        e.target.classList.add('bottomBar-active');
        setValue(bottomBar[e.target.id]);
        setFlag(e.target.id);
    };

    const func1 = () => {
        let b1 = document.querySelector('.bottomBar1');
        if (window.getComputedStyle(b1, null).display === 'block') {
            b1.style.display = 'none';
        }
        else {
            b1.style.display = 'block';
        }
    };

    const func3 = () => {
        let b1 = document.querySelector('.bottomBar1');
        if (window.getComputedStyle(b1, null).display === 'block') {
            b1.style.display = 'none';
        }
    };

    return (
        <>
            <OutsideClickHandler onOutsideClick={func3}>
                <div className="bottomBar">
                    <div className="bottomBar1 bottomBar1c">
                        <div onClick={func} id="words" className="bottomBar11 bottomBar-active">
                            <div className="bottomBar111">
                                <svg width="12" viewBox="0 0 10 12" className="holder_f19n375c"><path d="M1.54 5.346L4.522 8.47l5.938-6.938" strokeWidth="1.5" stroke="#4C7AF1" fill="none" fillRule="evenodd" strokeLinecap="round"></path></svg>
                                <p>{bottomBar.words}</p>
                            </div>
                        </div>
                        <div onClick={func} id="chars" className="bottomBar11">
                            <div className="bottomBar111">
                                <svg width="12" viewBox="0 0 10 12" className="holder_f19n375c"><path d="M1.54 5.346L4.522 8.47l5.938-6.938" strokeWidth="1.5" stroke="#4C7AF1" fill="none" fillRule="evenodd" strokeLinecap="round"></path></svg>
                                <p>{bottomBar.chars}</p>
                            </div>
                        </div>
                        <div onClick={func} id="rt" className="bottomBar11">
                            <div className="bottomBar111">
                                <svg width="12" viewBox="0 0 10 12" className="holder_f19n375c"><path d="M1.54 5.346L4.522 8.47l5.938-6.938" strokeWidth="1.5" stroke="#4C7AF1" fill="none" fillRule="evenodd" strokeLinecap="round"></path></svg>
                                <p>{bottomBar.rt}</p>
                            </div>
                        </div>
                        <div onClick={func} id="st" className="bottomBar11">
                            <div className="bottomBar111">
                                <svg width="12" viewBox="0 0 10 12" className="holder_f19n375c"><path d="M1.54 5.346L4.522 8.47l5.938-6.938" strokeWidth="1.5" stroke="#4C7AF1" fill="none" fillRule="evenodd" strokeLinecap="round"></path></svg>
                                <p>{bottomBar.st}</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={func1} className="bottomBar2">
                        <p>{value}</p>
                        <svg width="10" viewBox="0 0 50 50" className="holder_f19n375c"><polygon points="6,40 23,14 40,40"></polygon></svg>
                    </div>
                </div>
            </OutsideClickHandler>
        </>
    )
}

export default WordsBar;
