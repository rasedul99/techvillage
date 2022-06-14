import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Categories from "../../components/Categories";
import Searchbar from "../../components/Searchbar";
import Product from "./Product";

const Products = ({ setShowCategories }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-[#F4F6F8]">
      <Searchbar />
      <div className="px-4">
        <div className="flex gap-4 mt-3 flex-wrap ">
          <Categories text=" All Categories" />
          <Categories text="Electronics" />
          <Categories text=" Home $ LifeStyle" />
          <Categories text="  Men Fashion" />
          <Categories text="  Women Fashion" />
          <h3
            className="text-2xl py-2 justify-end "
            onClick={() => setShowCategories(true)}
          >
            <FaEllipsisV />
          </h3>
        </div>
        <div className="grid lg:grid-cols-5 my-5 gap-3 ">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
