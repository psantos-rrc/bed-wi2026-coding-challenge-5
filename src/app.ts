import express, { Express } from "express";
import ticketRoutes from './api/v1/routes/resourceRoutes'

// Initialize Express application
const app: Express = express();

app.use(express.json());
app.use("/api/v1", resourceRoutes);

export default app;