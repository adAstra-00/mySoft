import Image from 'next/image';
// import { Poppins } from 'next/font/google';

/* uncomment if you want to use the font (👆) in the logo
import { cn } from "@/lib/utils"; // from shadcn, to dynamically append classes to tailwind elements without fear of overwritting or incorrect merging

const font = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
});
*/

export const Logo = () => {
    return (
        <div id="logo" className="flex flex-row">
            <Image
                src="/logo-light.svg"
                alt="Logo"
                width={20} // Set the width of the image
                height={20} // Set the height of the image
            />
            <p className='ml-2 hidden sm:block {cn("font-semibold", font.className)}'>
                Writing Hub
            </p>
        </div>
    )
}
