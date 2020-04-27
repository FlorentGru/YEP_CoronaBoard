<template>
    <center><div id="map" class="map"></div></center>
</template>

<script>
    import {mapGetters, mapActions} from "vuex"

    import json from '../data/country-latlong-array.json'
    export default {
        name: "Maps",
        data () {
            return {
            map: null,
            tileLayer: null,
            layers: [],
            circle: null,
            coords: json
            }
        },
        mounted() {
            this.initMap();
            this.initLayers();
        },
        computed: {
            ...mapGetters(['summary']),
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

                this.summary.Countries.forEach(element => {
                    if (this.coords[element.CountryCode.toLowerCase()] && element.TotalConfirmed > 0) {
                    
                        var dataCountry = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [this.coords[element.CountryCode.toLowerCase()][1], this.coords[element.CountryCode.toLowerCase()][0]]
                            }
                        };
                        L.geoJSON(dataCountry, {
                            pointToLayer: function (feature, latlng) {
                                return L.circleMarker(latlng, {
                                    stroke: false,
                                    radius: Math.log(element.TotalConfirmed),
                                    fillColor: "red",
                                    fillOpacity: 0.8
                                }).bindPopup("<center>" + element.Country + "<br/>Confirmed Cases: " + element.TotalConfirmed + "<\center>");
                            }
                        }).addTo(this.map);
                    }
                });

            },
        }
    }
</script>

<style scoped>
.map { height: 600px; width: 1024px}
</style>
