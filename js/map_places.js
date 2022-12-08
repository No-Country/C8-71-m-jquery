
const coord = { lat: -32.2546458, lng: -58.1850361 };
const inputDir = document.querySelector('#inputDir');
let map;
let marker;
let autocomplete;

function iniciarMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });

    marker = new google.maps.Marker({
        position: coord,
        map: map
    });
    initAutocomplete();
}

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(inputDir); 
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location)
    })
}