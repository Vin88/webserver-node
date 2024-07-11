console.log('Client side javascript file is loaded!');

const API_KEY = "04fdc9f84f0b4c0e9c6121345242305";

const getLocationDetails = (address) => {
    console.log("*** Get Localtion ***");
    const url = `http://api.weatherapi.com/v1/current.json?q=${address}&key=${API_KEY}`
    fetch(url).then((response)=> {
        
        response.json().then(data => {
            debugger;
            console.log(data);
            if(data.error) {
                this.appendLocationDetails("Invalid location!!!")
            } else {
                this.appendLocationDetails(`City: ${data.location.name} Latitude: ${data.location.lat} Longitude: ${data.location.lon}`)
            }
        })
    })
}

const weatherForm = document.querySelector('form');

weatherForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("form submitted!!!");
    getLocationDetails(document.getElementById('location').value);
})

function appendLocationDetails(locationData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerText = locationData;
}