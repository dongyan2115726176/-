import * as types from './types.js'


export default {
  //购物车
  async [types.jiaFn]({commit}, params) {
      commit('jiaFn',params)
  },
  async [types.jianFn]({commit}, params) {
      commit('jianFn',params)
  },
  async [types.addGoods]({commit},params){
    // 上传数据
    var data = await fetch('@/static/data.json', {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(params)
    }).then(res => res.json());

    commit('addGoods', data);
  },
  async [types.deleteGoods]({commit},params){
    commit('deleteGoods',params)
  }
}