console.log('hello');
/**
 * 변수는 선언과 초기화라는 과정을 통해 작성 가능
 * 
 * JS에서 변수 선언(keyword)
 * var, let, const
 */
let userName; // userName이라는 변수 선언
userName = 'yoo'; // yoo라는 문자열을 userName에 초기화
console.log(userName);

let a = 5;
a = 6; // 변할 수 있는 수니까 재할당이 가능
console.log(a);

// 상수(constant), 값이 한 번 초기화되면 재할당 불가
const allUsers = 5;
allUsers = 10;

const PI = 3.14;

// 기본적으로 const를 사용해서 방어적으로 작성 후 변경이 필요할 것 같은 값은 let으로 변경