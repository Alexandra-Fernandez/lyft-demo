$(document).ready(function(){
   if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(posicion){
         lat = posicion.coords.latitude;
         lon = posicion.coords.longitude;
         map = new GMaps({
            div: "#map",
            lat: lat,
            lng: lon,
            zoom:15,
            mapTypeControl:true,
            zoomControl: true,
            streetViewControl:true,
         });
         var geocoder = new google.maps.Geocoder;
         map.addMarker({
            lat: lat,
            lng: lon,
         });
      });
   };
});


$(".button-collapse").sideNav();