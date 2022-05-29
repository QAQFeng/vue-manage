import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'

//  左侧状态栏折叠

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tab,
        user
    }
})