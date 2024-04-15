<template>
    <!-- 모달창 component -->
    <!-- custom event  $event 자식 데이터 사용가능 -->
    <transition name="fade">
        <RoomModal @closeModal="modalIs = $event" :modalIs="modalIs" :onerooms="onerooms" :clickId="clickId" />
    </transition>
    <!-- 메뉴 -->
    <nav class="menu">
        <a href="javascript:void(0);" v-for="menu in menus" :key="menu"> {{ menu }} </a>
    </nav>
    <!-- 배너 component-->
    <DiscountBanner :percentage="percentage" v-if="bannerIs == true" />
    <!-- 컨텐츠 component-->
    <!-- 가격순 정렬 -->
    <button @click="priceSort">가격 낮은순 정렬</button>

    <button @click="priceHighSort">가격 높은순 정렬</button>

    <button @click="ascending">가나다순 정렬</button>

    <button @click="redirect">되돌리기</button>

    <RoomCard
        @openModal="
            modalIs = true;
            clickId = index;
        "
        v-for="(oneroom, index) in onerooms"
        :key="index"
        :onerooms="onerooms[index]"
        :reports="reports[index]"
        @increase="increase(index)"
    />
</template>

<script>
import onerooms from "./assets/data/oneroom.js";
import DiscountBanner from "./components/DiscountBanner.vue";
import RoomModal from "./components/RoomModal.vue";
import RoomCard from "./components/RoomCard.vue";

export default {
    name: "App",
    data() {
        return {
            // products: ["역삼동 원룸", "천호동 원룸", "마포구 원룸"],
            // objs: { name: "Jeong", age: 30 },
            menus: ["Home", "Shop", "About"],
            reports: [0, 0, 0, 0, 0, 0],
            modalIs: false,
            bannerIs: true,
            onerooms: onerooms,
            oneroomsOrigin: [...onerooms],
            clickId: "",
            percentage: 5,
        };
    },
    methods: {
        increase(index) {
            this.reports[index]++;
        },
        // 낮은 순
        priceSort() {
            this.onerooms.sort((a, b) => {
                return a.price - b.price;
            });
        },
        // 높은 순
        priceHighSort() {
            this.onerooms.sort((a, b) => {
                return b.price - a.price;
            });
        },
        // 가나다순
        ascending() {
            this.onerooms.sort((a, b) => {
                if (a.title < b.title) return -1;
                else if (a.title == b.title) return 0;
                else return 1;
            });
        },
        // 되돌리기
        redirect() {
            this.onerooms = [...this.oneroomsOrigin];
        },
    },

    mounted() {
        //     setTimeout(() => {
        //         this.bannerIs = false;
        //     }, 2000);
        setInterval(() => {
            if (this.percentage == 0) {
                this.percentage = 0;
            } else {
                this.percentage--;
            }
        }, 1000);
    },
    components: {
        DiscountBanner,
        RoomModal,
        RoomCard,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a {
    color: white;
    padding: 10px;
    text-decoration: none;
}
img {
    width: 100%;
    margin-top: 40px;
}
body {
    margin: 0;
}
div {
    box-sizing: border-box;
}
.black-bg {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
}
.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}
.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
.fade-enter-from {
    opacity: 0;
    /* transform: translateY(); */
    top: -100%;
}
.fade-enter-active {
    transition: all 0.5s;
}
.fade-enter-to {
    opacity: 1;
    top: 0;
}
.fade-leave-from {
    opacity: 1;
    top: 0;
}
.fade-leave-active {
    transition: all 0.5s;
}
.fade-leave-to {
    opacity: 0;
    top: 100%;
}
</style>
