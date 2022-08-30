### vue3+Ts+vite项目基础模板

> node版本推荐 v18.6.0

> 安装yarn：`npm install -g yarn --registry https://registry.npm.taobao.org`

#### 封装内容
- vue-router
- pinia
- axios 
- less
- 路径别名 `@/`映射`./src`
- less 全局配置
- 路由拦截
- 请求/响应拦截
- 代理跨域
- hooks 自动引入
- 对 index.html 注入动态数据
- 使用 gzip 或者 brotli 来压缩资源
- pinia 持久化 pinia-plugin-persist
- 常用工具库，复用的uview组件方法库
- dayjs
- 自动按需引入组件

#### 安装依赖
`npm install`或者`yarn install`

#### 启动项目

- 开发环境
`npm run dev`或`yarn run dev`

- 测试环境
`npm run dev:test`或`yarn run dev:test`

- 正式环境
`npm run dev:pro`或`yarn run dev:pro`

#### 打包项目
`npm run build`或`yarn run build`
