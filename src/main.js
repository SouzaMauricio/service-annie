import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import { store } from './store/store'
import './tailwind.css'
import './assets/scss/modules/_icons.scss'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mask } from 'vue-the-mask'
import "swiper/css/pagination"
import 'swiper/css'
import money from 'v-money'

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import './swiperjs.css'

const app = createApp(App)
app.use(money, { precision: 2 })
app.component('v-swiper', Swiper)
app.component('v-swiper-slide', SwiperSlide)
app.directive('mask', mask)
app.use(routers)
app.use(store)
app.mount('#app')