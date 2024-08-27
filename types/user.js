import { z } from 'zod';

export const ZCreateUser = z.object({
  name: z
    .string({ message: 'Name is required' })
    .min(3, { message: 'Name should be at least 3 characters long' }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password should be at least 6 characters long' })
    .trim(),
  // password: z.string()
  // .min(8, "Password must be at least 8 characters long")
  // .trim()
  // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  // .regex(/\d/, "Password must contain at least one number")
  // .regex(/[!@#$%^&*()]/, "Password must contain at least one special character")
});

export const ZUser = z.object({
  id: z.string(),
  name: z
    .string({ message: 'Name is required' })
    .min(3, { message: 'Name should be at least 3 characters long' }),
  email: z.string().email(),
  password: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
  }),
  phone: z.string(),
  photo: z.string().url({ message: 'Photo must be a valid URL' }),
  role: z.enum(['user', 'admin']),
  identityProvider: z.enum(['email', 'google']),
  createdAt: z.date(),
  updatedAt: z.date(),
});
