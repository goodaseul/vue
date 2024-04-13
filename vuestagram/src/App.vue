<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="TabIndex == 1" @click="TabIndex = '2'">Next</li>
            <li v-if="TabIndex == 2" @click="Publish()">Publish</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>
    <p>{{ name }} {{ age }} {{ likes }}</p>
    <!-- <p>{{ now2 }} {{ counter }}</p>
    <button @click="counter++">now 실행 버튼</button> -->

    <!--  Vuex / store.js를 사용해서 할 시 데이터를 직접 수정하면 안됨 -->
    <!-- <button @click="$store.state.name = 'daseul'">이름 바꾸기</button> -->
    <!-- <h4>Hello {{ $store.state.name }}</h4> -->
    <!-- <button @click="$store.commit('nameChange')">이름 바꾸기</button> -->

    <h4>Hello {{ $store.state.name }}</h4>
    <button @click="nameChange">이름 바꾸기</button>

    <h4>내 나이는: {{ $store.state.age }}</h4>
    <!-- <button @click="$store.commit('ageChange', 10)">숫자 올리기</button> -->
    <button @click="ageChange(10)">숫자 올리기</button>

    <p>
        {{ $store.state.more }}
    </p>

    <button @click="$store.dispatch('dataPull')">action 더보기</button>

    <ContainerView :filterClass="filterClass" @myContentData="UploadTxt = $event" :InstaData="InstaData" :TabIndex="TabIndex" :UploadImg="UploadImg" />

    <button @click="moreView">더보기</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="FileLoad" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

    <button @click="TabIndex = 0">버튼0</button>
    <button @click="TabIndex = 1">버튼1</button>

    <!-- <div v-if="Step == 0">내용0</div>
    <div v-if="Step == 1">내용1</div>
    <div v-if="Step == 2">내용2</div>
    <button @click="Step = 0">버튼0</button>
    <button @click="Step = 1">버튼1</button>
    <button @click="Step = 2">버튼2</button> -->
</template>
<script>
import InstaData from "./assets/data/instadata.js";
import ContainerView from "./components/ContainerView.vue";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

axios.post();

export default {
    name: "App",
    data() {
        return {
            InstaData: InstaData,
            ClickNum: 0,
            TabIndex: 3,
            UploadImg: " ",
            UploadTxt: " ",
            filterClass: " ",
            counter: 0,
        };
    },
    mounted() {
        this.emitter.on("filterChange", (filterName) => {
            this.filterClass = filterName;
        });
    },
    computed: {
        name() {
            return this.$store.state.name;
        },
        // vuex state 한번에 꺼내쓰려면
        ...mapState(["name", "age", "likes"]),
        // ...mapState({ 작명: 'name', }),
        // now2() {
        //     return new Date();
        // },
    },
    methods: {
        // now() {
        //     return new Date();
        // },
        ...mapMutations(["setMore", "nameChange", "ageChange"]),
        FileLoad(event) {
            let uploadFile = event.target.files;
            this.TabIndex++;
            this.UploadImg = URL.createObjectURL(uploadFile[0]);
            console.log(this.UploadImg);
        },
        Publish() {
            let myContent = {
                name: "Kim Hyun",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.UploadImg,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.UploadTxt,
                filter: this.filterClass,
            };
            this.InstaData.unshift(myContent);
            this.TabIndex = 0;
        },
        moreView() {
            axios.get(`https://codingapple1.github.io/vue/more${this.ClickNum}.json`).then((result) => {
                // 요청성공시 실행할 코드
                // console.log(result.data);
                this.InstaData.push(result.data);
                this.ClickNum += 1;
            });
            // axios
            //     .post("URL", { name: "kim" })
            //     .then(() => {
            //         // 성공시
            //     })
            //     .catch((err) => {
            //         // 실패시
            //     });
        },
    },
    components: {
        ContainerView,
    },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
