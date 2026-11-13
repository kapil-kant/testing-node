src/app/controllers/api/userController.js: Express controller exposing user endpoints and forwarding calls to userService with error handling.
src/utils/errorHandler.js: Defines AppError class and Express errorHandler middleware for consistent API error responses.
src/services/userService.js: User service with JSDoc-typed listUsers and getUserById, listUsers returns paginated users and total count.
