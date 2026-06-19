const noman= require("./second");


console.log("hello world",noman);




//01

app.get('/api/profile', (req, res) => {
    const userProfile = {
        username: "ali_khan",
        email: "ali@gmail.com",
        joined: "June 2026"
    };
    res.json(userProfile);
});







app.get('/api/cricket/live', (req, res) => {
    const liveMatch = {
        teams: "Pakistan vs India",
        score: "185/3",
        overs: 18.2,
        status: "In Progress"
    };
    res.json(liveMatch);
});









app.get('/api/todos', (req, res) => {
    const todoList = [
        { id: 1, task: "JavaScript array methods seekhna", done: true },
        { id: 2, task: "Express.js API banana", done: false }
    ];
    res.json(todoList);
});













app.get('/api/weather', (req, res) => {
    const weatherReport = {
        city: "Lahore",
        temperature: "38°C",
        condition: "Sunny",
        humidity: "45%"
    };
    res.json(weatherReport);
});

app.get('/api/posts', (req, res) => {
    const blogPosts = [
        { id: 101, title: "What is an API?", views: 1500 },
        { id: 102, title: "Learning Node.js in 2026", views: 920 }
    ];
    res.json(blogPosts);
});


app.get('/api/cart', (req, res) => {
    const cartItems = [
        { product: "Wireless Mouse", quantity: 1, price: 1500 },
        { product: "Keyboard", quantity: 1, price: 3000 }
    ];
    res.json(cartItems);
});



app.get('/api/movies/reviews', (req, res) => {
    const reviews = [
        { movie: "Inception", rating: 4.8, review: "Mind-bending masterpiece!" },
        { movie: "Interstellar", rating: 4.9, review: "Best sci-fi movie ever." }
    ];
    res.json(reviews);
});


app.get('/api/food/menu', (req, res) => {
    const menu = [
        { item: "Zinger Burger", price: 450, category: "Fast Food" },
        { item: "Chicken Pizza (Large)", price: 1200, category: "Pizza" }
    ];
    res.json(menu);
});

app.get('/api/notifications', (req, res) => {
    const userAlerts = [
        { id: 1, message: "Ali liked your comment", unread: true },
        { id: 2, message: "Your system update is successful", unread: false }
    ];
    res.json(userAlerts);
});