
const container = document.querySelector('div.data');
const locations = document.querySelector('#location');



//const apiKey = '36429313764248b2aa235d9d083fcbee';
const api = 'http://api.timezonedb.com/v2.1/get-time-zone?key=2PE7JQN60YKP&format=json&by=zone&zone=';
//let city = 'America/Chicago';
let input = 'cityName';


const getTime = () => {
    const url = api + input;
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
       
        console.log(data);
    })
    .catch((error) => {
        throw error;
    });
    
}; 

function displayTime(data) {
   // const outputTime = data.formatted
    const outputDiv = document.getElementById('outputTime');
    const newTime = outputTime.timestamp;
    const heading = document.createElement('h2');
    heading.innerHTML = newTime;
    outputDiv.appendChild(heading);
    
}

    const secondHand = document.querySelector('[data-second-hand');
    const minHand = document.querySelector('[data-min-hand]');
    const hourHand = document.querySelector('[data-hour-hand]');
    
    const setClock = () => {
        const now = new Date();
        const secondsRatio = now.getSeconds() / 60;
        
        const minRatio = (secondsRatio + now.getMinutes()) / 60;
    
        const hourRatio = (minRatio + now.getHours()) / 12;
        setRotation(secondHand, secondsRatio)
        setRotation(minHand, minRatio)
        setRotation(hourHand, hourRatio)
    }
     
    function setRotation(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360)
    }

    setInterval(setClock, 1000);
   

 const btn = document.querySelector('.btn');
     btn.addEventListener('click', getTime());

getTime();
setClock();
displayTime();
