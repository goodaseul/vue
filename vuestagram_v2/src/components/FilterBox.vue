<template>
    <div :class="`filter-item ${filters}`" :style="`background-image: url( ${blobImg} )`">
        <!-- {{ filters }} -->

        <!-- slot 사용법-->
        <!--html 에 데이터 바인딩 하고 싶을 때 / 여러개 쓰고 싶을 때 name="" 사용-->
        <!-- <slot name="filterName"></slot> -->
        <slot></slot>

        <!-- mitt 사용법-->
        <button @click="fire">필터 선택</button>
    </div>
</template>

<script>
export default {
    name: "FilterBox",
    props: {
        blobImg: Image,
        filters: Array,
    },
    methods: {
        fire() {
            this.emitter.emit("filters", this.filters);
        },
    },
};
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
