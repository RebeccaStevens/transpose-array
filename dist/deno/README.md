<div align="center">

# transpose-array

[![npm version](https://img.shields.io/npm/v/transpose-array.svg)](https://www.npmjs.com/package/transpose-array)
[![deno version](https://img.shields.io/github/v/tag/RebeccaStevens/transpose-array?label=deno&sort=semver)](https://deno.land/x/transposearray)
[![CI](https://github.com/RebeccaStevens/transpose-array/actions/workflows/ci.yml/badge.svg)](https://github.com/RebeccaStevens/transpose-array/actions/workflows/ci.yml)
[![Coverage Status](https://codecov.io/gh/RebeccaStevens/transpose-array/branch/main/graph/badge.svg?token=MVpR1oAbIT)](https://codecov.io/gh/RebeccaStevens/transpose-array)\
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub Discussions](https://img.shields.io/github/discussions/RebeccaStevens/transpose-array?style=flat-square)](https://github.com/RebeccaStevens/transpose-array/discussions)
[![BSD 3 Clause license](https://img.shields.io/github/license/RebeccaStevens/transpose-array.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Perform the matrix operation [transpose](https://en.wikipedia.org/wiki/Transpose) on an array respecting type information.

</div>

## Donate

[Any donations would be much appreciated](./DONATIONS.md). 😄

## Installation

### Node

```sh
# Install with npm
npm install transpose-array

# Install with pnpm
pnpm add transpose-array

# Install with yarn
yarn add transpose-array
```

### Deno

```jsonc
// import_map.json
{
  "imports": {
    "transpose-array": "https://deno.land/x/transposearray@__version__/dist/deno/index.ts"
  }
}
```

## Usage

```ts
import transpose from "transpose-array";

const data = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
]

const transposedData = transpose(data);
// => [
//   ['a', 'e', 'i'],
//   ['b', 'f', 'j'],
//   ['c', 'g', 'k'],
//   ['d', 'h', 'l'],
// ]
```

## API

### `transpose(array)` \[default\]

Create a new array which is a transposed version of the given array.

### `transposeInPlace(array)`

Modifies the given array in order to transpose it.
