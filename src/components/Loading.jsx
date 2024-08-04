import { useEffect, useState } from "react";

const Loading = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        // make a loading animation 
      const interval = setInterval(() => {
        setDots(prevDots => {
          if (prevDots.length < 6) {
            return prevDots + '.';
          } else {
            return '';
          }
        });
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full h-screen grid place-items-center bg-[#100e0e]">
    <h1 className="text-2xl text-gray  min-w-[200px]">Loading{dots}</h1>
  </div>
    );
};

export default Loading;