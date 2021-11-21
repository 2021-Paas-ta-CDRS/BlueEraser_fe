<template>
    <vs-card-group>
        <vs-card v-for="doctor in doctors" v-bind:key="doctor">
            <template #title>
                <h3>{{ doctor.name }}</h3>
            </template>
            <template #img>
                <img :src="doctor.profileImage" alt="">
            </template>
            <template #text>
                <p>
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                    자기소개를 이곳에 써주세요.
                </p>
            </template>
        </vs-card>
    </vs-card-group>
</template>

<script>
import {getDoctorList} from '@/apis/patient.js'

export default {
    data() {
        return {
            doctors: []
        }
    },
    created() {
        getDoctorList()
            .then(response => this.doctors = response.data)
            .catch()
    }
}
</script>

<style lang="scss">
.vs-card__group-cards::-webkit-scrollbar {
    display: none;
}
</style>
