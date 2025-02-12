var story = {
    1: {
        title: "You are on a journey to save the princess. Which path do you choose?",
        choices: {
            0: ["Forest road", 2],
            1: ["Mountain road", 3]
        }
    }
};
var endings = {
    "adventure": 0,
    "romance": 0,
    "betrayal": 0,
    "romance-pt-2": 0,
    "secret ending": 0,
    "villain-wins": 0,
    "100-percent": 0,
};
var state = 0;
function renderState(state) {
    if (state == 0) {
        return;
    }
    // Select Relevant HTML Elements
    var gameChoicesContainer = document.getElementById('game-choices');
    var gameImageElement = document.getElementById('game-img');
    // Page Title
    var pageTitle = document.getElementById('page-title');
    pageTitle.innerHTML = story[state].title;
    // Choices 
    var pageChoices = Object.values(story[state].choices);
    pageChoices.forEach(function (choicePair) {
        var choiceButton = document.createElement('button');
        choiceButton.textContent = choicePair[0];
        choiceButton.className = 'game-choice-button';
        gameChoicesContainer.appendChild(choiceButton);
    });
    // const button = document.createElement('button');
    // button.textContent = "test"; 
    // button.className = "game-choice-button";
    // const button2 = document.createElement('button');
    // button2.textContent = "tblalblblblblbllblbl"; 
    // button2.className = "game-choice-button";
    // const button3 = document.createElement('button');
    // button3.textContent = "tblalblb222"; 
    // button3.className = "game-choice-button";
    // choicesContainer!.appendChild(button);
    // choicesContainer!.appendChild(button2);
    // choicesContainer!.appendChild(button3);
}
function startGame() {
    //document.getElementById('start-container')!.style.display = 'none';
    //document.getElementById('game-container')!.style.display = 'flex';
    document.getElementById('start-button').style.display = 'none';
    renderState(++state);
}
window.onload = function () {
    renderState(state);
};
