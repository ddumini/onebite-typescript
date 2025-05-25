// 인덱스드 엑세스 타입

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]['author']) {
  // []이 부분을 인덱스라고 함, 내부 문자열은 타입이기 때문에 스트링 리터럴로 표현, 중첩도 가능
  console.log(`/${author.name}-${author.id}`);
}
const post: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '김수민',
    age: 30,
  },
};

printAuthorInfo(post.author);


// 튜플타입에서 인덱스드 엑세스
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];