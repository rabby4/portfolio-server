import express from 'express';
import { SkillController } from './skill.controller';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.post('/', multerUpload.single('image'), SkillController.createSkill);
router.get('/', SkillController.getAllSkills);
router.get('/:id', SkillController.getSingleSkills);
router.patch('/:id', multerUpload.single('image'), SkillController.updateSkill);
router.delete('/:id', SkillController.deleteSkill);

export const SkillRoutes = router;
