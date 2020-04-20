import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/Login.vue"
import SecureComponent from "../views/HomePage.vue"

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
            component: SecureComponent
        }
    ]
})