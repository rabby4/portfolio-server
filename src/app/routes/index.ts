import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ProjectRoutes } from '../modules/projects/project.route';
import { BlogRoutes } from '../modules/blogs/blog.route';
import { SkillRoutes } from '../modules/skills/skill.route';

const router = Router();

const allRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/Projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
