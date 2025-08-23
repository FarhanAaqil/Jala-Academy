#add values of array
def add_array(arr):
    return sum(arr)

print(add_array([1, 2, 3, 4]))
#output: 10

#average value of array
def avg_array(arr):
    return sum(arr) / len(arr)

print(avg_array([1, 2, 3, 4]))
#output: 2.5

#find index of an array element
arr = [10, 20, 30, 40]
print(arr.index(30))
#output: 2

#test if array contains a specific value
arr = [5, 10, 15, 20]
print(15 in arr)
#output: True

#remove a specific element
arr = [1, 2, 3, 4, 5]
arr.remove(3)
print(arr)
#output: [1, 2, 4, 5]

#copy an array to another array
arr = [1, 2, 3]
copy_arr = arr[:]
print(copy_arr)
#output: [1, 2, 3]

#insert an element at a specific position
arr = [1, 2, 4, 5]
arr.insert(2, 3)
print(arr)
#output: [1, 2, 3, 4, 5]

#find the minimum and maximum value in an array
arr = [5, 10, 1, 20]
print("Min:", min(arr))
print("Max:", max(arr))
#output: Min: 1 Max: 20

#reverse the array
arr = [1, 2, 3, 4]
print(arr[::-1])
#output: [4, 3, 2, 1]

#find duplicate values in an array
arr = [1, 2, 3, 2, 4, 1]
dupes = [x for x in set(arr) if arr.count(x) > 1]
print(dupes)
#output: [1, 2]

#find common values between two arrays
a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
print(list(set(a) & set(b)))
#output: [3, 4]

#remove duplicate values from an array
arr = [1, 2, 2, 3, 4, 4, 5]
print(list(set(arr)))
#output: [1, 2, 3, 4, 5]

#find the second largest number in an array
arr = [10, 20, 30, 40]
print(sorted(set(arr))[-2])
#output: 30

#find the second smallest number in an array
arr = [10, 20, 30, 40]
print(sorted(set(arr))[1])
#output: 20

#count even and odd numbers in an array
arr = [1, 2, 3, 4, 5, 6]
even = len([x for x in arr if x % 2 == 0])
odd = len([x for x in arr if x % 2 != 0])
print("Even:", even, "Odd:", odd)
#output: Even: 3 Odd: 3

#find the difference between the largest and smallest values in an array
arr = [5, 10, 25, 3]
print(max(arr) - min(arr))
#output: 22

#verify if array contains 12 and 23
arr = [10, 12, 15, 23, 30]
print(12 in arr and 23 in arr)
#output: True

#remove duplicates and return new array
arr = [1, 2, 2, 3, 4, 4, 5]
new_arr = list(dict.fromkeys(arr))
print(new_arr)
#output: [1, 2, 3, 4, 5]