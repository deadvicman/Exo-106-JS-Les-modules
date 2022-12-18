export function createDiv(color, text, background) {
    this.color = color
    this.text = text
    this.background = background

    let myDiv = document.createElement("div")
    document.body.appendChild(myDiv);

    myDiv.innerHTML = this.text
    myDiv.style.color = this.color
    myDiv.style.backgroundColor = this.background
}

export function createInput(type, value, placeholder) {
    let myInput = document.createElement("input")
    document.body.appendChild(myInput);

    this.type = type
    this.value = value
    this.placeholder = placeholder

    myInput.value = this.value
    myInput.placeholder = this.placeholder
    myInput.type = this.type
}

export function createLabel(name, id) {

}