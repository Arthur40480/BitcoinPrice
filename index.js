// On importe axios
const axios = require('axios');

// Url de l'API CoinDesk
const bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function fetchBitcoinPrice() {
    // Devise reconnu USD/GBP/EUR
    const currency = process.argv[2] ? process.argv[2].toUpperCase() : 'USD';

    try {
        const { data } = await axios.get(bitcoinUrl);
        
        if(!data.bpi[currency]) {
            throw new Error('Devise inconnue');
        };

        const updated = data.time.updated;
        const currentPrice = data.bpi[currency].rate;

        console.log(`> 1 BTC = ${currentPrice} ${currency} (${updated})`);

    } catch (err){
        console.log(err.toString())
    }
};

fetchBitcoinPrice();
