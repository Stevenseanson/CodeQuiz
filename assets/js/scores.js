
// Right here we save the score, store it and get sent to highscores.html on clicking submit
function saveScore() {
    let initials = document.getElementById("initials").value;
    let score = document.getElementById("final-score").innerHTML;
    let scoreObject = { name: initials, score: score };
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(scoreObject);
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "highscores.html";
}

// This displays the previously saved score in order from highest
window.addEventListener("load", function () {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.sort(function (a, b) {
        return b.score - a.score;
    });
    let scoreList = document.getElementById("score-list");
    scores.forEach(function (score) {
        let li = document.createElement("li");
        li.innerHTML = score.name + " - " + score.score;
        scoreList.appendChild(li);
    });
});

// This is for the clear highscores button
document.getElementById("clear").addEventListener("click", function () {
    localStorage.removeItem("scores");
    location.reload();
});
