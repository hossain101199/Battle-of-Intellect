import { Category } from '@prisma/client';
import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { categoryService } from './category.service';

const createCategory: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await categoryService.createCategoryInDb(data);

  sendResponse<Category>(res, {
    statusCode: 200,
    success: true,
    message: 'A category created successfully',
    data: result,
  });
});

const getAllCategories: RequestHandler = catchAsync(async (req, res) => {
  const result = await categoryService.getAllCategoriesFromDb();

  sendResponse<Category[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Category retrieved successfully',
    data: result,
  });
});

export const categoryController = { createCategory, getAllCategories };
