export default {
  application: {
    name: 'vue-admin'
  },
  server: {
    port: 5000,
    open: false
  },
  request: {
    baseUrl: '/api'
  },
  proxy: [
    {
      prefix: '/api',
      target: 'http://localhost:8090',
      rewrite: true
    }
  ],
  build: {
    outputDir: 'dist',
    gizp: true
  },
  router: {}
}
