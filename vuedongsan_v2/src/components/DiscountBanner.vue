<template>
    <div class="discount">
        <h4>지금 결제하면 {{ percentage }}% 할인 @!</h4>
    </div>
</template>

<script>
export default {
    name: "DiscountBanner",
    props: {
        percentage: Number,
    },
};
</script>

<style></style>
