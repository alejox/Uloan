import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/Index.vue'),
  }, 
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../views/auth/SignIn.vue'),
  }, 
  {
    path: '/signInCode',
    name: 'SignInCode',
    component: () => import('../views/auth/SignInCode.vue'),
  }, 
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue'),
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
