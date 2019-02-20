#### webpack4.0基本配置
**安装**
```
npm i webpack webpack-cli -D
```
**小坑：npm安装的依赖的名字不能和package.json文件里的项目name一样**
#### webpack 可以进行0配置
-打包工具 ->输出的结果（js模块）
-打包支持我们的js的模块化

#### 手动配置webpack
在项目根目录手动创建一个webpack.config.js文件

**package.json文件里面的scripts是设置脚本的**

#### webpack内置的开发服务webpack-dev-server
参考在线资料：
https://www.cnblogs.com/penghuwan/p/6941616.html
https://segmentfault.com/a/1190000006964335?utm_source=tag-
它的作用并不是打包文件，而是生产了一个内存中的打包（webpack-dev-server生成的包并没有放在你的真实目录中,而是放在了内存中.）
webpack-dev-server是一个小型的Node.js Express服务器,它使用webpack-dev-middleware来服务于webpack的包,除此自外，它还有一个通过Sock.js来连接到服务器的微型运行时.

#### html-webpack-plugin

#### 样式处理
loader的特点，希望单一，
loader的用法，字符串只用一个loader，多个loader需要数组[]，如下：
webpack.config.js文件中的部分
```
module.exports = {
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```
loader也可以写成对象的格式，如下：
```
module.exports = {
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: [
                    {
                        loader: 'style-loader'
                    }, 'css-loader']
            }
        ]
    }
}
```
loader的属性，默认从右向左执行，从下向上执行
css-loader 负责解析@import这种语法
style-loader 负责把css插入到head标签中
less-loader（把less编译成css） 安装的命令是npm i less less-loader -D

#### webpack 提取css样式文件
webpack插件都是类
**extract-text-webpack-plugin**，只支持webpack 4以下提取css文件，webpack 4提取css文件的配置方法**mini-css-extract-plugin**

**autoprefixer**
 自动添加浏览器前缀
 安装：npm i postcss-loader autoprefixer -D

压缩css **optimize-css-assets-webpack-plugin**要配合**uglifyjs-webpack-plugin**一起使用

#### 转换ES6语法
主要使用babel
npm i babel-loader @babel/core @babel/preset-env -D

@babel/plugin-proposal-class-properties

#### 处理js语法及校验
**@babel/plugin-transform-runtime**
**@babel/runtime**
**@babel/polyfill**

#### eslint 代码检查
npm i eslint eslint-loader -D

#### 全局变量引入问题
expose-loader 暴露全局的loader，内联的loader
内联loader可以直接在代码里面使用：如：expose?$!jquery   ->   jq暴露一个全局的$出去
1. 使用expose-loader 暴露到window上
2. providePlugin 给每个模块提供一个$
3. 外部引入 （通过script引入），不打包

**loader 类型**
pre 前面执行的loader、normal 普通的loader、内联的loader、后置post loader

#### 图片处理
webpack打包图片
图片引入方式：
1. js中创建图片引入
需要安装file-loader，它的作用是默认会在内部生成一张图片到build目录下，并把生成的图片的名字返回回来
需要用import 或 require的方式把图片引入
2. 在css中通过background: url('')引入
3. <img src="" />
需要安装html-withimage-loader(webpack处理资源无往不利，但有个问题总是很苦恼，html中直接使用img标签src加载图片的话，因为没有被依赖，图片将不会被打包。这个loader解决这个问题，图片会被打包，而且路径也处理妥当。额外提供html的include子页面功能)
npm i html-withimg-loader -D
这个loader还支持另外一个令人兴奋的黑科技，支持#include引入子页面
```
<div>
    #include('./layout/top.html')
</div>
```
**url-loader**
它的作用是，我们可以对图片做一个限制，当图片小于多少K的时候，转化为base64，否则再用file-loader来产生真实的图片
npm i url-loader -D

#### 打包文件分类

####打包多页应用

####source-map


