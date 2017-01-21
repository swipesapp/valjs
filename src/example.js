import 'babel-polyfill';
import val, { string, number, array, object, any, date } from './index';
val.setGlobal('log', true);

date.require().test();

console.log('test1');
object.includes(object.as({
  hello: object.of(string.eq('world'))
})).test({
  two: {
    hello: {
      test: 'world'
    }
  }
});

console.log('test2');
object.of(1, 2, 3).test({
  one: 1,
  two: 4
})
