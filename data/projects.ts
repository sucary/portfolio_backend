import { Project, Tech } from '../types';

// Id to be defined in addProject... in projectServices.ts

const data: Project[] = [
  {
  id: '1',
  name: 'My portfolio',
  description: 'The site you are now visiting.',
  link: '...',
  tech: [
    Tech.TypeScript, 
    Tech.ExpressJS, 
    Tech.NodeJS, 
    Tech.React
  ],}
];

export default data;