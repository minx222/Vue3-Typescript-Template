const modules: Record<string, any> = import.meta.globEager('./modules/**/*.ts')

const routers: Array<AppRouteRaw> = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key]
  let modList: Array<AppRouteRaw> = []
  for (const moduleskey in mod) {
    modList = modList.concat(mod[moduleskey])
  }
  routers.push(...modList)
})

// 根据子路由，搜索父路由
export const treeRoutersSearch = (
  path: string,
  searchRouter: Array<AppRouteRaw> | undefined = [...routers]
) => {
  let co = 1
  // 深拷贝静态路由
  let router: Array<AppRouteRaw> | undefined = [...searchRouter]
  // 父index
  let parent = -1
  // path 切割
  const paths = path.split('/').splice(1, path.split('/').length - 1)
  let count = 0
  // 搜索返回的数组
  const treeRouters: Array<AppRouteRaw> = []
  // 中间router 变量，用来深拷贝路由
  let temp: any = {}
  // 当搜索搜到底时结束
  while (router) {
    co++
    if (co > 12) break
    for (const item of router) {
      if (Array.isArray(item)) {
        router = item
        continue
      }
      if (item.path == '/') {
        router = item.children
        continue
      }
      if (item.path.replace('/', '') === paths[count]) {
        temp = { ...item }
        temp.parent = parent++
        treeRouters.push(temp)
        router = item.children
        count++
        break
      }
    }
  }
  // 把父路由的前缀加到子前缀
  for (let i = 0; i < treeRouters.length; i++) {
    if (
      treeRouters[i].parent === -1 &&
      treeRouters[i].path.search('/') === -1
    ) {
      treeRouters[i].path = '/' + treeRouters[i].path
    }
    if (
      treeRouters[i].path.search('/') !== -1 &&
      treeRouters[i].parent !== -1
    ) {
      treeRouters[i].path =
        treeRouters[treeRouters[i].parent as number].path +
        '/' +
        treeRouters[i].path
    } else if (
      treeRouters[i].path.search('/') === -1 &&
      treeRouters[i].parent !== -1
    ) {
      treeRouters[i].path =
        treeRouters[treeRouters[i].parent as number].path +
        '/' +
        treeRouters[i].path
    }
  }
  return treeRouters
}
export { routers }
