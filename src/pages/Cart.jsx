import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ThemeContext } from "./../context/themeContext";

export default function Cart() {
  let cartProducts = useSelector((state) => state.cart);
  let { theme } = useContext(ThemeContext);
  return (
    <div>
      <Table striped bordered hover variant={theme == "dark" && "dark"}>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Image</th>
            <th>actions</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((p) => (
            <tr key={p.id} className="text-center">
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>
                <img
                  src={p.thumbnail}
                  alt="Product"
                  style={{ width: "150px", height: "150px" }}
                />
              </td>
              <td>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <Button variant="outline-success">+</Button>
                  <p className="text-primary">{p.quantity}</p>
                  <Button variant="outline-danger">-</Button>
                </div>
              </td>
              <td>
                <Button variant="outline-danger">🗑️</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
