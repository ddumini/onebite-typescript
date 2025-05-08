// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '뚜미니',
  nickname: 'ddumini',
  birth: '1995.01.08',
  bio: '안녕하세여',
  location: '신정',
};

let user2: User = {
  id: 1,
  name: '경시기',
  nickname: 'marco',
  birth: '1993.02.27',
  bio: '곤니찌와',
  location: '신림',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string] : string;
}
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 꼭 가져야 하는 요소 (추가 프로퍼티는 인덱스 시그니처의 타입과 일치하거나 호환해야함.)
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};