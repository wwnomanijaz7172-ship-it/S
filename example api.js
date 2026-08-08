const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { id: 2, title: "Peer-e-Kamil", author: "Umera Ahmed", year: 2004 },
    { id: 3, title: "Jannat Kay Pattay", author: "Nimra Ahmed", year: 2012 }
];
app.post('/api/books', (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({ message: "Tamam fields (title, author, year) lazmi hain." });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        year
    };

    books.push(newBook);
    res.status(201).json({ message: "Kitab kamyabi se shamil kar di gayi hai!", book: newBook });
});

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} par chal raha hai.`);
});


app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});


app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: "Kitab nahi mili!" });
    }
    res.status(200).json(book);
});

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} par chal raha hai.`);
});

app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: "Kitab nahi mili jise update kiya ja sakay." });
    }

    const { title, author, year } = req.body;

    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;

    res.status(200).json({ message: "Kitab kamyabi se update ho gayi!", book });
});

app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Kitab nahi mili jise delete kiya ja sakay." });
    }

    books.splice(bookIndex, 1);
    res.status(200).json({ message: "Kitab kamyabi se delete kar di gayi." });
});


app.get('/api/books/filter/author', (req, res) => {
    const authorName = req.query.name;

    if (!authorName) {
        return res.status(400).json({ message: "Query mein author ka naam (name) bhejna lazmi hai." });
    }
    res.status(200).json(filteredBooks);
});

app.get('/api/books/meta/count', (req, res) => {
    res.status(200).json({ total_books: books.length });
});

app.delete('/api/books/meta/clear-all', (req, res) => {
    books = [];
    res.status(200).json({ message: "Tamam kitabon ka data delete kar diya gaya hai." });
});

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} par chal raha hai.`);
});