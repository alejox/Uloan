import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/auth/Index.vue'),
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('@/views/auth/SignIn.vue'),
  },
  {
    path: '/signInCode',
    name: 'SignInCode',
    component: () => import('@/views/auth/SignInCode.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue'),
  },
  {
    path: '/registerCreate',
    name: 'RegisterCreate',
    component: () => import('@/views/auth/RegisterCreate.vue'),
  },
  {
    path: '/registerPassword',
    name: 'RegisterPassword',
    component: () => import('@/views/auth/RegisterPassword.vue'),
  },
  {
    path: '/registerSuccess',
    name: 'RegisterSuccess',
    component: () => import('@/views/auth/RegisterSuccess.vue'),
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/ForgotPassword.vue'),
  },
  {
    path: '/forgotCode',
    name: 'ForgotCode',
    component: () => import('@/views/auth/ForgotCode.vue'),
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: () => import('@/views/auth/ResetPassword.vue'),
  },
  {
    path: '/passwordSuccess',
    name: 'PasswordSuccess',
    component: () => import('@/views/auth/PasswordSuccess.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Index.vue'),
  },
  {
    path: '/mycredit',
    name: 'MyCredit',
    component: () => import('@/views/credits/MyCredit.vue'),
  },
  {
    path: '/mycredits',
    name: 'MyCredits',
    component: () => import('@/views/credits/MyCredits.vue'),
  },
  {
    path: '/creditpay',
    name: 'CreditPay',
    component: () => import('@/views/credits/CreditPay.vue'),
  },
  {
    path: '/credit',
    name: 'Credit',
    component: () => import('@/views/creditApply/Index.vue'),
  },
  {
    path: '/creditApply',
    name: 'CreditApply',
    component: () => import('@/views/creditApply/CreditApply.vue'),
  },
  {
    path: '/creditSuccess',
    name: 'CreditSuccess',
    component: () => import('@/views/creditApply/CreditSuccess.vue'),
  },
  {
    path: '/newPay',
    name: 'NewPay',
    component: () => import('@/views/credits/NewPay.vue'),
  },
  {
    path: '/verifyPay',
    name: 'VerifyPay',
    component: () => import('@/views/credits/VerifyPay.vue'),
  },
  {
    path: '/simulateCredit',
    name: 'simulateCredit',
    component: () => import('@/views/simulateCredit/Index.vue'),
  },
  {
    path: '/simulateCreditApply',
    name: 'simulateCreditApply',
    component: () => import('@/views/simulateCredit/SimulateCreditApply.vue'),
  },
  {
    path: '/simulateSuccess',
    name: 'SimulateSuccess',
    component: () => import('@/views/simulateCredit/SimulateSuccess.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Index.vue'),
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('@/views/profile/Data.vue'),
  },
  {
    path: '/dataWork',
    name: 'DataWork',
    component: () => import('@/views/profile/DataWork.vue'),
  },
  {
    path: '/dataSecurity',
    name: 'DataSecurity',
    component: () => import('@/views/profile/DataSecurity.vue'),
  },
  {
    path: '/autentication',
    name: 'Autentication',
    component: () => import('@/views/autentication/Index.vue'),
  },
  {
    path: '/autenticationCode',
    name: 'AutenticationCode',
    component: () => import('@/views/autentication/AutenticationCode.vue'),
  },
  {
    path: '/autenticationConfirmation',
    name: 'AutenticationConfirmation',
    component: () =>
      import('@/views/autentication/AutenticationConfirmation.vue'),
  },
  {
    path: '/autenticationChangeNumber',
    name: 'AutenticationChangeNumber',
    component: () =>
      import('@/views/autentication/AutenticationChangeNumber.vue'),
  },
  {
    path: '/autenticationNumber',
    name: 'AutenticationNumber',
    component: () => import('@/views/autentication/AutenticationNumber.vue'),
  },
  {
    path: '/autenticationNumberCode',
    name: 'AutenticationNumberCode',
    component: () =>
      import('@/views/autentication/AutenticationNumberCode.vue'),
  },
  {
    path: '/autenticationNumberConfirmation',
    name: 'AutenticationNumberConfirmation',
    component: () =>
      import('@/views/autentication/AutenticationNumberConfirmation.vue'),
  },
  {
    path: '/deactivate',
    name: 'Deactivate',
    component: () => import('@/views/autentication/Deactivate.vue'),
  },
  {
    path: '/deactivateConfirmation',
    name: 'DeactivateConfirmation',
    component: () =>
      import('@/views/autentication/DeactivateConfirmation.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/layouts/App.vue'),
    children:[
      {
        path:'/admin',
        name:'Admin-dashboard',
        component:()=> import('@/views/admin/dashboard/Index.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
