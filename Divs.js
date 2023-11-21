
var svgScript1 = '<svg class="scalable-svg" viewBox="0 0 100 100"> <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>';
var svgScript2 = '<svg class="scalable-svg" viewBox="0 0 100 100"><rect width="80" height="80" stroke="black" stroke-width="3" fill="blue" /></svg>';
var svgScript3 = '<svg class="scalable-svg" viewBox="0 0 100 100"><line x1="10" y1="10" x2="90" y2="90" stroke="green" stroke-width="3" /></svg>';
var svgScript4 = '<svg class="scalable-svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="40" ry="20" stroke="purple" stroke-width="3" fill="yellow" /></svg>';
var svgScript5 = '<svg class="scalable-svg" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" stroke="orange" stroke-width="3" fill="none" /></svg>';
var svgScript6 = '<svg class="scalable-svg" viewBox="0 0 100 100"><polyline points="10,10 90,10 90,90" stroke="brown" stroke-width="3" fill="none" /></svg>';
var svgScript7 = '<svg class="scalable-svg" viewBox="0 0 100 100"><path d="M50 10 L90 90 L10 90 Z" stroke="navy" stroke-width="3" fill="cyan" /></svg>';
var svgScript8 = '<svg class="scalable-svg" viewBox="0 0 100 100"><path d="M50 90 Q50 10 90 30 Q130 10 130 90 Z" stroke="red" stroke-width="3" fill="pink" /></svg>';

function createPreMadeDivs(){
    createPreMadeDiv("100px","100px","1/1",svgScript1);
    createPreMadeDiv("100px","100px","1/1",svgScript2);
    createPreMadeDiv("100px","100px","1/1",svgScript3);
    createPreMadeDiv("100px","100px","1/1",svgScript4);
    createPreMadeDiv("100px","100px","1/1",svgScript5);
    createPreMadeDiv("100px","100px","1/1",svgScript6);
    createPreMadeDiv("100px","100px","1/1",svgScript7);
    createPreMadeDiv("100px","100px","1/1",svgScript8);
}

window.onload = createPreMadeDivs;