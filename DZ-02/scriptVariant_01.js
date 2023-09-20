//Условие Задачи
//На вход подается число n.

//Задача
//Написать скрипт в любой парадигме, который выводит на экран таблицу умножения всех чисел от 1 до n.
//Обоснуйте выбор парадигм.

// Решение с помощью двух парадигм - структурной и процедурной. Создаем повторяющуюся функцию, с циклом
// для получения результата, который можно применить далее. 

//ВАРИАНТ 1
const num = 9

function multiplicationTable (num) {
    let stringArray = []   // берем массив вывода строки
    for (let i = 0; i < num + 1; i++) {
        i === 0 ? stringArray.push('') : stringArray.push(i) // пропускаем 1-ю строчку первого столбца в терминале
        for (let j = 0; j < num; j++) {
            i === 0 ? stringArray.push(j + 1) : stringArray.push(i * (j + 1)) // заполняем строку цифрами
        }
        console.log(stringArray.join('\t')) // выравниваем матрицу с табуляцией
        stringArray.length = 0 // обнуляем массив вывода строки
    }
}

multiplicationTable(num)
