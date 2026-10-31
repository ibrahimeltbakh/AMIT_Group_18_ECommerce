import { useEffect, useState } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";

export default function Home() {
  let [counter, setCounter] = useState(0);
  let [random, setRandom] = useState(0);

  useEffect(() => {
    //component Didmount
    //best place to call api
    console.log("component Didmount");
    let interval1 = setInterval(() => console.log("counter"), 2000);

    // componentwillunmount (cleanup function)
    return () => {
      clearInterval(interval1);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect without dep list");
    // setRandom(Math.random());
  });

  return (
    <>
      <h2 className="title">Home Page</h2>
      <h2>
        Counter:
        <span
          style={{ backgroundColor: "teal", padding: "10px", color: "white" }}>
          {counter}
        </span>
      </h2>
      <Button variant="success" onClick={() => setCounter(counter++)}>
        +
      </Button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => setCounter(counter--)}>
        -
      </button>
    </>
  );
}
