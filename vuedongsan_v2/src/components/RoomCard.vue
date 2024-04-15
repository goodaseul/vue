<template>
    <div>
        <img class="room-img" :src="onerooms.image" alt="원룸 사진" />
        <!-- custom event -->
        <h4 @click="$emit('openModal', onerooms.id)">
            {{ onerooms.title }}
        </h4>
        <p>{{ onerooms.price }}</p>
        <!-- custom event -->
        <button @click="$emit('increase')">허위 매물 신고</button>
        <span>신고수 : {{ reports }}</span>
    </div>
</template>

<script>
export default {
    name: "RoomCard",
    props: {
        onerooms: Object,
        reports: Array,
    },
    methods: {
        /* 함수 길어서 $emit사용시 this 주의
            함수(){
                this.$emit('openModal', this.onerooms.id)
            }
        */
    },
};
</script>

<style></style>
