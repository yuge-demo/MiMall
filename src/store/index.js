import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);
//定义并管理状态
const state = {
      username: '', //登录购物车
      cartCount: 0//购物车商品数量
}

export default new Vuex.Store({
      state,
      mutations,
      actions
})