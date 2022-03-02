import React from "react";
import ApexChart from "react-apexcharts";
import { Divider } from "@mui/material";

export const Chart = ({ crypto }) => {
  const historical_coin_chart = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };
  return (
    <div className="p-4">
      <Divider className="m-4" />
      <div>
        <h5>View Statistic</h5>
      </div>
      <ApexChart
        options={historical_coin_chart.options}
        series={historical_coin_chart.series}
        type="line"
        height={350}
      />
    </div>
  );
};
