// let str = require('./a.js');
// console.log('---data----', str)
// require('./index.css')
// require('./index.less')

// let fn = () => {
//     console.log('---fn--')
// }
// fn();

// class A {
//     a = 1
// }

// -----------------------line-------------------------

// import $ from 'jquery';//在每个模块中引入$，不需要单独引入
console.log('---jq1--', $);//在每个模块中引入$，不需要单独引入

// -----------------------line-------------------------
import './index.css';
import img from './images/img01.jpg'; //把图片引入，返回一个新的图片地址
let image = new Image();
// image.src="./images/img01.jpg"; error 就是一个普通的字符串
image.src = img;
document.body.appendChild(image)