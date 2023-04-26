import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import Generator from './components/Generator.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FcCheckmark} from "oh-vue-icons/icons";

addIcons(FcCheckmark);
const app = createApp(App)
    
app.use(createPinia())
app.use(router)
app.component('Generator', Generator);
// app.component('Question', Question);
app.component("v-icon", OhVueIcon);

app.mount('#app')
