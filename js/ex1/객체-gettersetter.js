//getter 함수는 특정값을 조회할때마다
//setter 함수는 특정값을 설정할때마다 value를 가져와서 설정

//getter 함수

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다.');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5; // numbers의 b의 값을 바꿔준것
console.log(numbers.sum)


//setter 함수

const dog = {
  _name: '멍멍이',
  set name(value) {
    console.log('이름이 바뀝니다..' + value);
    this._name = value;
  }
}

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name)

//getter와 setter 혼용

const dog = {
  _name: '멍멍이',
  get name() {
    console.log('_name을 조회합니다..');
    return this._name;
  }
  set name(value) {
    console.log('이름이 바뀝니다..' + value);
    this._name = value;
  }
}

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name)


// 혼용 예제 2
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  }
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum); // 결과값 3 
numbers.a = 5
numbers.b = 7
numbers.a = 9
console.log(numbers.sum); // 결과값 16
