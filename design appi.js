const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json()); 

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger UI ke sath banayi gayi API documentation jo ke design appi.js file se read hoti hai.',
      version: '2.0.0',
      description: 'Yeh API documentation Swagger UI ke sath banayi gayi hai aur design appi.js file se read hoti hai. Isme aapko API endpoints aur unke responses ka detail milega.',
    },
    servers: [
      {
        url: 'http://localhost:5000', 
      },
    ],
  },
  // Is file ka exact naam yahan likha hai taake yahan se hi routes read hon
  apis: ['./design appi.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @openapi
 * /api/data:
 *   get:
 *     summary: Sample data hasil karne ke liye
 *     description: Yeh route check karne ke liye hai ke Swagger chal raha hai ya nahi.
 *     responses:
 *       200:
 *         description: Success! Data mil gaya.
 */
app.get('/api/data', (req, res) => {
  res.status(200).json({ message: "Hello, Swagger documentation working!" });
});

// Server Start hone par terminal mein message show hoga
const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
