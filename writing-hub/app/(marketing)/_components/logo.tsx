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
        <div>
            <Image
                src="/logo-light.svg"
                alt="Logo"
                fill
            />
        </div>
    )
}
