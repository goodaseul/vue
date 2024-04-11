<template>
    <!-- $route == 현재 url정보 담겨져있음 -->
    <!-- {{ $route.params.id }} -->
    <h4>상세페이지</h4>
    <div>
        <h5>{{ blogData[$route.params.id].title }}</h5>
        <p>{{ blogData[$route.params.id].content }}</p>
        <p>{{ blogData[$route.params.id].date }}</p>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "DetailView",
    props: {
        blogData: Array,
    },
};
</script>

<style></style>
