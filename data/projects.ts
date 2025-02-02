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
  ],},
  {
    id: '2',
    name: 'Rhythm Simulator',
    description: 'A minimal Osu! Mania simulator. Compatible with Osu! beatmaps. Not publically available due to audio copyrights.',
    link: '...',
    tech: [
      Tech.CSharp,
      Tech.Unity,
    ]
  }
];

export default data;