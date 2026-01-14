import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const data = useLoaderData();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (categoryId === 0) {
      setCategory(data);
      return;
    } else if (categoryId === 1) {
      const filteredCategory = data.filter(
        (news) => news.others?.is_today_pick === true
      );
      setCategory(filteredCategory);
    } else {
      const filteredCategory = data.filter(
        (news) => news.category_id === categoryId
      );
      setCategory(filteredCategory);
    }
  }, [data, categoryId]);
  console.log(category);

  return (
    <div>
      <h2 className="font-bold mb-5">
        Total: {category.length}{" "}
        <span className="text-secondary">news found</span>
      </h2>
      <div className="grid grid-cols-1">
        {category.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
