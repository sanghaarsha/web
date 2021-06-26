let map;

function initMap() {
    map = new google.maps.Map(document.querySelector(".map"), {
        center: { lat: 27.7172, lng: 85.324 },
        zoom: 8,
    });
}
