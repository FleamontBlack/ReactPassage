import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import App from "../App";
import Welcome from "../routes/Welcome";

const Router = () => {
  const Context = createContext();

  return (
    <Context.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default Router;
