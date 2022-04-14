import { createWebHashHistory, createRouter } from 'vue-router'
//定义路由组件
import Home from "../components/Home.vue";
import News from "../components/News.vue";
import NotFound from "../components/NotFound.vue";
import RegularParam from "../components/RegularParam.vue";
import RepeatParams from "../components/RepeatParams.vue";
import Henban from "../components/user/Henban.vue";
import Shuban from "../components/user/Shuban.vue";
import Page from "../components/page.vue"
import ShopMain from "../components/shop/ShopMain.vue"
import ShopFooter from "../components/shop/ShopFooter.vue"
import ShopTop from "../components/shop/ShopTop.vue"
import User from "../views/User.vue"
//定义路由
const routes = [
  {
    path: '/', component: Home,
    children: [
      { path: 'henban', component: Henban },
      { path: 'shuban', component: Shuban },
    ]
  },
  { name: 'news', path: '/news/:id', component: News },
  { path: '/:path(.*)', component: NotFound },
  //用正则限制id只能为数字
  { path: '/regularparam/:id(\\d+)', component: RegularParam },
  //+可重复添加参数 +至少会有一个参数
  //*是可有可没有，也可以是任意多个参数
  //?有或者没有，不可以重复
  { path: '/repeatparams/:id?', component: RepeatParams },
  {
    path: '/page', component: Page,
    beforeEnter: (to, from, next) => {
      console.log('进入路由时触发');
      next();
    }
  },
  // 命名视图，同级展示多个组件 
  {
    path: '/shop',
    //alias: '/shangcheng',//别名
    alias: ['/shangcheng', '/gouwu'],//多个别名
    components: {
      default: ShopMain,
      ShopFooter: ShopFooter,
      ShopTop: ShopTop
    }
  },
  //模块化管理vuex练习user
  {
    path: '/user',
    name:'User',
    component: User,
  },
  //重定向
  {
    path: '/mall',
    redirect: '/shop'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
//全局守卫
router.beforeEach((to, from, next) => {
  console.log("跳转页面前")
  next();
})
export default router;