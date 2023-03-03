---
id: object-types
title: Object Types
---

### Currency

```graphql
type Currency {
  decimals: UInt8!
  symbol: String
  name: String
}
```

### Pair

```graphql
type Pair {
  tokenAmount0: TokenAmount!
  tokenAmount1: TokenAmount!
}
```

### Route

```graphql
type Route {
  path: [Token!]!
  pairs: [Pair!]!
  input: Token!
  output: Token!
}
```

### Swap Parameters

```graphql
type SwapParameters {
  methodName: String!
  args: [String!]!
  value: String!
}
```

### Token

```graphql
type Token {
  chainId: ChainId!
  address: String!
  currency: Currency!
}
```

### TokenAmount

```graphql
type TokenAmount {
  token: Token!
  amount: String! # UInt256!
}
```

### Trade

```graphql
type Trade {
  route: Route!
  inputAmount: TokenAmount!
  outputAmount: TokenAmount!
  tradeType: TradeType!
}
```

### TradeOptions

```graphql
type TradeOptions {
  allowedSlippage: String!
  recipient: String!
  unixTimestamp: UInt64!
  ttl: UInt32
  deadline: UInt32
  feeOnTransfer: Boolean
}
```

### TxOverrides

```graphql
type TxOverrides {
  gasPrice: BigInt
  gasLimit: BigInt
}
```
