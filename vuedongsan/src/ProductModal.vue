<template>
    <div class="black_bg" v-if="modalIs == true">
        <div class="white_bg">
            <h4>{{ onerooms[userClickNum].title }}</h4>
            <img :src="onerooms[userClickNum].image" alt="" />
            <p>{{ onerooms[userClickNum].content }}</p>
            <!-- 
                <input @input="inputValue = $event.target.value" />
                 ==
                위에거 축약형  
                v-model input 에 쓰면 데이터에 넣어줌
                <textarea v-model.number="inputValue" name="" id="" cols="30" rows="10"></textarea>
            -->
            <input v-model.number="inputValue" v-on:keyup.space="spaceBlock" />
            <input type="range" min="1" max="12" />

            <p>{{ inputValue }} 개월 선택 {{ inputValue * onerooms[userClickNum].price }} 원</p>
            <p>{{ onerooms[userClickNum].price }}</p>
            <button @click="closeModal">X</button>

            <DiscountBanner />
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductModal",
    data() {
        return {
            inputValue: 1, // 초기값 중요 ! ^^ 문자입력받을거면 문자 초기값 해야함
        };
    },
    updated() {
        if (this.inputValue == 2) {
            alert("2는 안된다..쿨럭");
            this.inputValue = 3;
        }
    },
    watch: {
        // 함수명을 데이터명으로
        /* a== 변경될 inputValue/ b == 변경되기전 inputValue
            inputvalue 데이터가 변할 때마다 여기 있는 코드 실행됨 */
        inputValue(a, b) {
            a, b;
            if (isNaN(a)) {
                console.log("문자 쓰지마시오.");
                this.inputValue = 1;
            }
        },
    },
    props: {
        onerooms: Array,
        modalIs: Number,
        userClickNum: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
        spaceBlock: function () {
            alert("space 눌렀니..?");
            this.inputValue = 1;
        },
    },
};
</script>

<style></style>
