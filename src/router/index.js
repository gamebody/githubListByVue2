import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/test1',
            component: require('../views/test1.vue')
        },
        {
            path: '/test2',
            component: require('../views/test2.vue')
        }
    ]
})