const ironMan = {
  name: 'Tony Stark',
  actor: 'Robert Downey Jr',
  alias: 'iron man'
}

const captainAmerica = {
  name: 'Steve Rogers',
  actor: 'Chris Evans',
  alias: 'Captain America'
}

console.log(ironMan)
console.log(captainAmerica)

function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
} // 이전 방식을 훨씬 깔끔하게 만드는 방법(비구조할당)
print(ironMan)
print(captainAmerica)

function print(alias, name, actor) {
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
} // 위에 것을 더 깔끔하게 만드는 방법(비구조할당)
print(ironMan)
print(captainAmerica)

const { name } = ironMan;
console.log(name)
// 이런식으로도 비구조
