import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Scanner from "../Assets/Scanner.png";
import "../style/searchBar.css";
const Searchbar = () => {
  const [text, settext] = useState("");
  const onChange = (q) => {
    settext(q);
  };
  return (
    <div class="navbar flex  bg-[#F9FAFB]">
      <h3 className="text-2xl mx-3 ">
        <HiSearch />
      </h3>

      <input
        type="text"
        placeholder="Search Products"
        class="input text-xl  bg-transparent w-full"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />

      <div className="mx-3">
        <img src={Scanner} alt="scanner" />
      </div>
    </div>
  );
};

export default Searchbar;
