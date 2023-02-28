var start = document.getElementById('start');
var q1 = document.getElementById('1');
var q2 = document.getElementById('2');
var q3 = document.getElementById('3');
var q4 = document.getElementById('4');
var q5 = document.getElementById('5');
var startBtn = document.getElementById('start-btn');
var answers = document.getElementsByClassName("answer");
var answerFeedback = document.getElementById('feedback');

startBtn.addEventListener("click", function() {
    start.setAttribute('class', 'hide');
    q1.setAttribute('class', 'show');
});

for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function (event) {
        
        var element = event.target.getAttribute('class');
        var parent = parseInt(event.target.parentNode.parentNode.getAttribute('id'), 10);
        
        if (element === 'btn answer correct' && parent < 6) {

            document.getElementById(parent).setAttribute('class', 'hide');
            document.getElementById(parent + 1).setAttribute('class', '');
            answerFeedback.textContent = "=== CORRECT ===";

        } if (element === 'btn answer incorrect' && parent < 6) {

            document.getElementById(parent).setAttribute('class', 'hide');
            document.getElementById(parent + 1).setAttribute('class', '');
            answerFeedback.textContent = "=== INCORRECT ===";

        } else {
            console.log('Quiz End');
        }
    });
};











