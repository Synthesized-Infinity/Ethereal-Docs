---
sidebar_position: 3
---

# Syntaxes

The Syntax of Ethereal is minimalistic. It's pretty easy to write a program.

## Variables

To set a variable, use the `set` keyword.
All variable declarations must end with a semicolon.


```etrl
set x = 1;
set y = "Hello, world!";
set z = [1, 2, 3];
```

To re-define a variable, use the `anew` keyword.

```etrl
set x = 1;
anew x = 2;
```

:::caution

Do not use the `anew` keyword to initially set a variable to a value.
Use the `set` keyword instead.
:::

## Functions
 
All functions must be bound to a variable.
To define a function, use the `fun` keyword.

Functions can be called with parameters.

```etrl
set add = fun(x, y) {
    x + y
};

add(1, 2);
```

:::tip

The return keyword is optional. The function will return the last expression.

:::

## Conditionals

Ethereal supports conditionals. To define a conditional, use the `if` keyword.

```etrl
if (x > y) {
    x
} else {
    y
}
```
:::tip
`else` block is optional.
:::

## Loop 

Loops are supported. To define a loop, use the `loop` keyword.
Use the `break` keyword to exit the loop. To continue the loop, use the `continue` keyword (optional)

```etrl

set i = 0;

loop {
    if (i > 10) {
        break;
    }
    put(i);
    anew i = i + 1;
    // continue;
}
```

## Type Checking

Ethereal supports runtime type checking.
To check types, use the `typeof` keyword.

```etrl

set is_string = fun(x) {
    typeof(x) == "string"
};

is_string("Hello, world!") // true
is_string(1) // false

```

## Modules and Imports

To include a module, use the `include` keyword followed by the module filename, standard library name, or a URL.

```etrl
include "./my_module";
include "std:math";
include "https://raw.githubusercontent.com/Synthesized-Infinity/Ethereal/main/examples/math.etrl";
```

Etheral will import all functions from the module to the current scope.

## Comments

Ethereal supports single line comments.
To comment a line, use the `//` symbol.

```etrl
// This is a comment
```


