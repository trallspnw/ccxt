
<a name="woo" id="woo"></a>

## woo{docsify-ignore}
**Kind**: global class  
**Extends**: <code>Exchange</code>  

* [fetchStatus](#fetchstatus)
* [fetchTime](#fetchtime)
* [fetchMarkets](#fetchmarkets)
* [fetchTrades](#fetchtrades)
* [fetchTradingFees](#fetchtradingfees)
* [fetchCurrencies](#fetchcurrencies)
* [createMarketBuyOrderWithCost](#createmarketbuyorderwithcost)
* [createMarketSellOrderWithCost](#createmarketsellorderwithcost)
* [createTrailingAmountOrder](#createtrailingamountorder)
* [createTrailingPercentOrder](#createtrailingpercentorder)
* [createOrder](#createorder)
* [editOrder](#editorder)
* [cancelOrder](#cancelorder)
* [cancelAllOrders](#cancelallorders)
* [cancelAllOrdersAfter](#cancelallordersafter)
* [fetchOrder](#fetchorder)
* [fetchOrders](#fetchorders)
* [fetchOpenOrders](#fetchopenorders)
* [fetchClosedOrders](#fetchclosedorders)
* [fetchOrderBook](#fetchorderbook)
* [fetchOHLCV](#fetchohlcv)
* [fetchOrderTrades](#fetchordertrades)
* [fetchMyTrades](#fetchmytrades)
* [fetchAccounts](#fetchaccounts)
* [fetchBalance](#fetchbalance)
* [fetchDepositAddress](#fetchdepositaddress)
* [fetchLedger](#fetchledger)
* [fetchDeposits](#fetchdeposits)
* [fetchWithdrawals](#fetchwithdrawals)
* [fetchDepositsWithdrawals](#fetchdepositswithdrawals)
* [transfer](#transfer)
* [fetchTransfers](#fetchtransfers)
* [withdraw](#withdraw)
* [repayMargin](#repaymargin)
* [fetchFundingRateHistory](#fetchfundingratehistory)
* [setPositionMode](#setpositionmode)
* [fetchLeverage](#fetchleverage)
* [fetchConvertQuote](#fetchconvertquote)
* [createConvertTrade](#createconverttrade)
* [fetchConvertTrade](#fetchconverttrade)
* [fetchConvertTradeHistory](#fetchconverttradehistory)
* [fetchConvertCurrencies](#fetchconvertcurrencies)
* [watchOrderBook](#watchorderbook)
* [watchTicker](#watchticker)
* [watchTickers](#watchtickers)
* [watchOHLCV](#watchohlcv)
* [watchTrades](#watchtrades)
* [watchOrders](#watchorders)
* [watchMyTrades](#watchmytrades)
* [watchPositions](#watchpositions)
* [watchBalance](#watchbalance)

<a name="fetchStatus" id="fetchstatus"></a>

### fetchStatus{docsify-ignore}
the latest known information on the availability of the exchange API

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [status structure](https://docs.ccxt.com/#/?id=exchange-status-structure)

**See**: https://docs.woo.org/#get-system-maintenance-status-public  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchStatus ([params])
```


<a name="fetchTime" id="fetchtime"></a>

### fetchTime{docsify-ignore}
fetches the current integer timestamp in milliseconds from the exchange server

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>int</code> - the current integer timestamp in milliseconds from the exchange server

**See**: https://docs.woo.org/#get-system-maintenance-status-public  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchTime ([params])
```


<a name="fetchMarkets" id="fetchmarkets"></a>

### fetchMarkets{docsify-ignore}
retrieves data on all markets for woo

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - an array of objects representing market data

**See**: https://docs.woo.org/#exchange-information  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchMarkets ([params])
```


<a name="fetchTrades" id="fetchtrades"></a>

### fetchTrades{docsify-ignore}
get the list of most recent trades for a particular symbol

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Trade&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)

**See**: https://docs.woo.org/#market-trades-public  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchTrades (symbol[, since, limit, params])
```


<a name="fetchTradingFees" id="fetchtradingfees"></a>

### fetchTradingFees{docsify-ignore}
fetch the trading fees for multiple markets

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a dictionary of [fee structures](https://docs.ccxt.com/#/?id=fee-structure) indexed by market symbols

**See**: https://docs.woo.org/#get-account-information-new  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchTradingFees ([params])
```


<a name="fetchCurrencies" id="fetchcurrencies"></a>

### fetchCurrencies{docsify-ignore}
fetches all available currencies on an exchange

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an associative dictionary of currencies

**See**: https://docs.woo.org/#available-token-public  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchCurrencies ([params])
```


<a name="createMarketBuyOrderWithCost" id="createmarketbuyorderwithcost"></a>

### createMarketBuyOrderWithCost{docsify-ignore}
create a market buy order by providing the symbol and cost

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://docs.woo.org/#send-order  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.createMarketBuyOrderWithCost (symbol, cost[, params])
```


<a name="createMarketSellOrderWithCost" id="createmarketsellorderwithcost"></a>

### createMarketSellOrderWithCost{docsify-ignore}
create a market sell order by providing the symbol and cost

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://docs.woo.org/#send-order  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.createMarketSellOrderWithCost (symbol, cost[, params])
```


<a name="createTrailingAmountOrder" id="createtrailingamountorder"></a>

### createTrailingAmountOrder{docsify-ignore}
create a trailing order by providing the symbol, type, side, amount, price and trailingAmount

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://docs.woo.org/#send-algo-order  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much you want to trade in units of the base currency, or number of contracts |
| price | <code>float</code> | No | the price for the order to be filled at, in units of the quote currency, ignored in market orders |
| trailingAmount | <code>float</code> | Yes | the quote amount to trail away from the current market price |
| trailingTriggerPrice | <code>float</code> | Yes | the price to activate a trailing order, default uses the price argument |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.createTrailingAmountOrder (symbol, type, side, amount[, price, trailingAmount, trailingTriggerPrice, params])
```


<a name="createTrailingPercentOrder" id="createtrailingpercentorder"></a>

### createTrailingPercentOrder{docsify-ignore}
create a trailing order by providing the symbol, type, side, amount, price and trailingPercent

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://docs.woo.org/#send-algo-order  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much you want to trade in units of the base currency, or number of contracts |
| price | <code>float</code> | No | the price for the order to be filled at, in units of the quote currency, ignored in market orders |
| trailingPercent | <code>float</code> | Yes | the percent to trail away from the current market price |
| trailingTriggerPrice | <code>float</code> | Yes | the price to activate a trailing order, default uses the price argument |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.createTrailingPercentOrder (symbol, type, side, amount[, price, trailingPercent, trailingTriggerPrice, params])
```


<a name="createOrder" id="createorder"></a>

### createOrder{docsify-ignore}
create a trade order

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#send-order
- https://docs.woo.org/#send-algo-order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.triggerPrice | <code>float</code> | No | The price a trigger order is triggered at |
| params.takeProfit | <code>object</code> | No | *takeProfit object in params* containing the triggerPrice at which the attached take profit order will be triggered (perpetual swap markets only) |
| params.takeProfit.triggerPrice | <code>float</code> | No | take profit trigger price |
| params.stopLoss | <code>object</code> | No | *stopLoss object in params* containing the triggerPrice at which the attached stop loss order will be triggered (perpetual swap markets only) |
| params.stopLoss.triggerPrice | <code>float</code> | No | stop loss trigger price |
| params.algoType | <code>float</code> | No | 'STOP'or 'TRAILING_STOP' or 'OCO' or 'CLOSE_POSITION' |
| params.cost | <code>float</code> | No | *spot market buy only* the quote quantity that can be used as an alternative for the amount |
| params.trailingAmount | <code>string</code> | No | the quote amount to trail away from the current market price |
| params.trailingPercent | <code>string</code> | No | the percent to trail away from the current market price |
| params.trailingTriggerPrice | <code>string</code> | No | the price to trigger a trailing order, default uses the price argument |


```javascript
woo.createOrder (symbol, type, side, amount[, price, params])
```


<a name="editOrder" id="editorder"></a>

### editOrder{docsify-ignore}
edit a trade order

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#edit-order
- https://docs.woo.org/#edit-order-by-client_order_id
- https://docs.woo.org/#edit-algo-order
- https://docs.woo.org/#edit-algo-order-by-client_order_id


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.triggerPrice | <code>float</code> | No | The price a trigger order is triggered at |
| params.stopLossPrice | <code>float</code> | No | price to trigger stop-loss orders |
| params.takeProfitPrice | <code>float</code> | No | price to trigger take-profit orders |
| params.trailingAmount | <code>string</code> | No | the quote amount to trail away from the current market price |
| params.trailingPercent | <code>string</code> | No | the percent to trail away from the current market price |
| params.trailingTriggerPrice | <code>string</code> | No | the price to trigger a trailing order, default uses the price argument |


```javascript
woo.editOrder (id, symbol, type, side, amount[, price, params])
```


<a name="cancelOrder" id="cancelorder"></a>

### cancelOrder{docsify-ignore}
cancels an open order

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#cancel-algo-order
- https://docs.woo.org/#cancel-order
- https://docs.woo.org/#cancel-order-by-client_order_id


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.stop | <code>boolean</code> | No | whether the order is a stop/algo order |


```javascript
woo.cancelOrder (id, symbol[, params])
```


<a name="cancelAllOrders" id="cancelallorders"></a>

### cancelAllOrders{docsify-ignore}
cancel all open orders in a market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#cancel-all-pending-orders
- https://docs.woo.org/#cancel-orders
- https://docs.woo.org/#cancel-all-pending-algo-orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.stop | <code>boolean</code> | No | whether the order is a stop/algo order |


```javascript
woo.cancelAllOrders (symbol[, params])
```


<a name="cancelAllOrdersAfter" id="cancelallordersafter"></a>

### cancelAllOrdersAfter{docsify-ignore}
dead man's switch, cancel all orders after the given timeout

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - the api result

**See**: https://docs.woo.org/#cancel-all-after  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| timeout | <code>number</code> | Yes | time in milliseconds, 0 represents cancel the timer |
| activated | <code>boolean</code> | Yes | countdown |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.cancelAllOrdersAfter (timeout, activated[, params])
```


<a name="fetchOrder" id="fetchorder"></a>

### fetchOrder{docsify-ignore}
fetches information on an order made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#get-algo-order
- https://docs.woo.org/#get-order


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.stop | <code>boolean</code> | No | whether the order is a stop/algo order |


```javascript
woo.fetchOrder (symbol[, params])
```


<a name="fetchOrders" id="fetchorders"></a>

### fetchOrders{docsify-ignore}
fetches information on multiple orders made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#get-orders
- https://docs.woo.org/#get-algo-orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.stop | <code>boolean</code> | No | whether the order is a stop/algo order |
| params.isTriggered | <code>boolean</code> | No | whether the order has been triggered (false by default) |
| params.side | <code>string</code> | No | 'buy' or 'sell' |
| params.trailing | <code>boolean</code> | No | set to true if you want to fetch trailing orders |
| params.paginate | <code>boolean</code> | No | set to true if you want to fetch orders with pagination |


```javascript
woo.fetchOrders (symbol[, since, limit, params])
```


<a name="fetchOpenOrders" id="fetchopenorders"></a>

### fetchOpenOrders{docsify-ignore}
fetches information on multiple orders made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#get-orders
- https://docs.woo.org/#get-algo-orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.stop | <code>boolean</code> | No | whether the order is a stop/algo order |
| params.isTriggered | <code>boolean</code> | No | whether the order has been triggered (false by default) |
| params.side | <code>string</code> | No | 'buy' or 'sell' |
| params.trailing | <code>boolean</code> | No | set to true if you want to fetch trailing orders |
| params.paginate | <code>boolean</code> | No | set to true if you want to fetch orders with pagination |


```javascript
woo.fetchOpenOrders (symbol[, since, limit, params])
```


<a name="fetchClosedOrders" id="fetchclosedorders"></a>

### fetchClosedOrders{docsify-ignore}
fetches information on multiple orders made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#get-orders
- https://docs.woo.org/#get-algo-orders


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.stop | <code>boolean</code> | No | whether the order is a stop/algo order |
| params.isTriggered | <code>boolean</code> | No | whether the order has been triggered (false by default) |
| params.side | <code>string</code> | No | 'buy' or 'sell' |
| params.trailing | <code>boolean</code> | No | set to true if you want to fetch trailing orders |
| params.paginate | <code>boolean</code> | No | set to true if you want to fetch orders with pagination |


```javascript
woo.fetchClosedOrders (symbol[, since, limit, params])
```


<a name="fetchOrderBook" id="fetchorderbook"></a>

### fetchOrderBook{docsify-ignore}
fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols

**See**: https://docs.woo.org/#orderbook-snapshot-public  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchOrderBook (symbol[, limit, params])
```


<a name="fetchOHLCV" id="fetchohlcv"></a>

### fetchOHLCV{docsify-ignore}
fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume

**See**

- https://docs.woo.org/#kline-public
- https://docs.woo.org/#kline-historical-data-public


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | max=1000, max=100 when since is defined and is less than (now - (999 * (timeframe in ms))) |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchOHLCV (symbol, timeframe[, since, limit, params])
```


<a name="fetchOrderTrades" id="fetchordertrades"></a>

### fetchOrderTrades{docsify-ignore}
fetch all the trades made from a single order

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**: https://docs.woo.org/#get-trades  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchOrderTrades (id, symbol[, since, limit, params])
```


<a name="fetchMyTrades" id="fetchmytrades"></a>

### fetchMyTrades{docsify-ignore}
fetch all trades made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Trade&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**: https://docs.woo.org/#get-trades  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | set to true if you want to fetch trades with pagination |


```javascript
woo.fetchMyTrades (symbol[, since, limit, params])
```


<a name="fetchAccounts" id="fetchaccounts"></a>

### fetchAccounts{docsify-ignore}
fetch all the accounts associated with a profile

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a dictionary of [account structures](https://docs.ccxt.com/#/?id=account-structure) indexed by the account type

**See**: https://docs.woo.org/#get-assets-of-subaccounts  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchAccounts ([params])
```


<a name="fetchBalance" id="fetchbalance"></a>

### fetchBalance{docsify-ignore}
query for balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)

**See**: https://docs.woo.org/#get-current-holding-get-balance-new  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchBalance ([params])
```


<a name="fetchDepositAddress" id="fetchdepositaddress"></a>

### fetchDepositAddress{docsify-ignore}
fetch the deposit address for a currency associated with this account

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an [address structure](https://docs.ccxt.com/#/?id=address-structure)

**See**: https://docs.woo.org/#get-token-deposit-address  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchDepositAddress (code[, params])
```


<a name="fetchLedger" id="fetchledger"></a>

### fetchLedger{docsify-ignore}
fetch the history of changes, actions done by the user or operations that altered balance of the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [ledger structure](https://docs.ccxt.com/#/?id=ledger-structure)

**See**: https://docs.woo.org/#get-asset-history  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code, default is undefined |
| since | <code>int</code> | No | timestamp in ms of the earliest ledger entry, default is undefined |
| limit | <code>int</code> | No | max number of ledger entrys to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchLedger (code[, since, limit, params])
```


<a name="fetchDeposits" id="fetchdeposits"></a>

### fetchDeposits{docsify-ignore}
fetch all deposits made to an account

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)

**See**: https://docs.woo.org/#get-asset-history  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch deposits for |
| limit | <code>int</code> | No | the maximum number of deposits structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchDeposits (code[, since, limit, params])
```


<a name="fetchWithdrawals" id="fetchwithdrawals"></a>

### fetchWithdrawals{docsify-ignore}
fetch all withdrawals made from an account

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)

**See**: https://docs.woo.org/#get-asset-history  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch withdrawals for |
| limit | <code>int</code> | No | the maximum number of withdrawals structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchWithdrawals (code[, since, limit, params])
```


<a name="fetchDepositsWithdrawals" id="fetchdepositswithdrawals"></a>

### fetchDepositsWithdrawals{docsify-ignore}
fetch history of deposits and withdrawals

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a list of [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)

**See**: https://docs.woo.org/#get-asset-history  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | unified currency code for the currency of the deposit/withdrawals, default is undefined |
| since | <code>int</code> | No | timestamp in ms of the earliest deposit/withdrawal, default is undefined |
| limit | <code>int</code> | No | max number of deposit/withdrawals to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchDepositsWithdrawals ([code, since, limit, params])
```


<a name="transfer" id="transfer"></a>

### transfer{docsify-ignore}
transfer currency internally between wallets on the same account

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [transfer structure](https://docs.ccxt.com/#/?id=transfer-structure)

**See**: https://docs.woo.org/#get-transfer-history  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | amount to transfer |
| fromAccount | <code>string</code> | Yes | account to transfer from |
| toAccount | <code>string</code> | Yes | account to transfer to |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.transfer (code, amount, fromAccount, toAccount[, params])
```


<a name="fetchTransfers" id="fetchtransfers"></a>

### fetchTransfers{docsify-ignore}
fetch a history of internal transfers made on an account

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transfer structures](https://docs.ccxt.com/#/?id=transfer-structure)

**See**: https://docs.woo.org/#get-transfer-history  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency transferred |
| since | <code>int</code> | No | the earliest time in ms to fetch transfers for |
| limit | <code>int</code> | No | the maximum number of  transfers structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | the latest time in ms to fetch entries for |


```javascript
woo.fetchTransfers (code[, since, limit, params])
```


<a name="withdraw" id="withdraw"></a>

### withdraw{docsify-ignore}
make a withdrawal

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)

**See**: https://docs.woo.org/#token-withdraw  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | the amount to withdraw |
| address | <code>string</code> | Yes | the address to withdraw to |
| tag | <code>string</code> | Yes |  |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.withdraw (code, amount, address, tag[, params])
```


<a name="repayMargin" id="repaymargin"></a>

### repayMargin{docsify-ignore}
repay borrowed margin and interest

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)

**See**: https://docs.woo.org/#repay-interest  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency to repay |
| amount | <code>float</code> | Yes | the amount to repay |
| symbol | <code>string</code> | Yes | not used by woo.repayMargin () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.repayMargin (code, amount, symbol[, params])
```


<a name="fetchFundingRateHistory" id="fetchfundingratehistory"></a>

### fetchFundingRateHistory{docsify-ignore}
fetches historical funding rate prices

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [funding rate structures](https://docs.ccxt.com/#/?id=funding-rate-history-structure)

**See**: https://docs.woo.org/#get-funding-rate-history-for-one-market-public  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the funding rate history for |
| since | <code>int</code> | No | timestamp in ms of the earliest funding rate to fetch |
| limit | <code>int</code> | No | the maximum amount of [funding rate structures](https://docs.ccxt.com/#/?id=funding-rate-history-structure) to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest funding rate |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |


```javascript
woo.fetchFundingRateHistory (symbol[, since, limit, params])
```


<a name="setPositionMode" id="setpositionmode"></a>

### setPositionMode{docsify-ignore}
set hedged to true or false for a market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - response from the exchange

**See**: https://docs.woo.org/#update-position-mode  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| hedged | <code>bool</code> | Yes | set to true to use HEDGE_MODE, false for ONE_WAY |
| symbol | <code>string</code> | Yes | not used by woo setPositionMode |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.setPositionMode (hedged, symbol[, params])
```


<a name="fetchLeverage" id="fetchleverage"></a>

### fetchLeverage{docsify-ignore}
fetch the set leverage for a market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [leverage structure](https://docs.ccxt.com/#/?id=leverage-structure)

**See**: https://docs.woo.org/#get-account-information-new  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchLeverage (symbol[, params])
```


<a name="fetchConvertQuote" id="fetchconvertquote"></a>

### fetchConvertQuote{docsify-ignore}
fetch a quote for converting from one currency to another

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://docs.woo.org/#get-quote-rfq  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| fromCode | <code>string</code> | Yes | the currency that you want to sell and convert from |
| toCode | <code>string</code> | Yes | the currency that you want to buy and convert into |
| amount | <code>float</code> | No | how much you want to trade in units of the from currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchConvertQuote (fromCode, toCode[, amount, params])
```


<a name="createConvertTrade" id="createconverttrade"></a>

### createConvertTrade{docsify-ignore}
convert from one currency to another

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://docs.woo.org/#send-quote-rft  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the id of the trade that you want to make |
| fromCode | <code>string</code> | Yes | the currency that you want to sell and convert from |
| toCode | <code>string</code> | Yes | the currency that you want to buy and convert into |
| amount | <code>float</code> | No | how much you want to trade in units of the from currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.createConvertTrade (id, fromCode, toCode[, amount, params])
```


<a name="fetchConvertTrade" id="fetchconverttrade"></a>

### fetchConvertTrade{docsify-ignore}
fetch the data for a conversion trade

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://docs.woo.org/#get-quote-trade  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the id of the trade that you want to fetch |
| code | <code>string</code> | No | the unified currency code of the conversion trade |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchConvertTrade (id[, code, params])
```


<a name="fetchConvertTradeHistory" id="fetchconverttradehistory"></a>

### fetchConvertTradeHistory{docsify-ignore}
fetch the users history of conversion trades

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [conversion structures](https://docs.ccxt.com/#/?id=conversion-structure)

**See**: https://docs.woo.org/#get-quote-trades  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | the unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch conversions for |
| limit | <code>int</code> | No | the maximum number of conversion structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest conversion to fetch |


```javascript
woo.fetchConvertTradeHistory ([code, since, limit, params])
```


<a name="fetchConvertCurrencies" id="fetchconvertcurrencies"></a>

### fetchConvertCurrencies{docsify-ignore}
fetches all available currencies that can be converted

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - an associative dictionary of currencies

**See**: https://docs.woo.org/#get-quote-asset-info  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.fetchConvertCurrencies ([params])
```


<a name="watchOrderBook" id="watchorderbook"></a>

### watchOrderBook{docsify-ignore}
watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols

**See**: https://docs.woo.org/#orderbook  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return. |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchOrderBook (symbol[, limit, params])
```


<a name="watchTicker" id="watchticker"></a>

### watchTicker{docsify-ignore}
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchTicker (symbol[, params])
```


<a name="watchTickers" id="watchtickers"></a>

### watchTickers{docsify-ignore}
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for all markets of a specific list

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)

**See**: https://docs.woo.org/#24h-tickers  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchTickers (symbols[, params])
```


<a name="watchOHLCV" id="watchohlcv"></a>

### watchOHLCV{docsify-ignore}
watches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume

**See**: https://docs.woo.org/#k-line  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchOHLCV (symbol, timeframe[, since, limit, params])
```


<a name="watchTrades" id="watchtrades"></a>

### watchTrades{docsify-ignore}
watches information on multiple trades made in a market

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure

**See**: https://docs.woo.org/#trade  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market trades were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trade structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchTrades (symbol[, since, limit, params])
```


<a name="watchOrders" id="watchorders"></a>

### watchOrders{docsify-ignore}
watches information on multiple orders made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**

- https://docs.woo.org/#executionreport
- https://docs.woo.org/#algoexecutionreportv2


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.trigger | <code>bool</code> | No | true if trigger order |


```javascript
woo.watchOrders (symbol[, since, limit, params])
```


<a name="watchMyTrades" id="watchmytrades"></a>

### watchMyTrades{docsify-ignore}
watches information on multiple trades made by the user

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**

- https://docs.woo.org/#executionreport
- https://docs.woo.org/#algoexecutionreportv2


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.trigger | <code>bool</code> | No | true if trigger order |


```javascript
woo.watchMyTrades (symbol[, since, limit, params])
```


<a name="watchPositions" id="watchpositions"></a>

### watchPositions{docsify-ignore}
watch all open positions

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/en/latest/manual.html#position-structure)

**See**: https://docs.woo.org/#position-push  

| Param | Type | Description |
| --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | list of unified market symbols |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchPositions (symbols, params[])
```


<a name="watchBalance" id="watchbalance"></a>

### watchBalance{docsify-ignore}
watch balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance method of [<code>woo</code>](#woo)  
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)

**See**: https://docs.woo.org/#balance  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
woo.watchBalance ([params])
```

