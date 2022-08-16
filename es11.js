

{
    // Optional Chaining
    {
        const person1 = {
            name : 'hera',
            age : '30',
            job : {
                name : 'comp',
                oner : 'Bob',
                place : {
                    state : 'seoul',
                    subway : 'samsung'
                }
            }
        }

        const person2 = {
            name : 'su',
            age : 28
        }

        const whoAmI = (per) => {
            const jobPlace = per.job && per.job.place && per.job.place.subway;
            console.log('Optional Chaining 기존 : ', jobPlace);
        }
        const whoAmI2 = (per) => {
            const jobPlace = (per.job ?. place ?. subway);
            console.log('Optional Chaining ES6 : ', jobPlace);
        }

        whoAmI(person1);
        whoAmI2(person1);

    }

    //Nullish Coalescing Opers

    // Boolean변수에서는 false는 물론 '', 0, null, undefined 도 전부 false로 간주한다.
    // 어떤 데이터에 값이 null이나 undefined 때에만 값을 초기화 해주고 싶을 때에는 

    const data2 = undefined;
    const undData = data2 ?? 'Data2';
    const undData2 = data2 || 'Data2';
    console.log(`undefinded에 값 할당 --> ?? : '${undData}', || : '${undData2}'`);

    const data = '';
    const emptyData = data ?? 'Data';
    const emptyData2 = data || 'Data';
    console.log(`''에 값 할당 --> ?? : '${emptyData}', || : '${emptyData2}'`);

    // ||는 '', 0 도 false로 보기 때문에 정확하게 쓰기 위해서는 ?? 를 쓴다.
}