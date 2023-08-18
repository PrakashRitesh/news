import { useEffect, useState } from "react";
import Body from "../Atom/Body";
import { useParams } from "react-router-dom";

const AllPage = () => {
  const [newsData, setNewsData] = useState([]);
  const url = useParams();
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`https://newsapi.org/v2/everything?q=${url.page}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setNewsData(data.articles));
  }, []);
  return (
    <div className="bg-slate-900">
      <section className="mb-32 text-center md:text-left dark:bg-gray-900">
        <h2 className="mb-12 text-center text-3xl font-bold ">Business</h2>
        <Body newsData={newsData} />
      </section>
    </div>
  );
};
export default AllPage;
