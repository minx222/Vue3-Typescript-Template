import type { RouteRecordRaw, RouteMeta } from 'vue-router'

type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

interface RouteMeta extends RouteMeta {
  icon?: string
  name?: string
}

declare global {
  interface AppRouteRaw extends RouteRecordRaw {
    name?: string
    menu?: boolean
    path: string
    redirect?: string
    meta: RouteMeta
    children?: AppRouteRaw[]
    power?: number
    component?: Component
    parent?: number
  }
}
