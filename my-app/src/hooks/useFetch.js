import { useCallback, useState } from "react";

function useFetch(url) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setIsError(false);
      setItems(data);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [url]);

  function removeItem(id) {
    const itemToDelete = items.filter((item) => item.id !== id);
    setItems(itemToDelete);
  }

  return { items, isError, isLoading, removeItem, fetchData };
}

export default useFetch;
