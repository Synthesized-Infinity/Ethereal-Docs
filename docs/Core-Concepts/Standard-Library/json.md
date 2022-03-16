---
sidebar_position: 7
---

# Json

`std:json` is a collection of functions that operate on JSON.

## `json_parse(string)`

Parse the given string as JSON.

```etrl
include "std:fs";
include "std:json";

set file = read_file("path/to/file.json");
set json = json_parse(file); // returns a JSON object
```
