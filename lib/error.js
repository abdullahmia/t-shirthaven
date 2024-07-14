class ValidationError extends Error {
  statusCode = 400;
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

export { ValidationError };
