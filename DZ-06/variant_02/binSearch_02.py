def bin_search(numbers, value, min_index, max_index):
    if max_index < min_index:
        return -1

    mid = (max_index - min_index) // 2 + min_index

    if numbers[mid] < value:
        return bin_search(numbers, value, mid + 1, max_index)

    if numbers[mid] > value:
        return bin_search(numbers, value, min_index, mid - 1)

    return mid


my_nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 76, 101]
print(bin_search(my_nums, 19, 0, len(my_nums) - 1))
