import { useRef } from "react";

export default function TestUseRef() {
  let inputRef = useRef(null);
  return (
    <div className="d-flex gap-4 p-3 mt-5 justify-content-center">
      <input ref={inputRef}></input>
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
}
