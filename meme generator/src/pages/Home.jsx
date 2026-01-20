import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/meme";

const Homepage = () => {
  const [data, setData] = useState([]); // ✅ fixed

  useEffect(() => {
    getAllMemes().then((memes) => {
      setData(memes); // ✅ store data
    });
  }, []); // ✅ dependency array

  return (
    <div>
      {data.map((meme, index) => (
        <MemeCard key={index} meme={meme} />
      ))}
    </div>
  );
};

export default Homepage;
