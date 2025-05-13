// 타입 추론 / 타입 넓히기

let a = 10;
// 타입 넓히기: 범용적으로 타입을 사용할 수 있도록 함
// (const가 아닌 let으로 선언함으로써 number 범용적으로 추론됨)
let b = 'hello';
let c = {
  id: 1,
  name: '김수민',
  profile: {
    nickname: 'ddumini',
  },
  urls: ['https://dduminipandamarket.netlify.app/'],
};

let {id, name, profile} = c;

let [one, two, three] = [1, 'hello', true];

function func(message = "hello") {
  return 'hello';
}


// 암시적 any타입 진화
let d; // any
d = 10; // any -> number
d.toFixed();
// d.toUpperCase(); error!
d = "hello"; // number -> string
d.toUpperCase();
// d.toFixed(); error! 

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
