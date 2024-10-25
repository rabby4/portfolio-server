import express from 'express';
import { ProjectController } from './project.controller';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.post('/', multerUpload.single('image'), ProjectController.createProject);
router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getSingleProjects);
router.patch(
  '/:id',
  multerUpload.single('image'),
  ProjectController.updateProject,
);
router.delete('/:id', ProjectController.deleteProject);

export const ProjectRoutes = router;
