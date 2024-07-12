const a = 5; // JS는 동적 타입 언어, 실행 시점에 타입이 결정됨
console.log(typeof a); // typeof 연산자를 통해 해당 변수의 타입 확인
// int a = "문자열인데"; // 에러!!, Java는 정적 타입 언어, 컴파일 시점에 타입 결정

// 값(value), 식(expression), 문장(statement)
// 값 - 5, 'yoo', a
// 식 - 1 + 1, 1 === 1
// 문장 - const a = 5;

const userName = '유';
console.log('안녕하세요 저는 ' + userName + '입니다.');
console.log('안녕하세요 저는 ', userName,'입니다.');
console.log(`안녕하세요 저는 ${userName} 입니다.`); // backtick(`, ~기호 부분)
// 템플릿 리터럴 문법 - ${값과 식만 사용 가능}

// console.log(`안녕하세요 저는 ${const a = 5} 입니다.`);

let c = 5;
console.log(typeof c); // Number

c = 'yoo';
console.log(typeof c); // String
// JS는 실행 과정에서 타입이 변할 수 있는 동적(Dynamic) 타입 언어





