import express from 'express';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/', BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getSingleBlogs);
router.patch('/:id', BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export const BlogRoutes = router;
