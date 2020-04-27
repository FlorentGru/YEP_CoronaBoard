<template>
    <div id="dashboard">
        <section>
            <div class="col1">
                <p>{{ this.summary }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    import { mapActions } from 'vuex'

    import moment from "moment"

    export default {
        name: "Main",
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
