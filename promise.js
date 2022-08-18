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
        //reject(new Error('- 오류발생 -'));
     }, 2000);
});


// 2. consumers, then, catch, finally

promise.then((res) => { //then : promise 수행이 정상적으로 완료되면 콜백함수에서 resorve로 전달된 데이터가 파라미터로 들어옴.
   console.log(res);
})
.catch((err)=>{   // catch : 수행 오류가 있을 경우에 들어옴
   console.log(err);
})
.finally(()=>{ // finally : 무조건 마지막에 실행되는 함수
   console.log('- 끝 -');
})


// 3. promise chaining
const fetchNum = new Promise((res, rej) => {
   setTimeout(()=> res(1), 1000);
});

fetchNum
   .then((num) => num+2)
   .then((num) => num*3)
   .then((num) => {  // then 내부에 또다른 Promise를 호출하여 resorve를 리턴할 수 있다!.
      return new Promise((res, rej)=>{
         setTimeout(()=>{ res(num-1); },1000);
      })
   })
   .then((num)=>{
      console.log(num);
   });


// 4. promise chaining Exception처리
const getChicken = new Promise((res, rej) => {
      setTimeout(() => { res('🐔'); }, 1000);
   });
const getEgg = chicken =>
   new Promise((res, rej) => {
      setTimeout(() => { 
         rej(new Error(`${chicken} =X 🥛`));
         res(`${chicken} => `+'🥚'); 
      }, 1000);
   });

const cookFry = egg =>
   new Promise((res, rej) => {
      setTimeout(() => { res(`${egg} => `+'🍳'); }, 1000);
   });
   
//getChicken
//   .then( chicken => getEgg(chicken) )
//   .then( egg => cookFry(egg) )
//   .then( meal => console.log(meal) );
 
getChicken
   .then(getEgg)
   .then(cookFry)
   .then(console.log)
   .catch(console.log);