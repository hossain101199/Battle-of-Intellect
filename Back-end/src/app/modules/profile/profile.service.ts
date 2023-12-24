import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IUser } from '../user/user.interface';

const getProfileFromDB = async (payload: string): Promise<IUser | null> => {
  const result = await prisma.user.findUnique({
    where: {
      userId: payload,
    },
    select: {
      userId: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const updateProfileInDB = async (
  id: string,
  payload: Partial<User>
): Promise<IUser> => {
  const allowedFields = ['name', 'email'];

  // Filter the payload to only include allowed fields
  const filteredPayload: Partial<User> = Object.keys(payload)
    .filter(key => allowedFields.includes(key as keyof User))
    .reduce((obj, key) => {
      (obj as any)[key] = (payload as any)[key];
      return obj;
    }, {} as Partial<User>);

  const result = await prisma.user.update({
    where: {
      userId: id,
    },

    data: filteredPayload,

    select: {
      userId: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

export const profileService = {
  getProfileFromDB,
  updateProfileInDB,
};
