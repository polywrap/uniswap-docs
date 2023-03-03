---
id: intro
title: Uniswap v3 Polywrap Documentation
sidebar_position: 0
---

## Overview

Welcome to the Uniswap v3 Polywrap documentation!

If you haven't seen our live Uniswap v3 application demo yet, please take a look!

[Uniswap v3 Polywrap wrapper Demo](https://morning-night-4265.on.fleek.co/#/swap)

The Uniswap Wasm wrapper is written in [AssemblyScript](https://www.assemblyscript.org/), and like the official Uniswap SDK, it has a robust test suite and performs arbitrary precision arithmetic. The Uniswap Polywrap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.

Our first Polywrap client is for JavaScript(`@polywrap/client-js`) and it can run in any environment that can execute JavaScript. We also have Polywrap clients in Rust and Python. In the future, we'll have Polywrap clients for other environments (Go, and more).

Developers integrating the Uniswap Wasm wrapper into their app would use client invocations to execute functions provided by the Uniswap wrapper. This documentation shows you which functions are made available by the Uniswap wrapper and how to use them.

## Uniswap wrapper vs. Existing SDK

The Uniswap wrapper aims to be a substantial improvement over Uniswap v3’s [existing SDK](https://docs.uniswap.org/sdk/introduction).

While the official SDK bundles all classes (e.g. `Trade`), necessary data fields, and helper functions into the application, the Uniswap wrapper does not. Instead, all business logic is deployed on a decentralized endpoint, like IPFS, and is downloaded at runtime when the client application launches.

You can learn more about the benefits of using Polywrap [here](https://docs.polywrap.io).

## Usage

In general, to use _any_ Polywrap in your application, all you need is the Polywrap Client.

```
npm install --save @polywrap/client-js
```

The Polywrap JavaScript Client works in both Node.js and browser applications.

Then, initialize the client.

```typescript
import { PolywrapClient } from '@polywrap/client-js';
const client = new PolywrapClient();
```

Now, you're ready to invoke the Uniswap v3 Polywrap wrapper!

```ts title="Example: tokenEquals"
const tokenEqualsResult: InvokeResult<boolean> = client.invoke<boolean>({
  uri: 'ens/goerli/v3.uniswap.wrappers.eth',
  method: "tokenEquals",
  args: {
    token: token,
    other: other,
  }
});

if (!tokenEqualsResult.ok) throw tokenEqualsResult.error;

const tokenEquals: boolean = tokenEqualsResult.value;
```
```ts title="Example: swapCallParameters"
const parametersResult = await client.invoke<MethodParameters>({
  uri: 'ens/goerli/v3.uniswap.wrappers.eth',
  method: "swapCallParameters",
  args: {
    trades: bestTrades,
    options: {
      slippageTolerance: "0.01",
      recipient: recipient,
      deadline: "123",
    }
  }
});

if (!parametersResult.ok) throw parametersResult.error;

const swapCallParameters: MethodParameters = parametersResult.value;
```

Learn to use Polywrap in your app with our [Integrate Wrappers](https://docs.polywrap.io/quick-start/integrate-wrappers/install-client) guide.

## Code

[source code is available on GitHub](https://github.com/polywrap/integrations/tree/main/protocol/ethereum/uniswapv3/wrapper).
