import React, { useEffect } from "react";
import ShowItems from "./ShowItems";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

function Limit() {
  const { value } = useParams();
  const url = `https://fakestoreapi.com/products?limit=${value}`;

  const { items, isLoading, isError, removeItem, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <p>Error</p>}
      {!isLoading && items.length === 0 && (
        <div className="wrapper">
          <h1 className="main-title">No Products Left</h1>
          <button className="btn-remove" onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      )}
      {value > 20 || value < 0 ? (
        <div className="wrapper">
          <h1 className="main-title">Products Not Found</h1>
        </div>
      ) : (
        !isLoading &&
        items.length !== 0 && (
          <div className="wrapper">
            <h1 className="main-title">{value} Products</h1>
            <div className="container">
              <ShowItems items={items} removeItem={removeItem} />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Limit;
