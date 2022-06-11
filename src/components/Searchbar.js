import { useState } from "react";
import { HiSearch } from "react-icons/hi";
const Searchbar = () => {
  const [text, settext] = useState("");
  const onChange = (q) => {
    settext(q);
  };
  return (
    <div class="navbar bg-[#F9FAFB]">
      <h3 className="text-2xl mx-3">
        <HiSearch />
      </h3>
      <form>
        <input
          type="text"
          placeholder="Search Products"
          class="input text-xl  bg-transparent w-full "
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Searchbar;
