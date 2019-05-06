export const state = () => ({
  authenticated: false
})

export const getters = {
  authenticated: state => {
    return state.authenticated
  }
}

export const mutations = {
  authenticated(state) {
    state.authenticated = true
  },
  unauthenticate(state) {
    state.authenticated = false
  }
}

export const actions = {
  login(context) {
    context.commit('authenticated')
  },
  logout(context) {
    context.commit('unauthenticate')
  }
}
