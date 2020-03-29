import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/views/Home')
const Category = () => import('../components/views/Category')
const ShopCart = () => import('../components/views/ShopCart')
const Profile = () => import('../components/views/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop-cart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
