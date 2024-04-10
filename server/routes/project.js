import express from 'express';
import { projects_all } from '../controllers/projectController';
var router = express.Router();

router.get('/', projects_all);

export default router;