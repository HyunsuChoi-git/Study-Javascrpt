//  promise를 좀 더 간결하고 동기적으로 실행되는 것 처럼 보이도록 만들어주는 것.

// promise 위에 간편하게 쓰는 API == syntactic sugar

// 1. async
    // promise
function fetchUserPromise() {
    // 10 초 걸리는 함수
    return new Promise((res,rej)=>{
        res('hera1');
    });
};
const user = fetchUserPromise();
user.then(console.log);

    // async  -> function 앞에 async 써주면 내부 함수가 promise로 변환됨
async function fetchUser() {
    return 'hera2';
};
const user2 = fetchUser();
user2.then(console.log);


// 2. await ->  async함수 내에서만 사용가능. 뒤에 함수가 끝날 때 까지 기다려줌.
function delay(ms) {
    // 입력받은 초만큼 뒤에 결과 리턴하는 promise
    return new Promise(res => setTimeout(res, ms));
}
    // 기존 promise
function getBanana2() {
    return delay(2000)
        .then(res => '🍌');
}
    // await
async function getApple() {
    await delay(2000);
    return '🍎';
};

async function getBanana() {
    await delay(2000);
    return '🍌';
};


    // 기존 promise chaining
function pickFruits(){
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `promise chaining ==> ${apple} + ${banana}`)
        })
};
pickFruits().then(console.log);

async function pickFruits2(){
    const apple = await getApple();
    const banana = await getBanana();
    return `await ==> ${apple} + ${banana}`;
};
pickFruits2().then(console.log);
    // ---> But apple과 banana를 얻어오는데에 굳이 직렬처리하지 않아도 됨.



// 3. useful Promise APIs  
    // Promise.all()  모든 Promise들이 받아질 때까지 기다려주는 Primise 함수
    // 배열로 Promise함수들을 넣어주면 됨.
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
        .then(fruits => 'Promise.all() ==> '+fruits.join(' + '));
};
pickAllFruits().then(console.log);

    // Promise.race() 배열속 Promise 중 가장 빠르게 완료되는 Promise만 resove해주는 것.
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
        .then(fruit => `Promise.race ==> ${fruit}`);
};
pickOnlyOne().then(console.log);