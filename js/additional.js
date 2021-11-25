let coursesArray = [{
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'
        ]
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced'
        ]
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'
        ]
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];




// --------------------------------------------------------------------------------------------------------------------
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), 
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, 
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let isEmailCorrect = email => {
    email = email.toLowerCase()
    if (!email.includes('@')) {
        return false
    };
    emailSplit = email.split('@')
    if (emailSplit[0].length === 0 || emailSplit[0].includes('.') || !emailSplit[1].includes('.')) {
        return false
    }
    if (emailSplit[1].includes('.')) {
        if (emailSplit[1][0] === '.' || emailSplit[1][1] === '.') {
            return false
        }
    }
}
console.log(isEmailCorrect('someeMAILgmail.com'))
console.log(isEmailCorrect('@gmail.com'))
console.log(isEmailCorrect('some.email@gmail.com'))
console.log(isEmailCorrect('some.email@gmailcom'))
console.log(isEmailCorrect('someemail@gmailcom'))
console.log(isEmailCorrect('someemail@.mailcom'))
console.log(isEmailCorrect('someemail@g.ailcom'))
console.log('------------------------------------------------------------');
// ------------------------------------------------------------------------------------------------------

// відсортувати coursesArray в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
// ---------------------------------------------------------------------------------------------

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let str = "Астрономия это наука о небесных объектах";
let count = (str, symbol) => {
    let counter = 0;
    str = str.toLowerCase()
    str = str.split('')
    str.map(symbolOfStr => {
        if (symbolOfStr === symbol) {
            counter++
        }
    })
    return counter
};
console.log(count(str, 'о'))
console.log('-----------------------------------------------------');
// --------------------------------------------------------------------------------------------

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str1 = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) => {
    str = str.split(' ')
    str.length = n;
    console.log(str)
};
cutString(str1, 5);
console.log('----------------------------------------------------')
    // ---------------------------------------------------------------------------------