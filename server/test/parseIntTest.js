const assert = require('assert');

describe('parseIntTest',()=>{
    it('8進数への変換のテスト',()=>{
        assert(parseInt('0x10') === 16);
    });

    it('10真数への変換のテスト',()=>{
        assert(parseInt('010') === 10);
    }); 
})