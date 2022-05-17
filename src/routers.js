import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './views/MainScreen'
import PropertyScreen from './views/PropertyScreen'
import DefaultContainer from './containers/DefaultContainer'

const routes = [
  {
    path: '/',
    name: 'DefaultContainer',
    component: DefaultContainer,
    children: [
      {
        path: '/',
        redirect: 'main'
      },
      {
        path: '/main',
        name: 'Main',
        component: MainScreen
      },
      {
        path: 'property',
        name: 'Property',
        component: PropertyScreen
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router