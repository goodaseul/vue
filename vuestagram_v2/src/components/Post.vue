<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage: `url(${instaData.userImage})` }"></div>
            <span class="profile-name">{{ instaData.name }}</span>
        </div>
        <div @click="$store.commit('likeActive', instaIndex)" :class="`post-body ${instaData.filter}`" :style="{ backgroundImage: `url(${instaData.postImage})` }"></div>
        <div class="post-content">
            <p>{{ instaData.likes }} Likes</p>
            <!-- <p>{{ $store.state.likes[instaIndex] }} Likes</p> -->
            <p>
                <strong>{{ instaData.name }}</strong> {{ instaData.content }}
            </p>
            <p class="date">{{ instaData.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostView",
    data() {
        return {
            realLike: this.instaData.likes,

            loaded: false,
        };
    },
    props: {
        instaData: Array,
        instaIndex: Number,
    },
};
</script>

<style>
.post {
    width: 100%;
}
.profile {
    background-image: url("https://picsum.photos/100?random=0");
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}
.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}
.post-header {
    height: 30px;
    padding: 10px;
}
.post-body {
    background-image: url("https://picsum.photos/600?random=0");
    height: 450px;
    background-position: center;
    background-size: cover;
}
.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}
.date {
    font-size: 11px;
    color: grey;
    margin-top: -8px;
}
</style>
