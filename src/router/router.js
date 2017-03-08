/**
 * Created by Administrator on 2017/1/20.
 */

/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


import MatchTest from '../components/MatchTest.vue';
import MatchResult from '../components/MatchResult.vue';

Vue.use(VueRouter);

//路由映射配置
const routes = [
  {
    path: '/',
    redirect: '/matchtest',
    component: MatchTest,
  },
  {
    name: 'MatchTest',
    path: '/matchtest',
    component: MatchTest
  },
  {
    name: 'MatchResult',
    path: '/matchresult',
    component: MatchResult
  },
];


//创建实例
const router = new VueRouter({
  mode: 'history',
  history: true,
  routes,
});

export default router;
