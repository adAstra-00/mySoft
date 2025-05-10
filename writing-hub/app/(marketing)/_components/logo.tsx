import Image from 'next/image';
import React from "react";

interface LogoProps {
    showText?: boolean;
    textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({showText = true, textSize} ) => {
    return (
        <div id="logo" className="flex flex-row items-center">
            <Image
                src="/logo-light.svg"
                alt="Light-Mode Logo"
                height={20}
                width={20}
                className="dark:hidden m-2"
            />
            <Image
                src="/logo-dark.svg"
                alt="Dark-Mode Logo"
                height={20}
                width={20}
                className="hidden dark:block m-2"
            />
            {showText && (
                <p className={`hidden sm:block font-bold {cn("font-semibold", font.className)} ${textSize}`}>
                    Writing Hub
                </p>
            )}
        </div>
    )
}
