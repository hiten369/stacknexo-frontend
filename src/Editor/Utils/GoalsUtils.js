import { publicIpv4 } from "public-ip";

// Initializing the goals and dictionary
export const initializeGoals = async (editorContext, context, articleId) => {
    const { setGoals, setDictWords } = editorContext;

    let localDict = localStorage.getItem('stackNUser');

    if (localDict) {
        localDict = JSON.parse(localDict);
        if (localDict.userDict) {
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
        const userIp = await publicIpv4();
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
export const getChildIndex = (node) => {
    return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
};

// Toggling between academic and other domains.
export const toggle_goals = (e, flag) => {
    let x;
    let ele = document.getElementById('pills-formal-tab');
    if (flag) {
        x = e.id;
    }
    else {
        x = e.target.id;
    }

    if (x === 'pills-casual-tab' || x === 'pills-creative-tab') {
        ele.setAttribute('disabled', true);
        ele.className = 'text-secondary nav-link';
    }
    else {
        if (ele) {
            ele.removeAttribute('disabled');
            if (ele.classList.contains('active')) {
                ele.className = 'nav-link active';
            }
            else {
                ele.className = 'nav-link';
            }
        }
    }
};

// Toggling between the intent.
export const toggle_intent = (e) => {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    }
    else {
        e.target.classList.add('active');
    }
};

const dis_goals_util=(element)=>{
    element.removeAttribute('disabled');
    if (element.classList.contains('active')) {
        element.className = 'nav-link active';
    }
    else {
        element.className = 'nav-link';
    }
};

// Making logic between formal formal style and creative/casual domain.
export const dis_goals = (e, flag) => {
    let x;
    if (flag) {
        x=e.id;
    }
    else {
        x=e.target.id;
    }

    let e1=document.getElementById('pills-creative-tab');
    let e2=document.getElementById('pills-casual-tab');

    if (x === 'pills-formal-tab') {
        e1.setAttribute('disabled', true);
        e1.className = 'text-secondary nav-link';
        e2.setAttribute('disabled', true);
        e2.className = 'text-secondary nav-link';
    }
    else {
        if (e1) {
            dis_goals_util(e1);
        }
        if (e2) {
            dis_goals_util(e2);
        }
    }
};

const setGoals1Util=(setGoals, goals, goal, e, flag=false)=>{
    if(!flag)
    {
        setGoals({
            ...goals, [goal]: e.target.innerText
        });
    }
    else
    {
        setGoals({
            ...goals, [goal]: e.target.id.split('-')[1]
        });
    }

    if (!localStorage.getItem('local_goals_sn')) {
        localStorage.setItem('local_goals_sn', JSON.stringify({
            [goal]: getChildIndex(e.target.parentNode),
        }));
    }
    else {
        let t1 = JSON.parse(localStorage.getItem('local_goals_sn'));
        localStorage.setItem('local_goals_sn', JSON.stringify({
            ...t1, [goal]: getChildIndex(e.target.parentNode)
        }));
    }
};

// Setting goals to localstorage, hooks and backend.
export const setGoals1 = (e, editorContext) => {
    const { goals, setGoals, onEditorStateChange3, onEditorStateChange4, client } = editorContext;
    const id = e.target.parentNode.parentNode.id;

    let goal;

    if (id === 'pills-tab1') {
        goal='domain';
        setGoals1Util(setGoals, goals, goal, e);
    }
    else if (id === 'pills-tab2') {
        goal='type';
        setGoals1Util(setGoals, goals, goal, e);
    }
    else if (id === 'pills-tab3') {
        goal='citation';
        setGoals1Util(setGoals, goals, goal, e);
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
    }
    else if (id === 'pills-tab5') {
        goal='audience';
        setGoals1Util(setGoals, goals, goal, e);
    }
    else if (id === 'pills-tab6') {
        goal='style';
        setGoals1Util(setGoals, goals, goal, e);
    }
    else if (id === 'pills-tab7') {
        goal='dialect';
        setGoals1Util(setGoals, goals, goal, e, true);
    }
    
    onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')), client);

    if (document.getElementById('goals-check').checked) {
        onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), 'defaultGoals', true, client);
    }
};

const goalsResetUtil=(element, flag=false)=>{
    for (let i of element.children) {
        i.children[0].classList.remove('active');
    }
    if(!flag)
    {
        element.children[2].children[0].classList.add('active');
    }
};

// Reset button logic
export const goalsReset = (editorContext) => {
    const { setGoals, onEditorStateChange3 } = editorContext;
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

    let b1 = document.getElementById('pills-tab1');
    let b4 = document.getElementById('pills-tab4');
    let b5 = document.getElementById('pills-tab5');
    let b6 = document.getElementById('pills-tab6');
    let b7 = document.getElementById('pills-tab7');
    
    goalsResetUtil(b1);
    goalsResetUtil(b4, true);
    goalsResetUtil(b5);
    goalsResetUtil(b6);
    goalsResetUtil(b7);

    onEditorStateChange3(JSON.parse(localStorage.getItem('local_goals_sn')), client);
};

// Set universal goals logic
export const toggleGoalsUniversal = (editorContext) => {
    const { onEditorStateChange4 } = editorContext;
    let goals_check = document.getElementById('goals-check').checked;
    onEditorStateChange4(JSON.parse(localStorage.getItem('local_goals_sn')), "defaultGoals", goals_check, client);
};
