// Pick<T, K>
// 뽑다 고르다
// 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick을 직접 구현
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL' -> true!
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "엣날 글",
  content: "옛날 컨텐츠"
}

// Omit<T, K>
// 빼다 생략하다
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// Omit을 직접 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof T, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: ""
}

// Record<K, V>

type ThumbnailLegacy = {
  large: {url: string};
  medium: {url: string};
  small: {url: string};
}

// Record 직접 구현
type Record<K extends keyof any, V> = { // keyof any는 어떤 값인지 모르겠지만 어떤 객체의 키에서 추출된 유니온 타입임을 뜻함.
  [key in K]: V;
}

type Thumbnail = Record<'large' | 'medium' | 'small', {url: string}>;
