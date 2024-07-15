const button = document.getElementById('btn');
console.log(button);

// 버튼을 클릭했을 때 '클릭됨!' 이라는 메시지 출력

// 1. button한테 이벤트를 걸어야함
// add(추가)Event(이벤트를)Listner(리스너)

// 2. 버튼이 클릭되었을 때 동작시킬 콜백 함수 정의
const clickHandler = () => console.log('클릭됨!');

// addEventListener('이벤트 타입', 콜백 함수)
// button.addEventListener('click', clickHandler);

button.addEventListener('click', () => console.log('clicked!!'));