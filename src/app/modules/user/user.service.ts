import config from '../../config';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TLoginUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/appError';

// create service function for login user
const loginUser = async (payload: TLoginUser) => {
  // check if the user exists
  const isUserExists = await User.findOne({ email: payload.email }).select(
    '+password',
  );

  if (!isUserExists) {
    throw new AppError(404, 'User is not exist');
  }

  // checking if the password matched
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(403, 'Password do not matched!');
  }
  // create access token
  const userData = {
    id: isUserExists._id,
    email: isUserExists.email,
    role: isUserExists.role,
  };

  const accessToken = jwt.sign(userData, config.jwt_access_token as string, {
    expiresIn: '1d',
  });
  return {
    accessToken,
    isUserExists,
  };
};

const getUserFromDB = async (token: string) => {
  // check if the token is valid or not
  const decoded = jwt.verify(
    token,
    config.jwt_access_token as string,
  ) as JwtPayload;

  const result = await User.findOne({ _id: decoded.id });
  return result;
};

export const UserServices = {
  loginUser,
  getUserFromDB,
};
