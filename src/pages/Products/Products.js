import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-[#F4F6F8]">
      <Searchbar />
      <div className="grid md:grid-cols-5 my-5 gap-3 ">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
