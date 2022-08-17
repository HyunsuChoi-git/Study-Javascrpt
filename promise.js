'use strict';
// Promise
// callback함수를 쓰지않고 깔끔하게 비동기처리 하기.

// Promise : 자바스크립트 내장 Object for asynchronous operation.

// 1. state : pending - > fullfield / reject
// 2. producer, consumer


// 1. producer
//              -> Promise를 생성하는 순간 내부 콜백함수가 바로 실행됨.
const promise = new Promise((resorve, reject) => {
     // 네트워크 통신을 통해 데이터를 가져오거나 파일을 읽는 등의 doing some heavy work
     console.log('doing something');
     setTimeout(()=>{
        resorve('- 응답완료 -');
     }, 2000);
});