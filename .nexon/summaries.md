src/app/controllers/api/userController.js: Express controller exposing user endpoints and forwarding calls to userService with error handling.
src/services/userService.js: Service handling business logic for user retrieval and listing, throws AppError for not found.
src/utils/errorHandler.js: Defines AppError class and Express errorHandler middleware for consistent API error responses.
src/app/routes/api/index.js: Express router for API endpoints, including users and public health check.
