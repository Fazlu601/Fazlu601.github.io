document.addEventListener('DOMContentLoaded', () => {
    const formSubmit = document.getElementById('form-submit');
    const math = document.getElementById('math');
    const result = document.getElementById('result');
    const buttonReset = document.getElementById('b-reset');
    const boxAnswer = document.getElementById('answer-box');
    
    formSubmit.addEventListener('submit', (e) => {
        const a = document.getElementById('a').value;
        const t = document.getElementById('t').value;
        e.preventDefault();
        if(boxAnswer.classList.contains('d-none')) {
            boxAnswer.classList.remove('d-none');
        }
        math.innerText = `1/2 x ${a} x ${t}`;
        result.innerText = 1/2 * a * t;        
    })

    buttonReset.addEventListener('click', () => {
        formSubmit.reset();
        boxAnswer.classList.add('d-none');
    })

})