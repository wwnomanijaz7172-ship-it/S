const express = require('express');
const app = express();
app.use(express.json());
/*app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id; // URL se ID nikal li
    
    res.json({
        success: false,
        message: `User with ID ${userId} ka data mil gaya!`,
        id: userId
    });
});
// Endpoint: /api/search?name=ali&city=lahore
app.get('/api/search', (req, res) => {
    const queryData = req.query; // Yeh ek object ki shakal me data dega
    
    res.json({
        success: true,
        filtersApplied: queryData
    });
});


app.get('/api/products/search', (req, res) => {
    const searchData = req.query;

    res.json({
        success: true,
        response:searchData
    });
});*/
app.post('/api/post/datasave', (req, res) => {
    const saveData = req.body;

    res.json({
        success: true,
        response: saveData
    });
});



app.put('/api/put/update/:id', (req, res) => {
    const userId = req.params.id;
    const updatedata = req.body;

    res.json({
        success: true,
        message: `User ID ${userId} update ho gaya!`,
        response: updatedata
    });
});

/*
app.delete('/api/data/delete/:id', (req, res) => {
    const deletedata = req.params.id;


    res.json({
        success: true,
        message: `User ID ${deletedata} delete ho gaya!`,
        response: deletedata
    });
});
*/
const port = 5000;
app.listen(port, () => {
    console.log(`Server chal raha hai port ${port} par`);
});
