const user = {
  state: {
    username: 'tom',
    age: 18,
  },
  mutations: {
    setUsername(state) {
      state.username = "jack"
    },
    setAge(state, value) {
      state.age = value
    }
  },
  actions: {
    asyncSetAge(context) {
      setTimeout(() => {
        context.commit('setAge', 40)
      }, 1000);
    }
  },
  getters: {
    description(state) {
      return "我是" + state.username + "，今年" + state.age + "岁."
    }
  }
}
export default user