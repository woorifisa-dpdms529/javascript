/**
 * 객체(object)는 속성(Property)들로 구성된 집합
 * 그러한 프로퍼티는 키(key)와 값(value)로 구성됨
 */

// dog 객체는 age라는 프로퍼티를 가지고 있음
// 그 age 프로퍼티의 값은 2
const dog = {
    age : 2 
};

// console.log(dog);
// console.log(dog.age); // .(dot)연산자를 통해 프로퍼티의 값을 참조
// 강아지야 너 몇살이니

const dog2 = {
    age: 2, // comma(,) 기호를 통해 개행해서 2개 이상의 프로퍼티 작성
    name: 'toto',
    walk: () => console.log('강아지가 걷는다'),
    address: { // 객체의 프로퍼티로 객체를 할당할 수도 있음
        si: '서울시',
        gu: '마포구',
        dong: '상암동'
    }
};

// dog2.walk();
console.log(dog2);
console.log(dog2.address);
console.log(dog2.address.si);