import { useContext } from "react";
import SectionTitle from "../Components/SectionTitle";
import { ServiseDataContext } from "../MainLayout/MainLayout";
import Card from "../Components/Card";

function Servise() {
  const serviseData = useContext(ServiseDataContext);
  // console.log(serviseData);
  return (
    <div className="min-h-screen mx-auto max-w-7xl">
      <SectionTitle title="Our Services"></SectionTitle>
      <div className="grid grid-cols-1 gap-6 shadow-xl md:grid-cols-2 lg:grid-cols-3">
        {serviseData.map((item) => (
          <Card key={item.id} serviceData={item} />
        ))}
      </div>
    </div>
  );
}

export default Servise;
