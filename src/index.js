let str = require('./a.js');
console.log('---data----', str)
require('./index.css')
require('./index.less')

let fn = () => {
    console.log('---fn--')
}
fn();

class A {
    a = 1
}