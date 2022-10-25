import React from 'react'

const SetPerformanceModal = (props) => {
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="kt_modal_1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title">Performance</h1>
                        </div>
                        {props.mainData.length > 0 ? props.mainData[0].result.generalScore > 0 ? <div className="modal-body">
                            <div className="perfor1">
                                <div className="perfor11">
                                    <p>Text score: 76 out of 100. This score represents the quality of writing in this document. You can increase it by addressing Grammarly's suggestions.</p>
                                </div>
                                <div className="perfor11">
                                    <div className="container1">
                                        <div className="circular-progress">
                                            <div className="value-container">0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="perfor2">
                                <h1>Word Count</h1>
                                <div className="perfor22">
                                    <div className="perfor21">
                                        <p>Characters</p>
                                        <b className="text-blue">294</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Reading Time</p>
                                        <b className="text-blue">9 sec</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Words</p>
                                        <b className="text-blue">38</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Speaking Time</p>
                                        <b className="text-blue">17 sec</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Sentences</p>
                                        <b className="text-blue">4</b>
                                    </div>
                                </div>
                            </div>
                            <div className="perfor2">
                                <div className="perfor02">
                                    <h1>Readability</h1>
                                    <p>Metrics compared to other Grammarly users</p>
                                </div>
                                <div className="perfor22">
                                    <div className="perfor21">
                                        <p>Word length</p>
                                        <b className="text-blue">6.3</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Sentence length</p>
                                        <b className="text-blue">9.5</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Readability score</p>
                                        <b className="text-blue">21</b>
                                    </div>
                                </div>
                                <p className="my-3">Your text is likely to be understood by college graduates but may not be easy for many to read.</p>
                            </div>
                            <div className="perfor2">
                                <div className="perfor02">
                                    <h1>Vocabulary</h1>
                                    <p>Metrics compared to other Grammarly users</p>
                                </div>
                                <div className="perfor22">
                                    <div className="perfor21">
                                        <p>Unique words</p>
                                        <b className="text-blue">95%</b>
                                    </div>
                                    <div className="perfor21">
                                        <p>Rare words</p>
                                        <b className="text-blue">36%</b>
                                    </div>
                                </div>
                            </div>
                        </div> : <p className="perform_err">Write away! Grammarly needs at least 30 words to calculate document statistics.</p> : null}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetPerformanceModal;