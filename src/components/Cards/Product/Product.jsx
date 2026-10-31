import { Link } from "react-router";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../RTK/slices/cartSlice";

export default function Product({ product }) {
  let dispatch = useDispatch();
  return (
    <Link
      to={`/productDetails/${product.id}`}
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

      <Button
        variant="outline-success"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(addToCart(product));
        }}>
        Add To Cart
      </Button>
    </Link>
  );
}
