// 타입 단언
//type assertion

type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = '김수민';
person.age = 31;

type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never; // 10은 number, never는 모든 타입의 subtype 
let num2 = 10 as unknown; // number와 전체집합 -> A가 B의 subtype

// let num3 = 10 as string; 교집합이 없어서 타입 단언 실패
let num3 = 10 as unknown as string; // 다중 단언 - 좋은 방법은 아님

// const 단언
let num4 = 10 as const; // const로 선언한 것과 동일한 효과

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const; // 읽기 전용 property가 됨

// cat.name = ''

// Non Null 단언
// 확실할 때에만 사용 권장

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '김수민'
}

const len: number = post.author!.length; // !붙이면 author라는 값이 null이나 undefined가 아니라고 믿도록 함