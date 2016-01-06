class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class Game {
    name: string;
    sport: string;
    year: number;
    fun: boolean;
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.name = "Statis Pro Baseball";
        this.sport = "Baseball";
        this.year = 2015;
        this.fun = true;
        
    }

    display() {
        this.element.innerHTML = "Game: " + this.name + " Year:" + this.year; 
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    var gameContainer = document.getElementById('game');
    var game = new Game(gameContainer);
    game.display();
};