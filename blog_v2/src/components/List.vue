<template>
    <!-- 글 목록페이지  -->
    <div v-for="(blogData, index) in blogData" :key="index">
        <h5 @click="$router.push('/detail/' + index)">
            {{ blogData.title }}
        </h5>
        <p>{{ blogData.date }}</p>
    </div>
</template>

<script>
export default {
    name: "ListView",
    props: {
        blogData: Array,
    },
};
</script>

<style></style>
