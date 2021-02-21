const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function() {
    console.log(this.sound);
  }
};

const cat = {
  name: '야옹이',
  sound: '야옹~'
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
catSay();
// 함수 밖으로 꺼내는 순간 this 라는 관계는 사라지게 됨.\
// 그 전에는 this는 상위에 존재하는 것을 지칭해줌
// 그렇기 때문에 const catSay 로 지정한 것을 출력하고자하면 에러가 나는것
// 여기서 catSay로 불러오는게 뭔지 지정이 안되어있기 때문, say라는 함수가 this로 엮여있는 기존 함수 밖으로 나왔기 때문
// 내부 function에서 화살표 function을 지정해줄수 없다
