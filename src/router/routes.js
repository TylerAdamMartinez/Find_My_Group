
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/map', component: () => import('pages/map.vue') },
      { path: '/my_account', component: () => import('pages/my_account.vue')},
      { path: '/login', component: () => import('pages/login.vue')}
    ]
  },
  
  {
    path: '/map',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/map.vue') },
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/my_account', component: () => import('pages/my_account.vue') }
    ]
  },

  {
    path: '/my_account',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/my_account.vue') },
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/map', component: () => import('pages/map.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
