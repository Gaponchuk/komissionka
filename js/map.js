function initMap() {
    var uluru = { lat: 59.939097, lng: 30.357277 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        mapTypeControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    var contentString = '<h1>Некрасова 26</h1>'+
                        '<p>комиссионный магазин</p>'+
                        '<a href="tel:89119100384">+7(911)910-03-84</a>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}