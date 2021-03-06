const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);

        const {latitude} = position.coords;
        const {longitude} = position.coords;

        console.log(latitude, longitude);

        console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        

        map.on('click', function (mapEvent){
            console.log(mapEvent);

            const { lat, lng } = mapEvent.latlng;
            console.log(lat,lng);


            L.marker([lat, lng]).addTo(map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup'
                
            }))
            .setPopupContent('Atividade Física')
            .openPopup();
            
        })

        

    }, function () {
        alert('Não foi possível obter a sua localização');
    })
    
}

