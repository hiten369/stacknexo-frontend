import React from 'react'

const GrammarPanel = (props) => {
    return (
        <>
            <div className="editor-main122">
                <div>
                    <button id="assisBtn" onClick={props.toggleAssistant} className="my-4 btn btn-secondary">HIDE ASSISTANT {'>>'}</button>
                    <div onClick={props.toggleAssistant1} id="assisBtn1">
                        <div>{props.mainData.length !== 0 ? props.tc : 0}</div>
                        <p>ADVANCED</p>
                    </div>
                    <div className="editor-main1221 py-2">
                        <div onClick={props.trigger_active} className="em-box px-3 my-3 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                            {props.mainData.length !== 0 ? props.mainData[0].result.generalScore > 0 ? <h5 className="mb-1">Great Job!</h5> : <h5 className="mb-1">Overall Score</h5> : <h5 className="mb-1">Overall Score</h5>}
                            {props.mainData.length !== 0 ? props.mainData[0].result.generalScore === 100 ? <><img className="em-true" src="/assets/media/editor/success.jpg" alt="success_tick" />
                                <h5 className="mb-1">Great Job!</h5><b>Overall Score</b></> : props.mainData[0].result.generalScore > 0 ? <h3>{props.mainData[0].result.generalScore}</h3> : null : null}
                            {props.mainData.length !== 0 ? props.mainData[0].result.generalScore > 0 ? <p className="mb-1">See the performance</p> : <p className="mb-1">Text is too short</p> : <p className="mb-1">See the performance</p>}
                            <p className="arrow">{'>'}</p>
                        </div>
                        <div className="em-box px-3 my-3 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
                            <h5>Goals</h5>
                            <p>3 of 4 set</p>
                            <p className="arrow">{'>'}</p>
                        </div>
                    </div>
                    <div className="editor-main1221 py-2">
                        <div onClick={(e) => { props.trigger_active(e); }} className="em-box1 em-box-active px-4 py-4 my-3">
                            <h5 className="my-0">All suggestions</h5>
                        </div>
                        <div onClick={(e) => { props.trigger_active(e); }} className="em-box1 px-4 py-4 my-3" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="left" title="Improves spelling, grammer and punctuation">
                            {props.sideUtils.Correctness !== 0 ? <svg width="24" viewBox="0 0 24 24" className="holder_f19n375c" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z" fill="#FFC8D2"></path><g filter="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z" fill="#EE445F"></path></g><defs><filter id="a" x="1.75" y=".25" width="15.113" height="23.407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg> : <img src="/assets/media/editor/red.png" alt="red_tick" />}
                            <h5 className="my-1">Correctness</h5>
                            <p className="my-1">{props.sideUtils.Correctness !== 0 ? `${props.sideUtils.Correctness} alerts` : "Looking Good"}</p>
                        </div>
                        <div onClick={(e) => { props.trigger_active(e); }} className="em-box1 px-4 py-4 my-3" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="left" title="Helps make your writing easier to understand.">
                            {props.sideUtils.Clarity !== 0 ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#B3D1FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd" opacity="0.6"></path><path fill="#548AFF" d="M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"></path></svg> : <img src="/assets/media/editor/purple.png" alt="purple_tick" />}
                            <h5 className="my-1">Clarity</h5>
                            <p className="my-1">{props.sideUtils.Clarity !== 0 ? `${props.sideUtils.Clarity} alerts` : "Very Clear"}</p>
                        </div>
                        <div onClick={(e) => { props.trigger_active(e); }} className="em-box1 px-4 py-4 my-3" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="left" title="Helps make your writing more interesting and effective.">
                            {props.sideUtils.Engagement !== 0 ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#B9F9EA" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#0FDCAC" fillRule="evenodd" d="M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z" clipRule="evenodd"></path><path fill="#C0F9EC" fillRule="evenodd" d="M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z" clipRule="evenodd"></path></svg> : <img src="/assets/media/editor/blue.png" alt="blue_tick" />}
                            <h5 className="my-1">Engagement</h5>
                            <p className="my-1">{props.sideUtils.Engagement !== 0 ? `${props.sideUtils.Engagement} alerts` : "Very engaging"}</p>
                        </div>
                        <div onClick={(e) => { props.trigger_active(e); }} className="em-box1 px-4 py-4 my-3" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="left" title="Helps you make the right impression on your reader.">
                            {props.sideUtils.Tone !== 0 ? <svg width="20" viewBox="0 0 20 20" className=""><path fill="#E8C7FF" fillRule="evenodd" d="M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" clipRule="evenodd"></path><path fill="#D29CFA" fillRule="evenodd" d="M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" clipRule="evenodd"></path><path fill="#BC78ED" fillRule="evenodd" d="M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" clipRule="evenodd"></path></svg> : <img src="/assets/media/editor/green.png" alt="green_tick" />}
                            <h5 className="my-1">Delivery</h5>
                            <p className="my-1">{props.sideUtils.Tone !== 0 ? `${props.sideUtils.Tone} alerts` : "Just right"}</p>
                        </div>
                    </div>
                </div>
                <div className="editor-main1221 text-center pb-4">
                    <button disabled={props.grammarFlag || props.grammarFlag1 || props.dataMatch} onClick={() => { props.checkGr(true,props.onEditorStateChange2) }} className="btn-info btn" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-class="tooltip-dark" data-bs-placement="left" title="Click to check for grammatical mistake.">{props.grammarFlag || props.grammarFlag1 ? <span><img style={{width:'22px',marginRight:'3px',filter:'invert(1)'}} src="/assets/media/editor/Funnel.gif" alt="/assets/media/editor/Funnel.gif" /> Processing ...</span> : 'Check Grammer'} </button>
                </div>
            </div>
        </>
    )
}

export default GrammarPanel;