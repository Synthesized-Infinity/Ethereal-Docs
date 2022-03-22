---
sidebar_position: 2
---

# Util

`std:util` is a collection of utility functions.

## `length(array | string)`

A function that returns the length of the given string or array.
Throws an error if the given value is not a string or array.

**Example:**

```etrl
length("Hello, world!"); // returns 13
length([1, 2, 3]); // returns 3
```

## `input(prompt)`

Reads a line of input from the user. The prompt is optional.
If prompt is provided, it is displayed to the user.

**Example:**

```etrl
set x = input("Enter a number: ");
```

## `sleep(milliseconds)`

Pauses the execution of the program for the given number of milliseconds.

**Example:**

```etrl
put("Sleeping for 3 seconds...");
sleep(3000);
put("Done!");
```