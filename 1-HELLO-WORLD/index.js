const express = require('express'); // Express.js modülünü dahil et
const app = express(); // Express uygulamasını başlat
const port = 3000; // Port numarası

// Basit bir GET endpointi
app.get('/', (req, res) => {
    res.send('Merhaba Dünya! Node.js ile ilk API ???');
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor...`);
});
