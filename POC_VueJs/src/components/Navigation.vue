<template>
    <header>
        <section>
            <div class="col1">
                <router-link to="dashboard"><h3>Covid-19 DataViz</h3></router-link>
                <ul class="inline">
                    <li><router-link to="/">World</router-link></li>
                    <li><router-link to="/france">France</router-link></li>
                    <li><router-link v-if="this.currentUser" to="dashboard">Dashboard</router-link></li>
                    <li><router-link v-if="this.currentUser" to="settings">Settings</router-link></li>
                    <li><a v-if="this.currentUser" @click="logout">logout</a></li>
                </ul>
            </div>
        </section>
    </header>
</template>

<script>
    import {mapGetters} from "vuex"

    const fb = require('../firebaseConfig.js')

    export default {
        methods: {
            logout() {
                fb.auth.signOut().then(() => {
                    this.$store.dispatch('clearData')
                    this.$router.push('/login')
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        computed: {
            ...mapGetters(['currentUser'])
        }
    }
</script>
