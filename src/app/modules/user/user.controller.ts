import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  res.json({
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    token: result.accessToken,
    data: result.isUserExists,
  });
});
// retrieved the users
const getUser = catchAsync(async (req, res) => {
  const token = req.headers.authorization as string;
  const result = await UserServices.getUserFromDB(token);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User profile retrieved successfully',
    data: result,
  });
});

export const UserController = {
  loginUser,
  getUser,
};
