<template>
    <div id="dashboard">
        <section>
            <div class="col1">
                <div class="profile">
                    <h5>World</h5>
                    <p>Total confirmed cases: {{ this.summary.Global.TotalConfirmed }} </p>
                    <p>Total death cases: {{ this.summary.Global.TotalDeaths }} </p>
                    <p>Total recovered cases: {{ this.summary.Global.TotalRecovered }} </p>
                </div>
                <a class="twitter-timeline" data-width="400" data-height="400" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a>
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

            let twitterScript = document.createElement('script')
            twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
            document.head.appendChild(twitterScript)
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
