/**
 * 구조 분해 할당
 * -> (배열, 객체)구조를 분해해서 변수에 할당한다
 */

// 1. 객체(Object)
const book = {
    id: 1,
    title: 'The great Gatsby',
    pubDate: '10/04/1925',
}

// 기존 방식
// const id = book.id;
// const title = book.title;
// const pubDate = book.pubDate;

// 객체의 구조를 분해하는 것이기 때문에 { }를 사용
// const { id, title, pubDate } = book;
// console.log(id, title, pubDate);

// id라는 변수 그대로 사용하지 않고, 다른 이름으로 하고 싶을 때
// const { id: myId, title, pubDate } = book;
// console.log(myId);

const anotherBook = {
    id: 2,
    title: "The old man and the sea",
    pubDate: "08/09/1952",
    author: {
        firstName: "Ernest",
        lastName: "Hemingway",
    },
};

// 디스트럭처링도 중첩해서 표기 가능
// const { id, title, pubDate, author } = anotherBook;
// console.log(author);

// 중첩된 객체 내 프로퍼티를 한 번에 꺼내기
const { id, title, pubDate, author: { firstName, lastName } } = anotherBook;
console.log(firstName, lastName);
// console.log(author); // 중첩 객체를 바로 추출할 경우, author는 접근 불가

// import { useState } from 'react'; // 추후 리액트 작성 시 활용되는 예시

