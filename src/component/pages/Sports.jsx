import { useEffect, useState } from "react";
import Body from "../Atom/Body";

function Sports() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setNewsData(data.articles));
  }, []);
  return (
    <div className="bg-slate-900">
      <section className="mb-32 text-center md:text-left dark:bg-gray-900">
        <h2 className="mb-12 text-center text-3xl font-bold ">Sports</h2>
        <Body newsData={newsData} />
      </section>
    </div>
  );
}
export default Sports;