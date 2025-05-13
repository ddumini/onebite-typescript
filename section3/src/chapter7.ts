// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
    // console.log(value.toFixed());
    // console.log(value.toUpperCase()); 조건문 밖에서는 에러
  if (typeof value === 'number') { // 타입 가드
    console.log(value.toFixed());
  }else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if(value instanceof Date) { // Date는 instanceof연산자를 사용할 수 있다.
    console.log(value.getTime());
  } else if(value && "age" in value) { //Person은 instanceof 대신 in 사용, value가 null일 수 있기 때문에 value && 사용
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
