///////// ЗАДАЧКИ ///////////

////// 2 курс 3 неделя понедельник ///////

// Задача #1
// 	Задание:
// 		Создать переменную со строковым значением.
// Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.
//
// 	Пример результата:
// 		В переменной содержится строка “Привет! Как дела?”
// 		В консоль должна быть выведена строка “иеаеа”.
//
// ---------------------------------------------------------------------------------------------------------------------------
//
// Задача #2
// Задание:
// Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000).
// Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.
//
// 	Пример результата:
// 		Массив объектов содержит сл. данные:
// 		var users = [
// {
// 		name: “Алексей”,
// 		salary: 500
// },
// {
// 		name: “Виктор”,
// 		salary: 1300
// },
// {
// 		name: “Иван”,
// 		salary: 1500
// }
// ];
//
// В консоль должен быть выведен массив [‘Виктор’, ‘Иван’]
//
// ---------------------------------------------------------------------------------------------------------------------------
//
//
//
//
// Задача #3
// 	Задание:
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
//
// 	Пример результата:
// В качестве аргумента функции было передано “/users/download/index.html”, функция вернула true
//
//
// ----- Дополнительное задание ------------------------------------------------------------------------------
//
// Задание #4
// 	Задание:
// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет.
// Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.
//
// Пример результата:
// Из массива [3, 13, 74, 14, 66, 15, 22, 4] должен получиться массив
// [74,14, 66, 22, 4]
//
//


let result

//////////// #1 ////////////

let originString = 'Привет! Как дела?';
let vowels = ['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
function splitString(src, targetArr){

    let srcArr = src.split('');
    let resultString = '';
    for (var i = 0; i < srcArr.length; i++) {
            if(vowels.indexOf(srcArr[i].toLowerCase()) !== -1)
            resultString += srcArr[i];
    }

    return resultString;
}
result = splitString(originString, vowels);

// console.log(result);

/////////Вывод: иеаеа
//////////////////////////////////

//////////// #2 ////////////

let users = [
{
		name: "Алексей",
		salary: 500
},
{
		name: "Виктор",
		salary: 1300
},
{
		name: "Иван",
		salary: 1500
}
];

function sortUsers(users, salary){
    let result = [];

    for (var i = 0; i < users.length; i++) {

        if(users[i].salary>salary){
            result.push(users[i].name);
        }

    }

    return result;
}
result = sortUsers(users, 1000);

// console.log(result);

/////////Вывод: ["Виктор", "Иван"]
//////////////////////////////////

//////////// #3 ////////////

let src = '/localhost/loftschool/sites/Landing/index.html'

function isOurExtension(src, ourExtension){
    let srcExtension = src.slice(src.length-4, src.length);

    if(ourExtension === srcExtension){
        return true
    }
    return false;
}
result = isOurExtension(src, 'html');

// console.log(result);

/////Вывод: true
//////////////////////////////////

//////////// #4 ////////////

let numbers = [3, 13, 74, 14, 66, 15, 22, 4];

function evenNumbers(numbers){

    let evenArr = []

    for (var i = 0; i < numbers.length; i++) {

        if(numbers[i] % 2 == 0){
            evenArr.push(numbers[i]);
        }
    }

    return evenArr;
}

result = evenNumbers(numbers);

// console.log(result);



/////Вывод: [74, 14, 66, 22, 4]
//////////////////////////////////



////// 2 курс 3 неделя среда ///////

// 1. Создать переменные, содержащие необходимые для работы узлы DOM
// (инпут с числом блоков, инпут с цветом блоков, и контейнер для будущих блоков)
// 2. "Повесить" обработчик события на изменение поля ввода с кол-вом блоков
// (событие input)
// 3. Внутри обработчика получить значение с этого поля ввода
// 4. Сформировать DOM узлы будущих блоков в цикле (создать DOM узел можно при
// помощи метода document.createElement())
// 5. Повесить обработчик события на изменение инпута с цветом (событие change)


let numberInput = document.getElementById('numberInput');
let colorInput = document.getElementById('colorInput');
let content = document.getElementById('content');
let blocks;
let color = '#fff';
// console.log(numberInput, colorInput, content);

numberInput.addEventListener('input', function(elem){
    // console.log(elem.target);
    let value = elem.target.value;
    // console.log(value);
    blocks = '';
    for (var i = 0; i < value; i++) {
        let block = document.createElement('div');

        block.className = 'block';
        block.innerText = i+1;
        block.style.background = color;

        blocks += block.outerHTML;
    }
    content.innerHTML = blocks;
});

colorInput.addEventListener('input', function(elem){
    color = elem.target.value;
    let contentBlocks = content.children;

    for (var i = 0; i < contentBlocks.length; i++) {
        let currentElem = contentBlocks[i];
        currentElem.style.background = color;
    }
});



//////////////////////////////////////

/////////////////////////////////////

////////////////////////////////////
