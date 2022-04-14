const user1 = {
  namespaced: true,
  state: {
    username: 'jack',
    age: 28,
  },
  mutations: {
    setUsername(state) {
      state.username = "jerry"
    },
    setAge(state, value) {
      state.age = value
    }
  },
  actions: {
    asyncSetAge(context, value = 50) {
      setTimeout(() => {
        context.commit('setAge', value)
      }, 1000);
    }
  },
  getters: {
    description(state) {
      return "我是" + state.username + "，今年" + state.age + "岁."
    }
  }
}
export default user1