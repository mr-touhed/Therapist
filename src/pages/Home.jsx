
import SearchBox from "../components/Home/SearchBox";
import TopMenu from "../components/Home/TopMenu";
import MenuItems from "./MenuItems";


const Home = () => {
    return (
        <div className="flex md:flex-row flex-col">
            <aside>
                <MenuItems/>
            </aside>
            <main className="bg-[#EEF2F5] flex-1">
                    <TopMenu/>
                    <SearchBox/>
            </main>
           
        </div>
    );
};

export default Home;