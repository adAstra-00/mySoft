import React from 'react';

interface ProjectListProps {
  projects: any[];
}

// React.memo prevents unnecessary re-renders by memoizing the component unless its props change.
const ProjectList: React.FC<ProjectListProps> = React.memo(({ projects }) => {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>{project.name || `Project ${index + 1}`}</li>
      ))}
    </ul>
  );
});

export default ProjectList;