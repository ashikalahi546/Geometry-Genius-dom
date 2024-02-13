function calculateRhombusButton(){
const rhombusPeri = getInputValueById('rhombus-peri');
const rhombusApo = getInputValueById('rhombus-apo');
const area = 3.14 * rhombusPeri *  rhombusApo;
setInnerTextById('rhombus-area',area)
}