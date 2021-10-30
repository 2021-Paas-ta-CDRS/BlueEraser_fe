 <template>
    <div class="center content-inputs">
        <ul class="input-list">
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
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyPageDoctor",
    data:() => ({
        name: '',
        hospitalAddress: '',
        phoneNumber: '',
        age: '',
        isVerified: '',
        selfPr: '',
        sex: '',
        address: '',
    })
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