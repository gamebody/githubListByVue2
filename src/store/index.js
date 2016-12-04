import Vuex from 'vuex'
import Vue from 'vue'
import api from '../api'
Vue.use(Vuex)

const item = {
    icon: {
        name: 'start',
        icon: null,
        wrapColor: '#fff',
        iconColor: '#fff'
    },
    text: '文件夹名字',
    list: [
        {
            name: 'vue',
            carts: [
                {

                }
            ]
        }
    ]
}

export default new Vuex.Store({
    state: {
        floder: {
            isRunning: false,
            editing: false
        },
        currentSearch: [

        ],
        floders:[]
    },
    mutations: {
        addFloder({ floders }, floder) {
            floder.list = []
            floders.push(floder)
        },
        toggleFloder({ floder }) {
            floder.isRunning = !floder.isRunning
        },
        showSearchValue(state, data) {
           state.currentSearch =  data       
        },
        addList(state, list) {
            state.floders.filter((floder) => (
                `/${floder.icon.name}` === list.path
            ))[0].list.push(list)
        }
    },
    getters: {
        
    },
    actions: {
        searchRepo({ commit }, params) {
            return api.getRepos(params).then(({ items }) => {
                commit('showSearchValue', items)
            })
        }
    }
})