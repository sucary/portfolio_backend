
import projectData from '../../data/projects';
import { Project, ProjectWithoutId } from '../../types';
import { v1 as uuidv1 } from 'uuid';


const projects: Project[] = [...projectData];

console.log(projects);


// getProjects by creating a new copy of projects array.
const getProjects = (): Project[] => {
  return projects.map(({id, name, description, link, tech}) => ({
    id,  
    name,
    description,
    link,
    tech,
  }));
};

/**
GetProjects without recreating new objects.

const getProjects = (): Project[] => {
  return [...projects]; // Return a copy to prevent external modifications
};
*/

// For adding project, not implemented on the frontend
const addProject = (project: ProjectWithoutId): Project => {

  const id = uuidv1();
  const newProject: Project = {
    id: id,
    ...project,
    
  };

  projects.push(newProject);
  console.log('Added ', newProject.name, ' to project list.');
  return newProject;
};

export default {
  getProjects,
  addProject
};