import type { ProxyOptions } from 'vite'
type ProxyItem = {
  prefix: string
  target: string
  rewrite: boolean
}
type ProxyList = Array<ProxyItem>
const httpsRE = /^https:\/\//
type ProxyTargetList = Record<string, ProxyOptions>
// 加载服务代理
export function loaderProxy(list: ProxyList) {
  const proxyProperties: ProxyTargetList = {}
  for (const item of list) {
    const isHttps = httpsRE.test(item.target)
    proxyProperties[item.prefix] = {
      target: item.target,
      changeOrigin: true,
      ws: true,
      ...(item.rewrite
        ? {
            rewrite: (path) => path.replace(new RegExp(`^${item.prefix}`), '')
          }
        : {}),
      ...(isHttps ? { secure: false } : {})
    }
  }
  return proxyProperties
}
