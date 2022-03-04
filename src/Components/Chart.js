import React from "react";
import ApexChart from "react-apexcharts";
import { Grid, Divider } from "@mui/material";

export const Chart = ({ crypto }) => {

  const priceLastYear = Number(parseFloat(crypto?.[0].price) + parseFloat(crypto?.[0]["365d"]?.price_change)).toFixed(
    2
  )

  console.log(priceLastYear)
  const historical_coin_chart = {
    series: [
      {
        name: crypto?.[0].id,
        data: [
          Number(crypto?.[0].price).toFixed(2),
          Number(crypto?.[0].price - crypto?.[0]["1d"]?.price_change).toFixed(
            2
          ),
          Number(crypto?.[0].price - crypto?.[0]["7d"]?.price_change).toFixed(
            2
          ),
          Number(crypto?.[0].price - crypto?.[0]["30d"]?.price_change).toFixed(
            2
          ),
          priceLastYear
          ,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Last Year",
          "Last 30 Days",
          "Last 7 Days",
          "Last Day",
          "Actual",
        ],
      },
    },
  };
  return (
    <div className="p-4">
      <Grid container>
        <Grid item md={12}>
          <Grid
            item
            className="d-flex flex-column flex-md-row justify-content-start"
          >
            <h5>View Statistic</h5>
          </Grid>
          <Grid
            item
            className=" chart d-flex flex-column flex-md-row justify-content-end mb-4"
          >
            <button value="Yesterday">Yesterday</button>
          </Grid>

          <Divider />
        </Grid>

        <Grid item md={12}>
          <ApexChart
            options={historical_coin_chart.options}
            series={historical_coin_chart.series}
            type="line"
            height={350}
          />
        </Grid>
      </Grid>
    </div>
  );
};
