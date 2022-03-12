---
sidebar_position: 6
---

# Math

`std:math` is a collection of functions that operate on numbers.

## `random(min?, max?)`

Returns a random number between `min` and `max`.

Example:
```etrl
random(1, 10);
```

## `round(number)`

Round the given number to the nearest integer.

Example:
```etrl
round(3.14) // returns 3
```

## `floor(number)`

Given a number, returns the largest integer that is less than or equal to the given number.

Example:
```etrl
floor(10.2) // returns 10
```

## `ceil(number)`

Given a number, returns the smallest integer that is greater than or equal to the given number.

Example:
```etrl
ceil(10.2) // returns 11
```

## `abs(number)`

Returns the absolute value of the number.

Example:
```etrl
abs(-10) // returns 10
```

## `sqrt(number)`

Returns the square root of the number.

Example:
```etrl
sqrt(9) // returns 3
```

## `MIN_INT` and `MAX_INT`

The minimum and maximum integer values that can be represented by Ethereal