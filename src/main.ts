import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus' // 需要引入到App之前
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
