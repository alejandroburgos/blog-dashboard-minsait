import { useState, useEffect } from "react";

const GetCoin = (loading, setLoading) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=0834c84d5769114f55ff5444f013585028d57b25&ids=BTC,ETH,XRP&interval=1d,7d,30d,365d,ytd&convert=EUR&platform-currency=ETH&per-page=100&page=1`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
      setLoading(false);
    } catch (err) {
      console.warn("No he podido traer los datos de la API...", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return [data, loading];
};

export default GetCoin;
