//map
const myMap = {
    coordinates: [],
    places: [],
    map: {},
    markers: {},

    createMap() {
        this.map = L.map('map',{
            center: this.coordinates,
            zoom: 15,
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)

    const marker = L.marker(this.coordinates)
    marker
    .addTo(this.map)
    .bindPopup('<p1>Current Location<br></p1>')
    .openPopup()
    },
}
//place markers

//getting coordinates
async function getCoordinates(){
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coordinates.latitude, pos.coordinates.longitude]
}
//window loading 
window.onload = async () => {
    const coordinates = await getCoordinates()
    console.log(coordinates)
    myMap.coordinates = coordinates
    myMap.buildMap()
}
//place submission
document.getElementById('submit').addEventListener('click', async (event) =>{
    event.preventDefault()
    let places = document.getElementById('places').value
    console.log(places)
})

