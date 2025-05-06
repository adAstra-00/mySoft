// filepath: c:\Users\PC\Documents\Coding Projects\writingHub\publishing-app\src\components\Header.tsx
import ReactLogo from '../assets/react.webp'; // Use optimized WebP image

const Header: React.FC = () => {
  return (
    <header>
      <img
        src={ReactLogo}
        alt="React Logo"
        loading="lazy" // Lazy load the image
        style={{ width: '100px', height: '100px' }}
      />
    </header>
  );
};

export default Header;

/* Compress Images:
- Open your image files (e.g., react.svg) in Squoosh.
- Compress the images and save them in WebP format.

Replace Images in the Project:
- Replace the original images with the optimized versions in your project.

Update Image Usage: 
- Update components that use images to include the loading="lazy" attribute.*/