---
sidebar_position: 4
---

# Operators

An Operator is a symbol which operates on a value or date representing a specific action on working with data. It tells compiler to perform specific mathematical or logical functions.

The value or data on which the operators operates is called operand.

## Arithmetic Operators

### Addition Operator

The Addition Operator "+" is used to add numbers or strings

```etrl
set x = 1;
set y = 2;
set z = x + y; // Performs arithmetic addition

put(z);   // Prints 3
```

### Subtraction Operator

The Subtraction Operator "-" is used to add numbers or strings

```etrl
set x = 4;
set y = 2;
set z = x - y; // Performs arithmetic subtraction

put(z);   // Prints 2
```

### Multiplication Operator

The Multiplication Operator "\*" is used to add numbers or strings

```etrl
set x = 4;
set y = 5;
set z = x * y; // Performs arithmetic multiplication

put(z);   // Prints 20
```

### Division Operator

The Division Operator "/" is used to add numbers or strings

```etrl
set x = 10;
set y = 4;
set z = x / y; // Performs arithmetic division

put(z);   // Prints 2.5
```

## Logical Operators

### Equality Operator

The "==" operator returns true if the two operands are equal, else returns false

```etrl
set x = 10;
set y = 4;
set z = x == y; // Performs equality comparison

put(z);   // Prints false
```

### Less/Greater Than Operator

The "<" and ">" operators respectively check if first operand is less than or greater than the second operator

```etrl
set x = 10;
set y = 4;

set z = x < y; // Performs less than comparison and assigns the value to z

put(z);   // Prints false

set z = x > y;  // Performs greater than comparison and assigns the value to z

put(z);   // Prints true
```

### LessEqual/GreaterEqual Operator

The "<=" and ">=" operators respectively check if first operand is less than equal to or greater than equal to the second operator

```etrl
set x = 10;
set y = 4;

set z = x<=y; // Performs less than equal to comparison and assigns the value to z

put(z);   // Prints false

anew x = 4;

set z = x>=y;  // Performs greater than equal to comparison and assigns the value to z

put(z);   // Prints true
```

### Tide/In Operator

The "~" operator returns true if a certain key is present in an object else, returns false

```etrl
set maintainers = {
  "Alen": {
    "age": 18
  },
  "Prajjwal": {
    "age": 21
  },
  "Shubham": {
    "age": 20
  },
  "Ganesh": {
    "age": 21
  }
};

set is_maintainer = fun (name) {
  return name ~ maintainers;
};

put(is_maintainer("Shubham")); // Prints true
put(is_maintainer("Bilal")); // Prints false
```
