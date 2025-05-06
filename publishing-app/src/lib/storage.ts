import localforage from 'localforage';

const PROJECTS_KEY = 'projects';

export const saveProjects = async (projects: any[]): Promise<void> => {
  try {
    await localforage.setItem(PROJECTS_KEY, projects);
    console.log('Projects saved successfully.');
  } catch (error) {
    console.error('Failed to save projects:', error);
    throw new Error('Could not save projects. Please try again later.');
  }
};

export const getProjects = async (): Promise<any[]> => {
  try {
    const projects = await localforage.getItem<any[]>(PROJECTS_KEY);
    if (!projects) {
      console.warn('No projects found.');
      return []; // Returns an empty array to avoid breaking the app with null or undefined values
    }
    return projects;
  } catch (error) {
    console.error('Failed to retrieve projects:', error);
    throw new Error('Could not retrieve projects. Please try again later.');
  }
};

/* 1 vulnerability:
hardcoded-credentials Embedding credentials in source code risks unauthorized access*/