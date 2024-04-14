import fetchDataById from "../util/fetchDataById.jsx";
import React, { useEffect, useState } from "react";

const useFetchById = (payload) => {
 
  //states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("...loading");
    setData(null);
    setError(null);

    fetchDataById(payload)
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

export default useFetchById;
