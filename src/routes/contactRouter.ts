import express, { Request, Response, NextFunction} from 'express';
import { newContactSchema } from '../utils';
import { z } from 'zod';
import contactService from '../services/contactService';
import { Contact } from '../../types';

const router = express.Router();

const newContactParser = (req: Request, res: Response, next: NextFunction) => {
    try {
      newContactSchema.parse(req.body);
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
  res.send(contactService.getContact());
});

router.post('/', newContactParser, (req: Request<unknown, unknown, Contact>, res: Response<Contact>) => {
  const addedContact = contactService.addContact(req.body);
  res.json(addedContact);
});



router.use(errorMiddleware);
export default router;