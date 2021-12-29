# rollup 打包

## 目标

1. 打包一个多版本的 js 库
2. 打包一个 vue 按需导入的组件库
3. 打包一个 vue 项目
4. 打包一个 ts 库

## 打包输出的格式

`--format`简写`-f`

| option |            描述             |
| :----: | :-------------------------: |
|  iife  | 打包成立即执行函数 -browser |
|  es6   |   esm --nodejs & browser    |
|  cjs   |      commonJS - nodejs      |
|  umd   |  通用模块 browser & nodejs  |
|  amd   |        异步模块加载         |
| system |       systemJS module       |

`"rollup ./src/main.js -o ./dist/bundle.js --format es"`

## 配置文件

## 参考

[An Introduction to the Rollup.js JavaScript Bundler](https://www.sitepoint.com/rollup-javascript-bundler-introduction/)

[Rollup 打包工具的使用（超详细，超基础，附代码截图超简单）](https://juejin.cn/post/6844904058394771470)

[Building and publishing a module with TypeScript and Rollup.js](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396)

[The Ultimate Guide to Getting Started with the Rollup.js JavaScript Bundler](https://blog.openreplay.com/the-ultimate-guide-to-getting-started-with-the-rollup-js-javascript-bundler)
