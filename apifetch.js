
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
      title: 'get aur post API ka Swagger Documentation',
      version: '1.0.0',
      description: 'Yeh API GET aur POST requests ke liye Swagger documentation provide karta hai. Isme aapko users ki list dikhane aur naya user add karne ke liye endpoints milenge.',
    },
    servers: [
      {
        url: 'http://localhost:4053', 
      },
    ],
  },
  apis: ['./apifetch.js'], // Yeh file jahan aapke endpoints defined hain
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// 2. Swagger UI Middleware Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 3. GET Route (Optional check karne ke liye)
/**
 * @swagger
 * paths: {
      '/api/users': {
        get: {
          summary: 'Sabh Users Ki List Hasil Karein',
          description: 'Yeh route server ki systemData array se sabh saved users ka data la kar dikhata hai.',
          responses: {
            '200': {
              description: 'Users ki list kamyabi se mil gayi.',
              content: {
                'application/json': {
                  ]
                }
              }
            }
          }
        },
        post: {
          summary: 'Naya User Add Karein',
          description: 'Yeh route frontend se user ka naam aur email le kar use systemData array mein save karta hai.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: { type: 'string', example: 'Muhammad Ali' },
                    email: { type: 'string', example: 'ali@example.com' }
                  },
                  required: ['name', 'email']
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'User kamyabi se save ho gaya.',
              content: {
                'application/json': {
                  example: {
                    msg: "User saved",
                    data: {
                      name: "Muhammad Ali",
                      email: "ali@example.com"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
};*/


// Yeh middlewares JSON aur URL-encoded data ko parse karne ke liye hain
// 1. GET API
const usersDatabase = [];
app.get('/api/data', (req, res) => {
    res.json(usersDatabase); // Ya jo bhi data aap dikhana chahte hain
});

// 2. POST API                         
// 3. POST (Create)
app.post('/api/users', (req, res) => {
    const newUser = {
        id: (usersDatabase.length + 1).toString(), // Auto ID generate karega (1, 2, 3...)
        name: req.body.name,
        email: req.body.email
    };

    usersDatabase.push(newUser); // 👈 Yeh line data ko list mein add (save) kar rahi hai
    res.json({ msg: "User saved successfully", data: newUser });
});

const port = 4053;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
});