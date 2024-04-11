<template>
    <div>
        <div v-if="TabIndex == 0" class="wrap">
            <PostView v-for="(InstaData, InstaDataIndex) in InstaData" :key="InstaDataIndex" :InstaData="InstaData" />
        </div>
        <div v-if="TabIndex == 1" class="wrap">
            <!-- 필터선택페이지 -->
            <div class="upload-image"></div>
            <div class="filters">
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
            </div>

            <!-- 글작성페이지 -->
            <div class="upload-image"></div>
            <div class="write">
                <textarea class="write-box">write!</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import PostView from "./PostView.vue";
export default {
    name: "ContainerView",
    components: {
        PostView,
    },
    props: {
        InstaData: Array,
        TabIndex: Number,
    },
};
</script>

<style>
@import "../assets/css/container.css";
</style>
