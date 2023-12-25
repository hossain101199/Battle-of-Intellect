import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { IUser } from '../user/user.interface';
import {
  IChangePassword,
  ILoginUser,
  ILoginUserResponse,
} from './auth.interface';

const createUserInDB = async (payload: User): Promise<IUser> => {
  payload.password = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds)
  );

  // payload.role = UserRole.ADMIN;

  const createdUser = await prisma.user.create({
    data: payload,
    select: {
      userId: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return createdUser;
};

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: { email: email },
    select: {
      userId: true,
      name: true,
      role: true,
      password: true,
    },
  });

  if (isUserExist) {
    if (await bcrypt.compare(password, isUserExist.password)) {
      const { userId, name, role } = isUserExist;

      const accessToken = jwt.sign(
        {
          userId,
          name,
          role,
        },
        config.jwt.secret as Secret,
        { expiresIn: config.jwt.expires_in }
      );

      const refreshToken = jwt.sign(
        {
          userId,
          name,
          role,
        },
        config.jwt.refresh_secret as Secret,
        { expiresIn: config.jwt.refresh_expires_in }
      );

      return {
        name,
        role,
        accessToken,
        refreshToken,
      };
    } else {
      throw new ApiError(401, 'Password is incorrect');
    }
  } else {
    throw new ApiError(404, 'User does not exist');
  }
};

const changePassword = async (
  user: JwtPayload | null,
  payload: IChangePassword
): Promise<void> => {
  const { oldPassword, newPassword } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: { userId: user?.userId },
    select: {
      password: true,
    },
  });

  if (!isUserExist) {
    throw new ApiError(404, 'User does not exist');
  }

  // checking old password
  if (
    isUserExist.password &&
    !(await bcrypt.compare(oldPassword, isUserExist.password))
  ) {
    throw new ApiError(401, 'Old Password is incorrect');
  }

  const hashedNewPassword = await bcrypt.hash(
    newPassword,
    Number(config.bcrypt_salt_rounds)
  );

  await prisma.user.update({
    where: { userId: user?.userId },
    data: {
      password: hashedNewPassword,
    },
  });
};

export const authService = {
  createUserInDB,
  loginUser,
  changePassword,
};
