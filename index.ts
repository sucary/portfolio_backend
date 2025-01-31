import express from 'express';
import projectRouter from './src/routes/projectRouter';
import cors from 'cors';
import contactRouter from './src/routes/contactRouter';


const app = express();
app.use(cors());


app.use(express.json());

app.use('/api/projects', projectRouter);
app.use('/api/contacts', contactRouter);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});