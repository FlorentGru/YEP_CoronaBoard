import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/Login.vue"
import HomePageComponent from "../views/HomePage.vue"
import AboutComponent from "../views/About.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "Login"
            }
        },
        {
            path: "/Login",
            name: "Login",
            component: LoginComponent
        },
        {
            path: "/HomePage",
            name: "HomePage",
            component: HomePageComponent
        },
        {
            path: "/About",
            name: "About",
            component: AboutComponent
        }
    ]
})