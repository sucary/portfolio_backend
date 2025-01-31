
import express, { Request, Response, NextFunction} from 'express';
import { newProjectSchema } from '../utils';
import { z } from 'zod';
import projectService from '../services/projectService';
import { Project, ProjectWithoutId } from '../../types';

const router = express.Router();


const newProjectParser = (req: Request, res: Response, next: NextFunction) => {
  try {
    newProjectSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};


const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => { 
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.get('/', (_req, res) => {
  res.send(projectService.getProjects());
});


// Posting a project not implemented on the frontend
router.post('/', newProjectParser, (req: Request<unknown, unknown, ProjectWithoutId>, res: Response<Project>) => {
  const addedProject = projectService.addProject(req.body);
  res.json(addedProject);
});

router.use(errorMiddleware);
export default router;