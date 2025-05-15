// 인터페이스의 확장

interface Animal { // 타입 별칭어어도 확장 가능
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: "Hello"; // 다시 정의하려면 원본 프로퍼티 타입의 서브타입이어야 함
  name: string;
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 2,
  isBark: true,
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
}

const dogCat: DogCat = {
  name: "",
  age: 2,
  isBark: true,
  isScratch: true,
}

