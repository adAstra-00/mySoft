import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";
import { Banner } from "./_components/banner";
import { StatusBar } from "./_components/statusbar";
import { MenuBar } from "./_components/menubar";

const MarketingPage = () => {
    return (
        {/* Hidden on small and medium screens, visible on large */},
        <div id="full-area" className="bg-gray-400 flex flex-col h-screen items-center">

            <div id="top-row" className="flex flex-col w-full">
                <div id="banner" className="bg-emerald-400 flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <Banner />
                </div>
                <div id="menubar" className="bg-teal-300 flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <MenuBar />
                </div>
            </div>

            <div id="mid-row" className="bg-red-200 w-full overflow-y-auto flex flex-col items-center text-center gap-y-8">
                <div id="heading" className="flex-none w-full p-2 z-50">
                    <Heading />
                </div>
                <div id="heroes" className="bg-blue-200 flex flex-row w-full justify-center">
                    <Heroes />
                </div>
            </div>

            <div id="bottom-row" className="flex flex-col w-full">
                <div id="footer" className="bg-indigo-300 flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <Footer />
                </div>
                <div id="statusbar" className="bg-indigo-600 flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <StatusBar />
                </div>
            </div>
        </div>
    );
}

export default MarketingPage;