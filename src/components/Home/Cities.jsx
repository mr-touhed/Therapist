import { Link } from "react-router-dom";


const Cities = () => {
    const citiesArray = [
        "Atlanta, GA",
        "Boston, MA",
        "Chicago, IL",
        "Chicago, IL",
        "El Paso, TX",
        "Fresno, CA",
        "Houston, TX",
        "Indianapolis, IN",
        "Jacksonville, FL",
        "Kansas City, MO",
        "Los Angeles, CA",
        "Miami, FL",
        "Nashville, TN",
        "Oklahoma City, OK",
        "Philadelphia, PA",
        "Queens, NY",
        "Raleigh, NC",
        "San Antonio, TX",
        "Tucson, AZ",
        "Upland, CA",
        "Washington, D.C."

    ]

    return (
        <div>
            <h3 className="heading mb-1">Popular Cities</h3>


            <div className="container mx-auto p-4 bg-white rounded-md">
      {/* Flex container for rows */}
      <div className="flex flex-wrap flex-row " >
        {citiesArray.map((city, index) => (
          <div
            key={index}
            className="w-1/3 border-b border-gray p-4 text-"
          >
            <Link to="/" className="text-primary underline text-nowrap text-[10px] md:text-base">{city}</Link>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Cities;