import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './views/MainScreen'
import PropertyScreen from './views/PropertyScreen'
import RentScreen from './views/RentScreen'
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
        path: '/property/:cod', 
        name: 'Property',
        component: PropertyScreen
      },
      {
        path: '/rent', 
        name: 'Rent',
        component: RentScreen
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const DEFAULT_TITLE = 'Negócios Imobiliários'
router.afterEach((to) => {
  document.title = to.meta?.title || DEFAULT_TITLE
})

export default router