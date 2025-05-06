import React from 'react';

interface TagSelectorProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({ tags, selectedTags, onTagSelect }) => {
  return (
    <div>
      <h3>Select Tags</h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <button
              onClick={() => onTagSelect(tag)}
              className={selectedTags.includes(tag) ? 'selected' : ''}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagSelector;