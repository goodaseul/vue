<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @input="searchCorrect($event.target.value)" />
        <div class="post-header" v-for="(followers, index) in followers" :key="index">
            <div class="profile" :style="{ backgroundImage: `url(${followers.image})` }"></div>
            <span class="profile-name">{{ followers.name }}</span>
        </div>
    </div>
</template>

<script>
// 실시간 렌더링 되기 위해서 ref 사용
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import axios from "axios";
//composition API 에서 vuex store 사용법
import { useStore } from "vuex";
export default {
    name: "MyPage",
    data() {
        return {};
    },
    props: {
        one: Number,
    },

    setup(props) {
        // 데이터 만들 떄 두개사용 ref([나머지 자료형]) , reactive({array, object})
        let followers = ref([]);
        let followersOrigin = ref([]);

        let test = reactive({ name: "정다슬 " });
        test;
        // props;  실시간 반영 안됨
        // let one = ref(props);
        let { one } = toRefs(props);
        // console.log(one.value);

        watch(one, () => {});

        // 마운티드 하기 전에 된 거기 때문에
        // let result = computed(() => {
        //     return followers.value.length;
        // });

        // onBeforeUpdate(() => {
        //     console.log(result.value);
        // });

        let store = useStore();
        console.log(store.state.name);
        // console.log(store.commit());

        onMounted(() => {
            axios.get("/follower.json").then((a) => {
                followers.value = a.data;
                followersOrigin.value = [...a.data];
            });
        });

        function searchCorrect(val) {
            let correctVal = followersOrigin.value.filter((a) => {
                return a.name.indexOf(val) != -1;
            });
            followers.value = [...correctVal];
        }

        // 검색기능 만들기

        // function searchCorrect(val) {
        //     // val;
        //     let newFollower = followersOrigin.value.filter((a) => {
        //         return a.name.indexOf(val) != -1;
        //     });
        //     followers.value = [...newFollower];
        //     // console.log(val, followers.index.name);
        // }

        return { followers, searchCorrect };
    },
};
</script>

<style></style>
