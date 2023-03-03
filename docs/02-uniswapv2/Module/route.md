---
id: route
title: Route
---

### createRoute

_Creates a route._

```graphql
  createRoute(
    pairs: [Pair!]!
    input: Token!
    output: Token
  ): Route!
```

### routePath

_Returns the full path from input token to output token._

```graphql
  routePath(
    pairs: [Pair!]!
    input: Token!
  ): [Token!]!
```

### routeMidPrice

_Helper function for use in routeMidPrice and trade query functions._

```graphql
  routeMidPrice(
    route: Route!
  ): String!
```
