import Mock from 'mockjs'

//设置一下模拟返回数据的时间
Mock.setup({
  timeout: '200-600'
})
Mock.mock(
  "user/userinfo",
  'get',
  () => {
    return {
      username: "张三",
      age: 18,
    }
  }
)
Mock.mock(
  //通过正则匹配
  /\/login.*/,
  'get',
  () => {
    return {
      info: "登录成功",
    }
  }
)