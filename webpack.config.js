//webpack是node写出来的，是node的语法
let path = require('path') //node的核心模块
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //以当前目录生成一个dist目录，必须是绝对路径
    },
}