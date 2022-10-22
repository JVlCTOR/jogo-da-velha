let gamer = "X"

function winner(){
    let elements = document.getElementBytd("tabuleiro").children;
    if(
        elements[0].innerText === elements[1].innerText &&
        elements[1].innerText === elements[2].innerText &&
        elements[0].innerText.length !== 0
    ) {
        elements[0].style="background-color: red;";
    }

}

function mark(element) {
    if (element.innerText.length === 0) {
        element.innerText = gamer;
        winner
        if (gamer === "X") {
            gamer = "O"
        } else {
            gamer = "X"
        }
    }
}