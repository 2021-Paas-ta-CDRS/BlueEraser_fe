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
                gradient
                :active=true
                @click="onClickSelectImage"
                id="selectImageButton"
                >    
                의사 증명 이미지 선택
                </vs-button>
            </li>
            <li>
                <vs-input
                label="의사 증명 이미지 경로"
                v-model="imageDir"
                placeholder="파일을 선택해주세요"
                class="imageDirDisplay"
                />
            </li>
            <!-- @change를 이용해 파일 선택시 특정 함수를 호출합니다. -->
            <input type="file" name="selectImage" id="selectImage" @change='updateImageDirValue'>
            <br>
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
import { getDoctor, updateDoctor, uploadDoctorCertificate } from "@/apis/doctor.js"
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
        profileImage: null,
        imageDir: ''
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
            this.uploadImage()
            updateDoctor(this.getPayload)
            .then(response => {
                console.log(response)
            })
        },
        /*
        * onClickSelectImage()
        * 이미지 파일 업로드 버튼을 눌렀을 때
        * file input의 '파일선택'을 누른 이벤트를 발생시킵니다.
        */
        onClickSelectImage() {
            let onClickEvent = document.getElementById("selectImage");
            onClickEvent.click()
        },
        /*
        * updateImageDirValue(event)
        * 의사 증명 이미지 경로를 업데이트 합니다.
        */
        updateImageDirValue(event) {
            this.imageDir = event.target.value
        },
        /* 
        * uploadImage()
        * 선택된 파일을 서버에 업로드 합니다.
        * 이미지 파일 확인 기능이 없어 필요의 경우 파일 타입 체크를 구현해야합니다.
        * 업로드가 성공하면 성공 알람을, 실패하면 실패 알람을 우하단에 표시합니다.
        */
        uploadImage() {
            let fileInput = document.getElementById("selectImage");
            let image = fileInput.files[0];
            uploadDoctorCertificate(image)
            .then(res => {
                console.log(res)
                this.successUpload();
            })
            .catch(err => {
                console.log(err);
                this.failedUpload();
            })
        },
        /*
        * successUpload()
        * 기능 : 파일 업로드에 성공했다는 알림을 우하단에 표시합니다.
        * Vuesax의 notification 함수입니다.
        */
        successUpload(position = null, color = 'success') {
            this.$vs.notification({
                progress: 'auto',
                color,
                position,
                title: '파일 업로드를 성공하였습니다.',
                text: `증명 이미지가 등록되었습니다.`
            })
        },
        /*
        * failedUpload()
        * 기능 : 파일 업로드에 실패했다는 알림을 우하단에 표시합니다.
        * Vuesax의 notification 함수입니다.
        */
        failedUpload(position = null, color = 'danger') {
            this.$vs.notification({
                progress: 'auto',
                color,
                position,
                title: '파일 업로드를 실패했습니다.',
                text: `파일명에 한글이 들어간 경우 영문으로 바꿔주세요.`
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
    #selectImageButton {
        margin-top: -5px;
        margin-bottom: 25px;
    }
    #selectImage {
        display: none;
    }
}
</style>
