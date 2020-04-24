const fb = require('../firebaseConfig.js')

const state = {
    currentUser: null,
    userProfile: {}
};

const getters = {
    currentUser(state) {
        return state.currentUser
    },
    userProfile(state) {
        return state.userProfile
    }
};

const actions = {
    clearData({ commit }) {
        commit('setCurrentUser', null)
        commit('setUserProfile', {})
    },
    fetchUserProfile({ commit, state }) {
        fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
            commit('setUserProfile', res.data())
        }).catch(err => {
            console.log(err)
        })
    },
    updateProfile({ commit, state }, data) {
        let name = data.name
        let title = data.title

        fb.usersCollection.doc(state.currentUser.uid).update({ name, title }).then(user => {
            // update all posts by user to reflect new name
            fb.postsCollection.where('userId', '==', state.currentUser.uid).get().then(docs => {
                docs.forEach(doc => {
                    fb.postsCollection.doc(doc.id).update({
                        userName: name
                    })
                })
            })
            // update all comments by user to reflect new name
            fb.commentsCollection.where('userId', '==', state.currentUser.uid).get().then(docs => {
                docs.forEach(doc => {
                    fb.commentsCollection.doc(doc.id).update({
                        userName: name
                    })
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }
};


const mutations = {
    setCurrentUser(state, val) {
        state.currentUser = val
    },
    setUserProfile(state, val) {
        state.userProfile = val
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};
