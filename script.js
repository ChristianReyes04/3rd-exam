document.addEventListener("DOMContentLoaded", function() {
    'use strict';
    
    let exp = '';
    let result;

    const numDis = document.querySelector('.number');
    const numberButtons = document.querySelectorAll('.btn1, .btn2, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8, .btn9, .btn0, .btnPer, .btnPlus, .btnMin, .btnTimes, .btnDiv');
    const equalsButton = document.querySelector('.btnEq');
    const reset = document.querySelector('.btnRes');
    const erase = document.querySelector('.btnEr');

    const click = new Audio('sound/click.m4a');

    numberButtons.forEach(button => {
        button.addEventListener('mouseover', function(){
            button.style.backgroundColor = '#212020';
            button.style.color = '#ece8e5';
        });

        button.addEventListener('mouseout', function(){
            button.style.backgroundColor = '';
            button.style.color = '';
        });

        button.addEventListener('click', function(e){
            click.currentTime = 0; // Rewind to start
            click.play();
            const value = e.target.textContent;
            if (value === '.' && exp.includes('.'))
                return;
            exp += value;
            numDis.textContent = exp;
        });
    });

    equalsButton.addEventListener('mouseover', function(){
        equalsButton.style.backgroundColor = '#212020';
        equalsButton.style.color = '#ece8e5';
    });
    equalsButton.addEventListener('mouseout', function(){
        equalsButton.style.backgroundColor = '';
        equalsButton.style.color = '';
    });

    equalsButton.addEventListener('click', function(){
        click.currentTime = 0;
        click.play();
        calculate();
    });

    function calculate(){
        try {
            result = eval(exp);
            numDis.textContent = result;
        } catch (error) {
            numDis.textContent = "Error";
        }
    }

    reset.addEventListener('mouseover', function(){
        reset.style.backgroundColor = '#ece8e5';
        reset.style.color = '#212020';
    });
    reset.addEventListener('mouseout', function(){
        reset.style.backgroundColor = '';
        reset.style.color = '';
    });

    reset.addEventListener('click', function(){
        click.currentTime = 0;
        click.play();
        exp = '';
        numDis.textContent = '0';
    });

    erase.addEventListener('mouseover', function(){
        erase.style.backgroundColor = '#212020';
        erase.style.color = '#ece8e5';
    });
    erase.addEventListener('mouseout', function(){
        erase.style.backgroundColor = '';
        erase.style.color = '';
    });

    erase.addEventListener('click', function(){
        click.currentTime = 0;
        click.play();
        exp = exp.slice(0, -1);
        numDis.textContent = exp || '0';
    });

});