import express from 'express';
import { projects_all, projects_extra } from '../controllers/projectController';
var router = express.Router();

router.get('/', projects_all);
router.get('/extra', projects_extra);

export default router;