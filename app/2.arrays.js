console.log('Arrays');

// Task 01
// Создать массив. Получить последний элемент массива.
// 1.    Без удаления этого элемента из массива.
// 2.    С удалением этого элемента из массива

//var arr = ["1", "2"]
//console.log(arr.slice(-1))
//console.log(arr.splice(-1))



// Task 02
// Создать массив. Добавить элемент в конец массива.
// 1    Получить тот же массив
// 2    Получить новый массив

//const a2 = [1,2]
//console.log(a2)
//var a2_1 = a2.concat(4,5)
//console.log(a2_1)


// Task 03
// Создать массив. Обойти элементы массива и вывести их в консоль.

// const arr = [1,2,3,4]
// arr.forEach(function(element){
//     console.log(element);
// });



// Task 04
// Создать массив чисел в диапазоне от 0 до 100.
// Вывети сумму тех элементов, которые удовлетворяют условию arr[i] > 50.

//var a = [1, 51, 2, 100];
//console.log(a
//        .filter(value => value > 50)
//        .reduce((start, next) => start + next)
//);


// Task 05
// Создать массив строк. На основе этого массива создать строку –
// объдинить все элементы массива используя определенный разделитель.

//const a5 = ['a', 'b', 'c', {}, [1]];
//console.log(a5.join('-'));



// Task 06
// Создать массив чисел от 1 до 20 в случайном порядке.
// Отcортировать массив по возрастанию. Получить массив отсортрованный
// в обратном порядке и вывести его в консоль.


//const a6 = [3,4,5,6,7,8,1,2,3,4,5,8];
//console.log(a6.sort((e1,e2) => e1-e2));



// Task 07
// Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
// На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2] –
// сначала отрицательные числа, затем нули, затем положительные числа.
// Порядок оставить без изменения.

//const array7 = [3, 0, -1, 12, -2, -4, 0, 7, 2];
//const negativeVals = [];
//const zeros = [];
//const positiveVals = [];

//array7.forEach((val) => {
//    if (val < 0) {
//    negativeVals.push(val);
//} else if (val === 0) {
//    zeros.push(val);
//}
//else
//{
//    positiveVals.push(val);
//}
//});

//console.log([].concat(...negativeVals, ...zeros, ...positiveVals))


// Task 08
// 1. Создайте массив styles с элементами «Джаз», «Блюз».
// 2. Добавьте в конец значение «Рок-н-Ролл»
// 3. Замените предпоследнее значение с конца на «Классика».
//    Код замены предпоследнего значения должен работать для массивов любой длины.
// 4. Удалите первое значение массива и выведите его alert.
// 5. Добавьте в начало значения «Рэп» и «Регги».

//const array8 = ["Джаз", "Блюз"];
//array8.push("Рок-н-Ролл");
//array8[array8.length - 2] = "Классика";
//console.log(array8.shift());
//console.log(array8);
//console.log(array8.unshift("Рэп", "Регги"));
//console.log(array8);


// Task 09
// Подсчитать в указанной строке отдельно количество букв r, k, t.
// dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh

//console.log([..."dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"].filter(val => val === 'r').length);
//const a9 = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh'.split('r');
//console.log(a9.length - 1);

// Task 10
// Создать массив. Получить случайный элемент из массива.

//const a10 = [1,2,3,4,5];
//console.log(a10[Math.floor(Math.random()*a10.length)]);

// Task 11
// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr
// и возвращает новый массив, который содержит только числа из arr
// из диапазона от a до b.Функция не должна менять arr.

//const f = function (arr, a, b)
//{
//    return arr.filter(val => val <= b && val >= a);
//};

//console.log(f([1,2,3,4,5,6,7,8,9], 3, 7));


// Task 12
// Создать двумерный массив:
// 1 2 3
// 4 5 6
// 7 8 9
// Вывести его в консоль.

//const array12 = [[1,2,3],[4,5,6],[7,8,9]]
//array12.forEach(vector => console.log(`${vector}\n`));

// Task 13
// Преобразовать двумерный массив в одномерный.

//let array13 = [[1,2,3],[4,5,6],[7,8,9]]

//const result = [];
//array13.forEach(vector => result.push(...vector))
//console.log(result);

//console.log(array13);

// Task 14
// Создать FIFO (first-in, first-out) очередь.
// Выберите один из вариантов реализации:
// - отдельные функции get/ set,
// - функция - конструктор,
// - класс.

//class FIFO {
//    constructor(array)
//    {
//        this.array = array;
//    }

//    get() {
//        return this.array.shift();
//    }

//    set(...el) {
//        this.array.push(...el);
//    }
//}

//var a = new FIFO([]);
//a.set(1,2,3);
//console.log(a.get());
//console.log(a.get());
//console.log(a.get());

//

//var arr14 = [1,2,3,4,5]
//function set(e) {
//    arr14.push(e);
//}
//function get() {
//    return arr14.shift();
//}
//set(6);
//console.log(arr14);
//console.log(get());

// Task 15
// Создать массив. На основе получить другой массив – подмножество элементов
// оригинального массива начиная с индекса a и заканчивая индексом b.

//var arr15 = [1, 2, 3, 4, 5];
//function mass(a,b){
//    return arr15.slice(a,b)
//}
//var arr15_1 = mass(2,4)
//console.log( arr15_1 );


// Task 16
// Создать массив. Найти индекс указаного элемента в массиве.

//var arr15 = [1, 2, 3, 4, 5];
//console.log(arr15.indexOf(3));


// Task 17
// Создать массив с дублями элементов. На его основе создать массив
// уникальных элементов (удалить дубли).

//const array17 = [1,1,4,5,5,4,6,8,6];
//console.log([...new Set(array17)]);

// Task 18
// Создать массив с дублями. Найти первый элемент, который дублируется.
// Заменить этот элемент и все его копии на указанный символ.

//const array18 = [1,4,5,5,4,6,8,6];

//const firstDuplicate = array18.find(el => array18.indexOf(el) != array18.lastIndexOf(el));
//const a = 100;

//array18.forEach(function(element, index, array) {
//    if (element === firstDuplicate) {
//        array[index] = a
//    }
//});

//console.log(array18);



// Task 19
// Создать массив целых чисел. На его основе создать массивы – представления
// этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.

//const array19 = [100,22,34,45,85]
//console.log(array19.map(el => `0X${el.toString(16).toUpperCase()}`));
//console.log(array19.map(el => `0O${el.toString(8).toUpperCase()}`));
//console.log(array19.map(el => `0b${el.toString(2).toUpperCase()}`));


// Task 20
// Получить из строки «a big brown fox jumps over the lazy dog» массив слов,
// который содержит элементы, длина которых не больше 3 символа.

//const str = "a big brown fox jumps over the lazy dog";
//console.log(str.split(' ').filter(word => word.length <= 3));


// Task 21
// Создать массив, который содержит строки и числа. Проверить, содержит ли массив
// только строки.

//const arr1 = [3, "124", 5];
//const arr2 = ["54", "53445"]
//console.log(arr1.every(x => typeof(x) === 'string'));
//console.log(arr2.every(x => typeof(x) === 'string'));

//------------------Homework--------------------//


// 0) Создать массив из строк и чисел.
// 1) На его основе создать два массива - только числа и только строки.
// 2) Численный массив отсортировать по возрастанию.
// 3) В строковом - посчитать гласные.

// 0
// Создаем массив рандомной величины и заполняем его рандомными значениями
let array = new Array(Math.round(Math.random() * 10) + 1);
for(i = 0; i <= array.length - 1; i++)
{
    array[i] = Math.round(Math.random()*10);
}

console.log("Длина массива = " + array.length)
console.log("Числовые элементы массива: " + array);

// Половину массива (в рандомном месте) заменяем строкой
for(i = 0; i <= Math.floor(array.length / 2); i++)
{
    array[Math.floor(Math.random()*array.length)] = "EPAM";
}

console.log("Элементы массива после добавления строк: " + array);

// 1
var numbers = array.filter(x => typeof(x) === 'number');
var strings = array.filter(x => typeof(x) === 'string');

// 2
console.log("Сортированные числа: " + numbers.sort((e1,e2) => e1-e2));
console.log("Строки: " + strings);

// 3
// Все гласные в English
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

// 3.1
console.log("Гласные в строках: " + [...strings.join('')].filter(val => vowels.some(x => x === val.toLowerCase())));

// 3.2
var arr = new Array();
function z (m) { arr.push(m.split('').filter(val => vowels.some(x => x === val.toLowerCase()))); }
strings.forEach( e => z(e));
console.log("Гласные в строках: " + arr);

















