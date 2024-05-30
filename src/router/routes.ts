const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'HomeView',
        component: () => import('@/views/HomeView.vue'),
      }
    ]
  },
  {
    path: '/',
    name: 'AuthLayout',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'LoginView',
        component: () => import('@/views/LoginView.vue'),
      }
    ]
  }
]

export default routes