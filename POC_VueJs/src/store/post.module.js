const state = {
    posts: [],
    hiddenPosts: []
};

const getters = {
    posts(state) {
        return state.posts
    },
    hiddenPosts(state) {
        return state.hiddenPosts
    }
};

const actions = {

};

const mutations = {
    setPosts(state, val) {
        if (val) {
            state.posts = val
        } else {
            state.posts = []
        }
    },
    setHiddenPosts(state, val) {
        if (val) {
            if (!state.hiddenPosts.some(x => x.id === val.id)) {
                state.hiddenPosts.unshift(val)
            }
        } else {
            state.hiddenPosts = []
        }
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
