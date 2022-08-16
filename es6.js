//  ES6 에 추가된 문법
{
    
    const name = 'hera';
    const age = 15;


    // Shorthand property names
    /////// 기존
    const person1 = {
        name : name,
        age : age
    };
    console.log('Shorthand property names 기존 : ', person1);

    //////// ES6
    const person2 = {
        name,
        age
    }
    console.log('Shorthand property names ES6 : ', person1);


    // Destructuring Assignment
    //////// 기존
    {
        const name = person1.name;
        const age = person1.age;
        console.log('Destructuring Assignment 기존 : ', name, age);
    }

    //////// ES6
    {
        const { name, age } = person1;
        console.log('Destructuring Assignment ES6 : ', name, age);
        const { name: perName, age : perAge } = person2;
        console.log('Destructuring Assignment ES6 : ', name, age);
    }
    

    // Spread Syntax (배열, 오브젝트 모두 가능)
    {
        // 배열 복사하기
        const obj1 = { key: 'key1' };
        const obj2 = { key: 'key2' };
        const array = [ obj1, obj2 ];

        const arrayCoppy = [...array];
        const arrayCoppy2 = [...array, {keys: 'key3'}];

        console.log('Spread Syntax ES6 (그대로 복사): ', arrayCoppy);
        console.log('Spread Syntax ES6 (복사 및 값추가): ', arrayCoppy2);

        // but 복사한 array 내부의 obj들은 계속 동일 주소를 바라보고 있음
        // 내부 obj 수정 시, 모든 array 내부 obj 변경됨

        obj1.key = 'KEY1';
        console.log('Spread Syntax ES6 (그대로 복사/값변경): ', arrayCoppy);
        console.log('Spread Syntax ES6 (복사 및 값추가/값변경): ', arrayCoppy2);


        //여러 배열/오브젝트 concat
        const fruits1 = ['apple', 'banana'];
        const fruits2 = ['melon', 'blueberry'];
        const fruits = [...fruits1, ...fruits2];
        console.log('Spread Syntax ES6 (concat 배열): ', fruits);
            //오브젝트의 경우 key값이 같으면 값을 덮어씀
        const dog1 = { small : '푸들' };
        const dog2 = { big : '골든리트리버'};
        const dogs1 = {...dog1, ...dog2};
        console.log('Spread Syntax ES6 (concat 오브젝트): ', dogs1);
        const dog3 = {...dog2, small : '말티즈'};
        const dogs2 = {...dog1, ...dog3};
        console.log('Spread Syntax ES6 (concat 오브젝트, key중복): ', dogs2);
    }

    // Default parameters
    {
        const func = (param)=>{
            console.log('Default parameters 기존: ', param);
            // param 없이 호출될 경우 undefined 나옴
        }
        func();
        const func1 = (param = 'Dafault값 지정!')=>{
            console.log('Default parameters ES6: ', param);
            // param 없이 호출될 경우 Default 값 지정 가능
        }
        func1();
    }

    // Ternary Operator (삼항연산자)
    {
        const isTrue = true;
        const dog = isTrue ? '푸들' : '말티즈';
        console.log('Ternary Operator ES6 : ', dog);
    }

    // Template Literals 
    {
        const name = 'hera';
        const age = '30';
        console.log(`Template Literals ES6 : 제 이름은 ${name} 입니다. 나이는 ${age} 입니다.`);
    }

}