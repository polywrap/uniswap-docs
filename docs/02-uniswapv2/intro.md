---
id: intro
title: Uniswap v2 Polywrap Documentation
sidebar_position: 0
---

## Overview

Welcome to the Uniswap v2 Polywrap documentation!

If you haven't seen our live Uniswap v2 application demo yet, please take a look at it first!

[Uniswap v2 Polywrap wrapper Demo](https://demo.uniswapv2.polywrap.io/#/swap)

The Uniswap Wasm wrapper is written in [AssemblyScript](https://www.assemblyscript.org/), and like the official Uniswap SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.

Our first Polywrap client is for JavaScript(`@polywrap/client-js`) and it can run in any environment that can execute JavaScript. We also have Polywrap clients in Rust and Python. In the future, we'll have Polywrap clients for other environments (Go, and more).

This documentation shows you which functions are made available by the Uniswap wrapper and how to use them.

## Uniswap Polywrap vs. Existing SDK

The Uniswap Wasm wrapper aims to be a substantial improvement over Uniswap v2’s [existing SDK](https://uniswap.org/docs/v2/SDK/getting-started/).

While the official SDK bundles all classes (e.g. `Token`), necessary data fields, and helper functions into the application, the Uniswap wrapper does not. Instead, all business logic is deployed on a decentralized endpoint, like IPFS, and is downloaded at runtime when the client application launches.

You can learn more about the benefits of using Polywrap [here](/).

## Usage

We've created an interactive tutorial that can help you get started using the Uniswap wrapper [here](https://github.com/polywrap/uni-workshop).

In general, to use _any_ Polywrap in your app, all you need is the Polywrap Client.

```
npm install --save @polywrap/client-js
```

The Polywrap JavaScript Client works in both Node.js and browser applications.

Then, initialize the client.

```typescript
import { PolywrapClient } from '@polywrap/client-js';
const client = new PolywrapClient();
```

Now, you're ready to invoke the Uniswap v2 Polywrap wrapper!

```typescript
client.invoke({
  uri: 'ens/goerli/v2.uniswap.wrappers.eth',
  method: "tokenEquals",
  args: {
    token: token,
    other: other,
  }
});
```

Learn to use Polywrap in your app with our [Integrate Wrappers](https://docs.polywrap.io/quick-start/integrate-wrappers/install-client) guide.

## Code

[source code is available on GitHub](https://github.com/polywrap/integrations/tree/main/protocol/ethereum/uniswapv2).
