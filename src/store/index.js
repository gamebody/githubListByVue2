import Vuex from 'vuex'
import Vue from 'vue'
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
        floders:[]
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