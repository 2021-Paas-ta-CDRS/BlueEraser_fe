<template>
    <div>
        <div v-for="doctor in doctors" v-bind:key='doctor'>{{ doctor.name }}</div>
    </div>
</template>

<script>
import { getDoctorList } from '../api/index.js'

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