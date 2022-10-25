import { publicIpv4 } from "public-ip";

// Initializing the goals and dictionary
export const initializeGoals=async (editorContext, context, articleId)=>{
    const { setGoals, setDictWords }=editorContext;

    let localDict = localStorage.getItem('stackNUser');

    if (localDict) {
        localDict = JSON.parse(localDict);
        if(localDict.userDict)
        {
            setDictWords(localDict.userDict);
        }
    }

    // if univesal goals are set
    if (JSON.parse(localStorage.getItem('stackNUser')).userGroup.defaultGoals) {
        document.getElementById('goals-check').checked = true;
        let goals_set = JSON.parse(localStorage.getItem('stackNUser')).userGroup.setGoals;
        localStorage.setItem('local_goals_sn', JSON.stringify(goals_set));
    }
    // if editor wise goals are set
    else {
        const userIp=await publicIpv4();
        let d2 = await context.getArticleGoals(articleId, userIp);
        localStorage.setItem('local_goals_sn', JSON.stringify(d2));
    }
    
    if (localStorage.getItem('local_goals_sn')) {
        let b1 = JSON.parse(localStorage.getItem('local_goals_sn'));
        let tempGoal2 = [];

        if (b1.goals) {
            for (let i = 0; i < b1.goals.length; i++) {
                tempGoal2.push(document.getElementById('pills-tab4').children[b1.goals[i]].children[0].innerText);
                document.getElementById('pills-tab4').children[b1.goals[i]].children[0].classList.add('active');
            }
        }

        setGoals({
            audience: b1.audience !== undefined ? document.getElementById('pills-tab5').children[b1.audience].children[0].innerText : "knowledgeable",
            domain: b1.domain !== undefined ? document.getElementById('pills-tab1').children[b1.domain].children[0].innerText : "general",
            goals: tempGoal2,
            style: b1.style !== undefined ? document.getElementById('pills-tab6').children[b1.style].children[0].innerText : "neutral",
            dialect: b1.dialect !== undefined ? document.getElementById('pills-tab7').children[b1.dialect].children[0].id.split('-')[1] : "american"
        });

        if (b1.domain !== undefined) {
            toggle_goals(document.getElementById('pills-tab1').children[b1.domain].children[0], true);
            document.getElementById('pills-tab1').children[b1.domain].children[0].classList.add('active');
        }
        else {
            document.getElementById('pills-tab1').children[2].children[0].classList.add('active');
        }

        if (b1.audience !== undefined) {
            document.getElementById('pills-tab5').children[b1.audience].children[0].classList.add('active');
        }
        else {
            document.getElementById('pills-tab5').children[1].children[0].classList.add('active');
        }

        if (b1.style !== undefined) {
            dis_goals(document.getElementById('pills-tab6').children[b1.style].children[0], true);
            document.getElementById('pills-tab6').children[b1.style].children[0].classList.add('active');
        }
        else {
            document.getElementById('pills-tab6').children[1].children[0].classList.add('active');
        }

        if (b1.dialect !== undefined) {
            document.getElementById('pills-tab7').children[b1.dialect].children[0].classList.add('active');
        }
        else {
            document.getElementById('pills-tab7').children[0].children[0].classList.add('active');
        }
    }
    else {
        document.getElementById('pills-tab1').children[2].children[0].classList.add('active');
        document.getElementById('pills-tab2').children[0].children[0].classList.add('active');
        document.getElementById('pills-tab3').children[0].children[0].classList.add('active');
        document.getElementById('pills-tab5').children[1].children[0].classList.add('active');
        document.getElementById('pills-tab6').children[1].children[0].classList.add('active');
        document.getElementById('pills-tab7').children[0].children[0].classList.add('active');
    }
};

// To get index of the children node.
export const getChildIndex=(node)=> {
    return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
};

// Toggling between academic and other domains.
export const toggle_goals=(e, flag) =>{
    if (flag) {
        if (e.id === 'pills-casual-tab' || e.id === 'pills-creative-tab') {
            document.getElementById('pills-formal-tab').setAttribute('disabled', true);
            document.getElementById('pills-formal-tab').className = 'text-secondary nav-link';
        }
        else {
            if (document.getElementById('pills-formal-tab')) {
                document.getElementById('pills-formal-tab').removeAttribute('disabled');
                if (document.getElementById('pills-formal-tab').classList.contains('active')) {
                    document.getElementById('pills-formal-tab').className = 'nav-link active';
                }
                else {
                    document.getElementById('pills-formal-tab').className = 'nav-link';
                }
            }
        }
    }
    else {
        if (e.target.id === 'pills-casual-tab' || e.target.id === 'pills-creative-tab') {
            document.getElementById('pills-formal-tab').setAttribute('disabled', true);
            document.getElementById('pills-formal-tab').className = 'text-secondary nav-link';
        }
        else {
            if (document.getElementById('pills-formal-tab')) {
                document.getElementById('pills-formal-tab').removeAttribute('disabled');
                if (document.getElementById('pills-formal-tab').classList.contains('active')) {
                    document.getElementById('pills-formal-tab').className = 'nav-link active';
                }
                else {
                    document.getElementById('pills-formal-tab').className = 'nav-link';
                }
            }
        }
    }
};

// Toggling between the intent.
export const toggle_intent=(e)=> {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    }
    else {
        e.target.classList.add('active');
    }
};

// Making logic between formal formal style and creative/casual domain.
export const dis_goals=(e, flag) =>{
    if (flag) {
        if (e.id === 'pills-formal-tab') {
            document.getElementById('pills-creative-tab').setAttribute('disabled', true);
            document.getElementById('pills-creative-tab').className = 'text-secondary nav-link';
            document.getElementById('pills-casual-tab').setAttribute('disabled', true);
            document.getElementById('pills-casual-tab').className = 'text-secondary nav-link';
        }
        else {
            if (document.getElementById('pills-creative-tab')) {
                document.getElementById('pills-creative-tab').removeAttribute('disabled');
                if (document.getElementById('pills-creative-tab').classList.contains('active')) {
                    document.getElementById('pills-creative-tab').className = 'nav-link active';
                }
                else {
                    document.getElementById('pills-creative-tab').className = 'nav-link';
                }
            }
            if (document.getElementById('pills-casual-tab')) {
                document.getElementById('pills-casual-tab').removeAttribute('disabled');
                if (document.getElementById('pills-casual-tab').classList.contains('active')) {
                    document.getElementById('pills-casual-tab').className = 'nav-link active';
                }
                else {
                    document.getElementById('pills-casual-tab').className = 'nav-link';
                }
            }
        }
    }
    else {
        if (e.target.id === 'pills-formal-tab') {
            document.getElementById('pills-creative-tab').setAttribute('disabled', true);
            document.getElementById('pills-creative-tab').className = 'text-secondary nav-link';
            document.getElementById('pills-casual-tab').setAttribute('disabled', true);
            document.getElementById('pills-casual-tab').className = 'text-secondary nav-link';
        }
        else {
            if (document.getElementById('pills-creative-tab')) {
                document.getElementById('pills-creative-tab').removeAttribute('disabled');
                if (document.getElementById('pills-creative-tab').classList.contains('active')) {
                    document.getElementById('pills-creative-tab').className = 'nav-link active';
                }
                else {
                    document.getElementById('pills-creative-tab').className = 'nav-link';
                }
            }
            if (document.getElementById('pills-casual-tab')) {
                document.getElementById('pills-casual-tab').removeAttribute('disabled');
                if (document.getElementById('pills-casual-tab').classList.contains('active')) {
                    document.getElementById('pills-casual-tab').className = 'nav-link active';
                }
                else {
                    document.getElementById('pills-casual-tab').className = 'nav-link';
                }
            }
        }
    }
};

// Setting goals to localstorage, hooks and backend.
export const setGoals1=(e, editorContext, onEditorStateChange3, onEditorStateChange4)=> {
    const { goals, setGoals } = editorContext;
    const id=e.target.parentNode.parentNode.id;

    if (id === 'pills-tab1') {
        setGoals({
            ...goals, domain: e.target.innerText
        });

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                domain: getChildIndex(e.target.parentNode),
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, domain: getChildIndex(e.target.parentNode)
            }));
        }

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));

        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
    else if (id === 'pills-tab2') {
        setGoals({
            ...goals, type: e.target.innerText
        });

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                type: getChildIndex(e.target.parentNode),
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, type: getChildIndex(e.target.parentNode)
            }));
        }

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));

        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
    else if (id === 'pills-tab3') {
        setGoals({
            ...goals, citation: e.target.innerText
        });

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                citation: getChildIndex(e.target.parentNode),
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, citation: getChildIndex(e.target.parentNode)
            }));
        }

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));

        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
    else if (id === 'pills-tab4') {
        let tempGoal = goals.goals;

        if (tempGoal.includes(e.target.innerText)) {
            let i = tempGoal.indexOf(e.target.innerText);
            tempGoal.splice(i, 1);
        }
        else {
            tempGoal.push(e.target.innerText);
        }

        let tempGoal1 = [];
        let b1 = document.getElementById('pills-tab4').children;

        for (let i = 0; i < b1.length; i++) {
            if (b1[i].children[0].classList.contains('active')) {
                tempGoal1.push(i);
            }
        }

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                goals: tempGoal1
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, goals: tempGoal1
            }));
        }

        setGoals({
            ...goals, goals: tempGoal
        });

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));

        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
    else if (id === 'pills-tab5') {
        
        setGoals({
            ...goals, audience: e.target.innerText
        });

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                audience: getChildIndex(e.target.parentNode),
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, audience: getChildIndex(e.target.parentNode)
            }));
        }

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));
        
        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
    else if (id === 'pills-tab6') {
        setGoals({
            ...goals, style: e.target.innerText
        });

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                style: getChildIndex(e.target.parentNode),
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, style: getChildIndex(e.target.parentNode)
            }));
        }

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));

        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
    else if (id === 'pills-tab7') {
        setGoals({
            ...goals, dialect: e.target.id.split('-')[1]
        });

        if (!localStorage.getItem('local_goals_sn')) {
            localStorage.setItem('local_goals_sn', JSON.stringify({
                dialect: getChildIndex(e.target.parentNode),
            }));
        }
        else {
            let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
            localStorage.setItem('local_goals_sn', JSON.stringify({
                ...t1, dialect: getChildIndex(e.target.parentNode)
            }));
        }

        onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));

        if (document.getElementById('goals-check').checked) {
            onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true);
        }
    }
};

// Reset button logic
export const goalsReset=(editorContext, onEditorStateChange3) =>{
    const { setGoals } = editorContext;
    setGoals({
        audience: 'knowledgeable',
        dialect: 'american',
        domain: 'general',
        goals: [],
        style: 'neutral'
    });
    localStorage.setItem('local_goals_sn', JSON.stringify({
        audience: 1,
        dialect: 0,
        domain: 2,
        goals: [],
        style: 1
    }));
    let b1 = document.getElementById('pills-tab1').children;
    let b4 = document.getElementById('pills-tab4').children;
    let b5 = document.getElementById('pills-tab5').children;
    let b6 = document.getElementById('pills-tab6').children;
    let b7 = document.getElementById('pills-tab7').children;
    for (let i of b1) {
        i.children[0].classList.remove('active');
    }
    for (let i of b4) {
        i.children[0].classList.remove('active');
    }
    for (let i of b5) {
        i.children[0].classList.remove('active');
    }
    for (let i of b6) {
        i.children[0].classList.remove('active');
    }
    for (let i of b7) {
        i.children[0].classList.remove('active');
    }
    document.getElementById('pills-tab1').children[2].children[0].classList.add('active');
    document.getElementById('pills-tab5').children[1].children[0].classList.add('active');
    document.getElementById('pills-tab6').children[1].children[0].classList.add('active');
    document.getElementById('pills-tab7').children[0].children[0].classList.add('active');
    onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')));
};

// Set universal goals logic
export const toggleGoalsUniversal=(onEditorStateChange4)=> {
    let goals_check = document.getElementById('goals-check').checked;
    onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), "defaultGoals", goals_check);
};
