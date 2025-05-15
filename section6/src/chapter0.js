// 클래스

let studentA = {
  name: '김수민',
  grade: 'A+',
  age: 20,
  study() {
    console.log('study');
  },
  introduce() {
    console.log('안녕하세요');
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('study');
  }

  introduce() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill} 공부를 합니다.`);
  }
}

let studentDeveloper = new StudentDeveloper('김수민', 'A+', 20, 'JavaScript');
console.log(studentDeveloper);

studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();


// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('김수민', 'A+', 20);
console.log(studentB);

studentB.study();
studentB.introduce();
