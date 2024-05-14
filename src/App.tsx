import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormBlock from "./components/Form/FormBlock";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormBlock />} />
    </Routes>
  );
};
export default App;
