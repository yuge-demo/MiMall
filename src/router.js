import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
// import Login from './pages/login.vue'
import Index from './pages/index.vue'
// import Product from './pages/product.vue'
// import Detail from './pages/detail.vue'
// import Cart from './pages/cart.vue'
// import Order from './pages/order.vue'
// import OrderConfirm from './pages/orderConfirm.vue'
// import OrderList from './pages/orderList.vue'
// import OrderPay from './pages/orderPay.vue'
// import AliPay from "./pages/aliPay.vue"


Vue.use(Router);

export default new Router({
    //配置子路由
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    // component:  resolve => require(['./pages/index.vue'] , resolve),
                    component: () => import('./pages/product.vue')
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    // component:  resolve => require(['./pages/detail.vue'] , resolve),
                    component: () => import('./pages/detail.vue')
                }
            ]
        },
        {
            path: '/login',
            // component:  resolve => require(['./pages/login.vue'] , resolve),
            component: () => import('./pages/login.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            // component: Cart
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: () => import('./pages/orderList.vue'),
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    // component: OrderConfirm
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    // component: OrderPay
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    // component: AliPay
                    component: () => import('./pages/aliPay.vue')
                }
            ]
        }
    ]
});