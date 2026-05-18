const fetch = require('node-fetch');

async function checkPolymarket() {
  const res = await fetch('https://gamma-api.polymarket.com/events?search=FIFA');
  const text = await res.text();
  console.log("FIFA polymarket:", text.substring(0, 1000));
}
checkPolymarket();
