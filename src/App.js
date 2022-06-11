import Dashboard from "./pages/DashBoard/DashBoard";
import Products from "./pages/Products";

function App() {
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <Dashboard />
      </div>
      <div className="flex-1">
        {" "}
        <Products />
      </div>
    </div>
  );
}

export default App;
