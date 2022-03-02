import React, { useState } from "react";
import { Grid, Badge } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import iconUp from "../assets/images/icon/iconUp.svg";
import iconDown from "../assets/images/icon/iconDown.svg";

export const Stadistics = ({ crypto, loading, setLoading }) => {
  console.log(loading);
  console.log(crypto);

  return (
    <div>
      <Grid container spacing={2}>
        {crypto &&
          crypto.map((crypto, i) => {
            let styleBadge = "";

            let actualPrice = crypto.price;
            let lastPrice = crypto["1d"].price_change;
            let lastWeekPrice = crypto["7d"].price_change;
            let lastMonthPrice = crypto["30d"].price_change;

            let img;
            if (actualPrice > lastPrice) {
              img = iconUp;
              styleBadge = "up";
            }

            return (
              <>
                {!loading ? (
                  <Grid item xl={8} className="stadistics" key={i}>
                    <div className="m-2 d-flex">
                      <img alt={crypto.id} src={crypto.logo_url} width={30} />
                      <h2 className="p-2">{crypto.currency}</h2>
                    </div>
                    <div>
                      <Grid container spacing={0}>
                        <Grid item md={3} className="p-3">
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>{crypto.price} €</h3>
                              <span className="text-black-50 d-flex ">
                                Actual price
                                <div
                                  className={`badge-stadistics-${styleBadge}`}
                                >
                                  <img src={img} alt="icon up" />
                                </div>
                              </span>
                            </div>
                          </div>
                        </Grid>

                        <Grid item md={3} className="p-3">
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>{crypto["1d"].price_change} €</h3>
                              <span className="text-black-50 d-flex">
                                Price change (last day)
                                <div
                                  className={`badge-stadistics-${styleBadge}`}
                                >
                                  <img src={img} alt="icon up" />
                                </div>
                              </span>
                            </div>
                          </div>
                        </Grid>

                        <Grid item md={3} className="p-3">
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>{crypto["7d"].price_change} €</h3>
                              <span className="text-black-50 d-flex">
                                Price change (last week)
                                <div
                                  className={`badge-stadistics-${styleBadge}`}
                                >
                                  <img src={img} alt="icon up" />
                                </div>
                              </span>
                            </div>
                          </div>
                        </Grid>

                        <Grid item md={3} className="p-3">
                          <div className="text-center">
                            <div></div>
                            <div className="mt-2 ">
                              <h3>{crypto["30d"].price_change} €</h3>
                              <span className="text-black-50 d-flex">
                                Price change (last month)
                              </span>
                              <div className={`badge-stadistics-${styleBadge}`}>
                                <img src={img} alt="icon up" />
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
