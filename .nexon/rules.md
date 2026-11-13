error-handling: Errors are managed with an AppError class and a centralized Express errorHandler middleware for consistent JSON responses.
controller-pattern: Controllers call corresponding services, and pass errors to next() for central handling.
service-pattern: Services perform business logic, throw AppError for domain-specific errors, and are exported as modules.
response-shape: Successful controller responses use the shape { success: true, data: ...}, errors use { success: false, message: ... }.
