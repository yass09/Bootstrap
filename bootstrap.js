$map_canvas = document.getElementById("map_canvas");

styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    }
]
 var map = new google.maps.Map($map_canvas, {
 center: {lat: 48.861938, lng:  2.441411},
 zoom: 8,
scrollwheel: false,

});