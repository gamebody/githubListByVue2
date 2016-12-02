import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../views/start.vue')
        },
        {
            path: '*',
            component: require('../views/content.vue')
        }
    ]
})