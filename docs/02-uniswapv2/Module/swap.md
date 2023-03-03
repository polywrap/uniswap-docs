---
id: swap
title: Swap
---

### swap

_Select token in and token out and amount for the swap._

```graphql
  swap (
    tokenIn: Token!
    tokenOut: Token!
    amount: BigInt!
    tradeType: TradeType!
    tradeOptions: TradeOptions!
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```

### exec

_Executes the trade._

```graphql
  exec(
    trade: Trade!
    tradeOptions: TradeOptions!
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```

### execCall

_Executes swap given swap parameters and chain ID._

```graphql
  execCall(
    parameters: SwapParameters!
    chainId: ChainId!
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```

### approve

_Approves tokens in the swap._

```graphql
  approve(
    token: Token!
    amount: BigInt
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```
