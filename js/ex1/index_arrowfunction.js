const add = (a, b) => {
  return a + b;
}
const sum = add(1,2)
console.log(sum);

const add = (a,b) => a+b;
//1번째거 짧게 표현

const hello = (name) => {
  console.log('hello, ${name}!');
}

hello('Danny');
// 두번째꺼 에러남... ${name} 똑같이 했는데 이부분에서 에러가 남
