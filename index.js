// On importe axios
const axios = require('axios');

const bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function fetchBitcoinPrice() {
    const response = await axios.get(bitcoinUrl);

    const updated = response.data.time.updated;
    const currentPrice = response.data.bpi['EUR'].rate;

    console.log(`> 1 BTC = ${currentPrice} EUR (${updated})`);
}

fetchBitcoinPrice();