---
sidebar_position: 2
---

# Installation

Currently, the only way to install the package is to build it from source.

## Prerequisites

* [Rust](https://www.rust-lang.org/)
* [cargo](https://crates.io/crates/cargo)

## Building

1. Clone the repository

```bash
git clone https://github.com/Synthesized-Infinity/Ethereal.git
cd Ethereal
```
2. Build the package

```bash
cargo build --bin ethereal-bin --release
```

3. Add the binary to your PATH

```bash
export PATH=$PATH:$(pwd)/target/release
```

Pre-built binaries coming soon.