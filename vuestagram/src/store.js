import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name: "Jeong",
            age: 20,
            likes: [30, 40, 50],
            clickLike: [false, false, false],
        };
    },
    mutations: {
        nameChange(state) {
            state.name = "Jisoo";
        },
        ageChange(state, payload) {
            state.age += payload;
        },
        like(state) {
            if (state.clickLike == true) {
                state.likes--;
                state.clickLike = false;
            } else {
                state.likes++;
                state.clickLike = true;
            }
        },
    },
});

export default store;
