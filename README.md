# react实现Cnodejs社区

##说明
采用react+react-router+redux三个基础来构建单页应用. 辅助配以sass+autoprefixer构建css样式. 纯静态文件跨域调用Cnodejs社区公共接口(感谢!)

##用法

#说明
src下为项目源文件, assets为第三方静态资源(fonts等), dev的时候不打包进来（加快编译速度)。 build时候会把assets打包。 
#下载安装依赖
```
npm install
```
#开发模式
```
npm run dev
```
#更新静态资源
```
npm run static
```

#打包发布资源
```
npm run build
```
