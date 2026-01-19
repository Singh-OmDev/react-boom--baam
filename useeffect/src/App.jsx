import { useState, useEffect } from "react";
import { getPosts } from "./api";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {
  const [data, setData] = useState([]); // FIX: array instead of null

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <>
      {data.length > 0
        ? data.map((e) => (
            <PostCard
              key={e.id}       
              title={e.title}
              body={e.body}
            />
          ))
        : <p>no data</p>}
    </>
  );
}

export default App;
