- [Watchtradesforsymbols](./examples/py/)


 ```python
 import os
import sys

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
import asyncio
import ccxt.pro as ccxt  # noqa: E402


# AUTO-TRANSPILE #
async def example():
    binance = ccxt.binance({})
    symbols = ['BTC/USDT', 'ETH/USDT', 'DOGE/USDT']
    while True:
        trades = await binance.watch_trades_for_symbols(symbols)
        print(trades)

    await binance.close()


asyncio.run(example())
 
```