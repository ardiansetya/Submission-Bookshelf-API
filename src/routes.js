const { nanoid } = require('nanoid');
const books = []; // Array untuk menyimpan buku

const routes = [
   // Tambah Buku
   {
      method: 'POST',
      path: '/books',
      handler: (request, h) => {
         const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

         if (!name) {
            return h.response({
               status: 'fail',
               message: 'Gagal menambahkan buku. Mohon isi nama buku',
            }).code(400);
         }

         if (readPage > pageCount) {
            return h.response({
               status: 'fail',
               message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
            }).code(400);
         }

         const id = nanoid(16);
         const insertedAt = new Date().toISOString();
         const updatedAt = insertedAt;
         const finished = pageCount === readPage;

         const newBook = {
            id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, insertedAt, updatedAt,
         };

         books.push(newBook);

         return h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: { bookId: id },
         }).code(201);
      },
   },

   // Dapatkan Semua Buku
   {
      method: 'GET',
      path: '/books',
      handler: (request, h) => {
         const { name, reading, finished } = request.query;

         let filteredBooks = books;

         if (name) {
            filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
         }
         if (reading !== undefined) {
            filteredBooks = filteredBooks.filter((book) => book.reading === Boolean(Number(reading)));
         }
         if (finished !== undefined) {
            filteredBooks = filteredBooks.filter((book) => book.finished === Boolean(Number(finished)));
         }

         const responseBooks = filteredBooks.map(({ id, name, publisher }) => ({ id, name, publisher }));

         return h.response({
            status: 'success',
            data: { books: responseBooks },
         });
      },
   },

   // Dapatkan Detail Buku
   {
      method: 'GET',
      path: '/books/{bookId}',
      handler: (request, h) => {
         const { bookId } = request.params;
         const book = books.find((b) => b.id === bookId);

         if (!book) {
            return h.response({
               status: 'fail',
               message: 'Buku tidak ditemukan',
            }).code(404);
         }

         return h.response({
            status: 'success',
            data: { book },
         });
      },
   },

   // Perbarui Buku
   {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: (request, h) => {
         const { bookId } = request.params;
         const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

         if (!name) {
            return h.response({
               status: 'fail',
               message: 'Gagal memperbarui buku. Mohon isi nama buku',
            }).code(400);
         }

         if (readPage > pageCount) {
            return h.response({
               status: 'fail',
               message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
            }).code(400);
         }

         const index = books.findIndex((b) => b.id === bookId);

         if (index === -1) {
            return h.response({
               status: 'fail',
               message: 'Gagal memperbarui buku. Id tidak ditemukan',
            }).code(404);
         }

         const updatedAt = new Date().toISOString();
         const finished = pageCount === readPage;

         books[index] = {
            ...books[index],
            name, year, author, summary, publisher, pageCount, readPage, reading, finished, updatedAt,
         };

         return h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
         });
      },
   },

   // Hapus Buku
   {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: (request, h) => {
         const { bookId } = request.params;

         const index = books.findIndex((b) => b.id === bookId);

         if (index === -1) {
            return h.response({
               status: 'fail',
               message: 'Buku gagal dihapus. Id tidak ditemukan',
            }).code(404);
         }

         books.splice(index, 1);

         return h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
         });
      },
   },
];

module.exports = routes;
