var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), 
    {
    center: {lat:51.4938438, lng: 31.2999212},
    zoom: 15,
    scrollwheel: false, 
    mapTypeControl: false 
  });

    var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
         calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('search').addEventListener('click', onChangeHandler);
        document.getElementById('search').addEventListener('click', onChangeHandler);
      }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
      
        });

}
$(document).ready(function(){
  initMap();
});     



