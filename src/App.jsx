import { Routes, Route } from "react-router-dom";




import MainLayout from "./components/MainLayout";
import Home from "./components/Home/home";
import Booking from "./components/booking/Booking";
import Chef from "./components/chef/Chef";
import Blog from "./components/blog/Blog";
// import Bookings from "./pages/Bookings/Bookings";
// import Chefs from "./pages/Chefs/Chefs";
// import Blogs from "./pages/Blogs/Blogs";

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