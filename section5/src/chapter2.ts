// 선언 합침

// interface 선언은 중복 선언이 가능하며 합쳐짐
// 중복 정의를 하려면 타입을 동일하게 맞춰야 함 (서브타입 x)

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 20,
}

// 모듈 보강시 사용 예시

interface Lib {
  a: number;
  b: number;
} // 라이브러리에 이미 정의된 내용

interface Lib {
  c: string;
} // 모듈 보강

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello"
}