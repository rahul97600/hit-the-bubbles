var timer = 40;
var score = 0;
var rn;
function makebubble() {
    var clutter = '';
    for (let i = 1; i <= 119; i++) {
        var randomnum = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${randomnum}</div>`;
    }
    document.getElementById('pbtm').innerHTML = clutter;
}
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        } else {
            clearInterval(timerint);
            document.getElementById('pbtm').innerHTML = `<h1>Your Score is : ${score}</h1>`;
        }
    }, 1000);
}
function getnewhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector('#hitvalue').textContent = rn;
}
function incscore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}
document.querySelector('#pbtm').addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === rn) {
        incscore();
        getnewhit();
        makebubble();
    }
});
getnewhit();
makebubble();
runTimer();