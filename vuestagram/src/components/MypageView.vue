<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input @input="search($event.target.value)" placeholder="?" />
        <div class="post-header" v-for="follower in follower" :key="follower">
            <div class="profile" :style="{ backgroundImage: `url(${follower.image})` }"></div>
            <span class="profile-name">{{ follower.name }}</span>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
    name: "MypageView",
    props: {
        one: Number,
    },
    setup(props) {
        //데이터 생성, 조작가능
        //   methods,computed , watch 만들수있음 hook도 걸수있음

        let follower = ref([]); //나머지 자료형 0,1~ / array, object 도 넣어도 되긴함
        let followerOriginal = ref([]);
        // let test = reactive({ name: " daseul" }); //보통 array, object

        onMounted(() => {
            axios.get("/follower.json").then((a) => {
                follower.value = a.data;
                followerOriginal.value = [...a.data];
            });
        });

        function search(검색어) {
            let newFollower = followerOriginal.value.filter((a) => {
                return a.name.indexOf(검색어) != -1;
            });
            follower.value = [...newFollower];
        }

        let { one } = toRefs(props);
        console.log(one.value);

        // watch( one, ()=> {

        // })

        let re = computed(() => {
            return follower.value.length;
        });

        console.log(re.value);

        let store = useStore();
        console.log(store.state.name);

        return { follower, search };
    },
    data() {
        return {
            // followers: [
            //     { id: 0, name: "_Limvely", image: "https://picsum.photos/200?r=0" },
            //     { id: 1, name: "salmon_X", image: "https://picsum.photos/200?r=1" },
            //     { id: 2, name: "360noscope", image: "https://picsum.photos/200?r=2" },
            //     { id: 3, name: "Jeony_1", image: "https://picsum.photos/200?r=3" },
            //     { id: 4, name: "mihyeon", image: "https://picsum.photos/200?r=4" },
            // ],
        };
    },
};
</script>

<style scoped>
/* scoped : 해당 vue 파일에만 css 사용가능 */
</style>
