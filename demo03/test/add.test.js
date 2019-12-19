var add = require('../src/add.js');
var expect = require('chai').expect;

describe('add-加法函数的测试', function() {
    // only是表示只执行当前一个测试用例 (如果有多个only用例，则only的都会执行)
    // multiply.test.js中的用例也会受影响
    it.only('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('任何数加0应该等于自身', function() {
        expect(add(1, 0)).to.be.equal(1);
    });
});