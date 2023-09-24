function sumOfProducts(x, y, z) {
    // присваиваем ей значение единицы, когда нет 3-го аргумента (степень) 
    if (!z) {
        z = 1
    }
    // определяем среднее значение в массиве x
    const meanX = x.reduce((a, b) => (a + b)) / x.length
    // определяем среднее значение в массиве y
    const meanY = y.reduce((a, b) => (a + b)) / y.length
    // запоминаем сумму произведений числителя или знаменателя
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        sum = sum + (x[i] - meanX) ** z * (y[i] - meanY) ** z
    }
    return sum
}

function distributionOfPearson(x, y) {
    // если массивы имеют одну дину то
    if (x.length !== y.length) {
        // если не выполняется условие, то выводим ошибку
        console.log("Массивы должны иметь одинаковую длину")
        return -1
    } else {
        // если выполняется условие, то считаем распределение и выдаем результат
        const distribution = sumOfProducts(x, y) / Math.sqrt(sumOfProducts(x, y, 2))
        console.log(distribution)
        return distribution
    }
}

x = [5, 4, 3, 2, 1]
y = [10, 9, 8, 7, 6]

distributionOfPearson(x, y);
