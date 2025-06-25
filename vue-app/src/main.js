import { createApp } from 'vue'
import App from './App.vue'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'

//import router
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
