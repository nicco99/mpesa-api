import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mpesa from "./Mpesa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Mpesa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
