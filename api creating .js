const { use } = require("react");


app.get('/', (req, res) => {
    res.send('Welcome to our Homepage!');
});



app.get('/about', (req, res) => {
    res.send('This is the About Us page.');
});



app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Laptop' }, { id: 2, name: 'Mobile' }]);
});


app.get('/products/:id', (req, res) => {
    const productId = req.params.id; // URL sy ID nikalna
    res.send(`Displaying data for Product ID: ${productId}`);
});



app.post('/register', (req, res) => {
    const userData = req.body; // Form ya JSON data
    res.send(`User registered successfully with email: ${userData.email}`);
});


app.put('/user/update/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId} has been fully updated.`);
});



pp.patch('/user/change-password/:id', (req, res) => {
    res.send('Password updated successfully.');
});

app.delete('/post/delete/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post with ID ${postId} has been deleted.`);
});
9
app.get('/search', (req, res) => {
    const category = req.query.category; // Query parameter lena
    res.send(`Searching for items in category: ${category}`);
});



app.use((req, res) => {
    res.status(404).send('Oops! Page not found.');
});
console.log(use);