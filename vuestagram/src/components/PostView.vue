<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage: `url(${InstaData.userImage})` }"></div>
            <span class="profile-name">{{ InstaData.name }}</span>
        </div>
        <!-- :class="InstaData.filter" -->
        <div class="post-body" @click="$store.commit('like')" :class="filterClass" :style="{ backgroundImage: `url(${InstaData.postImage})` }"></div>
        <div class="post-content">
            <!-- <p>{{ InstaData.likes }}</p> -->
            <!-- <p v-for="like in likes" :key="like">{{ $store.state.likes }}</p> -->
            <p>
                <!-- <span v-for="InstaData in InstaData" :key="InstaData"> -->
                {{ $store.state.likes }}
                <!-- </span> -->
            </p>
            <p>
                <strong>{{ InstaData.name }}</strong> {{ InstaData.content }}
            </p>
            <p class="date">{{ InstaData.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostView",
    props: {
        InstaData: Array,
        filterClass: String,
    },
};
</script>

<style>
@import "../assets/css/post.css";
</style>
