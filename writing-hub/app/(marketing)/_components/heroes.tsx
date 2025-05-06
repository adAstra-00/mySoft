import Image from 'next/image';

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">

                {/* Always visible */},
                <div id="hero01" className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] m-2">
                    <Image
                    src="/Diverge This_.png"
                    fill
                    className="object-contain"
                    alt="Neurodivergence"
                    />
                </div>

                {/* Hidden on small screens, visible on medium and larger */},
                <div id="hero02" className="relative h-[400px] w-[400px] hidden md:block m-2">
                    <Image
                    src="/Epic MF Bard_.png"
                    fill
                    className="object-contain"
                    alt="Writing"
                    />
                </div>

                {/* Hidden on small and medium screens, visible on large */},
                <div id="hero03" className="relative h-[400px] w-[400px] hidden lg:block m-2">
                    <Image
                    src="/MindFucks & Deep Shit_.png"
                    fill
                    className="object-contain"
                    alt="Thoughts"
                    />
                </div>
            </div>
        </div>
    )
}