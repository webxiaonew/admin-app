import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
