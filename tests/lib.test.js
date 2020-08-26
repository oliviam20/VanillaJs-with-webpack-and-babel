import { sayHello } from '../src/lib';
// const sayHello = require('../src/lib')

test('Should render Hello Jenny', () => {
  expect(sayHello('Jenny')).toBe('Hello Jenny');
});
