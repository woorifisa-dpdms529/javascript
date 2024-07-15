// Java 문법과 동일
// 전통적인 반복문 작성 형태
for (let index = 1; index < 5; index++) {
    console.log(`${index} 번 반복`);
}

const rainbow = 'rainbow'; // JS에서 문자열은 배열처럼 동작하기도 함
console.log(rainbow[0], rainbow[1], rainbow[2], rainbow[3]);

for (let index = 0; index < rainbow.length; index++) {
    const element = rainbow[index];
    console.log(element);
}

// JS에서 [ ]는 배열
const foods = ['apple', 'orange-cookie', 'avocado', 'doctor-peppermint'];
let favorite = '내가 좋아하는 음식은..';

// 반복문, 조건문을 활용하여 아래와 같이 출력되도록
// 내가 좋아하는 음식은.. apple, orange-cookie, avocado 그리고 doctor-peppermint
for (let index = 0; index < foods.length; index++) {
    if (index === foods.length - 1) {
        favorite += '그리고' + foods[index];
    } else {
        favorite += foods[index] + ', ';
    }
}

console.log(favorite);

// 글 읽듯이 이해되는지 정도로 확인
const fruits = ['apple', 'banana', 'coconut'];
fruits.forEach(fruit => console.log(fruit));