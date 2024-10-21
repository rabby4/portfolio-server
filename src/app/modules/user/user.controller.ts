import catchAsync from '../../utils/catchAsync';
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

export const UserController = {
  loginUser,
};
