import { createApp } from 'vue'

import { registerApp } from './global'

import 'normalize.css'
import './assets/css/index.less'

// 全局引用
// import ElementPlus from 'element-plus'
//引入ele ui 的样式
// import 'element-plus/theme-chalk/index.css'

import './service/axios_demo'
import hyRequest from './service'

import rootApp from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'


const app = createApp(rootApp)
// 注册组件
registerApp(app)

app.use(store)
setupStore()
app.use(router)

app.mount('#app')

