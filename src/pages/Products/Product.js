import polo from "../../Assets/one.jpg";
const Product = ({ id, product }) => {
  return (
    <div>
      <div class=" w-50 border-2 ">
        <img className="w-full" src={polo} alt="Polo" />
        <div class=" items-center text-center">
          <h2 class=" py-1 border-b-2">$43</h2>
          <p className="py-1">{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
