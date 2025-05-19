// 프로미스

const promise = new Promise<number>((resolve, reject) => { // 타입 변수를 생략하면 기본적으로 unknown으로 추론
  setTimeout(() => {
    // resolve(20); // 타입 변수로 비동기 결과값에 타입을 정의해줄 수 있지만
    reject('~~때문에 실패') // 실패했을 때 타입은 정의해둘 수 없다
  }, 3000);
});

promise.then((response) => { 
  console.log(response * 10);//20
});

promise.catch((err) => {
  if (typeof err === 'string') {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 컨텐츠',
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id
})