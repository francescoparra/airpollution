let apiKey = "57d48d588964c46fc64bf0b7f97045065e138a5f";
let btn = document.querySelector("#search");
let geo = document.querySelector("#geo");
let city = document.querySelector("#city");
let no = document.querySelector("#no");
let air = document.querySelector("#air");
let ht = document.querySelector("#ht");

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
        console.log(response);
        city.innerHTML = response.data.data.city.name;
        air.innerHTML = response.data.data.aqi; 
        no.innerHTML = response.data.data.iaqi.no2.v;

        let lati = response.data.data.city.geo[0];
        let long = response.data.data.city.geo[1];

        showMap(lati, long);
    })
}


showMap(45.4773, 9.1815);






let inputkey = document.querySelector("#searchbar");
inputkey.addEventListener("keyup", function(e){
    if(event.keyCode === 13){
        event.preventDefault();
        document.querySelector("#search").click();
    }
});