import { useState } from "react";
import AllCategories from "./components/AllCategories";
import Navbar from "./components/Navbar";
import PlusIconModal from "./components/PlusIconModal";
import Dashboard from "./pages/DashBoard/DashBoard";
import Products from "./pages/Products/Products";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  console.log(showModal);
  return (
    <div>
      <div className="relative">
        {showNavbar && <Navbar setShowNavbar={setShowNavbar} />}
        {showCategories && (
          <AllCategories setShowCategories={setShowCategories} />
        )}

        <div className="flex gap-2">
          <div className="flex-1">
            <Dashboard
              setShowModal={setShowModal}
              setShowNavbar={setShowNavbar}
            />
          </div>
          <div className="flex-1">
            {" "}
            <Products setShowCategories={setShowCategories} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {showModal && <PlusIconModal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
}

export default App;
