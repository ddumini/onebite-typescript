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