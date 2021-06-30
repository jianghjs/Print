import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Top from '@/components/Top'
import Applications from '@/components/Applications'
import Agent from '@/components/Agent'
import Working from '@/components/Working'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/applications',
      name: 'Applications',
      component: Applications
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent
    },
    {
      path: '/working',
      name: 'Working',
      component: Working
    },
  ]
})
