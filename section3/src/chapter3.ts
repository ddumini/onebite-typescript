// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // Animal 타입이 Dog 타입의 super type - 업캐스팅
// dog = animal; // error! - 다운캐스팅

type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // error - 실제 타입에 작성되지 않은 프로퍼티가 작성되었을 때
}

// 초과 프로퍼티 피하려면
let book3: Book = programmingBook;

function func(book: Book) {
  func({
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'reactjs', //함수에서도 초과 프로퍼티 작동
  });
}

func(programmingBook);