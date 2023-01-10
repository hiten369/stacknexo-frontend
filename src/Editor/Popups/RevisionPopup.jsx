import React, { useContext } from 'react'
import EditorContext from '../../context/EditorContext';

const RevisionPopup = (props) => {
    const editorContext = useContext(EditorContext);
    const { onEditorStateChange } = editorContext;

    const approve = () => {
        let newId = props.revisionStats.new;
        props.setRevisionStats({
            old: newId,
            new: ''
        });
        props.setRevisionFlag(false);
    };

    const disApprove = () => {
        let oldId = props.revisionStats.old;
        let newId = props.revisionStats.new;
        // console.log(old);

        if (oldId !== '') {
            document.getElementById(oldId).classList.add('btn-success');
            document.getElementById(oldId).classList.remove('btn-secondary');
            document.getElementById(oldId).innerText = 'Selected';
        }

        document.getElementById(newId).classList.remove('btn-success');
        document.getElementById(newId).classList.add('btn-secondary');
        document.getElementById(newId).innerText = 'Preview';
        props.setRevisionStats({
            old: oldId,
            new: ''
        });

        props.editorG.render({
            blocks: props.currentData
        });

        // Saving the current text
        onEditorStateChange(props.currentData, props.client);
        props.setRevisionFlag(false);
    };

    return (
        <>
            <div className="rvpp">
                <div className="rvpp1 row2">
                    <img width="20" src="/assets/media/editor/bottom_arrow.png" alt="Bottom" />
                    <b className="mx-2">​ Would you like to restore the document to this version? </b>
                    <button onClick={approve} className="btn btn-light btn-sm ms-4 py-1 px-3">Yes</button>
                    <button onClick={disApprove} className="btn btn-light btn-sm ms-3 py-1 px-3">No</button>
                </div>
            </div>
        </>
    )
}

export default RevisionPopup;
