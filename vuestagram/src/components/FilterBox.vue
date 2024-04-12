<template>
    <!-- <span>{{ filter }}</span> -->
    <div class="filter-item" :class="filter" :style="`background-image : url(${UploadImg})`">
        <button @click="fire"><slot> </slot></button>
    </div>
</template>

<script>
export default {
    name: "FilterBox",
    data() {
        return {
            msg: "hello",
        };
    },
    props: {
        UploadImg: Image,
        filter: String,
    },
    methods: {
        fire() {
            this.emitter.emit("filterChange", this.filter);
        },
    },
};
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
