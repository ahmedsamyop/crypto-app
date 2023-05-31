import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHashtag,
  faBolt,
  faTrophy,
  faArrowRightArrowLeft,
  faChartSimple,
  faCircleQuestion,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./crypto-details.css";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import ErrorFetch from "../../components/errorFetch/ErrorFetch";
import LoadingPage from "../../components/loading/LoadingPage";
import Chart from "../../components/chart/Chart";

function CryptoDetails() {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, error, isLoading } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  if (isLoading) return <LoadingPage />;
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <FontAwesomeIcon icon={faDollarSign} />,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <FontAwesomeIcon icon={faHashtag} />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])
      }`,
      icon: <FontAwesomeIcon icon={faBolt} />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <FontAwesomeIcon icon={faDollarSign} />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <FontAwesomeIcon icon={faTrophy} />,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FontAwesomeIcon icon={faChartSimple} />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faXmark} />
      ),
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    },
  ];
  return (
    <>
      {error && <ErrorFetch error={error} />}
      <div className="coin-details">
        <div className="header-content">
          <h3>
            {data?.data?.coin.name} ({data?.data?.coin.symbol}) price{" "}
          </h3>
          <p>
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </div>
        <div className="chart">
          <div className="select-box">
            <select
              value={timeperiod}
              onChange={(e) => setTimeperiod(e.target.value)}
            >
              {time.map((date) => (
                <option value={date} key={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <Chart
            coinHistory={coinHistory}
            currentPrice={millify(cryptoDetails?.price)}
            coinName={cryptoDetails?.name}
          />
        </div>
        <div className="statistics-container">
          <div className="statistics-box">
            <div className="content">
              <h3>{cryptoDetails.name} Value Statistics</h3>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </div>
            <ul className="coin-stats">
              {stats.map(({ icon, title, value }) => {
                return (
                  <li key={title}>
                    <div className="info">
                      <div className="icon">{icon}</div>
                      <p>{title}</p>
                    </div>
                    <div className="value">{value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="statistics-box">
            <div className="content">
              <h3>Other Value Statistics</h3>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </div>
            <ul className="coin-stats">
              {genericStats.map(({ icon, title, value }) => {
                return (
                  <li key={title}>
                    <div className="info">
                      <div className="icon">{icon}</div>
                      <p>{title}</p>
                    </div>
                    <div className="value">{value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="info-links">
          <div className="info">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: cryptoDetails.description }}
            ></div>
          </div>
          <div className="links">
            <h1>Bitcoin Links</h1>
            <ul>
              {cryptoDetails.links?.map((link) => {
                return (
                  <li key={link.name}>
                    <span>{link.type}</span>
                    <a href={link.url}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoDetails;
