import axios from 'axios'

// state
export const state = () => ({
  users: [],
})

// getters
export const getters = {}

// actions
export const actions = {
  async getUsers(context) {
    // hit api to get user
    const users = await axios.get("https://randomuser.me/api?results=3").then((response) => {
      return response.data.results
    })
    context.commit('addUsers', users)
    return users
  },
}

// mutations
export const mutations = {
  addUsers(state, users) {
    state.users.push(...users)
  },
}