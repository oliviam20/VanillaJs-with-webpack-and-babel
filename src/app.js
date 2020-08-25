let test = () => console.log('hello');

test();

import { person, sayHello, getAsyncPosts } from './lib';

console.log(person)

console.log(sayHello(person.name))

getAsyncPosts();