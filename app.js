import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import routes from './routes/index.js';
import { errorHandler } from './utils/errorHandler.js';

dotenv.config();

const app = express();

  mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("db connected successfully")
  }).catch((error)=>{
    console.log("connection failed", error.message)
  })

app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Crypto Tracker API',
      version: '1.0.0',
      description: 'API for tracking cryptocurrencies and managing portfolios',
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:8000',
      },
    ],
  },
  apis: ['./routes/**/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

