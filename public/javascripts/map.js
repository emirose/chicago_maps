 function initializeMap() {
        var myOptions = {
          zoom: 15,
          center: new google.maps.LatLng(41.8852778, -87.6213889),
          mapTypeId: google.maps.MapTypeId.TERRAIN
          };
          var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.8852778, -87.6213889),
            map: map
          });

       }


window.onload = function() {
    initializeMap()


}
