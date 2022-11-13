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
                e.target.parentNode.nextElementSibling.classList.add('em2-box2-ani');
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

var tm1;

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

const replace_nth = function (s, f, r, n) {
    // From the given string s, find f, replace as r only on n’th occurrence
    // return s.replace(RegExp("^(?:.*?" + f + "){" + n + "}"), x => x.replace(RegExp(f + "$"), r));
    // return s.replace(RegExp("^(?:.*?" + "\\b" + f + "\\b" + "){" + n + "}"), x => x.replace(RegExp(f + "$"), r));
    return s.replace(RegExp("^(?:.*?" + "\\b" + f + "\\b" + "){" + n + "}"), x => x.replace(RegExp("\\b" + f + "\\b" + "$"), r)); //double changed
};

// Correcting the text mistake on click
export const textChange = async (id, text, replacement_text, isNum, ind, ind1, startInd, endInd, matchText, overFlowText, beginFlag, beginInc, editorContext, onEditorStateChange, onEditorStateChange2) => {
    const { mainData, setMainData, setFlag4, setFlag3, flag3, setAlertUndoMsg, blockDetails, blockIds, setBlockIds, idNum, sideUtils, setSideUtils, checkGr, setBlockDetails } = editorContext;
    var { editorS, tc, setTc } = editorContext;

    const startIndS = startInd;
    const endIndS = endInd;
    var undoObj = {};
    var toBeRemovedArr = [];

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

    // Freeze the correction button for 5 seconds.
    // setFlag4(true);
    // setTimeout(() => {
    //     setFlag4(false);
    // }, 5000);

    // console.log(id, ",", text, ",", replacement_text, ",", isNum, ",", ind, ",", ind1, ",", startInd, ",", endInd, ",", matchText, ",", overFlowText, ",", beginFlag, ",", beginInc);

    // Alert the bottom notification bar with message
    saveAlert1('Corrected', editorContext);

    // if the correction index is prior to highlighted are (before the scope) then increase the index according to it.
    if (beginFlag) {
        if (startInd === endInd) {
            endInd += beginInc;
        }
        startInd += beginInc;
    }

    // Dealing with cards whose highlight index are changed in order to prevent inter collision (overlap)
    // if the card is manipulated in backend to prevent collision, then handle that card here
    if (document.getElementById(id).classList[1].slice(5, 6) === '1') {
        console.log('if');
        // let ind2 = ind1;
        let ind2 = Number(idNum[id]);
        // var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2));
        var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2));

        // console.log(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2));
        // console.log(changeStr1);
        if (changeStr1 !== matchText) {
            let matchText1 = `</span>${matchText}`;
            // changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind1 + 1)) + (7 * ind2), endInd + (77 * (ind1 + 1)) + (7 * ind2) + 7);
            changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7);

            if (changeStr1 === matchText1) {
                console.log('yes 2');
                let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2)) + blockDetails[ind].text.slice(startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2), endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7 - (endInd - startInd)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2) + 7,);
                // console.log(changeStr);

                let shift = (replacement_text.length) - (endInd - startInd);

                undoObj = {
                    role: 'correct',
                    ind,
                    prevStr: blockDetails[ind].text,
                    shift,
                    mainIndex: ind1
                };

                document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                setBlockDetails(blockDetails);
                setBlockDetails(blockDetails);

                // Removing cards with same suggestions
                for (let i = 0; i < mainData[ind].alerts.length; i++) {
                    if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                        toBeRemovedArr.push(i);
                    }
                }

                // Shifting further card's start & end index.
                for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                    mainData[ind].alerts[i].begin += (shift);
                    mainData[ind].alerts[i].end += (shift);
                    mainData[ind].alerts[i].highlightBegin += (shift);
                    mainData[ind].alerts[i].highlightEnd += (shift);
                }
            }
            else {
                console.log('yes 2 1');
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
                        role: 'correct',
                        ind,
                        prevStr: blockDetails[ind].text,
                        shift,
                        mainIndex: ind1
                    };

                    // document.querySelectorAll('.ce-block')[textBlockIndex].children[0].children[0].innerHTML = changeStr;
                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;
                    // blockDetails[ind].text = changeStr;
                    blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);
                    setBlockDetails(blockDetails);

                    // Removing cards with same suggestions
                    for (let i = 0; i < mainData[ind].alerts.length; i++) {
                        if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                            toBeRemovedArr.push(i);
                        }
                    }

                    // Shifting further card's start & end index.
                    for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                        mainData[ind].alerts[i].begin += (shift);
                        mainData[ind].alerts[i].end += (shift);
                        mainData[ind].alerts[i].highlightBegin += (shift);
                        mainData[ind].alerts[i].highlightEnd += (shift);
                    }
                }
                else {
                    console.log('Something went wrong');
                }
            }
        }
        else {
            console.log('yes 3');
            // console.log(replacement_text);
            let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (Number(idNum[id]) + 1)) + (7 * ind2),);

            let shift = (replacement_text.length) - (matchText.length);

            undoObj = {
                role: 'correct',
                ind,
                prevStr: blockDetails[ind].text,
                shift,
                mainIndex: ind1
            };

            document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

            blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
            setBlockDetails(blockDetails);
            setBlockDetails(blockDetails);

            // Removing cards with same suggestions
            for (let i = 0; i < mainData[ind].alerts.length; i++) {
                if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                    toBeRemovedArr.push(i);
                }
            }

            // Shifting further card's start & end index.
            for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                mainData[ind].alerts[i].begin += (shift);
                mainData[ind].alerts[i].end += (shift);
                mainData[ind].alerts[i].highlightBegin += (shift);
                mainData[ind].alerts[i].highlightEnd += (shift);
            }
        }
    }
    else {
        if (overFlowText) {
            console.log('else if');
            var nestedParentSpanIndex = 0;
            var currNode = document.getElementById(id);

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

            let shift = (replacement_text.length + text.repeat(spanCount).length) - (matchText.length);

            undoObj = {
                role: 'correct',
                ind,
                prevStr: blockDetails[ind].text,
                shift,
                mainIndex: ind1
            };

            document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;
            // console.log(changeStr);
            blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
            setBlockDetails(blockDetails);
            setBlockDetails(blockDetails);

            // Removing cards with same suggestions
            for (let i = 0; i < mainData[ind].alerts.length; i++) {
                if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                    toBeRemovedArr.push(i);
                }
            }

            // Shifting further card's start & end index.
            for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                mainData[ind].alerts[i].begin += (shift);
                mainData[ind].alerts[i].end += (shift);
                mainData[ind].alerts[i].highlightBegin += (shift);
                mainData[ind].alerts[i].highlightEnd += (shift);
            }
        }
        else {
            if (isNum) {
                // console.log(text);
                // console.log(document.getElementById(id).textContent);
                // console.log(document.getElementById(id).textContent.slice(0, text));
                console.log('else else if');
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
                    for (let i = 0; i < x.length; i++) {
                        if (x[i].tagName !== 'SPAN' && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
                            x[i].setAttribute("id", `uuid${tagIndex++}`);
                        }
                    }

                    let occurranceFlag = false;       // To check if any word with tag is changed
                    let card01 = document.getElementById(id).getElementsByTagName("*");

                    // if correction text contains tags, then do operations acc. to it
                    for (let i of card01) {

                        if (i?.tagName !== 'SPAN' && (i.parentNode?.tagName === 'SPAN' || i.parentNode?.tagName === 'DIV')) {

                            // if correction text containing HTML tags
                            if (i.innerText === document.getElementById(id).textContent) {
                                let tagArrIndex = tagData1.findIndex(x => x.index = i.id.slice(4,));

                                if (tagData.length > 0 && tagArrIndex !== -1) {

                                    // replacing replacement to replacement with bold and text to corrected text
                                    tagData[tagArrIndex].replacement = tagData[tagArrIndex].replacement.replaceAll(i.innerText, replacement_text + strSpace + document.getElementById(id).textContent);
                                    tagData[tagArrIndex].text = replacement_text + strSpace + document.getElementById(id).textContent;

                                    // if text being corrected is different than replacement text and its not the last element of tagData array
                                    if (i.innerText !== (replacement_text + strSpace + document.getElementById(id).textContent) && tagArrIndex + 1 <= tagData.length) {

                                        for (let j = tagArrIndex + 1; j < tagData.length; j++) {

                                            // Decrement occurance of further tagged words only if their text is equal to the word which is corrected above
                                            if (tagData[j].text === i.innerText) {
                                                tagData[j].occurrance -= 1;
                                                occurranceFlag = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // Saving the data
                    localStorage.setItem("stnTagData", JSON.stringify(tagData));
                    // console.log(tagData);


                    undoObj = {
                        role: 'correct',
                        ind,
                        prevStr: blockDetails[ind].text,
                        prevStr1: document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', ''),
                        shift,
                        mainIndex: ind1,
                        occurranceFlag,
                        prevTagData: tagData1
                    };

                    // To get back removed classes
                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = blockDetails[ind].text;

                    // Match text                                              // Replacement Text
                    document.getElementById(id).textContent = replacement_text + strSpace + document.getElementById(id).textContent;

                    // If there is any tags present than replace html with tagged html
                    if (tagData.length > 0) {
                        let replacedString = document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML;

                        for (let i = tagData.length - 1; i >= 0; i--) {
                            replacedString = replace_nth(replacedString, tagData[i].text, tagData[i].replacement, tagData[i].occurrance);
                        }

                        // console.log(replacedString);
                        document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = replacedString;
                    }

                    let tempEle = document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML;

                    // Removing cards with same suggestions
                    for (let i = 0; i < mainData[ind].alerts.length; i++) {
                        if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                            toBeRemovedArr.push(i);
                        }
                    }

                    // Shifting further card's start & end index.
                    for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                        mainData[ind].alerts[i].begin += (shift);
                        mainData[ind].alerts[i].end += (shift);
                        mainData[ind].alerts[i].highlightBegin += (shift);
                        mainData[ind].alerts[i].highlightEnd += (shift);
                    }

                    // console.log(shift);
                    // console.log(ind1);
                    // console.log(mainData);
                    // blockDetails[ind].text = tempEle;

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
                    for (let i = 0; i < x.length; i++) {
                        if (x[i].tagName !== 'SPAN' && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
                            x[i].setAttribute("id", `uuid${tagIndex++}`);
                        }
                    }

                    let occurranceFlag = false;       // To check if any word with tag is changed
                    let card01 = document.getElementById(id).getElementsByTagName("*");

                    // if correction text contains tags, then do operations acc. to it
                    for (let i of card01) {

                        if (i?.tagName !== 'SPAN' && (i.parentNode?.tagName === 'SPAN' || i.parentNode?.tagName === 'DIV')) {

                            // if correction text containing HTML tags
                            if (i.innerText === matchText) {
                                let tagArrIndex = tagData1.findIndex(x => x.index = i.id.slice(4,));

                                if (tagData.length > 0 && tagArrIndex !== -1) {

                                    // replacing replacement to replacement with bold and text to corrected text
                                    tagData[tagArrIndex].replacement = tagData[tagArrIndex].replacement.replaceAll(i.innerText, replacement_text);
                                    tagData[tagArrIndex].text = replacement_text;

                                    // if text being corrected is different than replacement text and its not the last element of tagData array
                                    if (i.innerText !== replacement_text && tagArrIndex + 1 <= tagData.length) {

                                        for (let j = tagArrIndex + 1; j < tagData.length; j++) {

                                            // Decrement occurance of further tagged words only if their text is equal to the word which is corrected above
                                            if (tagData[j].text === i.innerText) {
                                                tagData[j].occurrance -= 1;
                                                occurranceFlag = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // Saving the data
                    localStorage.setItem("stnTagData", JSON.stringify(tagData));
                    // console.log(tagData);

                    undoObj = {
                        role: 'correct',
                        ind,
                        prevStr: blockDetails[ind].text,
                        prevStr1: document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', ''),
                        shift,
                        mainIndex: ind1,
                        occurranceFlag,
                        prevTagData: tagData1
                    };

                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                    // If there is any tags present than replace html with tagged html
                    if (tagData.length > 0) {
                        let replacedString = document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML;

                        for (let i = tagData.length - 1; i >= 0; i--) {
                            replacedString = replace_nth(replacedString, tagData[i].text, tagData[i].replacement, tagData[i].occurrance);
                        }

                        // console.log(replacedString);
                        document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = replacedString;
                    }

                    blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);

                    // console.log(changeStr);

                    // Removing cards with same suggestions
                    for (let i = 0; i < mainData[ind].alerts.length; i++) {
                        if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                            toBeRemovedArr.push(i);
                        }
                    }

                    // Shifting further card's start & end index.
                    for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                        mainData[ind].alerts[i].begin += (shift);
                        mainData[ind].alerts[i].end += (shift);
                        mainData[ind].alerts[i].highlightBegin += (shift);
                        mainData[ind].alerts[i].highlightEnd += (shift);
                    }
                }
            }
            else {
                console.log('else else if else else');
                var ind2 = Number(idNum[id]); // card index
                var ind3 = Number(idNum[id]); // card index
                var ind4 = Number(idNum[id]); // card index
                var ind5 = Number(idNum[id]); // card index

                // console.log(mainData[ind].alerts.length);

                for (let h = ind1; h < (mainData[ind].alerts.length); h++) {
                    var changeStr1 = blockDetails[ind].text.slice(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2));
                    // console.log(startInd+(77*(ind5+1))+(7*ind2),endInd+(77*(ind5+1))+(7*ind2));
                    // console.log(blockDetails[ind].text);
                    // console.log(ind5, ind2);
                    // console.log(changeStr1, matchText);

                    if (changeStr1 === matchText) {
                        break;
                    }
                    ++ind5;
                }

                let shift = (replacement_text.length) - (matchText.length);

                // console.log(blockDetails[ind].text.slice(startInd + (77 * (ind5 + 1)) + (7 * ind2), endInd + (77 * (ind5 + 1)) + (7 * ind2)));
                // console.log(matchText);

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

                    if (blockDetails[ind].text.slice(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2)) === matchText) {
                        // console.log(ind3, ind2);
                        // console.log(startInd + (77 * (ind3 + 1)) + (7 * ind2), endInd + (77 * (ind3 + 1)) + (7 * ind2));
                        let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind3 + 1)) + (7 * ind2)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (ind3 + 1)) + (7 * ind2),);

                        undoObj = {
                            role: 'correct',
                            ind,
                            prevStr: blockDetails[ind].text,
                            prevStr1: document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', ''),
                            shift,
                            mainIndex: ind1
                        };

                        document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;
                        // console.log(changeStr);
                        blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                        setBlockDetails(blockDetails);
                    }
                    else {
                        // console.log(ind4);
                        // console.log(blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind4), endInd + (77 * (ind4 + 1)) + (7 * ind4)).length);
                        // console.log(matchText.trim().length);
                        // console.log(blockDetails[ind]);

                        if (blockDetails[ind].text.slice(startInd + (77 * (ind4 + 1)) + (7 * ind4), endInd + (77 * (ind4 + 1)) + (7 * ind4)) === matchText.trim()) {
                            let changeStr = blockDetails[ind].text.slice(0, startInd + (77 * (ind4 + 1)) + (7 * ind4)) + replacement_text + blockDetails[ind].text.slice(endInd + (77 * (ind4 + 1)) + (7 * ind4),);
                            // console.log(changeStr);

                            undoObj = {
                                role: 'correct',
                                ind,
                                prevStr: blockDetails[ind].text,
                                prevStr1: document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', ''),
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
                    // console.log(changeStr);
                    // console.log(blockDetails);
                    // console.log(ind);

                    // console.log(mainIndex);
                    // console.log(ind1);

                    undoObj = {
                        role: 'correct',
                        ind,
                        prevStr: blockDetails[ind].text,
                        prevStr1: document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', ''),
                        shift,
                        mainIndex: ind1
                    };

                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = changeStr;

                    // console.log(changeStr);
                    // console.log(matchText, replacement_text);
                    blockDetails[ind].text = changeStr.replaceAll(' style="background-color: unset;"', '').replaceAll(' style="background-color: rgb(255, 205, 205);"', '').replaceAll(' style="background-color: rgb(224, 202, 252);"', '').replaceAll(' style="background-color: rgb(202, 226, 252);"', '').replaceAll(' style="background-color: rgb(216, 252, 202);"', '');
                    setBlockDetails(blockDetails);
                }

                // Insert html tags here
                let tagData = JSON.parse(localStorage.getItem("stnTagData"));
                let tagData1 = JSON.parse(localStorage.getItem("stnTagData"));

                let tagIndex = 0;
                const x = document.querySelector('.ce-block__content').children[0].getElementsByTagName("*");

                // Inserting the ids to tags for uniquification
                for (let i = 0; i < x.length; i++) {
                    if (x[i].tagName !== 'SPAN' && (x[i].parentNode?.tagName === 'SPAN' || x[i].parentNode?.tagName === 'DIV')) {
                        x[i].setAttribute("id", `uuid${tagIndex++}`);
                    }
                }

                let occurranceFlag = false;       // To check if any word with tag is changed
                let card01 = document.getElementById(id).getElementsByTagName("*");

                // if correction text contains tags, then do operations acc. to it
                for (let i of card01) {

                    if (i?.tagName !== 'SPAN' && (i.parentNode?.tagName === 'SPAN' || i.parentNode?.tagName === 'DIV')) {

                        // if correction text containing HTML tags
                        if (i.innerText === matchText) {
                            let tagArrIndex = tagData1.findIndex(x => x.index = i.id.slice(4,));

                            if (tagData.length > 0 && tagArrIndex !== -1) {

                                // replacing replacement to replacement with bold and text to corrected text
                                tagData[tagArrIndex].replacement = tagData[tagArrIndex].replacement.replaceAll(i.innerText, replacement_text);
                                tagData[tagArrIndex].text = replacement_text;

                                // if text being corrected is different than replacement text and its not the last element of tagData array
                                if (i.innerText !== replacement_text && tagArrIndex + 1 <= tagData.length) {

                                    for (let j = tagArrIndex + 1; j < tagData.length; j++) {

                                        // Decrement occurance of further tagged words only if their text is equal to the word which is corrected above
                                        if (tagData[j].text === i.innerText) {
                                            tagData[j].occurrance -= 1;
                                            occurranceFlag = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Saving the data
                localStorage.setItem("stnTagData", JSON.stringify(tagData));
                // console.log(tagData);

                undoObj = { ...undoObj, occurranceFlag, prevTagData: tagData1 };

                // If there is any tags present than replace html with tagged html
                if (tagData.length > 0) {
                    let replacedString = document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML;

                    for (let i = tagData.length - 1; i >= 0; i--) {
                        replacedString = replace_nth(replacedString, tagData[i].text, tagData[i].replacement, tagData[i].occurrance);
                    }

                    // console.log(replacedString);
                    document.querySelectorAll('.ce-block__content')[ind].children[0].innerHTML = replacedString;
                }

                // Removing cards with same suggestions
                for (let i = 0; i < mainData[ind].alerts.length; i++) {
                    if (startIndS === mainData[ind].alerts[i].begin && endIndS === mainData[ind].alerts[i].end) {
                        toBeRemovedArr.push(i);
                    }
                }

                // Shifting further card's start & end index.
                for (let i = ind1 + 1; i < mainData[ind].alerts.length; i++) {
                    mainData[ind].alerts[i].begin += (shift);
                    mainData[ind].alerts[i].end += (shift);
                    mainData[ind].alerts[i].highlightBegin += (shift);
                    mainData[ind].alerts[i].highlightEnd += (shift);
                }
            }
        }
    }

    var tempType = {};
    var tcFinal = 0;
    var cardIdArr = [];
    var blockIdArr = [];
    let originalIndex = [];

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
    }, 350);
    setBlockIds(blockIds);

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
    const { mainData, setMainData, setFlag2, setFlag3, alertUndoMsg, blockIds, setBlockIds, sideUtils, setSideUtils, dictWords, setDictWords, blockDetails, setBlockDetails } = editorContext;
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

        if (alertUndoMsg.occurranceFlag) {
            localStorage.setItem("stnTagData", JSON.stringify(alertUndoMsg.prevTagData));
        }

        // if(alertUndoMsg.occurranceArr.length>0)
        // {
        //     // console.log("if");
        //     let tagArr=JSON.parse(localStorage.getItem("stnTagData"));
        //     for(let i of alertUndoMsg.occurranceArr)
        //     {
        //         console.log(i);
        //         tagArr[i].occurrance+=1;
        //     }
        //     console.log(tagArr);

        //     localStorage.setItem("stnTagData", JSON.stringify(tagArr));
        // }
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
};
