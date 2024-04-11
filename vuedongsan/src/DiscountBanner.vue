<template>
    <div class="discount">
        <h4>지금 결제하면 {{ bannerNum }} 할인 !</h4>
    </div>
</template>

<script>
export default {
    name: "DiscountBanner",
    data() {
        return {
            bannerNum: 10,
        };
    },
    mounted() {
        let interval = setInterval(() => {
            if (this.bannerNum > 0) {
                this.bannerNum--;
            } else {
                clearInterval(interval);
                this.bannerNum = 0;
            }
        }, 1000);
    },
};
</script>

<style>
.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>
