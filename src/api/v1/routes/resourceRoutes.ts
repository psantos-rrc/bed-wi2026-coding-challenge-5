import express, { Router } from "express";
import * as controller from "../controllers/resourceController";

const router: Router = express.Router();

// Example 1: Simple GET endpoint with query parameters
/**
 * @openapi
 * /health:
 *   get:
 *     summary: Returns health
 *     tags: [health]
 *     parameters:
 *       - name: limit
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Maximum number of users to return
 *       - name: role
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [admin, user, guest]
 *         description: Filter users by role
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/validations/User'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 */
router.get("/health", controller.getHealth);

// Example 1: Simple GET endpoint with query parameters
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve a list of users with optional filtering
 *     tags: [Users]
 *     parameters:
 *       - name: limit
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Maximum number of users to return
 *       - name: role
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [admin, user, guest]
 *         description: Filter users by role
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/validations/User'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 */
router.get("/resources", controller.getAllResources);

// Example 1: Simple GET endpoint with query parameters
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve a list of users with optional filtering
 *     tags: [Users]
 *     parameters:
 *       - name: limit
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Maximum number of users to return
 *       - name: role
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [admin, user, guest]
 *         description: Filter users by role
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/validations/User'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 */
router.get("/resources/:id", controller.getResourceById);

// Example 2: POST endpoint with request body
/**
 * @openapi
 * /users:
 *   post:
 *     summary: Create a new user account
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *                 default: user
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/User'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/Error'
 *       '409':
 *         description: User with this email already exists
 */
router.post("/resources/", controller.createResource);

// Example 3: Path parameters and authentication
/**
 * @openapi
 * /items/{itemId}:
 *   put:
 *     summary: Update a specific item's information
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/Item'
 *     responses:
 *       '200':
 *         description: Item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/Item'
 *       '404':
 *         description: Item not found
 *       '403':
 *         description: Not authorized to update this item
 */
router.put("/resources/:id", controller.updateResource);

// Example 3: Path parameters and authentication
/**
 * @openapi
 * /items/{itemId}:
 *   put:
 *     summary: Update a specific item's information
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/Item'
 *     responses:
 *       '200':
 *         description: Item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/Item'
 *       '404':
 *         description: Item not found
 *       '403':
 *         description: Not authorized to update this item
 */
router.delete("/resources/:id", controller.deleteResource);

export default router;