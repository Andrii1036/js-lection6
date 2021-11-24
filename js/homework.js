// --------------------------------------------------------------------------------------------------------
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let arrayWithWords = ['hello world', 'lorem ipsum', 'javascript is cool'];
arrayWithWords.forEach(word => console.log(`довжина строки '${word}': ${word.length}`));
console.log('---------------------------------------');
// ----------------------------------------------------------------------------------------------------------

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let arrayWithWords2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
arrayWithWords2.forEach(word => console.log(`'${word}' перетворене на ${word.toLocaleUpperCase()}`));
console.log('---------------------------------------');
// ------------------------------------------------------------------------------------------

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arrayWithUpperCaseWords = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let arrayWithLowerCaseWords = [];
arrayWithUpperCaseWords.forEach(word => arrayWithLowerCaseWords.push(word.toLocaleLowerCase()));
arrayWithLowerCaseWords.forEach(word => console.log(word));
console.log('---------------------------------------');
// --------------------------------------------------------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let trimStr = str.trim();
console.log(`строка ' dirty string   ' перетворилася на '${trimStr}'`);
console.log('---------------------------------------');
// -------------------------------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str2 = 'Каждый охотник желает знать';
let stringToarray = str => str.split(' ');
let arrayWithSplitString = stringToarray(str2);
console.log(arrayWithSplitString);
console.log('---------------------------------------');
document.writeln(arrayWithSplitString);
document.writeln(`<hr/>`);
// ------------------------------------------------------------------------------------

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let str3 = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.slice(0, length);
let partOfString = delete_characters(str3, 7);
console.log(`підрядок який вирізаний з строки "${str3}"-це "${partOfString}" і його довжина дорівнює ${partOfString.length} символів`);
console.log('-------------------------------------------------');
document.writeln(`${partOfString} <hr/>`);
// -------------------------------------------------------------------------------------

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. 
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str4 = "HTML JavaScript PHP";
let insert_dash = str => str.toLocaleUpperCase().split(' ').join('-');
let stringWithDashBetweenWords = insert_dash(str4);
console.log(`строка '${str4}' перетворилася на '${stringWithDashBetweenWords}'`);
console.log('--------------------------------------------------------------');
document.writeln(`${stringWithDashBetweenWords} <hr/>`);
// -------------------------------------------------------------------------------------

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str5 = 'some text';
let firstCharacterToUpperCase = str => {
    let a = str[0];
    let b = str[0].toLocaleUpperCase()
    return str.replace(a, b);
};
let stringWithUpperCaseFirstCharacter = firstCharacterToUpperCase(str5);
console.log(`строка '${str5}' перетворена на '${stringWithUpperCaseFirstCharacter}'`)
console.log('--------------------------------------------------------------');
// -------------------------------------------------------------------------------------------

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str6 = 'some new words';
let capitalize = str => {
    let a = str.split(' ');
    let b = a.map(word => {
        let a = word[0];
        let b = word[0].toLocaleUpperCase();
        return word.replace(a, b)
    });
    return b.join(' ');
};
let ereryWordWithUppeFirstCharacter = capitalize(str6);
console.log(`строка '${str6}' перетворилася на '${ereryWordWithUppeFirstCharacter}'`);
// -----------------------------------------------------------------------------------------------------------------