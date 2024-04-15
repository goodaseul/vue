<template>
    <div>
        <h4>{{ blogData[urlId].title }}</h4>
        <p>{{ blogData[urlId].date }}</p>
        <h5>{{ blogData[urlId].content }}</h5>

        <!-- author / comment -->
        <router-view> </router-view>
    </div>
</template>

<script>
export default {
    name: "DetailView",
    data() {
        return {
            urlId: this.$route.params.id,
        };
    },
    props: { blogData: Array },
};
</script>

<style></style>
