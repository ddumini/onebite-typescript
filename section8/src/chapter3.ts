// 맵드 타입
// interface로는 활용 불가능, type별칭으로 사용

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
  [key in keyof User]: boolean;
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: '김수민',
    age: 30,
  };
}
const user = fetchUser();
// user.id = 1; readonly라서 불가능

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...수정하는 기능
}

updateUser({
  // id: 1,
  // name: '김수민',
  age: 30,
});