function getNewAdvice() {
    fetch (
    "https://api.adviceslip.com/advice"
)
    .then((response) => {
    return response.json();
})
    .then(data => {
    const advice = data.slip.advice;
    const adviceId = data.slip.id;
    document.getElementById("advice-number").innerHTML = `ADVICE #${adviceId}`;
    document.getElementById("quote-display").textContent = `"${advice}"`;
})
    .catch((error) => {
    console.log(error);
})
}

document.addEventListener("DOMContentLoaded", () => {
    getNewAdvice();
    document.getElementById("generate-btn").addEventListener("click", getNewAdvice);
})