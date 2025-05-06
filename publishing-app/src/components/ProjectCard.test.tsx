import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import { WritingProject } from '@/lib/dataModel';

const mockProject: WritingProject = {
  id: '1',
  title: 'Test Project',
  type: 'novel',
  tags: ['test'],
  wordCount: 1000,
  status: 'draft',
  synopsis: '',
  genre: '',
  keywords: [],
  filePath: '',
  platforms: {
    kdp: { published: false, checklist: {} },
    itch: { published: false, checklist: {} },
    substack: { published: false, checklist: {} },
    gumroad: { published: false, checklist: {} },
  },
  notes: '',
};

test('renders project title', () => {
  render(<ProjectCard project={mockProject} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
});

/* Add more test cases to cover edge cases, such as when the tags array is empty 
or when project has missing optional fields like coverImage.

General Testing
Add tests for other components like Dashboard, TagSelector, and ProjectEditor 
to ensure comprehensive coverage.*/

