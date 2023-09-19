import { Route, Routes, BrowserRouter } from "react-router-dom";
import { About, Home, UnAuthorized } from "@/pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="*" element={<UnAuthorized />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
