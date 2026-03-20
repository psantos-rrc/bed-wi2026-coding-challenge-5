import express, { Router } from "express";
import * as controller from "../controllers/resourceController";

const router: Router = express.Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Returns health
 *     tags: [health]
 *     responses:
 *       '200':
 *         description: Check status of REST API
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 uptime:
 *                   type: Date
 *                 timestamp:
 *                   type: Date
 *                 version:
 *                   type: string
 */
router.get("/health", controller.getHealth);

/**
 * @openapi
 * /resources:
 *   get:
 *     summary: Retrieve a specific resource
 *     tags: [Resources]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Resources
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: Resource
 *                   items: Resource []
 */
router.get("/resources", controller.getAllResources);

// Example 1: Simple GET endpoint with query parameters
/**
 * @openapi
 * /resources/:id:
 *   get:
 *     summary: Retrieve a list of users with optional filtering
 *     tags: [Resources]
 *     parameters:
 *       - id: limit
 *         in: query
 *         required: yes
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Resource id number to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved resource
 *       '400':
 *          description: "Bad request"
 *       '404':
 *          description: "Resource not found"
 *          
 */
router.get("/resources/:id", controller.getResourceById);

// Example 2: POST endpoint with request body
/**
 * @openapi
 * /resources:
 *   post:
 *     summary: Create a new Resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               id:
 *                 type: integer
 *               title:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 example: "Typescript Basics"
 *               type:
 *                 type: string
 *                 enum: [documentation, video, article, tutorial]
 *               url:
 *                 type: string
 *                 format: url
 *                 example: "https://example.com/ts-basics"
 *               description:
 *                 type: string
 *               createdAt:
 *                 type: Date
 *     responses:
 *       '201':
 *         description: Resource created successfullly
 *       '400':
 *         description: Bad request, missing required field
 */
router.post("/resources/", controller.createResource);

router.put("/resources/:id", controller.updateResource);

router.delete("/resources/:id", controller.deleteResource);

export default router;