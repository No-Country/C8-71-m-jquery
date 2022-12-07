function iniciarMap(){
  var coord = {lat:-32.2546458 ,lng: -58.1850361};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}