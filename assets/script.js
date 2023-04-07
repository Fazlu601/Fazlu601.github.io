// Fungsi Listener saat Dom di load
document.addEventListener('DOMContentLoaded', () => {
    // Luas Segitiga
    const formSubmitLuas = document.getElementById('form-submit-luas');
    const mathLuas = document.getElementById('math-luas');
    const resultLuas = document.getElementById('result-luas');
    const buttonResetLuas = document.getElementById('b-reset-luas');
    const boxAnswerLuas = document.getElementById('answer-box-luas');

    // Keliling segitiga
    const formSubmitKeliling = document.getElementById('form-submit-keliling');
    const mathKeliling = document.getElementById('math-keliling');
    const resultKeliling = document.getElementById('result-keliling');
    const buttonResetKeliling = document.getElementById('b-reset-keliling');
    const boxAnswerKeliling = document.getElementById('answer-box-keliling');
    
    // Fungsi Listener saat form Luas Segitiga di submit
    formSubmitLuas.addEventListener('submit', (e) => {
        const a = document.getElementById('a').value;
        const t = document.getElementById('t').value;
        e.preventDefault();
        if(boxAnswerLuas.classList.contains('d-none')) {
            boxAnswerLuas.classList.remove('d-none');
        }
        mathLuas.innerText = `1/2 x ${a} x ${t}`;
        resultLuas.innerText = 1/2 * a * t;        
    })
    
    // Fungsi Reset pada form Luas Segitiga
    buttonResetLuas.addEventListener('click', () => {
        formSubmitLuas.reset();
        boxAnswerLuas.classList.add('d-none');
    })

    // Fungsi Listener saat form Keliling Segitiga di submit
    formSubmitKeliling.addEventListener('submit', (e) => {
        e.preventDefault();
        const s1 = document.getElementById('s-a').value;
        const s2 = document.getElementById('s-b').value;
        const s3 = document.getElementById('s-c').value;
        if(boxAnswerKeliling.classList.contains('d-none')) {
            boxAnswerKeliling.classList.remove('d-none');
        }
        mathKeliling.innerText = `${s1} + ${s2} + ${s3}`;
        resultKeliling.innerText = parseInt(s1) + parseInt(s2) + parseInt(s3);
    })

        // Fungsi Reset pada form Keliling Segitiga
    buttonResetKeliling.addEventListener('click', () => {
        formSubmitKeliling.reset();
        boxAnswerKeliling.classList.add('d-none');
    })

})