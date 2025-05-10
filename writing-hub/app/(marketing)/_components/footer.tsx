import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <div id="footer" className="flex items-center h-full w-full z-50 bg-background dark:bg-[#1F1F1F] bg-red-200">
            <Button id="logo-full" variant="ghost" className="flex">
                <Logo showText={true} textSize="text-sm"/>
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