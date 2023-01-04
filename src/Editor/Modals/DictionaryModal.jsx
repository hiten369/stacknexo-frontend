import React, { useState } from 'react';

const DictionaryModal = (props) => {
    const [word, setWord] = useState('');

    const onChange = (e) => {
        setWord(e.target.value);
    };

    const updateDict = async (e) => {
        props.updateDictModal(e.target.previousElementSibling.innerText, props.editorContext);
    }
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="dictModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Manage Dictionary</h5>
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h3 className="mb-4">Personal Dictionary</h3>
                            <p>Improve your Grammarly experience by adding words to your personal dictionary.These words will no longer be flagged as misspellings.</p>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                props.updateDictModal(word, props.editorContext);
                                setWord('');
                            }} className="row2 my-3 row4">
                                <input onChange={onChange} type="text" className="form-control" value={word} required />
                                <button className="btn ms-4 btn-info btn-sm">Add</button>
                            </form>
                            <div>
                                {props.dictWords.map((e, index) => {
                                    return <div className="d-flex px-3 py-1 dict-section justify-content-between" style={{ 'marginRight': '75px' }} key={index}>
                                        <p>{e}</p>
                                        <img onClick={updateDict} src="https://did0rp9pm2ntw.cloudfront.net/assets/static/media/trash.ff2f5290b3f84fe4bc9d428454cfe301.svg" className="dictionary_d_trash__p2WuO" alt="delete" />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DictionaryModal;