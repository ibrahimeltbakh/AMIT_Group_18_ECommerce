import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/Cards/Product/Product";

export default function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      let res = await axios.get("https://dummyjson.com/products");
      let data = res.data;
      setProducts(data.products);
    }
    fetchProducts();
  }, []);
  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}
