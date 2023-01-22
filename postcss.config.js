module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31'
      ],
      grid: true
    },
    'postcss-pxtorem': {
      rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      // 转换的属性
      propList: ['*'],
      unitPrecision: 5,
      mediaQuery: true,
      selectorBlackList: ['.norem'] // 过滤掉 .norem 开头的 class，不进行转换
    }
  }
}
