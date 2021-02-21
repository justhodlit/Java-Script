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
  const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}
print(ironMan)
print(captainAmerica)
