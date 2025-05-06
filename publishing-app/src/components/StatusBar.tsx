// src/components/StatusBar.tsx

export const StatusBar = () => {
    return (
      <footer className="bg-white border-t text-sm text-gray-700 px-4 py-2 flex justify-between items-center">
        <span>Status: All systems nominal</span>
        <span>{new Date().toLocaleDateString()}</span>
      </footer>
    );
  };
  