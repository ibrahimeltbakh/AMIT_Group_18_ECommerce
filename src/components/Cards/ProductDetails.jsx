import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    async function fetchProduct() {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      let product = res.data;
      setProduct(product);
    }
    fetchProduct();
  }, [id]);

  return (
    <>
      <div
        style={{ width: "300px" }}
        className="position-relative border border-1 border-success rounded-2 p-3 pt-5 
      d-flex flex-column gap-3
      ">
        {product.stock <= 0 && (
          <p className="position-absolute end-0 top-0 bg-danger text-white fs-6 rounded-1">
            Out Of Stock
          </p>
        )}
        <img src={product.thumbnail} alt="" />
        <h2 className="text-success text-center"> {product.title}</h2>
        <p className="text-secondary text-center"> {product.description}</p>
        <p className="text-primary text-center">price: {product.price} $</p>
        <p
          className={
            product.stock >= 20
              ? "text-success text-center"
              : "text-danger text-center"
          }>
          stock: {product.stock}
        </p>
      </div>
    </>
  );
}
