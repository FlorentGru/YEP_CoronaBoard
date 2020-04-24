<template>
    <div id="app">
      <Navigation v-if="currentUser"></Navigation>
      <router-view/>
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
