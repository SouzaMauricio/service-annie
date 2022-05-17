import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import './tailwind.css'
import './assets/scss/modules/_icons.scss'

const app = createApp(App)

app.use(routers)
app.mount('#app')