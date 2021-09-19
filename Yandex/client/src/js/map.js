
function initMap() {
   let map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(46.763191, 36.800061),
      zoom: 14,
   });
   const icons = {
      sleep: {
      icon: '../static/img/pin.svg',
      },
    };

    const features = [
      {
        position: new google.maps.LatLng(46.763191, 36.800061),
        type: "sleep",
      },
      {
         position: new google.maps.LatLng(46.763778, 36.802853),
         type: "sleep",
       },
       {
         position: new google.maps.LatLng(46.765046, 36.801217),
         type: "sleep",
       },
       {
         position: new google.maps.LatLng(46.755674, 36.801217),
         type: "sleep",
       },
       {
         position: new google.maps.LatLng(46.758527, 36.791323),
         type: "sleep",
       },
       {
         position: new google.maps.LatLng(46.752192, 36.797162),
         type: "sleep",
       },
       {
         position: new google.maps.LatLng(46.750524, 36.806569),
         type: "sleep",
       },
       {
         position: new google.maps.LatLng(46.760416, 36.792675),
         type: "sleep",
       },
      ];
      
   const inf = '<p class="title">Спят тут</p>';
   const infowindow = new google.maps.InfoWindow({
      content: inf,
   });

   features.forEach(el => {
      const marker = new google.maps.Marker({
          position: el.position,
          icon: icons[el.type].icon,
          map: map,
      });
   });
    

      marker.addListener("click", () => {
         infowindow.open({
           anchor: marker,
           map,
           shouldFocus: false,
         });
       });
      }
   

 window.initMap = initMap;