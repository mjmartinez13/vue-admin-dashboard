import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/Auth/SignIn";
import Recover from "../views/Auth/Recover";
import Register from "../views/Auth/Register";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/team",
            name: "about",
            component: Team
        },
        {
            path: "/signin",
            name: "signin",
            component: SignIn
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/recover",
            name: "recover",
            component: Recover
        }
    ]
});
