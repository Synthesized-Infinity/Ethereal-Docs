---
sidebar_position: 8
---

# Hash

`std:hash` is a collection of functions that operate on Hashes. Use it to create secure hashes.

## hasher(algo, data)

`hasher()` creates a string hash using the given algorithm and data.

### Supported Algorithms:
    - md5
    - sha1
    - sha256
    - sha512
    - sha3_256
    - sha3_512
    - whirlpool


**Example:**

```etrl
set hash = hasher("sha256", "Hello World!");
put(hash);
```