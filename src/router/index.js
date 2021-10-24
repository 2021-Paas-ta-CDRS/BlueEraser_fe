import Vue from 'vue'
import Router from 'vue-router'

// views
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import Register from '@/views/Register'

// component
import TestComponent from '@/components/TestComponent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'TestComponent',
            component: TestComponent,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        }
    ]
})