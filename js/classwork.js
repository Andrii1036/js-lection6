// ----------------------------------------------------------------------------------------------------------

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let normaliseStr = str => {
    strNew = str.replace('.', ' ').replaceAll('.', '');
    strNew = strNew.replace('-', ' ').replaceAll('-', '');
    strNew = strNew.replace('_', ' ').replaceAll('_', '');
    console.log(`'${str}' перетворено на '${strNew}' `);
    console.log('--------------------------------')
    return strNew;
};
let newn1 = normaliseStr(n1);
let newn2 = normaliseStr(n2);
let newn3 = normaliseStr(n3);
// ------------------------------------------------------------------------------------------------

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomGenerator = numberOfValue => {
    let arrWithUniqueRandomValue = [];
    while (arrWithUniqueRandomValue.length < numberOfValue) {
        let value = Math.floor(Math.random() * 101);
        if (!arrWithUniqueRandomValue.includes(value)) {
            arrWithUniqueRandomValue.push(value);
        };
    };
    console.log(`згенерований масив '[${arrWithUniqueRandomValue}]'`);
    return arrWithUniqueRandomValue;
};
randomGenerator(5);
console.log('--------------------------------------------------------------');
// ---------------------------------------------------------------------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
// Відсортувати його за допомоги sort

let sortArray = randomGenerator(10).sort((a, b) => a - b);
console.log(`відсортований масив '[${sortArray}]'`);
console.log('---------------------------------------------------------------------------');
// -------------------------------------------------------------------------------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterArray = randomGenerator(20).filter(value => value % 2 == 0);
console.log(`відфільтрований масив '[${filterArray}]'`);
console.log(`------------------------------------------------------------------------------------------`)
    // --------------------------------------------------------------------------------------------------------

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . 
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayWithStringFromNumber = randomGenerator(15).map(value => value.toString());
console.log('типи значень згенерованого масиву перетворені на string');
console.log(arrayWithStringFromNumber);
console.log('---------------------------------------------');
// -------------------------------------------------------------------------------------------

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (nums, direction) => {
    if (direction === 'asceding') {
        nums.sort((a, b) => a - b);
    } else {
        nums.sort((a, b) => b - a);
    }
    return nums
};
let arr = sortNums(randomGenerator(10), 'asceding');
console.log('відсортований масив:');
console.log(arr);
let arr2 = sortNums(randomGenerator(10), 'desceding');
console.log('відсортований масив:');
console.log(arr2);
console.log('---------------------------------------------------------------')

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
console.log('початковий масив:');
console.log(coursesAndDurationArray); //  Чому тут в консоль виводиться вже відсортований масив? якщо вивід в консоль відбувається до того як відпрацює sort?????
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log('відсортований масив:');
console.log(coursesAndDurationArray);
console.log('-------------------------------------------------------------------------------------------');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
console.log('початковий масив:');
console.log(coursesAndDurationArray2);
let filterCoursesAndDurationArray2 = coursesAndDurationArray2.filter(value => value.monthDuration > 5);
console.log('відфільтрований масив:');
console.log(filterCoursesAndDurationArray2);
console.log('-------------------------------------------------------------------------------------------');
// ---------------------------------------------------------------------------------------------------------------

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let cutStr = [];
    let firstIndex = 0;
    let endIndex = n;
    for (let i = 0; i < str.length; i = i + n) {
        let cut = str.substring(firstIndex, endIndex);
        cutStr.push(cut);
        firstIndex += n;
        endIndex += n;
    }
    console.log(cutStr)
    return cutStr
}
cutString('наслаждение', 3);
// ----------------------------------------------------------------------------------------------------------------------