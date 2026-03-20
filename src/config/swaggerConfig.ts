import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Task Management API Documentation",
            version: "1.0.0",
            description:
                "This is the API documentation for the Resource Library application.",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local server",
            },
        ],
    },
    apis: ["./src/api/v1/routes/*.ts"], // Path to the API docs
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};