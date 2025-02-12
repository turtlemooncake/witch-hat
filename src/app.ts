
const story : any = {
    1: {
        title: "You are on a journey to save the princess. Which path do you choose?",
        choices: {
            0: ["Forest road", 2],
            1: ["Mountain road", 3]
        }
    }
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

let state : number = 0;

function renderState(state: number): void {
    if (state == 0) {
        return;
    }
    // Select Relevant HTML Elements
    const gameChoicesContainer = document.getElementById('game-choices');
    const gameImageElement = document.getElementById('game-img') as HTMLImageElement; 
    
    // Page Title
    const pageTitle = document.getElementById('page-title'); 
    pageTitle!.innerHTML = story[state].title;

    // Choices 
    const pageChoices: [string, number][] = (<any>Object).values(story[state].choices);
    pageChoices.forEach((choicePair) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choicePair[0];
        choiceButton.className = 'game-choice-button';
        gameChoicesContainer!.appendChild(choiceButton);
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

function startGame(): void {
    //document.getElementById('start-container')!.style.display = 'none';
    //document.getElementById('game-container')!.style.display = 'flex';
    document.getElementById('start-button')!.style.display = 'none'; 
    renderState(++state); 
}

window.onload = () => {
    renderState(state);
}