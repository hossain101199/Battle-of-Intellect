import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from '../user/user.validation';
import { profileController } from './profile.controller';

const router = express.Router();

router.get(
  '/',
  auth(UserRole.ADMIN, UserRole.USER),
  profileController.getProfile
);

router.patch(
  '/',
  auth(UserRole.ADMIN, UserRole.USER),
  validateRequest(userValidation.updateUserZodSchema),
  profileController.updateProfile
);

export const profileRoutes = router;
