import { useEffect, useState } from "react";
import Cities from "../components/Home/Cities";
import Featured from "../components/Home/Featured";
import SearchBox from "../components/Home/SearchBox";
import Therapist from "../components/Home/Therapist";
import TopMenu from "../components/Home/TopMenu";
import MenuItems from "../components/MenuItems";

import useContextHooks from "../hooks/useContextHooks";

const Home = () => {
  const { currentUser, logOut } = useContextHooks(); // auth context hooks
  const [loading,setLoading] = useState(true); // data fetching loading state
    const [error,setError] = useState('') // error handling state
    const [therapist,setTherapist] = useState([]) // therapist data state
    const [search,setSearch] = useState("") // search state


    // fetching therapist data for show all data
    useEffect(()=>{
     
    const fetch_therapist = async () =>{
            try {
                const response = await fetch(`/json/featured.json`);
                const result  = await response.json();
                setTherapist(result)
                setLoading(false)
            } catch (error) {
              console.log(error);
              setError(error.message)
              setLoading(false)
            }
    }

    fetch_therapist()
  },[])
    

    // use effech for search funtionality 
  useEffect(()=>{
    const searchtimer =   setTimeout(()=>{
        const fetch_filter = async () =>{
          
          setLoading(true)
          setError("")
          try {
              const response = await fetch(`/json/featured.json`);
              const result  = await response.json();
                  // ffiltering search data 
                const updateData = result.filter(user => user.location.toLowerCase().includes(search.toLowerCase()) );
               if(updateData.length > 0){
                setTherapist(updateData)
              setLoading(false)
               }else{
                setError("no data found yet")
                setLoading(false)
               }
              
          } catch (error) {
            console.log(error);
            setError(error.message)
            setLoading(false)
          }
  }
        
    fetch_filter()
      },1500)

      // Clean up the listener on component unmount
     return () => clearTimeout(searchtimer)

  },[search])



  return (
    <div className="grid md:grid-cols-[18%_82%] grid-cols-1">
      <aside>
        <MenuItems user={currentUser} logOut={logOut}/>
      </aside>
      <main className="bg-[#EEF2F5] flex-1 p-1 md:p-0">
        <TopMenu logOut={logOut} user={currentUser} />
        <div className="md:m-8">
          <SearchBox setSearch={setSearch} search={search}/>
          <Therapist  loading={loading} error={error} therapist={therapist}/>
        </div>
        <div className="md:m-8 grid md:grid-cols-2 grid-cols-1 gap-8">
          <Featured />
          <Cities />
        </div>
      </main>
    </div>
  );
};

export default Home;
