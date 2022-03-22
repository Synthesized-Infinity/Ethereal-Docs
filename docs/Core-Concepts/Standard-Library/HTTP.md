---
sidebar_position: 7
---

# HTTP 


`std:http` is a collection of functions that allow you to interact with the HTTP protocol.

## `request(method, url, headers)`

Send an HTTP request.

**Example:**

```etrl
include "std:http";

set repos = request("GET", "https://api.github.com/users/alensaito1/repos", {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
});

put(repos.body);
```