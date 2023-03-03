---
id: router
title: Router
---

### swapCallParameters

_Returns the parameters for the swap._

```graphql
  swapCallParameters(
    trade: Trade!,
    tradeOptions: TradeOptions!
  ): SwapParameters!
```

### estimateGas

_Estimates the gas being used in the swap._

```graphql
  estimateGas(
    parameters: SwapParameters!
    chainId: ChainId
  ): String!
```

### execCallStatic

_Returns empty string if call would be successful, otherwise returns solidity contract error._

```graphql
  execCallStatic(
    parameters: SwapParameters!
    chainId: ChainId!
    txOverrides: TxOverrides
  ): String!
```
