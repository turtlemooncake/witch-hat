function renderState() {
    var choicesContainer = document.getElementById('game-choices');
    var mainImg = document.getElementById('game-img');
    mainImg.src = "assets/test-game.png";
    var button = document.createElement('button');
    button.textContent = "test";
    button.className = "game-choice-button";
    var button2 = document.createElement('button');
    button2.textContent = "tblalblblblblbllblbl";
    button2.className = "game-choice-button";
    var button3 = document.createElement('button');
    button3.textContent = "tblalblb222";
    button3.className = "game-choice-button";
    choicesContainer.appendChild(button);
    choicesContainer.appendChild(button2);
    choicesContainer.appendChild(button3);
}
function startGame() {
    //document.getElementById('start-container')!.style.display = 'none';
    //document.getElementById('game-container')!.style.display = 'flex';
    document.getElementById('start-button').style.display = 'none';
    renderState();
}
