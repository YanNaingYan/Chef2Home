import { Routes, Route } from "react-router-dom";




import MainLayout from "./components/MainLayout";
import Home from "./components/Home/Home";
import Booking from "./components/booking/Booking";
import Chef from "./components/chef/Chef";
import Blog from "./components/blog/Blog";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/chefs" element={<Chef />} />
        <Route path="/blogs" element={<Blog />} />


       
      </Route>
    </Routes>
  );
}

export default App;