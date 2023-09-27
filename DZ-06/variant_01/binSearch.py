from typing import List


def bin_search(arr: List[int], number: int) -> int:
    """
    Функция производит бинарный поиск индекса элемента в массиве чисел.

    Agrs:
    - arr (List[int]): Массив чисел для поиска и сравнения.
    - number (int): Это искомый элемент в массиве.

    Return:
    - int: Это индекс элемента в массиве, если он присутствует или -1, если элемента в массиве нет.
    """
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == number:
            return mid
        elif arr[mid] < number:
            left = mid + 1
        else:
            right = mid - 1

    return -1


# Вводим целочисленный массив
arr = [5, 3, 11, 8, 16, 19]

print(f"Ваш исходный массив: {arr}")
number = int(input("Введите искомую цифру: "))
result = bin_search(arr, number)

if result == -1:
    print("Искомый цифровой элемент не найден в массиве")
else:
    print(
        f"Искомый цифровой элемент: {number} расположен по индексу: {result}")
