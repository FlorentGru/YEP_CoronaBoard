<template>
    <div>
        <center>
            <div id="map" class="map"></div>
        </center>
        <button v-on:click="clearing(0)">Confirmed Cases</button>
        <button v-on:click="clearing(1)">Total Deaths</button>
        <button v-on:click="clearing(2)">Total Recovered</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex"

    import json from '../data/country-latlong-array.json'
    export default {
        name: "Maps",
        data () {
            return {
            map: null,
            circle: null,
            coords: json,
            markersLayer: new L.LayerGroup(),
            counter: 0
            }
        },
        mounted() {
            this.initMap();
            this.initConfirmedCases();
        },
        computed: {
            ...mapGetters(['summary']),
        },
        methods: {
            clearing: function (index) {
                this.markersLayer.clearLayers();
                if (index == 0)
                    this.initConfirmedCases();
                else if (index == 1)
                    this.initTotalDeaths();
                else
                    this.initTotalRecovered();
            },

            initMap() {

                this.map = L.map('map', {renderer: L.svg()}).setView([0, 0], 2);

                L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 10,
                    minZoom: 2,
                    zoomDelta: 0.25,
                    zoomSnap: 0.25,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
                ).addTo(this.map);

            },

            initConfirmedCases() {
                var marker;
                this.markersLayer.clearLayers();

                this.summary.Countries.forEach(element => {
                    if (this.coords[element.CountryCode.toLowerCase()] && element.TotalConfirmed > 0) {
                    
                        var dataCountry = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [this.coords[element.CountryCode.toLowerCase()][1], this.coords[element.CountryCode.toLowerCase()][0]]
                            }
                        };
                        marker = L.geoJSON(dataCountry, {
                            pointToLayer: function (feature, latlng) {
                                return L.circleMarker(latlng, {
                                    stroke: false,
                                    radius: Math.log(element.TotalConfirmed),
                                    fillColor: "red",
                                    fillOpacity: 0.8
                                }).bindPopup("<center>" + element.Country + "<br/>Confirmed Cases : " + element.TotalConfirmed + "<\center>");
                            }
                        });
                        this.markersLayer.addLayer(marker);
                    }
                });
                this.markersLayer.addTo(this.map);
            },

            initTotalDeaths() {
                var marker;
                this.markersLayer.clearLayers();

                this.summary.Countries.forEach(element => {
                    if (this.coords[element.CountryCode.toLowerCase()] && element.TotalDeaths > 0) {
                    
                        var dataCountry = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [this.coords[element.CountryCode.toLowerCase()][1], this.coords[element.CountryCode.toLowerCase()][0]]
                            }
                        };
                        marker = L.geoJSON(dataCountry, {
                            pointToLayer: function (feature, latlng) {
                                return L.circleMarker(latlng, {
                                    stroke: false,
                                    radius: Math.log(element.TotalDeaths),
                                    fillColor: "blue",
                                    fillOpacity: 0.8
                                }).bindPopup("<center>" + element.Country + "<br/>Total Deaths : " + element.TotalDeaths + 
                                    "<br/>Fatality Ratio : " + ((element.TotalDeaths / element.TotalConfirmed) * 100).toFixed(2) + "% <\center>");
                            }
                        });
                        this.markersLayer.addLayer(marker);
                    }
                });
                this.markersLayer.addTo(this.map);
            },

            initTotalRecovered() {
                var marker;
                this.markersLayer.clearLayers();

                this.summary.Countries.forEach(element => {
                    if (this.coords[element.CountryCode.toLowerCase()] && element.TotalRecovered > 0) {
                    
                        var dataCountry = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [this.coords[element.CountryCode.toLowerCase()][1], this.coords[element.CountryCode.toLowerCase()][0]]
                            }
                        };
                        marker = L.geoJSON(dataCountry, {
                            pointToLayer: function (feature, latlng) {
                                return L.circleMarker(latlng, {
                                    stroke: false,
                                    radius: Math.log(element.TotalRecovered),
                                    fillColor: "green",
                                    fillOpacity: 0.8
                                }).bindPopup("<center>" + element.Country + "<br/>Total Recovered : " + element.TotalRecovered + "<\center>");
                            }
                        });
                        this.markersLayer.addLayer(marker);
                    }
                });
                this.markersLayer.addTo(this.map);
            }
        }
    }
</script>

<style scoped>
.map { height: 600px; width: 1024px}
</style>
