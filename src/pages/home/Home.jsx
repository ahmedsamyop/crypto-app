import millify from "millify";

import "./home.css";
import Cryptocurrencies from "../../components/cryptocurrencies/Cryptocurrencies";
import News from "../../components/news/News";
import LoadingTitle from "../../components/loading/LoadingTitle";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import ErrorFetch from "../../components/errorFetch/ErrorFetch";
import { NavLink } from "react-router-dom";
function Home() {
  const { data, error, isLoading } = useGetCryptosQuery(100);
  const globalState = data?.data?.stats;
  return (
    <>
      {error && <ErrorFetch error={error} />}
      <div className="home">
        <div className="global">
          <h1>Global Crypto State</h1>
          <div className="box-container">
            <div className="box">
              <p>Totlal Cryptocurrency</p>
              <h4>
                <LoadingTitle isloading={isLoading} error={error}>
                  {globalState && millify(globalState.total)}
                </LoadingTitle>
              </h4>
            </div>
            <div className="box">
              <p>Total Exchanges</p>
              <h4>
                <LoadingTitle isloading={isLoading} error={error}>
                  {globalState && millify(globalState.totalExchanges)}
                </LoadingTitle>
              </h4>
            </div>
            <div className="box">
              <p>Total Market Cap</p>
              <h4>
                <LoadingTitle isloading={isLoading} error={error}>
                  {globalState && millify(globalState.totalMarketCap)}
                </LoadingTitle>
              </h4>
            </div>
            <div className="box">
              <p>Total 24h Volume</p>
              <h4>
                <LoadingTitle isloading={isLoading} error={error}>
                  {globalState && millify(globalState.total24hVolume)}
                </LoadingTitle>
              </h4>
            </div>
            <div className="box">
              <p>total Markets</p>
              <h4>
                <LoadingTitle isloading={isLoading} error={error}>
                  {globalState && millify(globalState.totalMarkets)}
                </LoadingTitle>
              </h4>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="heading">
            <h1>Top 10 Cryptos In The World</h1>
            <NavLink to={"cryptocurrency"}>Show More</NavLink>
          </div>
          <Cryptocurrencies displayItems={true} />
        </div>
        <div className="section">
          <div className="heading">
            <h1>Latest Crypto News</h1>
            <NavLink to={"news"}>Show More</NavLink>
          </div>
          <News displayItems={true} />
        </div>
      </div>
    </>
  );
}

export default Home;
