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
    <div className="p-6 bg-white rounded-lg shadow-md ">
      <div className="relative">
        <img src={image} alt={name} className="w-full rounded-lg" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-[#252d41]  ">{place}</h3>
        <p className="text-3xl font-medium text-[#252d41]">{name}</p>
        <div className="w-1/5 h-px bg-[#FF6780] mx-auto my-4"></div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-center gap-3 mt-4">
          <p className="text-[#3a4664] font-semibold">
            CAPACITY: <span className="text-black">{capacity}</span>
          </p>{" "}
          |{" "}
          <p className="text-[#3a4664] font-semibold">
            BOAT ACCESS:{" "}
            <span className="text-black">{boatAccess ? "Yes" : "No"}</span>
          </p>{" "}
          |{" "}
          <p className="font-semibold text-[#3a4664]">
            ACCOMMODATION:{" "}
            <span className="text-black">{accommodation ? "Yes" : "No"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VanuesCard;
