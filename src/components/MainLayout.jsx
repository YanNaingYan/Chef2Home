import { Outlet } from "react-router-dom";
import Navbar from "./Nav/Navbar";


const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;