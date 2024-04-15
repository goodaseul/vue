<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li>Next</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- 포스트 감싼 컨테이너 -->
    <Container :instaData="instaData" :tabNum="tabNum" :blobImg="blobImg" />

    <button @click="more">게시물 더보기</button>

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

// axios
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            instaData: instaData,
            clickNum: 0,
            tabNum: 0,
            blobImg: "",
        };
    },
    methods: {
        more() {
            axios.get(`https://codingapple1.github.io/vue/more${this.clickNum}.json`).then((result) => {
                this.instaData.push(result.data);
            });
            this.clickNum++;
        },
        uploadImg(e) {
            let fileName = e.target.files;
            this.tabNum = 1;
            this.blobImg = URL.createObjectURL(fileName[0]);
        },
    },
    components: {
        Container,
    },
};
</script>

<style>
@import "./assets/css/app.css";
</style>
