// 접근 제어자
// access modifier
// public : 모든 곳에서 접근 가능
// private : 클래스 내부에서만 접근 가능
// protected : 클래스 내부와 상속받은 클래스에서만 접근 가능

class Employee {
  // 필드
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자
  // 생성자에 접근 제어자를 달면 이름을 가진 필드를 자동으로 생성하기 때문에 정의하지 않아도 된다.
  constructor(private name: string, protected age: number, public position: string) {
    // 값도 자동으로 할당되기 때문에 생략 가능
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log('일을 합니다.');
  }
}

const employee = new Employee('김수민', 20, 'developer');
// employee.name = '김수민';
// employee.age = 20;
employee.position = 'developer';

console.log(employee);
