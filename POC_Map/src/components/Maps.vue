<template>
    <div>
        <center><div id="map" class="map"></div></center>
    </div>
</template>

<script>
    export default {
        name: "Maps",
        data: {
            map: null,
            tileLayer: null,
            layers: [],
            circle: null
        },
        mounted() {
            this.initMap();
            this.initLayers();
        },
        methods: {
            initMap() {
                this.map = L.map('map', {renderer: L.svg()}).setView([0, 0], 2);

                this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 10,
                    minZoom: 2,
                    zoomDelta: 0.25,
                    zoomSnap: 0.25,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
                );
                this.tileLayer.addTo(this.map);
            },
            initLayers() {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////"Province_State	Country_Region	Last_Update	            Lat	      Long_	               Confirmed	Deaths	Recovered	Active	  Combined_Key"////
//////"                Poland	        2020-04-20 23:36:27	    51.9194	  19.1451	           9593	        380	    1133	    8080	  Poland"//////////
//////"Quebec	        Canada	        2020-04-20 23:44:34	    52.9399	  -73.5491             19319	    939	    0	        18380	  Quebec, Canada"//
//////"                Spain	        2020-04-20 23:36:27	    40.463667 -3.74922	           200210	    20852	80587	    98771	  Spain"///////////
//////"                Portugal	        2020-04-20 23:36:27	    39.3999	  -8.2245	           20863	    735	    610	        19518	  Portugal"////////
//////"                Namibia	        2020-04-20 23:36:27	    -22.9576  18.4904	           16	        0	    6	        10	      Namibia"/////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                var Spain = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-3.74922, 40.463667]
                    }
                };
                L.geoJSON(Spain, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            stroke: false,
                            radius: Math.log(200210),
                            fillColor: "red",
                            fillOpacity: 0.8
                        });
                    }
                }).addTo(this.map);



                var Quebec = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-73.5491, 52.9399]
                    }
                };
                L.geoJSON(Quebec, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            stroke: false,
                            radius: Math.log(19319),
                            fillColor: "red",
                            fillOpacity: 0.8
                        });
                    }
                }).addTo(this.map);



                var Portugal = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-8.2245, 39.3999]
                    }
                };
                L.geoJSON(Portugal, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            stroke: false,
                            radius: Math.log(20863),
                            fillColor: "red",
                            fillOpacity: 0.8
                        });
                    }
                }).addTo(this.map);



                var Poland = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [19.1451, 51.9194]
                    }
                };
                L.geoJSON(Poland, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            stroke: false,
                            radius: Math.log(9593),
                            fillColor: "red",
                            fillOpacity: 0.8
                        });
                    }
                }).addTo(this.map);



                var Namibie = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [18.4904, -22.9576]
                    }
                };
                L.geoJSON(Namibie, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            stroke: false,
                            radius: Math.log(16),
                            fillColor: "red",
                            fillOpacity: 0.8
                        });
                    }
                }).addTo(this.map);
            },
        }
    }
</script>

<style scoped>
.map { height: 600px; width: 1024px}
</style>
