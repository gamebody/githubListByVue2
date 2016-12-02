import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        floder: {
            isRunning: false,
            editing: false
        },
        floders:[
            // {
            //     icon: {
            //         name: '111',
            //         icon: react,
            //         wrapColor: '#294453',
            //         iconColor: '#ccc'
            //     },
            //     text: 'Hello'
            // }
        ]
    },
    mutations: {
        addFloder({ floders }, floder) {
            floders.push(floder)
        },
        toggleFloder({ floder }) {
            floder.isRunning = !floder.isRunning
        }
    },
    getters: {
        
    },
    actions: {

    }
})