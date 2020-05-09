import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/home/LoginComponent'
import MobHome from '@/components/home/MobHome'
import PostStampHome from '@/components/postStamp/postStampHome'
import MobKartHome from '@/components/mobkart/MobKartHome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/mobileHome',
      name: 'MobileHome',
      component: MobHome
    },
    {
      path: '/postStampHome',
      name: 'PostStampHome',
      component: PostStampHome
    },
    {
      path: '/mobKartHome',
      name: 'MobKartHome',
      component: MobKartHome
    }
  ]
})
