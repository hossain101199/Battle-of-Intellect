import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { categoryController } from './category.controller';

const router = express.Router();

router.post('/', auth(UserRole.ADMIN), categoryController.createCategory);

router.get('/', categoryController.getAllCategories);

export const categoryRoutes = router;
