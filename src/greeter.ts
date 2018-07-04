class Greeter {

    greetElem:HTMLElement;
    greetBtn:HTMLElement;

    constructor() {
        this.greetElem = document.getElementById("greetElem");
        this.greetBtn = document.getElementById("greetBtn");

        this.greetBtn.onclick = () => {
            this.greet();
        }

    }

    greet() {
        this.greetElem.innerText = "Hello World :)";
    }

}

new Greeter();