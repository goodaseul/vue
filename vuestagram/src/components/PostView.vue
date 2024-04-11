<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage: `url(${InstaData.userImage})` }"></div>
            <span class="profile-name">{{ InstaData.name }}</span>
        </div>
        <div class="post-body" :style="{ backgroundImage: `url(${InstaData.postImage})` }"></div>
        <div class="post-content">
            <p>{{ InstaData.likes }}</p>
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
    },
};
</script>

<style>
@import "../assets/css/post.css";
</style>
