<template>
    <b-card-group>
        <!-- <b-carousel-slide
            v-for="doctor in doctors" 
            v-bind:key="doctor"
            :caption="doctor.name"
            text="자기소개를 이곳에 써주세요."
            img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide> -->
        <b-card 
            v-for="doctor in doctors" 
            v-bind:key="doctor"
            :title="doctor.name" 
            img-src="https://picsum.photos/1024/480/?image=52"
            img-alt="Image" 
            img-top
        >
            <b-card-text>
                자기소개를 이곳에 써주세요.
            </b-card-text>
        </b-card>
        
    </b-card-group>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component';
import { getDoctorList } from '@/apis/doctor.ts';

export default class HelloWorld extends Vue {
    doctors: any = []
    created() {
        getDoctorList()
            .then(response => this.doctors = response.data)
            .catch()
    }
}
</script>
