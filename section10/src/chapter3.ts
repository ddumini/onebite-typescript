// Exclude<T, U>
// 제외하다, 추방하다
// T에서 U를 제거하는 타입

// Exclude을 직접 구현
type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 3단계
// string

type A = Exclude<string | boolean, boolean>;

// Extract<T, U>
// 추출하다
// T에서 U를 추출하는 타입

// Extract<T, U>
// T에서 U를 추출하는 타입

// Extract을 직접 구현
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;


// ReturnType<T>
// 함수의 반환값 타입을 추출하는 타입

function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

// ReturnType을 직접 구현
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
// T에 함수 타입만 들어가도록 제약, 반환값은 R로 추론

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;




