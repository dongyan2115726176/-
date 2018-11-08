import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

export const storeObj = {
  state: {
    detail:[],
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters:{
    ...getters
  }
}