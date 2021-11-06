import Vue from 'vue'
import Router from 'vue-router'

// views
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import SignupDoctor from '@/views/SignupDoctor'
import SignupUser from '@/views/SignupUser'
import DoctorMain from '@/views/DoctorMain'
import CounselingRoom from '@/views/CounselingRoom'

// component
import TestComponent from '@/components/TestComponent'
import MyPageDoctor from '@/components/MyPageDoctor'

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
            path: '/signup/doctor',
            name: 'SignupDoctor',
            component: SignupDoctor,
        },
        {
            path: '/signup/user',
            name: 'SignupUser',
            component: SignupUser,
        },
        {
            path: '/doctor/main',
            name: 'DoctorMain',
            component: DoctorMain,
        },
        {
            path: '/doctor/mypage',
            name: 'MyPageDoctor',
            component: MyPageDoctor,
        },
        {
            path: '/counselingRoom',
            name: 'CounselingRoom',
            component: CounselingRoom,
        }
    ]
})
