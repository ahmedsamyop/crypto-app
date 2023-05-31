import React, { useEffect, useState } from "react";
import moment from "moment";

import "./news.css";
import LoadingCard from "../loading/LoadingCard";
import ErrorFetch from "../../components/errorFetch/ErrorFetch";

import { useGetCryptosNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

function News({ displayItems }) {
  const counter = displayItems ? 6 : 12;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data, error, isLoading } = useGetCryptosNewsQuery({
    newsCategory,
    counter,
  });
  const { data: crypto } = useGetCryptosQuery(50);
  const [cryptoNews, setCryptoNews] = useState([]);

  useEffect(() => {
    setCryptoNews(data?.value);
  }, [cryptoNews, data]);

  return (
    <>
      {error && <ErrorFetch error={error} />}
      <div className="news">
        {!displayItems && (
          <div className="select-box">
            <select
              onChange={(event) => setNewsCategory(event.target.value)}
              value={newsCategory}
            >
              <option value="Cryptocurency" key={0}>
                Cryptocurrency
              </option>
              {crypto?.data?.coins?.map((currency) => (
                <option value={currency.name} key={currency.uuid}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="news-container">
          <LoadingCard count={counter} isloading={isLoading} error={error}>
            {cryptoNews &&
              cryptoNews.map((news, idx) => {
                return (
                  <a href={news.url} target="_blank" rel="noreferrer" key={idx}>
                    <div className="box">
                      <div className="head">
                        <h4>{news.name}</h4>
                        <img
                          src={
                            news?.image?.thumbnail?.contentUrl ||
                            require("../../images/loading.png")
                          }
                          alt={news.name}
                        />
                      </div>
                      <p>
                        {news.description.length > 100
                          ? `${news.description.substring(0, 100)}...`
                          : news.description}
                      </p>
                      <div className="bottom">
                        <div className="title">
                          <img
                            src={
                              news.provider[0]?.image?.thumbnail?.contentUrl ||
                              require("../../images/loading.png")
                            }
                            alt={news.name}
                          />
                          <h3>{news.provider[0]?.name}</h3>
                        </div>
                        <span className="time">
                          {moment(news.datePublished).startOf("ss").fromNow()}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
          </LoadingCard>
        </div>
      </div>
    </>
  );
}

export default News;
