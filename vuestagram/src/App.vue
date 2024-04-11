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

    <ContainerView :InstaData="InstaData" :TabIndex="TabIndex" />

    <button @click="moreView">더보기</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input type="file" id="file" class="inputfile" />
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
axios.post();

export default {
    name: "App",
    data() {
        return {
            InstaData: InstaData,
            ClickNum: 0,
            TabIndex: 0,
            // Step: 0,
        };
    },
    methods: {
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
