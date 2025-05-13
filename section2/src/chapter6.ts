// any
// 특정 변수의 타입을 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

// let num: number = 10;
// num = anyVar; // 런타임에 에러!

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

let num: number = 10;
// num = unknownVar; // 곧바로 에러.

if (typeof unknownVar === "number") { // 타입 정제 (타입 좁히기)
  num = unknownVar;
}

//공통점 : 두 경우 모두 모든 타입의 값을 변수로 할당 받을 수 있지만
// any는 타입 체크를 하지 않고 모든 타입의 값을 할당 받을 수 있지만
// unknown은 타입 체크를 해야 할당 받을 수 있음

// 변수로 저장할 값의 타입이 정확하지 않을 때에는 any타입보다는 unknown타입이 안전하다.