import { Banner } from "./_components/banner";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { MenuBar } from "./_components/menubar";
import { StatusBar } from "./_components/statusbar";

const MarketingPage = () => {
    return (
        <div id="full-area" className="bg-gray-400 flex flex-col h-screen">

            <div id="top-row" className="flex flex-col w-full outline-4 outline-gray-400 z-50">
                <div id="banner" className="bg-emerald-400 flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <Banner />
                </div>
                <div id="menubar" className="bg-teal-300 flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <MenuBar />
                </div>
            </div>

            <div id="mid-row" className="bg-red-200 flex flex-col w-full h-full overflow-y-auto z-45">
                <div id="heading" className=" items-center text-center gap-y-8 flex-none w-full p-2 z-40">
                    <Heading />
                </div>
                <div id="heroes" className="bg-blue-200 flex flex-row w-full h-full justify-center">
                    <Heroes />
                </div>
            </div>

            <div id="bottom-row" className="flex flex-col w-full outline-4 outline-gray-400 z-50">
                <div id="statusbar" className=" bg-indigo-200 flex items-center justify-center w-full h-[calc(12px+1rem)] p-3 z-50  ">
                    <StatusBar />
                </div>
                <div id="footer" className="bg-indigo-300 w-full z-50">
                    <Footer />
                </div>

            </div>
        </div>
    );
}

export default MarketingPage;