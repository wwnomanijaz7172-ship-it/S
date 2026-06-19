const express = require('express');
const app = express();

app.use(express.json());
let books = [
    { id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { id: 2, title: "Atomic Habits", author: "James Clear" }
];
app.get('/books', (req, res) => { 
    res.status(200).json(books);
});
app.post('/add-book', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,  
        author: req.body.author  
    };
    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully!",
        data: newBook
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});