// ------------------------------------------------------------------------------------------------------------------------------------
// Okten Html Mentor, [26.11.2021 11:58]
// // Вирівняти багаторівневий масив в однорівневий
// //     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// // flat використовувати заборонено.

let multyArray = [1, 3, ['Hello', 'Wordd', [9, 6, 1]],
    ['oops'], 9
];
let oneLevelArray = [];
let arrayToOneLevel = array => {
    array.forEach(item => {
        if (Array.isArray(item)) {
            arrayToOneLevel(item)
        } else {
            oneLevelArray.push(item);
        }
    })
};
arrayToOneLevel(multyArray);
console.log(oneLevelArray);
// -------------------------------------------------------------------------------------------------------------

// Okten Html Mentor, [26.11.2021 11:58]
// // Количество единиц
// // Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.
// // Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
// //
// // 2176491947586100 -> 3

let number = 2176149194750056;
let numberOfItem = (num, item) => {
    let counter = 0;
    num = num.toString()
    let arrWithnum = num.split('00');
    arrWithnum.pop()
    for (i = 0; i < arrWithnum[0].length; i++) {
        if (arrWithnum[0][i] == item) {
            counter++
        };
    };
    console.log(counter)
    return counter
}

numberOfItem(number, 1);
// ---------------------------------------------------------------------------

// Okten Html Mentor, [26.11.2021 11:58]
// // Палиндром
// // Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// //     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

let text = 'Murder for a jar of red rum'
let isPalindrome = text => {
    text = text.toLowerCase().replaceAll(' ', '');
    let reverseText = text.split('').reverse().join('');
    if (text === reverseText) {
        return "yes"
    } else {
        return 'no'
    };
};
console.log(isPalindrome(text));
console.log(isPalindrome("hjask oiqwhrfoiqw ookj"));
// ------------------------------------------------------------------------------------------------

// Okten Html Mentor, [26.11.2021 11:59]
// / Точная степень двойки
// // Дано натуральное число N.
// //     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// //     Операцией возведения в степень пользоваться нельзя!

let isDegreeOf2 = number => {
    number = number / 2;
    if (number === 1) {
        console.log('yes')
        return 'yes'
    } else if (number > 1) {
        isDegreeOf2(number)
    } else {
        console.log('no')
        return 'no'
    }
};
// не розумію чому функція повертає Undefined?????????
console.log(isDegreeOf2(64));
console.log(isDegreeOf2(10));
console.log(isDegreeOf2(9));
// --------------------------------------------------------------

// Okten Html Mentor, [26.11.2021 11:58]
// // Знайти набільший елемент в масиві за допомогою reduce
// //     [1,6,9,0,17,88,4,7] -> 88

// не впевнений що я правильно тут використовую можливості reduce!!!!!!!!
let arr3 = [1, 6, 9, 0, 17, 88, 4, 7];
let maxValue = arr3.reduce(function(previousValue, item) {
    if (item > previousValue) {
        previousValue = item
    }
    return previousValue
});
console.log(maxValue);
// -------------------------------------------------------------------------------------------------

// Vitaliy Demchyshyn, [26.11.2021 16:32]
// Задачка для тех кто все сделал и ему хочется размять мозг:

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// массивы ну и циклы
// Вам поможет Рекурсія)

// пример:
// 1234 -> 10
// 879 -> 24
// 11 -> 2

let a12 = [1, 2, 3, 4];
let a1 = 1234;
let a2 = 879;
let a3 = 11;

let sumOfNumbers = numbers => {
    let sum = 0;
    let sumOfNumbersRecurtion = numbers => {
        if (numbers > 0) {
            let lastNumber = numbers % 10;
            sum += lastNumber;
            numbers = Math.floor(numbers / 10);
            sumOfNumbersRecurtion(numbers)
        };
    };
    sumOfNumbersRecurtion(numbers)
    return sum
};
console.log(sumOfNumbers(a1));
console.log(sumOfNumbers(a2));
console.log(sumOfNumbers(a3));
// --------------------------------------------------------------------------------------------------