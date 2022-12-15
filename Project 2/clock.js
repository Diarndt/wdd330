setInterval(setClock, 1000);


const secondHand = document.querySelector('[data-second-hand');
const minHand = document.querySelector('[data-min-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setclock() {
    const now = new Date();
    const secondsRatio = now.getSeconds() / 60;
    
    const minRatio = (secondsRatio + now.getMinutes()) / 60;

    const hourRatio = (minRation + now.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minHnad, minRatio)
    setRotation(hourHand, hourRatio)
}
 
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

