var expect = require('chai').expect;

describe("beforeEach-async异步示例-beforeEach-async.test.js", function(){
    var foo = false;

    // 异步操作，就加上done参数，在完成后调用done
    beforeEach(function(done){
        setTimeout(function(){
            foo = true;
            done();
        }, 500);
    });

    it("全局变量异步修改应该成功", function(){
        expect(foo).to.be.equal(true);
    });
});
