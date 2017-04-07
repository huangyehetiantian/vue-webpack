import Vue from 'vue'
import Router from 'vue-router'
import Footer from '../components/Footer.vue'
import memberCurse from '../components/member-course.vue'
import allCurse from '../components/all-courses.vue'
import school from '../components/school.vue'
import VIP from '../components/VIP.vue'
import WIKI from '../components/WIKI.vue'

Vue.use(Router)

const routes = [
  {
    path: '/memberCurse',
    name: 'memberCurse',
    component: memberCurse
  },
  {
    path: '/allCurse',
    name: 'allCurse',
    component: allCurse
  },
  {
    path: '/school',
    name: 'school',
    component: school
  },
  {
    path: '/VIP',
    name: 'VIP',
    component: VIP
  },
  {
    path: '/WIKI',
    name: 'WIKI',
    component: WIKI
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  }
]
export default new Router({
  routes
})

