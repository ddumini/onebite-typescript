// object
// 객체 리터럴 타입
let user: {
  id?: number; //선택적 프로퍼티 optional property
  name: string;
} = {
  id: 1,
  name: "뚜미니",
};

user = {
  name: "마르코"
}

let config: {
  readonly apiKey: string; // 읽기 전용 property
} = {
  apiKey: "MY API KEY",
}