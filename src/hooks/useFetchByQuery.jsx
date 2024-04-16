import fetchDataByQuery from "../util/fetchDataByQuery"
import React, { useEffect, useState } from "react";

const useFetchByQuery = (query) => {
 
  //states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("...loading");
    setData(null);
    setError(null);

    fetchDataByQuery(query)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      });
  },[]);

  return {data,loading,error};
};

export default useFetchByQuery;
