<template>
    <div id="app">
      <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Navigation from './components/Navigation'

    export default {
        components: { Navigation },
        computed: {
            ...mapGetters(['currentUser'])
        }

    }
</script>
