// void 
// void -> 공허, 아무것도 없다.
// 아무 것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void{ // 함수에서 아무 값도 반환하지 않을 때
  console.log('hello');
}

let a: void;
// a = 1; // error
// a = "hello"; // error
// a = {}; // error
a = undefined;

// never 
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never { // 정상적으로 종료될 수 없는 함수
  while(true) {}
}

function func4(): never {
  throw new Error();
}


let b: never;
// b = 1; // error
// b = ""; // error
// b = {}; // error
// b = null; // error
// b = undefined; // error
let anyVar: any;
// b = anyVar; // error