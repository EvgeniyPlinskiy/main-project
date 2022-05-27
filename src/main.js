import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
// import 'admin-lte/dist/css/adminlte.css'
// import 'admin-lte/dist/js/adminlte.js'


createApp(App).use(store).use(router).mount('#app')
