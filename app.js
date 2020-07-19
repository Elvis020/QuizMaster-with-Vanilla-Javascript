const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
// const finalScore = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];


    //Check Answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });


    // My Solution
    // finalScore.textContent = `${score}%`;
    // result.setAttribute('class','results')
    
    
    //His Solution
    scrollTo(0,0);
    result.classList.remove('d-none');
    
    // Intervals and Animating
    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++
        }
    },10)
    
});


// Window Object(global Object)
let i = 0;
const timer = setInterval( () => {
    console.log('Heloo');
    i++;
    if(i == 5) {
        clearInterval(timer)
    }
}, 1000)