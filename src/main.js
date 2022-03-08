import { createApp } from 'vue'

import App from './App.vue'
import './assets/tailwind.css'

const app = createApp(App)

import VueObserveVisibility from 'vue-observe-visibility'
app.use(VueObserveVisibility)
app.mount('#app')
