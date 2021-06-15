import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Error from "./Error";
import useFetch from "../hooks/useFetch";

function SingleItem() {
  const { productId } = useParams();
  const history = useHistory();
  const url = `https://fakestoreapi.com/products/${productId}`;

  const { items, isLoading, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  function goBack() {
    history.goBack();
  }

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
      {!isLoading && items === null ? (
        <Error />
      ) : (
        !isLoading && (
          <div className="single-item" key={items.id}>
            <button className="btn" onClick={goBack}>
              X
            </button>
            <img src={items.image} alt={items.title} />
            <p>{items.title}</p>
            <p className="description">{items.description}</p>
            <p className="price">€{items.price}</p>
          </div>
        )
      )}
    </>
  );
}

export default SingleItem;
