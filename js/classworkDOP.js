// Okten Html Mentor, [25.11.2021 18:27]

// Okten Html Mentor, [25.11.2021 18:27]

// ---------------------------------------------------------------------------------------------------------------------------

// // // Cоздать функцию которая принимает число и возвращает  текст как в примере:
// //     3275  —>  "3000 + 200 + 70 +5"

let numToSpecialString = num => {
    num = num.toString().split('');

    for (let index in num) {
        for (let i = num.length - 1; i > index; i--) {
            num[index] = num[index].concat('0');
            num.splice(index, 1, num[index])
        }
    }
    num = num.join('+')
    return (num);
};
console.log(numToSpecialString(3254687));
// -------------------------------------------------------------------------------------)

// / Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
// // Всегда будет только одно целое число, которое встречается нечетное количество раз
// //     [1,2,3,4,5,2,4,1,3] -> 5

let arr = [1, 2, 3, 4, 5, 2, 4, 1, 3];
let someFunc = arr => {
    for (i = 0; i < arr.length; i++) {
        let temporaryValue = arr.shift()
        if (!arr.includes(temporaryValue)) {
            console.log(temporaryValue);
            return
        };
        arr.push(temporaryValue)
    };
}

someFunc(arr)