export const person = {
  name: 'Jane',
  location: 'Sydney',
  age: 26
};

export const sayHello = (name) => {
  return `Hello ${name}`
}

export const getAsyncPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
