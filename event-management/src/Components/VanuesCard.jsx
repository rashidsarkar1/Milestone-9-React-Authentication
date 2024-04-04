function VanuesCard({ venueData }) {
  const {
    image,
    name,
    place,
    description,
    capacity,
    boatAccess,
    accommodation,
  } = venueData;
  // console.log(venueData);
  return (
    <div className="mx-auto mt-5 bg-white rounded-lg shadow-md md:p-6 md:w-auto w-80 ">
      <div className="relative">
        <img src={image} alt={name} className="rounded-lg md:w-full" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-[#252d41]  ">{place}</h3>
        <p className="text-3xl font-medium text-[#252d41]">{name}</p>
        <div className="w-1/5 h-px bg-[#FF6780] mx-auto my-4"></div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-center gap-0 mt-1 md:gap-3">
          <p className="text-[#3a4664] font-semibold">
            CAPACITY: <span className="text-black">{capacity}</span>
          </p>{" "}
          |{" "}
          <p className="text-[#3a4664] font-semibold">
            BOAT ACCESS:{" "}
            <span className="text-black">{boatAccess ? "Yes" : "No"}</span>
          </p>{" "}
          {/* <p className="font-semibold  text-[#3a4664]">
            ACCOMMODATION:{" "}
            <span className="text-black">{accommodation ? "Yes" : "No"}</span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default VanuesCard;
