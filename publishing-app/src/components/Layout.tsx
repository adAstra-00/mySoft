// src/components/Layout.tsx
import type { ReactNode } from 'react';
import { useState } from 'react';
import Header from './Header';
import { StatusBar } from './StatusBar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="flex-grow flex-auto bg-gray-100 text-gray-900"> 
        {/* Top Menubar */}
            <Header
                toggleLeft={() => setLeftOpen(!leftOpen)}
                toggleRight={() => setRightOpen(!rightOpen)}
            />
    
        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
        
            {/* Left Sidebar */}
            <aside
                className={`bg-white border-r overflow-y-auto transition-all duration-300 ${
                    leftOpen ? 'w-64' : 'w-0'
                }`}
                style={{ flexShrink: 0 }}
            >
                {leftOpen && (
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Navigation</h2>
                        <ul className="space-y-1 text-sm">
                            <li>📚 Projects</li>
                            <li>📈 Marketing</li>
                            <li>🛠 Settings</li>
                        </ul>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <main className="flex-1 h-full overflow-y-auto p-6 bg-gray-50"> {children}</main>

            {/* Right Sidebar */}
            <aside
                className={`bg-white border-l p-4 overflow-y-auto transition-all duration-300 ${
                rightOpen ? 'w-64' : 'w-0'
                }`}
                style={{ flexShrink: 0 }}
            >
                {rightOpen && (
                <div>
                    <h2 className="text-lg font-semibold mb-2">Quick Info</h2>
                    <p className="text-sm">Stats, tips, or notes go here.</p>
                </div>
                )}
            </aside>
        </div>

        {/* Bottom Status Bar */}
        <StatusBar />
    </div>
  );
};
