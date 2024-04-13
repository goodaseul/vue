<template>
    <div>
        <div v-if="TabIndex == 0" class="wrap">
            <PostView :filterClass="filterClass" v-for="(InstaData, InstaDataIndex) in InstaData" :key="InstaDataIndex" :InstaData="InstaData" />
        </div>
        <div v-if="TabIndex == 1" class="wrap">
            <!-- 필터선택페이지 -->
            <div class="upload-image" :class="filterClass" :style="{ backgroundImage: `url(${UploadImg})` }"></div>
            <div class="filters">
                <FilterBox :UploadImg="UploadImg" v-for="filter in filters" :key="filter" :filter="filter"> {{ filter }}</FilterBox>
            </div>
        </div>
        <div v-if="TabIndex == 2" class="wrap">
            <!-- 글작성페이지 -->
            <div class="upload-image" :class="filterClass" :style="{ backgroundImage: `url(${UploadImg})` }"></div>
            <div class="write">
                <textarea @input="$emit('myContentData', $event.target.value)" class="write-box"> </textarea>
                <!-- /* 타이핑한 글 > $event.target.value */ -->
            </div>
        </div>

        <div v-if="TabIndex == 3" class="wrap">
            <MypageView :one="1" />
        </div>
    </div>
</template>

<script>
import PostView from "./PostView.vue";
import FilterBox from "./FilterBox.vue";
import filters from "../assets/data/filter.js";
import MypageView from "./MypageView.vue";

export default {
    name: "ContainerView",
    data() {
        return {
            filters: filters,
        };
    },
    components: {
        PostView,
        FilterBox,
        MypageView,
    },
    props: {
        InstaData: Array,
        TabIndex: Number,
        UploadImg: Image,
        filterClass: String,
    },
};
</script>

<style>
@import "../assets/css/container.css";
</style>
