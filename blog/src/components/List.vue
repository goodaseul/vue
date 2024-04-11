<template>
    <div v-for="(blogData, blogDataIndex) in blogData" :key="blogDataIndex">
        <h5 @click="$router.push(`/detail/${blogDataIndex}`)">{{ blogData.title }}</h5>
        <p>{{ blogData.content }}</p>
        <p>{{ blogData.date }}</p>
    </div>

    <!-- <div>
        <h5 @click="$router.push('/detail/0')">{{ blogData[0].title }}</h5>
        <p>{{ blogData[0].content }}</p>
        <p>{{ blogData[0].date }}</p>
    </div>
    <div>
        <h5 @click="$router.push('/detail/1')">{{ blogData[1].title }}</h5>
        <p>{{ blogData[1].content }}</p>
        <p>{{ blogData[1].date }}</p>
    </div>
    <div>
        <h5 @click="$router.push('/detail/2')">{{ blogData[2].title }}</h5>
        <p>{{ blogData[2].content }}</p>
        <p>{{ blogData[2].date }}</p>
    </div> -->
</template>

<script>
export default {
    name: "ListView",

    props: {
        blogData: Array,
    },
    methods: {},
};
</script>

<style></style>
