
import SearchBox from "../components/Home/SearchBox";
import Therapist from "../components/Home/Therapist";
import TopMenu from "../components/Home/TopMenu";
import MenuItems from "./MenuItems";


const Home = () => {
    return (
        <div className="grid grid-cols-[18%_82%]">
            <aside>
                <MenuItems/>
            </aside>
            <main className="bg-[#EEF2F5] flex-1">
                    <TopMenu/>
                   <div className="m-8">
                   <SearchBox/>
                   <Therapist/>
                   </div>
            </main>
           
        </div>
    );
};

export default Home;