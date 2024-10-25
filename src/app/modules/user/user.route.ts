import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

// login user route
router.post('/login', UserController.loginUser);

router.get('/me', UserController.getUser);

export const UserRoutes = router;
