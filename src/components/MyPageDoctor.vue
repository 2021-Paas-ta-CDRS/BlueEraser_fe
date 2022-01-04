 <template>
    <div class="center content-inputs">
        <ul class="input-list">
            <li>
                <vs-input
                label="이메일"
                v-model="email"
                placeholder="temp@gmail.com"
                class="input"
                />
            </li>
            <li>
                <vs-input
                label="이름"
                v-model="name"
                placeholder="홍길동"
                class="input"
                />
            </li>
            <li>
                <vs-input
                label="병원 주소"
                v-model="hospitalAddress"
                placeholder="경기도 고양시 일산서구 대산로 141"
                class="input"
                />
            </li>
            <li>
                <vs-input
                label="전화번호"
                v-model="phoneNumber"
                placeholder="01011112222 ('-'없이 입력해주세요.)"
                class="input"
                />
            </li>
            <li>
                <vs-input
                label="나이"
                v-model="age"
                placeholder="45"
                class="input"
                />
            </li>
            <li>
                <vs-input
                label="자기소개"
                v-model="selfPr"
                placeholder=""
                class="input"
                />
            </li>
            <li>
                <vs-input
                label="주소"
                v-model="address"
                placeholder=""
                class="input"
                />
            </li>
            <li>
                <vs-button
                    :active=true
                    @click="saveDoctorInfo"
                >
                    저장
                </vs-button>
            </li>
        </ul>
    </div>
</template>

<script>
import { getDoctor, updateDoctor } from "@/apis/patient.js"
export default {
    name: "MyPageDoctor",
    data:() => ({
        id: '',
        email: '',
        name: '',
        hospitalAddress: '',
        phoneNumber: '',
        age: '',
        isVerified: '',
        selfPr: '',
        sex: '',
        address: '',
        profileImage: null
    }),
    created() {
        getDoctor()
        .then(response => { 
            const doctor = response.data[0]
            this.id = doctor.id;
            this.email = doctor.email;
            this.name = doctor.name;
            this.hospitalAddress = doctor.hospitalAddress;
            this.phoneNumber = doctor.phoneNumber;
            this.age = doctor.age;
            this.isVerified = doctor.isVerified;
            this.selfPr = doctor.selfPr;
            this.sex = doctor.sex;
            this.address = doctor.address;
            this.profileImage = doctor.profileImage;
        })
    },
    computed: {
        getPayload() {
            return {
                "userId": this.id,
                "hospitalAddress": this.hospitalAddress,
            }
        }
    },
    methods: {
        saveDoctorInfo() {
            updateDoctor(this.getPayload)
            .then(response => {
                console.log(response)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.input-list {
    list-style: none;
    
    .input {
        display: flex;
        height: 70px;
    }
}
</style>
