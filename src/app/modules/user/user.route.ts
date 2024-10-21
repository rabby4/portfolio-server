import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

// login user route
router.post('/login', UserController.loginUser);

export const UserRoutes = router;
