import { Logo } from "./logo"

export const Footer = () => {
    return(
        <div className="flex items-center justify-center h-5">
            <div id="logo" className="relative w-32 h-full">
                <Logo />
            </div>
        </div>
    )
}