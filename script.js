let currentStep = 0;

const questions = [
    "Каких девушек ты предпочитаешь?",
    "Где ты находишься?",
    "Ты готов начать приватный чат?"
];

function nextQuestion(answer) {
    if (answer === 0) {
        alert("Этот сервис только для взрослых!");
        return;
    }

    currentStep++;
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    if (currentStep < questions.length) {
        questionElement.innerHTML = questions[currentStep];
        answersElement.innerHTML = `
            <button class="btn" onclick="nextQuestion(1)">Брюнетки</button>
            <button class="btn" onclick="nextQuestion(1)">Блондинки</button>
        `;
    } else {
        showLoading();
    }
}

function showLoading() {
    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("loading").style.display = "block";

    setTimeout(() => {
        window.location.href = "https://www1.affione.fyi/oBkFg5"; // Замени на свою ссылку
    }, 3000);
}