// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { // 숫자형 enum
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김수민",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
}

const user2 = {
  name: "윤경애",
  role: Role.USER // 1 <- 일반 유저
}

const user3 = {
  name: "김규태",
  role: Role.GUEST // 2 <- 게스트
}

console.log(user1, user2, user3);