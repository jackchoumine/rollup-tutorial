# rollup 打包

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
