const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json()); 

// 1. Swagger Configuration (Jo pehle missing thi)
const swaggerOptions = {
  definition: {
    openapi: '2.0.0',
    info: {
      title: ' right',
      version: '3.0.0',
      description: ' UI ke sath banayi gayi API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3080', 
      },
    ],
  },
  apis: ['./routes.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// 2. Swagger UI Middleware Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 3. GET Route (Optional check karne ke liye)
/**
 * @openapi
 * /api/data:
 *   get:
 *     summary: Sample data hasil karne ke liye
 *     responses:
 *       200:
 *         description: Success!
 */

// 4. POST Route (Ab comments bilkul route ke upar hain)
/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Naya user register karein
 *     description: Yeh API client se name aur email le kar naya user create karti hai.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Muhammad Ali
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *     responses:
 *       201:
 *         description: Mubarak ho! User register ho gaya.
 */

const systemData = [];
app.get('/api/users', (req, res) => {
    res.json(systemData); // Ya jo bhi data aap dikhana chahte hain
});

// 3. POST (Create)
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const user = { name, email };
  systemData.push({ id: systemData.length + 1, ...user });
  res.json({ msg: 'User saved', data: user });
});


const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
