import { useState } from "react";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const [index, setIndex] = useState(0);

  const setBarIndex = (idx) => {
    setIndex(idx);
  };

  return (
    <>
      <TopBar setBarIndex={setBarIndex} index={index} />
      <EmployeePage index={index} />
    </>
  );
}

export default App;
