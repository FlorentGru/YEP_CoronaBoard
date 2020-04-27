<template>
    <div id="dashboard">
        <section>
            <div class="col1">
                <div class="profile">
                    <h5>Global</h5>
                    <p>Total confirmed cases: {{ this.summary.Global.TotalConfirmed }} </p>
                    <p>Total death cases: {{ this.summary.Global.TotalDeaths }} </p>
                    <p>Total recovered cases: {{ this.summary.Global.TotalRecovered }} </p>
                </div>
            </div>
            <div class="col2">
                <Maps></Maps>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    import { mapActions } from 'vuex'

    import moment from "moment"

    import Maps from '@/components/Maps'

    export default {
        name: "Main",
        components: {
            Maps
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['summary']),
        },
        mounted() {
            this.fetchSummaryData()
        },
        methods: {
            ...mapActions(['fetchSummaryData'])
        },
        filters: {
            formatDate(val) {
                if (!val) { return '-' }
                let date = val.toDate()
                return moment(date).fromNow()
            }
        }

    }
</script>

<style scoped>

</style>
