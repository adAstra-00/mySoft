import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <div className="flex items-center w-full p-4 z-50 bg-background dark:bg-[#1F1F1F]">
            <Button id="logo-full" variant="ghost" className="flex">
                <Logo />
            </Button>
            <div id="page-links" className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
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