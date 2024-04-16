import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name: "daseul",
            age: 20,

            likes: [10, 20, 30],
            likeClick: true,
        };
    },
    //데이터 수정방법 정의
    mutations: {
        nameChange(state) {
            state.name = "Love you";
        },
        ageChange(state, payload) {
            state.age += payload;
        },
        likeActive(state, payload) {
            console.log(state, payload);
            if (state.likeClick == true) {
                state.likes++;
                state.likeClick = false;
            } else {
                state.likes--;
                state.likeClick = true;
            }
        },
    },
});

export default store;
