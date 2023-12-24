import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from '../user/user.validation';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidation.createUserZodSchema),
  authController.createUser
);

router.post(
  '/signin',
  validateRequest(authValidation.loginZodSchema),
  authController.loginUser
);

router.post(
  '/change-password',
  validateRequest(authValidation.changePasswordZodSchema),
  auth(UserRole.ADMIN, UserRole.USER),
  authController.changePassword
);

export const authRoutes = router;
