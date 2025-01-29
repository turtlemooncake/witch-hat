const story = {

}

const endings = {
    "adventure" : 0,
    "romance" : 0,
    "betrayal" : 0,
    "romance-pt-2" : 0,
    "secret ending" : 0,
    "villain-wins" : 0, 
    "100-percent" : 0,
}

let state = 0;

function renderState(state: number): void {
    // Select Relevant HTML Elements
    const gameContainer = document.getElementById('game-choices');
    const gameImage = document.getElementById('game-img') as HTMLImageElement; 

    // const mainImg = document.getElementById('game-img') as HTMLImageElement;
    // mainImg.src = "assets/test-game.png"

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

function startGame(): void {
    //document.getElementById('start-container')!.style.display = 'none';
    //document.getElementById('game-container')!.style.display = 'flex';
    document.getElementById('start-button')!.style.display = 'none'; 
    renderState(state); 
}

window.onload = () => {
    renderState(state);
}