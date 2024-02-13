function calculatePentagonArea (){
    const majorRadius= getInputValueById('major-radius');
    const MainorRadius = getInputValueById('mainor-radius');
    const pantagonArea = 0.5 * majorRadius * MainorRadius;
    setInnerTextById('pantagon-area',pantagonArea)
}