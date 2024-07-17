// app.js - DOM 작업 처리를 작성하는 파일

// import - 내 위치(app.js) 기준으로 외부(다른 파일, 다른 API 코드 등)의 다른 것들을 가져올 때 사용하는 키워드

// import { 가져오고 싶은 함수 이름, 변수명 등 } from '외부 파일의 경로'
import { sum } from './function.js'

// 계산기에서 활용할 숫자 예시
const x = 10;
const y = 5;

const add = document.getElementById('add');
add.textContent = sum(x, y); // 덧셈 연산 결과값