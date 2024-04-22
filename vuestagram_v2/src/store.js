import { createStore } from "vuex";
// axios
import axios from "axios";
import instaData from "./assets/data/instaData.js";

const store = createStore({
    state() {
        return {
            name: "daseul",
            age: 20,
            instaData: instaData,
            liked: [false, false, false],
            more: {},
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
            console.log(state.liked[payload]);
            // if (state.liked[payload] == undefined) {
            //     state.instaData[payload].likes++;
            //     state.liked[payload] = true;
            // }
            // console.log(state.instaData[payload].likes, payload);
            if (state.liked[payload] == false) {
                state.instaData[payload].likes++;
                state.liked[payload] = true;
            } else {
                state.instaData[payload].likes--;
                state.liked[payload] = false;
            }
        },
        // state 변경은 항상 mutations 에서 가능
        setMore(state, data) {
            state.more = data;
        },
    },
    // ajax 하는 곳 / 또는 오래 걸리는 작업들
    actions: {
        getData(context) {
            axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
                // state 변경은 항상 mutations 에서 가능
                context.commit("setMore", a.data);
            });
        },
    },
});

export default store;
