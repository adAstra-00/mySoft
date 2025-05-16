import Image from 'next/image';

export const Heroes = () => {
    return (
        <div className="flex flex-row items-center w-full justify-center mb-10 mt-0 space-x-8">
            {/*To ensure that images occupy the same space without affecting layout, you can use ABSOLUTE positioning WITHIN A RELATIVE parent container (ctnr).*/}
            <div id="heroes-rel-ctnr-lm" className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
                <div id="hero01-lm" className="absolute inset-0">
                    <Image
                    src="/Diverge This_.png"
                    fill
                    className="object-contain dark:hidden"
                    alt="Neurodivergence"
                    />
                </div>

                <div id="hero01-dm" className="absolute inset-0">
                    <Image
                    src="/Sci for Noobs_.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Sci"
                    />
                </div>
            </div>
            <div id="heroes-rel-ctnr-dm" className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] hidden md:block">
                <div id="hero02-lm" className="absolute inset-0">
                    <Image
                    src="/Epic MF Bard_.png"
                    fill
                    className="object-contain dark:hidden"
                    alt="Writing"
                    />
                </div>

                <div id="hero02-dm" className="absolute inset-0">
                    <Image
                    src="/Solo-Sowing Future Ships_.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Solo"
                    />
                </div>
            </div>
        </div>
    )
}