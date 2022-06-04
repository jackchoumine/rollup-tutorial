# rollup 入门

[rollup](https://rollupjs.org/) 号称是下一代模块打包器，由 [Svelte](https://svelte.dev/) 的作者在 2015 年开发，专注于 JS 打包，通过其插件，也能处理其他文件。

相比 webpack 复杂的配置，其配置简单，打包后的代码体积很小，因此生态系统迅速发展壮大。vue、react 等知名 JS 库，都是用它打包。

## rollup 的优势

1. 配置简单

2. 可将 JS 或者 html 作为入口

3. tree-shaking 优化

4. 多入口，多格式输出

5. 打包输出的代码可读性高

6. ……

通过插件系统，可处理其他文件。

## 基础配置

### 使用命令打包

```json
{
  "scripts": {
    "iife": "rollup ./src/main.js --file ./dist/bundle.js --format iife"
  }
}
```

`--file` 指定输出文件，`--format`指定输出格式，`./src/main.js` 是输入文件。

`src/main.js`

```js
import * as dom from './lib/dom.js'
import { formatHMS } from './lib/time.js'

// get clock element
const clock = dom.get('.clock')

if (clock) {
  console.log('initializing clock')

  // update clock every second
  setInterval(() => {
    clock.textContent = formatHMS()
  }, 1000)
}
```

`src/lib/dom.js`

```js
// fetch first node from selector
export function get(selector, doc = document) {
  return doc.querySelector(selector)
}

// fetch all nodes from selector
export function getAll(selector, doc = document) {
  return doc.querySelectorAll(selector)
}
```

`src/lib/time.js`

```js
// time formatting

// return 2-digit value
function timePad(n) {
  return String(n).padStart(2, '0')
}

// return time in HH:MM format
export function formatHM(d = new Date()) {
  return timePad(d.getHours()) + ':' + timePad(d.getMinutes())
}

// return time in HH:MM:SS format
export function formatHMS(d = new Date()) {
  return formatHM(d) + ':' + timePad(d.getSeconds())
}
```

打包输出`dist/bundle.js`

```js
;(function () {
  'use strict'

  function get(selector, doc = document) {
    return doc.querySelector(selector)
  }

  function timePad(n) {
    return ('' + n).padStart(2, '0')
  }

  function formatHM(d = new Date()) {
    return timePad(d.getHours() + ':' + timePad(d.getMinutes()))
  }

  function formatHMS(d = new Date()) {
    return formatHM(d) + ':' + timePad(d.getSeconds())
  }

  // get clock element
  const clock = get('.clock')

  if (clock) {
    console.log('initializing clock')
    // update clock every second
    setInterval(() => {
      clock.textContent = formatHMS()
    }, 1000)
  }
})()
```

输出代码可读性非常高。

> 其他一些命令

输出 sourceMap，便于调试：

`rollup ./src/main.js --file ./build/bundle.js --format iife --sourcemap`

`--sourcemap inline` 生成行内 sourceMap

监听文件变化，然后打包：

`rollup ./src/main.js --file ./build/bundle.js --format iife --watch --no-watch.clearScreen`

`--no-watch.clearScreen`不会清除控制台。

`--watch`可简写为`-w`。

[更多命令行配置](https://rollupjs.org/guide/en/#command-line-flags)

### 配置文件

默认名字：`rollup.config.js`

常用的核心配置：

```js
export default {
  // 核心选项
  input,     // 必须
  external,
  plugins,

  output: {  // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file,    // 必须
    format,  // 必须
    name,
    globals,

    // 额外选项
    paths,
    banner,
    footer,
    intro,
    outro,
    sourcemap,
    sourcemapFile,
    interop,

    // 高危选项
    exports,
    amd,
    indent
    strict
  },

  // 额外选项
  onwarn,

  // danger zone
  acorn,
  context,
  moduleContext,
  legacy
};
```

```js
export default {
  input: './src/main.js',
  output: {
    file: './build/bundle.js',
    format: 'iife',
    sourcemap: true, // 独立的sourcemap,
    // sourcemap: 'inline', // 行内sourcemap,
  },

  // 监听配置
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
    skipWrite: false, // Do not write files to disk when watching, 可提供打包速度
    clearScreen: false, // 不清除控制台打包输出信息
  },
}
```

打包命令：
`rollup -c -w` 或者`rollup --config -w`

可指定其他配置文件：

`rollup -c rollup.example.js`

> 指定构建环境

rollup 允许临时指定运行环境：

`npx rollup --config --environment VAR1,VAR2:value2,VAR3:x`

在配置文件中，可获取这些环境变量：

```bash
process.env.VAR1---true
process.env.VAR2---value2
process.env.VAR3---x
```

在配置文件中获取环境变量：

script：

`"iifeb": "rollup -c --environment production"`

```js
const isProduction = process.env.production

console.log(`running in ${isProduction ? 'production' : 'development'} mode`)

const sourcemap = isProduction ? false : true
```

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
|   es   |   esm --nodejs & browser    |
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
