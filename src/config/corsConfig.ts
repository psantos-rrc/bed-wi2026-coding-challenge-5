export const getCorsOptions = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    if (isDevelopment) { //
        // Allow all origins in development for easy testing
        return {
            origin: true,
            credentials: true,
        };
    }

    // Strict origins in production
    return {
        origin: process.env.ALLOWED_ORIGINS?.split(",") || [], // Get allowed origins from .env files injected using dotenv
        credentials: true, // Allow use of credentials in header
        methods: ["GET", "POST", "PUT", "DELETE"], // Allow these types of request
        allowedHeaders: ["Content-Type", "Authorization"], // Allow requests with these headers
        maxAge: 3600, // Cache the response for 1 hour
    };
};