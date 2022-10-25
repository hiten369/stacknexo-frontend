import React from 'react'

const SetGoalModal = (props) => {
    return (
        <>
            <div className="modal fade" tabIndex="-1" id="kt_modal_2">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mh1">
                            <img src="/assets/media/editor/goals.png" alt="/assets/media/editor/goals.png" />
                            <div className="modal-header1">
                                <h1 className="modal-title my-5">Set Goals</h1>
                                <p>Get tailored writing suggestions based on your goals and audience.</p>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="m-goal">
                                <div id="goals-domain" className="m-goal1">
                                    <h3>Domain</h3>
                                    <div style={{ marginLeft: '27px' }} className="m-goal11">
                                        <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-home0-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_domain0" type="button" role="tab" aria-controls="kt_tab_domain0" aria-selected="true">Academic</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_domain1" type="button" role="tab" aria-controls="kt_tab_domain1" aria-selected="true">Business</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_domain2" type="button" role="tab" aria-controls="kt_tab_domain2" aria-selected="false">General</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-email-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_domain3" type="button" role="tab" aria-controls="kt_tab_domain3" aria-selected="false">Email</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-casual-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_domain4" type="button" role="tab" aria-controls="kt_tab_domain4" aria-selected="false">Casual</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-creative-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_domain5" type="button" role="tab" aria-controls="kt_tab_domain5" aria-selected="false">Creative</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent1">
                                            <div className="tab-pane fade show" id="kt_tab_domain0" role="tabpanel" aria-labelledby="pills-home0-tab">Academic: Strictly applies all rules and formal writing conventions.</div>
                                            <div className="tab-pane fade show" id="kt_tab_domain1" role="tabpanel" aria-labelledby="pills-home-tab">Business: Applies almost all rules but allows some informal expressions.</div>
                                            <div className="tab-pane fade" id="kt_tab_domain2" role="tabpanel" aria-labelledby="pills-profile-tab">General (default): Applies most rules and conventions with medium strictness.</div>
                                            <div className="tab-pane fade" id="kt_tab_domain3" role="tabpanel" aria-labelledby="pills-contact-tab">Email: Applies almost all rules, plus email writing conventions.</div>
                                            <div className="tab-pane fade" id="kt_tab_domain4" role="tabpanel" aria-labelledby="pills-contact-tab">Casual: Applies most rules but allows stylistic flexibility.</div>
                                            <div className="tab-pane fade" id="kt_tab_domain5" role="tabpanel" aria-labelledby="pills-contact-tab">Creative: Allows some intentional bending of rules and conventions.</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="goals-intent" className="m-goal1">
                                    <h3>Intent</h3>
                                    <div style={{ marginLeft: '42px' }} className="m-goal11">
                                        <ul className="nav nav-pills mb-3" id="pills-tab4" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_intent(e);
                                                    props.setGoals1(e);
                                                }} className="nav-link">Inform</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_intent(e);
                                                    props.setGoals1(e);
                                                }} className="nav-link">Describe</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_intent(e);
                                                    props.setGoals1(e);
                                                }} className="nav-link">Convince</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.toggle_intent(e);
                                                    props.setGoals1(e);
                                                }} className="nav-link">Tell A Story</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent4">Experimental. What are you trying to do? This helps us build new suggestions and won't affect your feedback today.
                                        </div>
                                    </div>
                                </div>
                                <div id="goals-audience" className="m-goal1">
                                    <h3>Audience</h3>
                                    <div className="m-goal11">
                                        <ul className="nav nav-pills mb-3" id="pills-tab5" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button onClick={props.setGoals1} className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_audience1" type="button" role="tab" aria-controls="kt_tab_audience1" aria-selected="true">General</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={props.setGoals1} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_audience2" type="button" role="tab" aria-controls="kt_tab_audience2" aria-selected="false">Knowledgeable</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={props.setGoals1} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_audience3" type="button" role="tab" aria-controls="kt_tab_audience3" aria-selected="false">Expert</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent5">
                                            <div className="tab-pane fade show" id="kt_tab_audience1" role="tabpanel" aria-labelledby="pills-home-tab">General: Easy for anyone to read with minimal effort.</div>
                                            <div className="tab-pane fade" id="kt_tab_audience2" role="tabpanel" aria-labelledby="pills-profile-tab">Knowledgeable (default): Requires focus to read and understand.</div>
                                            <div className="tab-pane fade" id="kt_tab_audience3" role="tabpanel" aria-labelledby="pills-contact-tab">Expert: May require rereading to understand.</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="goals-formality" className="m-goal1">
                                    <h3>Formality</h3>
                                    <div className="m-goal11">
                                        <ul className="nav nav-pills mb-3" id="pills-tab6" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.dis_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-informal-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_formality1" type="button" role="tab" aria-controls="kt_tab_formality1" aria-selected="true">Informal</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.dis_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-neutral-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_formality2" type="button" role="tab" aria-controls="kt_tab_formality2" aria-selected="false">Nuetral</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.dis_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-formal-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_formality3" type="button" role="tab" aria-controls="kt_tab_formality3" aria-selected="false">Formal</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent6">
                                            <div className="tab-pane fade show" id="kt_tab_formality1" role="tabpanel" aria-labelledby="pills-home-tab">Informal: Allows slang and other more casual usages.</div>
                                            <div className="tab-pane fade" id="kt_tab_formality2" role="tabpanel" aria-labelledby="pills-profile-tab">General (default): Applies most rules and conventions with medium strictness.</div>
                                            <div className="tab-pane fade" id="kt_tab_formality3" role="tabpanel" aria-labelledby="pills-contact-tab">Experimental. What are you trying to do? This helps us build new suggestions and won't affect your feedback today.</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="goals-dialect" className="m-goal1">
                                    <h3>Dialect</h3>
                                    <div className="m-goal11">
                                        <ul className="nav nav-pills mb-3" id="pills-tab7" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-american-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_dialect1" type="button" role="tab" aria-controls="kt_tab_dialect1" aria-selected="true">American English</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-british-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_dialect2" type="button" role="tab" aria-controls="kt_tab_dialect2" aria-selected="true">British English</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-canadian-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_dialect3" type="button" role="tab" aria-controls="kt_tab_dialect3" aria-selected="true">Canadian English</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={(e) => {
                                                    props.dis_goals(e, false);
                                                    props.setGoals1(e);
                                                }} className="nav-link" id="pills-australian-tab" data-bs-toggle="pill" data-bs-target="#kt_tab_dialect4" type="button" role="tab" aria-controls="kt_tab_dialect4" aria-selected="true">Australian English</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer goals-modal-footer">
                            <div onClick={props.toggleGoalsUniversal} className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="" id="goals-check" />
                                <label className="form-check-label" htmlFor="goals-check">
                                    Show Set Goals when i start a new document
                                </label>
                            </div>
                            <div>
                                <b onClick={props.goalsReset} style={{ cursor: 'pointer' }} className="text-primary me-3">Reset to default</b>
                                <button type="button" className="btn btn-info" data-bs-dismiss="modal">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetGoalModal;
