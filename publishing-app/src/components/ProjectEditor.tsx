import React, { useState } from 'react';

interface ProjectEditorProps {
  projectName: string;
  onSave: (name: string) => void;
}

const ProjectEditor: React.FC<ProjectEditorProps> = ({ projectName, onSave }) => {
  const [name, setName] = useState(projectName);

  const handleSave = () => {
    onSave(name);
  };

  return (
    <div>
      <h3>Edit Project</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter project name"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProjectEditor;