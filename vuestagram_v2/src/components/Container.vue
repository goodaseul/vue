<template>
    <div>
        <!-- 게시물들 -->
        <div v-if="tabNum == 0">
            <Post :instaData="instaData" v-for="instaData in instaData" :key="instaData" />
        </div>
        <!-- 필터선택페이지 -->
        <div v-if="tabNum == 1">
            <div :class="`upload-image ${makeFilter}`" :style="` background-image: url(${blobImg})`"></div>
            <div class="filters">
                <!-- filter component -->
                <FilterBox :blobImg="blobImg" v-for="(filters, index) in filters" :key="index" :filters="filters">
                    <!-- <template v-slot:filterName> -->
                    {{ filters }}
                    <!-- </template> -->
                </FilterBox>
            </div>
        </div>
        <!-- 글작성페이지 -->
        <div v-if="tabNum == 2">
            <div :class="`upload-image  ${makeFilter}`" :style="{ backgroundImage: `url(${blobImg})` }"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('writingSend', $event.target.value)">Write!</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
    name: "ContainerView",
    data() {
        return {
            filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        };
    },
    props: {
        instaData: Array,
        tabNum: Number,
        blobImg: Image,
        makeFilter: String,
    },
    components: {
        Post,
        FilterBox,
    },
};
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}
.filters {
    overflow-x: scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>
