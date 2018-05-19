const assert = require('assert');
const localmodule = require('../src/localmodule');
/*mochaのBDDインターフェースではdescribe(),it(),before(),after(),beforeEach(),afterEach()がある
 *TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():
 */
describe('local module',()=>{
    describe('helloSync',()=>{
        it('引数に応じて決まった文字列を返すこと',()=>{
            assert(localmodule.helloSync('taro') === 'Hello taro');
        });

        it('引数に応じて決まった文字列を返すこと(fail)',()=>{
            assert(localmodule.helloSync('taro') === 'Hello taro');
        });
    });

    describe('hello',()=>{
        it('引数に応じてコールバック内で決まった文字列になること',(done)=>{
            localmodule.hello('hanako',(name)=>{
                assert(name === 'Hello hanako');
                done();
            });
        });
    });
})