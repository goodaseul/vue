import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            name: "Jeong",
            age: 20,
            likes: 30,
            clickLike: false,
            more: {},
        };
    },
    mutations: {
        setMore(state, data) {
            state.more = data;
        },
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
    actions: {
        dataPull(context) {
            axios.get("https://codingapple1.github.io/vue/more0.json").then((instadata) => {
                // console.log(instadata.data);
                context.commit("setMore", instadata.data);
                // context == $store
            });
        },
    },
});

export default store;
