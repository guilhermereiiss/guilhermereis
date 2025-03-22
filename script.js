function checkAnswers() {
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');

    var score = 0;

    if (q1 && q1.value === 'b') score++; // Noé
    if (q2 && q2.value === 'a') score++; // 66

    alert('Sua pontuação: ' + score);
}