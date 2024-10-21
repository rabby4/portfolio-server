import config from '../config';
import { User } from '../modules/user/user.model';

const user = {
  email: config.admin_email,
  password: config.admin_password,
  role: 'admin',
};

const seedAdmin = async () => {
  // when database is connect, we will check is there any user who is super admin
  const isAdmin = await User.findOne({ role: 'admin' });
  if (!isAdmin) {
    await User.create(user);
  }
};

export default seedAdmin;
