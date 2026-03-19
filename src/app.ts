import express, { Express } from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import resourceRoutes from './api/v1/routes/resourceRoutes'
import setupSwagger from "./config/swagger";

// Initialize Express application
const app: Express = express();

// Setup routes
app.use(express.json());
app.use("/api/v1", resourceRoutes);

// Setup Swagger
setupSwagger(app)

export default app;