import { ValidationError } from "@/lib/error";

export const validateInputs = (...pairs) => {
  for (const [value, schema] of pairs) {
    const inputValidation = schema.safeParse(value);

    if (!inputValidation.success) {
      console.error(
        `Validation failed for ${JSON.stringify(value).substring(
          0,
          100
        )} and ${JSON.stringify(schema)}: ${inputValidation.error.message}`
      );
      throw new ValidationError("Validation failed");
    }
  }
};
