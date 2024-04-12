import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name: "Jeong",
            age: 20,
            likes: 30,
            standard: 30,
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
            if (this.standard < state.likes) {
                state.likes -= 1;
            } else {
                state.likes++;
            }
        },
    },
});

export default store;
