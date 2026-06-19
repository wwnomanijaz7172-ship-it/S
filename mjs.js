const  express= require('express');
const app= express();

app.use(express.json());

let  books =[
    { id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { id: 2, title: "Atomic Habits", author: "James Clear" }
]
app.get('/books',(req,res)=>{
res.status(200).json(book)
})
// 2. POST API: Nayi book add karne ke liye
app.post('/add-books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,   // Jo title user bhejega
        author: req.body.author  // Jo author user bhejega
    };

    // Nayi book ko list mein shamil kiya
    books.push(newBook);

    // 201 status matlab "Nayi cheez kamyabi se ban gayi"
    res.status(201).json({
        message: "Book added successfully!",
        data: newBook
    })
    app,listen(3000,()=>{
console.log("Server running on http://localhost:3000.")
    })
})
