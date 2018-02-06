# ReactSample

```
npm install
npm start
```

1. A Sorted table

 Show those currency pairs in a table with rows for each currency pair, which includes columns for at least the name, the current best bid price, current best ask price, the amount that the best bid last changed, and the amount the best ask price last changed. 
 This data can be read out of the price updates that are sent via stomp. There are a limited number of currency pairs, and multiple updates will be sent for each one.  You should request the topic<code>/fx/prices</code>, to receive update messages with a body that looks like this:

<pre>{
  "name": "usdjpy",
  "bestBid": 106.7297012204255,
  "bestAsk": 107.25199883791178,
  "openBid": 107.22827132623534,
  "openAsk": 109.78172867376465,
  "lastChangeAsk": -4.862314256927661,
  "lastChangeBid": -2.8769211401569663
}</pre>

 The table should be sorted (and remain sorted) by the column that indicates how much the best bid price
        last changed (lastChangeBid in the response data).

2. Sparklines

The last column should be a sparkline which shows the midprice over the 30 seconds before the most recent update. The midprice can be calculated by adding the bestBid and bestAsk fields together and dividing by 2.