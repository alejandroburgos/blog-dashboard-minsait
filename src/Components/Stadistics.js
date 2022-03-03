import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import iconUp from "../assets/images/icon/iconUp.svg";
import iconDown from "../assets/images/icon/iconDown.svg";

export const Stadistics = ({ crypto, loading, setLoading }) => {
  const [styleBadge, setStyleBadge] = useState({
    actualPrice: { img: undefined, color: "#fff" },
    lastPrice: { img: undefined, color: "#fff" },
    lastWeekPrice: { img: undefined, color: "#fff" },
    lastMonthPrice: { img: undefined, color: "#fff" },
  });

  useEffect(() => {
    crypto &&
      crypto.map((crypto, i) => {
        let actualPrice = Number(crypto.price).toFixed(2);
        let lastPrice = Number(crypto["1d"].price_change).toFixed(2);
        let lastWeekPrice = Number(crypto["7d"].price_change).toFixed(2);
        let lastMonthPrice = Number(crypto["30d"].price_change).toFixed(2);

        // Calculo la diferencia de peso para colorear los badges ACTUALES
        if (actualPrice - lastPrice < actualPrice) {
          setStyleBadge((prev) => ({
            ...prev,
            actualPrice: { img: iconUp, color: "up" },
          }));
        } else {
          setStyleBadge((prev) => ({
            ...prev,
            actualPrice: { img: iconDown, color: "down" },
          }));
        }

        // LAST DAY
        if (actualPrice - lastPrice < actualPrice) {
          setStyleBadge((prev) => ({
            ...prev,
            lastPrice: { img: iconUp, color: "up" },
          }));
        } else {
          setStyleBadge((prev) => ({
            ...prev,
            lastPrice: { img: iconDown, color: "down" },
          }));
        }

        // LAST WEEK
        if (actualPrice - lastWeekPrice < actualPrice) {
          setStyleBadge((prev) => ({
            ...prev,
            lastWeekPrice: { img: iconUp, color: "up" },
          }));
        } else {
          setStyleBadge((prev) => ({
            ...prev,
            lastWeekPrice: { img: iconDown, color: "down" },
          }));
        }

        // LAST MONTH
        if (actualPrice - lastMonthPrice < actualPrice) {
          setStyleBadge((prev) => ({
            ...prev,
            lastMonthPrice: { img: iconUp, color: "up" },
          }));
        } else {
          setStyleBadge((prev) => ({
            ...prev,
            lastMonthPrice: { img: iconDown, color: "down" },
          }));
        }
      });
  }, [crypto]);
  return (
    <div>
      <Grid container spacing={2}>
        {crypto &&
          crypto.map((crypto, i) => {
            let actualPrice = Number(crypto.price).toFixed(2);
            let lastPrice = Number(crypto["1d"].price_change).toFixed(2);
            let lastWeekPrice = Number(crypto["7d"].price_change).toFixed(2);
            let lastMonthPrice = Number(crypto["30d"].price_change).toFixed(2);

            console.log(styleBadge);

            return (
              <>
                {!loading ? (
                  <Grid item xl={10} className="stadistics" key={i}>
                    <div className="m-2 d-flex">
                      <img alt={crypto.id} src={crypto.logo_url} width={30} />
                      <h2 className="p-2">{crypto.currency}</h2>
                    </div>
                    <div>
                      <Grid container spacing={0}>
                        <Grid
                          item
                          md={3}
                          className="p-3"
                          style={{ borderRight: "1px solid #f0f0f0" }}
                        >
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>{actualPrice} €</h3>
                              <span className="text-black-50 ">
                                Actual price
                                {/* <div
                                  className={`badge-stadistics-${styleBadge.actualPrice?.color}`}
                                >
                                  <img
                                    src={styleBadge.actualPrice?.img}
                                    alt="icon up"
                                  />
                                  <span
                                    style={{
                                      marginLeft: "5px",
                                      color: "#000",
                                    }}
                                  >
                                    {actualPrice}
                                  </span>
                                </div> */}
                              </span>
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          md={3}
                          className="p-3"
                          style={{ borderRight: "1px solid #f0f0f0" }}
                        >
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>
                                {Number(actualPrice - lastPrice).toFixed(2)} €
                              </h3>
                              <span className="text-black-50 d-flex">
                                Price change (last day)
                                <div
                                  className={`badge-stadistics-${styleBadge.lastPrice?.color}`}
                                >
                                  <img
                                    src={styleBadge.lastPrice?.img}
                                    alt="icon up"
                                  />
                                  <span
                                    style={{
                                      marginLeft: "5px",
                                      color: "#000",
                                    }}
                                  >
                                    {lastPrice}
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          md={3}
                          className="p-3"
                          style={{ borderRight: "1px solid #f0f0f0" }}
                        >
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>
                                {Number(actualPrice - lastWeekPrice).toFixed(2)}{" "}
                                €
                              </h3>
                              <span className="text-black-50 d-flex">
                                Price change (last week)
                                <div
                                  className={`badge-stadistics-${styleBadge.lastWeekPrice?.color}`}
                                >
                                  <img
                                    src={styleBadge.lastWeekPrice?.img}
                                    alt="icon up"
                                  />
                                  <span
                                    style={{
                                      marginLeft: "5px",
                                      color: "#000",
                                    }}
                                  >
                                    {lastWeekPrice}
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          md={3}
                          className="p-3"
                          style={{ borderRight: "1px solid #f0f0f0" }}
                        >
                          <div className="text-center">
                            <div></div>

                            <div className="mt-2 justify-content-center">
                              <h3>
                                {Number(actualPrice - lastMonthPrice).toFixed(
                                  2
                                )}
                                €
                              </h3>
                              <div>
                                <span className="text-black-50 d-flex">
                                  Price change (last month)
                                  <div
                                    className={`badge-stadistics-${styleBadge.lastMonthPrice?.color}`}
                                  >
                                    <img
                                      src={styleBadge.lastMonthPrice?.img}
                                      alt="icon up"
                                    />
                                    <span
                                      style={{
                                        marginLeft: "5px",
                                        color: "#000",
                                      }}
                                    >
                                      {lastMonthPrice}
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                ) : (
                  <div className="d-flex flex-row text-center align-items-center flex-wrap justify-content-center">
                    <CircularProgress />
                  </div>
                )}
              </>
            );
          })}
      </Grid>
    </div>
  );
};
