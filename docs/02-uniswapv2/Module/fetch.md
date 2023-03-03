---
id: fetch
title: Fetch
---

### fetchTokenData

_Fetches token data._

```graphql
  fetchTokenData(
    chainId: ChainId!
    address: String!
    symbol: String
    name: String
  ): Token!
```

### fetchTotalSupply

_Fetches total supply._

```graphql
  fetchTotalSupply(
    token: Token!
  ): TokenAmount!
```

### fetchPairData

_Fetches pair data._

```graphql
  fetchPairData(
    token0: Token!
    token1: Token!
  ): Pair!
```
