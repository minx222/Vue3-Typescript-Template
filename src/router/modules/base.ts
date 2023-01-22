export const Root = {
  path: '/',
  redirect: '/home',
  name: 'root'
}

export const BaseRouters: AppRouteRaw[] = [
  {
    path: '/home',
    name: 'homeView',
    component: () => import('@/views/HomeView.vue'),
    meta: {}
  }
]
