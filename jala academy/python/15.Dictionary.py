# 1. Create dictionary with 5 key-value pairs
students = {
    101: "Farhan",
    102: "Aaqil",
    103: "Durrani",
    104: "Nohel",
    105: "Rayyan"
}
print(students)
# Output: {101: 'Farhan', 102: 'Aaqil', 103: 'Durrani', 104: 'Nohel', 105: 'Rayyan'}

# 1.1 Add values
students[106] = "Frank"
print(students)
# Output: {101: 'Farhan', 102: 'Aaqil', 103: 'Durrani', 104: 'Nohel', 105: 'Rayyan', 106: 'Frank'}

# 1.2 Update values
students[103] = "Chris"
print(students)
# Output: {101: 'Farhan', 102: 'Aaqil', 103: 'Chris', 104: 'Nohel', 105: 'Rayyan', 106: 'Frank'}

# 1.3 Access values
print(students[104])
# Output: Nohel

# 1.4 Nested dictionary
nested_students = {
    "ClassA": {201: "Farhan", 202: "Aaqil"},
    "ClassB": {203: "Durrani", 204: "Nohel"}
}
print(nested_students)
# Output: {'ClassA': {201: 'Farhan', 202: 'Aaqil'}, 'ClassB': {203: 'Durrani', 204: 'Nohel'}}

# 1.5 Access nested dictionary values
print(nested_students["ClassA"][201])
# Output: Farhan

# 1.6 Print keys
print(students.keys())
# Output: dict_keys([101, 102, 103, 104, 105, 106])

# 1.7 Delete a value
del students[102]
print(students)
# Output: {101: 'Farhan', 103: 'Chris', 104: 'Nohel', 105: 'Rayyan', 106: 'Frank'}
