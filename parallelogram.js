function parallelogram(){
    const based = getInputValueById('Parallelogram-base')
    const heights = getInputValueById('parallelogram-height')
    const area = based * heights;
    console.log(area)
    setInnerTextById('parallelogram-span', area)
}

function getInputValueById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputValueText = inputField.value;
const inputValue = parseFloat(inputValueText);
return inputValue;
}

function setInnerTextById (elementsId,area){
const element = document.getElementById(elementsId);
element.innerText = area;
}