<template>
    <div v-if="1 == 2">안녕하세요.</div>
    <div v-else-if="1 == 1">?</div>
    <div v-else>안녕히가세요.</div>

    <!-- <div class="start" :class="{ end: modalIs }"> -->
    <transition name="fade">
        <ProductModal @closeModal="modalIs = false" :onerooms="onerooms" :modalIs="modalIs" :userClickNum="userClickNum" />
    </transition>
    <!-- modalIs: false, userClickNum: 0, -->
    <!-- <div class="black_bg" v-if="modalIs == true">
        <div class="white_bg">
            <h4>{{ onerooms[userClickNum].title }}</h4>
            <img :src="onerooms[userClickNum].image" alt="" />
            <p>{{ onerooms[userClickNum].content }}</p>
            <p>{{ onerooms[userClickNum].price }}</p>

            <button @click="modalIs = false">X</button>

            <DiscountBanner />
        </div>
    </div> -->

    <!-- 
        <DiscountBanner :name="objs.name" :age="objs.age"></DiscountBanner>
         ==
        <DiscountBanner v-bind="objs"></DiscountBanner>
         ==
        <DiscountBanner :objs="objs"></DiscountBanner>
    -->
    <!-- <div class="discount">
        <h4>지금 결제하면 20% 할인 !</h4>
    </div> -->

    <div class="menu">
        <a v-for="i in menus" :key="i">{{ i }}</a>
        <!-- <a v-for="(a, i) in menus" :key="i">{{ i }}</a> -->
    </div>

    <DiscountBanner v-bind="objs" v-if="bannerIs == true"></DiscountBanner>

    <button @click="sortPrice">가격순 정렬</button>
    <button @click="sortBack">되돌리기</button>

    <button @click="sortPriceReverse">가격순 역순 정렬</button>
    <button @click="sortString">가,나,다 순 정렬</button>

    <!-- <div v-for="(product, index) in products" :key="product">
        <h4>{{ product }}</h4>
        <p>700 만원</p>
        <button @click="reports[index]++">허위매물신고</button>
        <span>신고수 : {{ reports[index] }}</span>
    </div> -->

    <!-- <div>
        <img src="./assets/room0.jpg" alt="" class="room_img" />
        <h4 @click="modalIs = true">{{ products[0] }}</h4>
        <p>700 만원</p>
        <button @click="increase">허위매물신고</button> <span>신고수 : {{ reports[0] }}</span>
    </div>

    <div>
        <img src="./assets/room1.jpg" alt="" class="room_img" />
        <h4>{{ products[1] }}</h4>
        <p>700 만원</p>
        <button @click="increase2">허위매물신고</button> <span>신고수 : {{ reports[1] }}</span>
    </div>

    <div>
        <img src="./assets/room2.jpg" alt="" class="room_img" />
        <h4>{{ products[2] }}</h4>
        <p>700 만원</p>
        <button @click="increase3">허위매물신고</button> <span>신고수 : {{ reports[2] }}</span>
    </div>

     -->

    <ProductCard
        @openModal="
            modalIs = true;
            userClickNum = index; //하단에 포문 index == $event
        "
        :oneroom="onerooms[index]"
        v-for="(oneroom, index) in onerooms"
        :key="index"
    />
    <!-- <div v-for="(oneroom, index) in onerooms" :key="oneroom">
        <img :src="oneroom.image" alt="" class="room_img" />
        <h4
            @click="
                modalIs = true;
                userClickNum = index;
            "
        >
            {{ oneroom.title }}
        </h4>
        <p>{{ oneroom.price }} 원</p>
    </div> -->
</template>

<script>
import data from "./assets/oneroom.js";
import DiscountBanner from "./DiscountBanner.vue";

import ProductModal from "./ProductModal.vue";
import ProductCard from "./ProductCard.vue";

export default {
    name: "App",
    data() {
        return {
            // UI현재상태
            modalIs: false,
            userClickNum: 0,

            // 데이터 보관함 (중요한 변수)
            objs: { name: "jeong", age: 20 },
            reports: [0, 0, 0],
            menus: ["Home", "About", "Shop"],
            products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
            oneroomsOrigin: [...data], // array 에 각각의 사본을 만들기위함
            onerooms: data,
            bannerIs: true,
        };
    },

    // 함수 만드는 곳
    methods: {
        increase() {
            this.reports[0] += 1;
        },
        increase2() {
            this.reports[1] += 1;
        },
        increase3() {
            this.reports[2] += 1;
        },
        sortPrice() {
            this.onerooms.sort(function (a, b) {
                return a.price - b.price;
            });
        },
        sortBack() {
            this.onerooms = [...this.oneroomsOrigin];
            // this.onerooms = this.oneroomsOrigin; // > 값을 공유해주세요. origin 과 sort한 data랑 같아지게
        },
        sortPriceReverse() {
            this.onerooms.sort(function (a, b) {
                return b.price - a.price;
            });
        },
        sortString() {
            this.onerooms.sort(function (a, b) {
                if (a.title < b.title) return -1;
                else if (a.title == b.title) return 0;
                else return 1;
            });
        },
    },
    // lifecycle hook
    created() {
        // html생성 전 서버에 데이터만 가지고 오는
    },
    mounted() {
        setInterval(() => {}, 3000);
    },

    components: {
        // 자유작명 : import한 컴포넌트
        DiscountBanner: DiscountBanner,
        ProductModal,
        ProductCard,
    },
};
</script>

<style>
body {
    margin: 0;
}
div {
    box-sizing: border-box;
}

.black_bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white_bg {
    width: 100%;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
}

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

.start {
    opacity: 0;
    pointer-events: none;
    transition: all 1s;
}
.end {
    opacity: 1;
    pointer-events: all;
}
.fade-enter-from {
    /* opacity: 0; */
    transform: translateY(-100%);
    pointer-events: none;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {
    /* opacity: 1; */
    transform: translateY(0);
    pointer-events: all;
}

.fade-leave-from {
    opacity: 1;
    pointer-events: all;
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opacity: 0;
    pointer-events: none;
}
</style>
