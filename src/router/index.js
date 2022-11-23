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
  {
    path: '/registerCreate',
    name: 'RegisterCreate',
    component: () => import('../views/auth/RegisterCreate.vue'),
  }, 
  {
    path: '/registerPassword',
    name: 'RegisterPassword',
    component: () => import('../views/auth/RegisterPassword.vue'),
  }, 
  {
    path: '/registerSuccess',
    name: 'RegisterSuccess',
    component: () => import('../views/auth/RegisterSuccess.vue'),
  }, 
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import('../views/auth/ForgotPassword.vue'),
  }, 
  {
    path: '/forgotCode',
    name: 'ForgotCode',
    component: () => import('../views/auth/ForgotCode.vue'),
  }, 
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: () => import('../views/auth/ResetPassword.vue'),
  }, 
  {
    path: '/passwordSuccess',
    name: 'PasswordSuccess',
    component: () => import('../views/auth/PasswordSuccess.vue'),
  }, 
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Index.vue'),
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
