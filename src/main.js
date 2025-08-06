import './assets/main.css'
import i18n from './i18n'
import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import {registerScrollSpy} from 'vue3-scroll-spy'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(router)
app.use(i18n)

registerScrollSpy(app)
app.use(MotionPlugin)

app.mount('#app')