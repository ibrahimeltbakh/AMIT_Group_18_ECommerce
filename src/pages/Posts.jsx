import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Posts({ children }) {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await fetch("https://dummyjson.com/posts");
      let data = await response.json();
      setPosts(data.posts);
    }
    getData();
  }, []);
  return (
    <>
      <h2 className="text-success mt-3">{children}</h2>
      <div className="d-flex flex-column gap-3 p-3">
        {posts.map((p) => (
          <div
            key={uuidv4()}
            className="border border-1 border-success rounded-2 p-3">
            <h2 className="text-success mb-3 ">{p.title}</h2>
            <p className="text-secondary">{p.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
