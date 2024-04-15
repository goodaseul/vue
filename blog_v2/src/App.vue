<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/list">List</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 글 목록 페이지 components -->
    <!-- <List :blogData="blogData" v-for="blogData in blogData" :key="blogData"> </List> -->

    <!-- router list -->
    <!-- 메인 / 리스트 / 디테일 : router-->
    <div class="mt-4">
        <router-view :blogData="blogData"> </router-view>
    </div>
</template>

<script>
// import List from "./components/List.vue";
import blogData from "./assets/data/blogData.js";

export default {
    name: "App",
    data() {
        return {
            blogData: blogData,
        };
    },
    components: {
        // List,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
