import Vue from 'vue'
import Router from 'vue-router'

// views
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Signup_doctor from '@/views/Signup_doctor'
import Signup_user from '@/views/Signup_user'
import Doctor_main from '@/views/Doctor_main'

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
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/signup_doctor',
            name: 'Signup_doctor',
            component: Signup_doctor,
        },
        {
            path: '/signup_user',
            name: 'Signup_user',
            component: Signup_user,
        },
        {
            path: '/doctor_main',
            name: 'Doctor_main',
            component: Doctor_main,
        }
    ]
})