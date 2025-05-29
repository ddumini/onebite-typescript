// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends string ? string : number;

// 분산을 방지하려면 대괄호로 감싸주면 된다.
// type StringNumberSwitch<T> = [T] extends [string] ? string : number;

let a : StringNumberSwitch<number>; 
let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>; // 타입 변수에 union타입을 할당하게 되면 '분산적인 조건부 타입'이 된다.
// 결과적으로 한 번은 number로, 한 번은 string으로 분리되어 전달되어 마지막에 union으로 묶이게 된다.
// c는 string | number 타입이 된다.

let d: StringNumberSwitch<boolean | number | string>; 
// 1단계 
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// false | true | false 니까
// number | string | number

// 3단계
// string | number

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean -> number | boolean
// never는 공집합으로 무시된다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// never | string | never -> string

/**
 * 
 */

