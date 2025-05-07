import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <div className="w-full h-full flex flex-row items-center justify-between">
            <Button id="logo-full" variant="ghost" className="flex">
                <Logo />
            </Button>
            <div id="page-links">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>
            </div>
        </div>
    )
}