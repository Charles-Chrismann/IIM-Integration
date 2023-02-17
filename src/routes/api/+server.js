function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Response(JSON.stringify({
        username: 'Roger',
        src: '/images/user/pp.png',
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
            src: '/images/cryptos/bitcoin_ot.svg',
            marketCap: '$40,243.70',
            change24h: '+1,56',
            isGoodNews: true,
            curve: '/images/curves/curve_b.svg'
          },
          {
            id: 1,
            name: 'Ethereum',
            min: 'ETH',
            src: '/images/cryptos/ethereum_w.svg',
            marketCap: '$40,243.70',
            change24h: '+1,56',
            isGoodNews: false,
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
            style: 'background: linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%);'
          },
          {
            id: 1,
            name: 'Ethereum',
            src: '/images/cryptos/ethereum.svg',
            value: '143,850.45',
            min: 'ETH',
            style: 'background: linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%);'
          },
        ]

      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ));
    }, 10);
  });
}

export async function GET() {
  return resolveAfter2Seconds();
}