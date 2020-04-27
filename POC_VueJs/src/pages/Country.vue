<template>
    <div id="dashboard">
        <section>
            <div class="col1">
                <p>{{ this.country }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    import Stats from "../data/StatsApi"

    export default {
        name: "Country",
        data() {
            return {
                country: []
            }
        },
        mounted() {
            Stats.getCountryData(this.$route.params.country).then(({ data }) => {
                this.country = data
            })
        },

    }
</script>

<style scoped>

</style>
