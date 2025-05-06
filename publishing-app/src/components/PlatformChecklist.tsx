import React from 'react';

interface PlatformChecklistProps {
  platforms: string[];
  selectedPlatforms: string[];
  onPlatformToggle: (platform: string) => void;
}

const PlatformChecklist: React.FC<PlatformChecklistProps> = ({ platforms, selectedPlatforms, onPlatformToggle }) => {
  return (
    <div>
      <h3>Choose Platforms</h3>
      <ul>
        {platforms.map((platform) => (
          <li key={platform}>
            <label>
              <input
                type="checkbox"
                checked={selectedPlatforms.includes(platform)}
                onChange={() => onPlatformToggle(platform)}
              />
              {platform}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformChecklist;