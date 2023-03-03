---
id: token
title: Token
---

### tokenEquals

_Checks if the current instance is equal to another (has an identical chainId and address)._

```graphql
tokenEquals(token: Token!, other: Token!): Boolean!
```

### tokenAmountEquals

_Compares two `TokenAmount` types for equality, returning true if they have the same token and same amount._

```graphql
tokenAmountEquals(
  tokenAmount0: TokenAmount!
  tokenAmount1: TokenAmount!
): Boolean!
```

### tokenSortsBefore

_Checks if the current instance sorts before another, by address._

```graphql
tokenSortsBefore(token: Token!, other: Token!): Boolean!
```
