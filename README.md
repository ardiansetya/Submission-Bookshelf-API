# 📚 Bookshelf API

Bookshelf API adalah proyek backend sederhana berbasis Node.js menggunakan framework Hapi.js. Proyek ini menyediakan fitur CRUD untuk mengelola koleksi buku. Aplikasi ini dirancang untuk memenuhi kebutuhan pengujian sesuai spesifikasi yang diberikan.

---

## 🚀 Fitur

- ✨ **Tambah Buku**: Menyimpan data buku baru.
- 🔍 **Lihat Daftar Buku**: Mendapatkan semua buku yang tersimpan dengan opsi filter.
- 🔎 **Lihat Detail Buku**: Mendapatkan informasi lengkap dari buku tertentu.
- ✏️ **Perbarui Buku**: Mengubah data buku berdasarkan ID.
- 🗑️ **Hapus Buku**: Menghapus buku berdasarkan ID.

---

## 🛠️ Teknologi yang Digunakan

- [Node.js](https://nodejs.org/) ![Node.js](https://img.shields.io/badge/Node.js-v18.13.0-green)
- [Hapi.js](https://hapi.dev/) ![Hapi](https://img.shields.io/badge/Hapi.js-%5E21.0.0-orange)
- [Nanoid](https://github.com/ai/nanoid) ![Nanoid](https://img.shields.io/badge/Nanoid-%5E4.0.0-blue)
- [Postman](https://www.postman.com/) untuk pengujian API

---

## 🚦 Persyaratan

- Node.js versi LTS **18.13.0** atau lebih baru
- Postman untuk pengujian API

---

## 🏗️ Langkah Instalasi

1. **Clone repository**:
   ```bash
   git clone https://github.com/username/bookshelf-api.git
   cd bookshelf-api
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Jalankan server**:
   ```bash
   npm run start
   ```
4. **Server berjalan di**: `http://localhost:9000`

---

## 🔥 Endpoint API

### 1️⃣ Tambah Buku
- **Method**: `POST`
- **URL**: `/books`
- **Body**:
  ```json
  {
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "reading": false
  }
  ```
- **Respons**:
  ```json
  {
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
      "bookId": "generatedId"
    }
  }
  ```

### 2️⃣ Lihat Daftar Buku
- **Method**: `GET`
- **URL**: `/books`
- **Query Parameters** (opsional):
  - `?name=string`
  - `?reading=0|1`
  - `?finished=0|1`
- **Respons**:
  ```json
  {
    "status": "success",
    "data": {
      "books": [
        {
          "id": "generatedId",
          "name": "Buku A",
          "publisher": "Dicoding Indonesia"
        }
      ]
    }
  }
  ```

### 3️⃣ Lihat Detail Buku
- **Method**: `GET`
- **URL**: `/books/{bookId}`
- **Respons**:
  ```json
  {
    "status": "success",
    "data": {
      "book": {
        "id": "generatedId",
        "name": "Buku A",
        "year": 2010,
        "author": "John Doe",
        "summary": "Lorem ipsum dolor sit amet",
        "publisher": "Dicoding Indonesia",
        "pageCount": 100,
        "readPage": 25,
        "reading": false,
        "finished": false,
        "insertedAt": "2024-12-16T00:00:00.000Z",
        "updatedAt": "2024-12-16T00:00:00.000Z"
      }
    }
  }
  ```

### 4️⃣ Perbarui Buku
- **Method**: `PUT`
- **URL**: `/books/{bookId}`
- **Body**:
  ```json
  {
    "name": "Buku A Revisi",
    "year": 2011,
    "author": "Jane Doe",
    "summary": "Lorem Dolor sit Amet",
    "publisher": "Dicoding",
    "pageCount": 200,
    "readPage": 26,
    "reading": false
  }
  ```
- **Respons**:
  ```json
  {
    "status": "success",
    "message": "Buku berhasil diperbarui"
  }
  ```

### 5️⃣ Hapus Buku
- **Method**: `DELETE`
- **URL**: `/books/{bookId}`
- **Respons**:
  ```json
  {
    "status": "success",
    "message": "Buku berhasil dihapus"
  }
  ```

---

## 🧪 Pengujian dengan Postman

1. Import file koleksi Postman `Bookshelf API Test.postman_collection.json`.
2. Import file environment Postman `Bookshelf API Test.postman_environment.json`.
3. Pilih environment **Bookshelf API Test**.
4. Jalankan koleksi menggunakan fitur **Runner** di Postman.

---


## 📜 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---
