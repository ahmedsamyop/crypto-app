import React, { useEffect, useRef, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import LoadingCard from "../loading/LoadingCard";
import ErrorFetch from "../../components/errorFetch/ErrorFetch";

import "./cryptocurrencies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useSearchRef from "../../hooks/useSearchRef";
import { NavLink } from "react-router-dom";

function Cryptocurrencies({ displayItems }) {
  const counter = displayItems ? 10 : 50;
  const { data, error, isLoading } = useGetCryptosQuery(counter);
  const [cryptos, setCyptos] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useSearchRef(search);
  const inpputSearch = useRef();
  const btnClose = useRef();

  useEffect(() => {
    if (search === "") {
      setCyptos(data?.data?.coins);
    }
    const searchFilter = data?.data?.coins.filter((crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase())
    );
    if (searchRef !== search) {
      setCyptos(searchFilter);
    }
  }, [data, cryptos, search, searchRef]);

  const handelSearch = (e) => {
    if (search.length > 1) {
      btnClose.current.classList.add("active");
    } else {
      btnClose.current.classList.remove("active");
    }
    setSearch(e.target.value);
  };

  const handelClose = () => {
    setSearch("");
    btnClose.current.classList.remove("active");
    inpputSearch.current.focus();
  };

  return (
    <>
      {error && <ErrorFetch error={error} />}
      <div className="cryptocurrencies">
        {!displayItems && (
          <div className="search">
            <input
              placeholder="Search Cryptocurrency"
              type="text"
              ref={inpputSearch}
              value={search}
              onChange={(e) => handelSearch(e)}
            />
            <span className="close" ref={btnClose} onClick={handelClose}>
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
        )}
        <div className="crypto-container">
          <LoadingCard count={counter} isloading={isLoading} error={error}>
            {cryptos &&
              cryptos.map((crypto) => (
                <NavLink
                  to={`/cryptocurrency/${crypto.uuid}`}
                  key={crypto.uuid}
                >
                  <div className="box">
                    <div className="content">
                      <h4>
                        {crypto.rank}.{crypto.name}
                      </h4>
                      <img src={crypto.iconUrl} alt={crypto.name} />
                    </div>
                    <div className="detiles">
                      <p>Price: {millify(crypto.price)}</p>
                      <p>Market Cap: {millify(crypto.marketCap)}</p>
                      <p>Daily Change: {crypto.change}%</p>
                    </div>
                  </div>
                </NavLink>
              ))}
          </LoadingCard>
        </div>
      </div>
    </>
  );
}

export default Cryptocurrencies;
