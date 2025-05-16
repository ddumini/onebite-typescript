// 제네릭 : 일반적인, 포괄적인

// 제네릭 함수 
// <T> : 타입변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();
if (typeof num === 'number') {
  num.toFixed();
}

let bool = func(true);

let str = func('string');

let arr = func<[number, number, number]>([1, 2, 3]);