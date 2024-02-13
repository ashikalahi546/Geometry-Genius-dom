function ellipse(){
    const ellipseInput = getInputValueById('ellipse-base');
    const ellipseSecondInput = getInputValueById('ellipse-second-base');
    const All = 3.14 * ellipseInput * ellipseSecondInput;
    setInnerTextById('ellipse-area', All)
}