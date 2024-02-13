function rectangle(){
    const rectangleInputButtonWidth = document.getElementById('rectangle-base');
    const rectangleInput = rectangleInputButtonWidth.value;
    const rectangleWidth = parseFloat(rectangleInput)

    const rectangleInputButtonLength = document.getElementById('rectangle-length');
    const rectangleInputLength = rectangleInputButtonLength.value;
    const rectangleLength  = parseFloat(rectangleInputLength);

    const widthLength = rectangleWidth * rectangleLength;
console.log(widthLength)

const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = widthLength;


}