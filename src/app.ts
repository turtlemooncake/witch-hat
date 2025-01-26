
function renderState(): void {
    const choicesContainer = document.getElementById('game-choices');

    const mainImg = document.getElementById('game-img') as HTMLImageElement;
    mainImg.src = "assets/test-game.png"

    const button = document.createElement('button');
    button.textContent = "test"; 
    button.className = "game-choice-button";

    const button2 = document.createElement('button');
    button2.textContent = "tblalblblblblbllblbl"; 
    button2.className = "game-choice-button";

    const button3 = document.createElement('button');
    button3.textContent = "tblalblb222"; 
    button3.className = "game-choice-button";

    choicesContainer!.appendChild(button);
    choicesContainer!.appendChild(button2);
    choicesContainer!.appendChild(button3);
}

function startGame(): void {
    //document.getElementById('start-container')!.style.display = 'none';
    //document.getElementById('game-container')!.style.display = 'flex';
    document.getElementById('start-button')!.style.display = 'none'; 
    renderState(); 
}