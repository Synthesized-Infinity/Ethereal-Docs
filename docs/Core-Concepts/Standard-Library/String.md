---
sidebar_position: 5
---

# String

`std:string` is a collection of functions that operate on strings.

## `replace()`

Replaces all occurrences of the given string with the given replacement.

**Example:**

```etrl
replace("Hello, world!", "world", "Ethereal");
```

## `to_string()`

Converts the given value to a string.

**Example:**

```etrl
to_string(123); // returns "123"
to_string(true); // returns "true"
to_string([1, 2, 3]); // returns "[1, 2, 3]"
```