<template>
    <div class="black-bg" v-if="modalIs == true">
        <div class="white-bg">
            <img :src="onerooms[clickId].image" alt="" />
            <h4>{{ onerooms[clickId].title }}</h4>
            <p>{{ onerooms[clickId].content }}</p>
            <!-- <input @input="month = $event.target.value" /> -->
            <!-- == input value 를 바로 month에 저장 -->
            <input v-model.number="month" v-on:keyup.space="spaceBlock" />
            <p>{{ this.onerooms[this.clickId].price }}</p>
            <p>총 {{ month }}개월 : {{ month * onerooms[clickId].price }}</p>
            <DiscountBanner />
            <button @click="$emit('closeModal', false)">상세페이지 닫기</button>
        </div>
    </div>
</template>

<script>
import DiscountBanner from "./DiscountBanner.vue";

export default {
    name: "RoomModal",
    data() {
        return {
            month: 1, //초기값 중요
        };
    },
    watch: {
        // 감시할 데이터
        month(data, originData) {
            data, originData;
            if (isNaN(data) == true) {
                data = " ";
                this.month = originData;
            }
        },
    },
    updated() {
        if (this.month == 2) {
            alert("no 2");

            this.month = 3;
        }
    },
    props: {
        modalIs: Boolean,
        onerooms: Object,
        clickId: Number,
    },
    components: {
        DiscountBanner,
    },
    methods: {
        spaceBlock() {
            this.month = 1;
        },
    },
};
</script>

<style></style>
