import { useParams } from "react-router-dom";
import Contador from "../../../components/Counter/Counter";
import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

const ProductsItems = () => {
  const params = useParams();

  const { getProductById } = useContext(ProductsContext);

  const product = getProductById(params.id);

  return (
    <div className="flex"> 
      <img src={product.image} alt="" style={{ height: "10%", width: "10%" }} />
      <p className="m-auto bg-red-50 shadow-lg  shadow-indigo-500/50 h-8 rounded border-indigo-500/50 p-20 font-semibold text-md text-slate-600">{product.description}</p>
      <Contador product={product} />
    </div>
  );
};


export default ProductsItems;
