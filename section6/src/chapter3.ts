// 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// interface는 무조건 public 필드만 가질 수 있음
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move() {
    console.log(` ${this.moveSpeed}속도로 이동!`);
  }
}