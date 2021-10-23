import Vue from 'vue'
import Router from 'vue-router'

// views
import HelloWorld from '@/views/HelloWorld'
import LoginForm from '@/views/Login'

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
            name: 'LoginForm',
            component: LoginForm,
        },
    ]
})