
<a name="binance" id="binance"></a>

## binance{docsify-ignore}
**Kind**: global class  
**Extends**: <code>Exchange</code>  

* [fetchTime](#fetchtime)
* [fetchCurrencies](#fetchcurrencies)
* [fetchMarkets](#fetchmarkets)
* [fetchBalance](#fetchbalance)
* [fetchOrderBook](#fetchorderbook)
* [fetchStatus](#fetchstatus)
* [fetchTicker](#fetchticker)
* [fetchBidsAsks](#fetchbidsasks)
* [fetchLastPrices](#fetchlastprices)
* [fetchTickers](#fetchtickers)
* [fetchOHLCV](#fetchohlcv)
* [fetchTrades](#fetchtrades)
* [editContractOrder](#editcontractorder)
* [editOrder](#editorder)
* [createOrders](#createorders)
* [createOrder](#createorder)
* [createMarketOrderWithCost](#createmarketorderwithcost)
* [createMarketBuyOrderWithCost](#createmarketbuyorderwithcost)
* [createMarketSellOrderWithCost](#createmarketsellorderwithcost)
* [fetchOrder](#fetchorder)
* [fetchOrders](#fetchorders)
* [fetchOpenOrders](#fetchopenorders)
* [fetchOpenOrder](#fetchopenorder)
* [fetchClosedOrders](#fetchclosedorders)
* [fetchCanceledOrders](#fetchcanceledorders)
* [fetchCanceledAndClosedOrders](#fetchcanceledandclosedorders)
* [cancelOrder](#cancelorder)
* [cancelAllOrders](#cancelallorders)
* [cancelOrders](#cancelorders)
* [fetchOrderTrades](#fetchordertrades)
* [fetchMyTrades](#fetchmytrades)
* [fetchMyDustTrades](#fetchmydusttrades)
* [fetchDeposits](#fetchdeposits)
* [fetchWithdrawals](#fetchwithdrawals)
* [transfer](#transfer)
* [fetchTransfers](#fetchtransfers)
* [fetchDepositAddress](#fetchdepositaddress)
* [fetchTransactionFees](#fetchtransactionfees)
* [fetchDepositWithdrawFees](#fetchdepositwithdrawfees)
* [withdraw](#withdraw)
* [fetchTradingFee](#fetchtradingfee)
* [fetchTradingFees](#fetchtradingfees)
* [fetchFundingRate](#fetchfundingrate)
* [fetchFundingRateHistory](#fetchfundingratehistory)
* [fetchFundingRates](#fetchfundingrates)
* [fetchLeverageTiers](#fetchleveragetiers)
* [fetchPosition](#fetchposition)
* [fetchOptionPositions](#fetchoptionpositions)
* [fetchPositions](#fetchpositions)
* [fetchFundingHistory](#fetchfundinghistory)
* [setLeverage](#setleverage)
* [setMarginMode](#setmarginmode)
* [setPositionMode](#setpositionmode)
* [fetchLeverages](#fetchleverages)
* [fetchSettlementHistory](#fetchsettlementhistory)
* [fetchMySettlementHistory](#fetchmysettlementhistory)
* [fetchLedger](#fetchledger)
* [reduceMargin](#reducemargin)
* [addMargin](#addmargin)
* [fetchCrossBorrowRate](#fetchcrossborrowrate)
* [fetchIsolatedBorrowRate](#fetchisolatedborrowrate)
* [fetchIsolatedBorrowRates](#fetchisolatedborrowrates)
* [fetchBorrowRateHistory](#fetchborrowratehistory)
* [createGiftCode](#creategiftcode)
* [redeemGiftCode](#redeemgiftcode)
* [verifyGiftCode](#verifygiftcode)
* [fetchBorrowInterest](#fetchborrowinterest)
* [repayCrossMargin](#repaycrossmargin)
* [repayIsolatedMargin](#repayisolatedmargin)
* [borrowCrossMargin](#borrowcrossmargin)
* [borrowIsolatedMargin](#borrowisolatedmargin)
* [fetchOpenInterestHistory](#fetchopeninteresthistory)
* [fetchOpenInterest](#fetchopeninterest)
* [fetchMyLiquidations](#fetchmyliquidations)
* [fetchGreeks](#fetchgreeks)
* [fetchPositionMode](#fetchpositionmode)
* [fetchMarginMode](#fetchmarginmode)
* [fetchOption](#fetchoption)
* [fetchConvertCurrencies](#fetchconvertcurrencies)
* [fetchConvertQuote](#fetchconvertquote)
* [createConvertTrade](#createconverttrade)
* [fetchConvertTrade](#fetchconverttrade)
* [fetchConvertTradeHistory](#fetchconverttradehistory)
* [watchLiquidations](#watchliquidations)
* [watchLiquidationsForSymbols](#watchliquidationsforsymbols)
* [watchMyLiquidations](#watchmyliquidations)
* [watchMyLiquidationsForSymbols](#watchmyliquidationsforsymbols)
* [watchOrderBook](#watchorderbook)
* [watchOrderBookForSymbols](#watchorderbookforsymbols)
* [fetchOrderBookWs](#fetchorderbookws)
* [watchTradesForSymbols](#watchtradesforsymbols)
* [watchTrades](#watchtrades)
* [watchOHLCV](#watchohlcv)
* [fetchTickerWs](#fetchtickerws)
* [fetchOHLCVWs](#fetchohlcvws)
* [watchTicker](#watchticker)
* [watchTickers](#watchtickers)
* [watchBidsAsks](#watchbidsasks)
* [fetchBalanceWs](#fetchbalancews)
* [fetchPositionWs](#fetchpositionws)
* [fetchPositionsWs](#fetchpositionsws)
* [watchBalance](#watchbalance)
* [createOrderWs](#createorderws)
* [editOrderWs](#editorderws)
* [cancelOrderWs](#cancelorderws)
* [cancelAllOrdersWs](#cancelallordersws)
* [fetchOrderWs](#fetchorderws)
* [fetchOrdersWs](#fetchordersws)
* [fetchClosedOrdersWs](#fetchclosedordersws)
* [fetchOpenOrdersWs](#fetchopenordersws)
* [watchOrders](#watchorders)
* [watchPositions](#watchpositions)
* [fetchMyTradesWs](#fetchmytradesws)
* [fetchTradesWs](#fetchtradesws)
* [watchMyTrades](#watchmytrades)

<a name="fetchTime" id="fetchtime"></a>

### fetchTime{docsify-ignore}
fetches the current integer timestamp in milliseconds from the exchange server

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>int</code> - the current integer timestamp in milliseconds from the exchange server

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#check-server-time                            // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Check-Server-Time    // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Check-Server-time             // future


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchTime ([params])
```


<a name="fetchCurrencies" id="fetchcurrencies"></a>

### fetchCurrencies{docsify-ignore}
fetches all available currencies on an exchange

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an associative dictionary of currencies

**See**: https://developers.binance.com/docs/wallet/capital/all-coins-info  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchCurrencies ([params])
```


<a name="fetchMarkets" id="fetchmarkets"></a>

### fetchMarkets{docsify-ignore}
retrieves data on all markets for binance

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - an array of objects representing market data

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#exchange-information                             // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Exchange-Information     // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Exchange-Information              // future
- https://developers.binance.com/docs/derivatives/option/market-data/Exchange-Information                             // option


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchMarkets ([params])
```


<a name="fetchBalance" id="fetchbalance"></a>

### fetchBalance{docsify-ignore}
query for balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#account-information-user_data                    // spot
- https://developers.binance.com/docs/margin_trading/account/Query-Cross-Margin-Account-Details                       // cross margin
- https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Account-Info                       // isolated margin
- https://developers.binance.com/docs/wallet/asset/funding-wallet                                                     // funding
- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Futures-Account-Balance-V2   // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Futures-Account-Balance               // future
- https://developers.binance.com/docs/derivatives/option/account/Option-Account-Information                           // option
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Account-Balance                            // portfolio margin


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code> | No | 'future', 'delivery', 'savings', 'funding', or 'spot' or 'papi' |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated', for margin trading, uses this.options.defaultMarginMode if not passed, defaults to undefined/None/null |
| params.symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | No | unified market symbols, only used in isolated margin mode |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the balance for a portfolio margin account |
| params.subType | <code>string</code> | No | 'linear' or 'inverse' |


```javascript
binance.fetchBalance ([params])
```


<a name="fetchOrderBook" id="fetchorderbook"></a>

### fetchOrderBook{docsify-ignore}
fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#order-book                           // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Order-Book   // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Order-Book            // future
- https://developers.binance.com/docs/derivatives/option/market-data/Order-Book                           // option


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOrderBook (symbol[, limit, params])
```


<a name="fetchStatus" id="fetchstatus"></a>

### fetchStatus{docsify-ignore}
the latest known information on the availability of the exchange API

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [status structure](https://docs.ccxt.com/#/?id=exchange-status-structure)

**See**: https://developers.binance.com/docs/wallet/others/system-status  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchStatus ([params])
```


<a name="fetchTicker" id="fetchticker"></a>

### fetchTicker{docsify-ignore}
fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#24hr-ticker-price-change-statistics                           // spot
- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#rolling-window-price-change-statistics                        // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/24hr-Ticker-Price-Change-Statistics   // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/24hr-Ticker-Price-Change-Statistics            // future
- https://developers.binance.com/docs/derivatives/option/market-data/24hr-Ticker-Price-Change-Statistics                           // option


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.rolling | <code>boolean</code> | No | (spot only) default false, if true, uses the rolling 24 hour ticker endpoint /api/v3/ticker |


```javascript
binance.fetchTicker (symbol[, params])
```


<a name="fetchBidsAsks" id="fetchbidsasks"></a>

### fetchBidsAsks{docsify-ignore}
fetches the bid and ask price and volume for multiple markets

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a dictionary of [ticker structures](https://docs.ccxt.com/#/?id=ticker-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-order-book-ticker                         // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Order-Book-Ticker // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Symbol-Order-Book-Ticker          // future


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | unified symbols of the markets to fetch the bids and asks for, all markets are returned if not assigned |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchBidsAsks (symbols[, params])
```


<a name="fetchLastPrices" id="fetchlastprices"></a>

### fetchLastPrices{docsify-ignore}
fetches the last price for multiple markets

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a dictionary of lastprices structures

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-price-ticker                          // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Price-Ticker  // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Symbol-Price-Ticker           // future


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | unified symbols of the markets to fetch the last prices |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchLastPrices (symbols[, params])
```


<a name="fetchTickers" id="fetchtickers"></a>

### fetchTickers{docsify-ignore}
fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a dictionary of [ticker structures](https://docs.ccxt.com/#/?id=ticker-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#24hr-ticker-price-change-statistics                          // spot
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/24hr-Ticker-Price-Change-Statistics  // swap
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/24hr-Ticker-Price-Change-Statistics           // future
- https://developers.binance.com/docs/derivatives/option/market-data/24hr-Ticker-Price-Change-Statistics                          // option


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |
| params.type | <code>string</code> | No | 'spot', 'option', use params["subType"] for swap and future markets |


```javascript
binance.fetchTickers ([symbols, params])
```


<a name="fetchOHLCV" id="fetchohlcv"></a>

### fetchOHLCV{docsify-ignore}
fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#klinecandlestick-data
- https://developers.binance.com/docs/derivatives/option/market-data/Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Index-Price-Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price-Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Premium-Index-Kline-Data
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Index-Price-Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Mark-Price-Kline-Candlestick-Data
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Premium-Index-Kline-Data


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.price | <code>string</code> | No | "mark" or "index" for mark price and index price candles |
| params.until | <code>int</code> | No | timestamp in ms of the latest candle to fetch |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |


```javascript
binance.fetchOHLCV (symbol, timeframe[, since, limit, params])
```


<a name="fetchTrades" id="fetchtrades"></a>

### fetchTrades{docsify-ignore}
get the list of most recent trades for a particular symbol
Default fetchTradesMethod

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Trade&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#compressedaggregate-trades-list                          // publicGetAggTrades (spot)
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Compressed-Aggregate-Trades-List // fapiPublicGetAggTrades (swap)
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Compressed-Aggregate-Trades-List          // dapiPublicGetAggTrades (future)
- https://developers.binance.com/docs/derivatives/option/market-data/Recent-Trades-List                                       // eapiPublicGetTrades (option)
Other fetchTradesMethod
- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#recent-trades-list                                       // publicGetTrades (spot)
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Recent-Trades-List               // fapiPublicGetTrades (swap)
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Recent-Trades-List                        // dapiPublicGetTrades (future)
- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#old-trade-lookup                                         // publicGetHistoricalTrades (spot)
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Old-Trades-Lookup                // fapiPublicGetHistoricalTrades (swap)
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Old-Trades-Lookup                         // dapiPublicGetHistoricalTrades (future)
- https://developers.binance.com/docs/derivatives/option/market-data/Old-Trades-Lookup                                        // eapiPublicGetHistoricalTrades (option)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | only used when fetchTradesMethod is 'publicGetAggTrades', 'fapiPublicGetAggTrades', or 'dapiPublicGetAggTrades' |
| limit | <code>int</code> | No | default 500, max 1000 |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | only used when fetchTradesMethod is 'publicGetAggTrades', 'fapiPublicGetAggTrades', or 'dapiPublicGetAggTrades' |
| params.fetchTradesMethod | <code>int</code> | No | 'publicGetAggTrades' (spot default), 'fapiPublicGetAggTrades' (swap default), 'dapiPublicGetAggTrades' (future default), 'eapiPublicGetTrades' (option default), 'publicGetTrades', 'fapiPublicGetTrades', 'dapiPublicGetTrades', 'publicGetHistoricalTrades', 'fapiPublicGetHistoricalTrades', 'dapiPublicGetHistoricalTrades', 'eapiPublicGetHistoricalTrades' |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) EXCHANGE SPECIFIC PARAMETERS |
| params.fromId | <code>int</code> | No | trade id to fetch from, default gets most recent trades, not used when fetchTradesMethod is 'publicGetTrades', 'fapiPublicGetTrades', 'dapiPublicGetTrades', or 'eapiPublicGetTrades' |


```javascript
binance.fetchTrades (symbol[, since, limit, params])
```


<a name="editContractOrder" id="editcontractorder"></a>

### editContractOrder{docsify-ignore}
edit a trade order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Order
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Modify-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | cancel order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.editContractOrder (id, symbol, type, side, amount[, price, params])
```


<a name="editOrder" id="editorder"></a>

### editOrder{docsify-ignore}
edit a trade order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-an-existing-order-and-send-a-new-order-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Order
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Modify-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | cancel order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.editOrder (id, symbol, type, side, amount[, price, params])
```


<a name="createOrders" id="createorders"></a>

### createOrders{docsify-ignore}
*contract only* create a list of trade orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Place-Multiple-Orders
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Place-Multiple-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Place-Multiple-Orders


| Param | Type | Description |
| --- | --- | --- |
| orders | <code>Array</code> | list of orders to create, each object should contain the parameters required by createOrder, namely symbol, type, side, amount, price and params |


```javascript
binance.createOrders (orders, [undefined])
```


<a name="createOrder" id="createorder"></a>

### createOrder{docsify-ignore}
create a trade order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade
- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#test-new-order-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/New-Order
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/New-Order
- https://developers.binance.com/docs/derivatives/option/trade/New-Order
- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#sor
- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#test-new-order-using-sor-trade
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-UM-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-CM-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-Margin-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-UM-Conditional-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-CM-Conditional-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' or 'STOP_LOSS' or 'STOP_LOSS_LIMIT' or 'TAKE_PROFIT' or 'TAKE_PROFIT_LIMIT' or 'STOP' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of you want to trade in units of the base currency |
| price | <code>float</code> | No | the price that the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.reduceOnly | <code>string</code> | No | for swap and future reduceOnly is a string 'true' or 'false' that cant be sent with close position set to true or in hedge mode. For spot margin and option reduceOnly is a boolean. |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated', for spot margin trading |
| params.sor | <code>boolean</code> | No | *spot only* whether to use SOR (Smart Order Routing) or not, default is false |
| params.test | <code>boolean</code> | No | *spot only* whether to use the test endpoint or not, default is false |
| params.trailingPercent | <code>float</code> | No | the percent to trail away from the current market price |
| params.trailingTriggerPrice | <code>float</code> | No | the price to trigger a trailing order, default uses the price argument |
| params.triggerPrice | <code>float</code> | No | the price that a trigger order is triggered at |
| params.stopLossPrice | <code>float</code> | No | the price that a stop loss order is triggered at |
| params.takeProfitPrice | <code>float</code> | No | the price that a take profit order is triggered at |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to create an order in a portfolio margin account |
| params.stopLossOrTakeProfit | <code>string</code> | No | 'stopLoss' or 'takeProfit', required for spot trailing orders |


```javascript
binance.createOrder (symbol, type, side, amount[, price, params])
```


<a name="createMarketOrderWithCost" id="createmarketorderwithcost"></a>

### createMarketOrderWithCost{docsify-ignore}
create a market order by providing the symbol, side and cost

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.createMarketOrderWithCost (symbol, side, cost[, params])
```


<a name="createMarketBuyOrderWithCost" id="createmarketbuyorderwithcost"></a>

### createMarketBuyOrderWithCost{docsify-ignore}
create a market buy order by providing the symbol and cost

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.createMarketBuyOrderWithCost (symbol, cost[, params])
```


<a name="createMarketSellOrderWithCost" id="createmarketsellorderwithcost"></a>

### createMarketSellOrderWithCost{docsify-ignore}
create a market sell order by providing the symbol and cost

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.createMarketSellOrderWithCost (symbol, cost[, params])
```


<a name="fetchOrder" id="fetchorder"></a>

### fetchOrder{docsify-ignore}
fetches information on an order made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#query-order-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Query-Order
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Query-Order
- https://developers.binance.com/docs/derivatives/option/trade/Query-Single-Order
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-UM-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-CM-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the order id |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated', for spot margin trading |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch an order in a portfolio margin account |


```javascript
binance.fetchOrder (id, symbol[, params])
```


<a name="fetchOrders" id="fetchorders"></a>

### fetchOrders{docsify-ignore}
fetches information on multiple orders made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#all-orders-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/All-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Query-Option-Order-History
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Conditional-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated', for spot margin trading |
| params.until | <code>int</code> | No | the latest time in ms to fetch orders for |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |


```javascript
binance.fetchOrders (symbol[, since, limit, params])
```


<a name="fetchOpenOrders" id="fetchopenorders"></a>

### fetchOpenOrders{docsify-ignore}
fetch all unfilled currently open orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#current-open-orders-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Current-All-Open-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Current-All-Open-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Query-Current-Open-Option-Orders
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Open-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-UM-Open-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-UM-Open-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-CM-Open-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-CM-Open-Conditional-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch open orders for |
| limit | <code>int</code> | No | the maximum number of open orders structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated', for spot margin trading |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch open orders in the portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account conditional orders |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchOpenOrders (symbol[, since, limit, params])
```


<a name="fetchOpenOrder" id="fetchopenorder"></a>

### fetchOpenOrder{docsify-ignore}
fetch an open order by the id

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Query-Current-Open-Order
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Query-Current-Open-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-UM-Open-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-UM-Open-Conditional-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-CM-Open-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-CM-Open-Conditional-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.trigger | <code>string</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |


```javascript
binance.fetchOpenOrder (id, symbol[, params])
```


<a name="fetchClosedOrders" id="fetchclosedorders"></a>

### fetchClosedOrders{docsify-ignore}
fetches information on multiple closed orders made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#all-orders-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/All-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Query-Option-Order-History
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Conditional-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |


```javascript
binance.fetchClosedOrders (symbol[, since, limit, params])
```


<a name="fetchCanceledOrders" id="fetchcanceledorders"></a>

### fetchCanceledOrders{docsify-ignore}
fetches information on multiple canceled orders made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#all-orders-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/All-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Query-Option-Order-History
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Conditional-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |


```javascript
binance.fetchCanceledOrders (symbol[, since, limit, params])
```


<a name="fetchCanceledAndClosedOrders" id="fetchcanceledandclosedorders"></a>

### fetchCanceledAndClosedOrders{docsify-ignore}
fetches information on multiple canceled orders made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#all-orders-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/All-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Query-Option-Order-History
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-UM-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-CM-Conditional-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |


```javascript
binance.fetchCanceledAndClosedOrders (symbol[, since, limit, params])
```


<a name="cancelOrder" id="cancelorder"></a>

### cancelOrder{docsify-ignore}
cancels an open order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-order-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Order
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Cancel-Order
- https://developers.binance.com/docs/derivatives/option/trade/Cancel-Option-Order
- https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-UM-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-CM-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-UM-Conditional-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-CM-Conditional-Order
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-Margin-Account-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to cancel an order in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to cancel a portfolio margin account conditional order |


```javascript
binance.cancelOrder (id, symbol[, params])
```


<a name="cancelAllOrders" id="cancelallorders"></a>

### cancelAllOrders{docsify-ignore}
cancel all open orders in a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-all-open-orders-on-a-symbol-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-All-Open-Orders
- https://developers.binance.com/docs/derivatives/option/trade/Cancel-all-Option-orders-on-specific-symbol
- https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-All-Open-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-UM-Open-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-UM-Open-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-CM-Open-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-CM-Open-Conditional-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-Margin-Account-All-Open-Orders-on-a-Symbol


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market to cancel orders in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated', for spot margin trading |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to cancel orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to cancel portfolio margin account conditional orders |


```javascript
binance.cancelAllOrders (symbol[, params])
```


<a name="cancelOrders" id="cancelorders"></a>

### cancelOrders{docsify-ignore}
cancel multiple orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Multiple-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Cancel-Multiple-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| ids | <code>Array&lt;string&gt;</code> | Yes | order ids |
| symbol | <code>string</code> | No | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint EXCHANGE SPECIFIC PARAMETERS |
| params.origClientOrderIdList | <code>Array&lt;string&gt;</code> | No | max length 10 e.g. ["my_id_1","my_id_2"], encode the double quotes. No space after comma |
| params.recvWindow | <code>Array&lt;int&gt;</code> | No |  |


```javascript
binance.cancelOrders (ids[, symbol, params])
```


<a name="fetchOrderTrades" id="fetchordertrades"></a>

### fetchOrderTrades{docsify-ignore}
fetch all the trades made from a single order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#account-trade-list-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Account-Trade-List
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Account-Trade-List
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Trade-List


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOrderTrades (id, symbol[, since, limit, params])
```


<a name="fetchMyTrades" id="fetchmytrades"></a>

### fetchMyTrades{docsify-ignore}
fetch all trades made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Trade&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/rest-api#account-trade-list-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Account-Trade-List
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Account-Trade-List
- https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Trade-List
- https://developers.binance.com/docs/derivatives/option/trade/Account-Trade-List
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/UM-Account-Trade-List
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/CM-Account-Trade-List


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.until | <code>int</code> | No | the latest time in ms to fetch entries for |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch trades for a portfolio margin account |


```javascript
binance.fetchMyTrades (symbol[, since, limit, params])
```


<a name="fetchMyDustTrades" id="fetchmydusttrades"></a>

### fetchMyDustTrades{docsify-ignore}
fetch all dust trades made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**: https://developers.binance.com/docs/wallet/asset/dust-log  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | not used by binance fetchMyDustTrades () |
| since | <code>int</code> | No | the earliest time in ms to fetch my dust trades for |
| limit | <code>int</code> | No | the maximum number of dust trades to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code> | No | 'spot' or 'margin', default spot |


```javascript
binance.fetchMyDustTrades (symbol[, since, limit, params])
```


<a name="fetchDeposits" id="fetchdeposits"></a>

### fetchDeposits{docsify-ignore}
fetch all deposits made to an account

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)

**See**

- https://developers.binance.com/docs/wallet/capital/deposite-history
- https://developers.binance.com/docs/fiat/rest-api/Get-Fiat-Deposit-Withdraw-History


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch deposits for |
| limit | <code>int</code> | No | the maximum number of deposits structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.fiat | <code>bool</code> | No | if true, only fiat deposits will be returned |
| params.until | <code>int</code> | No | the latest time in ms to fetch entries for |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |


```javascript
binance.fetchDeposits (code[, since, limit, params])
```


<a name="fetchWithdrawals" id="fetchwithdrawals"></a>

### fetchWithdrawals{docsify-ignore}
fetch all withdrawals made from an account

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)

**See**

- https://developers.binance.com/docs/wallet/capital/withdraw-history
- https://developers.binance.com/docs/fiat/rest-api/Get-Fiat-Deposit-Withdraw-History


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch withdrawals for |
| limit | <code>int</code> | No | the maximum number of withdrawals structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.fiat | <code>bool</code> | No | if true, only fiat withdrawals will be returned |
| params.until | <code>int</code> | No | the latest time in ms to fetch withdrawals for |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |


```javascript
binance.fetchWithdrawals (code[, since, limit, params])
```


<a name="transfer" id="transfer"></a>

### transfer{docsify-ignore}
transfer currency internally between wallets on the same account

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [transfer structure](https://docs.ccxt.com/#/?id=transfer-structure)

**See**: https://developers.binance.com/docs/wallet/asset/user-universal-transfer  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | amount to transfer |
| fromAccount | <code>string</code> | Yes | account to transfer from |
| toAccount | <code>string</code> | Yes | account to transfer to |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code> | No | exchange specific transfer type |
| params.symbol | <code>string</code> | No | the unified symbol, required for isolated margin transfers |


```javascript
binance.transfer (code, amount, fromAccount, toAccount[, params])
```


<a name="fetchTransfers" id="fetchtransfers"></a>

### fetchTransfers{docsify-ignore}
fetch a history of internal transfers made on an account

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transfer structures](https://docs.ccxt.com/#/?id=transfer-structure)

**See**: https://developers.binance.com/docs/wallet/asset/query-user-universal-transfer  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency transferred |
| since | <code>int</code> | No | the earliest time in ms to fetch transfers for |
| limit | <code>int</code> | No | the maximum number of transfers structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | the latest time in ms to fetch transfers for |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.internal | <code>boolean</code> | No | default false, when true will fetch pay trade history |


```javascript
binance.fetchTransfers (code[, since, limit, params])
```


<a name="fetchDepositAddress" id="fetchdepositaddress"></a>

### fetchDepositAddress{docsify-ignore}
fetch the deposit address for a currency associated with this account

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [address structure](https://docs.ccxt.com/#/?id=address-structure)

**See**: https://developers.binance.com/docs/wallet/capital/deposite-address  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchDepositAddress (code[, params])
```


<a name="fetchTransactionFees" id="fetchtransactionfees"></a>

### fetchTransactionFees{docsify-ignore}
`DEPRECATED`

please use fetchDepositWithdrawFees instead

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [fee structures](https://docs.ccxt.com/#/?id=fee-structure)

**See**: https://developers.binance.com/docs/wallet/capital/all-coins-info  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| codes | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | not used by binance fetchTransactionFees () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchTransactionFees (codes[, params])
```


<a name="fetchDepositWithdrawFees" id="fetchdepositwithdrawfees"></a>

### fetchDepositWithdrawFees{docsify-ignore}
fetch deposit and withdraw fees

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [fee structures](https://docs.ccxt.com/#/?id=fee-structure)

**See**: https://developers.binance.com/docs/wallet/capital/all-coins-info  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| codes | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | not used by binance fetchDepositWithdrawFees () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchDepositWithdrawFees (codes[, params])
```


<a name="withdraw" id="withdraw"></a>

### withdraw{docsify-ignore}
make a withdrawal

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)

**See**: https://developers.binance.com/docs/wallet/capital/withdraw  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | the amount to withdraw |
| address | <code>string</code> | Yes | the address to withdraw to |
| tag | <code>string</code> | Yes |  |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.withdraw (code, amount, address, tag[, params])
```


<a name="fetchTradingFee" id="fetchtradingfee"></a>

### fetchTradingFee{docsify-ignore}
fetch the trading fees for a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [fee structure](https://docs.ccxt.com/#/?id=fee-structure)

**See**

- https://developers.binance.com/docs/wallet/asset/trade-fee
- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/User-Commission-Rate
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/User-Commission-Rate
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-User-Commission-Rate-for-UM
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-User-Commission-Rate-for-CM


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch trading fees in a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchTradingFee (symbol[, params])
```


<a name="fetchTradingFees" id="fetchtradingfees"></a>

### fetchTradingFees{docsify-ignore}
fetch the trading fees for multiple markets

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a dictionary of [fee structures](https://docs.ccxt.com/#/?id=fee-structure) indexed by market symbols

**See**

- https://developers.binance.com/docs/wallet/asset/trade-fee
- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Information-V2
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Account-Information


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchTradingFees ([params])
```


<a name="fetchFundingRate" id="fetchfundingrate"></a>

### fetchFundingRate{docsify-ignore}
fetch the current funding rate

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [funding rate structure](https://docs.ccxt.com/#/?id=funding-rate-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Index-Price-and-Mark-Price


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchFundingRate (symbol[, params])
```


<a name="fetchFundingRateHistory" id="fetchfundingratehistory"></a>

### fetchFundingRateHistory{docsify-ignore}
fetches historical funding rate prices

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [funding rate structures](https://docs.ccxt.com/#/?id=funding-rate-history-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Get-Funding-Rate-History
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Get-Funding-Rate-History-of-Perpetual-Futures


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the funding rate history for |
| since | <code>int</code> | No | timestamp in ms of the earliest funding rate to fetch |
| limit | <code>int</code> | No | the maximum amount of [funding rate structures](https://docs.ccxt.com/#/?id=funding-rate-history-structure) to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest funding rate |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchFundingRateHistory (symbol[, since, limit, params])
```


<a name="fetchFundingRates" id="fetchfundingrates"></a>

### fetchFundingRates{docsify-ignore}
fetch the funding rate for multiple markets

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a dictionary of [funding rates structures](https://docs.ccxt.com/#/?id=funding-rates-structure), indexe by market symbols

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Index-Price-and-Mark-Price


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchFundingRates (symbols[, params])
```


<a name="fetchLeverageTiers" id="fetchleveragetiers"></a>

### fetchLeverageTiers{docsify-ignore}
retrieve information on the maximum leverage, and maintenance margin for trades of varying trade sizes

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a dictionary of [leverage tiers structures](https://docs.ccxt.com/#/?id=leverage-tiers-structure), indexed by market symbols

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Notional-and-Leverage-Brackets
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Notional-Bracket-for-Symbol
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/UM-Notional-and-Leverage-Brackets
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/CM-Notional-and-Leverage-Brackets


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the leverage tiers for a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchLeverageTiers (symbols[, params])
```


<a name="fetchPosition" id="fetchposition"></a>

### fetchPosition{docsify-ignore}
fetch data on an open position

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [position structure](https://docs.ccxt.com/#/?id=position-structure)

**See**: https://developers.binance.com/docs/derivatives/option/trade/Option-Position-Information  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the position is held in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchPosition (symbol[, params])
```


<a name="fetchOptionPositions" id="fetchoptionpositions"></a>

### fetchOptionPositions{docsify-ignore}
fetch data on open options positions

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structures](https://docs.ccxt.com/#/?id=position-structure)

**See**: https://developers.binance.com/docs/derivatives/option/trade/Option-Position-Information  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOptionPositions (symbols[, params])
```


<a name="fetchPositions" id="fetchpositions"></a>

### fetchPositions{docsify-ignore}
fetch all open positions

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/#/?id=position-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Information-V2
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Account-Information
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Position-Information-V2
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Position-Information
- https://developers.binance.com/docs/derivatives/option/trade/Option-Position-Information


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| method | <code>string</code> | No | method name to call, "positionRisk", "account" or "option", default is "positionRisk" |


```javascript
binance.fetchPositions ([symbols, params, method])
```


<a name="fetchFundingHistory" id="fetchfundinghistory"></a>

### fetchFundingHistory{docsify-ignore}
fetch the history of funding payments paid and received on this account

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [funding history structure](https://docs.ccxt.com/#/?id=funding-history-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Income-History
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Income-History
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Income-History
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Income-History


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch funding history for |
| limit | <code>int</code> | No | the maximum number of funding history structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest funding history entry |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the funding history for a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchFundingHistory (symbol[, since, limit, params])
```


<a name="setLeverage" id="setleverage"></a>

### setLeverage{docsify-ignore}
set the level of leverage for a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - response from the exchange

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Initial-Leverage
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Change-Initial-Leverage
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-UM-Initial-Leverage
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-CM-Initial-Leverage


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| leverage | <code>float</code> | Yes | the rate of leverage |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to set the leverage for a trading pair in a portfolio margin account |


```javascript
binance.setLeverage (leverage, symbol[, params])
```


<a name="setMarginMode" id="setmarginmode"></a>

### setMarginMode{docsify-ignore}
set margin mode to 'cross' or 'isolated'

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - response from the exchange

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Margin-Type
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Change-Margin-Type


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| marginMode | <code>string</code> | Yes | 'cross' or 'isolated' |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.setMarginMode (marginMode, symbol[, params])
```


<a name="setPositionMode" id="setpositionmode"></a>

### setPositionMode{docsify-ignore}
set hedged to true or false for a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - response from the exchange

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Position-Mode
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Change-Position-Mode
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Current-Position-Mode
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Current-Position-Mode


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| hedged | <code>bool</code> | Yes | set to true to use dualSidePosition |
| symbol | <code>string</code> | Yes | not used by binance setPositionMode () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to set the position mode for a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.setPositionMode (hedged, symbol[, params])
```


<a name="fetchLeverages" id="fetchleverages"></a>

### fetchLeverages{docsify-ignore}
fetch the set leverage for all markets

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a list of [leverage structures](https://docs.ccxt.com/#/?id=leverage-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Information-V2
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Account-Information
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Account-Detail
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Account-Detail


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | a list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchLeverages ([symbols, params])
```


<a name="fetchSettlementHistory" id="fetchsettlementhistory"></a>

### fetchSettlementHistory{docsify-ignore}
fetches historical settlement records

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [settlement history objects](https://docs.ccxt.com/#/?id=settlement-history-structure)

**See**: https://developers.binance.com/docs/derivatives/option/market-data/Historical-Exercise-Records  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the settlement history |
| since | <code>int</code> | No | timestamp in ms |
| limit | <code>int</code> | No | number of records, default 100, max 100 |
| params | <code>object</code> | No | exchange specific params |


```javascript
binance.fetchSettlementHistory (symbol[, since, limit, params])
```


<a name="fetchMySettlementHistory" id="fetchmysettlementhistory"></a>

### fetchMySettlementHistory{docsify-ignore}
fetches historical settlement records of the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [settlement history objects]

**See**: https://developers.binance.com/docs/derivatives/option/trade/User-Exercise-Record  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the settlement history |
| since | <code>int</code> | No | timestamp in ms |
| limit | <code>int</code> | No | number of records |
| params | <code>object</code> | No | exchange specific params |


```javascript
binance.fetchMySettlementHistory (symbol[, since, limit, params])
```


<a name="fetchLedger" id="fetchledger"></a>

### fetchLedger{docsify-ignore}
fetch the history of changes, actions done by the user or operations that altered the balance of the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [ledger structure](https://docs.ccxt.com/#/?id=ledger-structure)

**See**

- https://developers.binance.com/docs/derivatives/option/account/Account-Funding-Flow
- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Income-History
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Income-History
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Income-History
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Income-History


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | timestamp in ms of the earliest ledger entry |
| limit | <code>int</code> | No | max number of ledger entrys to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest ledger entry |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the ledger for a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchLedger (code[, since, limit, params])
```


<a name="reduceMargin" id="reducemargin"></a>

### reduceMargin{docsify-ignore}
remove margin from a position

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [margin structure](https://docs.ccxt.com/#/?id=reduce-margin-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Isolated-Position-Margin
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Modify-Isolated-Position-Margin


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| amount | <code>float</code> | Yes | the amount of margin to remove |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.reduceMargin (symbol, amount[, params])
```


<a name="addMargin" id="addmargin"></a>

### addMargin{docsify-ignore}
add margin

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [margin structure](https://docs.ccxt.com/#/?id=add-margin-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Isolated-Position-Margin
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Modify-Isolated-Position-Margin


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| amount | <code>float</code> | Yes | amount of margin to add |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.addMargin (symbol, amount[, params])
```


<a name="fetchCrossBorrowRate" id="fetchcrossborrowrate"></a>

### fetchCrossBorrowRate{docsify-ignore}
fetch the rate of interest to borrow a currency for margin trading

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [borrow rate structure](https://docs.ccxt.com/#/?id=borrow-rate-structure)

**See**: https://developers.binance.com/docs/margin_trading/borrow-and-repay/Query-Margin-Interest-Rate-History  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchCrossBorrowRate (code[, params])
```


<a name="fetchIsolatedBorrowRate" id="fetchisolatedborrowrate"></a>

### fetchIsolatedBorrowRate{docsify-ignore}
fetch the rate of interest to borrow a currency for margin trading

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [isolated borrow rate structure](https://docs.ccxt.com/#/?id=isolated-borrow-rate-structure)

**See**: https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Fee-Data  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint EXCHANGE SPECIFIC PARAMETERS |
| params.vipLevel | <code>object</code> | No | user's current specific margin data will be returned if viplevel is omitted |


```javascript
binance.fetchIsolatedBorrowRate (symbol[, params])
```


<a name="fetchIsolatedBorrowRates" id="fetchisolatedborrowrates"></a>

### fetchIsolatedBorrowRates{docsify-ignore}
fetch the borrow interest rates of all currencies

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [borrow rate structure](https://docs.ccxt.com/#/?id=borrow-rate-structure)

**See**: https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Fee-Data  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.symbol | <code>object</code> | No | unified market symbol EXCHANGE SPECIFIC PARAMETERS |
| params.vipLevel | <code>object</code> | No | user's current specific margin data will be returned if viplevel is omitted |


```javascript
binance.fetchIsolatedBorrowRates ([params])
```


<a name="fetchBorrowRateHistory" id="fetchborrowratehistory"></a>

### fetchBorrowRateHistory{docsify-ignore}
retrieves a history of a currencies borrow interest rate at specific time slots

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - an array of [borrow rate structures](https://docs.ccxt.com/#/?id=borrow-rate-structure)

**See**: https://developers.binance.com/docs/margin_trading/borrow-and-repay/Query-Margin-Interest-Rate-History  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | timestamp for the earliest borrow rate |
| limit | <code>int</code> | No | the maximum number of [borrow rate structures](https://docs.ccxt.com/#/?id=borrow-rate-structure) to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchBorrowRateHistory (code[, since, limit, params])
```


<a name="createGiftCode" id="creategiftcode"></a>

### createGiftCode{docsify-ignore}
create gift code

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - The gift code id, code, currency and amount

**See**: https://developers.binance.com/docs/gift_card/market-data/Create-a-single-token-gift-card  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | gift code |
| amount | <code>float</code> | Yes | amount of currency for the gift |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.createGiftCode (code, amount[, params])
```


<a name="redeemGiftCode" id="redeemgiftcode"></a>

### redeemGiftCode{docsify-ignore}
redeem gift code

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - response from the exchange

**See**: https://developers.binance.com/docs/gift_card/market-data/Redeem-a-Binance-Gift-Card  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| giftcardCode | <code>string</code> | Yes |  |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.redeemGiftCode (giftcardCode[, params])
```


<a name="verifyGiftCode" id="verifygiftcode"></a>

### verifyGiftCode{docsify-ignore}
verify gift code

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - response from the exchange

**See**: https://developers.binance.com/docs/gift_card/market-data/Verify-Binance-Gift-Card-by-Gift-Card-Number  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | reference number id |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.verifyGiftCode (id[, params])
```


<a name="fetchBorrowInterest" id="fetchborrowinterest"></a>

### fetchBorrowInterest{docsify-ignore}
fetch the interest owed by the user for borrowing currency for margin trading

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [borrow interest structures](https://docs.ccxt.com/#/?id=borrow-interest-structure)

**See**

- https://developers.binance.com/docs/margin_trading/borrow-and-repay/Get-Interest-History
- https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-Margin-BorrowLoan-Interest-History


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | unified currency code |
| symbol | <code>string</code> | No | unified market symbol when fetch interest in isolated markets |
| since | <code>int</code> | No | the earliest time in ms to fetch borrrow interest for |
| limit | <code>int</code> | No | the maximum number of structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the borrow interest in a portfolio margin account |


```javascript
binance.fetchBorrowInterest ([code, symbol, since, limit, params])
```


<a name="repayCrossMargin" id="repaycrossmargin"></a>

### repayCrossMargin{docsify-ignore}
repay borrowed margin and interest

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)

**See**

- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Repay
- https://developers.binance.com/docs/margin_trading/borrow-and-repay/Margin-Account-Borrow-Repay


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency to repay |
| amount | <code>float</code> | Yes | the amount to repay |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to repay margin in a portfolio margin account |


```javascript
binance.repayCrossMargin (code, amount[, params])
```


<a name="repayIsolatedMargin" id="repayisolatedmargin"></a>

### repayIsolatedMargin{docsify-ignore}
repay borrowed margin and interest

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)

**See**: https://developers.binance.com/docs/margin_trading/borrow-and-repay/Margin-Account-Borrow-Repay  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol, required for isolated margin |
| code | <code>string</code> | Yes | unified currency code of the currency to repay |
| amount | <code>float</code> | Yes | the amount to repay |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.repayIsolatedMargin (symbol, code, amount[, params])
```


<a name="borrowCrossMargin" id="borrowcrossmargin"></a>

### borrowCrossMargin{docsify-ignore}
create a loan to borrow margin

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)

**See**

- https://developers.binance.com/docs/margin_trading/borrow-and-repay/Margin-Account-Borrow-Repay
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Borrow


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency to borrow |
| amount | <code>float</code> | Yes | the amount to borrow |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to borrow margin in a portfolio margin account |


```javascript
binance.borrowCrossMargin (code, amount[, params])
```


<a name="borrowIsolatedMargin" id="borrowisolatedmargin"></a>

### borrowIsolatedMargin{docsify-ignore}
create a loan to borrow margin

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)

**See**: https://developers.binance.com/docs/margin_trading/borrow-and-repay/Margin-Account-Borrow-Repay  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol, required for isolated margin |
| code | <code>string</code> | Yes | unified currency code of the currency to borrow |
| amount | <code>float</code> | Yes | the amount to borrow |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.borrowIsolatedMargin (symbol, code, amount[, params])
```


<a name="fetchOpenInterestHistory" id="fetchopeninteresthistory"></a>

### fetchOpenInterestHistory{docsify-ignore}
Retrieves the open interest history of a currency

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an array of [open interest structure](https://docs.ccxt.com/#/?id=open-interest-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Open-Interest-Statistics
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Open-Interest-Statistics


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | Unified CCXT market symbol |
| timeframe | <code>string</code> | Yes | "5m","15m","30m","1h","2h","4h","6h","12h", or "1d" |
| since | <code>int</code> | No | the time(ms) of the earliest record to retrieve as a unix timestamp |
| limit | <code>int</code> | No | default 30, max 500 |
| params | <code>object</code> | No | exchange specific parameters |
| params.until | <code>int</code> | No | the time(ms) of the latest record to retrieve as a unix timestamp |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |


```javascript
binance.fetchOpenInterestHistory (symbol, timeframe[, since, limit, params])
```


<a name="fetchOpenInterest" id="fetchopeninterest"></a>

### fetchOpenInterest{docsify-ignore}
retrieves the open interest of a contract trading pair

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an open interest structure[https://docs.ccxt.com/#/?id=open-interest-structure](https://docs.ccxt.com/#/?id=open-interest-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Open-Interest
- https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Open-Interest
- https://developers.binance.com/docs/derivatives/option/market-data/Open-Interest


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| params | <code>object</code> | No | exchange specific parameters |


```javascript
binance.fetchOpenInterest (symbol[, params])
```


<a name="fetchMyLiquidations" id="fetchmyliquidations"></a>

### fetchMyLiquidations{docsify-ignore}
retrieves the users liquidated positions

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an array of [liquidation structures](https://docs.ccxt.com/#/?id=liquidation-structure)

**See**

- https://developers.binance.com/docs/margin_trading/trade/Get-Force-Liquidation-Record
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Users-Force-Orders
- https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Users-Force-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Users-UM-Force-Orders
- https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Users-CM-Force-Orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | No | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the binance api endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest liquidation |
| params.paginate | <code>boolean</code> | No | *spot only* default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch liquidations in a portfolio margin account |
| params.type | <code>string</code> | No | "spot" |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchMyLiquidations ([symbol, since, limit, params])
```


<a name="fetchGreeks" id="fetchgreeks"></a>

### fetchGreeks{docsify-ignore}
fetches an option contracts greeks, financial metrics used to measure the factors that affect the price of an options contract

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [greeks structure](https://docs.ccxt.com/#/?id=greeks-structure)

**See**: https://developers.binance.com/docs/derivatives/option/market-data/Option-Mark-Price  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch greeks for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchGreeks (symbol[, params])
```


<a name="fetchPositionMode" id="fetchpositionmode"></a>

### fetchPositionMode{docsify-ignore}
fetchs the position mode, hedged or one way, hedged for binance is set identically for all linear markets or all inverse markets

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an object detailing whether the market is in hedged or one-way mode

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Current-Position-Mode
- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Current-Position-Mode


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchPositionMode (symbol[, params])
```


<a name="fetchMarginMode" id="fetchmarginmode"></a>

### fetchMarginMode{docsify-ignore}
fetches margin modes ("isolated" or "cross") that the market for the symbol in in, with symbol=undefined all markets for a subType (linear/inverse) are returned

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a list of [margin mode structures](https://docs.ccxt.com/#/?id=margin-mode-structure)

**See**

- https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Account-Information
- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Information-V2


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |


```javascript
binance.fetchMarginMode (symbol[, params])
```


<a name="fetchOption" id="fetchoption"></a>

### fetchOption{docsify-ignore}
fetches option data that is commonly found in an option chain

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [option chain structure](https://docs.ccxt.com/#/?id=option-chain-structure)

**See**: https://developers.binance.com/docs/derivatives/option/market-data/24hr-Ticker-Price-Change-Statistics  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOption (symbol[, params])
```


<a name="fetchConvertCurrencies" id="fetchconvertcurrencies"></a>

### fetchConvertCurrencies{docsify-ignore}
fetches all available currencies that can be converted

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an associative dictionary of currencies

**See**: https://developers.binance.com/docs/convert/market-data/Query-order-quantity-precision-per-asset  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchConvertCurrencies ([params])
```


<a name="fetchConvertQuote" id="fetchconvertquote"></a>

### fetchConvertQuote{docsify-ignore}
fetch a quote for converting from one currency to another

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://developers.binance.com/docs/convert/trade/Send-quote-request  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| fromCode | <code>string</code> | Yes | the currency that you want to sell and convert from |
| toCode | <code>string</code> | Yes | the currency that you want to buy and convert into |
| amount | <code>float</code> | Yes | how much you want to trade in units of the from currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.walletType | <code>string</code> | No | either 'SPOT' or 'FUNDING', the default is 'SPOT' |


```javascript
binance.fetchConvertQuote (fromCode, toCode, amount[, params])
```


<a name="createConvertTrade" id="createconverttrade"></a>

### createConvertTrade{docsify-ignore}
convert from one currency to another

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://developers.binance.com/docs/convert/trade/Accept-Quote  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the id of the trade that you want to make |
| fromCode | <code>string</code> | Yes | the currency that you want to sell and convert from |
| toCode | <code>string</code> | Yes | the currency that you want to buy and convert into |
| amount | <code>float</code> | No | how much you want to trade in units of the from currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.createConvertTrade (id, fromCode, toCode[, amount, params])
```


<a name="fetchConvertTrade" id="fetchconverttrade"></a>

### fetchConvertTrade{docsify-ignore}
fetch the data for a conversion trade

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://developers.binance.com/docs/convert/trade/Order-Status  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the id of the trade that you want to fetch |
| code | <code>string</code> | No | the unified currency code of the conversion trade |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchConvertTrade (id[, code, params])
```


<a name="fetchConvertTradeHistory" id="fetchconverttradehistory"></a>

### fetchConvertTradeHistory{docsify-ignore}
fetch the users history of conversion trades

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [conversion structures](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://developers.binance.com/docs/convert/trade/Get-Convert-Trade-History  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | the unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch conversions for |
| limit | <code>int</code> | No | the maximum number of conversion structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest conversion to fetch |


```javascript
binance.fetchConvertTradeHistory ([code, since, limit, params])
```


<a name="watchLiquidations" id="watchliquidations"></a>

### watchLiquidations{docsify-ignore}
watch the public liquidations of a trading pair

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Liquidation-Order-Streams
- https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Liquidation-Order-Streams


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |


```javascript
binance.watchLiquidations (symbol[, since, limit, params])
```


<a name="watchLiquidationsForSymbols" id="watchliquidationsforsymbols"></a>

### watchLiquidationsForSymbols{docsify-ignore}
watch the public liquidations of a trading pair

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/All-Market-Liquidation-Order-Streams
- https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Market-Liquidation-Order-Streams


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |


```javascript
binance.watchLiquidationsForSymbols (symbol[, since, limit, params])
```


<a name="watchMyLiquidations" id="watchmyliquidations"></a>

### watchMyLiquidations{docsify-ignore}
watch the private liquidations of a trading pair

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Order-Update
- https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-Order-Update


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |


```javascript
binance.watchMyLiquidations (symbol[, since, limit, params])
```


<a name="watchMyLiquidationsForSymbols" id="watchmyliquidationsforsymbols"></a>

### watchMyLiquidationsForSymbols{docsify-ignore}
watch the private liquidations of a trading pair

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Order-Update
- https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-Order-Update


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |


```javascript
binance.watchMyLiquidationsForSymbols (symbol[, since, limit, params])
```


<a name="watchOrderBook" id="watchorderbook"></a>

### watchOrderBook{docsify-ignore}
watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchOrderBook (symbol[, limit, params])
```


<a name="watchOrderBookForSymbols" id="watchorderbookforsymbols"></a>

### watchOrderBookForSymbols{docsify-ignore}
watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified array of symbols |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchOrderBookForSymbols (symbols[, limit, params])
```


<a name="fetchOrderBookWs" id="fetchorderbookws"></a>

### fetchOrderBookWs{docsify-ignore}
fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#order-book
- https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/websocket-api/Order-Book


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOrderBookWs (symbol[, limit, params])
```


<a name="watchTradesForSymbols" id="watchtradesforsymbols"></a>

### watchTradesForSymbols{docsify-ignore}
get the list of most recent trades for a list of symbols

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchTradesForSymbols (symbols[, since, limit, params])
```


<a name="watchTrades" id="watchtrades"></a>

### watchTrades{docsify-ignore}
get the list of most recent trades for a particular symbol

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchTrades (symbol[, since, limit, params])
```


<a name="watchOHLCV" id="watchohlcv"></a>

### watchOHLCV{docsify-ignore}
watches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchOHLCV (symbol, timeframe[, since, limit, params])
```


<a name="fetchTickerWs" id="fetchtickerws"></a>

### fetchTickerWs{docsify-ignore}
fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.method | <code>string</code> | No | method to use can be ticker.price or ticker.book |
| params.returnRateLimits | <code>boolean</code> | No | return the rate limits for the exchange |


```javascript
binance.fetchTickerWs (symbol[, params])
```


<a name="fetchOHLCVWs" id="fetchohlcvws"></a>

### fetchOHLCVWs{docsify-ignore}
query historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#klines  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | unified symbol of the market to query OHLCV data for |
| timeframe | <code>string</code> | the length of time each candle represents |
| since | <code>int</code> | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | the maximum amount of candles to fetch |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | timestamp in ms of the earliest candle to fetch EXCHANGE SPECIFIC PARAMETERS |
| params.timeZone | <code>string</code> | default=0 (UTC) |


```javascript
binance.fetchOHLCVWs (symbol, timeframe, since, limit, params[])
```


<a name="watchTicker" id="watchticker"></a>

### watchTicker{docsify-ignore}
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.name | <code>string</code> | No | stream to use can be ticker or miniTicker |


```javascript
binance.watchTicker (symbol[, params])
```


<a name="watchTickers" id="watchtickers"></a>

### watchTickers{docsify-ignore}
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for all markets of a specific list

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchTickers (symbols[, params])
```


<a name="watchBidsAsks" id="watchbidsasks"></a>

### watchBidsAsks{docsify-ignore}
watches best bid & ask for symbols

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#symbol-order-book-ticker
- https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/All-Book-Tickers-Stream
- https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Book-Tickers-Stream


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.watchBidsAsks (symbols[, params])
```


<a name="fetchBalanceWs" id="fetchbalancews"></a>

### fetchBalanceWs{docsify-ignore}
fetch balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)

**See**

- https://developers.binance.com/docs/derivatives/usds-margined-futures/account/websocket-api/Futures-Account-Balance
- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#account-information-user_data


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code>, <code>undefined</code> | No | 'future', 'delivery', 'savings', 'funding', or 'spot' |
| params.marginMode | <code>string</code>, <code>undefined</code> | No | 'cross' or 'isolated', for margin trading, uses this.options.defaultMarginMode if not passed, defaults to undefined/None/null |
| params.symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | No | unified market symbols, only used in isolated margin mode |
| params.method | <code>string</code>, <code>undefined</code> | No | method to use. Can be account.balance or account.status |


```javascript
binance.fetchBalanceWs ([params])
```


<a name="fetchPositionWs" id="fetchpositionws"></a>

### fetchPositionWs{docsify-ignore}
fetch data on an open position

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [position structure](https://docs.ccxt.com/#/?id=position-structure)

**See**: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Position-Information  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the position is held in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchPositionWs (symbol[, params])
```


<a name="fetchPositionsWs" id="fetchpositionsws"></a>

### fetchPositionsWs{docsify-ignore}
fetch all open positions

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/#/?id=position-structure)

**See**: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Position-Information  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.returnRateLimits | <code>boolean</code> | No | set to true to return rate limit informations, defaults to false. |


```javascript
binance.fetchPositionsWs ([symbols, params])
```


<a name="watchBalance" id="watchbalance"></a>

### watchBalance{docsify-ignore}
watch balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to watch the balance of a portfolio margin account |


```javascript
binance.watchBalance ([params])
```


<a name="createOrderWs" id="createorderws"></a>

### createOrderWs{docsify-ignore}
create a trade order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#place-new-order-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/New-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code>, <code>undefined</code> | No | the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.test | <code>boolean</code> | Yes | test order, default false |
| params.returnRateLimits | <code>boolean</code> | Yes | set to true to return rate limit information, default false |


```javascript
binance.createOrderWs (symbol, type, side, amount[, price, params])
```


<a name="editOrderWs" id="editorderws"></a>

### editOrderWs{docsify-ignore}
edit a trade order

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#cancel-and-replace-order-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Modify-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of the currency you want to trade in units of the base currency |
| price | <code>float</code>, <code>undefined</code> | No | the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.editOrderWs (id, symbol, type, side, amount[, price, params])
```


<a name="cancelOrderWs" id="cancelorderws"></a>

### cancelOrderWs{docsify-ignore}
cancel multiple orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - an list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#cancel-order-trade
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Cancel-Order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.cancelRestrictions | <code>string</code>, <code>undefined</code> | No | Supported values: ONLY_NEW - Cancel will succeed if the order status is NEW. ONLY_PARTIALLY_FILLED - Cancel will succeed if order status is PARTIALLY_FILLED. |


```javascript
binance.cancelOrderWs (id, symbol[, params])
```


<a name="cancelAllOrdersWs" id="cancelallordersws"></a>

### cancelAllOrdersWs{docsify-ignore}
cancel all open orders in a market

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#cancel-open-orders-trade  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market to cancel orders in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.cancelAllOrdersWs (symbol[, params])
```


<a name="fetchOrderWs" id="fetchorderws"></a>

### fetchOrderWs{docsify-ignore}
fetches information on an order made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#query-order-user_data
- https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Query-Order


| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | unified symbol of the market the order was made in |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOrderWs (symbol, params[])
```


<a name="fetchOrdersWs" id="fetchordersws"></a>

### fetchOrdersWs{docsify-ignore}
fetches information on multiple orders made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#query-order-list-user_data  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code>, <code>undefined</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code>, <code>undefined</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.orderId | <code>int</code> | No | order id to begin at |
| params.startTime | <code>int</code> | No | earliest time in ms to retrieve orders for |
| params.endTime | <code>int</code> | No | latest time in ms to retrieve orders for |
| params.limit | <code>int</code> | No | the maximum number of order structures to retrieve |


```javascript
binance.fetchOrdersWs (symbol[, since, limit, params])
```


<a name="fetchClosedOrdersWs" id="fetchclosedordersws"></a>

### fetchClosedOrdersWs{docsify-ignore}
fetch closed orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#query-order-list-user_data  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch open orders for |
| limit | <code>int</code> | No | the maximum number of open orders structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchClosedOrdersWs (symbol[, since, limit, params])
```


<a name="fetchOpenOrdersWs" id="fetchopenordersws"></a>

### fetchOpenOrdersWs{docsify-ignore}
fetch all unfilled currently open orders

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#current-open-orders-user_data  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code>, <code>undefined</code> | No | the earliest time in ms to fetch open orders for |
| limit | <code>int</code>, <code>undefined</code> | No | the maximum number of open orders structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
binance.fetchOpenOrdersWs (symbol[, since, limit, params])
```


<a name="watchOrders" id="watchorders"></a>

### watchOrders{docsify-ignore}
watches information on multiple orders made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://developers.binance.com/docs/binance-spot-api-docs/user-data-stream#order-update
- https://developers.binance.com/docs/margin_trading/trade-data-stream/Event-Order-Update
- https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Order-Update


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code>, <code>undefined</code> | No | 'cross' or 'isolated', for spot margin |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to watch portfolio margin account orders |


```javascript
binance.watchOrders (symbol[, since, limit, params])
```


<a name="watchPositions" id="watchpositions"></a>

### watchPositions{docsify-ignore}
watch all open positions

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/en/latest/manual.html#position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | Yes | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to watch positions in a portfolio margin account |


```javascript
binance.watchPositions (symbols, params[])
```


<a name="fetchMyTradesWs" id="fetchmytradesws"></a>

### fetchMyTradesWs{docsify-ignore}
fetch all trades made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#account-trade-history-user_data  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code>, <code>undefined</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code>, <code>undefined</code> | No | the maximum number of trades structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.endTime | <code>int</code> | No | the latest time in ms to fetch trades for |
| params.fromId | <code>int</code> | No | first trade Id to fetch |


```javascript
binance.fetchMyTradesWs (symbol[, since, limit, params])
```


<a name="fetchTradesWs" id="fetchtradesws"></a>

### fetchTradesWs{docsify-ignore}
fetch all trades made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**: https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#recent-trades  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades structures to retrieve, default=500, max=1000 |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint EXCHANGE SPECIFIC PARAMETERS |
| params.fromId | <code>int</code> | No | trade ID to begin at |


```javascript
binance.fetchTradesWs (symbol[, since, limit, params])
```


<a name="watchMyTrades" id="watchmytrades"></a>

### watchMyTrades{docsify-ignore}
watches information on multiple trades made by the user

**Kind**: instance method of [<code>binance</code>](#binance)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to watch trades in a portfolio margin account |


```javascript
binance.watchMyTrades (symbol[, since, limit, params])
```

