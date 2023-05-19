import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import useTitle from "../../../hooks/useTitle";

const Category = () => {
  const { id } = useParams();

  const categoryNews = useLoaderData();
  // console.log(categoryNews);
  useTitle("Category");
  return (
    <div className="mt-5">
      {id && (
        <h4 className="mb-3">This category news : {categoryNews.length}</h4>
      )}

      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
