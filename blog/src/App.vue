<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <router-link to="/"> HOME </router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <router-link to="/list">LIST</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link to="/detail">Detail</router-link></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- <router-view></router-view> -->
    <!-- <ListView v-for="blogData in blogData" :key="blogData" :blogData="blogData" /> -->
    <div class="mt-4">
        <router-view :blogData="blogData"></router-view>
    </div>
</template>

<script>
// import ListView from "./components/List.vue";

import BlogData from "./assets/blog";

export default {
    name: "App",
    data() {
        return {
            blogData: BlogData,
        };
    },
    components: {
        // ListView,
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
