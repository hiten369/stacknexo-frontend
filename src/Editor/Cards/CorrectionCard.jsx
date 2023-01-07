import React, { useContext } from 'react';
import EditorContext from '../../context/EditorContext';
import { updateDict } from '../Utils/DictionaryUtil';
import parse from 'html-react-parser';
import { dltCard, expand1, expand2, textChange } from '../Utils/GrammarUtils';

const CorrectionCard = ({ ind, index, index2, e }) => {
    const editorContext = useContext(EditorContext);
    const { blockIds, blockDetails, flag4, grammarFlag, grammarFlag1 } = editorContext;

    // Contains the function which corrects text on click
    const textChangeUtil = (blockIds, ind, index, e, flag = false, f = 0, index1 = 0) => {
        return (
            <span key={index1} onClick={() => {
                textChange(
                    blockIds[ind][index],
                    e.begin !== e.end ?
                        (e.highlightEnd - e.highlightBegin >= e.end - e.begin) ?
                            e.text :
                            `${e.begin}-${e.end}` :
                        e.begin - e.highlightBegin,
                    e.replacements[index1],
                    e.begin !== e.end ? false : true,
                    ind,
                    index,
                    e.begin,
                    e.end,
                    e.text,
                    e.end > e.highlightEnd ? true : false,
                    e.begin < e.highlightBegin ? true : false,
                    e.highlightBegin - e.begin,
                    editorContext,
                    e.highlightBegin,
                    e.highlightEnd
                );
            }}>{parse(flag ? f : e.transforms[0])}</span>
        )
    };

    return (
        <div onClick={(f) => {
            expand1(f, blockIds[ind][index]);
        }} key={index} id={`${blockIds[ind][index]}1`} className={`em2-box px-4 py-4 ${blockDetails[ind].id}`}>
            <div className="em2-box1">
                {e.cardLayout.outcome === 'Clarity' ?
                    <svg width="20" viewBox="0 0 20 20" >
                        <path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path>
                        <path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path>
                    </svg> :
                    e.cardLayout.outcome === 'Correctness' ?
                        <svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path>
                            <g filter="url(#a)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path>
                            </g>
                            <defs>
                                <filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                </filter>
                            </defs>
                        </svg> :
                        e.cardLayout.outcome === 'Engagement' ?
                            <svg width="20" viewBox="0 0 20 20">
                                <path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path>
                                <path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path>
                                <path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path>
                            </svg> :
                            e.cardLayout.outcome === 'Tone' ?
                                <svg width="20" viewBox="0 0 20 20">
                                    <path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path>
                                    <path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path>
                                    <path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path>
                                </svg> :
                                null}

                <p className="ms-2">{`${e.highlightText.slice(0, 27)}...`}</p>
                <p className="text-gray ms-3">{e.todo}</p>
                <div className="baseMiniActivateBtnSelector f1758bz9">
                    <i className="icon_f1r6abcu activeTopIcon_ficds8d" data-role="icon">
                        <svg width="10" viewBox="0 0 10 10" className="holder_f19n375c">
                            <path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path>
                        </svg>
                    </i>
                    <i className="icon_f1r6abcu activeBottomIcon_f1tqo8o3" data-role="icon">
                        <svg width="10" viewBox="0 0 10 10" className="holder_f19n375c">
                            <path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path>
                        </svg>
                    </i>
                </div>
            </div>
            <div className="em2-box2">
                <div className="em2-box11 mb-3">
                    {e.cardLayout.outcome === 'Clarity' ?

                        <div className="em2-box111 mt-2 mb-5">
                            <svg width="20" viewBox="0 0 20 20" >
                                <path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path>
                                <path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path>
                            </svg>
                            <p className="text-gray">{e.cardLayout.group}</p>
                        </div> :

                        e.cardLayout.outcome === 'Correctness' ?
                            <div className="em2-box111 mt-2 mb-5">
                                <svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path>
                                    <g filter="url(#a)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path>
                                    </g>
                                    <defs>
                                        <filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter>
                                    </defs>
                                </svg>
                                <p className="text-gray">{e.cardLayout.group}</p>
                            </div> :

                            e.cardLayout.outcome === 'Engagement' ?
                                <div className="em2-box111 mt-2 mb-5">
                                    <svg width="20" viewBox="0 0 20 20">
                                        <path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path>
                                        <path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path>
                                        <path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className="text-gray">{e.cardLayout.group}</p>
                                </div> :

                                e.cardLayout.outcome === 'Tone' ?
                                    <div className="em2-box111 mt-2 mb-5">
                                        <svg width="20" viewBox="0 0 20 20" >
                                            <path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path>
                                            <path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path>
                                            <path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path>
                                        </svg>
                                        <p className="text-gray">{e.cardLayout.group}</p>
                                    </div> : null}

                    <div>
                        {e.transforms ? e.transforms.length > 1 ?
                            <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>
                                {e.transforms.map((f, index2) => {
                                    return (
                                        textChangeUtil(blockIds, ind, index, e, true, f, index2)
                                    );
                                })}
                            </p> :

                            e.group === 'Spelling' ?
                                e.category === 'Unknown' ?
                                    <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>
                                        <b>Unknown word: </b>
                                        <i className="text-danger fw-bolder">{e.text}</i>
                                    </p> :

                                    <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className='cpar'>
                                        {textChangeUtil(blockIds, ind, index, e)}
                                    </p> :

                                <p style={flag4 || grammarFlag || grammarFlag1 ? { 'pointerEvents': 'none', 'cursor': 'wait' } : {}} className={e.cardLayout.outcome === 'Correctness' ? 'cpar cpar_correct' : 'cpar'}>
                                    {textChangeUtil(blockIds, ind, index, e)}
                                </p> :

                            <b>{e.title}</b>}
                    </div>
                </div>
                <div className="em2-box12 mb-4">
                    <p dangerouslySetInnerHTML={{ __html: e.explanation.slice(3,) }}></p>
                </div>
                {e.examples !== '' ?
                    <>
                        <div className="em2-box14 mb-4">
                            <div className="em-box141 mb-3">
                                <p dangerouslySetInnerHTML={{ __html: e.details.slice(3,) }}></p>
                            </div>

                            <div className="em-box142">
                                {e.examples.split('<br/>')[0] ? <div className="em-box1421 my-2">
                                    <div className="em-box-incorrect my-1">
                                        <h5 className="text-red mb-0">Incorrect</h5>
                                        <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[0].split(':')[1] ? e.examples.split('<br/>')[0].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[0].slice(3,) }}></p>
                                    </div>
                                    <div className="em-box-correct my-1">
                                        <h5 className="text-green mb-0">correct</h5>
                                        <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[1].split(':')[1] ? e.examples.split('<br/>')[1].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[1].slice(3,) }}></p>
                                    </div>
                                </div> : null}

                                {e.examples.split('<br/>')[2] ?
                                    <div className="em-box1421 my-2">
                                        <div className="em-box-incorrect my-1">
                                            <h5 className="text-red mb-0">Incorrect</h5>
                                            <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[2].split(':')[1] ? e.examples.split('<br/>')[2].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[2].slice(3,) }}></p>
                                        </div>
                                        <div className="em-box-correct my-1">
                                            <h5 className="text-green mb-0">correct</h5>
                                            <p className="text-gray" dangerouslySetInnerHTML={{ __html: e.examples.split('<br/>')[3].split(':')[1] ? e.examples.split('<br/>')[3].split(':')[1].slice(0, -7) : e.examples.split('<br/>')[3].slice(3,) }}></p>
                                        </div>
                                    </div>
                                    : null}

                            </div>
                        </div>

                        <div className="em2-box13 mb-3">
                            <div onClick={expand2} className="em2-box131">
                                <p className="text-gray learnMore">Learn more</p>
                            </div>

                            <div onClick={() => {
                                dltCard(blockIds[ind][index], ind, index, 'Dismissed', false, '', false, editorContext);
                            }} className="em2-box132">
                                <img src="/assets/media/editor/delete.svg" alt="Delete" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Dismiss" />
                            </div>

                        </div>
                    </> :
                    <>
                        <div className="em2-box13 mb-3">
                            <div className="em2-box131">
                                <p onClick={() => {
                                    updateDict(blockIds[ind][index], ind, e.highlightText, editorContext);
                                }} className="text-gray learnMore dictionary">Add to dictionary</p>
                            </div>
                            <div onClick={() => {
                                dltCard(blockIds[ind][index], ind, index, 'Dismissed', false, '', false, editorContext);
                            }} className="em2-box132">
                                <img src="/assets/media/editor/delete.svg" alt="Delete" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Dismiss" />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default CorrectionCard;
