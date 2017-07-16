console.log('Objects');

// Task 01
// Реализовать функцию-конструктор Tune(song, artist) для создания объектов
// с публичными свойствами title (получает значение song), artist и методом concat(),
// который возвращает конкатенацию значений свойств title и artist.
// Создать несколько объектов. Вызвать их метод concat().

/*function Tune(song, artist)
{
    this.title = song;
    this.artist = artist;
}

Tune.prototype.concat = function()
{
    return this.title + " " + this.artist;
}

let tune1 = new Tune("smth", "some artist");

console.log(tune1);
console.log(tune1.concat());*/

// Task 02
// Реализовать функцию-конструктор Tune(song, artist) для создания объектов
// с приватными свойствами title (получает значение song), artist и публичным
// методом concat (), который возвращает конкатенацию значений свойств
// title и artist.
// Создать несколько объектов. Вызвать их метод concat().

/*function Tune(song, artist) {
    var title = song;
    var artist = artist;

    this.concat = function () {
        return `${title} ${artist}`;
    };
}

var t1 = new Tune('show must go on', 'Queen');
console.log(t1);
console.log(t1.concat());*/


/*let Tune = (function () {
 const priv = new WeakMap();

 function Tune(song, artist) {
 const privateMembers = {
 title: song,
 artist: artist
 };
 priv.set(this, privateMembers);
 }

 Tune.prototype.concat = function () {
 return `${priv.get(this).title} ${priv.get(this).artist}`;
 };

 return Tune;
 })();

 let tune1 = new Tune("smth", "some artist");
 let tune2 = new Tune("smth2", "some artist2");

 console.log(tune1);*/

// Task 03
// Реализовать для предыдущего объекта метод addCategory(categoryName),
// который принимает название категории и устанавливает его в соответствующее
// публичное свойство.
// Добавить категорию к объекту, вывести объект в консоль.


/*let Tune = (function () {
    function Tune(song, artist) {
        this.title = song;
        this.artist = artist;
    }
    Tune.prototype.concat = function () {
        return `${this.title} ${this.artist}`
    };
    Tune.prototype.addCategory = function (category) {
        this.category = category;
    };
    return Tune;
})();

let tune1 = new Tune ("smth", "some artist");
tune1.addCategory("cat");

console.log(tune1);*/


// Task 04
// Расширить прототип объекта String методом exclaim() если его нет в прототипе,
// который добавляет к строке знак восклицания и выводит строку в консоль.


/*if(!String.prototype.exclaim)
{
    String.prototype.exclaim = function(){
        return `${this}!`;
    }
}

console.log("Hi".exclaim());*/


// Task 05
// Создать функцию-конструктор Book(title, author). Добавить два метода:
// getTitle, getAuthor. Создать функцию-конструктор
// TechBook(title, author, category). Передать параметры title, author
// функции-конструктору Book. Добавить два метода: getCategory, getBook –
// возвращает строку с параметрами.
// 1. Для реализации наследования используйте Object.create();
// 2. Используйте синтаксис классов.

/*
class Book {
    constructor(title, author)
    {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }
}

class TechBook extends Book{
    constructor(title, author, category){
        super(title, author);
        this.category = category;
    }
    getCategory() {
        return this.category;
    }
    getBook() {
        return `${super.author} ${super.title} ${this.category}`;
    }
}

book1 = new Book("book1", "author1");
book2 = new TechBook("book2", "author2", "category2");

console.log(book1);
console.log(book2);
*/







/*let Book = (function () {

    function Book(title, author) {
        this.title = title;
        this.author = author;
    }

    Book.prototype.getTitle = function(){
        return this.title;
    };

    Book.prototype.getAuthor = function(){
        return this.author;
    };

    return Book;

})();

let TechBook = (function (_super) {

    function TechBook(title, author, category) {
        _super.call(this, title, author);
        this.category = category;
    }

    TechBook.prototype = Object.create(_super.prototype);
    TechBook.prototype.constructor = TechBook;

    TechBook.prototype.getCategory = function () {
        return this.category;
    };

    TechBook.prototype.getBook = function () {
        return `${this.title} - ${this.author} - ${this.category}`;
    };

    return TechBook;

})(Book);*/

// Task 06
// Cоздать объект data и сконфигурирвать его свойства:
// 1. id: значение = 1, изменяемое.
// 2. type: значение = "primary", перечисляемое
// 3. category: getter возвращает значение поля _category,
//    setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
// Используя for-in вывести свойства объекта.


/*const data = {};
Object.defineProperties(data, {
    'id': {
        value: 1,
        writable: true
    },
    'type': {
        value: 'primary',
        enumerable: true
    },
    'category': {
        get: function() {
            return this.value;
        },
        set: function(value) {
            this.value = value;
        }
    }
});

for(var key in data) {
    console.log(key)
}*/


// Task 07
// Создать литерал объекта с двумя свойствами. Запретить расширять объект.


/*const obj1 = { prop1: "1" };
 Object.preventExtensions(obj1);*/


// Task 08
// Создать функцию-конструктор для конструирования объектов Person.
// Создать два метода setFirstName() и setLastName(). Методы должны вызываться
// в цепочке.


/*let Person = (function () {

    function Person() {}

    Person.prototype.setFirstName = function(firstName){
        this.firstName = firstName;
        return this;
    };

    Person.prototype.setLastName = function(lastName){
        this.lastName = lastName;
        return this;
    };

    return Person;

})()

const person = new Person();
person.setFirstName("firstName").setLastName("lastname");
console.log(person);*/



// Task 09 TodoList App
// Реализовать класс «список задач» со следющим функционалом:
// Добавить задачу в список
// Получить и вывести в консоль список всех задач в формате "[new] Task 1",
// "[completed] Task2"
// Отметить указанную задачу как выполненную
// Удалить задачу из списка
// Отсортировать задачи по алфавиту по возрастанию или по убыванию
// Очистить список задач

/*
class Todo {
    constructor(title) {
        this.title = title;
        this.status = "[new]";
    }

    completed() {
        this.status = "[completed]";
    }
}

let Task = (function() {
    const privateProps = new WeakMap();

    return class Task {
        constructor(name){
            this.name = name;
            privateProps.set(this, { isDone: 'new' });
        }

        done(){
            privateProps.get(this).isDone = 'completed'
        }

        toString() {
            return `[${privateProps.get(this).isDone}] ${this.name}`;
        }
    }
})();

console.log(new Todo('Create'));
console.log(new Task('Delete'));


const TodoList = (function(){
    const privateProps = new WeakMap();

    let _ = function (instance ) { return privateProps.get(instance);}


    return class TodoList {
        constructor(tasks = []){
            privateProps.set(this, { tasks: tasks });
        }

        addTask(task) {
            _(this).tasks.push(task);
        }

        printAll(){
            privateProps.get(this).tasks.forEach(task => console.log(task.toString()));
        }

        done(name) {
            const task = privateProps.get(this).tasks.find(t => t.name === name);
            if(task){
                task.done();
            }
        }

        delete(name) {
            const tasks = privateProps.get(this).tasks;

            const taskIndex = tasks.findIndex(t => t.name === name);
            tasks.splice(taskIndex, 1);
        }

        sort(){
            privateProps.get(this).tasks.sort((task1, task2) => task1.name > task2.name)
        }

        clearAll(){
            _(this).tasks = [];
        }

    }
})();

const tl = new TodoList();
tl.addTask(new Task('Create'));
tl.addTask(new Task('Update'));
tl.addTask(new Task('Delete'));
tl.addTask(new Task('Edit'));
tl.addTask(new Task('Find'));

//console.log(tl);
tl.printAll();
//tl.done('Create');
//tl.printAll();
//tl.delete('Create');
//tl.printAll();
tl.clearAll();
tl.printAll();
*/



// Task 10
// Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy

/*
var today = new Date();
var month = today.getMonth()+1;
var day = today.getDate();
var today = `${today.getFullYear()}.${(month<10 ? '0' : '') + month}.${(day<10 ? '0' : '') + day}`;
console.log(today);

var today2 = new Date();
var options = { year: 'numeric', month:'long', day: 'numeric', timezone: 'UTC' };
var today2 = today2.toLocaleString("en-US", options)
console.log(today2);
*/

// Task 11
// Есть строка «15.03.2016». Создать на ее основе объект Date

/*
var date = "15.03.2016";
var parts = date.split(".");
var dateObj = new Date(+parts[2], (+parts[1] - 1), (+parts[0] + 1));
console.log(dateObj);
*/

// Task 12
// Создать объект Date, который содержит завтрашнюю дату, первое число текущего
// месяца, последнее число текущего месяца

/*
var currentDate = new Date();
console.log(currentDate);
currentDate.setDate(currentDate.getDate() + 1);
console.log(currentDate);
var today = new Date();
var firstDay = new Date(today.getFullYear(), date.getMonth() + 1, 1).toLocaleString({ timezone: 'UTC' });
var lastDay = new Date(today.getFullYear(), date.getMonth() + 2, 0).toLocaleString({ timezone: 'UTC' });
console.log(firstDay);
console.log(lastDay);
*/

// Task 13
// Измерить время суммирования чисел от 1 до 1000.



// Task 14
// Подсчитать количество дней с текущей даты до Нового года








