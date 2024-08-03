
import Cities from "../components/Home/Cities";
import Featured from "../components/Home/Featured";
import SearchBox from "../components/Home/SearchBox";
import Therapist from "../components/Home/Therapist";
import TopMenu from "../components/Home/TopMenu";
import MenuItems from "./MenuItems";


const Home = () => {
    return (
        <div className="grid md:grid-cols-[18%_82%] grid-cols-1">
            <aside>
                <MenuItems/>
            </aside>
            <main className="bg-[#EEF2F5] flex-1 p-1 md:p-0">
                    <TopMenu/>
                   <div className="md:m-8">
                   <SearchBox/>
                   <Therapist/>
                   </div>
                   <div className="md:m-8 grid md:grid-cols-2 grid-cols-1 gap-8">
                        <Featured/>
                        <Cities/>
                   </div>
            </main>
           
        </div>
    );
};

export default Home;