import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ShowItems from "./ShowItems";
import Loading from "./Loading";

function Products() {
  const url = "https://fakestoreapi.com/products";

  const { items, isLoading, isError, removeItem, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
        {isLoading && <Loading />}
      {isError && <p>Error</p>}
      {!isLoading && items.length === 0 && (
        <>
          <h1 className="main-title">No Products Left</h1>
          <button className="btn-remove" onClick={() => fetchData()}>
            Refresh
          </button>
        </>
      )}
      {!isLoading && items.length !== 0 && (
        <>
          <h1 className="main-title">All Products</h1>
          <div className="container">
            <ShowItems items={items} removeItem={removeItem} />
          </div>
        </>
      )}
    </>
  );
}

export default Products;
