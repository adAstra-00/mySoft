// filepath: c:\Users\PC\Documents\Coding Projects\writingHub\publishing-app\src\components\Header.tsx
import ReactLogo from '../assets/react.webp';

interface HeaderProps {
  toggleLeft: () => void;
  toggleRight: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleLeft, toggleRight }) => {
  return (
    <header className="h-14 bg-white border-b flex-grow items-center justify-between">
      <div className="flex flex-row justify-between gap-2">
        <button onClick={toggleLeft} className="flex-none text-gray-600 hover:text-black text-xl">
          ☰
        </button>
        <img
          src={ReactLogo}
          alt="React Logo"
          loading="lazy"
          className="h-10 w-auto flex-none"
        />
        <h1 className="flex text-xl flex-row font-bold ml-2">WriterHub</h1>
        <button onClick={toggleRight} className="flex-none text-gray-600 hover:text-black text-xl">
        ℹ️
        </button>
      </div>
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