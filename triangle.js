function traiangle(){
    const traiangleInputButton = document.getElementById('traiangle-base');
    const traiangleInput = traiangleInputButton.value;
    const base = parseFloat(traiangleInput);
    // console.log(base);
  
    const traiangleHeightInput = document.getElementById('traiangle-height');
    const traiangleHeight = traiangleHeightInput.value;
    const height = parseFloat(traiangleHeight)
// console.log(height)
    const area = 0.5 * base * traiangleHeight;
    console.log(area)

    const traiangleAreaSpan = document.getElementById('traiangle-area');
    traiangleAreaSpan.innerText = area;
}