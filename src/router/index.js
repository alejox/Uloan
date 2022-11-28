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
  {
    path: '/mycredit',
    name: 'MyCredit',
    component: () => import('../views/credits/MyCredit.vue'),
  },
  {
    path: '/mycredits',
    name: 'MyCredits',
    component: () => import('../views/credits/MyCredits.vue'),
  },
  {
    path: '/creditpay',
    name: 'CreditPay',
    component: () => import('../views/credits/CreditPay.vue'),
  },
  {
    path: '/credit',
    name: 'Credit',
    component: () => import('../views/creditApply/Index.vue'),
  }, 
  {
    path: '/creditApply',
    name: 'CreditApply',
    component: () => import('../views/creditApply/CreditApply.vue'),

  }, 
  {
    path: '/creditSuccess',
    name: 'CreditSuccess',
    component: () => import('../views/creditApply/CreditSuccess.vue'),
  }, 
  {
    path: '/newPay',
    name: 'NewPay',
    component: () => import('../views/credits/NewPay.vue'),
  }, 
  {
    path: '/verifyPay',
    name: 'VerifyPay',
    component: () => import('../views/credits/VerifyPay.vue'),
  }, 
  {
    path: '/simulateCredit',
    name: 'simulateCredit',
    component: () => import('../views/simulateCredit/Index.vue'),
  }, 
  {
    path: '/simulateCreditApply',
    name: 'simulateCreditApply',
    component: () => import('../views/simulateCredit/SimulateCreditApply.vue'),
  }, 
  {
    path: '/simulateSuccess',
    name: 'SimulateSuccess',
    component: () => import('../views/simulateCredit/SimulateSuccess.vue'),
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
