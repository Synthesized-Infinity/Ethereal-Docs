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
set z = x+y; // Performs arithmetic addition

put(z);   // Prints 3
```

### Subtraction Operator

The Subtraction Operator "-" is used to add numbers or strings

```etrl
set x = 4;
set y = 2;
set z = x-y; // Performs arithmetic subtraction

put(z);   // Prints 2
```

### Multiplication Operator

The Multiplication Operator "\*" is used to add numbers or strings

```etrl
set x = 4;
set y = 5;
set z = x*y; // Performs arithmetic multiplication

put(z);   // Prints 20
```

### Division Operator

The Division Operator "/" is used to add numbers or strings

```etrl
set x = 10;
set y = 4;
set z = x/y; // Performs arithmetic division

put(z);   // Prints 2.5
```

## Logical Operators

The "==" operator returns true if the two operands are equal, else returns false

```etrl
set x = 10;
set y = 4;
set z = x==y; // Performs equality comparison

put(z);   // Prints false
```

The "<" and ">" operators respectively check if first operand is less than or greater than the second operator

```etrl
set x = 10;
set y = 4;

set z = x<y; // Performs less than comparison and assigns the value to z

put(z);   // Prints false

set z = x>y;  // Performs greater than comparison and assigns the value to z

put(z);   // Prints true
```

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

The "~" operator returns true if a certain key is present in an object else, returns false

```etrl
set maintainers = [
  {name:"Alen", age:18 },
  {name:"Prajjwal", age:21 },
  {name:"Shubham", age:20 },
  {name:"Ganesh", age:21 }
];

set z = {name:"Bilal", age:18} ~ maintainers;

put(z);   // Prints false
```
