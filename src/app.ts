// Import external resources
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

// Import internal resources
import resourceRoutes from './api/v1/routes/resourceRoutes'
import setupSwagger from "./config/swagger";
import { getHelmetConfig } from "./config/helmetConfig";
import { getCorsOptions } from "./config/corsConfig";

// Initialize Express application
const app: Express = express();

// Setup Helmet
app.use(getHelmetConfig());

// Setup CORS
app.use(cors(getCorsOptions()));

// Setup Swagger
setupSwagger(app)

// Setup routes
app.use(express.json());
app.use("/api/v1", resourceRoutes);

export default app;