const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json()); 

// 1. Swagger Configuration (Jo pehle missing thi)
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mera ',
      version: '1.0.0',
      description: 'Swagger UI ke sath banayi gayi API documentation',
    },
    servers: [
      {
        url: 'http://localhost:4000', 
      },
    ],
  },
  apis: ['./sweeger.js'], 
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
 *               
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *     responses:
 *       201:
 *         description: Mubarak ho! User register ho gaya.
 */
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User successfully registered!",
    receivedData: { name, email }
  });
});

// 5. Server Start
const PORT = 4000; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
