
import MenuItems from "./MenuItems";



const Home = () => {
    return (
        <div className="flex md:flex-row flex-col">
            <aside>
                <MenuItems/>
            </aside>
            <main className="bg-[#EEF2F5] flex-1">
                    main content
            </main>
           
        </div>
    );
};

export default Home;