---
sidebar_position: 2
---

## Installation

### Install Ethereal

#### Download The Latest Version

1. Get the executable https://github.com/Synthesized-Infinity/Ethereal/releases/latest/

2. Extract the executable to a location of your choosing.

3. Add the executable to your PATH.

    - On Windows:
        - Open System Settings -> Control Panel -> System -> Advanced System Settings -> Environment Variables
        - Click on the "Edit" button next to "Path"
        - Add the path to the executable to the "Path" field.
            
    - On Linux:
        ```sh
        # Add the executable to the PATH of the current user.
        export PATH=$PATH:$HOME/Ethereal
        ```

### Building from Source

#### Prerequisites

* [Rust](https://www.rust-lang.org/)
* [cargo](https://crates.io/crates/cargo)

#### Building

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