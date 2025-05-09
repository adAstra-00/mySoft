import { Banner } from "./_components/banner";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { MenuBar } from "./_components/menubar";
import { StatusBar } from "./_components/statusbar";

const MarketingPage = () => {
    return (
        <div id="full-area" className="flex flex-col h-screen">


            <div id="top-row" className="flex flex-col w-full z-50">
                {/*
                <div id="banner" className="flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <Banner />
                </div>
                <div id="menubar" className="flex items-center justify-center w-full h-[calc(12px+1.5rem)] p-3 z-50">
                    <MenuBar />
                </div>
                */}
            </div>

            <div id="mid-row" className="flex flex-col flex-grow items-center justify-center w-full overflow-y-auto z-45">
                <div id="heading" className="text-center p-2 z-40">
                    <Heading />
                </div>
                <div id="heroes" className="flex items-center justify-center h-full max-w-5xl">
                    <Heroes />
                </div>
            </div>

            <div id="bottom-row" className="flex flex-col w-full z-50">
               {/*  
                <div id="statusbar" className="flex items-center justify-center w-full h-[calc(12px+1rem)] p-3 z-50  ">
                    <StatusBar />
                </div>
                 */}
                <div id="footer" className="w-full">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MarketingPage;