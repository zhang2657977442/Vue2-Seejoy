import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const Answer = () => import('../views/Answer')
const Resource = () => import('../views/Resource')
const Shop = () => import('../views/Shop')
const Login = () => import('../views/account/Login')
const Register = () => import('../views/account/Register')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
    
  },
  {
    path: '/answer',
    name: 'Answer',
    component: Answer
    
  },
  {
    path: '/resourse',
    name: 'Resource',
    component: Resource
  },
  {
    path: '/shop',
    name: 'Shop',
    component:Shop
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
