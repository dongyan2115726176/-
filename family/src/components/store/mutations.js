import * as types from './types.js'
// import state from "./states"
export default {
  // 购物车
  [types.addGoods](state, info) {
    state.detail.push(info);
  },
  [types.deleteGoods](state, index) {
    state.items.splice(index,1)
  },
  [types.jiaFn](state) {
    state.count++;
  },
  [types.jianFn](state) {
      state.count--;
  }
}