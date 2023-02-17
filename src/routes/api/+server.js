function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Response(JSON.stringify({
        username: 'Roger',
        totalBalanceBTC: 0.97894652,
        totalBalanceDlr: 40123.56,
        recentsLite: [
          {
            id: 5,
            name: 'Usdt',
            src: '/images/cryptos/usdt.svg',
            state: 'Received',
            value: '+$3,546',
            isGoodNews: true,
            date: 'Today, 13:45 pm'
          },
          {
            id: 4,
            name: 'BNB',
            src: '/images/cryptos/bnb.svg',
            state: 'Buy',
            value: '+ 0.7546',
            isGoodNews: true,
            date: 'Today, 5:45 am'
          },
          {
            id: 3,
            name: 'Lite Coin',
            src: '/images/cryptos/litecoin.svg',
            state: 'Withdrawal',
            isGoodNews: false,
            value: '+ 0.7546',
            date: 'Today, 7:55 am'
          },
          {
            id: 2,
            name: 'Bitcoin',
            src: '/images/cryptos/bitcoin_ob.svg',
            state: 'Received',
            value: '+ 2.7546',
            isGoodNews: true,
            date: 'Today, 8:55 am'
          },
          {
            id: 1,
            name: 'Ethereum',
            src: '/images/cryptos/ethereum.svg',
            state: 'Received',
            value: '+ 1.646',
            isGoodNews: true,
            date: 'Today, 10:02 am'
          },
        ],
        recentsLarge: [
          {
            id: 2,
            name: 'Bitcoin',
            min: 'BTC',
            src: 'bitcoin_ot',
            marketCap: '$40,243.70',
            change24h: '+1,56',
            isGoodNews: true,
            curve: '/images/curves/curve_b.svg'
          },
          {
            id: 1,
            name: 'Ethereum',
            min: 'ETH',
            src: 'ethereum_w',
            marketCap: '$40,243.70',
            change24h: '+1,56',
            isGoodNews: true,
            curve: '/images/curves/curve_e.svg'
          },
        ],
        assets: [
          {
            id: 2,
            name: 'Bitcoin',
            src: '/images/cryptos/bitcoin_wt.svg',
            value: '121,6450.45',
            min: 'BTC',
          },
          {
            id: 1,
            name: 'Ethereum',
            src: '/images/cryptos/ethereum.svg',
            value: '143,850.45',
            min: 'ETH',
          },
        ]

      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ));
    }, 2000);
  });
}

export async function GET() {
  return resolveAfter2Seconds();
}