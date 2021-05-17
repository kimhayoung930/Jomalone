var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.497130151138215, 127.02871797016867), 
        level: 3 
    };
var map = new kakao.maps.Map(mapContainer, mapOption); 

var marker = new kakao.maps.Marker();

kakao.maps.event.addListener(map, 'tilesloaded', displayMarker);

function displayMarker() {
    marker.setPosition(map.getCenter()); 
    marker.setMap(map);    
}