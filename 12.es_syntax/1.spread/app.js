/**
 * Spread - 전개 문법
 * 
 * ...(Spread syntax)
 * 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서(Spreading, 전개, 분산) 
 * 개별적인 값들의 목록으로 바꿔주는 문법
 * 
 * 사용가능 대상: Array, String, Map, Set, DOM Collection
 */
// 1. Spread with Array
const fruits = ['apple', 'banana'];
const otherFruits = ['kiwi', 'grape'];

// 두 배열을 연결하려면?(Array.prototype.concat())
const allFruits = fruits.concat(otherFruits);
console.log(allFruits);

const myFruits = [...fruits, ...otherFruits];
console.log(myFruits);

// spread 활용 방식

const users = [// 배열의 요소로 객체를 가지고 있음
    { id: 1, userName: 'Coo' },
    { id: 2, userName: 'Kie' },
];

console.log(users);

// 새로운 고객인 newUser를 users 배열의 뒤에 추가
const newUser = { id: 3, userName: 'yoo' };

users.push(newUser);
console.log(users);

// spread 방식
const secondUser = { id: 4, userName: 'moo' };

const updatedUsers = [secondUser, ...users];
console.log(updatedUsers);