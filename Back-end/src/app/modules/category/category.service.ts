import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategoryInDb = async (payload: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data: payload,
  });

  return result;
};

const getAllCategoriesFromDb = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};

export const categoryService = {
  createCategoryInDb,
  getAllCategoriesFromDb,
};
