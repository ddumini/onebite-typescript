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