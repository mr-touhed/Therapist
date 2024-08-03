import FeatureCard from "../FeatureCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Featured = () => {
    return (
        <div className="relative ">
                    <h2 className="heading mb-1">Featured Testimonial</h2>

                    <div className="md:p-9 bg-white rounded-md">
                    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide className="space-y-2 pb-8">
            
        <FeatureCard/>
        <FeatureCard/>
        </SwiperSlide>
        <SwiperSlide className="space-y-2 pb-8">
            
        <FeatureCard/>
        <FeatureCard/>
        </SwiperSlide>
        <SwiperSlide className="space-y-2 pb-8">
            
        <FeatureCard/>
        <FeatureCard/>
        </SwiperSlide>
        
      </Swiper>


                            
                    </div>
        </div>
    );
};

export default Featured;