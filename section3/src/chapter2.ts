// Unknown 타입 (모든 타입의 super type)

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운 캐스팅
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// Never타입 (모든 타입의 sub type - 공집합)
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let num : number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운 캐스팅
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;

}

// Void타입 

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // 실제 반환이 undefined -> 업캐스팅과 같음.
  }
  
  let voidVar: void = undefined; // 업캐스팅

  // void는 undefined의 super type
}

// any타입 : 모든 타입의 super type이면서 never를 제외한 모든 타입의 sub type

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운 캐스팅이지만 허용

  undefinedVar = anyVar; // 다운 캐스팅 하거나 다운 캐스팅 되는 것 모두 허용
  // 타입 계층을 무시하고 모두 허용되기 때문에 사용하지 않는 것 권장.

  // neverVar = anyVAr // never타입은 공집합이기 때문에 그 어떤 타입도 다운캐스팅 할 수 없다.

}