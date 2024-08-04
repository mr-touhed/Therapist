import TherapistCard from "../TherapistCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard,  Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Therapist = () => {
    const [loading,setLoading] = useState(true); // data fetching loading state
    const [error,setError] = useState('') // error handling state
    const [therapist,setTherapist] = useState([]) // therapist data state

    useEffect(()=>{
        // fetching therapist data 
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

      if(loading) return <LoadingElement message="Loading....."/>
      if(error) return <LoadingElement message="no data found yet's"/>
    return (
        <div className="mt-6">
            <h2 className="heading">Featured Therapist</h2>

            <div className="bg-white p-8 rounded-md  relative">
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}

        navigation={true}
        modules={[Keyboard, Navigation]}
        className="therapi-slide "
      >
        {
          therapist.map(user => <SwiperSlide key={user.id}>
            <TherapistCard user={user}/>
              </SwiperSlide>)
        }
        
       
        
        
            </Swiper>
                       
            </div>
        </div>
    );
};

export default Therapist;



function LoadingElement({message}){
  return (
    <div className="mt-6">
            <h2 className="heading">Featured Therapist</h2>

            <div className="bg-white p-8 h-[250px] grid place-items-center rounded-md  relative">
                      <h2>{message}</h2>
                       
            </div>
        </div>
  )
}