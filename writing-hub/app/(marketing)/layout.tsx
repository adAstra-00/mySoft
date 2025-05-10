import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-screen flex flex-col dark:bg-[#1F1F1F]">
            <div id="top-row" style={{ height: "var(--navbar-height, auto)" }}>
                <Navbar />
            </div>
            
            <main id="mid-row" className="flex-grow overflow-y-auto flex flex-col items-center place-content-between">
                {children}
            </main>

            <div id="btm-row" style={{ height: "var(--navbar-height, auto)" }}>
                <Footer />
            </div>
        </div>
     );
}
 
export default MarketingLayout