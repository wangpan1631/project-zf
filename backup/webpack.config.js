//webpack是node写出来的，是node的语法
let path = require('path') //node的核心模块
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
let UglifyJsPlugin = require("uglifyjs-webpack-plugin")
let webpack = require('webpack')
module.exports = {
    optimization: { //优化项
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin() //压缩css (但是没有起作用?!)
        ]
      },
    devServer: { //开发服务器的配置
        port: 3003,
        progress: true,
        contentBase: './build'
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js', // 冒号8表示只显示8位hash值
        path: path.resolve(__dirname, 'build') //以当前目录生成一个build目录，必须是绝对路径
    },
    plugins: [ //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // minify: {// 压缩
            //     removeAttributeQuotes: true,//去掉双引号
            //     collapseWhitespace: true // 去掉空格变成一行
            // },
            hash: true //避免缓存 增加hash戳
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new webpack.ProvidePlugin({ //在每个模块中都注入$
            $: 'jquery'
        })
    ],
    module: { //模块
        rules: [
            // { //代码检查
            //     test: /\/js$/,
            //     // enforce: 'pre', //previous 强制前置执行
            //     use: {
            //         loader: 'eslint-loader',
            //         options: {
            //             enforce: 'pre'
            //         }
            //     },
            //     exclude: /node_modules/
            // },
            // {
            //     test: require.resolve('jquery'),
            //     use: 'expose-loader?$'
            // },
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options: { //用babel-loader 把es6->es5
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'), //包含src文件夹下的文件
                exclude: /node_modules/ //排除这个文件
            },
            {
                test: /\.css$/,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         insertAt: 'top'
                    //     }
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader'] // css-loader 负责解析 @import这种语法
            },
            {
                test: /\.less$/,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         insertAt: 'top'
                    //     }
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader', 'less-loader'] // css-loader 负责解析 @import这种语法
            }
        ]
    }
}