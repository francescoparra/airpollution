let btn = document.querySelector("#search");
let geo = document.querySelector("#geo");
let city = document.querySelector("#city");
let no = document.querySelector("#no");
let air = document.querySelector("#air");
let ht = document.querySelector("#ht");


require("dotenv").config();
let apiKey = process.env.API_KEY;

//Map
const map = L.map("map", 14);

const showMap = (lati, long) => {

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.setView([lati, long], 14);
    L.marker([lati, long]).addTo(map);
};


//Input
btn.onclick = function () {
    let location = document.querySelector("#searchbar").value;
    let url = "https://api.waqi.info/feed/" + location + "/?token=" + apiKey;
    axios.get(url).then(response => {
        if (response.data.status === "ok") {

            let aqi = response.data.data.aqi;
            air.innerHTML = aqi;

            let good = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
            let moderate = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
            let unhealthy1 = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
            let unhealthy2 = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
            let unhealthy3 = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
            let hazardous = "Health alert: everyone may experience more serious health effects";

            if (aqi <= 50) {
                ht.innerHTML = good;
                air.style.backgroundColor = "rgb(37, 182, 37)";
            } else if (aqi >= 51 && aqi <= 100) {
                ht.innerHTML = moderate;
                air.style.backgroundColor = "rgb(214, 214, 41)";
            } else if (aqi >= 100 && aqi <= 150) {
                ht.innerHTML = unhealthy1;
                air.style.backgroundColor = "rgb(211, 137, 0)";
            } else if (aqi >= 151 && aqi <= 200) {
                ht.innerHTML = unhealthy2;
                air.style.backgroundColor = "rgb(197, 30, 30)";
            } else if (aqi >= 201 && aqi <= 300) {
                ht.innerHTML = unhealthy3;
                air.style.backgroundColor = "rgb(109, 46, 109)";
            } else if (aqi >= 301) {
                ht.innerHTML = hazardous;
                air.style.backgroundColor = "black";
                air.style.color = "white";
            }
        } else {
            city.innerHTML = "Sorry, city not found :(";
            no.innerHTML = "n.d";
            air.innerHTML = "n.d";
            ht.innerHTML = "n.d";
            air.style.backgroundColor = "white";
        }

        let cityName = response.data.data.city.name;
        city.innerHTML = cityName;

        let no2 = response.data.data.iaqi.no2.v;
        no.innerHTML = no2;

        let lati = response.data.data.city.geo[0];
        let long = response.data.data.city.geo[1];

        showMap(lati, long);

    })
}
let inputkey = document.querySelector("#searchbar");
inputkey.addEventListener("keyup", function (e) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.onclick();
    }
});

//Geo
geo.onclick = function () {

    let uri = "https://api.waqi.info/feed/here/?token=" + apiKey;
    axios.get(uri).then((response) => {
        let aqi = response.data.data.aqi;
        air.innerHTML = aqi;

        let good = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
        let moderate = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
        let unhealthy1 = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
        let unhealthy2 = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
        let unhealthy3 = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
        let hazardous = "Health alert: everyone may experience more serious health effects";

        if (aqi <= 50) {
            ht.innerHTML = good;
            air.style.backgroundColor = "rgb(37, 182, 37)";
        } else if (aqi >= 51 && aqi <= 100) {
            ht.innerHTML = moderate;
            air.style.backgroundColor = "rgb(214, 214, 41)";
        } else if (aqi >= 100 && aqi <= 150) {
            ht.innerHTML = unhealthy1;
            air.style.backgroundColor = "rgb(211, 137, 0)";
        } else if (aqi >= 151 && aqi <= 200) {
            ht.innerHTML = unhealthy2;
            air.style.backgroundColor = "rgb(197, 30, 30)";
        } else if (aqi >= 201 && aqi <= 300) {
            ht.innerHTML = unhealthy3;
            air.style.backgroundColor = "rgb(109, 46, 109)";
        } else if (aqi >= 301) {
            ht.innerHTML = hazardous;
            air.style.backgroundColor = "black";
            air.style.color = "white";
        }
        let cityName = response.data.data.city.name;
        city.innerHTML = cityName;

        let no2 = response.data.data.iaqi.no2.v;
        no.innerHTML = no2;

        let lati = response.data.data.city.geo[0];
        let long = response.data.data.city.geo[1];

        showMap(lati, long);
    })
}

showMap(45.4773, 9.1815);