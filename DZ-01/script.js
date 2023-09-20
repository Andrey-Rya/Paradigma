// Взяли два массива arr1 и arr2
const arr1 = [9, 5, -4, -9, 2, 8, 0, 1]
const arr2 = [9, 5, -4, -9, 2, 8, 0, 1]

// Процедура решения в императивном стиле
function imperativeStyle(numbers) { //пузырьковая сортировка
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[j - 1]) {
                let tmp = numbers[j -1]
                numbers[j - 1] = numbers[j]
                numbers[j] = tmp
            }
        }
    }
    return numbers
}

// Процедура решения в декларативном стиле
function declarativeStyle(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers
}

console.log(`Процедура сортировки в императивном стиле:\n ${arr1}\n ${imperativeStyle(arr1)}`)
console.log(`Процедура сортировки в декларативном стиле:\n ${arr2}\n ${declarativeStyle(arr2)}`)
