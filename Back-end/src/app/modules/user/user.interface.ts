import { UserRole } from '@prisma/client';

export type IUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};

export type IUserFilters = {
  searchTerm?: string;
  name?: string;
  email?: string;
  role?: string;
};
