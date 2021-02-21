function hello(name) {
  console.log('Hello ${}!');
}

hello('Danny');

// or

function hello(name) {
  return 'Hello ${}!';
}

const result = hello('Danny');
console.log(result)
