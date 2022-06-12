import { useState } from "react";
import PlusIconModal from "./components/PlusIconModal";
import Dashboard from "./pages/DashBoard/DashBoard";
import Products from "./pages/Products/Products";

function App() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="flex-1">
          <Dashboard setShowModal={setShowModal} />
        </div>
        <div className="flex-1">
          {" "}
          <Products />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {showModal && <PlusIconModal setShowModal={setShowModal}/>}
      </div>
    </div>
  );
}

export default App;
