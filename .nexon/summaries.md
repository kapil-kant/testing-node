src/utils/errorHandler.js: Defines AppError class and Express errorHandler middleware for consistent API error responses.
src/services/userService.js: Service for user business logic: fetch by ID, list users, and now get total user count.
src/app/controllers/api/userController.js: Express controller providing user endpoints: fetch by ID, list users, get user count; calls userService with error handling.
src/app/routes/api/index.js: Defines API routes for user resource: list, get by ID, get count; uses userController.
