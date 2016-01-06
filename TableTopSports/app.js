var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
var Game = (function () {
    function Game(element) {
        this.element = element;
        this.name = "Statis Pro Baseball";
        this.sport = "Baseball";
        this.year = 2015;
        this.fun = true;
    }
    Game.prototype.display = function () {
        this.element.innerHTML = "Game: " + this.name + " Year:" + this.year;
    };
    return Game;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var gameContainer = document.getElementById('game');
    var game = new Game(gameContainer);
    game.display();
};
//# sourceMappingURL=app.js.map