<template>
    <div>
        <img :src="oneroom.image" alt="" class="room_img" />
        <!-- <h4 @click="$emit('openModal', oneroom.id)">{{ oneroom.title }}</h4> -->
        <h4 @click="openModal">{{ oneroom.title }}</h4>
        <p>{{ oneroom.price }} 원</p>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        oneroom: Object,
    },
    methods: {
        openModal() {
            // this /props/data/$변수 쓸 때는 this
            this.$emit("openModal", this.oneroom.id);
        },
    },
};
</script>

<style></style>
