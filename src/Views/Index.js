import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Stadistics } from "../Components/Stadistics";
import { Chart } from "../Components/Chart";
import { CryptoTable } from "../Components/CryptoTable";
import GetCoin from "../Calls/GetCoin.js";

const Index = (props) => {
  const [loading, setLoading] = useState(false);
  const [crypto] = GetCoin(loading, setLoading);

  return (
    <>
      <Navbar />
      <Stadistics crypto={crypto} loading={loading} setLoading={setLoading} />
      <Chart crypto={crypto} />
      <CryptoTable crypto={crypto} />
    </>
  );
};

export default Index;
