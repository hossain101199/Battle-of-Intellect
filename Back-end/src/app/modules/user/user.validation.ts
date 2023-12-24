import { UserRole } from '@prisma/client';
import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required.',
    }),
    role: z.enum([UserRole.USER]).default(UserRole.USER),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum([UserRole.ADMIN, UserRole.USER]).optional(),
  }),
});

export const userValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
