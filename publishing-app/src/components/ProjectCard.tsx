// src/components/ProjectCard.tsx

import type { WritingProject } from '@/lib/dataModel';

interface Props {
  project: WritingProject;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-sm text-gray-600">{project.type.toUpperCase()}</p>
      <p className="mt-2 text-sm">Status: <span className="font-medium">{project.status}</span></p>
      <p className="text-sm">Words: {project.wordCount}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
