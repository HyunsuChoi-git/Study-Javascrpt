'use strict';


function printImmediately(print) {
  print();
}

console.log('1');
const two = new Promise((res, rej) => {
  setTimeout(() => res(console.log('2')), 1000);
});

two
  .then((res)=>{   
    return new Promise((res,rej)=>{
      setTimeout(() => res(console.log('3')), 1000);
    });
  })
  .then((res) => {
    printImmediately(() => console.log('hello'));
  })
