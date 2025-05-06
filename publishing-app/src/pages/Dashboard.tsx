import React, { useEffect, useState } from 'react';
import { saveProjects, getProjects } from '../lib/storage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const loadedProjects = await getProjects();
        setProjects(loadedProjects);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
        toast.error('Failed to load projects. Please try again.');
      }
    };

    fetchProjects();
  }, []);

  // Save projects to local storage
  const handleSaveProjects = async () => {
    try {
      await saveProjects(projects);
      toast.success('Projects saved successfully!');
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      toast.error('Failed to save projects. Please try again.');
    }
  };

  return (
    <div>
      <header>
        <h1 style={{ color: '#333' }}>Dashboard</h1> {/* Improved color contrast */}
      </header>
      <main>
        {error && (
          <section aria-live="polite">
            <p style={{ color: 'red' }}>Error: {error}</p>
          </section>
        )}
        <section>
          <button
            onClick={handleSaveProjects}
            aria-label="Save all projects"
            style={{
              backgroundColor: '#007BFF', // Accessible button color
              color: '#FFFFFF', // High contrast text
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Save Projects
          </button>
        </section>
        <section>
          <h2 style={{ color: '#333' }}>Project List</h2> {/* Improved color contrast */}
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <button
                  onClick={() => console.log(`Selected project: ${project.name}`)}
                  aria-label={`Select project ${project.name || `Project ${index + 1}`}`}
                  style={{
                    backgroundColor: '#F8F9FA', // Accessible button color
                    color: '#333', // High contrast text
                    padding: '8px 16px',
                    border: '1px solid #CCC',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '5px',
                  }}
                >
                  {project.name || `Project ${index + 1}`}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p style={{ color: '#666' }}>&copy; 2025 WritingHub</p> {/* Footer with accessible color */}
      </footer>
    </div>
  );
};

console.log('Dashboard is rendering');