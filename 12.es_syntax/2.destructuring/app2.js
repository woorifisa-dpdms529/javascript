// 배열 디스트럭처링 - 배열의 요소들을 개별 변수들로 분해
const date = ['1970', '12', '01'];

// const year = date[0];
// const month = date[1];
// const day = date[2];

// 배열 디스트럭처링 활용
const [ year, month, day ] = date; // 배열이니까 [ ]로 표기

// 중첩 배열의 디스트럭처링
const nestedArray = [1, 2, [true, 'hoya'], 5];

const [one, two, [isTrue, userName], five] = nestedArray;
console.log(one, two, isTrue, userName, five);

// movie 객체
const movie = {
    movieTitle: 'Spiderman no way home',
    movieActor: {
        firstName: 'Tom',
        lastName: 'Holland',
    },
    hashTags: ['honey fun', 'handsome', 'thrill'],
}

const {
    movieTitle,
    movieDate = new Date(), // new Date() : 현재 날짜, 기본 파라미터처럼 사용 할 수 있음
    movieActor, // 객체만 따로 분해하고 싶을 때
    movieActor: { firstName }, // 내부에서 별도로 디스트럭처링
    hashTags: [tag1, tag2]
} = movie;

console.log(movieDate, movieActor, firstName, tag1, tag2);