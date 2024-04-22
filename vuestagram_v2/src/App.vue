<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="tabNum == 1" @click="tabNum = 2">Next</li>
            <li v-if="tabNum == 2" @click="publish">Publish</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- <h4>안녕 {{ $store.state.name }} {{ $store.state.age }}</h4> -->
    <h4>안녕 {{ name }} {{ age }} {{ 이름바꿀래 }}</h4>

    <!-- mutations함수를 부탁하는 commit -->
    <!-- <button @click="$store.commit('nameChange')">이름 변경</button>
    <button @click="$store.commit('ageChange', 100)">나이 변경</button> -->

    <button @click="nameChange()">이름 변경</button>
    <button @click="$store.commit('ageChange', 100)">나이 변경</button>

    <!-- 포스트 감싼 컨테이너 -->
    <Container @writingSend="writing = $event" :instaData="instaData" :tabNum="tabNum" :blobImg="blobImg" :makeFilter="makeFilter" :writing="writing" />

    <button @click="more">게시물 더보기</button>

    <!-- MoreActions -->
    <p>
        {{ $store.state.more }}
    </p>
    <!-- actions 함수를 부탁하는 dispatch -->
    <button @click="$store.dispatch('getData')">게시물 actions로 더보기</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="uploadImg" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

    <!-- tab -->
    <div v-if="tabNum == 0">내용0</div>
    <div v-if="tabNum == 1">내용1</div>
    <div v-if="tabNum == 2">내용2</div>

    <button @click="tabNum = 0">버튼 0</button>
    <button @click="tabNum = 1">버튼 1</button>
    <button @click="tabNum = 2">버튼 2</button>
</template>

<script>
import Container from "./components/Container.vue";
import instaData from "./assets/data/instaData.js";

import { mapMutations, mapState } from "vuex";

// axios
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            instaData: instaData,
            clickNum: 0,
            tabNum: 3,
            blobImg: "",
            makeFilter: "",
            writing: "",
            liked: "",
            nowIs: 0,
        };
    },
    //mitt 는 대부분 mounted 에서 받음
    mounted() {
        this.emitter.on("filters", (filter) => {
            this.makeFilter = filter;
        });
    },

    components: {
        Container,
    },
    // 함수만들 때  : 사용할 때마다 실행됨
    methods: {
        more() {
            axios.get(`https://codingapple1.github.io/vue/more${this.clickNum}.json`).then((result) => {
                this.instaData.push(result.data);
            });
            this.liked = false;
            this.clickNum++;

            console.log(this.instaData);
        },
        uploadImg(e) {
            let fileName = e.target.files;
            this.tabNum = 1;
            this.blobImg = URL.createObjectURL(fileName[0]);
        },
        publish() {
            let myContent = {
                name: "Kim Hyun",
                userImage: "https://picsum.photos/100?random=3",
                postImage: this.blobImg,
                likes: 36,
                date: "May 15",
                liked: this.liked,
                content: this.writing,
                filter: this.makeFilter,
            };
            this.tabNum = 0;
            this.instaData.unshift(myContent);
        },
        // nowMethods() {
        //     return new Date();
        // },

        // mutations 함수 가져오기
        ...mapMutations(["nameChange"]),
    },
    // 함수만들 때 : * load 될 때 한번 읽고 넘어가서 사용할때 마다 실행되지 않음 처음 실행 값을 간직 * ()로 load하면 안됨 * return 필수
    computed: {
        // nowComputed() {
        //     return new Date();
        // },

        //state 하나 꺼내 쓸 때도 computed 안에 사용하면 편함
        // name() {
        //     return this.$store.state.name;
        // },
        // age() {
        //     return this.$store.state.age;
        // },

        //vuex 함수이기에 import

        //array
        ...mapState(["name", "age"]),

        //object : 작명필수
        ...mapState({ 이름바꿀래: "name" }),
    },
};
</script>

<style>
@import "./assets/css/app.css";
</style>
