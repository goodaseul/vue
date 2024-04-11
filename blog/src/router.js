import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List";
import BlogMain from "./components/BlogMain";
import Detail from "./components/Detail";
import Author from "./components/Author";
import Comment from "./components/Comment";

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id",
        component: Detail,
        // props: true,
        children: [
            {
                // / 는 홈부터라는 것 children 빼줘야함
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ],
    },
    {
        path: "/",
        component: BlogMain,
    },
    // {
    //error 페이지 위에 우선순위에 맞게 걸림
    //     path: "/:anything(.*)",
    //     component: Error,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// export { routes };

export default router;
