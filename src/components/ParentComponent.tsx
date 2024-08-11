import React from "react";
import CombosDataTable from "./CombosDataTable";
import comboData from "../utils/ComboData.json";

const ParentComponent: React.FC = () => {
  return <CombosDataTable comboData={comboData} />;
};

export default ParentComponent;
