'use strict'

const assert = require ('assert');
const testSharedMethods = require ('./test.sharedMethods.js');
const Precise = require ('../../base/Precise');

function testOrderBook (exchange, method, entry, symbol) {
    const format = {
        // 'symbol': 'ETH/BTC', // reserved
        'bids': [
            [ exchange.parseNumber ('1.23'), exchange.parseNumber ('0.123')],
            [ exchange.parseNumber ('1.22'), exchange.parseNumber ('0.543')],
        ],
        'asks': [
            [ exchange.parseNumber ('1.24'), exchange.parseNumber ('0.453')],
            [ exchange.parseNumber ('1.25'), exchange.parseNumber ('0.157')],
        ],
        'timestamp': 1504224000000,
        'datetime': '2017-09-01T00:00:00',
        'nonce': 134234234,
        // 'info': {},
    };
    const emptyNotAllowedFor = [ 'bids', 'asks' ];
    testSharedMethods.reviseStructureKeys (exchange, method, entry, format, emptyNotAllowedFor);
    testSharedMethods.reviseCommonTimestamp (exchange, method, entry);
    testSharedMethods.reviseSymbol (exchange, method, entry, 'symbol', symbol);
    const logText = testSharedMethods.logTemplate (exchange, method, entry);
    //
    const bids = entry['bids'];
    const bidsLength = bids.length;
    for (let i = 0; i < bidsLength; i++) {
        const currentBidString = exchange.safeString (bids[i], 0);
        if (bidsLength > (i + 1)) {
            const nextBidString = exchange.safeString (bids[i + 1], 0);
            assert (Precise.stringGt (currentBidString, nextBidString), 'current bid should be > than the next one' + logText);
        }
        testSharedMethods.Gt (exchange, method, bids[i], '0', '0');
        testSharedMethods.Gt (exchange, method, bids[i], '1', '0');
    }
    const asks = entry['asks'];
    const asksLength = asks.length;
    for (let i = 0; i < asksLength; i++) {
        const currentAskString = exchange.safeString (asks[i], 0);
        if (asksLength > (i + 1)) {
            const nextAskString = exchange.safeString (asks[i + 1], 0);
            assert (Precise.stringLt (currentAskString, nextAskString), 'current ask should be < than the next one' + logText);
        }
        testSharedMethods.Gt (exchange, method, asks[i], '0', '0');
        testSharedMethods.Gt (exchange, method, asks[i], '1', '0');
    }
    // others
    const skippedExchanges = [];
    if (exchange.inArray (exchange.id, skippedExchanges)) {
        return;
    }
    if (bidsLength && asksLength) {
        // check bid-ask spread
        assert (bids[0][0] < asks[0][0], 'bids[0][0] (' + bids[0][0] + ') should be < than asks[0][0] (' + asks[0][0] + ')' + logText);
    }
}

module.exports = testOrderBook;