// 기본적인 함수 정의, '함수 선언문' 방식

// 함수 시그니처
/**
 * JS Doc(문서화 주석)
 * 두 수를 받아서 덧셈 결과를 반환하는 함수(기능)
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 덧셈 결과
 * @author 'yoo' // ex. github username
 */
function add(a, b) {
    return a + b;
}

// 함수 호출
add(3, 5);

// 곱셈 기능
// 두 번째 함수 생성 방식 - '함수 표현식' 방식
// 함수를 변수에 할당(JS에서는 가능)
// -> JS에서 함수는 일급 객체(First Citizen)으로 취급되기 때문
const mtp = function(a, b) {
    return a * b;
}

// 함수를 mtp라는 변수에 담았기 때문에 mtp라는 이름으로 호출 가능
console.log(mtp(3, 5));

// 화살표 함수(ES6, 2015년 등장한 문법)
const sub = (a, b) => a - b; // 함수 몸체 코드가 1줄이면 암묵적으로 return 
console.log(sub(5, 3));

// return 키워드를 사용하려면 중괄호를 필수로 작성해야함
const sub2 = (a, b) => {  
    // 다른 코드도 작성 가능한 부분
    return a - b; 
}

// 함수에 별도의 파라미터가 없을 경우?(여도 ()는 생략 불가)
const hello = () => console.log('hello!');

// 파라미터가 1개면?
const square = (x) => x * x; // 소괄호를 사용해도 되고,
const square2 = x => x * x; // 소괄호를 생략해도 됨

