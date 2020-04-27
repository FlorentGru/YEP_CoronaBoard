import Vue from 'vue'
import Vuex from 'vuex'

import auth from "./auth.module"
import stat from "./stat.module"
import post from "./post.module"

const fb = require('../firebaseConfig.js')

Vue.use(Vuex);

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        fb.usersCollection.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })

        // realtime updates from our posts collection
        fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
            let postsArray = []

            let createdByCurrentUser
            if (querySnapshot.docs.length) {
                createdByCurrentUser = store.getters.currentUser.uid === querySnapshot.docChanges()[0].doc.data().userId
            }

            if (querySnapshot.docChanges().length !== querySnapshot.docs.length
                && querySnapshot.docChanges()[0].type === 'added' && !createdByCurrentUser) {

                let post = querySnapshot.docChanges()[0].doc.data()
                post.id = querySnapshot.docChanges()[0].doc.id

                store.commit('setHiddenPosts', post)
            } else {
                let postsArray = []
                querySnapshot.forEach(doc => {
                    let post = doc.data()
                    post.id = doc.id
                    postsArray.push(post)
                })

                store.commit('setPosts', postsArray)
            }
        })
    }
})

export const store =  new Vuex.Store({
    modules: {
        auth,
        post,
        stat
    }
});
