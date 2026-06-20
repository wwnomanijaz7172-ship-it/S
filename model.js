const express = require('express');
const app = express();
const PORT = 5000;

// Body Parser Middleware (Taake server JSON data samajh sake)
app.use(express.json());

// Mock Database (Data save rakhne ke liye array)
let todos = [
    { id: 1, title: "Learn Express.js Structure", completed: true },
    { id: 2, title: "Prepare for Internship Interview", completed: false }
];

// ==========================================
// 🚩 MIDDLEWARE (Chaukidar / Gatekeeper)
// Wazeh Nishani: Isme 'next' hota hai. Yeh data check karta hai.
// ==========================================
const validateTodoInput = (req, res, next) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ 
            success: false, 
            message: "Validation Failed: Todo title is required!" 
        });
    }
    next(); // Agar sab sahi hai toh agle step par bhejo
};

// ==========================================
// 🧠 CONTROLLERS (Dimag / Business Logic)
// Wazeh Nishani: Yeh final response (res.json) send karte hain.
// ==========================================

// 1. Saare tasks dikhane ka controller
const getAllTodos = (req, res) => {
    res.status(200).json({ success: true, count: todos.length, data: todos });
};

// 2. Naya task add karne ka controller
const createTodo = (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title: title, completed: false };
    todos.push(newTodo);
    res.status(201).json({ success: true, message: "Task added successfully!", data: newTodo });
};

// 3. Task delete karne ka controller
const deleteTodo = (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({ success: false, message: "Task not found!" });
    }

    todos.splice(todoIndex, 1);
    res.status(200).json({ success: true, message: `Task ${todoId} deleted.` });
};

// ==========================================
// 🛣️ ROUTES (Map / Rasta)
// Wazeh Nishani: Yeh HTTP Methods (get, post, delete) aur URL batate hain.
// ==========================================
app.get('/api/todos', getAllTodos);                       // GET Request
app.post('/api/todos', validateTodoInput, createTodo);    // POST Request (With Middleware)
app.delete('/api/todos/:id', deleteTodo);                  // DELETE Request

// ==========================================
// 🚀 SERVER START
// ==========================================
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});