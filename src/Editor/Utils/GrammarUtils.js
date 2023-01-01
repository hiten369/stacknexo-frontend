// Functions when navigating various sections on side grammar bar (right side)
export const trigger_active = (e, editorContext) => {
    const { mainData, setMainType, setFlag3 } = editorContext;
    var { setTc } = editorContext;

    var tc1 = 0;
    setFlag3(false);
    let b11 = document.querySelectorAll('.em2-box1');
    let b12 = document.querySelectorAll('.em2-box2');
    let b13 = document.querySelectorAll('.em2-box14');
    let b14 = document.querySelectorAll('.learnMore');
    for (var i of b11) {
        i.style.display = 'flex';
    }
    for (var i of b12) {
        i.classList.remove('em2-box2-ani');
        i.classList.remove('em2-box2-ani1');
    }
    for (var i of b13) {
        i.classList.remove('em2-box14_b');
    }
    for (var i of b14) {
        if (i.classList.contains('dictionary')) {
            i.innerText = 'Add to dictionary';
        }
        else {
            i.innerText = 'Learn more';
        }
    }
    if (e.target.tagName === 'DIV') {
        if (e.target.classList.contains('editor-main1210')) {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');

            if (b1) {
                for (var i of b1) {
                    i.classList.remove('none-gr0am0');
                }
            }

            if (b2) {
                for (var i of b2) {
                    i.classList.remove('none-gr0am0');
                }
            }

            if (b3) {
                for (var i of b3) {
                    i.classList.remove('none-gr0am0');
                }
            }

            if (b4) {
                for (var i of b4) {
                    i.classList.remove('none-gr0am0');
                }
            }

            setMainType('all');
            mainData.map((g) => {
                tc1 += g.alerts.length;
            });

            setTc(tc1);

            if (document.querySelector('.em2')) {
                document.querySelector('.em2').style.display = 'block';
            }

            if (document.querySelector('.em-box-active')) {
                document.querySelector('.em-box-active').classList.remove('em-box-active');
            }

            document.querySelector('.em-box1').classList.add('em-box-active');

            if (tc1 === 0) {
                setFlag3(true);
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'none';
                }
            }
            else {
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'block';
                }
            }
        }
        else {
            if (document.querySelector('.em-box-active')) {
                document.querySelector('.em-box-active').classList.remove('em-box-active');
            }

            if (e.target.classList.contains('em-box21')) {
                e.target.parentNode.classList.add('em-box-active');
            }
            else {
                e.target.classList.add('em-box-active');
            }

            if (e.target.children[1]) {
                if (e.target.children[1].innerText === 'All suggestions') {
                    setMainType('all');

                    mainData.map((g) => {
                        tc1 += g.alerts.length;
                    });

                    setTc(tc1);

                    if (document.querySelector('.em2')) {
                        document.querySelector('.em2').style.display = 'block';
                    }

                    let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                    let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                    let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                    let b4 = document.querySelectorAll('.gr0am0-tone-ht');

                    if (b1) {
                        for (var i of b1) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (b2) {
                        for (var i of b2) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (b3) {
                        for (var i of b3) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (b4) {
                        for (var i of b4) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (tc1 === 0) {
                        setFlag3(true);
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'none';
                        }
                    }
                    else {
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'block';
                        }
                    }
                }
                else {
                    if (e.target.children[1].innerText === 'Clarity') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                    }
                    else if (e.target.children[1].innerText === 'Correctness') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                    }
                    else if (e.target.children[1].innerText === 'Engagement') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                    }
                    else if (e.target.children[1].innerText === 'Delivery') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                    }
                    setMainType(e.target.children[1].innerText === 'Delivery' ? 'Tone' : e.target.children[1].innerText);

                    mainData.map((g) => {
                        g.alerts.map((f) => {
                            if (e.target.children[1].innerText === 'Delivery') {
                                if (f.cardLayout.outcome === 'Tone') {
                                    ++tc1;
                                }
                            }
                            else {
                                if (f.cardLayout.outcome === e.target.children[1].innerText) {
                                    ++tc1;
                                }
                            }
                        });
                    });

                    setTc(tc1);

                    if (tc1 === 0) {
                        setFlag3(true);
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'none';
                        }
                    }
                    else {
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'block';
                        }
                    }
                }
            }
            else {
                if (e.target.children[0].innerText === 'All suggestions') {
                    setMainType('all');

                    mainData.map((g) => {
                        tc1 += g.alerts.length;
                    });

                    setTc(tc1);

                    if (document.querySelector('.em2')) {
                        document.querySelector('.em2').style.display = 'block';
                    }

                    let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                    let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                    let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                    let b4 = document.querySelectorAll('.gr0am0-tone-ht');

                    if (b1) {
                        for (var i of b1) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (b2) {
                        for (var i of b2) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (b3) {
                        for (var i of b3) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (b4) {
                        for (var i of b4) {
                            i.classList.remove('none-gr0am0');
                        }
                    }

                    if (tc1 === 0) {
                        setFlag3(true);
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'none';
                        }
                    }
                    else {
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'block';
                        }
                    }
                }
                else {
                    if (e.target.children[0].innerText === 'Clarity') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                    }
                    else if (e.target.children[0].innerText === 'Correctness') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                    }
                    else if (e.target.children[0].innerText === 'Engagement') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                    }
                    else if (e.target.children[0].innerText === 'Delivery') {
                        let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                        let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                        let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                        let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                        if (b1) {
                            for (var i of b1) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b2) {
                            for (var i of b2) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b3) {
                            for (var i of b3) {
                                i.classList.add('none-gr0am0');
                            }
                        }
                        if (b4) {
                            for (var i of b4) {
                                i.classList.remove('none-gr0am0');
                            }
                        }
                    }
                    setMainType(e.target.children[0].innerText === 'Delivery' ? 'Tone' : e.target.children[0].innerText);

                    mainData.map((g) => {
                        g.alerts.map((f) => {
                            if (e.target.children[0].innerText === 'Delivery') {
                                if (f.cardLayout.outcome === 'Tone') {
                                    ++tc1;
                                }
                            }
                            else {
                                if (f.cardLayout.outcome === e.target.children[0].innerText) {
                                    ++tc1;
                                }
                            }
                        });
                    });

                    setTc(tc1);

                    if (tc1 === 0) {
                        setFlag3(true);
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'none';
                        }
                    }
                    else {
                        if (document.querySelector('.em2')) {
                            document.querySelector('.em2').style.display = 'block';
                        }
                    }
                }
            }
        }
    }
    else if (e.target.tagName === 'H5') {
        if (document.querySelector('.em-box-active')) {
            document.querySelector('.em-box-active').classList.remove('em-box-active');
        }

        if (e.target.parentNode.classList.contains('em-box21')) {
            e.target.parentNode.parentNode.classList.add('em-box-active');
        }
        else {
            e.target.parentNode.classList.add('em-box-active');
        }

        if (e.target.innerText === 'All suggestions') {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');

            if (b1) {
                for (var i of b1) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b2) {
                for (var i of b2) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b3) {
                for (var i of b3) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b4) {
                for (var i of b4) {
                    i.classList.remove('none-gr0am0');
                }
            }

            setMainType('all');

            mainData.map((g) => {
                tc1 += g.alerts.length;
            })

            setTc(tc1);

            if (tc1 === 0) {
                setFlag3(true);
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'none';
                }
            }
            else {
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'block';
                }
            }
        }
        else {
            if (e.target.innerText === 'Clarity') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.remove('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.add('none-gr0am0');
                    }
                }
            }
            else if (e.target.innerText === 'Correctness') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.remove('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.add('none-gr0am0');
                    }
                }
            }
            else if (e.target.innerText === 'Engagement') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.remove('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.add('none-gr0am0');
                    }
                }
            }
            else if (e.target.innerText === 'Delivery') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.remove('none-gr0am0');
                    }
                }
            }

            setMainType(e.target.innerText === 'Delivery' ? 'Tone' : e.target.innerText);

            mainData.map((g) => {
                g.alerts.map((f) => {
                    if (e.target.innerText === 'Delivery') {
                        if (f.cardLayout.outcome === 'Tone') {
                            ++tc1;
                        }
                    }
                    else {
                        if (f.cardLayout.outcome === e.target.innerText) {
                            ++tc1;
                        }
                    }
                });
            });

            setTc(tc1);

            if (tc1 === 0) {
                setFlag3(true);
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'none';
                }
            }
            else {
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'block';
                }
            }
        }
    }
    else if (e.target.tagName === 'P') {
        if (e.target.parentNode.classList.contains('editor-main1210')) {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');
            if (b1) {
                for (var i of b1) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b2) {
                for (var i of b2) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b3) {
                for (var i of b3) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b4) {
                for (var i of b4) {
                    i.classList.remove('none-gr0am0');
                }
            }

            setMainType('all');

            mainData.map((g) => {
                tc1 += g.alerts.length;
            })

            setTc(tc1);

            if (document.querySelector('.em2')) {
                document.querySelector('.em2').style.display = 'block';
            }

            if (document.querySelector('.em-box-active')) {
                document.querySelector('.em-box-active').classList.remove('em-box-active');
            }

            document.querySelector('.em-box1').classList.add('em-box-active');

            if (tc1 === 0) {
                setFlag3(true);
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'none';
                }
            }
            else {
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'block';
                }
            }
        }
        else {
            if (e.target.previousElementSibling.innerText === 'Clarity') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.remove('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.add('none-gr0am0');
                    }
                }
            }
            else if (e.target.previousElementSibling.innerText === 'Correctness') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.remove('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.add('none-gr0am0');
                    }
                }
            }
            else if (e.target.previousElementSibling.innerText === 'Engagement') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.remove('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.add('none-gr0am0');
                    }
                }
            }
            else if (e.target.previousElementSibling.innerText === 'Delivery') {
                let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
                let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
                let b3 = document.querySelectorAll('.gr0am0-correct-ht');
                let b4 = document.querySelectorAll('.gr0am0-tone-ht');
                if (b1) {
                    for (var i of b1) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b2) {
                    for (var i of b2) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b3) {
                    for (var i of b3) {
                        i.classList.add('none-gr0am0');
                    }
                }
                if (b4) {
                    for (var i of b4) {
                        i.classList.remove('none-gr0am0');
                    }
                }
            }
            if (document.querySelector('.em-box-active')) {
                document.querySelector('.em-box-active').classList.remove('em-box-active');
            }
            e.target.parentNode.classList.add('em-box-active');
            setMainType(e.target.previousElementSibling.innerText === 'Delivery' ? 'Tone' : e.target.previousElementSibling.innerText);

            mainData.map((g) => {
                g.alerts.map((f) => {
                    if (e.target.previousElementSibling.innerText === 'Delivery') {
                        if (f.cardLayout.outcome === 'Tone') {
                            ++tc1;
                        }
                    }
                    else {
                        if (f.cardLayout.outcome === e.target.previousElementSibling.innerText) {
                            ++tc1;
                        }
                    }
                });
            });

            setTc(tc1);

            if (tc1 === 0) {
                setFlag3(true);
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'none';
                }
            }
            else {
                if (document.querySelector('.em2')) {
                    document.querySelector('.em2').style.display = 'block';
                }
            }
        }
    }
    else if (e.target.tagName === 'IMG') {
        if (document.querySelector('.em-box-active')) {
            document.querySelector('.em-box-active').classList.remove('em-box-active');
        }

        if (e.target.parentNode.classList.contains('em-box21')) {
            e.target.parentNode.parentNode.classList.add('em-box-active');
        }
        else {
            e.target.parentNode.classList.add('em-box-active');
        }

        if (e.target.nextElementSibling.innerText === 'Clarity') {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');
            if (b1) {
                for (var i of b1) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b2) {
                for (var i of b2) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b3) {
                for (var i of b3) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b4) {
                for (var i of b4) {
                    i.classList.add('none-gr0am0');
                }
            }
        }
        else if (e.target.nextElementSibling.innerText === 'Correctness') {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');
            if (b1) {
                for (var i of b1) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b2) {
                for (var i of b2) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b3) {
                for (var i of b3) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b4) {
                for (var i of b4) {
                    i.classList.add('none-gr0am0');
                }
            }
        }
        else if (e.target.nextElementSibling.innerText === 'Engagement') {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');
            if (b1) {
                for (var i of b1) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b2) {
                for (var i of b2) {
                    i.classList.remove('none-gr0am0');
                }
            }
            if (b3) {
                for (var i of b3) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b4) {
                for (var i of b4) {
                    i.classList.add('none-gr0am0');
                }
            }
        }
        else if (e.target.nextElementSibling.innerText === 'Delivery') {
            let b1 = document.querySelectorAll('.gr0am0-clarity-ht');
            let b2 = document.querySelectorAll('.gr0am0-engagem-ht');
            let b3 = document.querySelectorAll('.gr0am0-correct-ht');
            let b4 = document.querySelectorAll('.gr0am0-tone-ht');
            if (b1) {
                for (var i of b1) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b2) {
                for (var i of b2) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b3) {
                for (var i of b3) {
                    i.classList.add('none-gr0am0');
                }
            }
            if (b4) {
                for (var i of b4) {
                    i.classList.remove('none-gr0am0');
                }
            }
        }

        setMainType(e.target.nextElementSibling.innerText === 'Delivery' ? 'Tone' : e.target.nextElementSibling.innerText);

        mainData.map((g) => {
            g.alerts.map((f) => {
                if (e.target.nextElementSibling.innerText === 'Delivery') {
                    if (f.cardLayout.outcome === 'Tone') {
                        ++tc1;
                    }
                }
                else {
                    if (f.cardLayout.outcome === e.target.nextElementSibling.innerText) {
                        ++tc1;
                    }
                }
            });
        });

        setTc(tc1);

        if (tc1 === 0) {
            setFlag3(true);
            if (document.querySelector('.em2')) {
                document.querySelector('.em2').style.display = 'none';
            }
        }
        else {
            if (document.querySelector('.em2')) {
                document.querySelector('.em2').style.display = 'block';
            }
        }
    }
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");
    if (valueContainer) {
        let progressEndValue = 100;
        if (mainData.length > 0) {
            progressEndValue = mainData[0].result.generalScore;
            let progressValue = 0;
            let speed = 10;

            let progress = setInterval(() => {
                progressValue++;
                valueContainer.textContent = `${progressValue}%`;
                progressBar.style.background = `conic-gradient(
                    #4d5bf9 ${progressValue * 3.6}deg,
                    #cadcff ${progressValue * 3.6}deg
                )`;
                if (progressValue === progressEndValue) {
                    clearInterval(progress);
                }
            }, speed);
        }
    }
};

// Toggline the cards (without learn more / show less)
export const expand1 = (e, ids) => {
    let b1 = document.querySelectorAll('.gr0am0');
    let b2 = document.getElementById(ids);
    // console.log(`${ids}1`);
    var dis;

    if (document.getElementById(`${ids}1`)) {
        dis = document.getElementById(`${ids}1`).children[0];
    }

    // For triggering the highlighted text
    for (var j of b1) {
        j.style.backgroundColor = 'unset';
    }

    if (b2) {
        if (b2.classList.contains('gr0am0-clarity-ht')) {
            b2.style.backgroundColor = 'rgb(224 202 252)';
        }
        else if (b2.classList.contains('gr0am0-correct-ht')) {
            b2.style.backgroundColor = '#ffcdcd';
        }
        else if (b2.classList.contains('gr0am0-engagem-ht')) {
            b2.style.backgroundColor = 'rgb(202 226 252)';
        }
        else if (b2.classList.contains('gr0am0-tone-ht')) {
            b2.style.backgroundColor = '#rgb(216 252 202)';
        }
    }

    if (dis) {
        let dis1 = window.getComputedStyle(dis).display;

        if (dis1 === 'flex') {
            let b2 = document.querySelectorAll('.em2-box14');

            for (var i of b2) {
                i.classList.remove('em2-box14_b');
            }

            let b1 = document.querySelectorAll('.em2-box2');

            for (var j of b1) {
                j.classList.remove('em2-box2-ani');
                j.classList.remove('em2-box2-ani1');
                j.previousElementSibling.style.display = 'flex';
            }

            let b3 = document.querySelectorAll('.learnMore');

            for (var k of b3) {
                if (k.classList.contains('dictionary')) {
                    k.innerText = 'Add to dictionary';
                }
                else {
                    k.innerText = 'Learn more';
                }
            }

            if (e.target.tagName === 'P') {
                // e.target.parentNode.parentNode.
                e.target?.parentNode?.nextElementSibling?.classList?.add('em2-box2-ani');
                e.target.parentNode.style.display = 'none';
            }
            else if (e.target.tagName === 'path' || e.target.tagName === 'I') {
                e.target.parentNode.parentNode.nextElementSibling.classList.add('em2-box2-ani');
                e.target.parentNode.parentNode.style.display = 'none';
            }
            else if (e.target.tagName === 'svg') {
                e.target.parentNode.parentNode.parentNode.nextElementSibling.classList.add('em2-box2-ani');
                e.target.parentNode.parentNode.parentNode.style.display = 'none';
            }
            else {
                if (e.target.classList.contains('em2-box')) {
                    e.target.children[1].classList.add('em2-box2-ani');
                    e.target.children[0].style.display = 'none';
                }
                else {
                    if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.classList.add('em2-box2-ani');
                    }
                    if (e.target.tagName !== 'IMG') {
                        e.target.style.display = 'none';
                    }
                }
            }
        }
    }
};

// Toggling the card (learn more / show less)
export const expand2 = (e) => {
    e.target.parentNode.parentNode.previousElementSibling.classList.toggle('em2-box14_b');
    e.target.parentNode.parentNode.parentNode.classList.toggle('em2-box2-ani1');
    // console.log(e.target.parentNode.parentNode.previousElementSibling);
    if (e.target.innerText === 'Learn more') {
        e.target.innerText = '^ Less';
    }
    else {
        e.target.innerText = 'Learn more';
    }
};

var tm1; // handle time out for notification alert (Bottom - Right)

// Show the notification alert (Bottom - Right)
export const saveAlert1 = (msg, editorContext) => {
    const { setAlertMsg, setFlag2 } = editorContext;
    clearTimeout(tm1);
    setAlertMsg(msg);
    setFlag2(true);

    tm1 = setTimeout(() => {
        setFlag2(false);
    }, 5000);
};

// Deleting the card
export const dltCard = (cardId, ind, index, msg = 'Dismissed', isDict = false, undoText = '', isIniDict = false, editorContext) => {
    const { mainData, setMainData, setFlag3, setAlertUndoMsg, blockIds, setBlockIds, sideUtils, setSideUtils, dictWords, idNum } = editorContext;
    var { tc, setTc } = editorContext;

    cardId = blockIds[ind][index];
    // console.log(blockIds[ind][index]);
    // console.log(blockIds[ind]);
    // console.log(mainData[ind]);

    // console.log(cardId, ind, index);

    // Adding removed card index to tackle card highlights after card correction.
    let tt = idNum[blockIds[ind][index]];
    let totalRemovedArr = localStorage.getItem('totalRemovedArr');

    if (totalRemovedArr) {
        totalRemovedArr = JSON.parse(totalRemovedArr);
    }
    else {
        totalRemovedArr = {};
    }

    if (Object.keys(totalRemovedArr).includes(String(ind))) {
        totalRemovedArr[ind].push(tt);
    }
    else {
        totalRemovedArr[ind] = [tt];
    }
    localStorage.setItem('totalRemovedArr', JSON.stringify(totalRemovedArr));

    let b1 = document.getElementById(cardId);
    if (b1) {
        // if word is not in dictionary when backend responses appear
        if (!isIniDict) {
            // Setting the side grammarbar alerts count
            var tempType = '';
            if (b1.classList.contains('gr0am0-clarity-ht') || b1.classList.contains('gr0am1-clarity-ht')) {
                tempType = 'Clarity';
                setSideUtils({ ...sideUtils, 'Clarity': --sideUtils.Clarity });
            }
            if (b1.classList.contains('gr0am0-engagem-ht') || b1.classList.contains('gr0am1-engagem-ht')) {
                tempType = 'Engagement';
                setSideUtils({ ...sideUtils, 'Engagement': --sideUtils.Engagement });
            }
            if (b1.classList.contains('gr0am0-correct-ht') || b1.classList.contains('gr0am1-correct-ht')) {
                console.log('sdf');
                tempType = 'Correctness';
                setSideUtils({ ...sideUtils, 'Correctness': --sideUtils.Correctness });
            }
            if (b1.classList.contains('gr0am0-tone-ht') || b1.classList.contains('gr0am1-tone-ht')) {
                tempType = 'Tone';
                setSideUtils({ ...sideUtils, 'Tone': --sideUtils.Tone });
            }
            // console.log(tempType);

            // Decrement the total count of the cards by 1
            setTc(--tc);
            if (tc === 0) {
                setFlag3(true);
                document.querySelector('.em2').style.display = 'none';
            }

            // Setting the information for undo
            setAlertUndoMsg({
                role: 'delete',
                card: mainData[ind].alerts[index],
                ind,
                cardClass: document.getElementById(cardId).className,
                cardId,
                tempType,
                isDict,
                undoText,
                mainIndex: index,
                originalIndex: idNum[blockIds[ind][index]]
            });

            // Removing the card from main data
            mainData[ind].alerts.splice(index, 1);
            setMainData(mainData);

            // blockIds[ind].splice(in1, 1);
            blockIds[ind].splice(index, 1);
            setBlockIds(blockIds);

            // Setting the message for bottom right alert box
            saveAlert1(msg, editorContext);

            // Removing the highlights
            document.getElementById(cardId).className = 'gr0am0';
        }
        // if word is in dictionary when backend responses appear
        else {
            if (dictWords.includes(b1.innerText)) {
                // Setting the side grammarbar alerts count
                var tempType = '';
                if (b1.classList.contains('gr0am0-clarity-ht') || b1.classList.contains('gr0am1-clarity-ht')) {
                    tempType = 'Clarity';
                    setSideUtils({ ...sideUtils, 'Clarity': --sideUtils.Clarity });
                }
                if (b1.classList.contains('gr0am0-engagem-ht') || b1.classList.contains('gr0am1-engagem-ht')) {
                    tempType = 'Engagement';
                    setSideUtils({ ...sideUtils, 'Engagement': --sideUtils.Engagement });
                }
                if (b1.classList.contains('gr0am0-correct-ht') || b1.classList.contains('gr0am1-correct-ht')) {
                    tempType = 'Correctness';
                    setSideUtils({ ...sideUtils, 'Correctness': --sideUtils.Correctness });
                }
                if (b1.classList.contains('gr0am0-tone-ht') || b1.classList.contains('gr0am1-tone-ht')) {
                    tempType = 'Tone';
                    setSideUtils({ ...sideUtils, 'Tone': --sideUtils.Tone });
                }

                if (tc === 0) {
                    setFlag3(true);
                    document.querySelector('.em2').style.display = 'none';
                }

                // Setting the information for undo
                setAlertUndoMsg({
                    role: 'delete',
                    card: mainData[ind].alerts[index],
                    ind,
                    cardClass: document.getElementById(cardId).className,
                    cardId,
                    tempType,
                    isDict,
                    undoText,
                    mainIndex: index,
                    originalIndex: idNum[blockIds[ind][index]]
                });

                mainData[ind].alerts.splice(index, 1);
                setMainData(mainData);

                blockIds[ind].splice(index, 1);
                setBlockIds(blockIds);

                // Setting the message for bottom right alert box
                saveAlert1(msg, editorContext);

                // Removing the highlights
                document.getElementById(cardId).className = 'gr0am0';
            }
        }
    }
};

// Get word nth index inside string
export const getWordIndex = (n, string, needle) => {
    let counter = n;
    let nThIndex = 0;
    let flag = false;

    if (counter > 0) {
        if (counter === 1) {
            nThIndex = string.indexOf(needle);
        }
        else {
            while (counter--) {
                if (nThIndex === 0 && !flag) {
                    nThIndex = string.indexOf(needle, nThIndex + 0);
                }
                else {
                    nThIndex = string.indexOf(needle, nThIndex + needle.length);
                }
                flag = true;
            };
        }
    }
    return nThIndex;
};

// Check if the word reside in between tags, returns further appearing number of words in the tag
export const isInTags = (index, tagIndexLength) => {
    for (let i of Object.keys(tagIndexLength)) {
        if (index >= Number(i.split('-')[0]) && index < Number(i.split('-')[1])) {
            return Number(i.split('-')[1]) - index;
        }
    }
    return 0;
};

// Reccursively check if the word reside in between tags.
export const recurCheck = (remainingString, needle, oldIndex, tagIndexLength, s) => {
    let wordIndex = getWordIndex(1, remainingString, needle);
    console.log(wordIndex);
    if(wordIndex!==-1)
    {
        let currentIndex = oldIndex + wordIndex;
        console.log(currentIndex);
        console.log(tagIndexLength);
    
        if (isInTags(currentIndex, tagIndexLength) !== 0) {
            let tempTags = isInTags(currentIndex, tagIndexLength);
            // console.log(tempTags);
            currentIndex = currentIndex + tempTags;
            console.log(currentIndex);
            let remainingString = s.slice(currentIndex,);
            console.log(remainingString);
            return recurCheck(remainingString, needle, currentIndex, tagIndexLength, s);
        }
        else {
            return currentIndex;
        }
    }
    return -1;
};

// Storing the tags start - end index along with their length
export const tagIndexLengthUtil = (s) => {
    let tagIndexLength = {};

    let nc = document.createElement('div');
    nc.setAttribute("id", "hitId");
    nc.innerHTML = s;
    // console.log(nc);
    let al = nc.getElementsByTagName("*");
    let flag=false;

    for (let i of al) {
        if(i.tagName==='SPAN')
        {
            // console.log(i.outerHTML);
    
            /* If `</` comes before `<` then check if index of `<` is greater than index of `</` in s  */
            let n1=s.indexOf('</');
            let n2=s.indexOf('<');
            // console.log(n1, n2);
            let n3=1;

            // Visit this once because it will check for n times in the same string (s)
            while(n2>=n1 && !flag && n1!==-1)
            {
                let s1=getWordIndex(n3, s, '</');
                // console.log(s1);
                let s2=s1+7;
                tagIndexLength[`${s1}-${s2}`] = 7;
                ++n3;
                n1=getWordIndex(n3, s, '</');
            }
    
            let startIndex = i.outerHTML.indexOf("<");
            let endIndex = i.outerHTML.indexOf(">");
            // console.log(startIndex, endIndex);
            let stringToMatch = i.outerHTML.slice(startIndex, endIndex + 1);
            // console.log(stringToMatch);
            let tagStartIndex = s.indexOf(stringToMatch);
            let tagEndIndex = stringToMatch.length + s.indexOf(stringToMatch);
    
            // console.log(tagEndIndex);
            let text2=s.slice(tagEndIndex, );
            // console.log(text2);
            let endTagStartIndex=text2.indexOf("</");
            let endTagEndIndex=endTagStartIndex+7;  // length of </span>
            // console.log(endTagStartIndex, endTagEndIndex);
            // console.log(endTagStartIndex+tagEndIndex, endTagEndIndex+tagEndIndex);
    
            /* After tagEndIndex, first `</` & `>` will be the closing tags element, get index of them. slice after tagEndIndex */
    
            // console.log(tagStartIndex, tagEndIndex);
            // console.log(s.slice(tagStartIndex, tagEndIndex));
    
            tagIndexLength[`${tagStartIndex}-${tagEndIndex}`] = stringToMatch.length;
    
            // if closing span with start - close index is already present. ex- <span><span></span</span>
            // if(tagIndexLength[`${endTagStartIndex+tagEndIndex}-${endTagEndIndex+tagEndIndex+1}`])
            if(tagIndexLength[`${endTagStartIndex+tagEndIndex}-${endTagEndIndex+tagEndIndex}`])
            {
                // console.log('if');
                // console.log('already present');
                let text21=s.slice(endTagEndIndex+tagEndIndex, );
                // console.log(text21);
                let endTagStartIndex1=text21.indexOf("</");
                let endTagEndIndex1=endTagStartIndex1+7;
                // console.log(endTagStartIndex1, endTagEndIndex1);
                // console.log(endTagEndIndex+tagEndIndex+endTagStartIndex1, endTagEndIndex+tagEndIndex+1+endTagEndIndex1);
                // tagIndexLength[`${endTagEndIndex+tagEndIndex+endTagStartIndex1}-${endTagEndIndex+tagEndIndex+1+endTagEndIndex1}`] = 7;
                tagIndexLength[`${endTagEndIndex+tagEndIndex+endTagStartIndex1}-${endTagEndIndex+tagEndIndex+endTagEndIndex1}`] = 7;
            }
            else
            {
                // console.log('else');
                // tagIndexLength[`${endTagStartIndex+tagEndIndex}-${endTagEndIndex+tagEndIndex+1}`] = 7;
                tagIndexLength[`${endTagStartIndex+tagEndIndex}-${endTagEndIndex+tagEndIndex}`] = 7;
            }
            flag=true;
        }
    };

    return tagIndexLength;
};

// Replace nth character utility
export const replace_nth_util = (n, needle, occurrenceToChange, s, indexToChange) => {
    let string = s;
    let prevString = s;
    let finalIndex = 0; // current index of the word
    let needleFlag = false; // if we are changing needle
    let needle1 = needle;

    // looping through all the occurences (n)
    for (let i = 1; i <= n; i++) {
        // console.log(occurrenceToChange);
        // console.log(string);

        // console.log(needle);
        let wordIndex = getWordIndex(occurrenceToChange, string, needle);
        console.log(wordIndex);

        // if word not found it means its index is already found, no need to check for further occrences
        if (wordIndex === -1 && i > 1) {
            break;
        }

        // if text not found
        if (wordIndex === -1) {
            while (needle1 !== '' && wordIndex === -1) {
                needleFlag = true;
                needle1 = needle1.slice(0, -1);
                wordIndex = getWordIndex(occurrenceToChange, string, needle1);
            }
            console.log(wordIndex, needle1);
        }

        finalIndex = wordIndex;
        // console.log(finalIndex);
        // console.log(string);
        let tagIndexLength = tagIndexLengthUtil(string);
        console.log(tagIndexLength);

        // Check if send to recursive function
        if (isInTags(wordIndex, tagIndexLength) !== 0) {
            finalIndex += isInTags(wordIndex, tagIndexLength);
            console.log(finalIndex);
            let remainingString = string.slice(finalIndex,);
            console.log(remainingString);

            // It returns the index of the word to be changed in given string (remaining string; sliced by occurence)
            // let finalIndex1 = recurCheck(remainingString, needle, finalIndex, tagIndexLength, s);
            let finalIndex1 = recurCheck(remainingString, needle, finalIndex, tagIndexLength, string);
            console.log(finalIndex1);
            string = string.slice(finalIndex1 + 1,);
            console.log(string);

            if (indexToChange > 0) {
                indexToChange += 1;
            }
            indexToChange += finalIndex1;
            occurrenceToChange = 1;
        }
        else {
            if (string !== prevString) {
                indexToChange += wordIndex;
            }
            else {
                indexToChange = wordIndex;
            }
            occurrenceToChange++;
        }
    }
    return {
        indexToChange,
        needleFlag,
        needle1
    };
};

// Replace the nth character
export const replace_nth = function (s, f, r, n, addedText) {
    /* 
        s - String to be replaced
        f - The string to be found to replace
        r - Replacement string
        n - Occurance of string f
    */

    // r = r.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ");
    // s = s.replaceAll('&nbsp;', ' ').replace(/\u00A0/g, " ");
    // console.log("addedText is - ", addedText);
    console.log("n is - ", n);
    console.log("r is - ", r);
    // let needle = f.replace(/\u00A0/g, " ").trim(); // word to be changed 
    let needle = f; // word to be changed 
    let indexToChangeObj; // index to be changed 
    let indexToChange = 0; // index to be changed 
    let occurrenceToChange = 1;
    let wordIndex = getWordIndex(occurrenceToChange, s, needle);
    let wordSplit = needle.split(' ');
    let prevR = r; // For keeping `r` intact
    console.log(wordSplit);
    console.log(wordIndex);

    // Tag is wrapped around more than 1 text (including correction text)
    // there are multiple text in tagdata.text (it should not be the case-check it)
    if (wordIndex === -1 && wordSplit.length > 1) {

        for (let i = 0; i < wordSplit.length; i++) {
            r = prevR;
            // console.log(wordSplit);

            // Removing the extra word from replacement string (only the word to be corrected remains)
            for (let j = 0; j < wordSplit.length; j++) {
                if (i !== j) {
                    // console.log(i);
                    // console.log(j);
                    r = r.replace(wordSplit[j], "");
                    // console.log(r);
                }
            }

            needle = wordSplit[i];
            r = r.replaceAll(' ', '');
            console.log(r);
            let occurenceToSend=n;
            // console.log(needle);
            // console.log(addedText);

            // For the newly added text to tagData's text, finding its occurence in innerText of the current html
            if(addedText!=='' && needle===addedText)
            {
                // console.log('-if-');
                let presentedText=f.replace(addedText,'').trim();
                // console.log(presentedText);
                // console.log(document.querySelectorAll('.ce-block__content')[0]);
                let htmlInnerText=document.querySelectorAll('.ce-block__content')[0].children[0].innerText;
                // console.log(htmlInnerText);
                let presentedTextIndex=getWordIndex(n, htmlInnerText, presentedText);
                // console.log(presentedTextIndex);
                htmlInnerText=htmlInnerText.slice(0, presentedTextIndex);
                occurenceToSend = (htmlInnerText.match(new RegExp(addedText, "g")) || []).length;
            }
            console.log(occurenceToSend);

            indexToChangeObj = replace_nth_util(occurenceToSend, needle, occurrenceToChange, s, indexToChange);
            // console.log(indexToChange);
            indexToChange = indexToChangeObj.indexToChange;

            if (indexToChangeObj.needleFlag) {
                needle = indexToChangeObj.needle1;
            }

            s = s.substring(0, indexToChange) + r + s.substring(indexToChange + needle.length);
            console.log("Output >>>> " + s);
        }
        return s;
    }

    indexToChangeObj = replace_nth_util(n, needle, occurrenceToChange, s, indexToChange);
    // console.log(indexToChangeObj);

    indexToChange = indexToChangeObj.indexToChange;

    if (indexToChangeObj.needleFlag) {
        needle = indexToChangeObj.needle1;
        let tempEle = document.createElement('div');
        console.log(r);
        tempEle.innerHTML = r;
        let textToReplace = tempEle.innerText;
        r = r.replaceAll(textToReplace, needle);
        // console.log(tempEle.innerText);
        // tempEle.innerText=needle;
        // console.log(tempEle);
        // r=tempEle.innerHTML;
    }

    // console.log(indexToChange);
    // console.log(r);
    let second = s.substring(0, indexToChange) + r + s.substring(indexToChange + needle.length);
    console.log("Output >>>> " + second);
    return second;
};

// if correction text contains tags, then do operations acc. to it
const tagUtil1 = (card01, matchText, tagData1, tagData, replacement_text, tagUtilFlag, blankTextFlag, insertPosition) => {
    let isProcessed = false;
    for (let i of card01) {
        if (isProcessed) {
            break;
        }

        // console.log(i);
        if (i?.tagName !== 'SPAN' && (i.parentNode?.tagName === 'SPAN' || i.parentNode?.tagName === 'DIV')) {
            // console.log(i.innerText);
            // console.log(matchText);
            // console.log(tagUtilFlag);
            // console.log(replacement_text);
            let tagInnerText = i.innerText;
            let correctionText = matchText.trim();
            replacement_text=replacement_text.trim();

            // Removing extra spaced if needed
            if (tagInnerText !== correctionText && !tagUtilFlag) {
                console.log('---yes ---');
                if (tagInnerText.trim() === correctionText) {
                    tagInnerText = tagInnerText.trim();
                }
                else {
                    correctionText = correctionText.trim();
                }
            }

            // if correction text containing HTML tags
            if (tagInnerText === correctionText || tagUtilFlag) {
                // console.log(i.id.slice(4,));
                // console.log(tagData1);

                if (correctionText !== ' ') {
                    // To find index of the tag word to be manupilated
                    let tagArrIndex = tagData1.findIndex(x => x.index === Number(i.id.slice(4,)));
                    // console.log(tagArrIndex);

                    if (tagData.length > 0 && tagArrIndex !== -1) {

                        console.log(tagData);
                        console.log(`'${correctionText}'`);
                        console.log(`'${replacement_text}'`);

                        const prevText=tagData[tagArrIndex].text;

                        // replacing replacement to replacement with bold and text to corrected text / insert at position
                        if (blankTextFlag) {
                            console.log('if');
                            tagData[tagArrIndex].text = tagData[tagArrIndex].text.slice(0, insertPosition) + replacement_text+ " " + tagData[tagArrIndex].text.slice(insertPosition,);
                        }
                        else {
                            console.log('else');
                            tagData[tagArrIndex].text = tagData[tagArrIndex].text.replaceAll(correctionText, replacement_text);
                        }

                        // If some new text is adding, storing the new text to calculate its occurence in previous string and work according to that
                        let addedText='';
                        if(tagData[tagArrIndex].text.split(' ').length>1)
                        {
                            addedText=tagData[tagArrIndex].text.replace(prevText, '').trim();
                            // console.log(addedText);
                            // console.log(prevText);

                            // if the added text matches some further tagData's text, then increase tagData's text occurence by 1
                            if(tagArrIndex<tagData.length-1 && addedText!=='')
                            {
                                for(let b=tagArrIndex+1;b<tagData.length;b++)
                                {
                                    // console.log(tagData[b].text, addedText);
                                    if(tagData[b].text===addedText)
                                    {
                                        // console.log(tagData[b]);
                                        tagData[b].occurrance+=1;
                                    }
                                }
                            }
                        }
                        tagData[tagArrIndex].addedText=addedText;

                        // Removing the empty texts in tagData
                        tagData=tagData.filter((e)=>{
                            return e.text!=="";
                        });
                        console.log(tagData);

                        // if the changed tagData's text matches some further tagData's text, then increase/decrease further tagData's text occurence by 1 (add/remove)
                        if(tagArrIndex<tagData.length-1)
                        {
                            for(let b=tagArrIndex+1;b<tagData.length;b++)
                            {
                                if(tagData[b].text===tagData[tagArrIndex].text)
                                {
                                    console.log('yes');
                                    console.log(tagData[b]);
                                    tagData[b].occurrance+=1;
                                }
                            }
                        }

                        // Injecting into tagData's replacement text
                        let nc = document.createElement('div');
                        // console.log(tagData[tagArrIndex].replacement);
                        nc.innerHTML = tagData[tagArrIndex].replacement;
                        // console.log(nc.children[0]);
                        // nc.children[0].innerText=tagData[tagArrIndex].text;
                        let tnc = nc.children[0];
                        let ncTagCount = nc.getElementsByTagName('*').length;
                        // console.log(ncTagCount);

                        // Getting down till last child in order to change its innerText
                        for (let i = 0; i < ncTagCount - 1; i++) {
                            tnc = tnc.children[0];
                            // console.log(tnc);
                        }

                        // console.log(tnc);
                        tnc.innerText = tagData[tagArrIndex].text;
                        // console.log(nc);
                        tagData[tagArrIndex].replacement = nc.children[0].outerHTML;
                        // tagData[tagArrIndex].replacement = tagData[tagArrIndex].replacement.replaceAll(correctionText, replacement_text);

                        // console.log(tagData);

                        // if text being corrected is different then replacement text and it is not the last element of tagData array
                        if (correctionText !== replacement_text && tagArrIndex + 1 <= tagData.length) {
                            for (let j = tagArrIndex + 1; j < tagData.length; j++) {

                                // Decrement occurance of further tagged words only if their text is equal to the word which is corrected above
                                if (tagData[j].text === correctionText) {
                                    tagData[j].occurrance -= 1;
                                }
                            }
                        }
                        isProcessed = true;
                    }
                }
            }
        }
    }

    console.log(tagData);

    return tagData;
};

// Inserting the ids to tags for uniquification
const insertIdToTags = (x, tagIndex) => {
    for (let i = 0; i < x.length; i++) {
        if ((x[i].tagName !== 'SPAN' && x[i].tagName !== 'BR') && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
            x[i].setAttribute("id", `uuid${tagIndex++}`);
        }
    }
};

// Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
const removeCards = (mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift) => {
    for (let i = 0; i < mainData[ind].alerts.length; i++) {
        if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
            toBeRemovedArr.push(i);
        }
    }

    // Shifting
    for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
        mainData[ind].alerts[i].begin += (shift);
        mainData[ind].alerts[i].end += (shift);
        mainData[ind].alerts[i].highlightBegin += (shift);
        mainData[ind].alerts[i].highlightEnd += (shift);
    }
    return toBeRemovedArr;
};

// If there is any tags present than replace html with tagged html
const replaceTags = (tagData, ind) => {
    if (tagData.length > 0) {
        let replacedString = document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML;

        for (let i = tagData.length - 1; i >= 0; i--) {
            replacedString = replace_nth(replacedString, tagData[i].text, tagData[i].replacement, tagData[i].occurrance, tagData[i].addedText);
        }

        // console.log(replacedString);
        document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = replacedString;
    }
}

// Correcting the text mistake on click
export const textChange = async (id, text, replacement_text, isNum, ind, ind1, startInd, endInd, matchText, overFlowText, beginFlag, beginInc, editorContext, onEditorStateChange, onEditorStateChange2) => {
    const { mainData, setMainData, setFlag4, setFlag3, flag3, setAlertUndoMsg, blockDetails, blockIds, setBlockIds, idNum, sideUtils, setSideUtils, checkGr, setBlockDetails, undoFlag, setUndoFlag } = editorContext;
    var { editorS, tc, setTc } = editorContext;

    setUndoFlag(!undoFlag);

    // console.log(blockDetails[ind].text);

    const startIndS = startInd;
    const endIndS = endInd;
    var undoObj = {
        role: 'correct',
        ind,
        prevStr: blockDetails[ind].text,
        prevStr1: document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '')
    };
    var toBeRemovedArr = [];

    // Number(idNum[id]) - It returns the index of card according to its initial index when first response appears

    /*
        id: Id of the selected card and its corresponding text highlight.
        text: The text which needs to be changed.
        replacement_text: the text which is going to apply when the incorrect text is gone.
        isNum: varies accoding to the condition. (true, if begin index is same as end index)
        ind: the index of the block.
        ind1: the index of the card.
        startInd: begin index of text needs to be corrected.
        endInd: end index of text needs to be corrected.
        matchText: The text needs to be changed (Our replacement should match this)
        overFlowText: 
        beginFlag: if the correction index is prior (less than) to highlighted index (begin) 
        beginInc: the difference between begin highlighted text index to correction text index
    */

    // Freeze the correction button for 5 seconds
    // setFlag4(true);
    // setTimeout(() => {
    //     setFlag4(false);
    // }, 5000);

    // Alert the bottom notification bar with message
    saveAlert1('Corrected', editorContext);

    // if the correction index is prior to highlighted are (before the scope) then increase the index according to it.
    if (beginFlag) {
        if (startInd === endInd) {
            endInd += beginInc;
        }
        startInd += beginInc;
    }

    let repeatFlag = false;
    for (let i = 0; i < mainData[ind].alerts.length; i++) {
        if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
            if (repeatFlag) {
                idNum[id] = i + 1;
            }
            repeatFlag = true;
        }
    }
    // console.log(idNum[id]);

    // Dealing with cards whose highlight index are changed in order to prevent inter collision (overlap)
    // if the card is manipulated in backend to prevent collision, then handle that card here
    if (document.getElementById(id).classList[1].slice(5, 6) === '1') {
        console.log('if');
        // let ind2 = ind1;
        let ind2 = Number(idNum[id]);
        // var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2));
        var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2));

        // Insert html tags here
        let tagData = JSON.parse(localStorage.getItem("stnTagData"));
        let tagData1 = JSON.parse(localStorage.getItem("stnTagData"));

        let tagIndex = 0;
        const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");

        // Inserting the ids to tags for uniquification
        insertIdToTags(x, tagIndex);

        let card01;

        // Checking if the given span with id is empty and if it is in next span
        if (document.getElementById(id).innerHTML !== '') {
            card01 = document.getElementById(id).getElementsByTagName("*");
        }
        else {
            card01 = document.getElementById(id).nextElementSibling.getElementsByTagName("*");
        }

        console.log(card01);
        console.log(document.getElementById(id));

        // if correction text contains tags, then do operations acc. to it
        let tagUtilFlag = false;

        // if matchText and tag innerText does not match (see in below function)
        if (mainData[ind].alerts[ind1].text === matchText) {
            tagUtilFlag = true;
        }

        // if matchText is empty string, then send position and insert it
        let blankTextFlag = false;
        let insertPosition = 0;
        if (matchText === '') {
            blankTextFlag = true;
            insertPosition = mainData[ind].alerts[ind1].begin - mainData[ind].alerts[ind1].highlightBegin;
        }

        tagData = tagUtil1(card01, matchText, tagData1, tagData, replacement_text, tagUtilFlag, blankTextFlag, insertPosition);

        // Saving the data
        localStorage.setItem("stnTagData", JSON.stringify(tagData));

        console.log("======= ========= ======== ====== ========");
        // console.log(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2));
        // console.log(changeStr1);
        if (changeStr1 !== matchText) {
            console.log('if if');
            let matchText1 = `</span>${matchText}`;
            // changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2) + 7);
            changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7);

            if (changeStr1 === matchText1) {
                console.log('if if if');

                let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2)) + blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7 - (endInd - startInd)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7,);
                // console.log(changeStr);

                let shift = (replacement_text.length) - (endInd - startInd);

                undoObj = {
                    ...undoObj,
                    shift,
                    mainIndex: ind1
                };

                document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                setBlockDetails(blockDetails);

                // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
                toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);
            }
            else {
                console.log('if if else');
                let matchText2 = blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7 + 77 - (endInd - startInd)) + matchText;
                // console.log(blockDetails[ind].text.slice(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2) + 7 + 77 - (endInd - startInd)));
                // console.log(startInd, endInd);
                // console.log(matchText);
                // console.log(matchText2);
                // changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2) + 7 + 77);
                changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7 + 77);

                if (changeStr1 === matchText2) {
                    console.log('yes 211');

                    let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2)) + blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7 + 77 - (endInd - startInd)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7 + 77,);

                    // console.log(matchText.length); 2
                    // console.log(replacement_text.length); 3
                    // console.log(changeStr);

                    let shift = (replacement_text.length) - (matchText.length);

                    undoObj = {
                        ...undoObj,
                        shift,
                        mainIndex: ind1,
                    };

                    // document.querySelectorAll('.ce-block')[textBlockIndex].children[0].children[0].innerHTML = changeStr;
                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                    blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);

                    // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
                    toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);
                }
                else {
                    console.log('Something went wrong');
                }
            }
        }
        else {
            console.log('if else');
            // console.log(replacement_text);
            let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2),);

            let shift = (replacement_text.length) - (matchText.length);

            undoObj = {
                ...undoObj,
                shift,
                mainIndex: ind1
            };

            // console.log(changeStr);

            document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

            blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
            setBlockDetails(blockDetails);

            // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
            toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);
        }

        undoObj = { ...undoObj, prevTagData: tagData1 };
        console.log(tagData);

        // If there is any tags present than replace html with tagged html
        replaceTags(tagData, ind);
    }
    else {
        if (overFlowText) {
            console.log('else if');
            var nestedParentSpanIndex = 0;
            var currNode = document.getElementById(id);

            // There are nested span tags, getting up to the parent span
            for (let k = Number(idNum[id]); k >= 0; k--) {
                if (currNode.parentNode.tagName !== 'SPAN') {
                    break;
                }
                // console.log(currNode);
                nestedParentSpanIndex += 1;
                currNode = currNode.parentNode;
            }

            var nestedChildSpanIndex = 0;
            var currNode = document.getElementById(id);

            for (let k = ind1; k < mainData[ind].alerts.length; k++) {
                // console.log(currNode.children);
                if (currNode.children.length === 0) {
                    break;
                }
                if (currNode.children[0].tagName !== 'SPAN') {
                    break;
                }
                nestedChildSpanIndex += 1;
                currNode = currNode.children[0];
            }

            let ind2 = Number(idNum[id]);
            let ind4 = Number(idNum[id]);
            ind4 += nestedChildSpanIndex;
            ind2 -= nestedParentSpanIndex;
            let spanCount = nestedParentSpanIndex + 1;
            // let extraTextIndex = mainData[ind].alerts[ind4].end - mainData[ind].alerts[ind4].highlightEnd;
            // console.log(extraTextIndex);
            // console.log(ind4);
            // console.log(ind2);
            // console.log(nestedChildSpanIndex);
            // console.log(nestedParentSpanIndex);
            // let changeStr3 = blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind2), endInd + (77 * (ind4 + 1)) + spanCount * 7 + (7 * ind2));
            let text = '</span>';
            // console.log(startInd+(77*(ind4+1))+(7*ind2),endInd+(77*(ind4+1))+(7*ind2));
            // console.log(changeStr3);
            // console.log(replacement_text);
            // console.log(blockDetails[ind].text.slice(0, startInd + (77 * (ind4 + 1)) + (7 * ind2)));
            // console.log(text.repeat(spanCount));
            // console.log(blockDetails[ind].text.slice(endInd + (77 * (ind4 + 1)) + (7 * ind2) + spanCount * 7,));
            let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind4 + 1)) + (7 * ind2)) + replacement_text + text.repeat(spanCount) + blockDetails[ind].text.slice(endInd + (77 * (ind4 + 1)) + (7 * ind2) + spanCount * 7,);
            // console.log(changeStr);

            /* Check it -v */
            let shift = (replacement_text.length + text.repeat(spanCount).length) - (matchText.length);
            console.log(shift);

            // Insert html tags here
            let tagData = JSON.parse(localStorage.getItem("stnTagData"));
            let tagData1 = JSON.parse(localStorage.getItem("stnTagData"));

            let tagIndex = 0;
            const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");

            // Inserting the ids to tags for uniquification
            insertIdToTags(x, tagIndex);

            let card01 = document.getElementById(id).getElementsByTagName("*");

            // if correction text contains tags, then do operations acc. to it
            let tagUtilFlag = false;
            if (mainData[ind].alerts[ind1].text === matchText) {
                tagUtilFlag = true;
            }

            // if matchText is empty string, then send position and insert it
            let blankTextFlag = false;
            let insertPosition = 0;
            if (matchText === '') {
                blankTextFlag = true;
                insertPosition = mainData[ind].alerts[ind1].begin - mainData[ind].alerts[ind1].highlightBegin;
            }

            console.log(matchText);
            console.log(replacement_text);
            tagData = tagUtil1(card01, matchText, tagData1, tagData, replacement_text, tagUtilFlag, blankTextFlag, insertPosition);

            // Saving the data
            localStorage.setItem("stnTagData", JSON.stringify(tagData));
            // console.log(tagData);

            undoObj = {
                ...undoObj,
                shift,
                mainIndex: ind1,
                prevTagData: tagData1
            };

            document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

            // If there is any tags present than replace html with tagged html
            replaceTags(tagData, ind);

            // console.log(changeStr);
            blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
            setBlockDetails(blockDetails);

            // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
            toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);
        }
        else {
            if (isNum) {
                // console.log(text);
                // console.log(document.getElementById(id).textContent);
                // console.log(document.getElementById(id).textContent.slice(0, text));
                console.log('else else if');
                // console.log(text);
                if (text < 0) {
                    console.log('else else if if');

                    // insert the replacement text before num (index)
                    let text1 = text;
                    // console.log(text);
                    var strSpace = "";

                    while (text1 !== 0) {
                        strSpace += " ";
                        text1++;
                    }

                    let shift = replacement_text.length + strSpace.length;

                    // Insert html tags here
                    let tagData = JSON.parse(localStorage.getItem("stnTagData"));
                    let tagData1 = JSON.parse(localStorage.getItem("stnTagData"));

                    let tagIndex = 0;
                    const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");

                    // Inserting the ids to tags for uniquification
                    insertIdToTags(x, tagIndex);

                    let card01 = document.getElementById(id).getElementsByTagName("*");

                    // if correction text contains tags, then do operations acc. to it 
                    // below case may not required for this case **
                    // let tagUtilFlag=false;

                    // if(mainData[ind].alerts[ind1].text=== matchText)
                    // {
                    //     tagUtilFlag=true;
                    // }

                    tagData = tagUtil1(card01, document.getElementById(id).textContent, tagData1, tagData, replacement_text + strSpace + document.getElementById(id).textContent, false, false, 0);

                    // Saving the data
                    localStorage.setItem("stnTagData", JSON.stringify(tagData));
                    // console.log(tagData);

                    undoObj = {
                        ...undoObj,
                        shift,
                        mainIndex: ind1,
                        prevTagData: tagData1
                    };

                    // To get back removed classes
                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = blockDetails[ind].text;

                    // Match text                                              // Replacement Text
                    document.getElementById(id).textContent = replacement_text + strSpace + document.getElementById(id).textContent;

                    // If there is any tags present than replace html with tagged html
                    replaceTags(tagData, ind);

                    let tempEle = document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML;

                    // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
                    toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);

                    // console.log(shift);
                    // console.log(ind1);
                    // console.log(mainData);

                    let tagsToRemove = ['<b>', '</b>', '<i>', '</i>'];
                    for (let i of tagsToRemove) {
                        tempEle = tempEle.replaceAll(i, '');
                    }

                    // console.log(tempEle.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', ''));

                    blockDetails[ind].text = tempEle.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);
                }
                else {
                    console.log('else else if else');
                    var ind2 = Number(idNum[id]);
                    var ind3 = Number(idNum[id]);

                    for (let h = ind3; h <= (tc / mainData.length); h++) {
                        var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2));
                        if (changeStr1 === matchText) {
                            break;
                        }
                        ++ind3;
                    }

                    // console.log(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2));
                    // console.log(changeStr1);
                    let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind3 + 1)) + (7 * ind2)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (ind3 + 1)) + (7 * ind2),);

                    let shift = (replacement_text.length) - (matchText.length);

                    // Insert html tags here
                    let tagData = JSON.parse(localStorage.getItem("stnTagData"));
                    let tagData1 = JSON.parse(localStorage.getItem("stnTagData"));

                    let tagIndex = 0;
                    const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");

                    // Inserting the ids to tags for uniquification
                    insertIdToTags(x, tagIndex);

                    let card01 = document.getElementById(id).getElementsByTagName("*");

                    // if correction text contains tags, then do operations acc. to it
                    let tagUtilFlag = false;

                    if (mainData[ind].alerts[ind1].text === matchText) {
                        tagUtilFlag = true;
                    }

                    // if matchText is empty string, then send position and insert it
                    let blankTextFlag = false;
                    let insertPosition = 0;
                    if (matchText === '') {
                        blankTextFlag = true;
                        insertPosition = mainData[ind].alerts[ind1].begin - mainData[ind].alerts[ind1].highlightBegin;
                    }

                    tagData = tagUtil1(card01, matchText, tagData1, tagData, replacement_text, tagUtilFlag, blankTextFlag, insertPosition);

                    // Saving the data
                    localStorage.setItem("stnTagData", JSON.stringify(tagData));
                    // console.log(tagData);

                    undoObj = {
                        ...undoObj,
                        shift,
                        mainIndex: ind1,
                        prevTagData: tagData1
                    };


                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                    // If there is any tags present than replace html with tagged html
                    replaceTags(tagData, ind);

                    blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);

                    // console.log(changeStr);

                    // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
                    toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);
                }
            }
            else {
                console.log('else else else');
                console.log(Number(idNum[id]));
                var ind2 = Number(idNum[id]); // card index
                var ind3 = Number(idNum[id]); // card index
                var ind4 = Number(idNum[id]); // card index
                var ind5 = Number(idNum[id]); // card index

                // Insert html tags here
                let tagData = JSON.parse(localStorage.getItem("stnTagData"));
                let tagData1 = JSON.parse(localStorage.getItem("stnTagData"));

                let tagIndex = 0;
                let x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");

                // Inserting the ids to tags for uniquification
                insertIdToTags(x, tagIndex);

                let card01 = document.getElementById(id).getElementsByTagName("*");
                // console.log(card01);

                // if correction text contains tags, then do operations acc. to it
                let tagUtilFlag = false;

                if (mainData[ind].alerts[ind1].text === matchText) {
                    tagUtilFlag = true;
                }

                // if matchText is empty string, then send position and insert it
                let blankTextFlag = false;
                let insertPosition = 0;
                if (matchText === '') {
                    blankTextFlag = true;
                    insertPosition = mainData[ind].alerts[ind1].begin - mainData[ind].alerts[ind1].highlightBegin;
                }

                tagData = tagUtil1(card01, matchText, tagData1, tagData, replacement_text, tagUtilFlag, blankTextFlag, insertPosition);

                // Saving the data
                localStorage.setItem("stnTagData", JSON.stringify(tagData));
                // console.log(tagData);

                // console.log(mainData[ind].alerts.length);

                console.log(blockDetails[ind].text);

                // checking correction card's correction index, increasing card's checking index count if not found
                // For the nested spans
                let tagIndexLength= tagIndexLengthUtil(blockDetails[ind].text);
                
                for (let h = ind1; h < (mainData[ind].alerts.length); h++) {
                    var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2));
                    console.log(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2));
                    // console.log(blockDetails[ind].text);
                    // console.log(ind5, ind2);
                    // console.log(changeStr1, matchText);

                    let isInTags1=isInTags(startInd + (77 * (ind5 + 1)) + (7 * ind2), tagIndexLength);
                    let isInTags2=isInTags(endInd + (77 * (ind5 + 1)) + (7 * ind2), tagIndexLength);
                    // console.log(isInTags1, isInTags2);

                    if (changeStr1 === matchText && (isInTags1===0 && isInTags2===0)) {
                        break;
                    }
                    ++ind5;
                }

                let shift = (replacement_text.length) - (matchText.length);

                console.log((startInd + (77 * (ind5 + 1)) + (7 * ind2)));
                console.log(endInd + (77 * (ind5 + 1)) + (7 * ind2));
                console.log(ind5);
                console.log(ind2);
                console.log(blockDetails[ind].text.slice(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2)));
                console.log(matchText);

                // If we are at last card position or we matched
                if (blockDetails[ind].text.slice(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2)) !== matchText) {
                    console.log('reverse needed');

                    for (let k = ind2; k >= 0; k--) {
                        var changeStr2 = blockDetails[ind].text.slice(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2));
                        // console.log(k,changeStr2);
                        if (changeStr2 === matchText) {
                            break;
                        }
                        --ind2;
                    }

                    console.log(ind3, ind2);
                    console.log(blockDetails[ind].text);

                    console.log((blockDetails[ind].text.slice(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2))));
                    console.log(matchText);
                    if (blockDetails[ind].text.slice(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2)) === matchText) {
                        console.log('else else else if if');
                        // console.log(ind3, ind2);
                        // console.log(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2));
                        let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind3 + 1)) + (7 * ind2)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (ind3 + 1)) + (7 * ind2),);

                        undoObj = {
                            ...undoObj,
                            shift,
                            mainIndex: ind1
                        };

                        document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;
                        console.log(changeStr);
                        blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                        setBlockDetails(blockDetails);
                    }
                    else {
                        console.log('else else else if else');
                        // console.log(ind4);
                        // console.log(blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind4), endInd + (77 * (ind4 + 1)) + (7 * ind4)).length);
                        // console.log(matchText.trim().length);
                        // console.log(blockDetails[ind]);

                        if (blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind4), endInd + (77 * (ind4 + 1)) + (7 * ind4)) === matchText.trim()) {
                            console.log('else else if else else else if');
                            let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind4 + 1)) + (7 * ind4)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (ind4 + 1)) + (7 * ind4),);
                            // console.log(changeStr);

                            undoObj = {
                                ...undoObj,
                                shift,
                                mainIndex: ind1
                            };

                            document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                            matchText = matchText.trim();

                            blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                            setBlockDetails(blockDetails);
                        }

                        // if(blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind4), endInd + (77 * (ind4 + 1)) + (7 * ind4)) === matchText.trimStart())
                        // {
                        //     console.log('left');
                        //     console.log(blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind4) -1, endInd + (77 * (ind4 + 1)) + (7 * ind4)));
                        // }
                        // else
                        // {
                        //     console.log('right');
                        // }
                    }
                }
                else {
                    console.log('reverse not needed');
                    // console.log(ind5, ind2);
                    // console.log(ind);
                    // console.log(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2));
                    // console.log(blockDetails[ind].text);
                    let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind5 + 1)) + (7 * ind2)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (ind5 + 1)) + (7 * ind2),);
                    console.log(blockDetails[ind].text.slice(0, startInd + (77 * (ind5 + 1)) + (7 * ind2)));
                    // console.log(changeStr);
                    console.log(replacement_text);
                    console.log(blockDetails[ind].text.slice(endInd + (77 * (ind5 + 1)) + (7 * ind2),));
                    // console.log(blockDetails);

                    undoObj = {
                        ...undoObj,
                        shift,
                        mainIndex: ind1
                    };

                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                    // console.log(matchText, replacement_text);
                    blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);
                }

                console.log(tagData1);
                undoObj = { ...undoObj, prevTagData: tagData1 };

                console.log(tagData);

                // If there is any tags present than replace html with tagged html
                replaceTags(tagData, ind);

                // Removing cards with same suggestions (includes the selected card also) & Shifting further card's start & end index.
                toBeRemovedArr = removeCards(mainData, startIndS, endIndS, toBeRemovedArr, ind, ind1, shift);
            }
        }
    }

    var tempType = {}; // To store the type of corrected word's count and decrease it
    var tcFinal = 0; // Final total count of words to be subtracted
    var cardIdArr = []; // Storing card id and index for undo purpose
    var blockIdArr = []; // Storing block id and index for undo purpose
    let originalIndex = []; // Original index of the corrected word card, for undo purpose

    // Function to remove highlights/update correction types and some above undo puropose things
    mainData[ind].alerts = mainData[ind].alerts.filter((e, index) => {
        if (toBeRemovedArr.includes(index)) {
            originalIndex.push(idNum[blockIds[ind][index]]);
            let b1 = document.getElementById(blockIds[ind][index]);
            // console.log(b1);

            if (b1.classList.contains('gr0am0-clarity-ht') || b1.classList.contains('gr0am1-clarity-ht')) {
                if (tempType['Clarity']) {
                    tempType['Clarity']++;
                }
                else {
                    tempType['Clarity'] = 1;
                }
                setSideUtils({ ...sideUtils, 'Clarity': --sideUtils.Clarity });
            }
            if (b1.classList.contains('gr0am0-engagem-ht') || b1.classList.contains('gr0am1-engagem-ht')) {
                if (tempType['Engagement']) {
                    tempType['Engagement']++;
                }
                else {
                    tempType['Engagement'] = 1;
                }
                setSideUtils({ ...sideUtils, 'Engagement': --sideUtils.Engagement });
            }
            if (b1.classList.contains('gr0am0-correct-ht') || b1.classList.contains('gr0am1-correct-ht')) {
                if (tempType['Correctness']) {
                    tempType['Correctness']++;
                }
                else {
                    tempType['Correctness'] = 1;
                }
                setSideUtils({ ...sideUtils, 'Correctness': --sideUtils.Correctness });
            }
            if (b1.classList.contains('gr0am0-tone-ht') || b1.classList.contains('gr0am1-tone-ht')) {
                if (tempType['Tone']) {
                    tempType['Tone']++;
                }
                else {
                    tempType['Tone'] = 1;
                }
                setSideUtils({ ...sideUtils, 'Tone': --sideUtils.Tone });
            }

            tcFinal++;

            b1.className = "gr0am0";

            cardIdArr.push({
                card: mainData[ind].alerts[index],
                index
            });
            blockIdArr.push({
                id: blockIds[ind][index],
                index
            });

            // Saving new correction's index to removed old (removed) highlights
            let tt = idNum[blockIds[ind][index]];
            let totalRemovedArr = localStorage.getItem('totalRemovedArr');
            if (totalRemovedArr) {
                totalRemovedArr = JSON.parse(totalRemovedArr);
            }
            else {
                totalRemovedArr = {};
            }

            // console.log(Object.keys(totalRemovedArr), ind);
            if (Object.keys(totalRemovedArr).includes(String(ind))) {
                totalRemovedArr[ind].push(tt);
            }
            else {
                totalRemovedArr[ind] = [tt];
            }
            // console.log(idNum[blockIds[ind][index]]);
            // console.log(totalRemovedArr);
            localStorage.setItem('totalRemovedArr', JSON.stringify(totalRemovedArr));
        }
        return !toBeRemovedArr.includes(index);
    });

    // Removing all highlights of removed/corrected cards which is causing by setting the innerHTML equals to main str
    if (localStorage.getItem('totalRemovedArr')) {
        for (let i of JSON.parse(localStorage.getItem('totalRemovedArr'))[ind]) {
            document.querySelectorAll('.ce-block__content')[ind].children[0].querySelectorAll('.gr0am0')[i].className = 'gr0am0';
        }
    }

    // Decrease the cards count
    tc -= tcFinal;
    setTc(tc);

    // Setting undo.
    setAlertUndoMsg({ ...undoObj, tempType, tcFinal, cardIdArr, blockIdArr, originalIndex });

    setMainData(mainData);

    setTimeout(() => {
        blockIds[ind] = blockIds[ind].filter((e, index) => {
            return !toBeRemovedArr.includes(index);
        });
        setBlockIds(blockIds);
    }, 350);

    // Saving the editor data after change
    let savedData = await editorS.save();
    onEditorStateChange(savedData.blocks);

    // If cards count are 0, then hide the card showing display.
    if (tc === 0) {
        setFlag3(true);
        document.querySelector('.em2').style.display = 'none';
    }

    // Running the grammar module
    // setTimeout(() => {
    //     checkGr(true, onEditorStateChange2);
    // }, 5010);
};

// Closing the notificatioin alert (Bottom - Right)
export const closeAlert = (editorContext) => {
    const { setFlag2 } = editorContext;
    clearTimeout(tm1);
    setFlag2(false);
};

// Undo the changes in text/deletion and alerts
export const alertUndo = (editorContext, onEditorStateChange5) => {
    const { mainData, setMainData, setFlag2, setFlag3, alertUndoMsg, blockIds, setBlockIds, sideUtils, setSideUtils, dictWords, setDictWords, blockDetails, setBlockDetails, undoFlag, setUndoFlag } = editorContext;
    var { tc, setTc } = editorContext;

    // If undo a correction
    if (alertUndoMsg.role === 'correct') {
        // Incrementing the side bar alerts.
        for (let i of Object.keys(alertUndoMsg.tempType)) {
            sideUtils[i] += alertUndoMsg.tempType[i];
            setSideUtils(sideUtils);
        }

        // document.querySelectorAll('.ce-block__content')[alertUndoMsg.ind].children[0].innerHTML = alertUndoMsg.prevStr;
        document.querySelectorAll('.ce-block__content')[alertUndoMsg.ind].children[0].innerHTML = alertUndoMsg.prevStr1;

        // Adding the deleted card back to its position
        for (let i of alertUndoMsg.cardIdArr) {
            mainData[alertUndoMsg.ind].alerts.splice(i.index, 0, i.card);
        }

        // Adding the deleted index back to its index
        for (let i of alertUndoMsg.blockIdArr) {
            blockIds[alertUndoMsg.ind].splice(i.index, 0, i.id);
        }

        // Undo the previously setted string
        blockDetails[alertUndoMsg.ind].text = alertUndoMsg.prevStr;
        setBlockDetails(blockDetails);
        setMainData(mainData);
        setBlockIds(blockIds);

        // (Revert) Shifting further card's start & end index
        for (let i = alertUndoMsg.mainIndex + 1; i < mainData[alertUndoMsg.ind].alerts.length; i++) {
            // console.log('yes');
            // console.log(i);
            mainData[alertUndoMsg.ind].alerts[i].begin -= (alertUndoMsg.shift);
            mainData[alertUndoMsg.ind].alerts[i].end -= (alertUndoMsg.shift);
            mainData[alertUndoMsg.ind].alerts[i].highlightBegin -= (alertUndoMsg.shift);
            mainData[alertUndoMsg.ind].alerts[i].highlightEnd -= (alertUndoMsg.shift);
        }

        tc += alertUndoMsg.tcFinal;
        setTc(tc);

        // console.log(alertUndoMsg.originalIndex);

        // Removing removed index.
        let totalRemovedArr = localStorage.getItem('totalRemovedArr');
        if (totalRemovedArr) {
            totalRemovedArr = JSON.parse(totalRemovedArr);
            totalRemovedArr[alertUndoMsg.ind] = totalRemovedArr[alertUndoMsg.ind].filter((e, index) => {
                if (!alertUndoMsg.originalIndex.includes(e)) {
                    document.querySelectorAll('.gr0am0')[e].className = 'gr0am0';
                    return true;
                }
                return false;
            });
            localStorage.setItem('totalRemovedArr', JSON.stringify(totalRemovedArr));
        }

        console.log(alertUndoMsg.prevTagData);
        localStorage.setItem("stnTagData", JSON.stringify(alertUndoMsg.prevTagData));
    }

    // If undo a deleted card
    else if (alertUndoMsg.role === 'delete') {
        // Incrementing the side bar alerts by 1.
        setSideUtils({ ...sideUtils, [alertUndoMsg.tempType]: ++sideUtils[alertUndoMsg.tempType] });

        blockIds[alertUndoMsg.ind].splice(alertUndoMsg.mainIndex, 0, alertUndoMsg.cardId);
        mainData[alertUndoMsg.ind].alerts.splice(alertUndoMsg.mainIndex, 0, alertUndoMsg.card);
        document.getElementById(alertUndoMsg.cardId).className = alertUndoMsg.cardClass;
        setMainData(mainData);
        setBlockIds(blockIds);

        if (alertUndoMsg.isDict) {
            setDictWords(() => {
                return dictWords.filter((e) => {
                    return e !== alertUndoMsg.undoText;
                });
            });
            onEditorStateChange5(alertUndoMsg.undoText);
        }

        setTc(++tc);

        // Removing removed index
        let totalRemovedArr = localStorage.getItem('totalRemovedArr');
        if (totalRemovedArr) {
            totalRemovedArr = JSON.parse(totalRemovedArr);
            console.log(totalRemovedArr);
            totalRemovedArr[alertUndoMsg.ind].splice(totalRemovedArr[alertUndoMsg.ind].indexOf(alertUndoMsg.originalIndex), 1);
            localStorage.setItem('totalRemovedArr', JSON.stringify(totalRemovedArr));
        }
    }

    if (tc > 0) {
        setFlag3(false);
        document.querySelector('.em2').style.display = 'block';
    }

    // Removing the bottom right alert box
    setFlag2(false);
    clearTimeout(tm1);
    setUndoFlag(!undoFlag);
};
