import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from '../user/user.interface';
import { profileService } from './profile.service';

const getProfile: RequestHandler = catchAsync(async (req, res) => {
  if (!req.verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const { userId } = req.verifiedUser;

  const result = await profileService.getProfileFromDB(userId);

  if (result === null) {
    sendResponse<IUser>(res, {
      statusCode: 404,
      success: false,
      message: `Error: User with ID ${userId} is not found. Please verify the provided ID and try again`,
      data: result,
    });
  } else {
    sendResponse<IUser>(res, {
      statusCode: 200,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    });
  }
});

const updateProfile: RequestHandler = catchAsync(async (req, res) => {
  if (!req.verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const { userId } = req.verifiedUser;
  const updatedUserData = req.body;

  const result = await profileService.updateProfileInDB(
    userId,
    updatedUserData
  );

  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

export const profileController = {
  getProfile,
  updateProfile,
};
