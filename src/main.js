import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import './tailwind.css'

const app = createApp(App)

app.use(routers)
app.mount('#app')