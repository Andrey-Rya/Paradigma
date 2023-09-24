# / Написать скрипт для расчета корреляции Пирсона между
# двумя случайными величинами (двумя массивами).

from scipy.stats.stats import pearsonr

ar1 = [7, 5, 8, 3, -3, -2, 0]
ar2 = [2, 4, 6, 2, 3, 1, 4]
print(ar1)
print(ar2)

print(pearsonr(ar1, ar2))
