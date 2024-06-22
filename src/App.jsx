import { Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Shop from "./app/Shop";
import AppLayout from "./app/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
