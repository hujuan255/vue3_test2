import axios from 'axios';
import { createStore } from 'vuex'
import user from './user.js'
import user1 from './user1.js'
//多个组件需要共享的数据一般放在store中
export default createStore({
  //设置全局数据的地方
  state: {
    count: 0,
    dzList: [],
  },
  //修改状态的方法
  mutations: {
    // setCount(state) {
    //   state.count++
    // },
    //参数1：state，参数2：传递过来的参数
    setCount(state, num) {
      state.count += num
    },
    setDzList(state, dzList) {
      state.dzList = dzList
    }
  },
  //异步操作
  actions: {
    getDz(context) {
      let api = "https://api.apiopen.top/getJoke?page=1&count=10&type=text";
      axios.get(api).then(res => {
        context.commit('setDzList', res.data.result)
        console.log(res.data.result);
      })
    },
  },
  modules: {
    user,
    user1
  },
  //计算属性
  getters: {
    totalprice: function (state) {
      return state.count * 100
    }
  }
})