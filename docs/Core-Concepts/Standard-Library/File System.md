---
sidebar_position: 3
---

# File System

`std:fs` is a collection of functions that allow you to interact with the file system.

## `read_file(filename)`

This function reads the contents of a file and returns it as a string.

Example:
```etrl
read_file("path/to/file.txt");
```
## `write_file(filename, contents)`

Write the given string to the given file.

Example:
```etrl
write_file("path/to/file.txt", "Hello, world!");
```

## `file_exists(filename)`

Checks if the given file exists. Returns `true` if it does, `false` otherwise.

Example:
```etrl
file_exists("path/to/file.txt");
```



