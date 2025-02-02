# Node.js Başlangıç API 🚀

Bu proje, **Node.js ve Express.js** kullanarak oluşturulmuş basit bir REST API örneğidir. Kullanıcı CRUD işlemleri için temel route yapısını içerir.

---

## 📂 Proje Klasör Yapısı

```
nodejs-baslangic/
│── src/                # Kaynak kodları
│   ├── routes/         # API route'ları
│   │   ├── userRoutes.js  
│   │   ├── productRoutes.js  
│   │   └── index.js
│   ├── controllers/    # İş mantığını içeren fonksiyonlar
│   │   ├── userController.js  
│   │   └── productController.js
│   ├── models/         # Veritabanı modelleri
│   ├── config/         # Konfigürasyon dosyaları (veritabanı, env)
│   ├── middlewares/    # Middleware'ler
│   ├── index.js        # Ana sunucu dosyası
│
├── node_modules/       # Bağımlılıklar
├── .env                # Ortam değişkenleri
├── .gitignore          # Gereksiz dosyaları takipten çıkarma
├── package.json        # Bağımlılık bilgileri
└── README.txt          # Proje açıklamaları
```

---

## 🚀 **Kurulum & Çalıştırma**

### 1️⃣ **Projeyi Klonla**
```sh
git clone https://github.com/eneskaraoglu/1-START.git
cd 1-START/1-HELLO-WORLD
```

### 2️⃣ **Bağımlılıkları Yükle**
```sh
npm install
```

### 3️⃣ **Geliştirme Modunda Çalıştır**
```sh
nodemon src/index.js
```
veya
```sh
node src/index.js
```
```sh
npm run dev
```
(Eğer `nodemon` yüklü değilse önce şu komutu çalıştır: `npm install -g nodemon`)

### 4️⃣ **API Testi**
Başarılı bir şekilde çalıştığında şu API endpoint'lerini test edebilirsin:

📌 **Kullanıcıları Listeleme:**  
`GET http://localhost:3000/api/users`

📌 **Yeni Kullanıcı Ekleme:**  
`POST http://localhost:3000/api/users`  
Body:
```json
{
    "name": "Mehmet"
}
```

---

## 🛠 **Bağımlılıklar**
| Paket | Açıklama |
|--------|----------|
| express | Web sunucusu için framework |
| nodemon | Geliştirme sırasında otomatik restart sağlar |

---

## 📜 **Lisans**
Bu proje **MIT Lisansı** altında paylaşılmıştır.

