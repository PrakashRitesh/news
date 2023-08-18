import { useEffect, useState, React } from "react";
import Body from "./Atom/Body";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data.articles);
      });
  }, []);

  console.log(API_KEY);

  console.log("news in state", newsData);

  return (
    <div className="bg-slate-900">
      <section className="mb-32 text-center md:text-left dark:bg-gray-900">
        <h2 className="mb-12 text-center text-3xl font-bold ">
          Latest articles
        </h2>
        <Body newsData={newsData} />
      </section>
    </div>
  );
}

export default Home;
