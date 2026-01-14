import React from "react";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  console.log(news);
  const formatedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();
  return (
    <div className="my-2 p-2 border-[#eed7dd] border-1 rounded-md">
      <div className="flex items-center justify-between bg-gray-100 p-2">
        <div className="flex gap-2 items-center">
          <img className="w-10 rounded-4xl" src={news.author.img} alt="" />
          <div>
            <h3 className="font-semibold">{news.author.name}</h3>
            <h4>{formatedDate}</h4>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Link to={"#"}>
            <FaShareAlt />
          </Link>
          <Link to={"#"}>
            <FaRegBookmark />
          </Link>
        </div>
      </div>
      <div>
        <h1>{news?.title}</h1>
        <img src={news?.image_url} alt="" />
        <p>
          {news.details.length > 200 ? (
            <>
              {news.details.slice(0, 200)}...{" "}
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Read more
              </span>
            </>
          ) : (
            news.details
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
