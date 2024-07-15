// DOM 객체
console.dir(document);
// document는 객체, 여러 개의 프로퍼티들을 가지고 있음

console.log(window);
// console.log(alert('알림 모달'));

console.log(window.document === document);

// DOM을 통한 HTML 엘리먼트 조작
const h1 = document.querySelector('h1');
console.log(typeof h1);
console.dir(h1);
console.log(h1.innerHTML);

console.log(h1 instanceof HTMLHeadingElement); // true

// li 태그를 전부 가져와서 출력
const liList = document.querySelectorAll('li');
console.log(liList);

// item2 텍스트 추출 및 출력
console.log(liList[1].textContent);

// getElement's' -> 요소가 1개 밖에 없어도 무조건 배열로 가져옴
const liList2 = document.getElementsByClassName('list-item');
console.log(liList2);