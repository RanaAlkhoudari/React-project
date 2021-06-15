import React, { useEffect } from "react";
import ShowItems from "./ShowItems";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Category() {
  const { value } = useParams();
  const url = `https://fakestoreapi.com/products/category/${value}`;
  const { items, isLoading, isError, removeItem, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && (
        <div className="wrapper">
          <div className="loadingio-spinner-spinner-gw5rx5q9wol">
            <div className="ldio-nlqlwxaj9">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {isError && <p>Error</p>}
      {!isLoading && items.length === 0 && (
        <div className="wrapper">
          <h1 className="main-title">No Products Left</h1>
          <button className="btn-remove" onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      )}
      {!isLoading && items.length !== 0 && (
        <div className="wrapper">
          <h1 className="main-title">{value}</h1>
          <div className="container">
            <ShowItems items={items} removeItem={removeItem} />
          </div>
        </div>
      )}
    </>
  );
}
export default Category;
