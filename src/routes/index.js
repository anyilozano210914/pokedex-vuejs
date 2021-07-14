import VueRouter from 'vue-router';

const routes = [
    {
        path: '/', 
        component: () => import('../screen/home/index.vue'),
        name: 'Home'
    },
    {
        path: '/pokemons', 
        component: () => import('../screen/list/index.vue'),
        name: 'List'
    },
    {
        path: '/favorites', 
        component: () => import('../screen/favorites/index.vue'),
        name: 'Favorites'
    }
];

const Router = new VueRouter({
    routes,
    mode: 'history',
    history: true
});

export default Router;