import { createApp } from 'vue'
import '@/styles/global.scss'
import App from './App.vue'
import i18n from './plugins/i18n'
import router from '@/router'

const isAuthenticated = false;
const app = createApp(App);

app.use(router)
app.use(i18n);
app.mount('#app');

// AUTH MIDDLEWARE
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !isAuthenticated) next({ path: '/login' })
  else next()
})
