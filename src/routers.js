import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './views/MainScreen'
import DefaultContainer from './containers/DefaultContainer'

const routes = [
  {
    path: '/',
    name: 'DefaultContainer',
    component: DefaultContainer,
    children: [
      {
        path: '/',
        redirect: MainScreen
      },
      {
        path: '/main',
        name: 'Main',
        component: MainScreen
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router