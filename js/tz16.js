// Задача №1
const mass1 = ['Банан', 20, true, 'Яблоко', false, 'Шоколад', 25];

const zadacha1 = document.getElementById('zadacha1');
zadacha1.innerHTML = (`Массив mass1 содержащий строки, числа и булевые значения: ${mass1}`);

console.log(`Массив mass1 содержащий строки, числа и булевые значения: ${mass1}`)

// Задача №2
const a3 = {
    3 : 'hello',
    "one" : 'hi',
    "testt" : 'vodoley',
    "ivan" : 'ivanov'
};

let searchElem = '';

for (let key in a3) {
    if (key.length > 4) {
        searchElem = searchElem + ' ' + a3[key];
    }
}

console.log(`Элементы массива a3, у которых ключ содержит больше 4 символов: ${searchElem}`);

const zadacha2 = document.getElementById('zadacha2');
zadacha2.innerHTML = (`Элементы массива a3, у которых ключ содержит больше 4 символов: ${searchElem}`);

// Задача №3
let a7 = new Map();
const zadacha3 = document.getElementById('zadacha3');

function addNewElem() {
    zadacha3.innerHTML = '';
    let key = document.getElementById('a7-key_input');
    let value = document.getElementById('a7-value_input');
    a7.set(key.value, value.value);
    console.log(a7);
    for (const [key, value] of a7.entries()) {
        zadacha3.innerHTML += 'Ключ: ' + key + ' ' + 'Значение: ' + value + '<br>';
    }
}

// Задача №4
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];

let aLength = 0;

for (let i = 0; i < a.length; i++) {
    aLength += 1;
}

const zadacha4 = document.getElementById('zadacha4');
zadacha4.innerHTML = (`Длина массива а равна ${aLength}`);


console.log(`Длина массива а равна ${aLength}`);

// Задача №5
d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];

const a1 = [];
const a2 = [];

for (let i = 0, j = 0, y = 0; i < d.length; i++) {
    if (d[i] % 2 == 0) {
        a1[j] = d[i];
        j++;
    }

    else {
        a2[y] = d[i];
        y++;
    }
}

const zadacha5_a1 = document.getElementById('zadacha5_a1');
zadacha5_a1.innerHTML = (`Массив a1 с четными элементами: ${a1}`);

const zadacha5_a2 = document.getElementById('zadacha5_a2');
zadacha5_a2.innerHTML = (`Массив a2 с нечетными элементами: ${a2}`);

console.log(`Массив a1 с четными элементами ${a1}`);
console.log(`Массив a2 с нечетными элементами ${a2}`);

// Задача №6
// Первоначальный вариант выполненной задачи
d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];

function buttonOn(){
    const elem = document.getElementById('elem').value;
    const result = document.getElementById('result');
    for (let i = 0; i < d.length; i++) {
        if (i + 1 == elem) {
            result.innerHTML = (`Значение ${elem} элемента равняется ${d[i]}`);
        }
    }
}

// Второй вариант выполненной задачи
d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];

let znach1 = '';

for (let i = 0; i < d.length; i++) {
    if (i == 0) {
        znach1 = String(d[i]);
    }
    else {
        znach1 = znach1 + ' ' + String(d[i]);
    }
}

const znach = document.getElementById('znach');
znach.innerHTML = (`Вывод значения с помощью массива и цикла: d =  [${znach1}]`);
