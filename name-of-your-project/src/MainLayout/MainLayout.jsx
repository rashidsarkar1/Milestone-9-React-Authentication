import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ServiseDataContext = createContext([]);
function MainLayout() {
  const [serviseData, setServiseData] = useState([]);
  useEffect(() => {
    axios
      .get("/services.json")
      .then((data) => setServiseData(data.data.services));
  }, []);
  // console.log(serviseData);

  return (
    serviseData && (
      <div className="mx-auto max-w-7xl">
        <ServiseDataContext.Provider value={serviseData}>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </ServiseDataContext.Provider>
      </div>
    )
  );
}

export default MainLayout;
