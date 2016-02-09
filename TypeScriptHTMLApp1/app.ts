enum DiscFlags {
    None = 0,
    Drive = 1,
    Influence = 2,
    Steadiness = 4,
    Conscientiousness = 8
};

class ClickCounter {
    private count = 0;
    //registerClick() {
    registerClick = () => {
        this.count++;
        alert(this.count);
    }
}

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

window.onload = () => {
    var el = document.getElementById('content');

    //var greeter = new Greeter(el);
    //greeter.start();

    var clickCounter = new ClickCounter();
    //document.getElementById('target').onclick = clickCounter.registerClick;
    //clickCounter.registerClick();
    //clickCounter.registerClick();

    document.getElementById('target').onclick = clickCounter.registerClick;

     
};