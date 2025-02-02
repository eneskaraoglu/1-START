const express = require('express');
const app = express();
const port = 3000;

// Route'ları içe aktar
const routes = require('./routes');

// Middleware'ler (JSON Parser gibi)
app.use(express.json());

// Route'ları kullan
app.use('/api', routes);

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor...`);
});
