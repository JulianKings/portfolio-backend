import express from 'express';
import { projects_all, projects_extra, projects_extra_one } from '../controllers/projectController';
var router = express.Router();

router.get('/', projects_all);
router.get('/extra', projects_extra);
router.get('/extra/:id', projects_extra_one);

export default router;