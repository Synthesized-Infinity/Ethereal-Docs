---
sidebar_position: 4
---

# Array

`std:array` is a collection of functions that operate on arrays.

## push(array, value) 

Adds an element to the end of the array.

Example:

```etrl
set arr = [1, 2, 3];
anew arr = push(arr, 4);
```

## pop(array)

Removes the last element of the array and returns it.

Example:
```etrl
set arr = [1, 2, 3];
pop(arr);
```

## head(array)

Returns the first element of the array.

Example:
```etrl
set arr = [1, 2, 3];
head(arr);
```

## tail(array)

Removes the first element of the array and returns the rest.\

Example:
```etrl
set arr = [1, 2, 3];
tail(arr);
```

## includes(array, value)

Checks if the array contains the value.

Example:
```etrl
set arr = [1, 2, 3];
includes(arr, 2); // Returns true
includes(arr, 4); // Returns false
```

