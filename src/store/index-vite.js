import { reactive } from "vue"
const store = {
  state: reactive({
    message: "hello",
    duanziList: []
  }),
  setMessage(value) {
    this.state.message = value
  },
  setDzList(list) {
    this.state.duanziList = list
  }
}
export default store