import Stat from "../data/StatsApi"

const state = {
    summary: {}
};

const getters = {
    summary(state) {
        return state.summary
    }
};

const actions = {
    fetchSummaryData({ commit, state }) {
        Stat.getSummaryData().then(({ data }) => {
            console.log("data from api")
            console.log(data)
            commit('setSummary', data)
        }).catch(error => {
            console.log(error)
        })
    }
};

const mutations = {
    setSummary(state, val) {
        if (val) {
            state.summary = val
        } else {
            state.summary = {}
        }
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
